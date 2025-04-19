---
layout: archive
status: publish
published: true
title: Installing Cent OS 5.5 on EC2 with the Cent OS 5.5 Kernel
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1205
wordpress_url: http://www.ioncannon.net/?p=1205
date: '2010-08-10 05:51:37 -0400'
date_gmt: '2010-08-10 10:51:37 -0400'
categories:
- system administration
tags:
- AWS
- ec2
- linux
- centos
comments:
- id: 179058
  author: "@somic"
  author_email: ds@somic.org
  author_url: http://somic.org
  date: '2010-08-10 11:03:53 -0400'
  date_gmt: '2010-08-10 16:03:53 -0400'
  content: Thank you very much for a very detailed post.
- id: 179749
  author: Fernando
  author_email: fpalacio@gmail.com
  author_url: ''
  date: '2010-08-15 02:22:13 -0400'
  date_gmt: '2010-08-15 07:22:13 -0400'
  content: "Very helpful post.\r\n\r\nJust a question about fstab. In this post you're
    installing a 32 bit Centos (according to the yum config file) so it only can be
    run in small instances.\r\n\r\nAs far as I know, you don't have \"/dev/sdc\" devices
    in that kind of instances so the fstab file is trying to mount a non-exist device.\r\n\r\nWhat
    do you think? I got the info from http://docs.amazonwebservices.com/AWSEC2/latest/DeveloperGuide/\r\n\"Amazon
    Ec2 Concepts -> AMI and Instance Concepts -> Instances -> Instance types -> Instance
    storage\"\r\n\r\nRegards,\r\nFernando."
- id: 179799
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-08-15 13:35:52 -0400'
  date_gmt: '2010-08-15 18:35:52 -0400'
  content: "@Fernando You can install 64 bit CentOS using the same thing just change
    the yum repos. All instances have access to ephemeral devices and you can attach
    them using the ec2-register command, see my previous post if you want an example
    of that. Also take a look at the main instance type descriptions, the small gets
    160GB of local storage http://aws.amazon.com/ec2/#instance I think the documentation
    may be describing something in more general terms. When you configure your own
    instance as described here you can make the devices show up wherever you want
    them."
- id: 180269
  author: mrfred
  author_email: mrfred8@yahoo.com
  author_url: ''
  date: '2010-08-18 18:59:44 -0400'
  date_gmt: '2010-08-18 23:59:44 -0400'
  content: "[J  Booting 'CentOS5.5'\r\n\r\n\r\n\r\nroot (hd0,0)\r\n\r\n Filesystem
    type is ext2fs, partition type 0x83\r\n\r\nkernel /boot/vmlinuz-2.6.18-194.8.1.el5xen
    root=/dev/sda2\r\n\r\n\r\n\r\nError 15: File not found\r\n\r\nbooted with 4c7d9525
    kernel with following menu.lst file in /boot/boot/grub/\r\n\r\ndefault 0\r\ntimeout
    1\r\ntitle CentOS5.5\r\n     root (hd0,0)\r\n     kernel /boot/vmlinuz-2.6.18-194.8.1.el5xen
    root=/dev/sda2\r\n     initrd /boot/initrd-2.6.18-194.8.1.el5xen.img\r\n\r\nnote
    it booted up with default kernel but of course had the wrong kernel"
- id: 180637
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-08-21 10:49:05 -0400'
  date_gmt: '2010-08-21 15:49:05 -0400'
  content: You probably want to verify that the kernel that was installed is named
    the same. It could have been updated or you may have hit an older repo. I noticed
    that some repos have a vmlinuz-2.6.18-194.el5xen kernel.
- id: 180792
  author: dhiva
  author_email: dhiva@es.net
  author_url: ''
  date: '2010-08-23 11:06:58 -0400'
  date_gmt: '2010-08-23 16:06:58 -0400'
  content: "1. I am having hardtime to understand step 15.  Any other ways to do it?\r\nI
    see others downloading modules from amazon and running  \"depmod\".\r\n\r\n 2.
    You also mentioned that this won't work if the CentOS xen version changes. \r\n
    \    So if i want to upgrade to  vmlinuz-2.6.18-194.11.1.el5xen', then i need
    to redo everything OR redo from step 15??\r\n\r\n3. - What if i create a vm instance
    locally using 'virt-manager' on CentOS and install CentOS Xen kernel for that
    VM? Does this simplify the process you explained here.\r\n\r\nNote:\r\nMy error
    message is similar to mrfred though i am getting unknown file system type.\r\n
    \r\nthanks"
