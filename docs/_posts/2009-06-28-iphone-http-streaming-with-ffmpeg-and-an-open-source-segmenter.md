---
layout: archive
status: publish
published: true
title: iPhone HTTP Streaming with FFMpeg and an Open Source Segmenter
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 452
wordpress_url: http://www.ioncannon.net/?p=452
date: '2009-06-28 18:43:45 -0400'
date_gmt: '2009-06-28 23:43:45 -0400'
categories:
- programming
tags:
- iphone
- video
- streaming
- ffmpeg
---

With the release of the iPhone OS 3 update came the ability to do live streaming. There are a few types of streaming and each requires a certain encoding and segmentation. I've put together a cheat sheet on how I went about building a static stream using FFMpeg and an example segmenter that someone has posted. I'm not covering windowed streams in this post but if you are thinking about implementing a windowed stream the following will help you make a step in that direction and read about the <a href="https://compareyourbusinesscosts.co.uk/ethernet-broadband">Ethernet broadband benefits</a> data so that it's received in real-time.
Many professional broadcasters use live streaming software in addition to their online video platforms. Video streaming software typically provides tools for encoding, transcoding, adding on-screen effects, and more.

If you are looking for a no-frills, lightweight tool for broadcast live stream production and other video tasks, FFmpeg may be the software for you. You can use FFmpeg to create rtmp streams.

This feature-rich tool is primarily designed for advanced broadcasters. To help lower the learning curve, we&rsquo;ve put together this guide to break down some of the code and functions available on FFmpeg. This FFmpeg tutorial will help you understand how it works.

In this post, we&rsquo;ll cover how to set up FFmpeg on Linux, Mac, and Windows, and how to use FFmpeg to broadcast live streams.

Before getting started it is best to read over the Apple documentation on HTTP live streaming. Start out with the <a href="http://developer.apple.com/iphone/library/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/iPhoneStreamingMediaOverview/iPhoneStreamingMediaOverview.html#//apple_ref/doc/uid/TP40008332-CH100-SW4">iPhone streaming media overview</a>. This document covers the basics of how the streaming works and has some nice diagrams.

If you want even more information after reading the overview you can take a look at the <a href="http://tools.ietf.org/html/draft-pantos-http-live-streaming-01">HTTP Live streaming draft proposal</a> that was submitted to the IETF by Apple. It covers the streaming protocol in complete detail and has examples of the stream file format for reference.

Once you are ready to start grab a decent quality video clip to use. If you don't have one handy I found a nice list of downloadable <a href="http://www.highdefforum.com/high-definition-movies-video-clips/6537-official-hd-video-clip-list.html">HD clips</a> in various formats for testing.


<h3>Step 1: Grab the latest version of FFMpeg</h3>

You may be able to get away with anything after FFMpeg 0.5 but you might as well pull down a more recent version. The FFMpeg <a href="http://ffmpeg.org/download.html">download page</a> has instructions on getting the latest version. I pulled the version I used out of git.

I used the following command to configure FFMpeg:

```
configure --enable-gpl --enable-nonfree --enable-pthreads --enable-libfaac --enable-libfaad --enable-libmp3lame --enable-libx264
```

One of the main things to note is the --enable-libx264 flag.

<h3>Step 2: Encode your video for the iPhone</h3>

Once you have a working version of FFMpeg it is time to create an X264 encoded stream that will work with the iPhone. There are a few things to note before diving in:

<ol>
  <li>The supported bitrates for streaming are: 100 Kbps to 1.6 Mbps</li>
  <li>The suggested bitrates for streaming are*:
    <ul>
      <li>Low - 96 Kbps video, 64 Kbps audio</li>
      <li>Medium - 256 Kbps video, 64 Kbps audio</li>
      <li>High - 800 Kbps video, 64 Kbps audio</li>
    </ul>
  </li>
  <li>The iPhone screen size is: 480x320</li>
</ol>
* See step 7 for more information on what I think are better bitrates.

Taking all that into account someone on the iPhone developer forums suggested the following and it works well for me:

```
ffmpeg -i <in file=""> -f mpegts -acodec libmp3lame -ar 48000 -ab 64k -s 320x240 -vcodec libx264 -b 96k -flags +loop -cmp +chroma -partitions +parti4x4+partp8x8+partb8x8 -subq 5 -trellis 1 -refs 1 -coder 0 -me_range 16 -keyint_min 25 -sc_threshold 40 -i_qfactor 0.71 -bt 200k -maxrate 96k -bufsize 96k -rc_eq 'blurCplx^(1-qComp)' -qcomp 0.6 -qmin 10 -qmax 51 -qdiff 4 -level 30 -aspect 320:240 -g 30 -async 2 <output file=""></output>
```

