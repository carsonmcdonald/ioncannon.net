---
layout: archive
status: publish
published: true
title: RFID Reader USB Prototyping Kit
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 551
wordpress_url: http://www.ioncannon.net/?p=551
date: '2009-08-03 05:00:23 -0400'
date_gmt: '2009-08-03 10:00:23 -0400'
categories:
- programming
tags:
- rfid
- diy
comments:
- id: 149440
  author: Bryan
  author_email: bm@c4.ca
  author_url: http://www.c4.ca
  date: '2009-09-04 07:01:14 -0400'
  date_gmt: '2009-09-04 12:01:14 -0400'
  content: "This kit is pretty cool to get started.  I used it in a project to identify
    users, display the username to a LCD, trigger sound, add the info to a database
    for later use.  One problem with the reader is that it requires pretty close proximity
    and there is no good mounting solution or nice box for this.  It would be cool
    if someone built this into a small box. \r\n\r\nOh.. also found that the led's
    were a bit weir when you hooked them up to the circuit board, could have been
    the software (drivers for mac) since i did it all in objective-c."
- id: 156620
  author: Carmine
  author_email: carminesilano@gmail.com
  author_url: ''
  date: '2009-11-07 23:56:06 -0500'
  date_gmt: '2009-11-08 04:56:06 -0500'
  content: "Hey, the title of this is RFID reader/writer...but how did you write to
    the rfid tags if the phidgets RFID kit doesn't support writing?\r\n\r\nThanks."
- id: 157213
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-11-18 08:37:44 -0500'
  date_gmt: '2009-11-18 13:37:44 -0500'
  content: I didn't even think about it when I wrote the title but you are correct.
    The kit only allows reading.
---
I recently won a programming contest that netted me a gift card for <a href="http://www.thinkgeek.com/">ThinkGeek</a> and not knowing what else to do I strolled the site looking for something interesting to use the gift card on. Eventually I ran into the <a href="http://www.thinkgeek.com/geektoys/science/907a/">RFID Experimentation Kit</a> they have and decided that was what I needed. I have been wanting to play around with <a href="http://en.wikipedia.org/wiki/Radio-frequency_identification">RFID</a> for a while and this kit turned out to be pretty nice for tinkering.


Even though I picked this RFID kit from ThinkGeek you can buy it a couple different places and in a number of different configurations. The one I got came with a book from ExtremeTech called <a href="http://www.amazon.com/RFID-Toys-Projects-Entertainment-ExtremeTech/dp/0471771961">RFID Toys: 11 Cool Projects for Home, Office and Entertainment</a> and the RFID parts are from <a href="http://www.phidgets.com/">Phidgets</a>, who actually make a lot of other interesting kits. 

<a href="/assets/2009_07_allkit.png"><img src="/assets/2009_07_allkit.png" alt="RFID Kit Parts" title="RFID Kit Parts" width="300" height="228" class="alignnone size-medium wp-image-552" /></a>

Outside of the book you can get the <a href="http://www.phidgets.com/products.php?category=14&product_id=1023">RFID reader</a> and <a href="http://www.phidgets.com/products.php?category=14">RFID keyfobs, cards, etc</a>. Another good place to look for this type of gear is <a href="http://www.sparkfun.com">SparkFun</a> and they also have a <a href="http://www.sparkfun.com/commerce/product_info.php?products_id=8852">USB RFID reader</a>.

<a href="/assets/2009_07_kitsansbook.png"><img src="/assets/2009_07_kitsansbook.png" alt="RFID Reader and Badges" title="RFID Reader and Badges" width="219" height="300" class="alignnone size-medium wp-image-553" /></a>

<a href="/assets/2009_07_rfidreader.png"><img src="/assets/2009_07_rfidreader.png" alt="RFID Reader" title="RFID Reader" width="260" height="300" class="alignnone size-medium wp-image-554" /></a>

This RFID kit reads EM4102 type tags and operates at 125 kHz. The frequency and tag type are actually important. I have a number of badges and keyfobs outside of what I got with the kit and none of them work with this reader.

The Phidgets site has source code in a number of different languages making it very easy to develop custom applications. To get started you will need to grab the <a href="http://www.phidgets.com/drivers.php">driver source</a> and compile that. It isn't a driver in the normal sense of the word since it doesn't get installed by your operating system but more of a base library. Once you have the base library compiled you can grab any number of different language source files from the <a href="http://www.phidgets.com/products.php?category=14&product_id=1023">RFID reader source</a> area. There should be a simple RFID reader example that shows how to use most of the available functions out of the base library.

If you are interested RFID projects check out these links:

<ul>
<li><a href="http://www.elektronika.ba/674/lazy-mans-usb-rfid-reader/">lazy mans usb RFID reader</a></li>
<li><a href="http://www.instructables.com/id/RFID_Reader_Detector_and_Tilt_Sensitive_RFID_Tag/">RFID reader detector</a></li>
</ul>
