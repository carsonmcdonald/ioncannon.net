---
layout: archive
status: publish
published: true
title: iPad Streaming Video and More
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1015
wordpress_url: http://www.ioncannon.net/?p=1015
date: '2010-04-06 06:01:33 -0400'
date_gmt: '2010-04-06 11:01:33 -0400'
categories:
- programming
tags:
- iphone
- Streaming Video
- ipad
- segmenter
comments:
- id: 167031
  author: Damien Tanner
  author_email: damien@pandastream.com
  author_url: http://pandastream.com
  date: '2010-04-06 17:34:42 -0400'
  date_gmt: '2010-04-06 22:34:42 -0400'
  content: "Incredibly helpful as always. We'll be adding support to Panda asap!\r\n\r\nThanks
    - Damien."
- id: 167503
  author: How to Create iPad Formatted Videos Using HandBrake or FFMpeg
  author_email: ''
  author_url: http://www.ioncannon.net/meta/1040/how-to-create-ipad-formatted-videos-using-handbrake-or-ffmpeg/
  date: '2010-04-13 05:56:23 -0400'
  date_gmt: '2010-04-13 10:56:23 -0400'
  content: "[...] IONCANNON Thoughts on Software Development and Engineering   Skip
    to content AboutArchivesProjectsGoogle Analytics Dashboard Wordpress WidgetHTTP
    Live Video Stream Segmenter and DistributorGeeQE &#8211; Native Stack Overflow
    iPhone ApplicationBuilding GeeQEMiscellaneous ProjectsFedora 12 Screenshots and
    VideosMozilla Jetpack &#8211; Google Reader Starred Post BrowserContactSitemap
    \      &laquo; iPad Streaming Video and More [...]"
- id: 168191
  author: Curt
  author_email: cturner@agroup.com
  author_url: ''
  date: '2010-04-21 16:08:32 -0400'
  date_gmt: '2010-04-21 21:08:32 -0400'
  content: "In a desperate attempt to get the segmenter to produce Apple's required
    64kbps baseline stream, I first tried rendering an audio-only ts, but the segmenter
    fails with a \"segmentation fault\" error.\r\n\r\nNext, I rendered a .ts file
    with a still image as the video stream and a 32kbps audio stream. The only way
    I could get the muxing overhead low enough to fit everything into 64kbps was to
    drastically drop the frame rate. Since it's a still image anyway, I don't care.
    Dropping the frame rate to 3fps cut the structural overhead from around 50kbps
    to 7kbps; I can now fit 32kbps/44.1k audio and a still image in a .ts with plenty
    of room to spare for the 64kbps limit.\r\n\r\nHere's where it gets weird - after
    dropping the frame rate, specifying a segment duration of 10 seconds gives me
    \ segments that are 1 minute 24 seconds each. Changing the segment duration argument
    to segmenter changes the text in the m3u8 file, but does not change the segment
    count or length - they're always 1:24.\r\n\r\nAny ideas?\r\n\r\nsegmenter rev50\r\nFFmpeg
    SVN-r22566\r\nx264 0.88.x (x264-snapshot-20100315-2245)"
- id: 168257
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-04-22 09:02:06 -0400'
  date_gmt: '2010-04-22 14:02:06 -0400'
  content: "@Curt there is actually more to it than that to be compliant. The stream
    requires a tag that contains the time stamp that syncs with the video segments.
    It is on the short list of modifications I'm going to make but there is a decent
    amount of work required to get it going."
- id: 168788
  author: Chris Maynard
  author_email: chris@cmivfx.com
  author_url: http://www.cmivfx.com
  date: '2010-04-28 13:51:26 -0400'
  date_gmt: '2010-04-28 18:51:26 -0400'
  content: Can this streaming ALSO be used in a browser like safari?
- id: 169167
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-05-03 10:47:49 -0400'
  date_gmt: '2010-05-03 15:47:49 -0400'
  content: "@Chris Yes, it will work for safari."
- id: 169883
  author: Curt
  author_email: cturner@agroup.com
  author_url: ''
  date: '2010-05-14 13:58:07 -0400'
  date_gmt: '2010-05-14 18:58:07 -0400'
  content: 'Update: After modifying the ffmpeg h264 params when inserting the still
    image, the segment times straightened out. They''re not all 10 seconds, but apparently
    close enough; Apple approved the iPhone app!'
