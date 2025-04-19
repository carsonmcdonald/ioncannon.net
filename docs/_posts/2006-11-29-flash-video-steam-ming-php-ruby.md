---
layout: archive
status: publish
published: true
title: How to Create a Streaming Flash Video Player Using Ming PHP or Ruby
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 108
wordpress_url: http://www.ioncannon.net/ruby/108/flash-video-steam-ming-php-ruby/
date: '2006-11-29 15:52:32 -0500'
date_gmt: '2006-11-29 19:52:32 -0500'
categories:
- ruby
- php
- utilities
tags: []
comments:
- id: 821
  author: Using Flash video metadata to display annotations @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/php/110/using-flash-video-metadata-to-display-annotations/
  date: '2006-12-09 15:58:35 -0500'
  date_gmt: '2006-12-09 19:58:35 -0500'
  content: "[...] Now that you can create a streaming Flash video player with PHP
    or Ruby and you know add metadata for cuepoints to Flash videos you are ready
    for something else. The following code will show you how to create a video player
    with PHP that will watch for metadata events and display annotations contained
    inside the metadata either over the video itself or in a div on the same page
    as the movie. [...]"
- id: 141401
  author: Arifur Rahman
  author_email: smarif3@yahoo.com
  author_url: ''
  date: '2009-06-10 00:24:28 -0400'
  date_gmt: '2009-06-10 05:24:28 -0400'
  content: "Hi,\r\n\r\nDo I need to add any library to execute above code? If so,
    where can I find that? \r\n\r\nThanks\r\nArif"
- id: 141526
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-06-11 09:13:46 -0400'
  date_gmt: '2009-06-11 14:13:46 -0400'
  content: Yes you need the PHP Ming library. See http://www.php.net/ming for more
    details on how to get it installed.
- id: 170972
  author: Ali Hassaan
  author_email: alimetthews@hotmail.com
  author_url: ''
  date: '2010-05-29 13:11:03 -0400'
  date_gmt: '2010-05-29 18:11:03 -0400'
  content: "Hi,\r\nI am searching for the right code to create a custom video streaming
    player for flash files. I am not sure if this is the right one. But can you guide
    me with this ?\r\n\r\nthank you,"
---
I mentioned in <a href="http://www.ioncannon.net/linux/105/create-flash-videos-ffmpeg/">creating Flash videos using FFMpeg</a> that you could use Ming to create your own Flash video player. I've added a patch to the <a href="http://www.ioncannon.net/ruby/107/ruby-ming-extension-patch-to-add-video-streaming/">ruby -ming extension for video streaming</a> so now it is possible to create a streaming player with both PHP and Ruby using their Ming extensions. The following examples show you how.
<!--more-->

First a little background. You can read about <a href="http://livedocs.macromedia.com/flash/mx2004/main_7_2/00001107.html">playing back external FLV files dynamically</a> with actionscript at the Macromedia website. It includes references to the <a href="http://livedocs.macromedia.com/flash/mx2004/main_7_2/00001587.html">NetConnect class</a> and <a href="http://livedocs.macromedia.com/flash/mx2004/main_7_2/00001589.html">NetStream class</a> that together let you stream a FLV file. The main thing Ming does for you in the following simple examples is give you a SWF with a video player in it and let you attach some action script to it.

Here is how you do it in PHP:

```
<?php
Ming_setScale(10.0000000);
ming_useswfversion(7);

$movie = new SWFMovie(7);
$movie->setDimension(320,240);
$movie->setBackground(0x33,0x33,0x33);
$movie->setRate(8);

$strAction = "
stop();
netConn=new NetConnection();
netConn.connect(null);
vStream=new NetStream(netConn);
video1.attachVideo(vStream);
vStream.setBufferTime(10);
vStream.play('http://localhost/test.flv');
";

$stream = new SWFVideoStream();
$item=$movie->add($stream);
$item->setname("video1");
$movie->add(new SWFAction($strAction));
$movie->nextFrame();

$movie->save("videostream.swf");
?>
```
And here is how you do it with Ruby:

```
#!/usr/bin/env ruby

require 'ming/ming'
include Ming

Ming::set_scale(10.0000000)

movie = SWFMovie.new(7)
movie.set_background(0xff, 0xff, 0xff)
movie.set_dimension(320, 240)
movie.set_rate(8)

strAction = '
stop();
netConn=new NetConnection();
netConn.connect(null);
vStream=new NetStream(netConn);
video1.attachVideo(vStream);
vStream.setBufferTime(10);
vStream.play(\'http://localhost/test.flv\');
'

vstream = SWFVideoStream.new
item = movie.add(vstream)

item.set_name("video1")
movie.add(SWFAction.new(strAction))
movie.next_frame()

movie.save("videostream.swf")
```
Here is the result of the above examples:

<div>
<object type="application/x-shockwave-flash" data="/assets/ming/videostream.swf" width="192" height="154" id="go"><param name="movie" value="/assets/ming/videostream.swf" /><param name="quality" value="high" /></object>
</div>


