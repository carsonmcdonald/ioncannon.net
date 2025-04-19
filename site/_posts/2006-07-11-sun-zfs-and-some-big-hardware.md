---
layout: archive
status: publish
published: true
title: Sun ZFS and some big hardware
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 74
wordpress_url: http://www.ioncannon.net/system-administration/74/sun-zfs-and-some-big-hardware/
date: '2006-07-11 19:32:33 -0400'
date_gmt: '2006-07-11 23:32:33 -0400'
categories:
- system administration
- linux
tags: []
comments:
- id: 9
  author: IONCANNON &raquo; Tape drives are obsolete
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/77/tape-drives-are-obsolete/
  date: '2006-07-12 14:27:53 -0400'
  date_gmt: '2006-07-12 18:27:53 -0400'
  content: "[...] Take google who build thier own commodity hardware. How would they
    ever back up so much data? Why would they even try? It would be much easier to
    just do what they are doing and replicate the data multiple places. Drives are
    becoming so huge how can you manage to keep up with your tape library solution?
    What if you had to back up the Sun Thumper at 24T? That would require a massive
    number of tapes. [...]"
---
This is one <a href="http://blogs.sun.com/roller/page/jonathan?entry=the_rise_of_the_general">large set of disks</a> to have in only 4u of space. And to top it off the thing has 4 cores. I love commodity hardware and sun has been rolling out some nice commodity hardware these days. The price for some of the equipment has started to catch my eye now. I think as far as initial interest this file server would be great if they just had <a href="http://www.sun.com/software/solaris/zfs.jsp">ZFS</a> working for linux. It looks like they are <a href="http://zfs-on-fuse.blogspot.com/">trying</a> to port it with <a href="http://www.wizy.org/wiki/ZFS_on_FUSE">FUSE</a> as a <a href="http://blogs.sun.com/roller/page/eschrock?entry=ztest_on_linux">Google SOC project</a>. If they get it going it would probably fit in well with <a href="http://www.ioncannon.net/system-administration/69/virtualization-gaining-speed/">XEN</a>.