- id: 170014
  author: Stanislav
  author_email: elephantau@rambler.ru
  author_url: ''
  date: '2010-05-16 09:00:01 -0400'
  date_gmt: '2010-05-16 14:00:01 -0400'
  content: "I tying to start http_streamer.rb as a daemon. But nothing happens.\r\nThis
    is a simple control my_control.rb:\r\n\r\n#!/usr/bin/env ruby\r\n#daemon control\r\n\r\nrequire
    'daemons'\r\nDaemons.run('http_streamer.rb')\r\n\r\nconfig.yml hard included in
    http_streamer.rb\r\n\r\nIt's normally start through: ruby http_streamer.rb\r\nBut
    didn't start through: ruby my_control.rb start\r\nin the same dir"
- id: 170112
  author: john p
  author_email: tck_012002@yahoo.com
  author_url: ''
  date: '2010-05-17 17:51:18 -0400'
  date_gmt: '2010-05-17 22:51:18 -0400'
  content: "wondering if anyone has tried with dnxhd files.  i can transcode them
    ok (to ts). the segmenter doesn't complain. but ipad/iphone just can't play the
    video. \r\n\r\nthanks,\r\njp"
- id: 170118
  author: john p
  author_email: tck_012002@yahoo.com
  author_url: ''
  date: '2010-05-17 18:27:10 -0400'
  date_gmt: '2010-05-17 23:27:10 -0400'
  content: "found the answer for DNxDH files:\r\n\r\n1. apply the following patch
    to libavcodec/dnxhddec.c\r\n\r\n=============================\r\n       ctx->cid
    = AV_RB32(buf + 0x28);\r\n       dprintf(ctx->avctx, \"compression id %d\\n\",
    ctx->cid);\r\n\r\n+    if (ctx->cid == 1242) {\r\n+        ctx->height = 1080;\r\n+
    \   }\r\n+\r\n       if (dnxhd_init_vlc(ctx, ctx->cid) <0)\r\n          return
    -1;\r\n\r\n===========================\r\n\r\n2. don&#039;t configure the ffmpeg
    with --enable-libxvid since it&#039;s supported by the internal ffmpeg and not
    through libxvid\r\n\r\nall works well.\r\n\r\ndisclaimers: these are the solutions
    i compiled from folks in the other forums. can&#039;t take credits :)\r\n\r\njp"