- id: 180818
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-08-24 09:18:57 -0400'
  date_gmt: '2010-08-24 14:18:57 -0400'
  content: |-
    1) There are probably multiple ways of doing it but I didn't have time to verify them all so I went with the way I know will work. Downloading the modules from Amazon would not work however.
    2) My build script may not work but if you have a running instance you should be able to do yum update and have the new kernel install without a problem. You would need to modify the menu.lst file to point to the new kernel and initrd file as well. A reboot would then get you on the new kernel.
    3) I haven't been able to do anything with virt-manager yet but I bet it would work and probably make things simpler.
- id: 181587
  author: Andrei
  author_email: frunzales@gmail.com
  author_url: ''
  date: '2010-09-03 14:33:45 -0400'
  date_gmt: '2010-09-03 19:33:45 -0400'
  content: "Hello,\r\n\r\nI'm getting some weird error when I boot my EBS-based AMI
    using your instructions. The output from the EC2 console follows, I'd really appreciate
    some feedback on this. I'm using CentOS's stock xen kernel: yum install kernel-xen.i686
    and I've modified the ramdisk image accordingly. These are the modules I'm loading
    through the initrd: ext3.ko jbd.ko xenblk.ko xennet.ko. sda1 -> /boot (ext2) -
    sda2 -> / (ext3) - sda3 is my swap partition. I can also confirm that /etc/fstab
    is properly formatted.\r\n\r\nRed Hat nash version 5.1.19.6 starting\r\nMounting
    proc filesystem\r\nMounting sysfs filesystem\r\nCreating /dev\r\nCreating initial
    device nodes\r\nSetting up hotplug.\r\nCreating block device nodes.\r\nLoading
    jbd.ko module\r\nLoading ext3.ko module\r\nLoading xenblk.ko module\r\nRegistering
    block device major 8\r\n\r\n sda: sda1 sda2 sda3\r\n\r\nLoading xennet.ko module\r\nScanning
    and configuring dmraid supported devices\r\nCreating root device.\r\nMounting
    root filesystem.\r\nVFS: Can't find ext3 filesystem on dev sda2.\r\n\r\nmount:
    error mounting /dev/root on /sysroot as ext3: Invalid argument\r\nSetting up other
    filesystems.\r\nSetting up new root fs\r\nsetuproot: moving /dev failed: No such
    file or directory\r\nno fstab.sys, mounting internal defaults\r\nsetuproot: error
    mounting /proc: No such file or directory\r\nsetuproot: error mounting /sys: No
    such file or directory\r\nSwitching to new root and running init.\r\nunmounting
    old /dev\r\nunmounting old /proc\r\nunmounting old /sys\r\nswitchroot: mount failed:
    No such file or directory\r\nKernel panic - not syncing: Attempted to kill init!"
- id: 182160
  author: How to Build and Compile a Custom Linux Kernel for EC2
  author_email: ''
  author_url: http://www.ioncannon.net/uncategorized/1290/how-to-build-compile-a-custom-linux-kernel-for-ec2/
  date: '2010-09-09 09:56:08 -0400'
  date_gmt: '2010-09-09 14:56:08 -0400'
  content: "[...] It is important to have a recent kernel since most of what is needed
    to get a kernel to work on EC2 is now incorporated into the source. These instructions
    assume the latest kernel is 2.6.35.4 and I&#039;ve used them with 2.6.35 as well
    but keep that in mind since the one patch that is required could eventually be
    merged in. Before getting started it may help to read over how to compile the
    Linux kernel normally and then my post on running CentOS 5.5 on EC2 using pv-grub.
    [...]"
- id: 182711
  author: Henrique Prange
  author_email: hprange@gmail.com
  author_url: ''
  date: '2010-09-14 21:08:43 -0400'
  date_gmt: '2010-09-15 02:08:43 -0400'
  content: "First, thank you for this very useful post.\r\n\r\nI'm facing the problem
    described in the \"Tips on debugging the boot process\" section. I've double-checked
    the kernel-id is correct and the menu.lst contents are the same as your script
    (just updated the kernel version). The grub-install command produces the following
    output:\r\n\r\n```\r\nchroot /mnt grub-install /dev/sdh\r\nProbing devices
    to guess BIOS drives. This may take a long time.\r\nNo suitable drive was found
    in the generated device map.\r\n```\r\n\r\n1) Is this expected?\r\n\r\n2)
    Are you planning to register the AIM produced with these steps public available
    on Amazon?\r\n\r\nThanks."
