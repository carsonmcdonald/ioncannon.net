---
layout: archive
status: publish
published: true
title: Debian EC2 AMI
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 118
wordpress_url: http://www.ioncannon.net/system-administration/118/debian-ec2-ami/
date: '2007-01-16 21:13:05 -0500'
date_gmt: '2007-01-17 02:13:05 -0500'
categories:
- system administration
tags:
- ec2
- linux
- Debian
comments:
- id: 2804
  author: Dave Billington
  author_email: david.billington@blueonder.co.uk
  author_url: ''
  date: '2007-02-06 12:24:40 -0500'
  date_gmt: '2007-02-06 17:24:40 -0500'
  content: "Cool. Many thanks for getting this all together and doing such a nice
    job of publishing it. EC2 is making my head spin. Any chance you could put the
    resulting small Debian AMI on the Amazon Public AMI site? this link gives full
    instructions and I&acirc;&euro;&trade;m sure many Debian users would be very grateful!\r\n\r\nhttp://developer.amazonwebservices.com/connect/entry.jspa?entryID=530&ref=featured\r\n\r\nCheers,\r\nDave"
- id: 2857
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2007-02-07 08:35:07 -0500'
  date_gmt: '2007-02-07 13:35:07 -0500'
  content: I have been planing on doing that but I just haven't had time yet. Maybe
    by this weekend I can get to it.
- id: 3097
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2007-02-11 15:20:48 -0500'
  date_gmt: '2007-02-11 20:20:48 -0500'
  content: "The public AMI is available now: ami-8db95ce4\r\n\r\nIt turns out the
    script had an error in the way it reset the root password as well. I have updated
    it to fix that problem."
- id: 28142
  author: anon
  author_email: anon@nowhere.com
  author_url: ''
  date: '2007-09-05 02:56:53 -0400'
  date_gmt: '2007-09-05 07:56:53 -0400'
  content: "not sure if this is helpful, but just in case, one can get console access
    to EC instances. There is documentation here:\r\nhttp://docs.amazonwebservices.com/AWSEC2/2007-03-01/DeveloperGuide/instance-console.html\r\n\r\nin
    the dev. guide under 'Launching and Using...'->'Using Get Console...'"
---
After working on my <a href="http://www.ioncannon.net/system-administration/115/creating-your-own-fc6-instance-for-ec2/">FC6 AMI</a> I started thinking about how small of an AMI I could create. The goal would be to have a 10 meg or less image that is very specialized for doing something like serving images with lighttpd or apache. I started very very small but the lack of console access on EC2 makes it hard to debug errors so I moved on to try and find a reasonable sized distro that I was more sure would work. I managed to find a Debian image that is pretty small and decided to see if I could make it work for EC2.


While looking around I found this <a href="http://jailtime.org/download:debian:v3.1">Debian 3.1</a> Xen image pretty much ready to go. I downloaded it and wrote the following script that can be used to update the image so that it will work as an EC2 AMI.

I assume here that you have downloaded the image from the above site and that the name of the image is still debian.3-1.20061221.img.tar.bz2, if it is not you can modify the script to use the newly named file.

```
#!/bin/sh

tar xvjf debian.3-1.20061221.img.tar.bz2
rm -f debian.3-1.xen2.cfg
rm -f debian.3-1.xen3.cfg
rm -f debian.swap

mount -o loop debian.3-1.img /mnt

cat <<EOL > /mnt/etc/fstab
/dev/sda1       /       ext3    errors=remount-ro       0       1
proc            /proc   proc    defaults                0       0
/dev/sda2       /mnt    ext3    errors=remount-ro       0       2
/dev/sda3       none    swap    sw                      0       0
EOL

sed -i -e 's/PermitRootLogin no/#PermitRootLogin no/g' /mnt/etc/ssh/sshd_config

cat <<EOL >> /mnt/etc/ssh/sshd_config
UseDNS  no
PermitRootLogin without-password
EOL

cat <<EOL > /mnt/etc/init.d/aws-auth.sh
#!/bin/sh
if [ ! -d /root/.ssh ] ; then
        mkdir -p /root/.ssh
        chmod 700 /root/.ssh
fi
# or fetch public key using the file in the ephemeral store:
if [ -e /mnt/openssh_id.pub ] ; then
        cat /mnt/openssh_id.pub >> /root/.ssh/authorized_keys
        chmod 600 /root/.ssh/authorized_keys
fi
EOL

chmod +x /mnt/etc/init.d/aws-auth.sh

cd /mnt/etc/rcS.d
ln -s ../init.d/aws-auth.sh S41aws-auth
cd -

touch /mnt/.firstrun

cat <<EOL > /mnt/etc/init.d/firstrun.sh
#!/bin/sh
if [ -f "/.firstrun" ] ; then
  dd if=/dev/urandom count=50|md5sum > /tmp/p.out
  POUT=\`cat /tmp/p.out | cut -d" " -f1-1\`
  rm -f /tmp/p.out
  /usr/sbin/usermod -p \$POUT root
  rm -f /.firstrun
fi
EOL

chmod +x /mnt/etc/init.d/firstrun.sh

cd /mnt/etc/rcS.d
ln -s ../init.d/firstrun.sh S39firstrun
cd -

sync
umount /mnt
```
After running the script you will have 45 meg image that is ready to run on EC2. Compared to any of the currently available public AMIs this is very small.

I plan on trying to see if I can get an even smaller image before I start creating images for each application I have in mind.



