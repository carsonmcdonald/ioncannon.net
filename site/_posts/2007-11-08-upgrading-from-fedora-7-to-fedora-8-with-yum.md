---
layout: archive
status: publish
published: true
title: Upgrading from Fedora 7 to Fedora 8 with yum
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 133
wordpress_url: http://www.ioncannon.net/system-administration/133/upgrading-from-fedora-7-to-fedora-8-with-yum/
date: '2007-11-08 16:51:08 -0500'
date_gmt: '2007-11-08 21:51:08 -0500'
categories:
- system administration
- linux
tags: []
comments:
- id: 35506
  author: Lee
  author_email: lee@leenukes.co.uk
  author_url: http://www.leenukes.co.uk
  date: '2007-11-09 04:43:16 -0500'
  date_gmt: '2007-11-09 09:43:16 -0500'
  content: "Hello,\r\n\r\nnice guide, I had a similar problem when upgrading about
    the dependencies issue. Got it resolve much the same way though.\r\n\r\nhttp://www.leenukes.co.uk/?p=39\r\n\r\nCan
    you confirm if your gedit has a application bar above it? The one with Close,
    Minimize. Maximize etc.\r\n\r\nI'll put a screen shot on over the weekend if I
    get chance."
- id: 35544
  author: Larry
  author_email: rlarrye@carolina.rr.com
  author_url: ''
  date: '2007-11-09 17:30:04 -0500'
  date_gmt: '2007-11-09 22:30:04 -0500'
  content: "I followed the directions and updated the repo info.\r\n\r\nBut when I
    tried yum -y update,\r\n\r\nI got:\r\n\r\nSetting up Update Process\r\nNo Packages
    marked for Update\r\n\r\nWhat now?"
- id: 35552
  author: Mark
  author_email: arcotc@yahoo.co.uk
  author_url: http://arcotc.spaces.live.com
  date: '2007-11-09 18:30:32 -0500'
  date_gmt: '2007-11-09 23:30:32 -0500'
  content: "I have complete steps 1 to 3 but when I come to do the rpm -Uhv I get
    the following error:\r\n\r\nerror: Failed dependencies:\r\n        fedora-release
    = 7 is needed by (installed) yum-fedorafaq-7-2007.11.02.noarch\r\n\r\nWhen I do
    a a uname -r I get the following:\r\n\r\n# uname -r\r\n2.6.23.1-21.fc7\r\n\r\nDo
    you have any ideas?"
- id: 35554
  author: Larry
  author_email: rlarrye@carolina.rr.com
  author_url: ''
  date: '2007-11-09 19:06:20 -0500'
  date_gmt: '2007-11-10 00:06:20 -0500'
  content: Just a follow-up... I am now able to access the updates!
- id: 35656
  author: Paul
  author_email: pa_hoskins@hotmail.com
  author_url: ''
  date: '2007-11-10 10:09:38 -0500'
  date_gmt: '2007-11-10 15:09:38 -0500'
  content: "Larry,\r\n\r\nSame thing, nothing marked for update. Did you  do anything
    to get your update working?\r\n\r\nCheers"
- id: 35686
  author: Lee
  author_email: lee@leenukes.co.uk
  author_url: http://www.leenukes.co.uk
  date: '2007-11-10 17:45:53 -0500'
  date_gmt: '2007-11-10 22:45:53 -0500'
  content: "in reply to Mark:\r\n\r\nSimply do:\r\n\r\nyum -y remove yum-fedorafaq\r\n\r\nthis
    should remove the fedorafaq dependency."