- id: 183727
  author: Dean Smith
  author_email: dean@zelotus.com
  author_url: http://zelotus.com/
  date: '2010-09-25 03:19:30 -0400'
  date_gmt: '2010-09-25 08:19:30 -0400'
  content: "I found some issues with making the initialrd for some reason using this
    method\r\n\r\nHowever the following worked perfectly for me and is much simpler.\r\n\r\n```chroot
    /mnt mkinitrd /boot/initrd-2.6.18-194.194.8.1.el5ec2.img 2.6.18-194.8.1.el5xen
    --with xenblk --with xennet```"
- id: 184928
  author: Converting from VirtualBox or VMWare to EC2 now Easier than Ever
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/1246/converting-from-virtualbox-or-vmware-to-ec2-now-easier-than-ever/
  date: '2010-10-07 06:18:38 -0400'
  date_gmt: '2010-10-07 11:18:38 -0400'
  content: "[...] &#8211; A Firefox Stack Exchange Profile WatcherWidget Of AwesomenessContactSitemap
    \      &laquo; Installing Cent OS 5.5 on EC2 with the Cent OS 5.5 Kernel Using
    a HTTP Proxy to Debug JAX-WS and SOAP Over HTTPS [...]"
- id: 185669
  author: angiospermalbastra
  author_email: angiospermalbastra@angiospermalbastra.org
  author_url: ''
  date: '2010-10-13 16:51:33 -0400'
  date_gmt: '2010-10-13 21:51:33 -0400'
  content: "Regarding the section \"Tips on debugging the boot process\" - could you
    please publish the entire console log for a successful boot process that uses
    PVGRUB?\r\n\r\nI'm trying to build an AMI that boots a non standard distribution
    from EBS using PVGRUB and I'm stuck at what appears to be an issue with the guest
    OS/kernel, but I can't tell that for sure since I haven't seen a successful PVGRUB
    boot yet. I've been looking for some PVGRUB AMIs but they appear to generate a
    different kind of console log (i.e. it doesn't start with \"Xen Minimal OS!\"
    like yours and mine do).\r\n\r\nI asked the same here, but I haven't got any answers
    yet: \r\nhttp://developer.amazonwebservices.com/connect/entry.jspa?externalID=3967\r\n\r\nThanks
    a lot"
- id: 192866
  author: nd
  author_email: ndkone@gmail.com
  author_url: ''
  date: '2010-12-18 21:52:08 -0500'
  date_gmt: '2010-12-19 02:52:08 -0500'
  content: "I got the same error:\r\n\r\nchroot /mnt grub-install /dev/sdh\r\nProbing
    devices to guess BIOS drives. This may take a long time.\r\nNo suitable drive
    was found in the generated device map.\r\n\r\nAny suggestio or why this happens?"
- id: 192905
  author: nd
  author_email: ndkone@gmail.com
  author_url: ''
  date: '2010-12-19 12:45:20 -0500'
  date_gmt: '2010-12-19 17:45:20 -0500'
  content: "Is this a problem?\r\n\r\nRunning Transaction\r\n  Installing     : kernel-xen
    \                                              1/1\r\nerror opening /sys/block:
    No such file or directory\r\nerror opening /sys/block: No such file or directory"
- id: 194903
  author: Raphdg
  author_email: raphael.degiusti@gmail.com
  author_url: ''
  date: '2011-01-04 11:06:14 -0500'
  date_gmt: '2011-01-04 16:06:14 -0500'
  content: "Hi !\r\n\r\nWould it be possible to skip a few steps here by specifying
    a kickstart (ks=...) parameter to the kernel command line within the menu.lst
    so Anaconda build the system \"at runtime / at instanciation time\" ?\r\n\r\nRaphDG"
- id: 195490
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-01-12 07:28:48 -0500'
  date_gmt: '2011-01-12 12:28:48 -0500'
  content: "@nd If the kernel was installed that probably isn't a problem."
