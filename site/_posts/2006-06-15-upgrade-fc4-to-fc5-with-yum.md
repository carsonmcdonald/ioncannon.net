---
layout: archive
status: publish
published: true
title: Upgrade FC4 to FC5 with yum
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 56
wordpress_url: http://www.ioncannon.net/system-administration/56/upgrade-fc4-to-fc5-with-yum/
date: '2006-06-15 10:25:10 -0400'
date_gmt: '2006-06-15 14:25:10 -0400'
categories:
- system administration
- linux
tags: []
comments:
- id: 156
  author: Sreeram Mahesh
  author_email: sreerammahesh@yahoo.com
  author_url: ''
  date: '2006-09-05 03:36:48 -0400'
  date_gmt: '2006-09-05 07:36:48 -0400'
  content: will it destroy the existing FC4 data?
- id: 157
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2006-09-05 08:29:44 -0400'
  date_gmt: '2006-09-05 12:29:44 -0400'
  content: As much as any other update command would.
- id: 403
  author: Upgrade FC5 to FC6 with yum @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/99/upgrade-fc5-to-fc6-with-yum/
  date: '2006-10-25 23:51:50 -0400'
  date_gmt: '2006-10-26 03:51:50 -0400'
  content: "[...] If you are still on FC4 you can upgrade from FC4 to FC5 first. [...]"
- id: 607
  author: Alexey
  author_email: visitor@mp3.org.by
  author_url: ''
  date: '2006-11-19 23:10:20 -0500'
  date_gmt: '2006-11-20 03:10:20 -0500'
  content: "i have trouble with update FC4 to FC5\r\n\r\n--> Processing Dependency:
    libcrypto.so.5 for package: qmail-toaster\r\n--> Processing Dependency: libssl.so.5
    for package: spamassassin-toaster\r\n--> Processing Conflict: djbdns conflicts
    bind\r\n--> Processing Dependency: libmysqlclient.so.14(libmysqlclient_14) for
    package: qmail-toaster\r\n--> Processing Dependency: libmysqlclient.so.14(libmysqlclient_14)
    for package: courier-authlib-toaster\r\n--> Processing Dependency: libcrypto.so.5
    for package: spamassassin-toaster\r\n--> Processing Dependency: libssl.so.5 for
    package: qmail-toaster\r\n--> Processing Dependency: libcrypto.so.5 for package:
    libdomainkeys-toaster\r\n--> Processing Conflict: djbdns conflicts caching-nameserver\r\n-->
    Finished Dependency Resolution\r\nError: Missing Dependency: libcrypto.so.5 is
    needed by package spamassassin-toaster\r\nError: Missing Dependency: libssl.so.5
    is needed by package spamassassin-toaster\r\nError: Missing Dependency: libcrypto.so.5
    is needed by package libdomainkeys-toaster\r\nError: Missing Dependency: libssl.so.5
    is needed by package qmail-toaster\r\nError: Missing Dependency: libmysqlclient.so.14(libmysqlclient_14)
    is needed by package courier-authlib-toaster\r\nError: Missing Dependency: libcrypto.so.5
    is needed by package qmail-toaster\r\nError: Missing Dependency: libmysqlclient.so.14(libmysqlclient_14)
    is needed by package qmail-toaster\r\nError: djbdns conflicts with bind\r\nError:
    djbdns conflicts with caching-nameserver"
- id: 716
  author: Leon
  author_email: leon.pollak@gmail.com
  author_url: ''
  date: '2006-11-30 05:59:16 -0500'
  date_gmt: '2006-11-30 09:59:16 -0500'
  content: "Hello, all and Alexey especially!\r\n\r\ni have the same problem with
    libssl.so.5 and libcrypto.so.5, just with the clamav package.\r\n\r\nHow one can
    overcome this problem? Alexey, have you succeeded?"
- id: 4460
  author: Prakash
  author_email: patilph@gmail.com
  author_url: ''
  date: '2007-02-28 14:29:39 -0500'
  date_gmt: '2007-02-28 19:29:39 -0500'
  content: I upgrade from FC4 to FC6 directly online & have not any problems.
    I did it on my laptop & trying the on my desktop.