- id: 35701
  author: David
  author_email: drhenner@gmail.com
  author_url: http://www.eggpad.com
  date: '2007-11-10 19:03:42 -0500'
  date_gmt: '2007-11-11 00:03:42 -0500'
  content: "Hi All,\r\n\r\nIf you use JAVA you might not want to upgrade yet.  If
    you do you might get this problem:\r\n\r\njava: xcb_xlib.c:50: xcb_xlib_unlock:
    Assertion `c->xlib.lock' failed.\r\n\r\nSo i installed the fc7 libX11-1.0.3-8.fc7.i386.rpm
    and libX11-devel-1.0.3-8.fc7.i386.rpm with the following command :\r\n\r\nrpm
    -ihv --force libX11-1.0.3-8.fc7.i386.rpm libX11-devel-1.0.3-8.fc7.i386.rpm\r\n(you
    can find them by fc7 search in http://rpm.pbone.net/index.php3/stat/2/simple/2)\r\n\r\nand
    then removed the problematic version (libX11-1.1.3-4.fc8.i386.rpm and libX11-devel-1.1.3-4.fc8.i386.rpm)
    via SMART package manager.\r\n\r\nIt worked so try it out until an update comes
    out with this resolved."
- id: 35813
  author: Andy
  author_email: andy@webrealm.co.uk
  author_url: ''
  date: '2007-11-11 07:43:37 -0500'
  date_gmt: '2007-11-11 12:43:37 -0500'
  content: "Hi All, \r\n\r\nThis worked a treat, not even any dependency issues. the
    only problem I have noticed is that whenever I run yumex I get \"Metadata file
    does not match checksum\" haven't used it in ages so not sure if this is related.
    \r\n\r\nThanks"
- id: 35869
  author: Leif Gruenwoldt
  author_email: leifer@gmail.com
  author_url: ''
  date: '2007-11-11 23:07:02 -0500'
  date_gmt: '2007-11-12 04:07:02 -0500'
  content: "I got the following error during 'yum -y update'\r\n\r\nError: Missing
    Dependency: gecko-libs = 1.8.1.8 is needed by package yelp\r\nError: Missing Dependency:
    gecko-libs = 1.8.1.8 is needed by package epiphany\r\nError: Missing Dependency:
    gecko-libs = 1.8.1.8 is needed by package devhelp\r\n\r\nI manually removed those
    rpms and redid the yum update. I figure if all goes well after the update to fedora
    8 i will just reinstall those 3 rpm's one by one."
- id: 36224
  author: Ken
  author_email: kenneth_mathew_clements@hotmail.com
  author_url: ''
  date: '2007-11-14 03:24:01 -0500'
  date_gmt: '2007-11-14 08:24:01 -0500'
  content: hey guys so i got to step 4 and did it fine but when i go to update it
    says that there is no Packages available for update .... not sure if i should
    restart just yet but any help would be great
- id: 36238
  author: Gavin Henry
  author_email: ghenry@suretecsystems.com
  author_url: http://blog.suretecsystems.com
  date: '2007-11-14 05:46:58 -0500'
  date_gmt: '2007-11-14 10:46:58 -0500'
  content: "Do a \"yum clean all\" after you do:\r\n\r\nrpm -Uhv http://mirror.anl.gov/pub/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-8-3.noarch.rpm
    \ http://mirror.anl.gov/pub/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-notes-8.0.0-3.noarch.rpm\r\n\r\nyum
    will then re-download all package lists etc.\r\n\r\nGavin."
- id: 36273
  author: Glenn
  author_email: glenneh@gmail.com
  author_url: ''
  date: '2007-11-14 10:56:55 -0500'
  date_gmt: '2007-11-14 15:56:55 -0500'
  content: "After I download and begin:\r\n\r\nyum update - it starts to downloaded
    the needed files and I get this error:\r\n\r\nCould not retrieve mirrorlist http://www.jpackage.org/jpackage_fedora-8.txt
    error was\r\n[Errno 14] HTTP Error 404: Not Found\r\nError: Cannot retrieve repository
    metadata (repomd.xml) for repository: jpackage-fedora. Please verify its path
    and try again\r\n\r\n\r\nAny suggestions?\r\n\r\nThanks,\r\nGlenn"
- id: 36278
  author: Philippe
  author_email: phil@monamiphil.com
  author_url: http://iphonemail.ca
  date: '2007-11-14 11:52:42 -0500'
  date_gmt: '2007-11-14 16:52:42 -0500'
  content: "I got a loop: \r\n--> Running transaction check\r\n---> Package devhelp.i386
    0:0.16.1-2.fc8 set to be updated\r\n--> Processing Dependency: gecko-libs = 1.8.1.8
    for package: devhelp\r\n--> Processing Dependency: libiw.so.28 for package: kdenetwork\r\n-->
    Processing Dependency: libiw.so.28 for package: NetworkManager\r\n--> Running
    transaction check\r\n---> Package devhelp.i386 0:0.16.1-2.fc8 set to be updated\r\n-->
    Processing Dependency: gecko-libs = 1.8.1.8 for package: devhelp\r\n--> Processing
    Dependency: libiw.so.28 for package: kdenetwork\r\n--> Processing Dependency:
    libiw.so.28 for package: NetworkManager\r\n--> Running transaction check\r\n--->
    Package devhelp.i386 0:0.16.1-2.fc8 set to be updated\r\n--> Processing Dependency:
    gecko-libs = 1.8.1.8 for package: devhelp\r\n--> Processing Dependency: libiw.so.28
    for package: kdenetwork\r\n--> Processing Dependency: libiw.so.28 for package:
    NetworkManager\r\n--> Running transaction check\r\n---> Package devhelp.i386 0:0.16.1-2.fc8
    set to be updated\r\n\r\n\r\nWhat do you think??"
- id: 36287
  author: Felipe
  author_email: felipe@portela.com.br
  author_url: ''
  date: '2007-11-14 14:15:51 -0500'
  date_gmt: '2007-11-14 19:15:51 -0500'
  content: "Upgraded sucessfully however there are still lots of FC7 packages installed:\r\n\r\n#
    yum list installed | grep fc7\r\naspell.i386                              12:0.60.5-3.fc7
    \       installed\r\naspell-pt.i386                           50:0.50-12.fc7         installed\r\nautomake14.noarch
    \                       1.4p6-15.fc7           installed\r\nbittorrent.noarch
    \                       4.4.0-5.fc7            installed\r\ndosfstools.i386                          2.11-8.fc7
    \            installed\r\ndoxygen.i386                             1:1.5.2-1.fc7
    \         installed\r\nethtool.i386                             5-1.fc7                installed\r\nfbset.i386
    \                              2.1-24.fc7             installed\r\nfestival.i386
    \                           1.96-1.fc7             installed\r\nfestival-lib.i386
    \                       1.96-1.fc7             installed\r\nfestival-speechtools-libs.i386
    \          1.2.96-1.fc7           installed\r\nfestvox-slt-arctic-hts.i386              0.20061229-1.fc7
    \      installed\r\ngawk.i386                                3.1.5-15.fc7           installed\r\ngdbm.i386
    \                               1.8.0-27.fc7           installed\r\ngdbm-devel.i386
    \                         1.8.0-27.fc7           installed\r\ngnome-mime-data.noarch
    \                  2.18.0-2.fc7           installed\r\ngnome-netstatus.i386                     2.12.1-1.fc7
    \          installed\r\ngrep.i386                                2.5.1-57.fc7
    \          installed\r\ngtk-doc.noarch                           1.8-2.fc7              installed\r\nhtmlview.noarch
    \                         4.0.0-3.fc7            installed\r\nindent.i386                              2.2.9-16.fc7
    \          installed\r\nkernel.i686                              2.6.23.1-21.fc7
    \       installed\r\nkpartx.i386                              0.4.7-11.fc7           installed\r\nlibevent.i386
    \                           1.3b-1.fc7             installed\r\nlibiec61883.i386
    \                        1.1.0-1.fc7            installed\r\nlibiptcdata.i386
    \                        1.0.2-1.fc7            installed\r\nlibopenraw.i386                          0.0.2-5.fc7
    \           installed\r\nlibopenraw-gnome.i386                    0.0.2-5.fc7
    \           installed\r\nlibsysfs.i386                            2.1.0-1.fc7
    \           installed\r\nmailx.i386                               8.1.1-46.fc7
    \          installed\r\nman.i386                                 1.6e-3.fc7             installed\r\nmktemp.i386
    \                             3:1.5-25.fc7           installed\r\nnotify-python.i386
    \                      0.1.0-4.fc7            installed\r\npsgml.noarch                             1.2.5-6.fc7
    \           installed\r\nquota.i386                               1:3.14-1.fc7
    \          installed\r\nrp-pppoe.i386                            3.8-1.fc7              installed\r\nttmkfdir.i386
    \                           3.0.9-24.fc7           installed\r\nwavpack.i386                             4.41-1.fc7
    \            installed\r\nwords.noarch                             3.0-12.fc7
    \            installed\r\nxorg-x11-util-macros.i386                1.1.5-1.fc7
    \           installed\r\nzip.i386                                 2.31-3.fc7             installed\r\n\r\n\r\nWhat
    should I do? Remove them manually and reinstall??\r\n\r\nSuggestions?"
- id: 36298
  author: Felipe
  author_email: felipe@portela.com.br
  author_url: ''
  date: '2007-11-14 14:55:14 -0500'
  date_gmt: '2007-11-14 19:55:14 -0500'
  content: "Well actually I just realised there are also some FC6 packages:\r\n\r\n#
    yum list installed | grep fc6\r\ndmidecode.i386                           1:2.7-1.26.1.fc6
    \      installed\r\nenchant.i386                             1:1.3.0-1.fc6          installed\r\nkeyutils-libs.i386
    \                      1.2-2.fc6              installed\r\nkeyutils-libs-devel.i386
    \                1.2-2.fc6              installed\r\nlibavc1394.i386                          0.5.3-1.fc6
    \           installed\r\nlibshout.i386                            2.2.2-1.fc6
    \           installed\r\nrng-utils.i386                           1:2.0-1.14.1.fc6
    \      installed\r\nsplint.i386                              3.1.1-15.fc6           installed\r\nxorg-x11-filesystem.noarch
    \              7.1-2.fc6              installed\r\n\r\nWhy does that happen? Should
    I care about that?\r\n\r\n# cat /proc/version\r\nLinux version 2.6.23.1-49.fc8
    (kojibuilder@xenbuilder4.fedora.phx.redhat.com) (gcc version 4.1.2 20070925 (Red
    Hat 4.1.2-33)) #1 SMP Thu Nov 8 21:41:26 EST 2007"
- id: 36337
  author: Jagtar
  author_email: jagga99@gmail.com
  author_url: ''
  date: '2007-11-14 20:01:32 -0500'
  date_gmt: '2007-11-15 01:01:32 -0500'
  content: "Error: Missing Dependency: gecko-libs = 1.8.1.8 is needed by package yelp\r\nError:
    Missing Dependency: gecko-libs = 1.8.1.8 is needed by package devhelp\r\n\r\nHow
    to proceed after the above error after I did yum -y update\r\n\r\nthen tried \r\nyum
    install gecko-libs\r\ngot the following error message\r\nRequested dep: gecko-libs
    is provided by installed package\r\nNothing to do\r\n\r\nthen tried \r\nyum -y
    update gecko-libs\r\nCould not find update match for gecko-libs"
- id: 36377
  author: Antwaan
  author_email: heavyt74@gmail.com
  author_url: ''
  date: '2007-11-15 00:57:03 -0500'
  date_gmt: '2007-11-15 05:57:03 -0500'
  content: Well i did steps 1-4 which i did 5 but it did nothin i did not see the
    "yum clean all" that i was suppose to do after the rpm install - but i did stick
    in the fedora dvd and it seems to be installing fine but i will report after it
    upgrades and let you know
- id: 36489
  author: Antwaan
  author_email: heavyt74@gmail.com
  author_url: ''
  date: '2007-11-15 12:36:19 -0500'
  date_gmt: '2007-11-15 17:36:19 -0500'
  content: Worked Good only thing that has given me troubles is the package/software
    updater i keep getin an errno 5 input/output error - anyone know how to fix this?
- id: 36833
  author: Zumajim
  author_email: zumajim@gmail.com
  author_url: ''
  date: '2007-11-17 20:45:07 -0500'
  date_gmt: '2007-11-18 01:45:07 -0500'
  content: Thanks for posting this. I tried in vain to update Fedora 7 to 8 via DVD
    -- it failed during dependency checks, evidently in some kind of endless loop.
    (It seems lots of folks are experiencing this problem.) In order to do your Yum
    upgrade, I had to uninstall two packages, NetworkManager and kdenetwork, which
    were causing a dependency loop too. Weird! But after that it was smooth sailing,
    even though it took 5 hours to download the 1200+ RPMs to do it. Great advice
    and thanks again.
- id: 37032
  author: Mat Dac
  author_email: Mathieu.Dacremont@eplf.ch
  author_url: ''
  date: '2007-11-19 03:39:00 -0500'
  date_gmt: '2007-11-19 08:39:00 -0500'
  content: I also tried in vain to update Fedora 7 to 8 via DVD &acirc;&euro;&rdquo;
    it failed during dependency checks. The check did not reach an end even after
    48 hours. I haven't solve the problem yet.
- id: 37280
  author: Dandapani
  author_email: daniel.obrien@yahoo.com
  author_url: ''
  date: '2007-11-21 10:47:43 -0500'
  date_gmt: '2007-11-21 15:47:43 -0500'
  content: "Trying this process to ugprade from FC6 to F8 on my laptop where the DVD
    drive is busted. The DVD upgrade hangs during the boot process. I am first upgrading
    yum and it brought in 199 packages for update.  But first time through I had to
    manually remove some packages to eliminate dependencies: \r\n# rpm -e  gnome-doc-utils
    yelp\r\n# rpm -e samba-common gnome-vfs2-smb samba-client\r\nSo far so good..."
- id: 37356
  author: Dandapani
  author_email: daniel.obrien@yahoo.com
  author_url: ''
  date: '2007-11-21 20:47:02 -0500'
  date_gmt: '2007-11-22 01:47:02 -0500'
  content: 'Final status: I updated the kernel, then got brave and did the yum update.
    Took a few hours (slow laptop), but it finished and the reboot worked fine. I''m
    at F8 now. Thanks!'
- id: 37700
  author: Dave
  author_email: dave@quik.com
  author_url: ''
  date: '2007-11-24 19:11:31 -0500'
  date_gmt: '2007-11-25 00:11:31 -0500'
  content: Why do you use "update" rather than "upgrade" in step 5?
- id: 38468
  author: Mauro
  author_email: bob@hotmail.com
  author_url: http://www.google.com
  date: '2007-11-30 14:26:44 -0500'
  date_gmt: '2007-11-30 19:26:44 -0500'
  content: "Thanks Gavin,  my update went well after your tip.\r\n\r\n-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0\r\n\r\nDo
    a \"yum clean all\" after you do:\r\n\r\nrpm -Uhv http://mirror.anl.gov/pub/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-8-3.noarch.rpm
    http://mirror.anl.gov/pub/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-notes-8.0.0-3.noarch.rpm\r\n\r\nyum
    will then re-download all package lists etc.\r\n\r\nGavin."
- id: 38560
  author: Bates
  author_email: bobetoz@yahoo.com
  author_url: ''
  date: '2007-12-01 10:45:00 -0500'
  date_gmt: '2007-12-01 15:45:00 -0500'
  content: "Very usefull guide.\r\n\r\n1st I gedit fedora.repo & replace old line
    with mirrorlist=http://mirrors.fedoraproject.org/mirrorlist?repo=fedora-8&arch=$basearch\r\n\r\n2nd
    I do # rpm -Uvh \\\r\nftp://ftp.osuosl.org/pub/fedora/linux/releases/8/Everything/i386/os/Packages/fedora-release-*.rpm\r\n\r\n3rd
    I do yum update\r\n\r\nOf course some package that in error with dependancy like
    heliodor and beryl-settings & 6 more package need to be removed.\r\n\r\n4th
    I do reboot\r\n\r\n5th After reboot, update available already popup require me
    to update all 891 new package.\r\n\r\nI'm done upgrading from moonshine to warewolf
    successfully!!!\r\n\r\nOnce again, nice & usefull yet simple guide that works
    for me."
- id: 38642
  author: Epctechno
  author_email: epctechno@gmail.com
  author_url: ''
  date: '2007-12-02 04:15:07 -0500'
  date_gmt: '2007-12-02 09:15:07 -0500'
  content: "Works like a charm :), also here is a great spot for the USA Pacific NW:\r\n\r\nrpm
    -Uhv http://limestone.uoregon.edu/ftp/fedora/linux/8/Fedora/source/SRPMS/fedora-release-8-3.src.rpm
    http://limestone.uoregon.edu/ftp/fedora/linux/8/Fedora/source/SRPMS/fedora-release-notes-8.0.0-3.src.rpm"
- id: 39154
  author: ryan
  author_email: ioncannon@cpusoftware.com
  author_url: ''
  date: '2007-12-06 23:42:12 -0500'
  date_gmt: '2007-12-07 04:42:12 -0500'
  content: "couple problems with the distribution ...\r\n\r\nthe current included
    php has a problem in php-mysql which causes stored procedures that return result
    sets to error-out. \r\n\r\non virtuozzo the fc7->fc8 update causes the /etc/passwd
    and /etc/groups to become unreadable and the vm gets hosed."
- id: 39456
  author: surya
  author_email: suryabvs@gmail.com
  author_url: ''
  date: '2007-12-10 02:36:52 -0500'
  date_gmt: '2007-12-10 07:36:52 -0500'
  content: "it shows kernel version for # uname -r\r\n2.6.20-1.2320.fc5\r\n\r\nwhile
    updating with # yum upgrade\r\nalways im getting:\r\n\r\nSetting up Upgrade Process\r\nNo
    Packages marked for Update\r\n\r\nCan anybody suggest the solution"
- id: 39560
  author: Rob Teed
  author_email: robteed@yahoo.com
  author_url: ''
  date: '2007-12-10 20:42:42 -0500'
  date_gmt: '2007-12-11 01:42:42 -0500'
  content: "Upgrading Fedora7 to Fedora 8 with DVD.This is the fix I did.\r\nAfter
    using YUM to update Fedora 7 \" Yum Update \" I used \" Yum clean all \"\r\nThen
    I rebooted with my Fedora 8 DVD in the\r\ndvd drive, while it was booting I held\r\ndown
    the \"SHIFT\" key. That brings up a menu.\r\nI think it was \"F4\" key I pushed.\r\nThen
    on the command line I typed:\"linux updates=http://katzj.fedorapeople.org/updates-f8-yumloop.img\"\r\nWithout
    the quotes and only one space between the word linux and updates.\r\nThen hit
    enter and it booted up. Hope this helps."
- id: 39611
  author: marco
  author_email: marc.lauffer@gmail.com
  author_url: ''
  date: '2007-12-11 07:33:55 -0500'
  date_gmt: '2007-12-11 12:33:55 -0500'
  content: "hello & thanks again for your great job carson. I've been using your
    meth to upgrade my fedora for a while now (fc5->fc6->f7->f8) and never had any
    problem neither with my personal laptop nor with professional dedicated server
    (ssh access only).\r\n\r\nThis time from f7 to f8 I've had a perfect upgrade with
    my laptop but... a very strange issue after reboot : no response at all from distant
    server! no ping, no ssh, all services down.\r\n\r\nchecking my logs in rescue
    mode I figured out that the box actually started fine but there was a problem
    with eth0 config making the box completely deaf.\r\n\r\nThe explanation was that
    the upgrade process has replaced my old /etc/sysconfig/network-scripts/ifcfg-eth0
    (configured for static ip with BOOTPROTO=static and IPADDR=xx.xx.xx.xx) with a
    new one configured with BOOTPROTO=dhcp and no IPADDR. I resolved the problem by
    replacing the new one by the .bak one and now it seems to work fine."
- id: 40476
  author: Fr3d
  author_email: fred@fr3d.org
  author_url: http://www.fr3d.org/
  date: '2007-12-19 07:52:55 -0500'
  date_gmt: '2007-12-19 12:52:55 -0500'
  content: "Perhaps you should mention that if you get this error:\r\nwarning: /etc/yum.repos.d/fedora-updates.repo
    created as /etc/yum.repos.d/fedora-updates.repo.rpmnew\r\nwarning: /etc/yum.repos.d/fedora.repo
    created as /etc/yum.repos.d/fedora.repo.rpmnew\r\nYou need to swap the files around
    so it uses the Fedora 8 repos instead of 7 ;)\r\nNice guide though, thanks :)"
- id: 40522
  author: Brian
  author_email: bdmccue@gmail.com
  author_url: ''
  date: '2007-12-19 20:33:22 -0500'
  date_gmt: '2007-12-20 01:33:22 -0500'
  content: "Tried this... FC7>FC8, got most of the way through...but it failed on
    FC8 dependency check on something called rsyslog vice syslog-ng error.\r\n\r\nI
    have no idea what these pkgs do so didn't go any further in attempts to rpm -e
    syslog-ng.\r\n\r\nWill have to do more research on this before I tray again.\r\n\r\nCheers"
- id: 41737
  author: Mr. Meval
  author_email: mrmeval2@gmail.com
  author_url: ''
  date: '2007-12-30 13:34:09 -0500'
  date_gmt: '2007-12-30 18:34:09 -0500'
  content: "I had several failures all of which there are excellent guides to fixing.
    I have crap going back to FC5!\r\n\r\nSheesh.\r\n\r\nThe instructions here have
    always been good. Systems with a lot of gunk are what'll nail you."
- id: 41916
  author: Dave
  author_email: dave@ci.com.au
  author_url: ''
  date: '2007-12-31 19:03:12 -0500'
  date_gmt: '2008-01-01 00:03:12 -0500'
  content: "Marco,\r\n\r\nI administer several remote game servers. I recently had
    the misfortune to have to remotely tame an install of Fedora 7 done from a live
    CD image.\r\n\r\nI would strongly suggest removing NetworkManager from any server
    install.\r\n\r\nI wasted several hours discovering why a functioning system would
    lose the plot regarding its network configuration when I changed the default run
    level from 5 to 3 (full multi-user with no X).  It turned out that NetworkManager
    was not being started at run level 3, hence my network config was changing unexpectedly
    and inconsistently.\r\n\r\n--Dave"
- id: 42642
  author: Darrell Duane
  author_email: d@duane.com
  author_url: http://duane.com
  date: '2008-01-06 17:56:57 -0500'
  date_gmt: '2008-01-06 22:56:57 -0500'
  content: "when I ran yum update, I received an error indicating that the fc7 kernel
    was more recent than the fc8 kernel and it wouldn't update. I used rpm to remove
    the fc7 kernel and then yum update worked fine.\r\n\r\n--Darrell"
- id: 42915
  author: EPCTechno
  author_email: epctechno@gmail.com
  author_url: http://www.myspace.com/epctechno
  date: '2008-01-08 10:42:48 -0500'
  date_gmt: '2008-01-08 15:42:48 -0500'
  content: I would have to concur with Dave on post 34, NetworkManager is not for
    a SERVER_ENV whatsoever, it's only good for desktop/workstation. NetworkManager
    is a headache period, really you don't even need it.
- id: 42946
  author: Alan
  author_email: ab_upham@svcable.net
  author_url: ''
  date: '2008-01-08 17:18:30 -0500'
  date_gmt: '2008-01-08 22:18:30 -0500'
  content: These forums are great. I see all kinds of problems and all kinds of solutions.
    Different solutions to the same problems but unlike politics we get something
    done.
- id: 43068
  author: lightpace
  author_email: bitmark2@hotmail.com
  author_url: ''
  date: '2008-01-09 16:29:39 -0500'
  date_gmt: '2008-01-09 21:29:39 -0500'
  content: i upgraded fc6 to fc8 directly ....everthing went well. except when i rebooted
    the box, the system prompts that it couldnt find my second physical hdd and cannot
    move onwards. if i choose fc6 from boot loader screen it works.. boots with fc6
- id: 43956
  author: Ryan
  author_email: filter@livesite.net
  author_url: ''
  date: '2008-01-13 07:08:35 -0500'
  date_gmt: '2008-01-13 12:08:35 -0500'
  content: "I went from fc6 to fc7 according to your \"upgrade to Fedora 7\" link
    at the top of this page, and all went well.\r\n\r\nI then followed the instructions
    and at step 5, after all the packages are downloaded, I receive this error:\r\n\r\n[code]\r\nTransaction
    Check Error:\r\n  package kernel-2.6.23.12-52.fc7 (which is newer than kernel-2.6.23.9-85.fc8)
    is already installed\r\n```\r\n\r\nI am concerned mostly because I am now
    out of sync with both fc7 *and* fc8 ;)"
