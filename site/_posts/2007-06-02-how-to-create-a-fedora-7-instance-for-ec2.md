---
layout: archive
status: publish
published: true
title: How to create a Fedora 7 Instance for EC2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 128
wordpress_url: http://www.ioncannon.net/uncategorized/128/how-to-create-a-fedora-7-instance-for-ec2/
date: '2007-06-02 10:38:34 -0400'
date_gmt: '2007-06-02 15:38:34 -0400'
categories:
- system administration
tags:
- ec2
- linux
- Fedora
comments:
- id: 23188
  author: JetztGradNet
  author_email: blogcomments@jetztgrad.net
  author_url: ''
  date: '2007-07-03 06:09:04 -0400'
  date_gmt: '2007-07-03 11:09:04 -0400'
  content: "Hi!\r\n\r\nThanks for this handy script, I will try it!\r\n\r\nOne small
    thing: the names of the yum repositories still contain \"FC 6\" (but the urls
    seem to be ok)...\r\n\r\nRegards,\r\n\r\nJetztGradNet"
- id: 23519
  author: Bryan Field-Elliot
  author_email: bryan@strategoit.com
  author_url: ''
  date: '2007-07-06 12:24:08 -0400'
  date_gmt: '2007-07-06 17:24:08 -0400'
  content: "I noticed this error while it was installing the kernel:\r\n\r\nInstalling:
    kernel                       ##################### [223/324] \r\nerror opening
    /sys/block: No such file or directory\r\nerror opening /sys/block: No such file
    or directory\r\n\r\nShould we be creating the /sys/block directory before installing?"
- id: 26098
  author: Blake
  author_email: blaker@gmail.com
  author_url: ''
  date: '2007-08-03 21:48:20 -0400'
  date_gmt: '2007-08-04 02:48:20 -0400'
  content: "curl http://169.254.169.254/1.0/meta-data/public-keys/0/openssh-key >
    /tmp/my-key\r\n\r\nwill work better than:\r\n\r\ncurl http://169.254.169.254/1.0/meta-data/public-keys/0/openssl
    > /tmp/my-key\r\n\r\nIf you look at your authorized_keys file, you'll see a bunch
    of dorked HTML in there. It happens to work because you grab /mnt/openssh_id.pub
    and smack it in there. This happens on your Fedora 7 public image that you've
    provided also.\r\n\r\nOther than that, this seemed to work OK. I haven't done
    the EC2 image part of this yet, so we'll see how that goes.\r\n\r\nThanks for
    the work."
---
Now that Fedora 7 is out I figured it was time to update the EC2 instance howto. It is almost exactly the same as <a href="http://www.ioncannon.net/system-administration/115/creating-your-own-fc6-instance-for-ec2/">creating a FC6 instance</a> so if you want to know the details you can reference that article.


Here is an updated script for creating the AMI the only change between this and the one for FC6 is the yum repo and the image name:

```
#!/bin/sh

dd if=/dev/zero of=fedora7-i386.img bs=1M count=1 seek=1024
/sbin/mke2fs -F -j fedora7-i386.img

mount -o loop fedora7-i386.img /mnt

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
/dev/sda2               /mnt                    ext3    defaults 1 2
/dev/sda3               swap                    swap    defaults 0 0
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
name=Fedora Core 6 - i386 - Base
mirrorlist=http://mirrors.fedoraproject.org/mirrorlist?repo=fedora-7&arch=i386
enabled=1

[updates-released]
name=Fedora Core 6 - i386 - Released Updates
mirrorlist=http://mirrors.fedoraproject.org/mirrorlist?repo=updates-released-f7&arch=i386
enabled=1
EOL

yum -c /tmp/yumec2.conf --installroot=/mnt -y groupinstall Base

yum -c /tmp/yumec2.conf --installroot=/mnt -y clean packages

mv /mnt/lib/tls /mnt/lib/tls-disabled

cat <<EOL >> /mnt/etc/rc.local
if [ ! -d /root/.ssh ] ; then
        mkdir -p /root/.ssh
        chmod 700 /root/.ssh
fi
# Fetch public key using HTTP
curl http://169.254.169.254/1.0/meta-data/public-keys/0/openssl > /tmp/my-key
if [ $? -eq 0 ] ; then
        cat /tmp/my-key >> /root/.ssh/authorized_keys
        chmod 600 /root/.ssh/authorized_keys
        rm /tmp/my-key
fi
# or fetch public key using the file in the ephemeral store:
if [ -e /mnt/openssh_id.pub ] ; then
        cat /mnt/openssh_id.pub >> /root/.ssh/authorized_keys
        chmod 600 /root/.ssh/authorized_keys
fi
EOL

cat <<EOL >> /mnt/etc/ssh/sshd_config
UseDNS  no
PermitRootLogin without-password
EOL

cat <<EOL > /mnt/etc/sysconfig/network
NETWORKING=yes
HOSTNAME=localhost.localdomain
EOL

cat <<EOL > /mnt/etc/sysconfig/network-scripts/ifcfg-eth0
ONBOOT=yes
DEVICE=eth0
BOOTPROTO=dhcp
EOL

sync
umount /mnt/proc
umount /mnt
```