- id: 4504
  author: Prakash
  author_email: patilph@gmail.com
  author_url: ''
  date: '2007-03-01 08:02:21 -0500'
  date_gmt: '2007-03-01 13:02:21 -0500'
  content: "Hello,\r\nI have following erroe while FC4 to FC6 upgrade of my Desktop
    AMD 2400+ VIA chipset KT4V 6712 MSI Main Board with kingston 512 MB RAM.\r\nPlease
    any body have solution. Please replay to me.\r\n\r\n--> Running transaction check\r\nError:
    Missing Dependency: mozilla = 37:1.7.8-2 is needed by package mozilla-mail\r\nError:
    Missing Dependency: libgnomecanvaspixbuf.so.1 is needed by package gtkhtml\r\nError:
    Missing Dependency: mozilla = 37:1.7.8-2 is needed by package mozilla-chat\r\nError:
    Missing Dependency: libgcj.so.6 is needed by package eclipse-pydev\r\nError: Missing
    Dependency: libgcj.so.6 is needed by package struts11\r\nError: Missing Dependency:
    hpoj = 0.91-13 is needed by package hpoj-devel\r\nError: Missing Dependency: libcrypto.so.5
    is needed by package ckermit\r\nError: Missing Dependency: mozilla = 37:1.7.8-2
    is needed by package mozilla-dom-inspector\r\nError: Missing Dependency: libcrypto.so.5
    is needed by package perl-RPM2\r\nError: Missing Dependency: /usr/X11R6/lib/X11/XKeysymDB
    is needed by package openmotif\r\nError: Missing Dependency: mozilla = 37:1.7.8-2
    is needed by package mozilla-js-debugger\r\nError: Missing Dependency: libssl.so.5
    is needed by package ckermit\r\nError: Missing Dependency: libssl.so.5 is needed
    by package perl-RPM2\r\nError: Unable to satisfy dependencies\r\nError: Package
    hpoj-devel needs hpoj = 0.91-13, this is not available.\r\nError: Package openmotif
    needs /usr/X11R6/lib/X11/XKeysymDB, this is not available.\r\nError: Package ckermit
    needs libcrypto.so.5, this is not available.\r\nError: Package mozilla-js-debugger
    needs mozilla = 37:1.7.8-2, this is not available.\r\nError: Package perl-RPM2
    needs libcrypto.so.5, this is not available.\r\nError: Package mozilla-dom-inspector
    needs mozilla = 37:1.7.8-2, this is not available.\r\nError: Package kudzu needs
    kernel"
- id: 25858
  author: chris
  author_email: croland@r6software.com
  author_url: ''
  date: '2007-08-01 08:07:48 -0400'
  date_gmt: '2007-08-01 13:07:48 -0400'
  content: Has anyone solved the Missing Dependency issue?
- id: 27153
  author: eugene
  author_email: ekorenkov@gmx.net
  author_url: ''
  date: '2007-08-21 16:38:22 -0400'
  date_gmt: '2007-08-21 21:38:22 -0400'
  content: "Please try to read \r\nhttp://www.brandonhutchinson.com/Upgrading_Red_Hat_Linux_with_yum.html\r\n\r\nIf
    this step fails, I recommend running the following command to capture all screen
    output to /tmp/yum_upgrade.\r\n\r\n# yum upgrade 2>&1 | tee /tmp/yum_upgrade\r\n\r\nFailures
    generally indicate that a currently-installed RPM has a dependency that cannot
    be satisfied with packages from the new Fedora Core release. Deprecated packages
    and packages from third party repositories may cause this problem.\r\n\r\nThe
    following generates a list of packages that may need to be removed prior to a
    successful yum upgrade.\r\n$ perl -ne 'print \"$1\\n\" if ((/Error: Missing Dependency:.*is
    needed by package (.*)$/) || (/Error: Package (.*?) needs.*, this is not available./))'
    /tmp/yum_upgrade | sort | uniq"