If you want some more detail on some of these commands check out the <a href="http://rob.opendot.cl/index.php/useful-stuff/ffmpeg-x264-encoding-guide/">X264 encoding guide</a> and in general the <a href="http://ffmpeg.org/ffmpeg-doc.html">FFMpeg documentation</a> to see what all the flags mean.

Note that I have the bitrate set to 96k in the above example. That can be changed to fit your needs. Use the script that I have created later in the post or just make sure you change the -b, -maxrate, and -bufsize values.

<h3>Step 3: Download and build the segmenter</h3>

Now you have a complete video but you don't want to toss the entire thing up or you wouldn't be reading about HTTP streaming. What you need is a way to segment the video stream into smaller chunks. You can download Apple's segmenter (see the overview above for more information on where to find it) or you can download one created by the forum user <a href="https://devforums.apple.com/people/corp186">corp186</a>.

There is an SVN repository set up for the <a href="http://svn.assembla.com/svn/legend/segmenter/">segmenter source</a>. It is only a couple files and it is easy to build. The trouble you may run into is that the Makefile that it comes with won't build the binary correctly. Don't worry it just takes some extra link flags to make it work. The following is what I needed in the Makefile to get it to build on my system:

```
all:
gcc -Wall -g segmenter.c -o segmenter -lavformat -lavcodec -lavutil -lbz2 -lm -lz -lfaac -lmp3lame -lx264 -lfaad

clean:
rm segmenter
```

After compiling the segmenter you are ready to create your first HTTP streaming content.

The format of the segmenter command is:

```
segmenter <input mpeg-ts="" file=""> <segment duration="" in="" seconds=""> <output mpeg-ts="" file="" prefix=""> <output m3u8="" index="" file=""> <http prefix=""></http></output></output></segment>
```

Following is an example used to create a stream from a video file created with the above FFMpeg command split into 10 second intervals:

```
segmenter sample_low.ts 10 sample_low stream_low.m3u8 http://www.ioncannon.net/
```

<h3>Step 4: Prepare the HTTP server</h3>

At this point you should have a set of files that represent the stream and a stream definition file. Those files can be uploaded to a web server at this point but there is another important step to take that ensures they will be download correctly and that is setting up mime types. There are two mime types that are important for the streaming content:

```
.m3u8 application/x-mpegURL
.ts video/MP2T
```

If you are using Apache you would want to add the following to your httpd.conf file:

```
AddType application/x-mpegURL .m3u8
AddType video/MP2T .ts
```