- id: 198684
  author: bjoern
  author_email: bjoern@fake.xrow.net
  author_url: ''
  date: '2011-02-21 20:23:04 -0500'
  date_gmt: '2011-02-22 01:23:04 -0500'
  content: "During install I see pam failing... Is this my fault in a way? Do others
    see the same? \r\n\r\n  Installing     : krb5-libs-1.6.1-36.el5_5.6.x86_64                                                                        179/332
    \r\n  Installing     : pam-0.99.6.2-6.el5_5.2.x86_64                                                                            180/332
    \r\nNon-fatal POSTIN scriptlet failure in rpm package pam-0.99.6.2-6.el5_5.2.x86_64\r\n/var/tmp/rpm-tmp.d22ycb:
    line 10: cat: command not found\r\n/var/tmp/rpm-tmp.d22ycb: line 11: rm: command
    not found\r\n/var/tmp/rpm-tmp.d22ycb: line 26: install: command not found\r\n/var/tmp/rpm-tmp.d22ycb:
    line 29: install: command not found\r\nwarning: %post(pam-0.99.6.2-6.el5_5.2.x86_64)
    scriptlet failed, exit status 127\r\n  Installing     : coreutils-5.97-23.el5_4.2.x86_64
    \                                                                        181/332"
- id: 199111
  author: Jahil
  author_email: named.conf@gmail.com
  author_url: ''
  date: '2011-02-27 04:01:13 -0500'
  date_gmt: '2011-02-27 09:01:13 -0500'
  content: "I have created 4G volume but when in i'm running ec2-register command
    giving me error message: \r\n\r\n\r\nsaladin ~ # ec2-register -n \"CentOS 5.5
    - i386\" -d \"CentOS 5.5 Base - i386\" --root-device-name /dev/sda2 -b /dev/sda=snap-f2a50b9e:2:true\r\nClient.InvalidParameterValue:
    Value (2) for parameter volumeSize is invalid. The volume size is smaller than
    the snapshot size (4)\r\n \r\n\r\nI have tried with 8G volume as-well but same
    error message. Only 2G volume seems to working correctly with <I>ec2-register</i>\r\n\r\nec2-api-tools
    version: 1.3-62308 2010-11-15\r\n\r\n\r\nAny idea!"
- id: 199119
  author: Leo Gaggl
  author_email: leo@gaggl.com
  author_url: http://leo.gaggl.com
  date: '2011-02-27 07:34:21 -0500'
  date_gmt: '2011-02-27 12:34:21 -0500'
  content: "Thanks for the great post - excellent start to building.\r\n\r\n\r\nModified
    Step 15 to:\r\n\r\nchroot /mnt mkinitrd /boot/initrd-2.6.18-194.32.1.el5xen.img
    2.6.18-194.32.1.el5xen --preload=xenblk --preload=xennet --fstab=/etc/fstab"
- id: 201529
  author: Dan Trainor
  author_email: dan.trainor@gmail.com
  author_url: ''
  date: '2011-03-31 12:59:01 -0400'
  date_gmt: '2011-03-31 17:59:01 -0400'
  content: "Hi -\r\n\r\nI'm getting a similar error.  I create the image in an EBS
    device, and register it as an AMI with:\r\n\r\nec2-register -a x86_64 -n \"centos-5.5-base-01\"
    -d \"centos-5.5-base-01\" --root-device-name /dev/sda -b '/dev/sda=snap-59999c35:8:true'
    -s snap-59999c35\r\n\r\nUsing no partitions - just /dev/sda - I figured --root-device-name
    in this manner would pass exactly that to sysroot.  I understand and know exactly
    what is happening, but not why.  It errors out:\r\n\r\nRed Hat nash version 5.1.19.6
    starting\r\nMounting proc filesystem\r\nMounting sysfs filesystem\r\nCreating
    /dev\r\nCreating initial device nodes\r\nSetting up hotplug.\r\nCreating block
    device nodes.\r\nLoading ehci-hcd.ko module\r\nLoading ohci-hcd.ko module\r\nLoading
    uhci-hcd.ko module\r\nUSB Universal Host Controller Interface driver v3.0\r\nLoading
    jbd.ko module\r\nLoading ext3.ko module\r\nLoading dm-mem-cache.ko module\r\nLoading
    dm-mod.ko module\r\ndevice-mapper: uevent: version 1.0.3\r\ndevice-mapper: ioctl:
    4.11.5-ioctl (2007-12-12) initialised: dm-devel@redhat.com\r\nLoading dm-log.ko
    module\r\nLoading dm-region_hash.ko module\r\nLoading dm-message.ko module\r\nLoading
    dm-raid45.ko module\r\ndevice-mapper: dm-raid45: initialized v0.2594l\r\nScanning
    and configuring dmraid supported devices\r\nCreating root device.\r\nMounting
    root filesystem.\r\nmount: could not find filesystem '/dev/root'\r\nSetting up
    other filesystems.\r\nSetting up new root fs\r\nsetuproot: moving /dev failed:
    No such file or directory\r\nno fstab.sys, mounting internal defaults\r\nsetuproot:
    error mounting /proc: No such file or directory\r\nsetuproot: error mounting /sys:
    No such file or directory\r\nSwitching to new root and running init.\r\nunmounting
    old /dev\r\nunmounting old /proc\r\nunmounting old /sys\r\nswitchroot: mount failed:
    No such file or directory\r\nKernel panic - not syncing: Attempted to kill init!\r\n\r\nAnd
    I'm stumped.\r\n\r\nAny input would be appreciated.  Thanks!"
