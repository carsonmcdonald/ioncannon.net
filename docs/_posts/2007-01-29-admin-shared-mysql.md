---
layout: archive
status: publish
published: true
title: 'A lesson in on the limits of administrating your way out of problems: Shared
  MySQL'
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 119
wordpress_url: http://www.ioncannon.net/system-administration/119/admin-shared-mysql/
date: '2007-01-29 06:09:19 -0500'
date_gmt: '2007-01-29 11:09:19 -0500'
categories:
- system administration
tags:
- linux
- mysql
comments: []
---
I just finished reading a post to the Media Temple blog about their <a href="http://weblog.mediatemple.net/weblog/2007/01/19/anatomy-of-mysql-on-the-grid/">MySQL problems</a> . I think it is an excellent example of what happens when you only have one side of the house trying to fix a problem. The post leaves out some details but they make it clear that they believe their problems were caused by badly written apps hammering the database. It sounds like they tried very hard to fix the issues on the hardware and MySQL side but couldn't so have switched the way they are provisioning the database systems to more isolate the problem sites. The moral of that story is that even when you are smart you can't always fix software problems on the systems side. 

The Media Temple guys don't go into any great detail on their current shared MySQL system but I would think that if nothing else they ran into the problems listed in this post: <a href="http://www.mysqlperformanceblog.com/2007/01/17/performance-impact-of-complex-queries/">performance of complex queries</a>. At some point you just have too many people trying to hit your database for any one person to achieve efficiency.



