---
layout: archive
status: publish
published: true
title: Building firefox and mozilla tools on an AMD64
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 88
wordpress_url: http://www.ioncannon.net/linux/88/building-firefox-and-mozilla-tools-on-an-amd64/
date: '2006-07-21 08:00:15 -0400'
date_gmt: '2006-07-21 12:00:15 -0400'
categories:
- linux
- java
tags: []
comments: []
---
Sometimes I curse the day I decided to get a 64 bit box. Everything is fine until I want to build something by hand or upgrade something and then if it doesn't just work it is like a maze of problems. 

Recently I was trying to build firefox from source along with XULRunner so that I could try out <a href="http://developer.mozilla.org/en/docs/JavaXPCOM">JavaXPCOM</a>. The first problem I ran into was a GCC 4 bug that breaks the build. Luckily someone out there had an easy fix for the problem (see <a href="http://benjamin.smedbergs.us/blog/2005-10-27/gcc-40-workaround/">GCC4.0 - relocation R_X86_64_PC32 against memcpy@@GLIBC_2.2.5 can not be used</a>). After getting that problem fixed an a little fight with setting up XULRunner I got a very simple program working. That is when the 2nd problem showed up. When I tried to use some of the GUI functions I started getting core dumps from within GTK2. At that point I gave up and moved to my laptop. The same code worked right off using my laptop.

I should have instructions soon on how to embed gecko into a java app with JavaXPCOM. There isn't much documentation or example code out there on making it work. As for the 64 bit box, I think I have had about as much of it as I can take. At least it can run in 32 bit mode when I decide to re-install.



