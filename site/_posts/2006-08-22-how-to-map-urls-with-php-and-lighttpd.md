---
layout: archive
status: publish
published: true
title: How to map URLs with PHP and lighttpd
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 95
wordpress_url: http://www.ioncannon.net/system-administration/95/how-to-map-urls-with-php-and-lighttpd/
date: '2006-08-22 14:52:00 -0400'
date_gmt: '2006-08-22 18:52:00 -0400'
categories:
- system administration
- php
tags: []
comments: []
---
On a number of occasions I've wanted to map a section of a site hosted with lighttpd onto a single PHP file that could then be used as a controller. Here is how I go about doing it.

The first part is to re-write the given part of the site to the PHP file you want to be the controller. Add the following to your configuration file:

```
  url.rewrite = (
        "^/(.*)" => "/controller.php"
  )
```
You can then start with a simple example to see where you will get your URL information from:

```
<?php
echo $_SERVER["REQUEST_URI"];
?>
```
The $_SERVER["REQUEST_URI"] value will be the requested URI. You can now break it up into multiple parts with <a href="http://us3.php.net/manual/en/function.explode.php">explode</a>:

```
<?php
$urlParts = explode("/", $_SERVER['REQUEST_URI']);
echo $urlParts[1];
?>
```
At this point you have an array of the URI parts and can map those however you want using PHP.