- id: 44323
  author: andy
  author_email: jawz1010101@yahoo.com
  author_url: ''
  date: '2008-01-15 11:13:36 -0500'
  date_gmt: '2008-01-15 16:13:36 -0500'
  content: I too get Ryan's same error.  Everything else acknowledges as being up
    to date when I do a rpm -q fedora-release
- id: 44324
  author: andy
  author_email: jawz1010101@yahoo.com
  author_url: ''
  date: '2008-01-15 11:13:56 -0500'
  date_gmt: '2008-01-15 16:13:56 -0500'
  content: it shows as version 8.3
- id: 44594
  author: Ammar
  author_email: aali@transfairusa.org
  author_url: ''
  date: '2008-01-16 12:18:34 -0500'
  date_gmt: '2008-01-16 17:18:34 -0500'
  content: "Ryan, I just ran into the same Transaction Check Error. No need to be
    concerned with being out of sync with fc7 since you're moving to fc8. Removing
    the \"newer\" kernel with\r\n\r\n  yum remove kernel-2.6.23.12-52.fc7\r\n\r\nand
    then, again, \r\n\r\n  yum upgrade\r\n\r\nyields the desired Transaction Test
    Succeeded."
- id: 45204
  author: Werner
  author_email: w.heijstek@jovian.nl
  author_url: ''
  date: '2008-01-19 05:47:23 -0500'
  date_gmt: '2008-01-19 10:47:23 -0500'
  content: 'Hey Ryan, I have that exact same problem (Transaction Check Error: package
    kernel-2.6.23.12-52.fc7 (which is newer than kernel-2.6.23.9-85.fc8) is already
    installed). Have you found a solution yet?'
