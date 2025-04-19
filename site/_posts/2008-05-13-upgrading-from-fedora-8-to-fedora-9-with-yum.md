---
layout: archive
status: publish
published: true
title: Upgrading from Fedora 8 to Fedora 9 with yum
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 138
wordpress_url: http://www.ioncannon.net/?p=138
date: '2008-05-13 20:52:51 -0400'
date_gmt: '2008-05-14 01:52:51 -0400'
categories:
- system administration
- linux
tags: []
comments:
- id: 68337
  author: wtfnix
  author_email: wtfnix@wtfnix.com
  author_url: http://www.wtfnix.com
  date: '2008-05-14 07:12:44 -0400'
  date_gmt: '2008-05-14 12:12:44 -0400'
  content: "Yeah you sure nipped it in the bud, why didn't you change the core version
    in your URL?\r\n\r\nhttp://mirror.anl.gov/pub/fedora/linux/releases/8/\r\n\r\nShould
    be:\r\n\r\nhttp://mirror.anl.gov/pub/fedora/linux/releases/9/\r\n\r\nI bet a few
    people have tried this already LOL"
- id: 68343
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2008-05-14 07:55:46 -0400'
  date_gmt: '2008-05-14 12:55:46 -0400'
  content: I have corrected the RPMs. I guess that is what I get for it being so close
    to the last update.
- id: 68462
  author: wtfnix
  author_email: wtfnix@wtfnix.com
  author_url: ''
  date: '2008-05-14 19:55:19 -0400'
  date_gmt: '2008-05-15 00:55:19 -0400'
  content: hehe yeah when you said the words "almost exactly" I said yeah went exactly
    back to core 8 :P It would of been funny to see everyone wondering why they couldn't
    upgrade :D
- id: 68498
  author: Laust
  author_email: laust.jespersen@gmail.com
  author_url: ''
  date: '2008-05-15 00:11:03 -0400'
  date_gmt: '2008-05-15 05:11:03 -0400'
  content: could you say which fonts you installed exactly? I'm asking since i've
    just updated from 8 to 9 and am experiencing the same issues with apps crashing
    (or not starting)
- id: 68507
  author: david
  author_email: david.wilde@dpi.nsw.gov.au
  author_url: ''
  date: '2008-05-15 01:00:04 -0400'
  date_gmt: '2008-05-15 06:00:04 -0400'
  content: I'm having issues with X also. Apps not starting, non-movable windows with
    no borders etc. Do you have more detailed info as to how you rectified this??
- id: 68634
  author: MrsVeteran
  author_email: mrsveteran@gmail.com
  author_url: ''
  date: '2008-05-15 14:02:09 -0400'
  date_gmt: '2008-05-15 19:02:09 -0400'
  content: "Heya! First, thanks so much for doing these upgrade howto's. They've saved
    me a lot of time.\r\n\r\nSecond -- can you tell me which exact font package(s)
    you had to add back in? Did you go back to the previous DejaVu, for example, or
    did you just re-add ones that were dropped? Haven't rebooted to 9 yet, and wanted
    to try to make sure I got everything first.\r\n\r\nThanks again for putting these
    together!"
- id: 68651
  author: all these things that i've done &raquo; Fedora 9 Install by YUM
  author_email: ''
  author_url: http://matthewmoldvan.com/blog/?p=296
  date: '2008-05-15 15:23:56 -0400'
  date_gmt: '2008-05-15 20:23:56 -0400'
  content: "[...] to this post for the [...]"
- id: 68766
  author: wtfnix
  author_email: wtfnix@wtfnix.com
  author_url: ''
  date: '2008-05-16 05:57:31 -0400'
  date_gmt: '2008-05-16 10:57:31 -0400'
  content: If people have issues, why not post your logs and errors that show up within
    your log file. Other's cant read your mind :P
