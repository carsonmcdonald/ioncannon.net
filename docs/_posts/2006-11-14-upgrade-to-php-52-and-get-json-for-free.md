---
layout: archive
status: publish
published: true
title: Upgrade to PHP 5.2 and Get JSON For Free
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 103
wordpress_url: http://www.ioncannon.net/php/103/upgrade-to-php-52-and-get-json-for-free/
date: '2006-11-14 11:19:20 -0500'
date_gmt: '2006-11-14 16:19:20 -0500'
categories:
- programming
tags:
- ajax
- php
- json
comments: []
---
A few days ago when <a href="http://www.php.net/releases/5_2_0.php">PHP 5.2 was released</a> one of the things that caught my eye was that it now includes the JSON extension. For anyone doing AJAXy type stuff <a href="http://json.org/">JSON</a> is an easy way to martial your data between your server side language and javascript.

For the longest time I've been using the <a href="http://mike.teczno.com/json.html">older PHP JSON library</a> to do JSON with PHP but now that the extension is included in the core I decided it was time to test it out. I took a couple of minutes and converted my <a href="http://www.ioncannon.net/dnsbl/">DNSBL checker</a> as a test since it has a fairly large data-set that gets converted and sent back. The <a href="http://us2.php.net/json">json functions</a> provided by the extension are probably easier to use since the JSON library needed you to create an object first but that wasn't a real issue. After making the change I could tell JSON extension was faster than the library. After a little digging I found that someone has done a little <a href="http://www.aurore.net/projects/php-json/">extension vs library</a> testing and claims the JSON extension is 153 times as fast as the library.