- id: 201745
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-04-05 17:31:44 -0400'
  date_gmt: '2011-04-05 22:31:44 -0400'
  content: "@Jahil you will need to replace the :2: in the sda with the value you
    made the volume. So if it is 8 you want snap-asdfasf:8:true there."
- id: 201748
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-04-05 17:41:12 -0400'
  date_gmt: '2011-04-05 22:41:12 -0400'
  content: "@Dan it looks like your kernel isn't loading the XEN block drivers. The
    build script is probably looking for the wrong kernel version. If you update the
    script with the newest version of the kernel from the public repo it should work."
- id: 203366
  author: fapestniegd
  author_email: fapestniegd@gmail.com
  author_url: http://blog.websages.com
  date: '2011-04-30 17:43:10 -0400'
  date_gmt: '2011-04-30 22:43:10 -0400'
  content: "\"I was also able to try a modified version of FreeBSD that should boot
    without the loader but with that I get an error claiming the kernel isn't bziped\"\r\n\r\na
    bzImage isn't bzip'ed it's a big zImage gzip compressed with an executable boot
    sector: \r\n\r\nhttp://en.wikipedia.org/wiki/Vmlinux#bzImage\r\n\r\nfile /boot/vmlinuz-2.6.32-websages
    # bzImage kernel example\r\n/boot/vmlinuz-2.6.32-websages:    Linux kernel x86
    boot executable RO-rootFS, swap_dev 0x3, Normal VGA\r\n\r\nfile /boot/vmlinuz-2.6.32-305-ec2
    \ #gzip compressed kernel example\r\n/boot/vmlinuz-2.6.32-305-ec2: gzip compressed
    data, from Unix, last modified: Thu Apr 15 04:23:11 2010, max compression"
---

Amazon recently introduced the ability to <a href="http://aws.typepad.com/aws/2010/07/use-your-own-kernel-with-amazon-ec2.html">boot a custom kernel</a> using pv-grub on EC2. This opens the door for all kinds of interesting ideas that I've been thinking about for a while, like seeing if I can boot right into a web server and skip all that extra junk that comes with Linux distributions, but that is just me. The main door it is going to open for most people interested in EC2 will be the ability to upgrade the kernel that comes with their distribution. That brings us to how to install Cent OS 5.5 on EC2 and use the kernel that is part of the distribution.

For those who might just be interested in booting a custom kernel using EC2 pv-grub I will try to produce a few more posts with more details on that but for now here are the main things to know:

  - The pv-grup kernels named with hd00 will look on the first partition of the registered device in the /boot/boot/grub directory for a menu.lst file. Use this type of kernel if you create want to use a partitioned disk.
  - The pv-grup kernels named with hd0 will look on the registered device in the /boot/grub directory for a menu.lst file. Use this type of kernel if you don't have a partition on your disk.
  - You won't get anything meaningful back from the boot attempt if your grub menu.lst file is in the wrong place or is not valid. See the end of the post for what a pv-grub error message looks like and some tips on what to do if you see it.
  - The kernel you use does matter but the current mainline Linux kernel (2.6.35) contains everything you need except for a small change to turn off XSAVE. The main thing to know is that not every distribution may have made the change needed to work on EC2.
  - I have tried non-Linux kernels to no avail. See the end of the post for a little more information.</li>

A lot of what follows is similar, both steps and concepts, to the "from scratch" section of my post on <a href="http://www.ioncannon.net/system-administration/894/fedora-12-bootable-root-ebs-on-ec2/">Fedora 12 on EC2 using a root EBS</a>. I've also bundled all the instance building commands up into one <a href="http://www.ioncannon.net/examples/centos5.5.sh">script (centos5.5.sh)</a>. If you want to use that script then do 1 and 2 of what follows, make sure to change the password used for root in the script and then pick back up at 18. The following steps should not be taken as the only way to do this but more of a recipe:


