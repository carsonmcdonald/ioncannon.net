#!/bin/sh

echo "y" | mkfs.ext3 /dev/sdh
mount /dev/sdh /mnt

mkdir /mnt/dev
mkdir /mnt/proc
mkdir /mnt/etc

for i in console null zero ; do /sbin/MAKEDEV -d /mnt/dev -x $i ; done

cat <<EOL > /mnt/etc/fstab
/dev/sda1               /                       ext3    defaults 1 1
none                    /dev/pts                devpts  gid=5,mode=620 0 0
none                    /dev/shm                tmpfs   defaults 0 0
none                    /proc                   proc    defaults 0 0
none                    /sys                    sysfs   defaults 0 0
/dev/sdc1               /mnt                    ext3    defaults 0 0
/dev/sdc2               swap                    swap    defaults 0 0
EOL

mount -t proc none /mnt/proc

cat <<EOL > /tmp/yumec2.conf
[main]
cachedir=/var/cache/yum
debuglevel=2
logfile=/var/log/yum.log
exclude=*-debuginfo
gpgcheck=0
obsoletes=1
reposdir=/dev/null

[base]
name=Fedora 12 – i386 – Base
mirrorlist=http://mirrors.fedoraproject.org/mirrorlist?repo=fedora-12&arch=i386
enabled=1

[updates-released]
name=Fedora 12 – i386 – Released Updates
mirrorlist=http://mirrors.fedoraproject.org/mirrorlist?repo=updates-released-f12&arch=i386
enabled=1
EOL

yum -c /tmp/yumec2.conf --installroot=/mnt -y groupinstall Base
yum -c /tmp/yumec2.conf --installroot=/mnt -y install openssh-server

yum -c /tmp/yumec2.conf --installroot=/mnt -y clean packages

echo "UseDNS no" >> /mnt/etc/ssh/sshd_config
echo "PermitRootLogin without-password" >> /mnt/etc/ssh/sshd_config

cp /etc/rc.local /mnt/etc/
cp /etc/sysconfig/network /mnt/etc/sysconfig/network
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /mnt/etc/sysconfig/network-scripts/ifcfg-eth0
cp /usr/local/sbin/* /mnt/usr/local/sbin/
cp -Rp /lib/modules/2.6.21.7-2.fc8xen/ /mnt/lib/modules/

echo "/sbin/MAKEDEV /dev/urandom" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/random" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/sdc" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/sdc1" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/sdc2" >> /mnt/etc/rc.sysinit

cat <<EOF >> /mnt/etc/rc.sysinit
# The following will partition the local drive and set up swap
cat <<EOL | fdisk /dev/sdc
n
p
1
1
+140G
n
p
2


w
EOL
mkswap /dev/sdc2
EOF

mv /mnt/lib/tls /mnt/lib/tls.disabled
echo "hwcap 0 nosegneg" >> /mnt/etc/ld.so.conf.d/kernelcap-2.6.21.7-2.fc8.conf

chroot /mnt chkconfig --level 2345 NetworkManager off
chroot /mnt chkconfig --level 2345 network on

sync
umount /mnt/proc
umount /mnt