- id: 51742
  author: Dharmesh V Patel
  author_email: dvpforums@gmail.com
  author_url: ''
  date: '2008-02-18 08:33:33 -0500'
  date_gmt: '2008-02-18 13:33:33 -0500'
  content: 'Did a two step upgrade from FC6 to Fedora 8. Both upgrades went perfect.
    I manually removed the avahi fc7 module after the FC7 to FC8 upgrade as it failed
    removal. Issued the rpm -e --noscripts avahi-0.6.17-1.fc7 command as instructed
    in the YumUpgradeFaqs located at: http://fedoraproject.org/wiki/YumUpgradeFaq'
- id: 54137
  author: Frank D. Gunseor
  author_email: fdavidg@adelphia.net
  author_url: http://none
  date: '2008-02-27 10:38:12 -0500'
  date_gmt: '2008-02-27 15:38:12 -0500'
  content: "Sirs:\r\n\r\nWhat a wonderful site. I have been able to upgrade from FC5
    --> FC6 --> F7 --> F8, but I am having problems with the F8 upgrade.\r\n\r\nMy
    system locked up during the initial run of the \r\nyum -y update command.\r\n\r\nAfter
    reboot F8 came up apparently fine, so I ran the yum clean all command.\r\n\r\nNow
    when I run the Software Update I get errors.\r\n\r\nI tried re-running the yum
    -y update command and I get the following:\r\n\r\nTransaction Summary\r\n=============================================================================\r\nInstall
    \   105 Package(s)         \r\nUpdate    1193 Package(s)         \r\nRemove       4
    Package(s)         \r\n\r\nTotal download size: 1.5 G\r\nDownloading Packages:\r\nRunning
    rpm_check_debug\r\nRunning Transaction Test\r\nFinished Transaction Test\r\n\r\n\r\nTransaction
    Check Error:\r\n  file /usr/share/man/man1/alias.1.gz conflicts between attempted
    installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/bg.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/bind.1.gz conflicts between attempted installs of bash-3.2-20.fc8
    and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/break.1.gz conflicts between
    attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/builtin.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/cd.1.gz conflicts between attempted installs of bash-3.2-20.fc8
    and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/command.1.gz conflicts between
    attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/complete.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/continue.1.gz conflicts between attempted installs
    of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/dirs.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/eval.1.gz conflicts between attempted installs of bash-3.2-20.fc8
    and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/exec.1.gz conflicts between
    attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/exit.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/fg.1.gz conflicts between attempted installs of bash-3.2-20.fc8
    and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/help.1.gz conflicts between
    attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/jobs.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/popd.1.gz conflicts between attempted installs of bash-3.2-20.fc8
    and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/pushd.1.gz conflicts between
    attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/read.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/return.1.gz conflicts between attempted installs of
    bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/set.1.gz conflicts
    between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file
    /usr/share/man/man1/source.1.gz conflicts between attempted installs of bash-3.2-20.fc8
    and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/trap.1.gz conflicts between
    attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/type.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n
    \ file /usr/share/man/man1/ulimit.1.gz conflicts between attempted installs of
    bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n  file /usr/share/man/man1/umask.1.gz
    conflicts between attempted installs of bash-3.2-20.fc8 and fish-1.22.3-3.fc8\r\n\r\nError
    Summary\r\n-------------\r\n\r\n[root@localhost fdavidg]# \r\n\r\nAny suggestions???\r\n\r\nFrank"
