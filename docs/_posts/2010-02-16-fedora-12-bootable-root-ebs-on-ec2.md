---
layout: archive
status: publish
published: true
title: Fedora 12 Bootable Root EBS on EC2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 894
wordpress_url: http://www.ioncannon.net/?p=894
date: '2010-02-16 07:30:13 -0500'
date_gmt: '2010-02-16 12:30:13 -0500'
categories:
- system administration
tags:
- EBS
- ec2
- Fedora
comments:
- id: 163538
  author: Mis Tigi
  author_email: mistigi+ioncannon@gmail.com
  author_url: ''
  date: '2010-02-19 13:28:37 -0500'
  date_gmt: '2010-02-19 18:28:37 -0500'
  content: "Thats very helpful, I was able to do the upgrade, however in my case I
    have some stuff already installed, so I had to uninstall apache httpd before doing
    that otherwise I was getting some errors.\r\nAlso I had to remove kernel-xen and
    smbios-utils-python\r\n\r\nAny chance for for the corresponding links for the
    x86_64 bit version ?"
- id: 163752
  author: Building HipHop PHP for Fedora 12 on 64 bit and 32 bit Systems
  author_email: ''
  author_url: http://www.ioncannon.net/programming/918/building-hiphop-php-for-fedora-12-on-64-bit-and-32-bit-systems/
  date: '2010-02-23 06:14:07 -0500'
  date_gmt: '2010-02-23 11:14:07 -0500'
  content: "[...] IONCANNON Thoughts on Software Development and Engineering   Skip
    to content AboutArchivesProjectsGoogle Analytics Dashboard Wordpress WidgetHTTP
    Live Video Stream Segmenter and DistributorGeeQE &#8211; Native Stack Overflow
    iPhone ApplicationBuilding GeeQEMiscellaneous ProjectsFedora 12 Screenshots and
    VideosMozilla Jetpack &#8211; Google Reader Starred Post BrowserContactSitemap
    \      &laquo; Fedora 12 Bootable Root EBS on EC2 [...]"
- id: 163780
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-02-23 10:23:24 -0500'
  date_gmt: '2010-02-23 15:23:24 -0500'
  content: "@Mis Actually I needed a 64 bit version recently so I cooked up a script
    to upgrade Amazon's Basic 64-bit Fedora Core 8 (AMI Id: ami-86db39ef) to Fedora
    12. You can grab it from here: http://www.ioncannon.net/examples/64bitfedora12ec2.sh
    You don't need to do much different but there are a few extra packages that have
    to be removed before the upgrade."
- id: 164013
  author: Mis Tigi
  author_email: mistigi+ioncannon@gmail.com
  author_url: ''
  date: '2010-02-25 15:40:30 -0500'
  date_gmt: '2010-02-25 20:40:30 -0500'
  content: "@carson Thanks!"
- id: 164033
  author: Fazle Rokib
  author_email: fazle@intellicoding.com
  author_url: http://IntelliCoding.com
  date: '2010-02-25 22:17:13 -0500'
  date_gmt: '2010-02-26 03:17:13 -0500'
  content: "Hi Carson,\r\nVery helpful tutorial. I have been trying to upgrade my
    FC-8 ami to FC-12 for last two days. I was only successful after following this
    script. I have taken your second approach that creates a separate volume instead
    of upgrading the existing one. I had difficulty making the  '--block-device-mapping'
    option to work in my ec2-register command. So, I deleted this option and it worked
    perfectly. Another thing I noticed is that the FC-8 basic AMI that Amazon supplied
    has all ec2 commands except the ec2-register. I do not know why! It all worked
    after I downloaded the EC2 tools from amazon to my local computer and set the
    environment correctly.\r\n\r\nThank you very much for this helpful tutorial. \r\n\r\n-Fazle
    Rokib"
