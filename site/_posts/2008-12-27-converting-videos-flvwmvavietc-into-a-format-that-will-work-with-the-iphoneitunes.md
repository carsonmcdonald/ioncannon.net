---
layout: archive
status: publish
published: true
title: Converting videos (flv,wmv,avi,etc) into a format that will work with the iPhone/iTunes
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 210
wordpress_url: http://www.ioncannon.net/?p=210
date: '2008-12-27 21:37:20 -0500'
date_gmt: '2008-12-28 02:37:20 -0500'
categories:
- meta
tags:
- mencoder
- itunes
- iphone
- touch
- ipod
- video
- Open Source
comments: []
---
I have had an iPhone for a while now and I keep running into instances where I want to have videos outside of youtube in some format that I can watch on the device. These include windows WMV formatted videos from PDC as well as FVL formatted videos on Flex. I finally broke down and found a working solution to convert pretty much any video into a iPhone/iTunes format using mencoder.


 Here is the script I came up with to convert a video:

```
#!/bin/sh

BN=`basename $1 .flv`

mencoder $1 -ofps 23.976 -ovc lavc -oac copy -o /tmp/test.$BN.avi

mencoder /tmp/test.$BN.avi -o togo/$BN.mp4 -vf scale=480:-10,harddup -lavfopts format=mp4 -faacopts mpeg=4:object=2:raw:br=128 -oac faac -ovc x264 -sws 9 -x264encopts nocabac:level_idc=30:bframes=0:global_header:threads=auto:subq=5:frameref=6:partitions=all:trellis=1:chroma_me:me=umh:bitrate=500 -of lavf

rm /tmp/test.$BN.avi
```
One thing to notice is that I have the file format hard coded in the basename argument. I did this because I didn't need the script to be that generic and I just change it when I move from one format to another. For some reason I found that converting the video with the first statement works best. Without that I had a number of audio sync issues as well as some outright conversion failures .

The options for the first command are

<ul>
<li>-ofps output frames per second</li>
<li>-ovc lavc output codec is lavc</li>
<li>-oac copy output audio is a copy of the input</li>
<li>-o the output file</li>
</ul>
The options for the second command are

<ul>
<li>-o the output file</li>
<li>-vf scale=480:-10,harddup video filter that scales to 480 width and rounds the height to the closest 10/16th width as well as forcing duplicate frames to be encoded in the output </li>
<li>-lavfopts format=mp4 set the video format options to mp4</li>
<li>-faacopts mpeg=4:object=2:raw:br=128 set the audio options to mp4</li>
<li>-oac faac set the audio output format to faac</li>
<li>-ovc x264 set the output to x264 encoding</li>
<li>-sws 9 set the scaler options to lanczos</li>
<li>-x264encopts nocabac:level_idc=30:bframes=0:global_header:threads=auto:subq=5:frameref=6:partitions=all:trellis=1:chroma_me:me=umh:bitrate=500 sets the 265 enocoding options</li>
<li>-of lavf set the output video format</li>
</ul>
After converting the video all you need to to do is drag it onto the iTunes Library bar and it will then import it and make it available to sync to your iPhone, touch or iPod. 