If you are using lighttpd you would want to put this in your configuration file (if you have other mime types defined make sure you just add these and don't set them):

```
mimetype.assign = ( ".m3u8" => "application/x-mpegURL", ".ts" => "video/MP2T" )
```

<h3>Step 5: Test the stream</h3>

The video is encoded for the iPhone, segmented for streaming, and the server is configured. The only thing left to do is test the stream and the fastest way to do that is to use the new HTML5 video tag. Here is an example of how to set it up:

```
<title>Video Test</title>
<meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

<center>
<video width="150" height="150" src="stream-128k.m3u8">
</video></center>

```

If everything has been done correctly you should see the video.

If you want to test the stream out in an application then <a href="http://developer.apple.com/iphone/library/samplecode/MoviePlayer_iPhone/index.html">download the MoviePlayer iPhone demo application</a> from the iPhone developer site. Build and run it in the simulator or put it on an actual phone and then type the URL in for the server you uploaded your stream to.

That is all there is to building a single static HTTP stream. A good number of steps but if you have some experience using FFMpeg it isn't too hard to set up. The only pitfalls I ran into revolve around trying to segment the stream without the segmeter code. I don't know enough about how the segmentation works to know why this is so difficult to do but I believe it could have something to do with synchronization points in the stream. Of course when you stray from the path the stream just doesn't work and you get a generic error message so that is just my best guess. I'll also guess that Apple may tighten up the player over time and make it work better with miss-formatted streams.

<h3>Step 6: Automating the stream encoding and segmentation</h3>

Here is a little script I put together that first encodes an input file and then segments it into 10 second chunks:

```
#!/bin/sh

BR=800k

ffmpeg -i $1 -f mpegts -acodec libmp3lame -ar 48000 -ab 64k -s 320x240 -vcodec libx264 -b $BR -flags +loop -cmp +chroma -partitions +parti4x4+partp8x8+partb8x8 -subq 5 -trellis 1 -refs 1 -coder 0 -me_range 16 -keyint_min 25 -sc_threshold 40 -i_qfactor 0.71 -bt 200k -maxrate $BR -bufsize $BR -rc_eq 'blurCplx^(1-qComp)' -qcomp 0.6 -qmin 10 -qmax 51 -qdiff 4 -level 30 -aspect 320:240 -g 30 -async 2 sample_$BR_pre.ts

segmenter sample_$BR_pre.ts 10 sample_$BR stream-$BR.m3u8 http://www.ioncannon.net/

rm -f sample_$BR_pre.ts
```

The script could use some work but it does a good enough job for testing.

<h3>Step 7: Create a variable rate HTTP stream</h3>

Once you have creating a single stream down you need to try out creating a variable bitrate stream. There isn't much to it, just create different bitrate encoded streams and link to their stream definition files in a separate stream definition file. Here is an example:


```
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=96000
http://192.168.132.15/ipv/stream-96k.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=256000
http://192.168.132.15/ipv/stream-256k.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=800000
http://192.168.132.15/ipv/stream-800k.m3u8
```

I gave the above a try using both the iPhone's 3G connection and a WIFI connection. The following log shows the two different attempts (first 3G then WIFI):

```
6.x.x.x ioncannon.net - [20:49:13] "GET /varpl.m3u8 HTTP/1.1" 304 0 "-" "..."
6.x.x.x ioncannon.net - [20:49:14] "GET /varpl.m3u8 HTTP/1.1" 206 288 "-" "..."
6.x.x.x ioncannon.net - [20:49:15] "GET /varpl.m3u8 HTTP/1.1" 200 288 "-" "..."
6.x.x.x ioncannon.net - [20:49:16] "GET /stream-96k.m3u8 HTTP/1.1" 200 719 "-" "..."
6.x.x.x ioncannon.net - [20:49:18] "GET /s_96k-00001.ts HTTP/1.1" 200 334828 "-" "..."
6.x.x.x ioncannon.net - [20:49:21] "GET /s_96k-00002.ts HTTP/1.1" 200 377880 "-" "..."
6.x.x.x ioncannon.net - [20:49:30] "GET /s_96k-00003.ts HTTP/1.1" 200 383520 "-" "..."
6.x.x.x ioncannon.net - [20:49:32] "GET /stream-256k.m3u8 HTTP/1.1" 200 730 "-" "..."
6.x.x.x ioncannon.net - [20:49:39] "GET /s_256k-00003.ts HTTP/1.1" 200 716844 "-" "..."
6.x.x.x ioncannon.net - [20:49:49] "GET /s_256k-00004.ts HTTP/1.1" 200 705564 "-" "..."
6.x.x.x ioncannon.net - [20:49:57] "GET /stream-96k.m3u8 HTTP/1.1" 200 719 "-" "..."
6.x.x.x ioncannon.net - [20:49:59] "GET /s_96k-00004.ts HTTP/1.1" 200 368668 "-" "..."
6.x.x.x ioncannon.net - [20:50:03] "GET /s_96k-00005.ts HTTP/1.1" 200 371300 "-" "..."
6.x.x.x ioncannon.net - [20:50:13] "GET /s_96k-00006.ts HTTP/1.1" 200 398936 "-" "..."
6.x.x.x ioncannon.net - [20:50:16] "GET /stream-256k.m3u8 HTTP/1.1" 200 730 "-" "..."
6.x.x.x ioncannon.net - [20:50:22] "GET /s_256k-00006.ts HTTP/1.1" 200 758016 "-" "..."
6.x.x.x ioncannon.net - [20:50:36] "GET /s_256k-00007.ts HTTP/1.1" 200 737524 "-" "..."
6.x.x.x ioncannon.net - [20:50:40] "GET /s_256k-00008.ts HTTP/1.1" 200 773244 "-" "..."
6.x.x.x ioncannon.net - [20:50:46] "GET /s_256k-00009.ts HTTP/1.1" 200 717032 "-" "..."
6.x.x.x ioncannon.net - [20:50:57] "GET /s_256k-00010.ts HTTP/1.1" 200 768920 "-" "..."
6.x.x.x ioncannon.net - [20:51:06] "GET /s_256k-00011.ts HTTP/1.1" 200 611000 "-" "..."

1.x.x.x ioncannon.net - [20:52:23] "GET /varpl.m3u8 HTTP/1.1" 304 0 "-" "..."
1.x.x.x ioncannon.net - [20:52:24] "GET /varpl.m3u8 HTTP/1.1" 206 288 "-" "..."
1.x.x.x ioncannon.net - [20:52:25] "GET /varpl.m3u8 HTTP/1.1" 200 288 "-" "..."
1.x.x.x ioncannon.net - [20:52:25] "GET /stream-96k.m3u8 HTTP/1.1" 200 719 "-" "..."
1.x.x.x ioncannon.net - [20:52:26] "GET /s_96k-00001.ts HTTP/1.1" 200 334828 "-" "..."
1.x.x.x ioncannon.net - [20:52:27] "GET /s_96k-00002.ts HTTP/1.1" 200 377880 "-" "..."
1.x.x.x ioncannon.net - [20:52:28] "GET /stream-800k.m3u8 HTTP/1.1" 200 730 "-" "..."
1.x.x.x ioncannon.net - [20:52:31] "GET /s_800k-00002.ts HTTP/1.1" 200 1774156 "-" "..."
1.x.x.x ioncannon.net - [20:52:34] "GET /s_800k-00003.ts HTTP/1.1" 200 1916096 "-" "..."
1.x.x.x ioncannon.net - [20:52:38] "GET /s_800k-00004.ts HTTP/1.1" 200 1831872 "-" "..."
1.x.x.x ioncannon.net - [20:52:41] "GET /s_800k-00005.ts HTTP/1.1" 200 1831496 "-" "..."
1.x.x.x ioncannon.net - [20:52:46] "GET /s_800k-00006.ts HTTP/1.1" 200 1967608 "-" "..."
1.x.x.x ioncannon.net - [20:52:50] "GET /s_800k-00007.ts HTTP/1.1" 200 1676208 "-" "..."
1.x.x.x ioncannon.net - [20:52:54] "GET /s_800k-00008.ts HTTP/1.1" 200 2094132 "-" "..."
1.x.x.x ioncannon.net - [20:52:58] "GET /s_800k-00009.ts HTTP/1.1" 200 1860260 "-" "..."
1.x.x.x ioncannon.net - [20:53:08] "GET /s_800k-00010.ts HTTP/1.1" 200 2008404 "-" "..."
1.x.x.x ioncannon.net - [20:53:19] "GET /s_800k-00011.ts HTTP/1.1" 200 1400224 "-" "..."
```

Notice that there is a decent bit of indecisiveness on the part of what stream to pick when using 3G. For my test it actually caused the player to pause while it switched from the 256k stream back to the 96k stream. The stream on the WIFI connection starts out low but then jumps right to the highest quality and stays there. Overall it seems like the variable rate streaming works decently and again Apple may be able to tweak it down the road to get even better results.

The bitrate jump between 96k and 256k is probably too large even though that is what Apple seems to recommend. I believe with some testing a better set of bitrates could be found. The video quality of the 256k bitrate looks pretty good so I would say that 96k, 128k and 384k would potentially be a better choice.

<i>Some parting notes</i>

If you are interested in how the segmenter works you can find out more on how to use libavformat at the following resources: <a href="http://www.inb.uni-luebeck.de/~boehme/using_libavcodec.html">an older libavformat tutorial</a>, <a href="http://www.cryptosystem.org/archives/2006/03/libavcodec-libavformat-sample-code/">some sample libavformat code</a>, <a href="http://www.dranger.com/ffmpeg/">How to Write a Video Player in Less Than 1000 Lines</a>, and <a href="http://web.me.com/dhoerl/Home/Tech_Blog/Entries/2009/1/22_Revised_avcodec_sample.c.html">more sample libavformat code</a>.

The next step for this is to do a windowed live stream. I've done a little experimenting so far and with a modified segmeter I can generate a live stream. I will need to heavily modify the segmeter to get a live windowed stream so it may take a little while to get it done. My intent of course will be to combine the modifications with something fun like S3 and cloudfront since I believe that would be a sweat combination.