- id: 164276
  author: Stephen Kraushaar
  author_email: skraushaar@gmail.com
  author_url: http://nova-initia.com
  date: '2010-02-28 22:17:09 -0500'
  date_gmt: '2010-03-01 03:17:09 -0500'
  content: "A couple of notes for things I ran into while upgrading an EC2 environment.\r\n\r\nQ:
    Yum gives errors in <em>DeviceKit-disks-*.*</em> after upgrade to Fedora 10\r\nA:
    You have old kernels lying around. Use ``` to identify
    and ``` to remove them.\r\n\r\nQ: Yum
    gives errors <em>ERR_OUT: : Bad address</em>\r\nA: It's due to <em>smbios-utils-python</em>.<cite>
    If you're in an EC2 environment (no bios) it's likely ok to remove: ```yum
    remove smbios-utils-python```. </cite>Reference: <a href=\"http://lordoftheping.blogspot.com/2010/02/amazon-ec2-very-old-fedora-image.html\"
    rel=\"nofollow\">Mathieu Chateau</a>\r\n\r\nQ: Apache failed, or <em>libssl.so.*</em>
    & <em>libcrypto.so.*</em> are missing\r\nA: These versions are mssing the
    symlinks they require. Easy fix, go symlink them to the newest versions in <em>/lib</em>\r\n\r\nQ:MySQL
    Broke during this process!\r\nA: ```\r\n\r\nQ: I just
    screwed the whole thing up!\r\nA: So did I the first time around. I found it useful
    to reboot the instance after each yum update / before rpm.  If anything it slowed
    me down enough to read, but it can't hurt. Using ``` shouldn't
    lose your instance, so no worries.\r\n\r\nThanks for the write-up <a href=\"/author/admin/\"
    rel=\"nofollow\">Carson</a>, you saved me a lot of hassle."
- id: 164294
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-01 10:33:17 -0500'
  date_gmt: '2010-03-01 15:33:17 -0500'
  content: "@stephen Thanks for the extra info."
- id: 164340
  author: lukasware
  author_email: chris.lukas@gmail.com
  author_url: ''
  date: '2010-03-02 12:01:43 -0500'
  date_gmt: '2010-03-02 17:01:43 -0500'
  content: "Which AKI / ARI are you using?   I assume the ones that are used with\r\nthe
    Fedora 8 kernel AMI.   Then there is a mis-match of the running kernel and\r\nthe
    kernel modules on disk.   Anyone know of a plan to sync Fedora 12 AMI/AKI/ARI?"
- id: 164480
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-03 08:30:38 -0500'
  date_gmt: '2010-03-03 13:30:38 -0500'
  content: "@lukasware the ec2-register command above is where the AKI/ARI are specified.
    I've set it up to use aki-a71cf9ce and ari-a51cf9cc and I believe those were from
    one of the latest Ubuntu AMIs."
- id: 164745
  author: Fedora EC2
  author_email: user@host.com
  author_url: ''
  date: '2010-03-06 19:45:18 -0500'
  date_gmt: '2010-03-07 00:45:18 -0500'
  content: "Carson, you should take a look @ https://fedoraproject.org/wiki/Features/FedoraOnEC2
    \r\nWill not help you 'right now' however things are moving in the right direction
    for up to date FC releases on EC2 and not FC8 kernel + newer rpm."
- id: 165072
  author: Tim
  author_email: cchung@writeme.com
  author_url: ''
  date: '2010-03-12 04:02:07 -0500'
  date_gmt: '2010-03-12 09:02:07 -0500'
  content: 'Thank you very much, Carson! I was able to follow your instructions to
    upgrade Fedora 8 all the way to Fedora 12 (upgrade path)! Unfortunately, I can''t
    follow the "shrinking" instructions because of "cpipe: command not found". (I
    used the same AKI/ARI). Since I really want to have smaller root, I started again
    but took "from scratch path" at the second try. However, the script ran until
    the yum command, where it complains "Error: Missing Dependency: nss-util = 3.12.6
    is needed by package nss-3.12.6-1.2.fc12.i686 (updates-released)". Would you please
    advise on these two showstopers? Thanks!'
- id: 165074
  author: Tim
  author_email: cchung@writeme.com
  author_url: ''
  date: '2010-03-12 05:42:08 -0500'
  date_gmt: '2010-03-12 10:42:08 -0500'
  content: "I am sorry that the previous post is wrong. The \"upgrade path\" was successful
    up to release 11, but didn't go through release 12 upgrade. It had the same error
    about missing dependencies for \"nspr\", \"nss-util\". (\"cat /etc/issue\" command
    returned \"Fedora release 12\", so I thought the upgrade was successful.)\r\n\r\nSomebody
    had just posted the same problem <a href=\"http://forums.fedoraforum.org/showthread.php?p=1340409\"
    rel=\"nofollow\">here</a> on Fedora forum a few minutes back, and a solution was
    also posted."