- id: 68925
  author: matt
  author_email: matt@matthewmoldvan.com
  author_url: http://www.matthewmoldvan.com
  date: '2008-05-16 20:30:40 -0400'
  date_gmt: '2008-05-17 01:30:40 -0400'
  content: Thanks for the post ... now if only I could get the NVidia drivers for
    Fedora Core 9 to work.  Wasted most of the day at work jerking around trying to
    get X to start. :((
- id: 68996
  author: nim
  author_email: bubba_smith100@yahoo.co.uk
  author_url: ''
  date: '2008-05-17 04:18:26 -0400'
  date_gmt: '2008-05-17 09:18:26 -0400'
  content: "There seems to be a new bit of software in Fedora 9.0 which does the upgrade
    for you, called PreUpgrade.\r\n\r\nsu -c 'yum install preupgrade'\r\npreupgrade\r\n\r\nhttp://www.redhatmagazine.com/2008/04/15/interview-fedora-developers-seth-vidal-and-will-woods/"
- id: 69362
  author: Anthony
  author_email: anthonypoulos@yahoo.com
  author_url: ''
  date: '2008-05-19 23:49:22 -0400'
  date_gmt: '2008-05-20 04:49:22 -0400'
  content: "I'm having the problem with firefox (named color or font does not exist).
    \r\n\r\nWhich old font packages did you reinstall?"
- id: 69392
  author: Anthony
  author_email: anthonypoulos@yahoo.com
  author_url: ''
  date: '2008-05-20 01:43:01 -0400'
  date_gmt: '2008-05-20 06:43:01 -0400'
  content: "I just got it to work:\r\n\r\nas root:\r\n\r\n# yum install xorg-x11-fonts-\\*\r\n\r\n#
    service xfs restart"
- id: 69598
  author: Deepak
  author_email: mahajan.deepak@jains.com
  author_url: http://www.jains.com
  date: '2008-05-21 00:23:00 -0400'
  date_gmt: '2008-05-21 05:23:00 -0400'
  content: "Thanks Carson, your info is very helpful.\r\n\r\nLast night I upgraded
    my Fedora 8 box.  Got a smoother installation and no need to remove any package
    for dependencies (even Cups got updated).\r\n\r\nAfter rebooting only have some
    acl problems as squid updated to newer version 3.0.STABLE2-3.fc9.x86_64"
- id: 70649
  author: Frank D Gunseor
  author_email: fdavidg@adelphia.net
  author_url: ''
  date: '2008-05-25 20:11:42 -0400'
  date_gmt: '2008-05-26 01:11:42 -0400'
  content: "A flawless upgrade from Fedora 8 to Fedora 9 using yum, but...\r\nafter
    reboot nothing works.\r\nFireFox starts then closes as do most of the applications.\r\nKonqueror
    works, somewhat.\r\nTerminal works.\r\nAny suggestions to get my system back to
    normal would be appreciated?\r\n\r\nThank you\r\n\r\nFrank D Gunseor"
- id: 72448
  author: Setya
  author_email: jsetya@gmail.com
  author_url: ''
  date: '2008-06-03 05:13:01 -0400'
  date_gmt: '2008-06-03 10:13:01 -0400'
  content: "Hi,\r\n\r\nI've just installed Fedora 7, can I skip 8 and  just upgrade
    to 9 ?\r\n\r\nRegards,\r\n\r\nSetya"
- id: 72909
  author: Babble On &raquo; Blog Archive &raquo; Fedora 9 on EC2
  author_email: ''
  author_url: http://www.babbleon.co.uk/2008/06/fedora-9-on-ec2/
  date: '2008-06-05 14:52:15 -0400'
  date_gmt: '2008-06-05 19:52:15 -0400'
  content: "[...] the answer is fairly simple: boot a suitable Fedora 8 image, then
    follow the instructions kindly provided by Carson McDonald on ioncannon.net -
    which, incidentally, is an invaluable [...]"
- id: 72911
  author: Babble On
  author_email: admin@babbleon.co.uk
  author_url: http://www.babbleon.co.uk
  date: '2008-06-05 14:57:18 -0400'
  date_gmt: '2008-06-05 19:57:18 -0400'
  content: I got fed up of using the default Fedora 8 AMI with EC2 due to a bug in
    MySQL and gave your instructions a try.  The upgrade was smooth and error-free
    and my Fedora 9 image has been a joy to use.  Thank you!
- id: 73080
  author: Babble On
  author_email: admin@babbleon.co.uk
  author_url: http://www.babbleon.co.uk
  date: '2008-06-06 11:49:39 -0400'
  date_gmt: '2008-06-06 16:49:39 -0400'
  content: "Actually, to get things working with the 64-bit  Fedora 8 AMI I had to
    enter the following before upgrading to the new release:\r\n\r\nrpm -e --nodeps
    curl.x86_64 curl.i386"
- id: 77333
  author: Jim
  author_email: jredman@ergotech.com
  author_url: ''
  date: '2008-06-25 12:58:17 -0400'
  date_gmt: '2008-06-25 17:58:17 -0400'
  content: "FWIW Preupgrade failed completely on my system.  Didn't update the kernel,
    etc. etc.\r\n\r\nBooted Ubuntu and used the procedure described here to recover.
    Basically the mess left by preupgrade took a day out of my life.  Never again,
    just yum from now on.\r\n\r\nTo the folks with X problems.  Unless you have some
    very obscure requirements, you can kill xfs. You can even:\r\n\r\nyum remove xfs\r\n\r\nto
    remove it completely and the system works better.\r\n\r\nThere are plenty of things
    that I like less in FC9, especially the ugly X login screen and I still have to
    play with feature like non-working power management which leaves the laptop backlight
    on all the time.\r\n\r\nSpell checking in web forms doesn't work (just realized
    this typing here)."
- id: 81994
  author: althoffm
  author_email: m.althoff@bromberg.xs4all.nl
  author_url: ''
  date: '2008-07-13 13:03:02 -0400'
  date_gmt: '2008-07-13 18:03:02 -0400'
  content: "Not that easy as from 7 to 8. I will post my notes here in case someone
    else gets into the same mess.\r\n\r\nError: Missing Dependency: curl = 7.18.2-1.fc8
    is needed by package curl-devel\r\nError: Missing Dependency: libssl.so.6 is needed
    by package ckermit\r\nError: Missing Dependency: libcrypto.so.6 is needed by package
    dhcpv6_client\r\nError: Missing Dependency: perl(:MODULE_COMPAT_5.8.8) is needed
    by package newt-perl\r\nError: Missing Dependency: libcrypto.so.6 is needed by
    package ckermit\r\nError: Missing Dependency: perl(:MODULE_COMPAT_5.8.8) is needed
    by package perl-DateManip\r\n\r\nThis one was easy : yum remove curl-devel ckermit
    dhcpv6_client newt-perl DateManip\r\n\r\nRunning rpm_check_debug\r\nERROR with
    rpm_check_debug vs depsolve:\r\nPackage initscripts needs /sbin/pidof, this is
    not available.\r\nPackage cdecl needs libtermcap.so.2, this is not available.\r\nPackage
    chkfontpath needs /sbin/pidof, this is not available.\r\nComplete!\r\n\r\nRemoved
    \ cdecl and chkfontpath.\r\n\r\nThe initscripts needs /sbin/pidof, this is not
    available was a bit more trouble there was hardly any relevant information on
    the net but \r\nhttp://fedoraproject.org/wiki/Architectures/IA64/Workarounds#yum_update_complains:_initscripts_needs_.2Fsbin.2Fpidof.2C_this_is_not_available..22\r\n\r\nThis
    sites has the following steps: \r\n\r\nrpm -e sysvinit --nodeps\r\nyum install
    sysvinit-tools\r\nyum install event-compat-sysv  (did not exist)\r\n\r\nInstalled
    sysvinit again using : yum install sysvinit\r\n\r\nOkay almost there but then:\r\n\r\nTransaction
    Check Error:\r\n  file /usr/sbin/vipw from install of shadow-utils-4.1.1-2.fc9.i386
    conflicts with file from package  util-linux-2.13-0.54.1.fc7.i386\r\n  file /usr/share/man/man8/vipw.8.gz
    from install of shadow-utils-4.1.1-2.fc9.i386 conflicts with file from package
    util-linux-2.13-0.54.1.fc7.i386\r\n\r\nOdd there was a FC7 util-linux still hanging
    somewhere. I removed this one using rpm &acirc;&euro;&ldquo;e util-linux &acirc;&euro;&ldquo;nodeps
    and installed it again using yum install util-linux. (do not use &acirc;&euro;&tilde;yum
    remove&acirc;&euro;&trade; the package has a dep link to over 100 system critical
    packages!)\r\n\r\nRan the transaction again and yeah about 1400 packages where
    updated time for coffee&acirc;&euro;&brvbar; After the completed message I installed
    the packages removed by hand and ran the &acirc;&euro;&tilde;yum update&acirc;&euro;&trade;
    then rebooted and it came up again just fine."
- id: 88096
  author: Daniel Morante
  author_email: daniel@morante.net
  author_url: http://www.unibia.net
  date: '2008-08-05 13:32:44 -0400'
  date_gmt: '2008-08-05 18:32:44 -0400'
  content: "Just Remember that if you are running a 64-bit version of fedora to adjust
    the URI:\r\n\r\nrpm -Uhv http://mirror.liberty.edu/pub/fedora/linux/releases/9/Fedora/x86_64/os/Packages/fedora-release-9-2.noarch.rpm
    http://mirror.liberty.edu/pub/fedora/linux/releases/9/Fedora/x86_64/os/Packages/fedora-release-notes-9.0.0-1.noarch.rpm"
- id: 90684
  author: Edson Oliveira
  author_email: elo.edson@gmail.com
  author_url: ''
  date: '2008-08-18 06:21:48 -0400'
  date_gmt: '2008-08-18 11:21:48 -0400'
  content: "To upgrade to 9 version, have today:\r\nhttp://fedoraproject.org/wiki/Features/PreUpgrade"
- id: 100423
  author: Raymond Dijkxhoorn
  author_email: raymond@prolocation.net
  author_url: http://www.prolocation.net
  date: '2008-09-28 12:29:04 -0400'
  date_gmt: '2008-09-28 17:29:04 -0400'
  content: "Hi!\r\n\r\nFor the upgrade you need the newkey stuff also. \r\n\r\n\r\nrpm
    -Uhv ftp://ftp.quicknet.nl/pub/Linux/download.fedora.redhat.com/updates/9/i386/fedora-release-9-5.transition.noarch.rpm\r\n\r\nBye,\r\nRaymond."
- id: 102284
  author: Daniel Morante
  author_email: daniel@morante.net
  author_url: http://www.unibia.net
  date: '2008-10-06 17:06:07 -0400'
  date_gmt: '2008-10-06 22:06:07 -0400'
  content: "I found that the following:\r\n\r\nyum update fedora-release\r\n\r\nHelps
    with missing dependencies"
- id: 106238
  author: Vladimir Pshenkin
  author_email: vladimir@pshenkin.net
  author_url: ''
  date: '2008-10-28 13:58:49 -0400'
  date_gmt: '2008-10-28 18:58:49 -0400'
  content: "Thanx, Daniel!\r\n\r\nAfter a couple of hours truing to update F8 to F9
    on remote host, I try your solution and everythig works.\r\n\r\nRight sequece
    to update x86_64:\r\n\r\n\r\nyum update\r\nyum clean all\r\n\r\nrpm -Uhv http://FAVORITE.MIRROR/pub/fedora/linux/releases/9/Fedora/x86_64/os/Packages/fedora-release-9-2.noarch.rpm
    http://FAVORITE.MIRROR/pub/fedora/linux/releases/9/Fedora/x86_64/os/Packages/fedora-release-notes-9.0.0-1.noarch.rpm\r\n\r\nyum
    clean all\r\n\r\nyum update fedora-release"
- id: 109647
  author: Upgrading from Fedora 9 to Fedora 10 with yum @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/142/upgrading-from-fedora-9-to-fedora-10-with-yum/
  date: '2008-11-25 20:00:13 -0500'
  date_gmt: '2008-11-26 01:00:13 -0500'
  content: "[...] once again it is time to upgrade. The upgrade from Fedora 9 to Fedora
    10 is almost exactly like the upgrade from Fedora 8 to Fedora 9. Here are the
    steps you need to do the upgrade from Fedora 9 to Fedora [...]"
- id: 120821
  author: Jim
  author_email: wallasongs@yahoo.com
  author_url: ''
  date: '2009-02-01 15:46:13 -0500'
  date_gmt: '2009-02-01 20:46:13 -0500'
  content: I've used your instructions before and they always worked out great! Thanks!
    Usually I use Debian, but I'm having trouble with the Apache2 server. I used to
    run 2 har drives one with fedora and the other with debian, but I changed the
    fedora to win xp and now I am re installing fedora on another machine, because
    I know more about running apache in fedora. Thanks again!
- id: 121930
  author: SToGE
  author_email: stoge@stoge.com
  author_url: ''
  date: '2009-02-06 08:31:13 -0500'
  date_gmt: '2009-02-06 13:31:13 -0500'
  content: "Your instructions seem to be very helpful thus far.  I did run into an
    issue though and was wondering if someone can give me some guidance.\r\n\r\nI
    was able to successfully run through steps 1-5 and got to step 6 where I did 'yum
    -y update' using the FC9 repos.  My problem is that I got a TON of missing dependencies.
    \ Should I go through line by line and 'yum remove' each package and reinstall
    them again after getting to FC9 or is there a better solution?  I am talking about
    close to 100 missing dependencies or so.\r\n\r\nThanks for your help!"
- id: 138561
  author: Chris Northwood
  author_email: cnorthwood@gmail.com
  author_url: http://www.pling.org.uk
  date: '2009-05-17 12:32:35 -0400'
  date_gmt: '2009-05-17 17:32:35 -0400'
  content: 'SToGE: I''ve found that before the yum -y update, I needed to "yum update
    fedora-release" in order to get the new signing key and the -newkey repositories.'
- id: 148279
  author: Ryan Chapman
  author_email: ry_reppin_w12_2k9@hotmail.co.uk
  author_url: ''
  date: '2009-08-26 06:01:49 -0400'
  date_gmt: '2009-08-26 11:01:49 -0400'
  content: "when i do 'yum update' i get this:\r\n\r\nTransaction Check Error:\r\n
    \ file /usr/share/desktop-directories/Internet.directory from install of gnome-menus-2.20.1-1.fc8
    conflicts with file from package xfdesktop-acer-lp-1652.mcs_patched\r\n  file
    /usr/share/desktop-directories/Settings.directory from install of gnome-menus-2.20.1-1.fc8
    conflicts with file from package xfdesktop-acer-lp-1652.mcs_patched\r\n\r\nError
    Summary\r\n\r\nany ideas guys?"
- id: 148337
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-08-26 13:43:01 -0400'
  date_gmt: '2009-08-26 18:43:01 -0400'
  content: You may need to remove one of those packages before trying to update. I
    would guess that you have a special xfdesktop package installed that you may be
    able to remove without too much pain and then re-install after the upgrade. Just
    make sure to back up any configuration.
- id: 164042
  author: erik aronesty
  author_email: erik@q32.com
  author_url: http://www.documentroot.com
  date: '2010-02-26 01:45:20 -0500'
  date_gmt: '2010-02-26 06:45:20 -0500'
  content: "# mirror that works as of 2010-02-26\r\nrpm -Uhv ftp://ftp.muug.mb.ca/mirror/fedora/linux/releases/9/Fedora/i386/os/Packages/fedora-release-9-2.noarch.rpm
    ftp://ftp.muug.mb.ca/mirror/fedora/linux/releases/9/Fedora/i386/os/Packages/fedora-release-notes-9.0.0-1.noarch.rpm"
- id: 171084
  author: Martinb
  author_email: martin@supcom.nl
  author_url: ''
  date: '2010-06-01 03:48:32 -0400'
  date_gmt: '2010-06-01 08:48:32 -0400'
  content: "working mirror \r\n\r\nrpm -Uhv http://ftp.tudelft.nl/download.fedora.redhat.com/linux/releases/9/Fedora/i386/os/Packages/fedora-release-9-2.noarch.rpm
    http://ftp.tudelft.nl/download.fedora.redhat.com/linux/releases/9/Fedora/i386/os/Packages/fedora-release-notes-9.0.0-1.noarch.rpm"
- id: 174902
  author: Luca
  author_email: pancallo@netscape.net
  author_url: ''
  date: '2010-07-13 04:30:53 -0400'
  date_gmt: '2010-07-13 09:30:53 -0400'
  content: "Here are the fixes I had to do in my case:\r\n\r\nTo fix the Error: Missing
    Dependency: libssl.so.6\r\n\r\n> rpm -e --nodeps openssl openldap\r\n> yum install
    openssl openldap\r\n\r\nTo fix the Missing Dependency: perl(:MODULE_COMPAT_5.8.8)\r\n\r\n>
    yum remove libpurple spamassassin rrdtool frysk foomatic perl-IO-Socket-SSL\r\n\r\nthe
    ones above where all the packages giving a dependency error on perl."
---

A new release of Fedora is out again so it is time to check out the upgrade. This time it is the <a href="http://docs.fedoraproject.org/release-notes/">Fedora 9 release</a>. The upgrade from Fedora 8 to Fedora 9 is almost exactly like the <a href="http://www.ioncannon.net/system-administration/133/upgrading-from-fedora-7-to-fedora-8-with-yum/">upgrade to Fedora 8</a>. Here are the steps you need to do the upgrade from Fedora 8 to Fedora 9:

As someone points out in the comments there is a new facility to do upgrades that you can install. See the following wiki entry about the <a href="http://fedoraproject.org/wiki/Features/PreUpgrade">PreUpgrade</a>. I tried to use PreUpgrade but it didn't install the update boot option for some reason but maybe others will have better luck.

1. yum update
2. yum clean all
3. I like to repeated update and clean all a second time to make sure everything got updated
4. Run the following command to update the yum repo on your box:
    ```
    rpm -Uhv http://mirror.liberty.edu/pub/fedora/linux/releases/9/Fedora/i386/os/Packages/fedora-release-9-2.noarch.rpm http://mirror.liberty.edu/pub/fedora/linux/releases/9/Fedora/i386/os/Packages/fedora-release-notes-9.0.0-1.noarch.rpm
    ```
5. Next I had to do a "yum clean all" again before it picked up the change
6. Next do a yum -y update
7. As in the past, a few packages had to be removed to get the dependencies to work out. In this case I had to remove the beryl-manager, VirtualBox and cups. In the case of cups I noted what got removed so I could re-install it later.
8. The packages have grown a little and this time I had to wait for 1.4G of packages to download and install. After an hour or so it was ready for a reboot.
9. After a reboot I had problems getting my NVIDIA driver to load. I ended up having to download the latest beta version of the driver per this forum post: http://www.nvnews.net/vbulletin/showthread.php?t=111460
10. I recompiled my NVIDIA driver and then added the flag for X suggested in the forum. GDM wouldn't start because the flag was set there but I can live with that.
11. Now I have X but I've run into a number of issues getting apps to run correctly. For example firefox won't start without the --sync option. At this point I think it will just be a matter of time before things get worked out, until then I'm just going to wait it out. At least it boots and mostly works.

Update: I think I may have found one of the issues with X and that is the fonts changed in Fedora 9. See <a href="http://fedoraproject.org/wiki/Releases/9/ReleaseSummary#head-f96ff8f24487c77aba8e45738bbe2dfb4aa52ac5">Fedora 9 Fonts</a>. I re-added the old fonts and now apps are starting correctly.