- id: 55058
  author: Magnus
  author_email: ioncannon@gr8.nu
  author_url: ''
  date: '2008-03-01 11:17:06 -0500'
  date_gmt: '2008-03-01 16:17:06 -0500'
  content: "My upgrade can not fork...\r\n\r\nDownloading Packages:\r\nRunning rpm_check_debug\r\nRunning
    Transaction Test\r\nFinished Transaction Test\r\nTransaction Test Succeeded\r\nRunning
    Transaction\r\n  Updating  : glib2                        ###################
    [   1/2073]\r\nerror: Couldn't fork %post: Cannot allocate memory\r\n  Updating
    \ : zlib                         ################### [   2/2073]\r\nerror: Couldn't
    fork %post: Cannot allocate memory\r\n  Updating  : atk                          ###################
    [   3/2073]\r\nerror: Couldn't fork %post: Cannot allocate memory\r\n  Updating
    \ : popt                         ################### [   4/2073]\r\nerror: Couldn't
    fork %post: Cannot allocate memory\r\n\r\n[...]\r\n\r\n Updating  : libXau                       ###################
    [  34/2073]\r\nerror: Couldn't fork %post: Cannot allocate memory\r\n  Updating
    \ : tcp_wrappers-libs            ################### [  35/2073]\r\n  Updating
    \ : libxslt                      ################### [  36/2073]\r\nerror: Couldn't
    fork %post: Cannot allocate memory\r\nSegmentation fault"