1. Start an EC2 instance that has yum on it to be used as a setup box. A RedHat based box, Fedora or CentOS will work best unless you want to install yum. For the following steps I used a Fedora 8 based EC2 node.

    ```
    ec2-run-instances -z us-east-1a -g your-group -k your-keypair -n 1 ami-84db39ed
    ```

2. Create a new EBS volume to install to and map it to the running instance from step 1. Your volume should be greater than 2G for a base install. I mapped this new volume to the /dev/sdh device on the setup machine so you will notice that in the following steps (if you are using the script you will want to make sure you map to /dev/sdh as well):

    ```
    ec2-create-volume -z us-east-1a -s 2
    ec2-attach-volume volume-id -i instance-id -d /dev/sdh
    ```

3. Create a <a href="http://tldp.org/HOWTO/Partition/fdisk_partitioning.html">partion table using fdisk</a> on the volume you are going to install to.

    I created both a /boot and / partion on /dev/sdh1 and /dev/sdh2 respecivly. I also made the /dev/sdh1 partition active so it is exactly as it would be if it had been installed on a real machine.

    Note that this step is optional but I am going to include it because I think it makes for a more natural setup and is more in line with what you would get if you did a VirtualBox install and then transfered the image.

4. Format your partition(s) and mount them into /mnt. For me that was done with the following:

    ```
    echo "y" | mkfs.ext3 /dev/sdh1
    echo "y" | mkfs.ext3 /dev/sdh2
    mount /dev/sdh2 /mnt
    mkdir /mnt/boot
    mkdir /mnt/dev
    mkdir /mnt/proc
    mkdir /mnt/etc
    mount /dev/sdh1 /mnt/boot
    mount -t proc none /mnt/proc
    ```

5. Create a base device setup for the new instance:

    ```
    for i in console null zero ; do /sbin/MAKEDEV -d /mnt/dev -x $i ; done
    ```

6. Create a base fstab file in /mnt/etc/fstab. The following is the one I used:

    ```
    /dev/sda1               /boot                   ext3    defaults 1 1
    /dev/sda2               /                       ext3    defaults 1 2
    none                    /dev/pts                devpts  gid=5,mode=620 0 0
    none                    /dev/shm                tmpfs   defaults 0 0
    none                    /proc                   proc    defaults 0 0
    none                    /sys                    sysfs   defaults 0 0
    /dev/sdc1               /mnt                    ext3    defaults 0 0
    /dev/sdc2               swap                    swap    defaults 0 0
    ```

7. Create the yum repo configuration, prepare for the yum install and then install the base OS onto the new volume.<br/><br/>

    The following is the yum configuration file I used:

    ```
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
    ```

    The following command will install the base of Cent OS 5.5 into /mnt (note that I created the above config file as /tmp/yumec2.conf):

    ```
    yum -c /tmp/yumec2.conf --installroot=/mnt -y groupinstall Base
    ```

8. Install sshd, grub, the Cent OS Xen kernel and then clean the repo to free up disk space:

    ```
    yum -c /tmp/yumec2.conf --installroot=/mnt -y install openssh-server
    yum -c /tmp/yumec2.conf --installroot=/mnt -y install grub
    yum -c /tmp/yumec2.conf --installroot=/mnt -y install kernel-xen.i686
    yum -c /tmp/yumec2.conf --installroot=/mnt -y clean packages
    ```

9. Disable DNS checks and allow root to log in via SSH:

    ```
    echo "UseDNS no" >> /mnt/etc/ssh/sshd_config
    echo "PermitRootLogin yes" >> /mnt/etc/ssh/sshd_config
    ```

10. Set up networking by creating the /mnt/etc/sysconfig/network file. The contents for this example are:

    ```
    NETWORKING=yes
    ```

    As well as the /mnt/etc/sysconfig/network-scripts/ifcfg-eth0 file. The contents for this example are:

    ```
    DEVICE=eth0
    BOOTPROTO=dhcp
    ONBOOT=yes
    TYPE=Ethernet
    USERCTL=yes
    PEERDNS=yes
    IPV6INIT=no
    ```

11. I'm not sure if this is needed still but in the past there have been some /dev file missing on boot so I always add the following to the startup script to make sure they are available. The first two are the random devices and the last three are where the ephimeral drive is usually mapped:

    ```
    echo "/sbin/MAKEDEV /dev/urandom" >> /mnt/etc/rc.sysinit
    echo "/sbin/MAKEDEV /dev/random" >> /mnt/etc/rc.sysinit
    echo "/sbin/MAKEDEV /dev/sdc" >> /mnt/etc/rc.sysinit
    echo "/sbin/MAKEDEV /dev/sdc1" >> /mnt/etc/rc.sysinit
    echo "/sbin/MAKEDEV /dev/sdc2" >> /mnt/etc/rc.sysinit
    ```

