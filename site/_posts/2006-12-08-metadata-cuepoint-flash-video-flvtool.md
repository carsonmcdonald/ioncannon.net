---
layout: archive
status: publish
published: true
title: How to create and use Flash video metadata to add cue-points with flvtool2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 109
wordpress_url: http://www.ioncannon.net/web-design/109/metadata-cuepoint-flash-video-flvtool/
date: '2006-12-08 09:31:09 -0500'
date_gmt: '2006-12-08 13:31:09 -0500'
categories:
- web design
- linux
- utilities
tags: []
comments:
- id: 1330
  author: How to build FlowPlayer from source @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/web-design/112/how-to-build-flowplayer-from-source/
  date: '2006-12-30 14:29:34 -0500'
  date_gmt: '2006-12-30 18:29:34 -0500'
  content: "[...] I have mentioned the free open source flash video player FlowPlayer
    before in my post about adding cuepoints and create flash videos. It is a great
    free flash video player that you can modify yourself. After writing about adding
    metadata to your flash videos I decided to add support for calling javascript
    from FlowPlayer one cue events. The first step to modifying the FlowPlayer source
    is to be able to build FlowPlayer from source. [...]"
- id: 72793
  author: Ashok Swamy
  author_email: ashok_swamy@yahoo.com
  author_url: ''
  date: '2008-06-05 02:37:05 -0400'
  date_gmt: '2008-06-05 07:37:05 -0400'
  content: "Hello,\r\n\r\nUsing flvtool2 trying to set 0.042 seconds in the timestamp
    tag in the xml file. the value seems to be 0. tried using 420 as well but the
    same. pls suggest...\r\n\r\nAm i missing something?\r\n\r\nthanks"
- id: 97841
  author: Danny
  author_email: frydanny49@googlemail.com
  author_url: ''
  date: '2008-09-12 15:58:15 -0400'
  date_gmt: '2008-09-12 20:58:15 -0400'
  content: "Ashok, i use myFME to add the metadata, i prefer the gui than command
    line... http://www.mediamodus.com/flv-meta-editor\r\n\r\nDan"
- id: 157751
  author: Daniel B.
  author_email: daniel@atarim.com
  author_url: ''
  date: '2009-11-26 10:44:35 -0500'
  date_gmt: '2009-11-26 15:44:35 -0500'
  content: "Any way to add an \"end tag\"\r\n (FROM 8000 TO 10000) ???\r\n\r\nThanks."
- id: 165988
  author: Jo&Atilde;&pound;o Dias
  author_email: diasje@gmail.com
  author_url: http://notyet
  date: '2010-03-22 11:02:15 -0400'
  date_gmt: '2010-03-22 16:02:15 -0400'
  content: "Finaly, a great tutorial.\r\n\r\nnow i need to know how o get Cue points
    in the video loader like you can see in Revision3.com.\r\n\r\nThey have cue poits
    marked in the player and, below you can point and click in the cue points text.\r\n\r\nIs
    that possible?"
- id: 166339
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-27 12:14:07 -0400'
  date_gmt: '2010-03-27 17:14:07 -0400'
  content: You can do it a number of different ways now. Take a look at this post
    that I did http://www.ioncannon.net/php/110/using-flash-video-metadata-to-display-annotations/
    or check out the newer way of doing it with flowplayer here http://flowplayer.org/demos/events/embedded-cuepoints.html
- id: 167187
  author: Jo&Atilde;&pound;o Dias
  author_email: diasje@gmail.com
  author_url: http://diasje.07x.net
  date: '2010-04-09 09:34:20 -0400'
  date_gmt: '2010-04-09 14:34:20 -0400'
  content: Thank you very much Carson, i will spend all my time testing your tutorials.
- id: 170986
  author: david
  author_email: david6228@gmail.com
  author_url: ''
  date: '2010-05-29 23:01:01 -0400'
  date_gmt: '2010-05-30 04:01:01 -0400'
  content: Did flvtool2 supported UTF-8?  Chinese Encode?
---
Adding cue-points allows you to spice up your <a href="http://www.ioncannon.net/linux/105/create-flash-videos-ffmpeg/">flash videos created with FFMpeg</a>. Adding metadata to a FLV will allow you to introduce cue-points that have their own metadata that can be display when the cue-point is reached or let you jump to that cue-point. In the following tutorial you will learn how to add metadata to your FLV files using <a href="http://inlet-media.de/flvtool2">flvtool2</a> and how it is useful for adding cue-points.
<!--more-->

Metadata is added to a FLV file with flvtool2 using the following XML format:

```
<tags>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 1</name>
        <timestamp>2000</timestamp><parameters><textinfo>This is some text 1</textinfo>

<thumb>test1.jpg</thumb>
        </parameters>
        <type>navigation</type>
    </metatag>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 2</name>
        <timestamp>4000</timestamp><parameters><textinfo>This is some text 2</textinfo>

<thumb>test2.jpg</thumb>
        </parameters>
        <type>navigation</type>
    </metatag>
</tags>
```
Most of the tags are obvious but the following tags are important to point out:

