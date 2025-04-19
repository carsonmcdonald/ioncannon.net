---
layout: archive
status: publish
published: true
title: Creating your own FC6 instance for EC2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 115
wordpress_url: http://www.ioncannon.net/system-administration/115/creating-your-own-fc6-instance-for-ec2/
date: '2007-01-12 10:59:18 -0500'
date_gmt: '2007-01-12 15:59:18 -0500'
categories:
- system administration
tags:
- ec2
- linux
- s3
comments:
- id: 1821
  author: Steve M
  author_email: sophware@hotmail.com
  author_url: ''
  date: '2007-01-13 17:57:13 -0500'
  date_gmt: '2007-01-13 22:57:13 -0500'
  content: "Thanks!  I was just flailing at this.  Just to make sure I wasn't screwing
    anything up, I used the script; but, I got similar results.  Some directories
    don't get created, like tls and most etc directories (only fstab and rc.local
    are in etc).\r\n\r\nI'm sure it's some newbie mistake and I'm not sure you have
    time to cater to me.  Either way, thanks for doing the work to document and script
    all these steps."
- id: 1917
  author: Ilya Grigorik
  author_email: ilya@fortehost.com
  author_url: http://www.igvita.com/blog/
  date: '2007-01-16 10:39:53 -0500'
  date_gmt: '2007-01-16 15:39:53 -0500'
  content: Awesome guide! I'll be putting it to use for one my projects very soon.
    :)
- id: 1946
  author: Debian EC2 AMI @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/118/debian-ec2-ami/
  date: '2007-01-16 21:13:09 -0500'
  date_gmt: '2007-01-17 02:13:09 -0500'
  content: "[...] After working on my FC6 AMI I started thinking about how small of
    an AMI I could create. The goal would be to have a 10 meg or less image that is
    very specialized for doing something like serving images with lighttpd or apache.
    I started very very small but the lack of console access on EC2 makes it hard
    to debug errors so I moved on to try and find a reasonable sized distro that I
    was more sure would work. I managed to find a Debian image that is pretty small
    and decided to see if I could make it work for EC2. [...]"
- id: 2011
  author: G Perry
  author_email: gperry@flenvironmental.org
  author_url: ''
  date: '2007-01-18 18:18:55 -0500'
  date_gmt: '2007-01-18 23:18:55 -0500'
  content: "There are apparently some configuration steps that are included with the
    groupinstall base.  I've tried to selectively add just a few packages (namely
    httpd and openssh-server), but I can't boot the AMI in Xen or EC2.\r\n\r\nIn Xen
    I am getting a \"can't mount /dev/sda1\" error, although the device was created
    using MAKEDEV.\r\n\r\nMaybe something is screwy with my fstab."
- id: 3294
  author: Gregory Perry
  author_email: gregp@liveammo.com
  author_url: http://www.liveammo.com
  date: '2007-02-14 19:42:02 -0500'
  date_gmt: '2007-02-15 00:42:02 -0500'
  content: You don't need to move the TLS directories out of the way, that error message
    about nosegneg is an error.  FC6 by default includes nosegneg-friendly libraries
    and that error message within the Xen Hypervisor will be fixed with subsequent
    versions.
- id: 9904
  author: Richard Shade
  author_email: rshade98@hotmail.com
  author_url: ''
  date: '2007-04-02 13:03:43 -0400'
  date_gmt: '2007-04-02 18:03:43 -0400'
  content: "I get the following error, anyone know the solution?\r\n\r\nFailed to
    add groups file for repository: base\r\nError: No Groups on which to run command"
- id: 18822
  author: How to create a Fedora 7 Instance for EC2 @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/uncategorized/128/how-to-create-a-fedora-7-instance-for-ec2/
  date: '2007-06-02 10:38:40 -0400'
  date_gmt: '2007-06-02 15:38:40 -0400'
  content: "[...] Now that Fedora 7 is out I figured it was time to update the EC2
    instance howto. It is almost exactly the same as creating a FC6 instance so if
    you want to know the details you can reference that article. [...]"
