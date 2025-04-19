---
layout: archive
status: publish
published: true
title: Free geocoding
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 66
wordpress_url: http://www.ioncannon.net/gis/66/free-geocoding/
date: '2006-05-20 19:13:50 -0400'
date_gmt: '2006-05-20 23:13:50 -0400'
categories:
- gis
tags: []
comments: []
---
I've had opertunities to work with a number of different GIS packages in the past (see my <a href="http://www.ioncannon.net/gis/43/gis-geocoding-experiments/">post comparing a few</a>). Most of them are great but they all cost a lot of money to use. If you trying to get your feet wet and don't want to spend money on one of the real services there are a number of places where you can start like <a href="http://developer.yahoo.com/maps/">yahoo</a> or <a href="http://www.esri.com/software/arcwebservices/index.html">ESRI</a>. These free services however have strict rules about using them for any commercial venture. So if you wanted to do geocoding for something that you charge for you need something else.

That something else could be one of the few open source applications that have sprung up. The first one has been around for a good while: <a href="http://geocoder.us/">geocoder.us</a>. geocoder.us is has a free web service you can use to do your geocoding and they also give away the software they use to do it for free. The code they use to do all the work is in perl so it should work on a number of platforms (they also have a <a href="http://geocoder.us/blog/">blog</a> with some <a href="http://geocoder.us/blog/2006/03/11/another-php-sample/">PHP examples</a>). The second choice would be a newer entry <a href="http://www.extendthereach.com/products/OSGeocoder.srct">SRC Open Source Explorer Geocoder</a>. The code for SRC Open Source Explorer Geocoder is windows only for now but maybe someone will come along and port it to Unix. Now for the bad new. Both of these applications need a source of data and the most likely source of data for the average joe would be the US TIGER data. The TIGER data isn't too bad but it isn't great and not nearly as good as a purchased dataset. But you can't get better than free so if you are interested in a way to do free geocoding without comercial use restrictions then geocoder.us or SRC Open Source Explorer Geocoder are good places to start.