<ul>
<li>metatag - When the overwrite flag is set to true the metadata is overwritten at the given timestamp</li>
<li>timestamp - This is where to put the metadata in milliseconds from the start of the FLV</li>
<li>parameters - This is the metadata for the given metadata. It allows you to specify any named parameter that will then be turned into a map available to your actionscript in the flash player playing your FLV file.</li>
<li>type - This specifies what this metadata is used for. The options are: navigation, event</li>
</ul>
The following syntax is used when running flvtool2:

Usage: flvtool2 [-ACDPUVaciklnoprstvx]... [-key:value]... in-path|stdin [out-path|stdout]

Note that you can add any key-value pair by specifying them here. From the help the key-value pair: key:value - Key-value-pair for onMetaData tag (overwrites generated values).

After building your metadata xml file with the above syntax you would run a command like the following:

```
flvtool2 -AUtP mymeta.xml -thumbLocation:http://localhost/thumb test.flv
```
Now that you know how to create metadata and cue-points we can talk about one of the things you can do with them. With FFMpeg you can generate thumbnails of your FLV using the following command:

```
ffmpeg -i test.flv -an -ss 00:00:06 -r 1 -vframes 1 %d.jpg
```
That command tells FFMpeg to open the file test.flv with no audio support then seek to the 6th second. After seeking to the 6th second it records 1 frame at a framerate of 1. Here are the description of each option from the FFMpeg help:

<ul>
<li>-i = input video</li>
<li>-an = disable audio</li>
<li>-ss = set the start time offset</li>
<li>-r = set frame rate</li>
<li>-vframes = number of frames to record</li>
</ul>
Now we need to put these two things together with a flash video player that will use the cue-point metadata. One such player is the open source flash video player <a href="http://flowplayer.sourceforge.net/">FlowPlayer</a>. To get the following to work you will need to have a streaming video server to stream the FLV from.

I started with the public domain video from the following page: <a href="http://www.archive.org/details/merry_melodies_fresh_hare">Archive.org - Merry Melodies Fresh Hare</a>. I encoded 17 seconds, starting at the 3rd second and ending at the 20th, of the video with ffmpeg.

```
wget http://www.archive.org/download/merry_melodies_fresh_hare/merry_melodies_fresh_hare.mpg
ffmpeg -ss 00:03:00 -t 00:00:20 -i merry_melodies_fresh_hare.mpg -s 320x240 -ar 22050 -r 12 test.flv
```
Next I created 4 thumbnails at 4 second intervals using ffmpeg at a size of 110x80 each:

```
ffmpeg -i test.flv -an -ss 00:00:04 -r 1 -vframes 1 -s 110x80 %d.jpg
mv 1.jpg test1.jpg
ffmpeg -i test.flv -an -ss 00:00:08 -r 1 -vframes 1 -s 110x80 %d.jpg
mv 1.jpg test2.jpg
ffmpeg -i test.flv -an -ss 00:00:12 -r 1 -vframes 1 -s 110x80 %d.jpg
mv 1.jpg test3.jpg
ffmpeg -i test.flv -an -ss 00:00:16 -r 1 -vframes 1 -s 110x80 %d.jpg
mv 1.jpg test4.jpg
```
The results are shown here:

<img src="/assets/cfvm-thumb/test1.jpg"/><img src="/assets/cfvm-thumb/test2.jpg"/><img src="/assets/cfvm-thumb/test3.jpg"/><img src="/assets/cfvm-thumb/test4.jpg"/>

I then created the following metadata xml file to specify the cue-points and the thumbnails for each:

```
<tags>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 1</name>
        <timestamp>4000</timestamp><parameters><textinfo>This is some text 1</textinfo>

<thumb>test1.jpg</thumb>
        </parameters>
        <type>navigation</type>
    </metatag>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 2</name>
        <timestamp>8000</timestamp><parameters><textinfo>This is some text 2</textinfo>

<thumb>test2.jpg</thumb>
        </parameters>
        <type>navigation</type>
    </metatag>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 3</name>
        <timestamp>8000</timestamp><parameters><textinfo>This is some text 3</textinfo>

<thumb>test3.jpg</thumb>
        </parameters>
        <type>navigation</type>
    </metatag>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 4</name>
        <timestamp>8000</timestamp><parameters><textinfo>This is some text 3</textinfo>

<thumb>test4.jpg</thumb>
        </parameters>
        <type>navigation</type>
    </metatag>
</tags>
```
And then I added it to the FLV file:

```
flvtool2 -AUtP test-meta.xml -thumbLocation:/assets/cfvm-thumb test.flv
```
And here is the result (you need to hit play to get things started and clicking on the images will jump to the cue-points):

<object type="application/x-shockwave-flash" width="450" height="500" data="/assets/FlowPlayerLP.swf" id="FlowPlayerLP"><param name="allowScriptAccess" value="sameDomain" /><param name="movie" value="/assets/FlowPlayerLP.swf" /><param name="quality" value="high" /><param name="scale" value="noScale" /><param name="wmode" value="transparent" /><param name="flashvars" value="configFileName=/assets/cfvm-thumb/fp.js" /></object>