- id: 21958
  author: Andrew
  author_email: apj@iafrica.com
  author_url: ''
  date: '2007-06-22 04:53:50 -0400'
  date_gmt: '2007-06-22 09:53:50 -0400'
  content: "One thing that seems to have bitten quite a few people in both FC6 and
    FC7, is kudzu move the ifcfg-eth0 file to ifcfg-eth0.bak if an instance is rebooted.
    This causes networking not to start up on reboots after the initial launch.  kudzu
    needs to be disabled to avoid this breakage.\r\n\r\nSome other niceties would
    be:\r\na) disabling IPv6 since EC2 won't route it anycase,\r\nb) disabling zeroconf
    networking since you'll always be getting an IP from EC2.\r\nc) disabling services
    such PC Card, Bluetooth, gpm, CUPS, etc that don't really make sense in an EC2
    environment."
- id: 37657
  author: Ram
  author_email: ram.vanga@zustek.com
  author_url: http://www.zustek.com
  date: '2007-11-24 06:42:20 -0500'
  date_gmt: '2007-11-24 11:42:20 -0500'
  content: "Hi,\r\n\r\nI am creating an instance using 'loop back' file, I created
    my image file - but I'm getting the following error while bundling the Image.\r\n\r\n[root@ec2
    home]# ec2-bundle-image -i my-image.fs -k /home/.ec2/pk-xxx.pem -c /home/.ec2/cert-yyy.pem
    -u 1111111  -r i386 -p my-image -d /home/bundle\r\n\r\nSplitting /home/bundle/my-image.tar.gz.enc...\r\nCreated
    my-image.part.00\r\nCreated my-image.part.01\r\nCreated my-image.part.02\r\nCreated
    my-image.part.03\r\nCreated my-image.part.04\r\nCreated my-image.part.05\r\nCreated
    my-image.part.06\r\nCreated my-image.part.07\r\nCreated my-image.part.08\r\nCreated
    my-image.part.09\r\nCreated my-image.part.10\r\nCreated my-image.part.11\r\nCreated
    my-image.part.12\r\nCreated my-image.part.13\r\nCreated my-image.part.14\r\nCreated
    my-image.part.15\r\nCreated my-image.part.16\r\nCreated my-image.part.17\r\nCreated
    my-image.part.18\r\nCreated my-image.part.19\r\nCreated my-image.part.20\r\nCreated
    my-image.part.21\r\nCreated my-image.part.22\r\nCreated my-image.part.23\r\nCreated
    my-image.part.24\r\nCreated my-image.part.25\r\nCreated my-image.part.26\r\nCreated
    my-image.part.27\r\nCreated my-image.part.28\r\nCreated my-image.part.29\r\nCreated
    my-image.part.30\r\nCreated my-image.part.31\r\nCreated my-image.part.32\r\nCreated
    my-image.part.33\r\nCreated my-image.part.34\r\nCreated my-image.part.35\r\nCreated
    my-image.part.36\r\nCreated my-image.part.37\r\nCreated my-image.part.38\r\nGenerating
    digests for each part...\r\nDigests generated.\r\nCreating bundle manifest...\r\nError:
    private method `gsub' called for 39:Fixnum\r\nec2-bundle-image failed.\r\n\r\n\r\nAny
    Help - --\r\n\r\nRam"
- id: 42576
  author: frederic sidler
  author_email: frederic.sidler@gmail.com
  author_url: http://mixin.com
  date: '2008-01-06 05:59:12 -0500'
  date_gmt: '2008-01-06 10:59:12 -0500'
  content: "@richard shade if you use the fedora core 4 provided by amazon and try
    to do a yum groupinstall Base, you will get this error because yum 2.4.1 doesn't
    support this option. You should install a newer version of yum before trying to
    install the \"Base\".\r\nLet's try that first\r\nwget http://linux.duke.edu/projects/yum/download/3.0/yum-3.0.5.tar.gz\r\ntar
    -xvzf yum-3.0.5.tar.gz\r\ncd yum-3.0.5\r\nmake DESTDIR=/ install\r\nthen you are
    set to install the base"
- id: 48952
  author: Laurent
  author_email: laurent.bois@gmail.com
  author_url: ''
  date: '2008-02-06 05:12:38 -0500'
  date_gmt: '2008-02-06 10:12:38 -0500'
  content: "How do you debug this distro.\r\nHow do you add a stack like the Ruby
    on Rails stack (Apache/NGINX, Mongrel, Ruby, Rails, mySQL) ?"
- id: 66765
  author: Klaus
  author_email: klaus@sonnenleiter.com
  author_url: ''
  date: '2008-05-05 19:41:54 -0400'
  date_gmt: '2008-05-06 00:41:54 -0400'
  content: I have a vmware image that I'm trying to upload to EC2. Would I just cp
    -R / /mnt/ all the files in it to a disk image mounted like above? I guess I'll
    go try and update everybody else...
- id: 104881
  author: Sapeksh
  author_email: sapeksh@gmail.com
  author_url: http://none
  date: '2008-10-20 13:14:00 -0400'
  date_gmt: '2008-10-20 18:14:00 -0400'
  content: "I've been trying to create an image for CentOS for amamon EC following
    the steps provided above as well as the script provided by RightScale (http://blog.rightscale.com/2007/04/).
    In both the cases when I try and do a groupinstall of the Base I get the following
    below. I'm running the above steps from a machine already running CentOS 5 and
    version of yum is 3.0.5 as well. Any pointers will be appreciated.\r\n\r\nSetting
    up repositories\r\nReading repository metadata in from local files\r\nTraceback
    (most recent call last):\r\n  File \"/usr/bin/yum\", line 29, in ?\r\n    yummain.main(sys.argv[1:])\r\n
    \ File \"yummain.py\", line 94, in main\r\n    result, resultmsgs = base.doCommands()\r\n
    \ File \"cli.py\", line 381, in doCommands\r\n    return self.yum_cli_commands[self.basecmd].doCommand(self,
    self.basecmd, self.extcmds)\r\n  File \"yumcommands.py\", line 228, in doCommand\r\n
    \   return base.installGroups(extcmds)\r\n  File \"cli.py\", line 1071, in installGroups\r\n
    \   self.doRepoSetup()\r\n  File \"cli.py\", line 109, in doRepoSetup\r\n    self.doSackSetup(thisrepo=thisrepo)\r\n
    \ File \"__init__.py\", line 341, in doSackSetup\r\n  File \"packageSack.py\",
    line 331, in excludeArchs\r\n  File \"sqlitesack.py\", line 589, in excludeArchs\r\n
    \ File \"sqlitesack.py\", line 431, in db2class\r\n  File \"/usr/lib/python2.4/site-packages/sqlite/main.py\",
    line 97, in __getattr__\r\n    raise AttributeError, key\r\nAttributeError: CHECKSUM_VALUE"
---
I've been playing around with the <a href="http://aws.amazon.com/ec2">EC2</a> service at Amazon and figured I would document a little about how you create your own FC6 AMI. The Amazon documentation goes over everything you need to know about <a href="http://docs.amazonwebservices.com/AmazonEC2/dg/2006-10-01/">creating your own FC4 AMI</a> and if you don't want to roll your own you can use one of the <a href="http://developer.amazonwebservices.com/connect/kbcategory.jspa?categoryID=101">public AMIs</a>. Amazon just started letting people publish their own AMIs on their site so you should expect to see more as time goes by.


The first step of course is to have an EC2 enabled account. If you haven't already signed up for one there are <a href="http://aws.typepad.com/aws/2007/01/more_ec2_beta_s.html">more beta openings</a> available (as of 01/10/07) so you may still be able to get one. You will also need to be signed up for S3. Once you do that it is helpful to read the <a href="http://docs.amazonwebservices.com/AmazonEC2/gsg/2006-10-01/">getting started guide</a> and try out a few of the public AMIs. Doing so will get you to get your keys set up for S3, EC2, and SSH. In the following I assume you have read and followed the getting started guide and have set up all the keys you will need for S3, EC2, and SSH.

<h2>Creating your FC6 image</h2>
Here are the steps you need to create your FC6 image. Two notes before getting started: 1) I am using an FC6 box to run the following commands on so your luck may vary with older system and 2) Some of these can be done as a non-root user but you might as well be root for all of them. 

If you are in a hurry you may download all of the following steps in a <a href="/assets/ec2fc6/createami.sh">single script</a> that will generate the custom bootable AMI.

1) Create the image file and initialize the filesystem on it (note that I'm only making giving myself 1G of space for this install, if you think you will need more room you should create a larger file by changing the seek value):

```
dd if=/dev/zero of=fc6-i386.img bs=1M count=1 seek=1024
/sbin/mke2fs -F -j fc6-i386.img
```
2) Mount the file with a loopback device:

```
mount -o loop fc6-i386.img /mnt
```
3) Create base directories and device files:

```
mkdir /mnt/dev
mkdir /mnt/proc
mkdir /mnt/etc
for i in console null zero ; do /sbin/MAKEDEV -d /mnt/dev -x $i ; done
```
4) Create the initial fstab file:

```
cat <<EOL > /mnt/etc/fstab
/dev/sda1               /                       ext3    defaults 1 1
none                    /dev/pts                devpts  gid=5,mode=620 0 0
none                    /dev/shm                tmpfs   defaults 0 0
none                    /proc                   proc    defaults 0 0
none                    /sys                    sysfs   defaults 0 0
/dev/sda2               /mnt                    ext3    defaults 1 2
/dev/sda3               swap                    swap    defaults 0 0
EOL
```
5) Mount the proc under the new root filesystem so yum will work correctly:

```
mount -t proc none /mnt/proc
```
6) Create your a yum configuration file:

```
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
mirrorlist=http://fedora.redhat.com/download/mirrors/fedora-core-6
enabled=1