- id: 165076
  author: Tim
  author_email: cchung@writeme.com
  author_url: ''
  date: '2010-03-12 06:21:50 -0500'
  date_gmt: '2010-03-12 11:21:50 -0500'
  content: "To be exact for the solution, you can get nss-util-3.12.6-1.fc12.i686.rpm
    and nspr-4.8.4-1.2.fc12.i686.rpm from http://mirror2.atrpms.net/fedora/linux/updates/testing/12/i386/
    \r\n\r\nThis problem may be a temporary release sync issue (note the \"testing\"
    here...), but I have no prior Fedora experience to speak more into this. I do
    get Fedora upgraded to release 12. Thanks, Carson!"
- id: 165907
  author: David Parks
  author_email: davidparks21@yahoo.com
  author_url: ''
  date: '2010-03-20 22:54:33 -0400'
  date_gmt: '2010-03-21 03:54:33 -0400'
  content: "You are a god-send, this is exactly what I\"ve been struggling with all
    day today (trying to take some other paths). Thank you a thousand times over for
    going to the effort of putting this documentation together for the rest of us.\r\n\r\nFor
    me, the upgrade went fine, but I did have a minor snag with the ephemeral storage,
    which I see others bumped into.\r\n\r\nThe storage locations for ephemeral devices
    varies by your machine type (the example assumes one of the larger instances I
    believe). Here is a link to find the location for your machine type:\r\n\r\nhttp://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/index.html?concepts-amis-and-instances.html#instance-types\r\n\r\nAlso,
    I needed to put that command in quotes, here is what worked for me with a m1.small
    instance:\r\n\r\nec2-register -n \"Fedora12Base\" -d \"Clean Fedora 12 Image on
    2GB EBS w/ ephemeral enabled\" --block-device-mapping \"/dev/sda2=ephemeral0\"
    --snapshot  --architecture i386 --kernel aki-a71cf9ce --ramdisk ari-a51cf9cc -K
    c:\\myx509PrivateKeyFile.pem -C c:\\myx509Cert.pem\r\n\r\nAgain, brilliant post,
    many thanks for removing my feet from this fire they've been toasting over all
    day!"
- id: 165985
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-22 08:13:42 -0400'
  date_gmt: '2010-03-22 13:13:42 -0400'
  content: "@David thanks for that tip. I never noticed that the ephemeral storage
    shows up differently for different devices. For anyone trying to figure this out
    the direct link to the page with each instance type and storage device is: http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/instance-storage-concepts.html"
- id: 166149
  author: Ernest Mueller
  author_email: ernest.mueller@ni.com
  author_url: http://www.webadminblog.com
  date: '2010-03-24 10:15:16 -0400'
  date_gmt: '2010-03-24 15:15:16 -0400'
  content: Hey, question, what kernel version is that AKI/ARI supposed to be?  I went
    through this process and have a lovely working instance but it claims it's  2.6.21.7-2.fc8xen
    - the starter fedora 8 I'm basing this all off of (ami-84db39ed) has 2.6.21.7-2.ec2.v1.2.fc8xen...  I
    thought it would be a higher version?
- id: 166340
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-27 12:16:46 -0400'
  date_gmt: '2010-03-27 17:16:46 -0400'
  content: The instructions have it set up to use aki-a71cf9ce and ari-a51cf9cc from
    the Ubuntu AMI.
- id: 166447
  author: Jeffrey W. Baker
  author_email: jwbaker@gmail.com
  author_url: ''
  date: '2010-03-29 13:05:41 -0400'
  date_gmt: '2010-03-29 18:05:41 -0400'
  content: Carson, thanks for the great tips.  I made an fc12 x86_64 AMI based on
    your page but the problem with using the Ubuntu kernel is that you don't have
    the Ubuntu kernel modules on disk.  There's no way to load md, for instance, or
    xfs.  Any way around that?
- id: 166660
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-31 19:51:34 -0400'
  date_gmt: '2010-04-01 00:51:34 -0400'
  content: I'm not sure if you could get the modules working under Fedora or not,
    you could give it a try and see if it boots. Someone mentioned that there is work
    going on to make the Fedora 13 kernel and ramdisk available on EC2 so that may
    be worth waiting for.
