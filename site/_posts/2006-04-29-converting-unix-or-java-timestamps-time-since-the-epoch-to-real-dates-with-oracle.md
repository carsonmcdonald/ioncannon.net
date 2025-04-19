---
layout: archive
status: publish
published: true
title: Converting unix or java timestamps (time since the epoch) to real dates with
  Oracle
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 27
wordpress_url: http://www.ioncannon.net/uncategorized/27/converting-unix-or-java-timestamps-time-since-the-epoch-to-real-dates-with-oracle/
date: '2006-04-29 17:12:17 -0400'
date_gmt: '2006-04-29 22:12:17 -0400'
categories:
- database administration
tags:
- Oracle
comments: []
---
A few days ago I made use of a couple Oracle built in functions and it made me happy I didn't have to write a stored proc or some type of mini-app to do it. I needed to parse a timestamp out of a field that was put there by a java program. The timestamp was just the output of System.currentTimeInMillis()  and was concatenated onto some other information. 

It took a little digging to find out how to convert a <a href="http://en.wikipedia.org/wiki/Unix_time">epoch</a> style timestamp but here it is:

```select new_time( to_date('01011970', 'ddmmyyyy') + 1/24/60/60 * :currenttimeinmillis/1000, 'GMT', 'EDT' ) from dual```

Note that I convert the output from GMT to EDT here.



