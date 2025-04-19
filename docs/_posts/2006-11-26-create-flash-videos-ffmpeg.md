---
layout: archive
status: publish
published: true
title: Creating Flash Videos Using FFMpeg
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 105
wordpress_url: http://www.ioncannon.net/linux/105/create-flash-videos-ffmpeg/
date: '2006-11-26 23:17:38 -0500'
date_gmt: '2006-11-27 03:17:38 -0500'
categories:
- linux
- utilities
tags: []
comments:
- id: 676
  author: Ruby Ming Extension Patch to Add Video Streaming @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/ruby/107/ruby-ming-extension-patch-to-add-video-streaming/
  date: '2006-11-27 12:00:53 -0500'
  date_gmt: '2006-11-27 16:00:53 -0500'
  content: "[...] The above example assumes you have a Flash video file available
    named test.flv. If you don&#39;t have one you can make one by reading about creating
    flash videos with FFMpeg. [...]"
- id: 701
  author: How to Create a Streaming Flash Video Player Using Ming PHP or Ruby @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/ruby/108/flash-video-steam-ming-php-ruby/
  date: '2006-11-29 15:52:37 -0500'
  date_gmt: '2006-11-29 19:52:37 -0500'
  content: "[...] I mentioned in creating Flash videos using FFMpeg that you could
    use Ming to create your own Flash video player. I&#39;ve added a patch to the
    ruby -ming extension for video streaming so now it is possible to create a streaming
    player with both PHP and Ruby using their Ming extensions. The following examples
    show you how. [...]"
- id: 798
  author: How to create and use Flash video metadata to add cue-points with flvtool2
    @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/web-design/109/metadata-cuepoint-flash-video-flvtool/
  date: '2006-12-08 09:31:14 -0500'
  date_gmt: '2006-12-08 13:31:14 -0500'
  content: "[...] Adding cue-points allows you to spice up your flash videos created
    with FFMpeg. Adding metadata to a FLV will allow you to introduce cue-points that
    have their own metadata that can be display when the cue-point is reached or let
    you jump to that cue-point. In the following tutorial you will learn how to add
    metadata to your FLV files using flvtool2 and how it is useful for adding cue-points.
    [...]"
- id: 141573
  author: How to build FlowPlayer from source | IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/programming/112/how-to-build-flowplayer-from-source/
  date: '2009-06-11 22:39:39 -0400'
  date_gmt: '2009-06-12 03:39:39 -0400'
  content: "[...] the free open source flash video player FlowPlayer before in my
    post about adding cuepoints and create flash videos. It is a great free flash
    video player that you can modify yourself. After writing about adding [...]"
---
One of the hardest parts about doing video on the Internet in the past has been knowing what video format to use. With the rise of video sharing sites like youtube the answer these days seems to be Flash video. It is very easy to create Flash videos and display them using FFMpeg and a free player.

Here is a tutorial on how to create the Flash video files: <a href="http://www.luar.com.hk/blog/?p=669">One-stop Installation Guide for Create a Linux Server-side FLV conversion environment</a>. 

Here are a couple free Flash video players:

<a href="http://flowplayer.sourceforge.net/">FlowPlayer</a>
<a href="http://www.jeroenwijering.com/?item=Flash_Video_Player">Flash Video Player</a>

You can also create your own Flash player if you like either with the Flash studio tools or something like Ming. For simplicity I would recommend using FlowPlayer to start with since it works well, is completely free, and has a number of features that can integrate with meta data in the Flash video.

Now go make the next youtube.



