---
layout: archive
status: publish
published: true
title: Fedora Core 6 on a Laptop
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 100
wordpress_url: http://www.ioncannon.net/system-administration/100/fedora-core-6-on-a-laptop/
date: '2006-10-27 22:10:41 -0400'
date_gmt: '2006-10-28 02:10:41 -0400'
categories:
- system administration
- linux
tags: []
comments: []
---
So after doing my <a href="http://www.ioncannon.net/system-administration/99/upgrade-fc5-to-fc6-with-yum/">yum upgrade from FC5 to FC6</a> on a desktop I decided to see if it worked any better than FC5 on my old Dell Inspiron 600m laptop. FC5 wasn't bad on this laptop but two things always bugged me: 1) the ATI driver didn't work out of the box at anything above 800x600 so I had to wait for the binary ATI drivers to support chipset and then install that and 2) sleep in any form just didn't work correctly. I'm happy to say that both of these things are fixed in FC6.


The ATI driver that comes with FC6 now supports higher resolutions out of the box. I was happy not to have to fiddle with the binary ATI drivers again. I'm not sure yet if the dual head or video out work but just the fact that I don't have to have the binary drivers anymore is good enough for me.

Even better than the ATI driver working is that putting the laptop to sleep now works. Not only does the suspend to ram work but the suspend to disk does as well. I haven't noticed any issues yet with restoring from either suspended mode.

Now that these two issues are fixed I'm probably going to move back to using Linux full time on my laptop. I know I could have moved to something other than Fedora and fixed some of these issues before now but I'm too set in my ways to change distributions.

I've also been collecting some FC6 reviews. A lot of these have screenshots that give you an idea of some of the new features:
<a href="http://lunapark6.com/?p=2454">Fedora Core 6 review focusing on eye candy</a>
<a href="http://www.linuxforums.org/reviews/fedora_core_6_review.html">Fedora Core 6 installation and review</a>
<a href="http://www.redhat.com/magazine/024oct06/features/fc62/?sc_cid=bcm_edmsept_007">Introduction to Fedora Core 6</a>
<a href="http://www.phoronix.com/scan.php?page=article&item=573&num=1">More Fedora Core 6 screenshots</a>
<a href="http://www.thecodingstudio.com/opensource/linux/screenshots/index.php?linux_distribution_sm=Fedora%20Core%206">Even more FC6 screenshots</a>