[updates-released]
name=Fedora Core 6 - i386 - Released Updates
mirrorlist=http://fedora.redhat.com/download/mirrors/updates-released-fc6
enabled=1
EOL
```
7) Run yum to install the base group of packages to your root filesystem (this may take some time but you should see it progress, I have had all kinds of trouble with yum in the past so if it hangs you may want to kill it and try again):

```
yum -c /tmp/yumec2.conf --installroot=/mnt -y groupinstall Base
```
8) Clean the yum cache:

```
yum -c /tmp/yumec2.conf --installroot=/mnt -y clean packages
```
9) Move the TLS directory out of the way:

```
mv /mnt/lib/tls /mnt/lib/tls-disabled
```
10) Modify the boot script to download your SSH key and stick it in root's directory:

```
cat <<EOL >> /mnt/etc/rc.local
if [ ! -d /root/.ssh ] ; then
        mkdir -p /root/.ssh
        chmod 700 /root/.ssh
fi
# Fetch public key using HTTP
curl http://169.254.169.254/1.0//meta-data/public-keys/0/openssl > /tmp/my-key
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
```
11) Set sshd to allow remote root connections and now hang on DNS problems:

```
cat <<EOL >> /mnt/etc/ssh/sshd_config
UseDNS  no
PermitRootLogin without-password
EOL
```
12) Create the networking scripts:

```
cat <<EOL > /mnt/etc/sysconfig/network
NETWORKING=yes
HOSTNAME=localhost.localdomain
EOL

cat <<EOL > /mnt/etc/sysconfig/network-scripts/ifcfg-eth0
ONBOOT=yes
DEVICE=eth0
BOOTPROTO=dhcp
EOL
```
13) Sync and umount your root filesystem:

```
sync
umount /mnt/proc
umount /mnt
```
You have now created your very own bootable AMI. If you want to fiddle with it from this point you may continue to use the yum command as in the above examples or you can also remount the filesystem and chroot to it using a command like this:

```
chroot /mnt /bin/sh
```
One thing to remember if you use chroot like this is that everything is local now. You will want to mount the proc filesystem and probably add entries to /etc/resolve.conf so any hostnames you try to resolve will work.

The next step is to get the AMI to S3 so that it can be booted.

<h2>Bundling and Uploading your AMI</h2>
Everything you need to know about bundling and uploading your custom AMI is in <a href="http://docs.amazonwebservices.com/AmazonEC2/dg/2006-10-01/">the developer documentation</a> under "Working With AMIs" then "Bundling an AMI".

One key to remember here is that you need to start your instance with the -k option to allow the key to be copied into place. If you don't do that or specify the incorrect key name you will end up with an instance you can't log into.