- id: 166975
  author: Ernest Mueller
  author_email: ernest.mueller@ni.com
  author_url: http://www.webadminblog.com
  date: '2010-04-05 09:17:51 -0400'
  date_gmt: '2010-04-05 14:17:51 -0400'
  content: "Hey, I'm having a problem with my instances built this way.\r\n\r\nEvery
    time I reboot, /dev/null goes to  permissions 600.  \r\n\r\nudev is set up to
    do the right thing...\r\n/lib/udev/rules.d/50-udev-default.rules:KERNEL==\"null|zero|full|random|urandom\",
    MODE=\"0666\"\r\n\r\nBut I saw some posts about udev + Ubuntu kernels on ec2 not
    running?\r\n\r\nI rm -f /dev/null;mknod -m 0666 /dev/null c 1 3, and then it's
    OK, but once I reboot it's bad again.  Any ideas?"
- id: 170446
  author: Lingji Chen
  author_email: lingji.chen@gmail.com
  author_url: ''
  date: '2010-05-22 09:34:47 -0400'
  date_gmt: '2010-05-22 14:34:47 -0400'
  content: "Thanks a lot, Carson!\r\n\r\nI followed the instructions and got an instance
    running. The first thing I did was of course to issue the command \"uname -a\"
    and expect to see the new kernel version, but it reports \"2.6.21.7-2.fc8xen\".
    I kept thinking that I did something wrong; two comments above asked basically
    the same question (e.g., \"what kernel version is that AKI/ARI supposed to be?\")
    but the answers did not explain.\r\n\r\nIn any case, when I do something like
    \"yum install octave,\" the FC12 packages are fetched, so IT IS FC12 after all,
    even though it is not reported so by uname. Anybody cares to enlighten us on this?"
- id: 175172
  author: AWS User
  author_email: unabletogiverealemail@gmail.com
  author_url: ''
  date: '2010-07-14 16:00:52 -0400'
  date_gmt: '2010-07-14 21:00:52 -0400'
  content: "Hi. I was very excited about your script and tried it out on my AWS account.
    However, I get the following message. The only change I made was that i changed
    the device from /dev/sdh to /dev/sdc. I also tried changing everything to 13 for
    Fedora 13 and that did not work either - I saw the same errors.  Thanks very much
    for any help with this!\r\n\r\n...lots of rpmlib errors...\r\nrpmlib(PayloadIsXz)
    is needed by glibc-common-2.11.2-1.i686\r\nrpmlib(FileDigests) is needed by grep-2.6.3-1.fc12.i686\r\nrpmlib(PayloadIsXz)
    is needed by grep-2.6.3-1.fc12.i686\r\nComplete!\r\n(1, [u'Please report this
    error in http://yum.baseurl.org/report'])\r\n365 package files removed\r\ncreatefedora12bootebs.sh:
    line 50: /mnt/etc/ssh/sshd_config: No such file or directory\r\ncreatefedora12bootebs.sh:
    line 51: /mnt/etc/ssh/sshd_config: No such file or directory\r\ncp: cannot create
    regular file `/mnt/etc/sysconfig/network': No such file or directory\r\ncp: cannot
    create regular file `/mnt/etc/sysconfig/network-scripts/ifcfg-eth0': No such file
    or directory\r\ncp: target `/mnt/usr/local/sbin/' is not a directory\r\ncp: cannot
    create directory `/mnt/lib/modules/': No such file or directory\r\nmv: cannot
    stat `/mnt/lib/tls': No such file or directory\r\ncreatefedora12bootebs.sh: line
    84: /mnt/etc/ld.so.conf.d/kernelcap-2.6.21.7-2.fc8.conf: No such file or directory\r\nchroot:
    cannot run command `chkconfig': No such file or directory\r\nchroot: cannot run
    command `chkconfig': No such file or directory"
- id: 177477
  author: Bryan Field-Elliot
  author_email: blueskybry@gmail.com
  author_url: ''
  date: '2010-07-30 17:39:03 -0400'
  date_gmt: '2010-07-30 22:39:03 -0400'
  content: I followed these instructions and am very pleased to be running FC12 now
    on EC2! However, I am having trouble trying to launch a new instance created from
    an ec2-bundle-vol of the instance I ran these instructions agains. ec2-bundle-vol
    succeeds, as does ec2-upload-bundle and ec2-register. But when I launch the instance,
    it's stuck in "Pending" for several minutes, and then goes immediately to "Terminated".
    I have no idea why, there is no console output and nothing I can retrieve from
    EC2 seems to offer any assistance. Has anyone else seen this? Do I need to use
    non-default options for ec2-bundle-vol or ec2-register? I'm just trying to launch
    it on ephemeral storage, not ECB.
- id: 178614
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-08-07 06:41:13 -0400'
  date_gmt: '2010-08-07 11:41:13 -0400'
  content: "@Bryan It should all work as described here although a few things have
    changed recently. I'll be creating a new post soon on how to use some of the new
    tools."
- id: 179010
  author: Olivier Delrieu
  author_email: olivier@delrieu.org
  author_url: ''
  date: '2010-08-10 02:03:55 -0400'
  date_gmt: '2010-08-10 07:03:55 -0400'
  content: "@Bryan.\r\nSame problem here. \r\n\r\nI've been running a cluster of home
    made F11 instances for a year. Instances are S3 based, and were created using
    a script very similar to Carson's. \r\n\r\nThe same script, apply to F13, produces
    bootable F13 instances (console output shows couple of problems with udev, requiring
    adding MAKEDEVs in rc.sysinit). \r\n\r\nHowever when launching a new instance
    created from an ec2-bundle-vol of the instance, the new instance self terminates
    (Client.InstanceInitiatedShutdown: Instance initiated shutdown) , the console
    output is empty, and IPs are not attributed. Note this worked well (and still
    works well) with the F11 instances. \r\n\r\nAs my F11 and F13 scripts are identical,
    and because they still work with F11, I believe this is due to changes made in
    F12 & F13. But, as the console output is empty I cannot figure out when the
    problem is. I've tried using a F11 rc.sysinit in F13, it made no difference.\r\n\r\nAny
    idea?"
- id: 179031
  author: Installing Cent OS 5.5 on EC2 with the Cent OS 5.5 Kernel
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/1205/installing-cent-os-5-5-on-ec2-with-the-cent-os-5-5-kernel/
  date: '2010-08-10 05:51:53 -0400'
  date_gmt: '2010-08-10 10:51:53 -0400'
  content: '[...] follows is similar, both steps and concepts, to the "from scratch"
    section of my post on Fedora 12 on EC2 using a root EBS. I&#039;ve also bundled
    all the instance building commands up into one script (centos5.5.sh). If [...]'
- id: 181520
  author: Frannack
  author_email: test@gmail.com
  author_url: ''
  date: '2010-09-02 06:57:35 -0400'
  date_gmt: '2010-09-02 11:57:35 -0400'
  content: "@Tim\r\n\r\nyum -y install cpipe\r\n\r\n:)"
---

I recently needed to create a clean EC2 AMI using a fairly new linux distro. It has been a while since I've needed to create a new AMI so I also wanted to move away from the older pre-packaged AMI and boot using EBS. After taking a look at what was currently available publicly I decided I would just create my own EBS bootable AMI using Fedora 12. It wasn't all that complicated but there are a decent number of steps so I figured I would document them for anyone else who might want to give it a try.

I'm going to assume you already understand how to do things like create instances, create EBS volumes and ssh into your running instance using key based authentication. I use the AWS management console for a lot of what follows with the exception of needing to register the AMI and for that you will need the <a href="http://developer.amazonwebservices.com/connect/entry.jspa?externalID=351">Amazon EC2 API Tools</a> and <a href="http://developer.amazonwebservices.com/connect/entry.jspa?externalID=368">Amazon EC2 AMI Tools</a> 

There are two ways to get to a bootable EBS backed Fedora 12 instance and they start off the same. The first thing to do is fire up the AMI named "Basic Fedora Core 8 (AMI Id: ami-84db39ed)" that is provided by Amazon.

Once the Fedora Core 8 EC2 instance is ready ssh into it. Fedora 12 requries a newer version of RPM to install so you now need to upgrade the instance to Fedora 10. This is pretty easy and can be done by following my instructions on <a href="http://www.ioncannon.net/system-administration/142/upgrading-from-fedora-9-to-fedora-10-with-yum/">upgrading from Fedora 9 to Fedora 10</a> (don't worry about skipping 9 it will work). Here are the commands needed to do the upgrade:

```
yum clean all
rpm -Uhv http://archive.kernel.org/fedora-archive/releases/10/Fedora/i386/os/Packages/fedora-release-10-1.noarch.rpm http://archive.kernel.org/fedora-archive/releases/10/Fedora/i386/os/Packages/fedora-release-notes-10.0.0-1.noarch.rpm
yum -y update
```

After a few minutes the instance will be upgraded and ready for the next step. This is where the two paths diverge depending on how you want the final product constructed. The options are to install Fedora 12 on a freshly minted volume or continue upgrading the instance you just created.

<b>Upgrade path</b>

I will start with the upgrade path since that is probably the easier of the two although may leave you with a messier instances after it is done. The next step for the upgrade path is to do what I outline in <a href="http://www.ioncannon.net/system-administration/358/upgrading-to-fedora-11-from-fedora-10/">upgrading from Fedora 10 to Fedora 11</a> and <a href="http://www.ioncannon.net/system-administration/719/upgrade-to-fedora-12-from-fedora-11/">upgrading from Fedora 11 to Fedora 12</a>. Here are the commands all in one place to make it easy:
```
yum clean all
rpm -Uvh http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-11-1.noarch.rpm http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-notes-11.0.0-2.fc11.noarch.rpm
yum -y update
yum clean all
rpm -Uvh http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-notes-12.0.0-4.fc12.noarch.rpm http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-12-1.noarch.rpm
yum -y update
```

Once you have everything upgraded to Fedora 12 you will have a 15G root partition that has less than 2G used. This may not suite your needs very well if you really don't need that extra 13G but thankfully if you want to shrink the root EBS partition you can. 

I found some instructions in this article on <a href="http://www.elastician.com/2009/12/creating-ebs-backed-ami-from-s3-backed.html">EBS backed AMI</a>s that describes using the following command to copy the entire file system over. Assuming you have created a smaller volume and attached it to the instance as sdh you should be able to do something like the following to copy everything to the new volume:

```
mkfs.ext3 /dev/sdh
mount /dev/sdh /mnt
tar cpS / | cpipe -vt -b 1024 | gzip -c | tar zxpS -C /mnt
rm -rf /mnt/mnt/*
rm -rf /mnt/proc/*
umount /mnt
```

One thing to note in the above is that the entire sdh drive is formatted for the file system (you will actually get a prompt asking if that is ok). As far as I can tell this is the way it has to be or the instance will not boot correctly. I assume this is because the root device is hidden behind a partition already as /dev/sda1 and so shouldn't have a second partition table.

Skip to the common part now to learn how to make the final bootable AMI.

<b>From scratch path</b>

This path is similar to and mostly an update/extension to my post on creating a <a href="http://www.ioncannon.net/system-administration/128/how-to-create-a-fedora-7-instance-for-ec2/">Fedora 7 AMI setup</a>. I'm going to leave out most of the details and just provide you with a script that will take an empty volume (assumed to be attached as /dev/sdh) and turn it into a bootable EBS backed Fedora 12 volume. Download the script <a href="http://www.ioncannon.net/examples/createfedora12bootebs.sh">createfedora12bootebs.sh</a> instead of trying to cut and paste the following, it gets formatted in such a way as to lose a newline that is important. Please note that you will need at least 1G of space on the given volume.

```
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
name=Fedora 12 &acirc;&euro;&ldquo; i386 &acirc;&euro;&ldquo; Base
mirrorlist=http://mirrors.fedoraproject.org/mirrorlist?repo=fedora-12&arch=i386
enabled=1
[updates-released]
name=Fedora 12 &acirc;&euro;&ldquo; i386 &acirc;&euro;&ldquo; Released Updates
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
```

<b>Common wrap up</b>

At this point you will need to create a snapshot of the volume that was created for one of the paths above. Once the snapshot is available you will need to then register the snapshot as an AMI that is bootable from EBS. To do that you would issue something like the following command substituting the correct data in where it relates to your volume and snapshot.

```
ec2-register -n "AMIName" -d "AMI Description" --block-device-mapping /dev/sdc=ephemeral0 --snapshot your-snapname --architecture i386 --kernel aki-a71cf9ce --ramdisk ari-a51cf9cc
```

One thing to note in this command is the --block-device-mapping option. That option is what gives you access to the local drive on your node once it is booted. This gives you extra storage for things you don't need to keep after the life of the running node. In the from scratch option I'm turning part of the local drive into swap as well as creating a partition that could be used as a large temporary storage. If you want to know more details on the ephermeral storage look at <a href="http://developer.amazonwebservices.com/connect/thread.jspa?messageID=155916">this post</a>

After all that you should have a bootable EBS backed Fedora 12 install to work with.