- id: 28690
  author: Andy
  author_email: junk@hammtech.ca
  author_url: http://www.hammtech.ca
  date: '2007-09-12 09:53:46 -0400'
  date_gmt: '2007-09-12 14:53:46 -0400'
  content: "Has anyone tried this remotely on a server? When the update is performed
    is there any local user intervention that is required?\r\n\r\nThanks,\r\n\r\nAndy"
- id: 30237
  author: Jon
  author_email: jon.baker@catalystproductions.cc
  author_url: http://www.catalystproductions.cc
  date: '2007-09-27 15:26:33 -0400'
  date_gmt: '2007-09-27 20:26:33 -0400'
  content: "I did an FC4->FC5 update on a box at the house, no problems (just had
    to re-configure my apache, it moved the old httpd.conf file to httpd.conf.rpmsave
    and replaced it with a new one, the old one had some problem that were resolved
    by doing an ediff to merge them together... but I digress...)  Now confident,
    I did it on my remote server.  On reboot, the machine stayed up for about 30 seconds
    and then locked up.  The techs at the datacenter ended up having to change the
    kernel it booted into to the old FC4 kernel.\r\n\r\nI'm not sure what is causing
    this, just now I did \"rpm -qa --last > /tmp/RPMS_by_Install_Time.txt\" and removed
    most of the packages that had an install date previous to the FC5 install.  There
    were a couple of packages like splunk (which I never use), httpd-debug (not sure
    if this might be conflicting with the new apache), and mysql-debug (again, not
    sure if it was conflicting with the new mysql) - I'm crossing my fingers and hoping
    that I'll be able to do a successful reboot this weekend.  Then it's off to updating
    to FC6 ... and then 7 ..."
- id: 30349
  author: Jon
  author_email: jon.baker@catalystproductions.cc
  author_url: http://www.catalystproductions.cc
  date: '2007-09-28 09:10:33 -0400'
  date_gmt: '2007-09-28 14:10:33 -0400'
  content: "Yesterday I posted about my remote machine hanging after going from FC4->FC5,
    and that it was currently running in the old FC4 kernel. Tech support at the datacenter
    just gave me this little gem:\r\n\r\n\"kernel-2.6.20 is known to be unstable woth
    fedora core 5 . we recommend you use kernel-2.6.19 kernel-2.6.18 for fedora core
    5.\"\r\n\r\nAnyone else able to confirm this and recommend the best way to resolve
    it?"
---
I recently upgraded a bunch of FC4 (a few FC3) installs to FC5 using yum. It has been a long time since I've tried doing an OS upgrade like this because it used to be pretty painful. I was surprised at how easy it is to do now. There are a few issues to get past but for the most part for fedora core 4 to fedora core 5 you just have to follow a few simple steps:

<ol>
<li> Remove any kernels before 2.6.14. There are packages that will not allow you to upgrade unless you do this step. Use the yum command: yum remove kernel-2.6.14* or the rpm command rpm -e kernel-2.6.14*</li>
<li> Even though it isn't in the documentation I have had trouble in the past with some dependancies not working out correctly so I like to run "yum clean all" before starting the true upgrade.</li>
<li> Install the fedora-release for Fedora Core 5. Use the rpm command: rpm -Uhv http://download.fedora.redhat.com/pub/fedora/linux/core/5/i386/os/Fedora/RPMS/fedora-release-5-5.noarch.rpm</li>
<li> Run the yum update: yum -y update</li>
</ol>

That is all there is to it.

Technology brings us a particular happiness because it makes us happy through improvement, making the complex more and more simple, through the careful use of science, it makes us daydream. But they know what if it's ugly, not being able to sleep and dream really, so it's important that we know <a href="https://www.ukmeds.co.uk/circadin-melatonin/">what is the best cheap melatonin brand</a>. With this we can ensure our quality of sleep and sleep like Calderon de la Barca who tells us that dreams are dreams.

For more details see the following links:

<a href="http://fedoraproject.org/wiki/YumUpgradeFaq">YumUpgradeFaq</a> and a good <a href="http://www.linuxforums.org/forum/redhat-fedora-linux-help/63460-yum-upgrade-fc4-fc5-issues.html">post</a> on doing a FC4 to FC5 upgade.



