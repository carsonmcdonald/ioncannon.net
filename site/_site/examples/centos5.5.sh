#!/bin/sh

cat <<EOL | fdisk /dev/sdh
n
p
1
1
+100M
n
p
2


a
1
w
EOL

echo "y" | mkfs.ext3 /dev/sdh1
echo "y" | mkfs.ext3 /dev/sdh2
mount /dev/sdh2 /mnt
mkdir /mnt/boot
mount /dev/sdh1 /mnt/boot

mkdir /mnt/dev
mkdir /mnt/proc
mkdir /mnt/etc

for i in console null zero ; do /sbin/MAKEDEV -d /mnt/dev -x $i ; done

cat <<EOL > /mnt/etc/fstab
/dev/sda1               /boot                   ext3    defaults 1 1
/dev/sda2               /                       ext3    defaults 1 2
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

[os]
name=CentOS 5.5 - i386 - OS
mirrorlist=http://mirrorlist.centos.org/?release=5&arch=i386&repo=os
enabled=1

[updates]
name=CentOS 5.5 - i386 - Updates
mirrorlist=http://mirrorlist.centos.org/?release=5&arch=i386&repo=updates
enabled=1
EOL

yum -c /tmp/yumec2.conf --installroot=/mnt -y groupinstall Base

yum -c /tmp/yumec2.conf --installroot=/mnt -y install openssh-server
yum -c /tmp/yumec2.conf --installroot=/mnt -y install grub
yum -c /tmp/yumec2.conf --installroot=/mnt -y install kernel-xen.i686

yum -c /tmp/yumec2.conf --installroot=/mnt -y clean packages

echo "UseDNS no" >> /mnt/etc/ssh/sshd_config
echo "PermitRootLogin yes" >> /mnt/etc/ssh/sshd_config

cat <<EOL > /mnt/etc/sysconfig/network
NETWORKING=yes
EOL

cat <<EOL > /mnt/etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE=eth0
BOOTPROTO=dhcp
ONBOOT=yes
TYPE=Ethernet
USERCTL=yes
PEERDNS=yes
IPV6INIT=no
EOL

echo "/sbin/MAKEDEV /dev/urandom" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/random" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/sdc" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/sdc1" >> /mnt/etc/rc.sysinit
echo "/sbin/MAKEDEV /dev/sdc2" >> /mnt/etc/rc.sysinit

chroot /mnt pwconv 
chroot /mnt echo "mypassword" | passwd --stdin root

chroot /mnt chkconfig --level 2345 NetworkManager off
chroot /mnt chkconfig --level 2345 network on
chroot /mnt chkconfig --level 2345 avahi-daemon off
chroot /mnt chkconfig --level 2345 firstboot off

cp /mnt/boot/initrd-2.6.18-194.8.1.el5xen.img /mnt/boot/initrd-2.6.18-194.8.1.el5xen.img.orig
mkdir /tmp/initrdextract
cd /tmp/initrdextract
gzip -dc /mnt/boot/initrd-2.6.18-194.8.1.el5xen.img | cpio -id
cp /mnt/lib/modules/2.6.18-194.8.1.el5xen/kernel/drivers/xen/blkfront/xenblk.ko lib
cp /mnt/lib/modules/2.6.18-194.8.1.el5xen/kernel/drivers/xen/netfront/xennet.ko lib
chmod -x lib/xenblk.ko
chmod -x lib/xennet.ko
cat <<EOL > init
#!/bin/nash

mount -t proc /proc /proc
setquiet
echo Mounting proc filesystem
echo Mounting sysfs filesystem
mount -t sysfs /sys /sys
echo Creating /dev
mount -o mode=0755 -t tmpfs /dev /dev
mkdir /dev/pts
mount -t devpts -o gid=5,mode=620 /dev/pts /dev/pts
mkdir /dev/shm
mkdir /dev/mapper
echo Creating initial device nodes
mknod /dev/null c 1 3
mknod /dev/zero c 1 5
mknod /dev/urandom c 1 9
mknod /dev/systty c 4 0
mknod /dev/tty c 5 0
mknod /dev/console c 5 1
mknod /dev/ptmx c 5 2
mknod /dev/rtc c 10 135
mknod /dev/tty0 c 4 0
mknod /dev/tty1 c 4 1
mknod /dev/tty2 c 4 2
mknod /dev/tty3 c 4 3
mknod /dev/tty4 c 4 4
mknod /dev/tty5 c 4 5
mknod /dev/tty6 c 4 6
mknod /dev/tty7 c 4 7
mknod /dev/tty8 c 4 8
mknod /dev/tty9 c 4 9
mknod /dev/tty10 c 4 10
mknod /dev/tty11 c 4 11
mknod /dev/tty12 c 4 12
mknod /dev/ttyS0 c 4 64
mknod /dev/ttyS1 c 4 65
mknod /dev/ttyS2 c 4 66
mknod /dev/ttyS3 c 4 67
echo Setting up hotplug.
hotplug
echo Creating block device nodes.
mkblkdevs
echo "Loading jbd.ko module"
insmod /lib/jbd.ko 
echo "Loading ext3.ko module"
insmod /lib/ext3.ko 
echo "Loading xenblk.ko module"
insmod /lib/xenblk.ko 
echo "Loading xennet.ko module"
insmod /lib/xennet.ko 
mkblkdevs
echo Scanning and configuring dmraid supported devices
resume /dev/sdc2
echo Creating root device.
mkrootdev -t ext3 -o defaults,ro /dev/sda1
echo Mounting root filesystem.
mount /sysroot
echo Setting up other filesystems.
setuproot
echo Switching to new root and running init.
switchroot
EOL
find ./ | cpio -H newc -o | gzip > /mnt/boot/initrd-2.6.18-194.8.1.el5xen.img
cd -

chroot /mnt grub-install /dev/sdh

cat <<EOL > /mnt/boot/grub/menu.lst
default 0
timeout 1
title CentOS5.5
     root (hd0,0)
     kernel /boot/vmlinuz-2.6.18-194.8.1.el5xen root=/dev/sda2
     initrd /boot/initrd-2.6.18-194.8.1.el5xen.img
EOL

mkdir /mnt/boot/boot/
mv /mnt/boot/* /mnt/boot/boot/ 2> /dev/null > /dev/null

sync
umount /mnt/proc
umount /mnt/boot
umount /mnt
