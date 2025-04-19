---
layout: archive
status: publish
published: true
title: Tape drives are obsolete
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 77
wordpress_url: http://www.ioncannon.net/system-administration/77/tape-drives-are-obsolete/
date: '2006-07-12 14:27:47 -0400'
date_gmt: '2006-07-12 18:27:47 -0400'
categories:
- system administration
- linux
- utilities
tags: []
comments: []
---
I was reading an article today that asks the question <a href="http://blogs.zdnet.com/Ou/?p=267">Are Tape Backup systems obsolete?</a> I would say the answer is yes and that it has been that way for some time now. 

Take google <a href="http://computerworld.co.nz/news.nsf/0/BCFA4BB3447790ACCC2571A4001C6703?OpenDocument">who build thier own commodity hardware</a>. How would they ever back up so much data? Why would they even try? It would be much easier to just do what they are doing and replicate the data multiple places. Drives are becoming so huge how can you manage to keep up with your tape library solution? What if you had to back up the <a href="http://www.ioncannon.net/system-administration/74/sun-zfs-and-some-big-hardware/">Sun Thumper</a> at 24T? That would require a massive number of tapes.

We tried to use tapes for the longest time but the expense got to be too much. We were adding hardware left and right with drives that could fill an entire tape. After looking at autoloaders to cover the amount of data our graphics developers produce we gave up on tapes. That was two years ago. We went with <a href="http://www.amanda.org/">Amanda</a>'s <a href="http://www.amanda.org/fom-serve/cache/191.html">tapeless</a> setup and a load of cheap hard drives that we could swap out for offsite backups. This setup has worked great. The cheap drives let us to expand our backup range from a couple weeks to month and longer if we wanted to. Having the extra space gave us the ability to back up user pcs if we needed to as well. As the size of drives for servers we buy increases so does are ability to expand our backup system. Moving to a hard drive based backup scheme has releaved us of the burden of waiting for tapes to catch up which they never seem to do.


