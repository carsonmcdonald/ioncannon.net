---
layout: archive
status: publish
published: true
title: Java AirPlay Client
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1436
wordpress_url: http://www.ioncannon.net/?p=1436
date: '2011-01-25 09:36:04 -0500'
date_gmt: '2011-01-25 14:36:04 -0500'
categories:
- utilities
tags:
- java
- airplay
comments:
- id: 206645
  author: Carl
  author_email: Carl_z1@gmail.com
  author_url: ''
  date: '2011-06-10 05:52:57 -0400'
  date_gmt: '2011-06-10 10:52:57 -0400'
  content: It would be great to have a Firefox plugin that automatically detects and
    highlights the video links(like  .m3u8 hls links) and give the oppertunity to
    forward that media to your Airplay device.
- id: 206825
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-06-12 20:36:35 -0400'
  date_gmt: '2011-06-13 01:36:35 -0400'
  content: "@Carl I agree, I haven't had time to enhance the app in a while but if
    I find time that is on the top of the list."
- id: 208781
  author: fapestniegd
  author_email: fapestniegd@gmail.com
  author_url: http://blog.websages.com
  date: '2011-07-02 14:56:37 -0400'
  date_gmt: '2011-07-02 19:56:37 -0400'
  content: So this works with .m3u8 streams? Would it work in conjunction with your
    live-segmenter?
- id: 208782
  author: fapestniegd
  author_email: fapestniegd@gmail.com
  author_url: http://blog.websages.com
  date: '2011-07-02 15:05:54 -0400'
  date_gmt: '2011-07-02 20:05:54 -0400'
  content: Just tested it, and it does! Wow, that's an astonishing 1-2 punch. Excellent
    work!
---

Ever since getting one of the new AppleTV devices I have been wanting to fiddle with AirPlay. I finally got around to looking at a dump of the traffic between an iPad and the AppleTV over Christmas and was surprised at how simple it was. Soon after I noticed a blog post about <a href="http://ericasadun.com/ftp/AirPlay/">AirFlick</a> for the Mac. AirFlick was close to what I was wanting at the time but I really wanted something that would let me control AirPlay from Linux or Windows.


I decided to make something that could run anywhere so I created my own AirPlay client called <a href="http://www.ioncannon.net/projects/ap4j-player-java-airplay-player/">AP4J</a>. I used Java and a pure Java Bonjour implementation called <a href="http://jmdns.sourceforge.net/">JmDNS</a> so AP4J can run anywhere Java runs.


The current version only has the ability to control an AirPlay device. That means you have to supply a location that has a compatible video (h264 encoded) but once playing you will have control over the video just as you would using the iPad or iPhone. The next step will be to add the ability to directly serve videos instead of only being able to control the playback of videos. My goal will be the ability to run AP4J on my Windows Home Media server where I can have it stream videos to my AppleTV.

I have tested AP4J on Linux, Windows and Mac but only extensively on Linux. I have also tested a number of sites that have compatible videos available, a few of those are listed here:


<ul>
<li><a href="http://blip.tv/">http://blip.tv/</a></li>
<li><a href="http://blip.tv/">http://www.archives.org/</a></li>
<li><a href="http://blip.tv/">http://confreaks.net/</a></li>
</ul>

Now for a couple screen shots. This is what you see after starting the server and going to the web interface:


<a href="/assets/2011_01_ap4jmain.png"><img src="/assets/2011_01_ap4jmain.png" alt="" title="Java AirPlay Application Main Menu" width="353" height="204" class="alignnone size-full wp-image-1431" /></a>


This is what it looks like when a video is playing:


<a href="/assets/2011_01_ap4jpopup.png"><img src="/assets/2011_01_ap4jpopup.png" alt="" title="Java AirPlay Application Play Popup" width="698" height="407" class="alignnone size-full wp-image-1432" /></a> <br/>