12. Change the root password for the new instance. This is optional as you could create scripts to download your SSH key from EC2 but for these instructions setting the root password is the easiest:

    ```
    chroot /mnt
    pwconv
    passwd
    exit
    ```

13. Change the network settings so that the NetworkManager is off and network is on

    ```
    chroot /mnt chkconfig --level 2345 NetworkManager off
    chroot /mnt chkconfig --level 2345 network on
    ```

14. Disable a few things that are enabled by default but won't do any good for an EC2 instance:

    ```
    chroot /mnt chkconfig --level 2345 avahi-daemon off
    chroot /mnt chkconfig --level 2345 firstboot off
    ```

15. The stock CentOS Xen initrd doesn't load the Xen block or net drivers and those are required to boot. I unpacked the installed initrd and created a modified version by hand using the following commands (note that as soon as the CentOS Xen kernel version changes this will stop functioning):

    ```
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
    ```

16. Install grub on the new instance, move the boot directory into a subdirectory and create a grub menu.lst file that points to the CentOS kernel and initrd file:

    ```
    chroot /mnt grub-install /dev/sdh
    mkdir /mnt/boot/boot/
    mv /mnt/boot/* /mnt/boot/boot/ 2> /dev/null > /dev/null
    ```

    Put the following in /mnt/boot/boot/grub/menu.lst  (note that as soon as the CentOS Xen kernel version changes this will be incorrect):

    ```
    default 0
    timeout 1
    title CentOS5.5
        root (hd0,0)
        kernel /boot/vmlinuz-2.6.18-194.8.1.el5xen root=/dev/sda2
        initrd /boot/initrd-2.6.18-194.8.1.el5xen.img
    ```

    Note that this goes in /mnt/boot/boot/grub and that isn't the normal spot you would expect it in. This is where the AWS EC2 pv-grub expects to find the file on the first partition and moving the boot directory around just keeps everything in line with those expectations.

17. Make sure everything is written to disk and unmount the volume. At this point you have a CentOS 5.5 install that is almost ready to boot.

    ```
    sync
    umount /mnt/proc
    umount /mnt/boot
    umount /mnt
    ```

18. Make a snapshot of the volume you just installed to, you will need to volume ID that came from step 2:

    ```
    ec2-create-snapshot -d "Volume Description" volume-id
    ```

19. Use the snapshot from step 18 along with the ec2-register command to register your instance:

    ```
    ec2-register -n "AMIName" -d "AMI Description" --root-device-name /dev/sda2 -b /dev/sda=snap-id:2:true
    ```

    There are a number of things to take note of with the above command:


    <ol>
      <li>Running this command will result in output something like: IMAGE   ami-a5ae9bb</li>
      <li>The -b option can now assign a snapshot to a block device, the options in this example tell EC2 to generate 2G of space for the snapshot and to delete the volume it creates from the snapshot if the instance terminates. If you plan to use an instance long term you should replace that true at the end with a false to keep EC2 from deleting the volume when the instance terminates.</li>
      <li>Notice that the -b option is assigning the snapshot to the device and not to a partition of the device, that is /dev/sda instead of /dev/sda1. You can still assign a snapshot directly to a partition but now you can also assign a block device to a raw partitioned disk. Because I created the partition table earlier the snapshot is the raw disk device here.</li>
      <li>Also note that we are missing the kernel configuration option. As of this post using it with a pv-grub kernel causes the register command to fail. It isn't a big issue but just keep that in mind when you fire the AMI up otherwise it won't boot with the correct pv-grub kernel.</li>
    </ol>

20. Start an instance of the fresh CentOS 5.5 install. One key thing here is picking the correct pv-grub kernel to boot from. There are currently 4 different kernels at each location, see the <a href="http://developer.amazonwebservices.com/connect/entry.jspa?categoryID=174&externalID=3967">Enabling User Provided Kernels in Amazon EC2</a> document for a full list of kernels in each availability zone. In this case because the root disk was created with a partition table I used the "ec2-public-images/pv-grub-hd00-V1.01-i386.gz.manifest.xml" kernel to boot with (on US-East-1 that is kernel id aki-4c7d9525). For example:

    ```
    ec2-run-instances -z us-east-1a -g your-group -k your-keypair -n 1 --kernel pv-grub-kernel-id ami-from-step-19
    ```