- id: 55109
  author: Magnus
  author_email: ioncannon@gr8.nu
  author_url: ''
  date: '2008-03-01 15:47:59 -0500'
  date_gmt: '2008-03-01 20:47:59 -0500'
  content: "The cannot allocate memory problem was solved by rebooting the system.
    However, 45 packets was installed twice - both the FC7 and the FC8 version. Solved
    that by:\r\n\r\nrpm -e chkconfig-1.3.36-1 `rpm -qa | grep \"\\.fc8\"`\r\n\r\nAfter
    that, the installation worked as expected."
- id: 62328
  author: Max
  author_email: nitrov@gmail.com
  author_url: ''
  date: '2008-04-10 04:20:24 -0400'
  date_gmt: '2008-04-10 09:20:24 -0400'
  content: "I am getting this same error for all the packages I am trying to install
    using yum on FC8 i386:\r\n file [FILENAME HERE] conflicts between attempted installs
    of kernel-2.6.24.4-64.fc8.i686 and kernel-2.6.24.4-64.fc8.i586\r\n\r\nThe exact
    same error message for all 92 packages. I have already downloaded them. What should
    I do?"
- id: 62351
  author: Max
  author_email: nitrov@gmail.com
  author_url: ''
  date: '2008-04-10 08:12:28 -0400'
  date_gmt: '2008-04-10 13:12:28 -0400'
  content: "My problem is resolved:\r\n\r\n# uname -a\r\n\r\nI found out my version
    was i686, so I then excluded all the i586 packages.\r\n\r\n# yum --exclude=*.i586
    update\r\n\r\nI received no transaction error and I didn't have to download anything
    again."
