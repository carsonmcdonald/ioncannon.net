---
layout: archive
status: publish
published: true
title: Upgrading from FC6 to Fedora 7 with yum
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 68
wordpress_url: http://www.ioncannon.net/linux/68/upgrading-from-fc6-to-fc7-with-yum/
date: '2007-06-02 05:32:57 -0400'
date_gmt: '2007-06-02 10:32:57 -0400'
categories:
- linux
tags: []
comments:
- id: 18943
  author: NetworksAreMadeOfString &raquo; Fedora 7 Related Link Dump
  author_email: ''
  author_url: http://blog.networksaremadeofstring.co.uk/2007/06/03/fedora-7-related-link-dump/
  date: '2007-06-02 21:59:47 -0400'
  date_gmt: '2007-06-03 02:59:47 -0400'
  content: "[...] Despite the previous warning someone has successfully migrated from
    Fedora Core 6 to Fedora 7 via Yum [...]"
- id: 19026
  author: Alan
  author_email: ab_upham@svcable.net
  author_url: http://www.ioncannon.net/linux/68/upgrading-from-fc6-to-fedora7-with-yum/
  date: '2007-06-03 09:07:52 -0400'
  date_gmt: '2007-06-03 14:07:52 -0400'
  content: "Hi Carson\r\n I'm fairly new to the Fedora OS and all it's commands. If
    you could email me the whole process and commands so I can do the yum upgrade
    from Fedora Core 6 to Fedora 7 I would greatly appreciate it.\r\n\r\nThanks\r\nAlan"
- id: 19931
  author: Chris
  author_email: chris.alex.thomas@gmail.com
  author_url: ''
  date: '2007-06-07 12:51:07 -0400'
  date_gmt: '2007-06-07 17:51:07 -0400'
  content: "@alan\r\n\r\nhe just did, read the article and you'll find everything
    you need in order to upgrade from one to the other.\r\n\r\nI didn't need them,
    cause I'd already done it, but it was nice to see someone else who did it and
    had 0 problems, well, depending on whether you see a 2 hour download as a problem
    or not :D\r\n\r\nchris"
- id: 19942
  author: Mike
  author_email: michael.cornett@gmail.com
  author_url: ''
  date: '2007-06-07 14:31:37 -0400'
  date_gmt: '2007-06-07 19:31:37 -0400'
  content: This is a great post for users new to Fedora & Yum. I used the instructions
    on this site to upgrade from FC5 to FC6. Thanks for taking the time.
- id: 20032
  author: Ronan
  author_email: r_laturino@yahoo.com
  author_url: ''
  date: '2007-06-07 23:19:24 -0400'
  date_gmt: '2007-06-08 04:19:24 -0400'
  content: "Carson,\r\n\r\nThank you so much for this useful information. I successfully
    upgraded two servers from FC6 to FC7 via yum. I followed all the steps but have
    to manually upgrade python, yum, rpm and ncurses packages before I executed 'yum
    -y update'. After that everything was just perfect. I still have to test the rest
    though but I think no problems will occur.\r\n\r\nThanks again man..."
- id: 20210
  author: Praveen
  author_email: pravi.vk@gmail.com
  author_url: http://www.ualberta.ca/~veluthed/praveen.html
  date: '2007-06-08 13:57:28 -0400'
  date_gmt: '2007-06-08 18:57:28 -0400'
  content: "Thanks for the time you spend to write this help page.\r\ncheers"
- id: 20510
  author: lim
  author_email: limax@hot.ee
  author_url: ''
  date: '2007-06-10 04:38:51 -0400'
  date_gmt: '2007-06-10 09:38:51 -0400'
  content: Do you know if it's possible to upgrade directly from FC5 to 7 with yum?
    Or two upgrades 5->6->7 are required?
- id: 20513
  author: lim
  author_email: limax@hot.ee
  author_url: ''
  date: '2007-06-10 04:57:59 -0400'
  date_gmt: '2007-06-10 09:57:59 -0400'
  content: Also, what to do with swap partition, if it's not in LVM? Mount it by UUID?
- id: 20517
  author: lim
  author_email: limax@hot.ee
  author_url: ''
  date: '2007-06-10 06:06:17 -0400'
  date_gmt: '2007-06-10 11:06:17 -0400'
  content: "Ok, solved swap problem:\r\nswapoff -a\r\nmkswap -L SWAP /dev/\r\nswapon
    -a\r\n\r\nThen swap partition can also be mounted in /etc/fstab by\r\nLABEL=SWAP"
- id: 20556
  author: Gerardo Raggi
  author_email: graggi@shi.matmor.unam.mx
  author_url: ''
  date: '2007-06-10 13:25:57 -0400'
  date_gmt: '2007-06-10 18:25:57 -0400'
  content: how about /dev/mdX? how to label them?
- id: 20568
  author: lim
  author_email: limax@hot.ee
  author_url: ''
  date: '2007-06-10 16:24:21 -0400'
  date_gmt: '2007-06-10 21:24:21 -0400'
  content: "for ext2/ext3: e2label /dev/mdX LABEL\r\nfor reiserfs (partition must
    be unmounted): reiserfstune -L LABEL /dev/mdX\r\nfor swap: mkswap -L SWAP /dev/mdX"
- id: 20658
  author: Jean-Lou Dupont
  author_email: ioncannon@jldupont.com
  author_url: ''
  date: '2007-06-11 14:53:07 -0400'
  date_gmt: '2007-06-11 19:53:07 -0400'
  content: "Your post is fabulous!\r\nI have one question though: where do we find
    the file data for \"fedora-development.repo.rpmnew\" and \"fedora-updates.repo.rpmnew\"
    ?\r\n\r\nThanks."
