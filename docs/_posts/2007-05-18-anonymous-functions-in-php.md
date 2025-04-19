---
layout: archive
status: publish
published: true
title: Anonymous functions in PHP
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 126
wordpress_url: http://www.ioncannon.net/uncategorized/126/anonymous-functions-in-php/
date: '2007-05-18 09:17:26 -0400'
date_gmt: '2007-05-18 14:17:26 -0400'
categories:
- programming
tags:
- php
comments:
- id: 17042
  author: SantosJ
  author_email: dragonwing@dragonu.net
  author_url: ''
  date: '2007-05-18 10:59:35 -0400'
  date_gmt: '2007-05-18 15:59:35 -0400'
  content: "I stopped following the discussion after a while (and any discussion on
    the Internals Mailing List). I'm more interested in if they are going to have
    it in the next version of PHP. The patch is easy enough that you can add it yourself.\r\n\r\nIt
    is good that people with more karma was able to come in and support the idea."
- id: 17083
  author: Edward Z. Yang
  author_email: admin@htmlpurifier.org
  author_url: http://htmlpurifier.org/
  date: '2007-05-18 16:48:39 -0400'
  date_gmt: '2007-05-18 21:48:39 -0400'
  content: Ah, that sounds absolutely delightful! I've always found JavaScript's first-class
    treatment of anonymous functions quite helpful, it's nice to see it come into
    PHP now.
- id: 17156
  author: Alexey Zakhlestin
  author_email: indeyets@gmail.com
  author_url: http://blog.milkfarmsoft.com/
  date: '2007-05-19 06:21:27 -0400'
  date_gmt: '2007-05-19 11:21:27 -0400'
  content: "Edward: it's not first-class function. thing which gets into php is much
    simplier&acirc;&euro;&brvbar;\r\n\r\nthough, it's still not applied to the tree,
    as far as I know"
---
I ran into this and found it interesting. Someone has added support for <a href="http://devzone.zend.com/node/view/id/2013">anonymous functions in PHP</a>.

With the patch you can now do stuff like:

```
$data = array("zoo", "orange", "car", "lemon", "apple");
usort($data, function($a, $b) { return strcmp($a, $b); });
var_dump($data); # data is sorted alphabetically
```
Before you had to use a funky function generation call.