- id: 68292
  author: Upgrading from Fedora 8 to Fedora 9 with yum @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/uncategorized/138/upgrading-from-fedora-8-to-fedora-9-with-yum/
  date: '2008-05-13 20:52:58 -0400'
  date_gmt: '2008-05-14 01:52:58 -0400'
  content: "[...] time it is the Fedora 9 release. The upgrade from Fedora 8 to Fedora
    9 is almost exactly like the upgrade to Fedora 8. Here are the steps you need
    to do the upgrade from Fedora 8 to Fedora [...]"
- id: 100955
  author: ttsuchi
  author_email: Tomoki_Tsuchida@hotmail.com
  author_url: ''
  date: '2008-09-30 18:29:14 -0400'
  date_gmt: '2008-09-30 23:29:14 -0400'
  content: "For people who got 'No Packages marked for Update' in 'yum -y update':\r\n\r\nI
    ran 'yum clean all' first, then 'yum -y update' worked fine."
- id: 112889
  author: nikpangr
  author_email: nikpan@gmail.com
  author_url: http://www.wasteland.gr
  date: '2008-12-31 10:59:16 -0500'
  date_gmt: '2008-12-31 15:59:16 -0500'
  content: "yum remove notification-daemon-xfce\r\n\r\nand after yum -y update\r\n\r\nand
    everything updated fine"