- id: 170550
  author: Stanislav
  author_email: elephantau@rambler.ru
  author_url: ''
  date: '2010-05-24 02:31:30 -0400'
  date_gmt: '2010-05-24 07:31:30 -0400'
  content: ok. That`s fine. I have to set full paths everywhere in .yml.
- id: 171628
  author: Rob
  author_email: robertmrangel@yahoo.com
  author_url: ''
  date: '2010-06-09 18:03:12 -0400'
  date_gmt: '2010-06-09 23:03:12 -0400'
  content: "Has anyone had any luck getting encrypted streaming to work? It seems
    I'm almost there but my video doesn't play but I don't get any errors either (like
    \"Video is unplayable\" or \"You don't have permission to play this video\" when
    I got the key wrong). \r\n\r\n#bash script:\r\nkeyFile=\"key.txt\"\r\nopenssl
    rand 16 > $keyFile\r\nhexKey=$(cat key.txt | hexdump -e '\"%x\"')\r\nhexIV='0'\r\nopenssl
    aes-128-cbc -e -in $fileName -out $encryptedFileName -p -nosalt -iv ${hexIV}  -K
    ${hexKey}\r\n\r\n\r\n#my playlist file:\r\n#EXTM3U\r\n#EXT-X-TARGETDURATION:000020\r\n#EXT-X-MEDIA-SEQUENCE:0\r\n#EXT-X-KEY:METHOD=AES-128,URI=\"key.txt\"\r\n#EXTINF:20,
    no desc\r\ntest.ts.enc\r\n#EXT-X-ENDLIST"
- id: 172913
  author: Estelle
  author_email: ewpaus@pobox.com
  author_url: ''
  date: '2010-06-30 19:32:37 -0400'
  date_gmt: '2010-07-01 00:32:37 -0400'
  content: "Carson,\r\nYou're Live Http Streaming Video using VLC works great!  \r\n\r\nHave
    you looked at iOS4 yet?  Do you think it's going to have improved performance,
    specifically smaller latency?   I've been trying to read up on the new video capabilities,
    but I can't find anything specific.  Do you know of any links?\r\nJust wondering.
    \ You're so \"in the know.\"\r\nThanks,\r\nEstelle"
- id: 174521
  author: Erik
  author_email: chessdev@gmail.com
  author_url: ''
  date: '2010-07-10 14:27:27 -0400'
  date_gmt: '2010-07-10 19:27:27 -0400'
  content: "Carson:\r\n\r\nThank you so much for your writeup on this. Unfortunately,
    I'm unable to get it to work, getting errors like: \r\n\r\nWARNING: Playlist Content-Type
    is 'application/x-mpegurl', but should be one of 'application/vnd.apple.mpegurl',
    'audio/x-mpegurl' or 'audio/mpegurl'.\r\n\r\nWARNING: 258 samples (88.966 %) do
    not have timestamps in track 256 (avc1). 4: us2-1.ts ~~~~~~~~\r\n\r\nWARNING:
    Media segment duration outside of expected duration by 47.733 % (5.23 vs. 10.00
    seconds, limit is 20 %). 40: us2-19.ts ~~~~~~~~~\r\n\r\nI happy to pay you 1.5x
    your regular consulting rate if you can help us get through this - it's holding
    up an important update to our iphone app :(\r\n\r\nPlease email me at: chessdev{@}gmail
    \r\n\r\nThank you!!\r\n\r\nErik\r\nChess.com"
- id: 176137
  author: JeanM
  author_email: jcabrera1@socal.rr.com
  author_url: ''
  date: '2010-07-20 18:08:04 -0400'
  date_gmt: '2010-07-20 23:08:04 -0400'
  content: "I am using Rhozet to encode the file to HTTP Live Streaming and that works
    fine. I need to encrypt the files and was about to use media stream segmenter
    and was wondering if I could, considering taht the files are already segmented
    by Rhozet Carbon Server.\r\nAll I need to do is the encryption, so can I use MediaStreamSegmenter
    just to do the encryption? If so how?\r\nThanks,"
- id: 176204
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-07-21 08:36:34 -0400'
  date_gmt: '2010-07-21 13:36:34 -0400'
  content: "@JeanM I believe you can use it to do just encryption but I have never
    used it myself. If you look at the documentation for it they probably have a command
    line option that will turn it on."
- id: 177154
  author: JeanM
  author_email: JeanMCabrera@yahoo.com
  author_url: ''
  date: '2010-07-28 16:22:59 -0400'
  date_gmt: '2010-07-28 21:22:59 -0400'
  content: "Carson,\r\nI tried to encrypt only using mediastreamsegmenter but it seems
    like it requires the encoder IP and port. \r\nWhen I run it without it it just
    hanges there.\r\nDo you have some working sample command line examples beside
    the ones listed in the man pages?"
- id: 178613
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-08-07 06:38:37 -0400'
  date_gmt: '2010-08-07 11:38:37 -0400'
  content: "@JeanM I'm not sure how the encryption works with the Apple tools. I haven't
    yet added that to the streamer I have."
- id: 183702
  author: Harold
  author_email: kingdompostproductions@gmail.com
  author_url: http://kingdomchurch.org
  date: '2010-09-24 13:56:03 -0400'
  date_gmt: '2010-09-24 18:56:03 -0400'
  content: "Carson,\r\n1. Thank you for your contribution. This is really exciting,
    now that I got it working, I guess.\r\n\r\n2. Can anyone explain what is in this
    segmenter's log? Can I ignore the error ?\r\n```\r\nE, [2010-09-24T14:23:22.006299
    #26568] ERROR -- : Encoder ep_128k: [mpegts @ 0x8487110] max_analyze_duration
    reached\r\n[mpegts @ 0x8487110] Estimating duration from bitrate, this may be
    inaccurate\r\n```\r\n\r\n3. What about this log entry? What do the numbers
    \ mean when the log says Transfer initiated with value=*1,2,0,ep_128k*?\r\n```\r\nD,
    [2010-09-24T13:09:10.323226 #25814] DEBUG -- : Segment command ep_128k: *1, 2,
    0, ep_128k*\r\nI, [2010-09-24T13:09:10.323468 #25814]  INFO -- : Transfer initiated
    with value = *1, 2, 0, ep_128k*\r\nD, [2010-09-24T13:09:10.323622 #25814] DEBUG
    -- : Creating index\r\nD, [2010-09-24T13:09:10.323883 #25814] DEBUG -- : Done
    creating index\r\nI, [2010-09-24T13:09:10.326086 #25814]  INFO -- : Transfer done\r\n```\r\n
    3. When viewing the segmented files in their folders, I saw some that were \"MPEG
    Transport Stream\" files and others that were \"message catalog\" files.\r\nIs
    that normal o should they all be MPEG Transport Stream files with the exception
    of the .m3u8 file?\r\n\r\nCan I control whether a video file starts on a keyframe
    when I edit the file in a  editor like Premiere Pro or Final Cut? I know I can
    set the keyframe distance manually, but I usually leave it unchecked to allow
    the computer to calculate it for me.  I'm thinking that this would help find out
    why it has trouble encoding the first frame.\r\nThank you all for your posts.
    They have always been a help to me .\r\nHarold"
- id: 204913
  author: Felix Geisend&Atilde;&para;rfer
  author_email: felix@debuggable.com
  author_url: http://debuggable.com/
  date: '2011-05-20 07:16:46 -0400'
  date_gmt: '2011-05-20 12:16:46 -0400'
  content: 'Curt: I''m curious how you got the still image included into the segments.
    Can you share your x264 settings?'
---

I've updated the configuration examples in the open source segmenter project to reflect <a href="http://developer.apple.com/iphone/library/technotes/tn2010/tn2224.html">Apple's recommended stream bitrates</a> for iPad video streaming, added a few fixes and a few new features. If you are interested in streaming video on the iPad, iPhone or iPod Touch and haven't done so yet you it may help to start with my post on <a href="http://www.ioncannon.net/meta/564/iphone-windowed-http-live-streaming-server/">windowed streaming on for the iPhone</a>, then read about <a href="http://www.ioncannon.net/programming/452/iphone-http-streaming-with-ffmpeg-and-an-open-source-segmenter/">iPhone HTTP streaming with FFMpeg and the open source segmenter</a> and finally check out the <a href="http://www.ioncannon.net/projects/http-live-video-stream-segmenter-and-distributor/">iPad, iPhone, and iPod Touch live video streaming project page</a>.


Here is a demo of the iPad streaming video created with the segmenter (I tried to show the progressive upgrade happening but it happens very quickly since the iPad is on WIFI, I also show that you can scrub without any issues and if you look in the background you can see the server log displaying entries as the segments are downloaded):


<object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/ydP51WxRDDk&hl=en_US&fs=1&rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/ydP51WxRDDk&hl=en_US&fs=1&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object>


If you want to view the demo yourself I've created a demo for the <a href="http://www.ioncannon.net/projects/ivids/ipad/">iPad</a>, <a href="http://www.ioncannon.net/projects/ivids/iphone/">iPhone, and iPod Touch</a>. Note that those are two links, one for the iPad version and one for the iPhone/iPod Touch version. The main difference is the size of the video.


I used the open source video <a href="http://www.bigbuckbunny.org/">Big Buck Bunny</a> (the 1920x1080 ogg version) for the above demos.


If you are interested in more details on what changed read on or skip to the bottom if you want to see what I'll be working towards in future versions of the segmenter.


Over the past few weeks I learned that it is important that each segment starts with an <a href="http://avidemux.org/admWiki/index.php?title=H264#I-Frames">IDR frame</a>. To accomplish this I thought setting the gop so that the segment time % (gop size / frame rate) = 0 would work but I haven't completely convinced myself of this yet. An example of would be a segment size of 10 seconds % (300 gop size / 30 frame rate) = 0. This should insure that each segment starts with the correct i-frame and while I have looked over the resulting segments with a hex editor and believe it works I still get errors when using certain tools on the individual segments that makes me think it isn't working like I think it should. Either way I have included updates to the gop size in the example configuration files. The gop size is controlled by the -g option for FFMpeg and in the examples I have set it so that for a 10 second segment with the given frame rate the gop size makes sure each segment starts correctly. If you want to know more you can dig into the resulting segments and use this forum post on <a href="http://forum.digital-digest.com/showthread.php?t=89736">how to extract an i-frame</a>, this <a href="http://www.mpucoder.com/DVD/mpeghdrs.html">list of mpeg headers</a> to verify that each has the correct i-frame at the start.


The <a href="http://developer.apple.com/iphone/library/technotes/tn2010/tn2224.html">Apple streaming tech notes</a> where informative in a few other ways as well. The tech notes contain the supported h264 profiles for each device. For the iPhone/iPod Touch baseline level 3.0 is supported while the iPad supports baseline level 3.1. You can find out more about <a href="http://h264.code-shop.com/trac/wiki/Encoding">h264 encoding levels with FFMpeg</a> and also review <a href="http://rob.opendot.cl/index.php/useful-stuff/ffmpeg-x264-encoding-guide/">FFMpeg x264 encoding guide</a>, <a href="http://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping">FFMpeg option mappings</a> and <a href="http://www.mplayerhq.hu/DOCS/HTML/en/menc-feat-x264.html">information on encoding with the x264 codec</a> for more information.


Another bit of information disclosed in the Apple tech notes is the existence of a media stream validation tool. This tool can be downloaded from the Apple iPhone developer site and has to be run on OS X. Apple recommends that you use this tool to validate any streams that you create.


One other note that I have recently ran across is that Apple seems to be <a href="http://techcrunch.com/2010/03/26/iphone-video-apps-downgrade-streaming-rates/">rejecting <i>native apps</i> that have video streams without a fall back audio stream</a>. The correct way of generating the fallback 64k audio only stream is something that is lacking in the current version of the segmenter but I hope to fix that soon. It won't matter for those using the HTML5 video tag however.


If you are using HTML5 video tags it is important not to use my older posts as a guide for the iPad since I use a now outdated example. Those examples still work on the iPhone but they do not work on the iPad. Here is an updated example that will work on both the iPhone and iPad:


```
<html>
  <head>
    <title>Video Test</title>
  </head>
  <body style="background-color:#FFFFFF; ">
    <center>
      <video controls>
        <source src="stream_multi.m3u8"/>
      </video>
    </center>
  </body>
</html>
```

Finally I am currently using the latest version of FFMpeg to do tests and it seems to have become more reliable for me. The current version in git seems to be pretty good at producing usable videos from a variety of source videos.


The following is a quick summary of the recent changes I have made:


<ul>
  <li>Applied an audio patch for the segmenter from Scott Kidder. This patch skips any video processing if there is no video stream.</li>
  <li>Modified sample configs with newer FFMpeg string, gop sizes, frame rates and other parameters to match the Apple recomended values for iPhone/iPod Touch with aspect ratios of 4:3 and 6:9 on cell or wifi and iPad with aspect ratios of 4:3 and 6:9 on cell or wifi</li>
  <li>Added configuration sanity checks</li>
  <li>Made gems not required if not using those features that need them</li>
  <li>Added fix for deprecation warning from newest version of libavformat</li>
  <li>Made termination work better when killed with SIGINT/ctrl-c</li>
  <li>Fixed some minor issues with index file format</li>
</ul>

The following are enhancements I'm planning on making:


<ul>
  <li>
  I plan on creating a howto on getting everything set up on EC2.
  </li>
  <li>
  Dig more into verification that each segment starts with the correct I-frame.
  </li>
  <li>
  I'm going to work on refactoring everything so that instead of creating files and then transferring them it streams them all. This makes more sense with doing encryption as just another part of the pipeline.
  </li>
  <li>
  Add ability to do <a href="http://tools.ietf.org/html/draft-pantos-http-live-streaming-02#section-6.1.2">encryption</a>. I have a proof of concept working but I decided I need to get everything set up in one continuous stream before integrating encryption into the mix.
  </li>
  <li>
  <a href="http://www.ioncannon.net/programming/941/using-daemon-kit-and-robustthread-to-build-ruby-daemons/">I had thoughtabout using the ruby daemon utils</a> to wrap the segmenter but I decided it probably isn't necessary at this point.
  </li>
</ul>
