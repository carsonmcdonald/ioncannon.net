---
layout: archive
status: publish
published: true
title: Wordpress 404 with lighttpd (lighty)
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 65
wordpress_url: http://www.ioncannon.net/system-administration/65/wordpress-404-with-lighttpd-lighty/
date: '2006-06-26 10:07:10 -0400'
date_gmt: '2006-06-26 14:07:10 -0400'
categories:
- system administration
tags: []
comments: []
---
If you are having a problem getting your wordpress 404 page to show up when using lighttpd you need to add the following to your lighttpd config file to tell it where to get 404 responses from:

```
server.error-handler-404 = "/index.php?error=404"
```
This assumes that your blog starts at the root directory.