<b>Tips on debugging the boot process</b>

If your instance won't boot you can use the ec2-get-console-output command to get the console output created from the pv-grub boot process. If your console output ends up like the following there are a number of things you may have done wrong.

<ul>
  <li>You may have selected the wrong kernel and it is trying to boot from a non-existant partition. Make sure you are using the correct pv-grub kernel hd0 vs hd00.</li>
  <li>You forgot to install grub or installed grub in the wrong place. Make sure you have either /boot/grub/menu.lst or /boot/boot/grub/menu.lst</li>
  <li>You have a bad menu.lst file. One mistake I made was giving a boot item a title with a space in it. Make the menu.lst as simple as you can until you get it to boot.</li>
</ul>

```
    Xen Minimal OS!
  start_info: 0xb10000(VA)
    nr_pages: 0x6a400
  shared_inf: 0x002f9000(MA)
     pt_base: 0xb13000(VA)
nr_pt_frames: 0x9
    mfn_list: 0x967000(VA)
   mod_start: 0x0(VA)
     mod_len: 0
       flags: 0x0
    cmd_line:  root=/dev/sda1 ro 4
  stack:      0x946780-0x966780
MM: Init
      _text: 0x0(VA)
     _etext: 0x621f5(VA)
   _erodata: 0x76000(VA)
     _edata: 0x7b6d4(VA)
stack start: 0x946780(VA)
       _end: 0x966d34(VA)
  start_pfn: b1f
    max_pfn: 6a400
Mapping memory range 0xc00000 - 0x6a400000
setting 0x0-0x76000 readonly
skipped 0x1000
MM: Initialise page allocator for e6c000(e6c000)-0(6a400000)
MM: done
Demand map pfns at 6a401000-7a401000.
Heap resides at 7a402000-ba402000.
Initialising timer interface
Initialising console ... done.
gnttab_table mapped at 0x6a401000.
Initialising scheduler
Thread "Idle": pointer: 0x7a402008, stack: 0x6a030000
Initialising xenbus
Thread "xenstore": pointer: 0x7a402478, stack: 0x6a040000
Dummy main: start_info=0x966880
Thread "main": pointer: 0x7a4028e8, stack: 0x6a050000
"main" "root=/dev/sda1" "ro" "4"
vbd 2048 is hd0
******************* BLKFRONT for device/vbd/2048 **********
backend at /local/domain/0/backend/vbd/2111/2048
Failed to read /local/domain/0/backend/vbd/2111/2048/feature-barrier.
Failed to read /local/domain/0/backend/vbd/2111/2048/feature-flush-cache.
12582912 sectors of 0 bytes
**************************
vbd 2051 is hd1
******************* BLKFRONT for device/vbd/2051 **********
backend at /local/domain/0/backend/vbd/2111/2051
Failed to read /local/domain/0/backend/vbd/2111/2051/feature-barrier.
Failed to read /local/domain/0/backend/vbd/2111/2051/feature-flush-cache.
1835008 sectors of 0 bytes
**************************
    [H
    [J
    GNU GRUB  version 0.97  (1740800K lower / 0K upper memory)
       [ Minimal BASH-like line editing is supported.   For
         the   first   word,  TAB  lists  possible  command
         completions.  Anywhere else TAB lists the possible
         completions of a device/filename. ]
grubdom>
    [9;10H

```


<b>Booting non-Linux OSes with EC2</b>

I have attempted both FreeBSD and NetBSD in particular with no luck. 

FreeBSD is tricky because it really wants to use its loader and while you can do that with the grub chainloader command it results in a grub error from EC2 about needing to load the kernel before booting:

```
root (hd0,1)
 Filesystem type unknown, partition type 0xa5
chainloader +1
Error 8: Kernel must be loaded before booting
Press any key to continue...
```

I was also able to try a modified version of FreeBSD that should boot without the loader but with that I get an error claiming the kernel isn't bziped:

```
root (hd0,1,a)
 Filesystem type is ufs2, partition type 0xa5
kernel /boot/loader
xc_dom_probe_bzimage_kernel: kernel is not a bzImage
ERROR Invalid kernel: xc_dom_find_loader: no loader found
xc_dom_core.c:523: panic: xc_dom_find_loader: no loader found
xc_dom_parse_image returned -1
Error 9: Unknown boot failure
Press any key to continue...
```

For NetBSD the result is actually a completely blank console log so I assume it causes some catastrophic failure that keeps the EC2 system from even being able to pull back a log.