- id: 20679
  author: saro
  author_email: saravan@fastmail.com
  author_url: ''
  date: '2007-06-11 20:47:43 -0400'
  date_gmt: '2007-06-12 01:47:43 -0400'
  content: "I upgraded successfully from FC6 to FC7. I do have the following issues.\r\n\r\n1)
    Nvidia driver loads up but Beryl doesn't. It says \"Root window size (2560/1024)
    is bigger then maximum texture size (2048x2048)\". It was working before the upgrade.\r\n\r\n2)
    There still are some *.fc6 packages (some 200 of them) and when I tried to batch
    remove them, many fc7 are also getting removed due to dependency issues. I didnt
    go thru with it but I would like a machine with just fc7 packages instead of a
    hybrid :[\r\n\r\nthanks for the post !\r\n\r\nSaro"
- id: 20683
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2007-06-11 21:32:00 -0400'
  date_gmt: '2007-06-12 02:32:00 -0400'
  content: "Saro,\r\n\r\nI have been getting that same Beryl error for months now.
    I assume you have dual screens? I upgraded Beryl some time ago and it started
    producing that error. I found a thread at some point saying they had opened a
    bug to fix it because it was something they had hard coded since they figured
    nobody would have a screen that large. I haven't gone back to Beryl since then
    but it seems like something they would get fixed soon."
- id: 20752
  author: Dennis
  author_email: shaopeng.wu@ncl.ac.uk
  author_url: ''
  date: '2007-06-12 15:45:05 -0400'
  date_gmt: '2007-06-12 20:45:05 -0400'
  content: "I have successfully upgrade but I can't boot from Fedora7. However, I
    can boot from fedora core 6 which is selected from boot menu list.\r\n\r\nI paste
    the related information:\r\n==========================================\r\n# /sbin/blkid\r\n/dev/mapper/VolGroup00-LogVol01:
    TYPE=\"swap\" \r\n/dev/mapper/VolGroup00-LogVol00: UUID=\"828418eb-aa98-4848-887d-b7bbcea8ebde\"
    SEC_TYPE=\"ext2\" TYPE=\"ext3\" \r\n/dev/hdb1: TYPE=\"ntfs\" \r\n/dev/hdb5: TYPE=\"ntfs\"
    \r\n/dev/hdb6: LABEL=\"D DISK\" UUID=\"2C5C-1D93\" TYPE=\"vfat\" \r\n/dev/hdd1:
    LABEL=\"/boot\" UUID=\"c500cfbc-4a8d-4520-be26-1f4c180e4188\" SEC_TYPE=\"ext2\"
    TYPE=\"ext3\" \r\n/dev/hdd2: TYPE=\"swap\" \r\n/dev/VolGroup00/LogVol01: TYPE=\"swap\"
    \r\n/dev/VolGroup00/LogVol00: UUID=\"828418eb-aa98-4848-887d-b7bbcea8ebde\" SEC_TYPE=\"ext2\"
    TYPE=\"ext3\" \r\n############################################\r\n\r\n\r\n# cat
    /etc/fstab\r\n/dev/VolGroup00/LogVol00 /                       ext3    defaults
    \       1 1\r\nLABEL=/boot             /boot                   ext3    defaults
    \       1 2\r\ndevpts                  /dev/pts                devpts  gid=5,mode=620
    \ 0 0\r\ntmpfs                   /dev/shm                tmpfs   defaults        0
    0\r\nproc                    /proc                   proc    defaults        0
    0\r\nsysfs                   /sys                    sysfs   defaults        0
    0\r\n/dev/VolGroup00/LogVol01 swap                    swap    defaults        0
    0\r\n===============================================\r\n# cat /boot/grub/grub.conf
    \r\n# grub.conf generated by anaconda\r\n#\r\n# Note that you do not have to rerun
    grub after making changes to this file\r\n# NOTICE:  You have a /boot partition.
    \ This means that\r\n#          all kernel and initrd paths are relative to /boot/,
    eg.\r\n#          root (hd1,0)\r\n#          kernel /vmlinuz-version ro root=/dev/VolGroup00/LogVol00\r\n#
    \         initrd /initrd-version.img\r\n#boot=/dev/hdb\r\ndefault=0\r\ntimeout=5\r\nsplashimage=(hd1,0)/grub/splash.xpm.gz\r\nhiddenmenu\r\ntitle
    Fedora (2.6.21-1.3194.fc7)\r\n        root (hd1,0)\r\n        kernel /vmlinuz-2.6.21-1.3194.fc7
    ro root=/dev/VolGroup00/LogVol00 rhgb quiet\r\n        initrd /initrd-2.6.21-1.3194.fc7.img\r\ntitle
    Fedora Core (2.6.20-1.2952.fc6)\r\n        root (hd1,0)\r\n        kernel /vmlinuz-2.6.20-1.2952.fc6
    ro root=/dev/VolGroup00/LogVol00 rhgb quiet\r\n        initrd /initrd-2.6.20-1.2952.fc6.img\r\ntitle
    Windows XP\r\n        rootnoverify (hd0,0)\r\n        chainloader +1\r\n===========================================\r\n\r\nI
    can boot from fc6 but not fedora 7. of course I can boot windows XP.\r\nLooking
    forward to hearing from you\r\nThanks in advance!"
- id: 20771
  author: saro
  author_email: saravan@fastmail.com
  author_url: ''
  date: '2007-06-12 19:07:52 -0400'
  date_gmt: '2007-06-13 00:07:52 -0400'
  content: Yep, you guessed right. I do have dual monitor :(
- id: 20916
  author: marc
  author_email: marc.lauffer@gmail.com
  author_url: ''
  date: '2007-06-14 08:01:20 -0400'
  date_gmt: '2007-06-14 13:01:20 -0400'
  content: "great job indeed!\r\ni'm attempting to upgrade a \"dedibox\" dedicated
    distant server from FC5 to FC 6 (using your previous howto: worked perfectly!)\r\nand
    now from FC6 to F7.\r\nThe server is minimalistic: no apps, no X server, no desktop,
    remote ssh access by putty, just scratch from the box... -> I shouldn't have any
    exotic driver problem.\r\nI have successfully labeled my drives using lim's tip,
    installed the new repo.rpm (why x86_64!!?) and launched yum update.\r\nboiled
    for a while and got :\r\n\r\n--------------------------------------------\r\n-->
    Processing Dependency: mkinitrd >= 6.0.9-7.1 for package: kernel\r\n--> Finished
    Dependency Resolution\r\nError: Missing Dependency: mkinitrd >= 6.0.9-7.1 is needed
    by package kernel\r\n--------------------------------------------\r\nop aborted...\r\n\r\ntrying
    and trying I found that mkinitrd-6.0.9-7.1.i386.rpm needs nash-6.0.9-7.1.i386.rpm\r\n\r\n(old
    nash rough uninstall removes FC5 & FC6 kernel...)\r\n\r\nI tried rpm -U but\r\n\r\n--------------------------------------------\r\n#
    rpm -U mkinitrd-6.0.9-7.1.i386.rpm\r\nerreur: D&Atilde;&copy;pendances requises:\r\n
    \       nash = 6.0.9-7.1 est n&Atilde;&copy;cessaire pour mkinitrd-6.0.9-7.1.i386\r\n#
    rpm -U nash-6.0.9-7.1.i386.rpm\r\nerreur: D&Atilde;&copy;pendances requises:\r\n
    \       nash = 6.0.9-5 est n&Atilde;&copy;cessaire pour (d&Atilde;&copy;ja  install&Atilde;&copy;)
    mkinitrd-6.0.9-5.i386\r\n--------------------------------------------\r\n\r\nany
    idea ?"
- id: 20918
  author: marc
  author_email: marc.lauffer@gmail.com
  author_url: ''
  date: '2007-06-14 08:20:21 -0400'
  date_gmt: '2007-06-14 13:20:21 -0400'
  content: "EDIT\r\n\r\nchecking the F7 release mirrors (http://mirror.anl.gov/pub/fedora/linux/releases/7/Fedora/i386/os/Fedora/)\r\nit
    appears that F7 comes with mkinitrd & nash 6.0.9.5...\r\n\r\nalors?\r\n\r\nwhy
    the *** am i requested to provide >= 6.0.9-7.1 ?\r\n\r\nI'm going to try out changing
    ...x86_64/os/Fedora/fedora-release-7-3.noarch.rpm and so on for ...i386/os/Fedora/fedora-release-7-3.noarch.rpm
    and so on\r\n\r\ncoming next\r\n\r\nps: apologies for my broken english..."
- id: 20933
  author: Mike
  author_email: mikearthur@hotmail.com
  author_url: ''
  date: '2007-06-14 11:00:21 -0400'
  date_gmt: '2007-06-14 16:00:21 -0400'
  content: "Thanks for posting these instructions.  Everything was going smoothly
    until the \"yum -y update\" step.  \r\n\r\n--> Processing Dependency: mkinitrd
    >= 6.0.9-7.1 for package: kernel\r\n--> Finished Dependency Resolution\r\nError:
    Missing Dependency: mkinitrd >= 6.0.9-7.1 is needed by package kernel\r\n\r\nThe
    latest mkinitrd in the yum repository is \r\n 6.0.9-5, which I have.  It looks
    like the 6.0.9-7.1 is still being tested and was submitted two days ago: http://fcp.surfsite.org/modules/newbb/viewtopic.php?topic_id=39098&forum=12\r\n\r\nHow
    can I get around this problem easily ?"
- id: 20935
  author: Mike
  author_email: mikearthur@hotmail.com
  author_url: ''
  date: '2007-06-14 11:15:00 -0400'
  date_gmt: '2007-06-14 16:15:00 -0400'
  content: "I found out from this thread that this is a new bug introduced in yum
    FC7: http://marc.info/?l=fedora-list&m=118183340219277&w=2\r\n\r\nUntil
    it is fixed you can update mkinitrd by: \r\n\r\n\"yum install mkinitrd --enablerepo=updates-testing\"\r\n\r\nand
    then do follow with the \r\n\r\n\"yum -y update\""
- id: 21044
  author: marc
  author_email: marc.lauffer@gmail.com
  author_url: ''
  date: '2007-06-15 03:44:36 -0400'
  date_gmt: '2007-06-15 08:44:36 -0400'
  content: "thanks a lot for your reactivity mike and for the job you do\r\n\r\ni'll
    give it a try and feed back soon\r\n\r\nmarc"
- id: 21146
  author: Abhishek Bhat
  author_email: abhishekbhat@hotmail.com
  author_url: ''
  date: '2007-06-15 20:36:29 -0400'
  date_gmt: '2007-06-16 01:36:29 -0400'
  content: "Hi Carson\r\nBelow is the terminal output when I run ym update on my FC6
    machine:\r\n\r\n--> Populating transaction set with selected packages. Please
    wait.\r\n---> Package libpurple.i386 0:2.0.1-1.fc6 set to be updated\r\n---> Package
    busybox.i386 1:1.2.0-4 set to be updated\r\n--> Running transaction check\r\n-->
    Processing Dependency: faad2  Processing Dependency: libmeanwhile.so.1 for package:
    libpurple\r\n--> Restarting Dependency Resolution with new changes.\r\n--> Populating
    transaction set with selected packages. Please wait.\r\n---> Package meanwhile.i386
    0:1.0.2-3.fc6 set to be updated\r\n--> Running transaction check\r\n--> Processing
    Dependency: faad2  Finished Dependency Resolution\r\n--> Populating transaction
    set with selected packages. Please wait.\r\n---> Package kernel.i686 0:2.6.18-1.2798.fc6
    set to be erased\r\n---> Package kernel-devel.i686 0:2.6.18-1.2798.fc6 set to
    be erased\r\n--> Running transaction check\r\n--> Processing Dependency: faad2
    \ Finished Dependency Resolution\r\nError: Missing Dependency: faad2 "
- id: 21153
  author: Abhishek Bhat
  author_email: abhishekbhat@hotmail.com
  author_url: ''
  date: '2007-06-15 20:38:06 -0400'
  date_gmt: '2007-06-16 01:38:06 -0400'
  content: "I guess my previous post was too long to fit everything in.\r\n\r\nMy
    question is how to get around this missing dependency problem in this particular
    case and also in general because I am sure after resolving this one there will
    be more !!!"
- id: 21231
  author: ankon
  author_email: andreas@syndrom23.de
  author_url: ''
  date: '2007-06-16 11:24:27 -0400'
  date_gmt: '2007-06-16 16:24:27 -0400'
  content: "Did a upgrade from FC6 to F7, worked more or less without problems (x86_64).\r\n\r\nSome
    notes:\r\n- to get rid of the .fc6 packages, i did a package-cleanup --orphans
    | grep -v 'Setting up' | (more grep -v for packages still needed) | rpm -e. Worked
    fine so far, and according to the release note some FC6 packages haven't been
    \ name-changed because nothing else was updated.\r\n- Got ugly java errors again,
    referring to ld-linux-x86-64.so.2+0x91bd (offset may vary). If that happens, running
    /etc/cron.daily/prelink helps.\r\n\r\nThanks for this post!"
- id: 21423
  author: marc
  author_email: marc.lauffer@gmail.com
  author_url: ''
  date: '2007-06-18 04:06:53 -0400'
  date_gmt: '2007-06-18 09:06:53 -0400'
  content: "retried everything using\r\n\"yum install mkinitrd --enablerepo=updates-testing\"\r\nbefore\r\nyum
    update\r\n\r\n... worked perfectly !\r\n\r\nuname -a says\r\nLinux xxxxxxx 2.6.21-1.3228.fc7
    #1 SMP Tue Jun 12 15:37:31 EDT 2007 i686 i686 i386 GNU/Linux\r\n\r\ngreat job
    Mike and thanks for your help\r\n\r\nsee you for next upgrade !"
- id: 21753
  author: saro
  author_email: saravan@fastmail.com
  author_url: ''
  date: '2007-06-20 15:37:53 -0400'
  date_gmt: '2007-06-20 20:37:53 -0400'
  content: "Hi carson, \r\n\r\nI fixed the nvidia \"Root window size (2560/1024) is
    bigger then maximum texture size (2048&Atilde;&mdash;2048)\" problem.\r\n\r\nI
    had to remove the nvidia drivers and install nvidia-96xx drivers which support
    AIGLX\r\n\r\nNow Beryl is working fine and I am a happy man ;)\r\n\r\nSaro"
- id: 21855
  author: Terry
  author_email: tmhunt2@yahoo.com
  author_url: ''
  date: '2007-06-21 14:50:58 -0400'
  date_gmt: '2007-06-21 19:50:58 -0400'
  content: "Sure wish I would have seen this about 5 minutes ago!  \r\n\r\nI am in
    the middle of a DVD upgrade (aka precurser to fresh a install) from FC6 to F7.
    \ \r\n\r\nPray for me."
- id: 22241
  author: Dave
  author_email: dave@theansells.com
  author_url: ''
  date: '2007-06-24 12:09:49 -0400'
  date_gmt: '2007-06-24 17:09:49 -0400'
  content: "Error: Unable to satisfy dependencies\r\nError: Package mkinitrd needs
    nash = 5.1.19.0.3-1, this is not available.\r\nError: Package mkinitrd needs libparted-1.8.so.2,
    this is not available.\r\nAny clues?"
- id: 22308
  author: Mick
  author_email: mick@linux.ca
  author_url: ''
  date: '2007-06-24 21:51:18 -0400'
  date_gmt: '2007-06-25 02:51:18 -0400'
  content: "Hi Carson --\r\n\r\nAfter wading through a whole river of crap trying
    to install F7 from DVD, net, etc., I went back to FC6 until I found your instructions
    and subsequent addendums from everyone else tonight. I'm now in the middle of
    an upgrade...\r\n\r\nAnd Terry, I pray that you got through your DVD upgrade -
    if not, we can weep together...\r\n\r\nMick"
- id: 22399
  author: Fr3d
  author_email: fred@fr3d.org
  author_url: http://www.fr3d.org/
  date: '2007-06-25 13:57:17 -0400'
  date_gmt: '2007-06-25 18:57:17 -0400'
  content: "Thanks for the guide - worked fine, apart from one problem:\r\n\r\nI get
    the following error while trying to boot the F7 kernel (the old FC6 kernel works
    fine):\r\n/bin/nash: error while loading shared libraries: libm.so.6: cannot open
    object file: No such file or directory\r\n(pic: http://img236.imageshack.us/img236/2651/panicre5.jpg
    )\r\n\r\nlibm.so.6 exists, as shown here:\r\n<blockquote>root@thrawn:/lib# ll
    | grep libm-\r\n-rwxr-xr-x 1 root root  216536 2007-05-24 12:20 libm-2.6.so\r\nlrwxrwxrwx
    1 root root      11 2007-06-23 22:05 libm.so.6 -> libm-2.6.so</blockquote>\r\n\r\nAny
    ideas?"
- id: 22853
  author: Richard
  author_email: asparak@gmail.com
  author_url: ''
  date: '2007-06-30 03:55:19 -0400'
  date_gmt: '2007-06-30 08:55:19 -0400'
  content: Have you checked that libm is still in your path statement? that one is
    usually caused by a missing path in you env.
- id: 23204
  author: Richard
  author_email: asparak@gmail.com
  author_url: ''
  date: '2007-07-03 10:25:07 -0400'
  date_gmt: '2007-07-03 15:25:07 -0400'
  content: Keep an eye out for Clamav bugs. You currently can't use the version on
    Crash-hat with fc7, because fc7 removes libcurl.so.3. Default clamav-0.90-2 from
    fedora does work.
- id: 23301
  author: david
  author_email: solchitos@hotmail.com
  author_url: http://elmarrajo.com
  date: '2007-07-04 07:25:43 -0400'
  date_gmt: '2007-07-04 12:25:43 -0400'
  content: i've problems with a python dependences...
- id: 23302
  author: furgoneta
  author_email: solchitos@gmail.com
  author_url: http://es.furgomania.com
  date: '2007-07-04 07:26:43 -0400'
  date_gmt: '2007-07-04 12:26:43 -0400'
  content: "retried everything using\r\n\"yum install mkinitrd --enablerepo=updates-testing\"\r\nbefore\r\nyum
    update"
- id: 23442
  author: sgl
  author_email: acsgl@yahoo.com
  author_url: ''
  date: '2007-07-05 21:35:57 -0400'
  date_gmt: '2007-07-06 02:35:57 -0400'
  content: "well I just upgraded with pretty much no problem at all, on a vanilla
    Dell desktop (i386). Everything seems to be running fine so far.\r\n\r\nHad to
    yum remove 4suite kdemultimedia rhnlib and clamav to get 'yum -y update' to do
    its stuff. I never use them anyway and had no idea they were installed.\r\n\r\nAlso
    I got a bit confused with instruction (6) as there were no rpmnew files in my
    yum.repos.d after updating fedora-release, and in fact the fedora-release update
    didn't change my repo files at all. I first moved them out of yum.repos.d and
    then realized they were okay and moved them back in. ymmv."
- id: 23465
  author: Jane
  author_email: zhenm99@im.ac.cn
  author_url: ''
  date: '2007-07-06 02:39:39 -0400'
  date_gmt: '2007-07-06 07:39:39 -0400'
  content: "for help~thanks\r\nhello, I also have a problem like Dennis'(http://www.ioncannon.net/linux/68/upgrading-from-fc6-to-fedora7-with-yum/#comment-20752)\r\nafter
    I update from FC5&acirc;&euro;&rdquo;>FC6&acirc;&euro;&rdquo;>FC7, I can boot
    from FC5 the menu list.but can't from FC7 \r\nTo be worse, I miss to delete the
    files about FC5, so now, I can boot to the system.\r\nWhat can I do next?\r\n\r\nthanks
    a lot to note this help!"
- id: 24134
  author: Andy A
  author_email: andyasselin@hotmail.com
  author_url: ''
  date: '2007-07-12 02:18:58 -0400'
  date_gmt: '2007-07-12 07:18:58 -0400'
  content: I Just want thank you  for guide it work great update to fc6 to 7 no issues
    at all
- id: 24164
  author: Zoltan Arpadffy
  author_email: zoli@polarhome.com
  author_url: http://www.polarhome.com/
  date: '2007-07-12 08:49:27 -0400'
  date_gmt: '2007-07-12 13:49:27 -0400'
  content: "Hello,\r\n\r\nI have tried to upgrade my FC6 to version 7.\r\n... but
    I can not upgrade because of missing dependency.\r\n\r\n...\r\n--> Finished Dependency
    Resolution\r\nError: Missing Dependency: libgcj = 4.1.2-12 is needed by package
    libgcj-src\r\n\r\nFrom other side:\r\n# rpm -q libgcj\r\nlibgcj-4.1.2-13.fc6\r\n\r\nThis
    means that FC6 has a newer package then Fedora 7.\r\n\r\nWhat should I do in order
    to make the upgrade as smooth as possible?\r\n\r\nThank you in advance\r\n\r\nRegards,
    \r\nZ"
- id: 24267
  author: Zoltan Arpadffy
  author_email: zoli@polarhome.com
  author_url: http://www.polarhome.com/
  date: '2007-07-13 04:06:04 -0400'
  date_gmt: '2007-07-13 09:06:04 -0400'
  content: "(continue)\r\n\r\n... I have solved the problem above with downloading
    and installing libgcj-src-4.1.2-13.fc6. That allowed me to contimue tha upgrade.\r\n\r\nThere
    were still some problems with conflicting files, but removing older files solved
    that issue as well.\r\n\r\nAlso on yet another box there was also problem with
    libgcj... but this tme with shareble object version. I got a missing dependency
    for libgcj.so.8rh that does not even exist yet in i386 architecture (just in x86_64)
    - well, I erased some 5-6 -java packages that was dependent on that and the upgrade
    continued.\r\n\r\nIt is strange that it worked for you all smooth... \r\n\r\nTo
    be honest I have used redhat and later fedora distibutions since 1995 and I could
    not make a smooth upgrade - not even once.\r\n\r\nRegards, \r\nZ"
- id: 24472
  author: Zoltan Arpadffy
  author_email: zoli@polarhome.com
  author_url: http://www.polarhome.com
  date: '2007-07-14 17:01:21 -0400'
  date_gmt: '2007-07-14 22:01:21 -0400'
  content: "... and one last note.\r\n\r\nFrom two boxes that I have upgraded one
    booted up OK (except that the F7 kernel changed hda device to sda for some reason)...
    but another box fails with F7 kernel with kernel panic (can not find /dev/root
    ???)\r\nWith old FC6 kernel it boots OK.\r\n\r\nAny ideas?\r\n\r\nRegards,\r\nZ"
- id: 24667
  author: Taihlo
  author_email: taihlo@nycap.rr.com
  author_url: http://www.taihlo.com
  date: '2007-07-16 08:54:26 -0400'
  date_gmt: '2007-07-16 13:54:26 -0400'
  content: "I have found that with the change in the naming of Hard disks in F7 there
    are a few other issues, such as you can't boot a system that only has SATA Hard
    disks without a kernel panic... Otherwise, I would have upgraded my little box
    3 weeks ago!\r\n\r\nGreat guide though!"
- id: 25081
  author: Who Cares
  author_email: ok@nowhere.com
  author_url: ''
  date: '2007-07-20 22:33:14 -0400'
  date_gmt: '2007-07-21 03:33:14 -0400'
  content: Are you sure the initial rpm -Uvh links are correct? As far as I understand
    EC2 does not support 64-bit images. Someone will get thrown off by that.
- id: 25082
  author: Who Cares
  author_email: ok@nowhere.com
  author_url: ''
  date: '2007-07-20 22:34:14 -0400'
  date_gmt: '2007-07-21 03:34:14 -0400'
  content: Never mind. I guess this is about a simple, non-EC2 specific upgrade. My
    bad!
- id: 25169
  author: neo
  author_email: neoworld03@gmail.com
  author_url: ''
  date: '2007-07-23 03:49:26 -0400'
  date_gmt: '2007-07-23 08:49:26 -0400'
  content: What if we have a system under Reiserfs and wish to upgrade from FC6 to
    F7 through yum. There are no appropriate tool to label reiserfs partition when
    it's mounter. The problem is only with the ATA disks. Extract from FC site "Use
    of /dev/hdX is deprecated on i386 and and x86_64 for IDE drives, and has changed
    to /dev/sdX  except on PPC".See note about the importance of labeling devices
    for upgrades from FC6. Nothing was provided to tackle with partition Reiserfs
- id: 25182
  author: upgrader
  author_email: erik_bies@hotmail.com
  author_url: ''
  date: '2007-07-23 16:06:49 -0400'
  date_gmt: '2007-07-23 21:06:49 -0400'
  content: Already anyone with a successful FC5 -> F7 upgrade without going via FC6?
    Or should I go via FC6
- id: 25184
  author: Allen
  author_email: allen@isye.gatech.edu
  author_url: ''
  date: '2007-07-23 16:32:47 -0400'
  date_gmt: '2007-07-23 21:32:47 -0400'
  content: "Nearly flawless!  I had two problems which I'll note here in case anybody
    else encounters them:\r\n\r\n1.  When I ran \"yum -y update\" it was upset about
    dependencies relating to libgcj and libFLAC.  Couldn't quickly figure out why
    but resolved this by manually downloading the proper FC7 packages and installing
    them with \"rpm -U --nodeps --force\".  After this I was able to run the yum command
    successfully.\r\n\r\n2.  After the reboot, I had NVidia issues as well, quite
    possibly the same as carson's.  My steps to resolve this were first running \"sh
    NVIDIA-Linux-x86-1.0-9755-pkg1.run\".  Once that completed, I had to do the following:\r\n\r\ncp
    -rp /usr/X11R6/lib/modules/* /usr/lib/xorg/modules\r\n\r\nX came right up after
    that.\r\n\r\nOh, #3 discovered just now.  Thunderbird wouldn't start, had to:\r\n\r\nchmod
    755 /usr/lib/thunderbird-2.0.0.5\r\n\r\nHope this helps, thanks for the instructions!\r\n\r\nAllen"
- id: 25683
  author: Zoltan Arpadffy
  author_email: zoli@polarhome.com
  author_url: http://www.polarhome.com/
  date: '2007-07-30 03:45:02 -0400'
  date_gmt: '2007-07-30 08:45:02 -0400'
  content: "Hello,\r\n\r\nI would like to add a finale note to all my FC6->F7 upgrade.\r\n\r\nAs
    you could read, it was not smooth at all but at the end I was able to boot into
    my box with F7 kernels.\r\n\r\nThe key was:\r\n1. label all partitions that are
    not labeled.\r\n2. in fstab use just LABELs.\r\n3. edit grub.conf to use boot
    from LABEL=/\r\n\r\nThis is not straightforward from the documentation and everybody
    who upgraded older FC distributions will face such problems.\r\n\r\nSpecially
    my old box that went through RH 7.3->8->9->FC3->FC4->FC5->FC6->F7 upgrades with
    same partitions! :)\r\n\r\n... but as I told you, not even one went smooth. Wonder,
    have RH and Fedora folk tried yum updates at all.\r\n\r\nOK, I know that it is
    not reccomended nor supported, but as we can see here, there is a huge demand
    for such updates - therfore Fedora should change the approach if they want to
    keep the leading position. You know, Debian and recently Ubuntu have never made
    such troubles during (dselect) updates.\r\n\r\nRegards, \r\nZ"
- id: 26082
  author: Jonathan
  author_email: nojunkml@yahoo.com
  author_url: ''
  date: '2007-08-03 17:19:33 -0400'
  date_gmt: '2007-08-03 22:19:33 -0400'
  content: "I'm running into some problems.  I upgraded python, python-libs, python-devel,
    rpm, rpm-python, python-urlgrabber and yum manually.  Then I try to run yum -y
    upgrade,\r\nIt says \r\nsqlite3.DatabaseError: Older version of yum sqlite\r\nThen
    I manually updated sqlite and it still give me that."
- id: 26146
  author: Jonathan
  author_email: nojunkml@yahoo.com
  author_url: ''
  date: '2007-08-04 12:00:08 -0400'
  date_gmt: '2007-08-04 17:00:08 -0400'
  content: Ahh, forgot to update yum-metadata-parser.  Hopefully, it'll go smoothly
    now.
- id: 26547
  author: Fedora 6 Upgrader
  author_email: mercutio@iinet.net.au
  author_url: ''
  date: '2007-08-11 10:50:30 -0400'
  date_gmt: '2007-08-11 15:50:30 -0400'
  content: "Dave (at entry 28), assuming you haven't fixed this yet ....\r\n\r\nI
    had the same problem - seems to be a multilib issue if you're running x86-64.
    \ Try this:\r\n\r\nRemove any and all of the i386 RPM versions of parted, mkinitrd
    and nash (you may not have all). Then re-run your yum upgrade."
- id: 26741
  author: Orry
  author_email: therealorry1@bigpond.com
  author_url: ''
  date: '2007-08-14 04:09:14 -0400'
  date_gmt: '2007-08-14 09:09:14 -0400'
  content: "I tried this upgrade but came up with this error:\r\nerror: Failed dependencies:\r\n
    \       fedora-release = 6 is needed by (installed) yum-fedorafaq-6-2007.02.03.noarch\r\n\r\nAny
    Ideas???\r\nPlease..."
- id: 26819
  author: bruk habtu
  author_email: bruk.habtu@gmail.com
  author_url: http://themightyowl.com
  date: '2007-08-15 18:37:48 -0400'
  date_gmt: '2007-08-15 23:37:48 -0400'
  content: Hey, i had dependancy issues will libgcj so i removed the stuff that required
    it (cairo-java libgconf-java glib-java libgtk-java frysk libgnome-java libglade-java
    ). Upgrade went smoothly but now i think i have broken some stuff. I tried reinstalling
    it but yum tells me that i need libgcj.so.8rh. Which doesnt seem to exist anywhere.
    I would like to reinstall those packages i removed.
- id: 26860
  author: Andy Shellam
  author_email: andy.shellam@mailnetwork.co.uk
  author_url: http://www.andyshellam.eu
  date: '2007-08-16 16:03:44 -0400'
  date_gmt: '2007-08-16 21:03:44 -0400'
  content: "Thanks for the info - coupled with some info from http://fedoraproject.org/wiki/YumUpgradeFaq,
    it worked a charm!\r\n\r\nNow just to re-compile the latest kernel :P\r\n\r\nFor
    info, I've just upgraded from FC4, but to be on the safe side I went FC4->FC5->FC6->F7.\r\n\r\nI
    think I could have gone direct from 4->7 but I wanted to be sure!"
- id: 28153
  author: Rainer Molitor
  author_email: hatchet@newsguy.com
  author_url: ''
  date: '2007-09-05 08:10:31 -0400'
  date_gmt: '2007-09-05 13:10:31 -0400'
  content: "First thanxs for your information about the upgrade. I had to do it this
    way cause my hardware is really old and i have no DVD Drive and no fast USB for
    an external disk.\r\n\r\nI ran into a litte problem with missin dependancies to
    python(abi). I solved this problem just by: \"rpm --rebuilddb\" and now everything
    works fine."
- id: 28547
  author: jonathan
  author_email: achan@jonathan360.com
  author_url: ''
  date: '2007-09-10 11:39:36 -0400'
  date_gmt: '2007-09-10 16:39:36 -0400'
  content: did anyone ever figure out the workaround for mkinitrd?  I still get the
    error saying I need nash, even though the exact version it wasn't is installed.
- id: 28626
  author: Geir Pedersen
  author_email: geirp@opera.com
  author_url: http://my.opera.com/geirp/
  date: '2007-09-11 10:26:31 -0400'
  date_gmt: '2007-09-11 15:26:31 -0400'
  content: "I had to uninstall Open Office and some other packages to get the update
    running.\r\n\r\nAfter update and reboot, I had problems reinstalling Open Office.
    Found I had to manually download and install (rpm -U --nodeps) certain packages.\r\n\r\nThanks
    for the guide!"
- id: 28634
  author: jonathan
  author_email: achan@jonathan360.com
  author_url: ''
  date: '2007-09-11 13:43:37 -0400'
  date_gmt: '2007-09-11 18:43:37 -0400'
  content: I did get that fixed by uninstalling things related to nash, and uninstalling
    the x86 versions of mkinitrd.  However I get an error saying thatfleminggent repo
    is not signed. and nothing installs.
- id: 28889
  author: Tim
  author_email: parks2466-stuff@yahoo.com
  author_url: ''
  date: '2007-09-14 15:52:45 -0400'
  date_gmt: '2007-09-14 20:52:45 -0400'
  content: "Thanks for the rather simple instructions.  I hit the libgcj issue as
    well.  Upgrading i386 rpms not x86_64 rpms.  The FC6 version is indeed newer.
    \ Zeroed in and resolved it no issues.  Thanks to those who preceeded me.\r\n\r\nHave
    problems in FC7 running webmin in secure mode (https://...).  Webmin works fine
    w/o secure mode.  Looks like perl SSLeay is out of date.  Failed to find an up
    to date FC7 perl module.  The SSLeay module complains about an undefined subroutine:
    ::CTX_new being called by webmin.\r\n\r\nAlso, logwatch perl choked on a rouge
    Errno.pm sitting in /usr/lib/perl5/site_perl/5.8.8. I removed it and logwatch
    works.\r\n\r\nNice way to get from FC6 --> FC7."
- id: 29278
  author: Mark
  author_email: bulsonmc@hotmail.com
  author_url: ''
  date: '2007-09-20 09:19:42 -0400'
  date_gmt: '2007-09-20 14:19:42 -0400'
  content: "RE: Instruction 6 - \"move fedora-development.repo and fedora-updates.repo
    out of /etc/yum.repos.d/ and replace them with fedora-development.repo.rpmnew
    and fedora-updates.repo.rpmnew.\"\r\nI found that just adding the *.rpmnew files
    worked instead of moving the old out.\r\nAnybody Else?"
- id: 29293
  author: Scott
  author_email: scottro11@gmail.com
  author_url: http://www.scottro.net
  date: '2007-09-20 10:30:18 -0400'
  date_gmt: '2007-09-20 15:30:18 -0400'
  content: "Thank you very very much for this.  I used to it upgrade FC-7 to 8.  (There
    are various differences--for instance the release rpm is in a different location)
    but the basic concept made it simple. \r\n\r\nThank you."
- id: 29385
  author: Nick
  author_email: nschween@spiderhost.com
  author_url: ''
  date: '2007-09-21 09:55:38 -0400'
  date_gmt: '2007-09-21 14:55:38 -0400'
  content: I recently tried the upgrade from fedora 6 to fedora 7 via yum. Everything
    looked ok until I rebooted the box. When using the 2.6.22.5-76 kernel, the box
    kernel panics with no init found. The legacy fedora 6 kernel will boot without
    issue. I read that fedora 7 has problems with unlabeled partitions, however the
    only labeled partition I have is /boot (which is labeled properly). Everything
    else is LVM. I'm at a complete loss at the moment.
- id: 29685
  author: Tom Craddock
  author_email: sigtom@sigtom.com
  author_url: ''
  date: '2007-09-23 20:09:40 -0400'
  date_gmt: '2007-09-24 01:09:40 -0400'
  content: "Hi all, \r\n\r\nIve been trying to follow all the above info, post and
    comments, and have run into a couple of problems already mentioned here, but never
    really got a clean answer about any of them.  When I do yum -y update I get the
    below \r\n\r\n[code]Error: Unable to satisfy dependencies\r\nError: Package cairo-java
    needs libgcj.so.8rh, this is not available.\r\nError: Package glib-java needs
    libgcj.so.8rh()(64bit), this is not available.\r\nError: Package libglade-java
    needs libgcj.so.8rh()(64bit), this is not available.\r\nError: Package mkinitrd
    needs nash = 5.1.19.0.3-1, this is not available.\r\nError: Package libgnome-java
    needs libgcj.so.8rh()(64bit), this is not available.\r\nError: Package cairo-java
    needs libgcj.so.8rh()(64bit), this is not available.\r\nError: Package pidgin
    needs libedataserver-1.2.so.7, this is not available.\r\nError: Package libgtk-java
    needs libgcj.so.8rh, this is not available.\r\nError: Package glib-java needs
    libgcj.so.8rh, this is not available.\r\nError: Package libvte-java needs libgcj.so.8rh()(64bit),
    this is not available.\r\nError: Package libgnome-java needs libgcj.so.8rh, this
    is not available.\r\nError: Package libgconf-java needs libgcj.so.8rh()(64bit),
    this is not available.\r\nError: Package libvte-java needs libgcj.so.8rh, this
    is not available.\r\nError: Package libglade-java needs libgcj.so.8rh, this is
    not available.\r\nError: Package frysk needs libgcj.so.8rh()(64bit), this is not
    available.\r\nError: Package mkinitrd needs libparted-1.8.so.2, this is not available.\r\nError:
    Package libgtk-java needs libgcj.so.8rh()(64bit), this is not available.\r\n```\r\n\r\nI
    already have nash 5.1.19.0.3-1 installed and have tried the --enable-testing to
    fix the libgcj problem, but then get another set of dep problems,\r\n[code] Error:
    Unable to satisfy dependencies\r\nError: Package mkinitrd needs nash = 5.1.19.0.3-1,
    this is not available.\r\nError: Package frysk needs libgcj.so.7rh, this is not
    available.\r\nError: Package pidgin needs libedataserver-1.2.so.7, this is not
    available.\r\nError: Package mkinitrd needs libparted-1.8.so.2, this is not available.
    ``` \r\n\r\nYet again a problem with nash, I can remove the pidgin and frysk,
    I dont mind about them, but mkinitrd still doesnt want to work.  Any ideas?"
- id: 29803
  author: Charles
  author_email: wxc_ert@yahoo.fr
  author_url: http://none
  date: '2007-09-24 15:09:09 -0400'
  date_gmt: '2007-09-24 20:09:09 -0400'
  content: "Hi,\r\nI'm exactly at the same situation than Nick, (and with no terminal
    access 'cause I rent a dedicated server). \r\nthe old kernel is Fedora 5, the
    new one fedora 7.\r\nAt this moment, it's booted on the old kernel but can't reboot
    it till I fix the grub problem.\r\n\r\nThank for help\r\n\r\nRegards\r\n\r\nTony"
- id: 30137
  author: Joe
  author_email: joe@stretchcom.com
  author_url: ''
  date: '2007-09-26 21:44:12 -0400'
  date_gmt: '2007-09-27 02:44:12 -0400'
  content: "When I run 'yum -y upgrade', I also get several python dependency errors.
    \ How do I get around this?\r\nI tried doing a 'yum localinstall python...rpm,
    but I get the same errors.  Seems like I am running into a circular dependency."
- id: 30240
  author: Jon
  author_email: jon.baker@catalystproductions.cc
  author_url: http://www.catalystproductions.cc
  date: '2007-09-27 15:40:16 -0400'
  date_gmt: '2007-09-27 20:40:16 -0400'
  content: "Do you have to label the swap partition?  My blkid output says:\r\n\r\n/dev/hda3:
    LABEL=\"/\" UUID=\"a2e18d02-c5e4-44a3-ab89-daa94cc7891c\" SEC_TYPE=\"ext2\" TYPE=\"ext3\"
    \r\n/dev/hda2: TYPE=\"swap\" \r\n/dev/hda1: LABEL=\"/boot\" UUID=\"576180e9-03cc-4ff1-9a39-fb3c8eaa4e56\"
    SEC_TYPE=\"ext2\" TYPE=\"ext3\"\r\n\r\nAs you can see, /dev/hda2 is the swap,
    but there is no label.  Attempting to label it, I get the error:\r\n\r\n/sbin/e2label:
    Bad magic number in super-block while trying to open /dev/hda2\r\nCouldn't find
    valid filesystem superblock.\r\n\r\nI'd hate to install and reboot only to find
    that I no longer have a swap drive..."
- id: 30242
  author: Jon
  author_email: jon.baker@catalystproductions.cc
  author_url: http://www.catalystproductions.cc
  date: '2007-09-27 15:52:43 -0400'
  date_gmt: '2007-09-27 20:52:43 -0400'
  content: Never mind, somehow I missed the swap comment in the comments the first
    time.
- id: 30439
  author: John
  author_email: jharitos@yahoo.com
  author_url: ''
  date: '2007-09-29 03:45:55 -0400'
  date_gmt: '2007-09-29 08:45:55 -0400'
  content: "How do you get around the python(abi) = 2.4 dependency issue. I tried
    to blow away what needs it but it was too much stuff like yum etc so I backed
    out. Also another poster said to rpm --rebuilddb but that didn't work.\r\n\r\nAlso,
    I get hpijs needs libnetsnmp and I don't even have hpijs installed."
- id: 30522
  author: Artem S. Tashkinov
  author_email: birdie@permonline.ru
  author_url: ''
  date: '2007-09-30 16:20:44 -0400'
  date_gmt: '2007-09-30 21:20:44 -0400'
  content: "Nick & Charlie:\r\n\r\nProbably you have to recreate initrd of your
    Fedora 7 kernel by issuing this command under root account (or use sudo):\r\n\r\nmkinitrd
    /boot/initrd-2.6.22.5-76 2.6.22.5-76\r\n\r\nthen check the contents of /boot/grub/grub.conf"
- id: 30523
  author: Artem S. Tashkinov
  author_email: birdie@permonline.ru
  author_url: ''
  date: '2007-09-30 16:24:39 -0400'
  date_gmt: '2007-09-30 21:24:39 -0400'
  content: "2 upgrader comment #45:\r\n\r\nI've successfully upgraded two fedora 5
    servers to fedora 7."
- id: 31024
  author: Trylinux.org &raquo; Installing with Media is so 90s
  author_email: ''
  author_url: http://trylinux.org/2007/10/04/installing-with-media-is-so-90s/
  date: '2007-10-04 15:17:00 -0400'
  date_gmt: '2007-10-04 20:17:00 -0400'
  content: "[...] http://www.ioncannon.net/system-administration/99/upgrade-fc5-to-fc6-with-yum/
    http://www.ioncannon.net/linux/68/upgrading-from-fc6-to-fedora7-with-yum/ [...]"
- id: 32206
  author: Edwin
  author_email: ebuck70@yahoo.com
  author_url: ''
  date: '2007-10-13 09:49:46 -0400'
  date_gmt: '2007-10-13 14:49:46 -0400'
  content: If you're new and hesitant to upgrade your system this way, don't forget
    that you can always burn the install DVDs and update that way.  It's also the
    preferred method of upgrading that the Fedora mantainers recommend.
- id: 32289
  author: Esteban
  author_email: pibemagnani@yahoo.com.ar
  author_url: ''
  date: '2007-10-14 16:37:19 -0400'
  date_gmt: '2007-10-14 21:37:19 -0400'
  content: "I've tried everything here and moved ahead, to yum upgrade to FC7 but
    had more troubles.\r\n1) I had to erase many i386 libraries by hand (Mine is a
    64bit PC with a FC7 x86_64). It looks like I had old libraries from previous installs
    that were not needed anymore. Sometimes I had to point to the whole name of the
    library which was causing the trouble to avoid having half my Fedora erased due
    to dependencies.\r\n2) Then I also had memory problems and sorted that out with
    starting my computer without Gnome or KDE (how is it called in English? In Spanish
    ys just a console \"A prueba de fallos\" or something like that. Then when I run
    yum -y update it worked out fine (after two days of struggle, of course).\r\nAll
    this probably seem quiet obvius for most users but was missing in most sites so
    other newbies can probably appreciate the tip.\r\nthanks a lot"
- id: 32399
  author: Esteban
  author_email: pibemagnani@yahoo.com.ar
  author_url: ''
  date: '2007-10-16 15:15:03 -0400'
  date_gmt: '2007-10-16 20:15:03 -0400'
  content: "One last thing: does anyone else have trouble after the upgrade with open
    office? I can't use it because it freezes my fedora both in gnome and KDE.\r\n???"
- id: 34160
  author: Jon
  author_email: jon.baker@catalystproductions.cc
  author_url: http://www.catalystproductions.cc
  date: '2007-10-29 11:03:17 -0400'
  date_gmt: '2007-10-29 16:03:17 -0400'
  content: "I have done several of these updates on several boxes, but only one has
    been set up with LVM's and it is giving me fits.  I'm hoping I can get some insight!
    \ Here is my /etc/fstab:\r\n\r\n/dev/RootUsr/root       /                       ext3
    \   defaults        1 1\r\nLABEL=/boot             /boot                   ext3
    \   defaults        1 2\r\ndevpts                  /dev/pts                devpts
    \ gid=5,mode=620  0 0\r\ntmpfs                   /dev/shm                tmpfs
    \  defaults        0 0\r\n/dev/Home/home          /home                   ext3
    \   defaults        1 2\r\nproc                    /proc                   proc
    \   defaults        0 0\r\nsysfs                   /sys                    sysfs
    \  defaults        0 0\r\n/dev/TmpVar/temp        /tmp                    ext3
    \   defaults        1 2\r\n/dev/RootUsr/usr        /usr                    ext3
    \   defaults        1 2\r\n/dev/RootUsr/usrlocal   /usr/local              ext3
    \   defaults        1 2\r\n/dev/TmpVar/Var         /var                    ext3
    \   defaults        1 2\r\nLABEL=SWAP-sda5         swap                    swap
    \   defaults        0 0\r\n\r\n\r\nHere is my /etc/grub.conf:\r\n\r\n# grub.conf
    generated by anaconda\r\n#\r\n# Note that you do not have to rerun grub after
    making changes to this file\r\n# NOTICE:  You have a /boot partition.  This means
    that\r\n#          all kernel and initrd paths are relative to /boot/, eg.\r\n#
    \         root (hd0,0)\r\n#          kernel /vmlinuz-version ro root=/dev/RootUsr/root\r\n#
    \         initrd /initrd-version.img\r\n#boot=/dev/sda\r\ndefault=0\r\ntimeout=5\r\nsplashimage=(hd0,0)/grub/splash.xpm.gz\r\nhiddenmenu\r\n#
    FC7 is kernel panicing with being unable to find /dev/root, will set to boot in
    FC6 for now\r\ntitle Fedora (2.6.22.9-91.fc7)\r\n        root (hd0,0)\r\n        kernel
    /vmlinuz-2.6.22.9-91.fc7 ro root=/dev/RootUsr/root rhgb quiet\r\n        initrd
    /initrd-2.6.22.9-91.fc7.img\r\ntitle Fedora Core (2.6.20-1.2925.fc6)\r\n        root
    (hd0,0)\r\n        kernel /vmlinuz-2.6.20-1.2925.fc6 ro root=/dev/RootUsr/root
    rhgb quiet\r\n        initrd /initrd-2.6.20-1.2925.fc6.img\r\n\r\nand my /sbin/blkid:\r\n\r\n/dev/mapper/RootUsr-usr:
    UUID=\"30efb3c6-afbe-4317-b305-abfd963a937c\" SEC_TYPE=\"ext2\" TYPE=\"ext3\"
    \r\n/dev/mapper/Home-home: UUID=\"94fbd273-d772-48e1-85bc-4b538da687f3\" SEC_TYPE=\"ext2\"
    TYPE=\"ext3\" \r\n/dev/mapper/TmpVar-temp: UUID=\"0ceb8a2d-560e-413c-977c-21553ed0862f\"
    SEC_TYPE=\"ext2\" TYPE=\"ext3\" \r\n/dev/mapper/TmpVar-Var: UUID=\"0698dc8b-a4bc-479a-9a78-a255adb64d19\"
    SEC_TYPE=\"ext2\" TYPE=\"ext3\" \r\n/dev/mapper/RootUsr-root: UUID=\"8ece899e-6da2-4c5b-9bbb-10a9e3c508c9\"
    SEC_TYPE=\"ext2\" TYPE=\"ext3\" \r\n/dev/mapper/RootUsr-usrlocal: UUID=\"0d01b49f-cba1-4891-94b5-126f1176dee4\"
    SEC_TYPE=\"ext2\" TYPE=\"ext3\" \r\n/dev/sda1: LABEL=\"/boot\" UUID=\"e7513adf-203b-4f57-a30f-52b4eec84b0a\"
    SEC_TYPE=\"ext2\" TYPE=\"ext3\" \r\n/dev/sda5: TYPE=\"swap\" LABEL=\"SWAP-sda5\"
    \r\n/dev/RootUsr/root: UUID=\"8ece899e-6da2-4c5b-9bbb-10a9e3c508c9\" SEC_TYPE=\"ext2\"
    TYPE=\"ext3\"\r\n\r\nI get a kernel panic with it saying it cannot mount /dev/root\r\n\r\nIt
    boots fine if I roll back to FC6"
- id: 34393
  author: Jon
  author_email: jon.baker@catalystproductions.cc
  author_url: http://www.catalystproductions.cc
  date: '2007-11-01 16:02:58 -0400'
  date_gmt: '2007-11-01 21:02:58 -0400'
  content: "Found the solution here, apparently there is a bug with FC7 and LVM's:\r\n\r\nhttps://bugzilla.redhat.com/show_bug.cgi?id=241949#c26\r\n\r\nExecuted
    this while booted in FC6:\r\n\r\n/sbin/mkinitrd -f --force-lvm-probe /boot/initrd-2.6.22.9-91.fc7.img\r\n2.6.22.9-91.fc7\r\n\r\nBooted
    back in FC7 just fine."
- id: 38112
  author: Che
  author_email: dsd@fd.com
  author_url: ''
  date: '2007-11-27 17:49:21 -0500'
  date_gmt: '2007-11-27 22:49:21 -0500'
  content: "For those having python issues \r\n\r\nyum remove rhnlib up2date\r\n\r\nThat
    should take care of your problem"
- id: 38846
  author: David
  author_email: david@mellow.net
  author_url: ''
  date: '2007-12-04 02:51:27 -0500'
  date_gmt: '2007-12-04 07:51:27 -0500'
  content: "It worked perfectly for me. I'm using raid.\r\n\r\nIf, like me, you have
    the server in a remote location it's a good idea to use grub's \"savedefault\"
    and \"fallback\" features. That way you can tell grub to fall back to another
    kernel if the default panics."
- id: 39290
  author: Mark
  author_email: jr_cumberland@yahoo.com
  author_url: ''
  date: '2007-12-08 09:47:46 -0500'
  date_gmt: '2007-12-08 14:47:46 -0500'
  content: "After following this entire thread, I still have:\r\n\r\nError: Missing
    Dependency: libnetsnmp.so.10 is needed by package hpijs\r\nError: Missing Dependency:
    python(abi) = 2.4 is needed by package authconfig\r\nError: Missing Dependency:
    python-abi = 2.4 is needed by package system-config-printer-libs\r\nError: Missing
    Dependency: libedataserver-1.2.so.7 is needed by package pidgin\r\nError: Missing
    Dependency: python(abi) = 2.4 is needed by package hplip\r\nError: Missing Dependency:
    libnetsnmp.so.10 is needed by package hplip\r\nError: Missing Dependency: python(abi)
    = 2.4 is needed by package rpm-python\r\nError: Missing Dependency: libnetsnmp.so.10
    is needed by package libsane-hpaio\r\nError: Missing Dependency: python(abi) =
    2.4 is needed by package system-config-printer-libs\r\nError: Missing Dependency:
    python(abi) = 2.4 is needed by package libxml2-python\r\nError: Missing Dependency:
    libpq.so.4 is needed by package dovecot\r\n\r\nWhat is the command to force the
    install?  Or is that suggested?"
- id: 43644
  author: tony
  author_email: wiegmant@gmail.com
  author_url: ''
  date: '2008-01-12 10:18:04 -0500'
  date_gmt: '2008-01-12 15:18:04 -0500'
  content: "Hi I had the same problem (python(abi) = 24. etc).\r\nI found a solution
    (the upgrade is running now), via\r\nhttp://fcp.surfsite.org/modules/newbb/viewtopic.php?viewmode=flat&order=ASC&topic_id=49437&forum=10&move=next&topic_time=1197946322\r\n.\r\ni.e:
    remove authconfig and other depending packages.\r\n\r\nGood luck.\r\n\r\nTon"
- id: 43659
  author: obmar
  author_email: awalludin.ramlee@gmail.com
  author_url: http://-
  date: '2008-01-12 11:40:04 -0500'
  date_gmt: '2008-01-12 16:40:04 -0500'
  content: "keeps on stupping at this on doung a yum update.\r\nany suggestions?\r\nregards
    and tks\r\n\r\n--> Processing Dependency: libFLAC.so.7 for package: gstreamer08-plugins\r\n-->
    Processing Dependency: xine-lib = 1.1.9.1 for package: xine-lib-extras-nonfree\r\n-->
    Finished Dependency Resolution\r\nError: Missing Dependency: libFLAC.so.7 is needed
    by package gstreamer08-plugins\r\nError: Missing Dependency: xine-lib = 1.1.9.1
    is needed by package xine-lib-extras-nonfree"
- id: 43939
  author: Philip Diaz
  author_email: diazphi@gmail.com
  author_url: ''
  date: '2008-01-13 05:32:53 -0500'
  date_gmt: '2008-01-13 10:32:53 -0500'
  content: "I tried to upgrade fedora 6 to 7 and followed the instructions carefully.
    But after almost I was come-up an error such as -> Finished Dependency Resolution\r\nError:
    Missing Dependency: python(abi) = 2.4 is needed by package authconfig\r\nError:
    Missing Dependency: python(abi) = 2.4 is needed by package libxml2-python\r\nError:
    Missing Dependency: python-abi = 2.4 is needed by package system-config-printer-libs\r\nError:
    Missing Dependency: python(abi) = 2.4 is needed by package hplip\r\nError: Missing
    Dependency: python(abi) = 2.4 is needed by package rpm-python\r\nError: Missing
    Dependency: python(abi) = 2.4 is needed by package system-config-printer-libs\r\nError:
    Missing Dependency: libedataserver-1.2.so.7 is needed by package pidgin\r\n\r\nI
    was tried to check the version of python installed and I am currently using Python
    2.4.4 (#1, Oct 23 2006, 13:58:00) \r\n[GCC 4.1.1 20061011 (Red Hat 4.1.1-30)]
    on linux2\r\nType \"help\", \"copyright\", \"credits\" or \"license\" for more
    information.\r\n\r\nPlease help me to understand what's the meaning of the error
    were occured during yum update.\r\n\r\nI am looking forward for possible reply
    for the best minded people who are willing to share their ability and great knowledge
    to everyone.\r\n\r\nThank you.\r\n\r\nPhilip"
- id: 45349
  author: lightpace
  author_email: bitmark2@hotmail.com
  author_url: ''
  date: '2008-01-20 00:17:22 -0500'
  date_gmt: '2008-01-20 05:17:22 -0500'
  content: i updated fc6 to fc8 directly ad it worked like charm after following the
    steps.
- id: 45738
  author: Greg James
  author_email: greg@jradconsulting.com
  author_url: http://www.jradconsulting.com
  date: '2008-01-22 09:03:09 -0500'
  date_gmt: '2008-01-22 14:03:09 -0500'
  content: "Zoltan,\r\nI had the same problem upgrading to F7. F7 would not see the
    boot drive and kept getting kernel panic. FC6 kernel would boot fine. Even when
    I booted with F8 install CD, the install did not see the hard drive.\r\nTwo critical
    steps:\r\n1) manually change /boot/grub/device.map to it has /dev/sda and not
    /dev/hda.\r\n2) My old WD Cavier boot drive had the jumper on master. I changed
    the jumper to cable select (CS). \r\nNow F7 and F8 see the drive and everything
    works perfectly. I didn't think Fedora was picky about the master/slave/cable
    select thing, but starting in F7, it is.\r\nHope this helps.\r\nGreg James"
- id: 45739
  author: Greg James
  author_email: greg@jradconsulting.com
  author_url: http://www.jradconsulting.com
  date: '2008-01-22 09:05:42 -0500'
  date_gmt: '2008-01-22 14:05:42 -0500'
  content: "Philip Diaz,\r\nI had a similar problem. I just rpm -e the packages having
    the problem then I could do the upgrade. Then I just yum installed them back in
    after the upgrade.\r\nHope this helps.\r\nGreg James"
- id: 51240
  author: person1873
  author_email: Andrew_Ehlan_ACE@live.com.au
  author_url: ''
  date: '2008-02-16 08:52:57 -0500'
  date_gmt: '2008-02-16 13:52:57 -0500'
  content: i know people have been asking left right and center if it's possible to
    skip a version, and i'm no different appart from that i want to go from fc6 to
    f8. is this possible without the whole f7 step, could i just put the f8 repo's
    in rather than f7?
- id: 51494
  author: Dharmesh V Patel
  author_email: dvpforums@gmail.com
  author_url: ''
  date: '2008-02-17 10:22:15 -0500'
  date_gmt: '2008-02-17 15:22:15 -0500'
  content: This seems to be a very good guide EXCEPT that its for x86_64 systems.
    I did not realize that and stupidly fired the rpm -Uhv command on my non 64 bit
    system. I am still trying to recover. With more and more folks now running the
    new hardware which is 64bit, it might not be an issue but it might help if you
    put it up in the title that the steps are for x64 architecture. My upgrade is
    running currently and I will post the changes (no renaming to rpmnew is required
    etc) once the upgrade finishes. I intend to do a 2 step upgrade going from FC6
    to Fedora 8.
- id: 51740
  author: Dharmesh V Patel
  author_email: dvpforums@gmail.com
  author_url: ''
  date: '2008-02-18 08:29:39 -0500'
  date_gmt: '2008-02-18 13:29:39 -0500'
  content: "The two step upgrade went fine after I got the i386 versions of the rpms
    in the first command. All the dependency erros (there were hundereds of them)
    went away and an hour and half later I was at Fedora 7. I had the labels correctly
    and I followed the fedora Upgrading using yum instructions too and changed my
    boot drive to /dev/sda in the grub config (from /dev/hda/) before booting. Machine
    booted up just fine.\r\n\r\nThanks for the instructions. They too came in pretty
    handy."
- id: 52393
  author: anon
  author_email: pavlidis@yalco.gr
  author_url: ''
  date: '2008-02-20 05:44:05 -0500'
  date_gmt: '2008-02-20 10:44:05 -0500'
  content: I had a problem after the update on a system where LVM was on a soft RAID.
    The system has 2 ATA and 2 SATA drives on soft (md) RAID-1 configuration. Yes,
    I know, I could make raid on LVM by itself, but at the time it was built I was
    more familiar with md. Know, upon boot with the kernel of fedora 7, the order
    of drives changes, and sata drives do not come as sda/sdb but as sdbc/sdd, and
    the ata disks take the sda & sdb labels. As i have the / partition on ata
    disks, the system boots, but loses completely the filesystem on LVM (it does not
    get recognized). Any hints will be welcomed!
- id: 68534
  author: Matt
  author_email: mrex@iinet.net.au
  author_url: http://mattrexphoto.com
  date: '2008-05-15 03:35:09 -0400'
  date_gmt: '2008-05-15 08:35:09 -0400'
  content: "Good work Artem S. Tashkinov !!!\r\n\r\nYour tip to re-create the initrd
    image fixed my problem.\r\n\r\nNow I just need to figure out why udev is only
    building device nodes for 2 out of 4 drives in my RAID array... :-("
- id: 81072
  author: Shaun
  author_email: shaun@noreply.com
  author_url: ''
  date: '2008-07-09 14:22:03 -0400'
  date_gmt: '2008-07-09 19:22:03 -0400'
  content: python(api) errors.. just run `yum remove authconfig`
- id: 91115
  author: Ron
  author_email: rong@mpinet.com
  author_url: http://n/a
  date: '2008-08-19 22:55:05 -0400'
  date_gmt: '2008-08-20 03:55:05 -0400'
  content: "I ran yum update and only had issues with Python like others..  I removed
    authconfig    vlc     4Suite (part of Python).  upgrade went great..  I then reinstalled
    a VLC package for fc7 and we are in business.    I'll update 4Suite tomorrow..
    \ don't even know if I need it or not.\r\nI also have softraid with 2 250GB drives
    with LVM and everything was labelled correctly.   \r\n\r\nFC6  to  FC7 went fine..
    \ and this is after having this server running about a year on FC6 with no problems..
    \  \r\n\r\nThanks for all the good tips."
- id: 122760
  author: doc
  author_email: erik@q32.com
  author_url: http://documentroot.com
  date: '2009-02-11 03:55:29 -0500'
  date_gmt: '2009-02-11 08:55:29 -0500'
  content: "for those on 64-bit machines having problems saying \"nash\" is required,
    etc., and in case you (i) forgot the extremely forgettable syntax for querying
    package architectures (i have run into this many times, and each time i come back
    here to remember, and re-figure this out):\r\n\r\n1. run this \r\n\r\nrpm -q --queryformat='%{N}-%{V}-%{R}.%{arch}\\n'
    mkinitrd\r\nrpm -q --queryformat='%{N}-%{V}-%{R}.%{arch}\\n' parted\r\nrpm -q
    --queryformat='%{N}-%{V}-%{R}.%{arch}\\n' nash\r\n\r\n2. then remove the x86 ones
    (may vary):\r\n\r\nrpm -e parted-1.8.2-2.fc6.i386\r\nrpm -e mkinitrd-5.1.19.0.3-1.i386\r\n\r\n2.
    then yum upgrade works..."
- id: 142307
  author: Jamie Beck
  author_email: jbeck@terabit.ca
  author_url: ''
  date: '2009-06-21 17:25:05 -0400'
  date_gmt: '2009-06-21 22:25:05 -0400'
  content: "The rpm's listed about have moved. The new command should be:\r\n\r\n```\r\nrpm
    -Uhv http://archives.fedoraproject.org/pub/archive/fedora/linux/releases/7/Fedora/i386/os/Fedora/fedora-release-7-3.noarch.rpm
    http://archives.fedoraproject.org/pub/archive/fedora/linux/releases/7/Fedora/i386/os/Fedora/fedora-release-notes-7.0.0-1.noarch.rpm\r\n```"
---

Now that Fedora 7 has been release it is time to upgrade from that crusty old Fedora Core 6. Note that they have removed the "Core" from the name so a few things have changed with the paths used in yum. Last year I did a post on how to <a href="http://www.ioncannon.net/system-administration/99/upgrade-fc5-to-fc6-with-yum/">upgrade from FC5 to FC6</a> and this upgrade happened on the first box I used for that.

1. Before you start see the note after these steps about checking for disk labels
2. yum update
3. yum clean all
4. I repeated update and clean all a second time to make sure everything got updated
5. I then ran the command:
    ```
    rpm -Uhv http://download.fedora.redhat.com/pub/fedora/linux/releases/7/Fedora/x86_64/os/Fedora/fedora-release-7-3.noarch.rpm http://download.fedora.redhat.com/pub/fedora/linux/releases/7/Fedora/x86_64/os/Fedora/fedora-release-notes-7.0.0-1.noarch.rpm
    ```
6. I then found that I had to move fedora-development.repo and fedora-updates.repo out of /etc/yum.repos.d/ and replace them with fedora-development.repo.rpmnew and fedora-updates.repo.rpmnew. I also needed to remove a custom repo I had but no longer used so I didn't take time to figure out why it needed to be removed.
7. I then did a yum -y update and waited
8. After a good wait another X server was started so you may think about not doing the update while running under X. Luckily it was able to start on another console so all was ok. Now it was time for a reboot.
9. After the reboot I had to fix up some NVidia issues but overall it looks like it upgraded without a problem

Notes on disk labels:

There are a few things listed in the release notes under <a href="http://docs.fedoraproject.org/release-notes/f7/en_US/sn-Installer.html#Upgrade-Related-Issues">Upgrade Related Issues</a>.

The first was to make sure all your drives have labels. You can do this by running the command "/sbin/blkid" and then checking that each line that is not part of the LVM system has a LABEL entry. If you need to add a label to a drive use the "/sbin/e2label" command and then edit your /etc/fstab to use the label on boot instead of the device.

```
LABEL=/boot             /boot                   ext3    defaults        1 2
```

You don't need to label LVM drives since the LVM keeps track of the drives it uses on its own. The only drive I had on a stock install that wasn't under the LVM was /boot and it had a label already.

After you upgrade they sugest running the following command and then upgrading anything that has a date before the upgrade date:

```
rpm -qa --last > RPMS_by_Install_Time.txt
```


