---
layout: archive
status: publish
published: true
title: Virtualization gaining speed
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 69
wordpress_url: http://www.ioncannon.net/system-administration/69/virtualization-gaining-speed/
date: '2006-07-07 09:42:17 -0400'
date_gmt: '2006-07-07 13:42:17 -0400'
categories:
- system administration
tags: []
comments:
- id: 8
  author: IONCANNON &raquo; Sun ZFS and some big hardware
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/74/sun-zfs-and-some-big-hardware/
  date: '2006-07-11 19:32:39 -0400'
  date_gmt: '2006-07-11 23:32:39 -0400'
  content: "[...] This is one large set of disks to have in only 4u of space. And
    to top it off the thing has 4 cores. I love commodity hardware and sun has been
    rolling out some nice commodity hardware these days. The price for some of the
    equipment has started to catch my eye now. I think as far as initial interest
    this file server would be great if they just had ZFS working for linux. It looks
    like they are trying to port it with FUSE as a Google SOC project. If they get
    it going it would probably fit in well with XEN.   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    [...]"
- id: 43
  author: Limiting Bandwidth Usage on Xen Linux Setup @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/57/limiting-bandwidth-usage-on-xen-linux-setup/
  date: '2006-08-06 11:31:32 -0400'
  date_gmt: '2006-08-06 15:31:32 -0400'
  content: "[...] Xen seems to be gaining speed these days and has a lot of useful
    features for those who want to resale or otherwise split a single box. Now that
    you have your Xen system set up you may be interested in going farther with bandwidth
    limiting. [...]"
---
At work we jumped on the virtualization wagon some time ago first when <a href="http://user-mode-linux.sourceforge.net/">User Mode Linux</a> and then later with <a href="http://www.cl.cam.ac.uk/Research/SRG/netos/xen/">Xen</a>. UML was pretty good but Xen has been great. We had a few reasons for moving from physical machines to virtual ones:

<ul>
<li>Rack space is a recurring cost so maximizing the use of space is important. I have a philosophy of breaking up a lot of functions into their own servers. That is web servers shouldn't be also doing email for 1000 people.</li>
<li>Lots of people don't need the full power of a physical machine.</li>
<li>You can get a console for a virtual machine without having to visit the datacenter.</li>
<li>There is hope that at some point you may never <b>need</b> downtime since Xen and VMWare have the ability to do live migrations from one set of hardware to another. Upgrading a machine couldn't be easier.</li>
</ul>
Now it seems that more people are starting to <a href="http://www.infoworld.com/article/06/07/03/79352_27FEvirtyear_1.html">move towards virtualization</a> and Xen seems to have <a href="http://www.infoworld.com/article/06/07/03/79393_27FEvirtyearxen_1.html?s=feature">pushed things over the edge</a>. I think a lot of that was interest generated because Xen was free and people could get their feet wet. That is probably what also drove VMWare to make part of their suite free. Xen is still not VMWare but it is gaining ground. There is support coming for <a href="http://www.planetjoel.com/viewarticle/568/HOWTO%3A+Windows+XP+running+under+Xen+3.0+on+Ubuntu+Dapper+Drake">Windows</a> and <a href="http://news.com.com/2061-10808_3-5813779.html">Solaris</a> with support for <a href="http://www.netbsd.org/Ports/xen/">NetBSD</a> already. The main gap I see in Xen's support is in the storage area. Before they can compete with VMWare at the highest levels they need to add better support for SANs or other distributed disk setups.