- id: 143264
  author: David
  author_email: david@guatcom.net
  author_url: ''
  date: '2009-07-10 12:12:33 -0400'
  date_gmt: '2009-07-10 17:12:33 -0400'
  content: "For fellow copy 'n' pasters, here is the latest repo links:\r\n\r\n```rpm
    -Uhv http://archives.fedoraproject.org/pub/archive/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-8-3.noarch.rpm
    http://archives.fedoraproject.org/pub/archive/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-notes-8.0.0-3.noarch.rpm```"
---
Fedora 8 has been <a href="http://docs.fedoraproject.org/release-notes/">released</a> so it is time to upgrade once again. First you should go back and <a href="http://www.ioncannon.net/linux/68/upgrading-from-fc6-to-fedora7-with-yum/">upgrade to Fedora 7</a> if you haven't already. From there it is even easier this time to upgrade. Here are the steps you need to do the upgrade from Fedora 7 to Fedora 8:

<ol>
<li>yum update</li>
<li>yum clean all</li>
<li>I like to repeated update and clean all a second time to make sure everything got updated</li>
<li>Run the following command to update the yum repo on your box:
```
rpm -Uhv http://mirror.anl.gov/pub/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-8-3.noarch.rpm  http://mirror.anl.gov/pub/fedora/linux/releases/8/Fedora/i386/os/Packages/fedora-release-notes-8.0.0-3.noarch.rpm
```
  </li>
<li>Next do a yum -y update</li>
<li>I needed to remove a couple packages to get the dependencies to work out. This seems to be a normal need now when upgrading but isn't usually a big deal. In this case I had to remove the heliodor and beryl-settings that both had to do with beryl.</li>
<li>In my case the total set of packages it needed to download was 1.2G so it took about an hour to download and install. Now it was time for a reboot.</li>
<li>The reboot went so fast I almost didn't believe it rebooted. This was the smoothest upgrade I have had so far.</li>
</ol>


