---
layout: archive
status: publish
published: true
title: Google Analytics Dashboard WordPress Plugin Version 2.0 Released
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1460
wordpress_url: http://www.ioncannon.net/?p=1460
date: '2011-02-22 09:13:22 -0500'
date_gmt: '2011-02-22 14:13:22 -0500'
categories:
- utilities
tags:
- wordpress
comments:
- id: 229199
  author: eric
  author_email: edinkin@parracity.nsw.gov.au
  author_url: ''
  date: '2012-01-09 22:59:52 -0500'
  date_gmt: '2012-01-10 03:59:52 -0500'
  content: Is there any way of changing google account authenticated for the site?
---

It has taken me a while but I've finally been able to release version 2 of the <a href="http://www.ioncannon.net/projects/google-analytics-dashboard-wordpress-widget/">Google Analytics Dashboard WordPress Plugin</a>. The primary enhancement of this version is that it no longer blocks the dashboard, posts or pages interfaces while loading. The next major change is an upgrade to using Google's OAuth login system (see my <a href="http://www.ioncannon.net/programming/1443/google-oauth-for-installed-apps-php-example/">Google OAuth example using PHP</a> for more information on how I did that if you are interested). The old login system is still available but the OAuth login is the one to use going forward and I may remove the old one at some point. The move to OAuth along with the refactoring I did to the code will allow support for other Google sites such as Feedburner. As a bonus I also moved the caching system to the newer Wordpress transient storage interface. The use of the transient storage interface should fix one of the biggest issues people have seen in the past so no more worrying about finding a temp directory that is writable.


Here are a list of the major changes:

<ul>
<li>The dashboard panel now loads asynchronously so the entire dashboard doesn't block while it is loading</li>
<li>Made the analytics column in posts and pages load asynchronously so that it doesn't block the loading of the page</li>
<li>Added support for Google OAuth logins</li>
<li>Use transient API support with wordpress version 2.8+</li>
<li>Added ability to support multiple analytics sources</li>
</ul>

Some other minor changes:

<ul>
<li>Stop unlink warnings when caching won't work</li>
<li>Refactored code so that major parts are split into classes</li>
<li>Refactored code to better seperate UI code</li>
<li>Fixed mime type not being sent correctly for admin area javascript file</li>
<li>Fix bug in wordpress version checking</li>
</ul>
