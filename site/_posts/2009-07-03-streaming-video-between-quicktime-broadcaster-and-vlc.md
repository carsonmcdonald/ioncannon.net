---
layout: archive
status: publish
published: true
title: Streaming Video Between QuickTime Broadcaster and VLC
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 478
wordpress_url: http://www.ioncannon.net/?p=478
date: '2009-07-03 19:19:58 -0400'
date_gmt: '2009-07-04 00:19:58 -0400'
categories:
- software
tags:
- QuickTime Broadcaster
- VLC
- Streaming Video
comments:
- id: 142936
  author: Mert
  author_email: mert@mertyentur.net
  author_url: ''
  date: '2009-07-05 15:16:10 -0400'
  date_gmt: '2009-07-05 20:16:10 -0400'
  content: Hey man, keep up the good work, I'm really looking forward to your live
    streaming guide, any luck so far? I've been playing with VLC=>FFMPEG=>Apple Segmenter
    for some time but the results vary...
- id: 142946
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-07-05 21:12:35 -0400'
  date_gmt: '2009-07-06 02:12:35 -0400'
  content: I have a post ready on how to do live streaming using a modified version
    of the segmenter. It seems to work pretty well for me but I haven't pushed it
    real hard. I'm going to get it out there and let others hammer on it. I hope the
    configuration is understandable, it can be tightened up a good bit but at this
    point I lack the time to do that so I'm just going to go with what I have to help
    move people forward.
- id: 143579
  author: PyjamaSam
  author_email: pyjamasam@vanguardfrontiers.com
  author_url: http://capsuleer.evesuite.com
  date: '2009-07-14 13:35:28 -0400'
  date_gmt: '2009-07-14 18:35:28 -0400'
  content: "Quick heads up about VLC 1.0.0.  It can open the iSight its self.\r\n\r\nJust
    pick File->Open Capture Device and then Pick iSight from the drop down.\r\n\r\nThe
    dialog says it does 640x480 only, but I so far only get a little 160x120.  But
    more then enough to test with.\r\n\r\nchris."
- id: 150231
  author: Bryan
  author_email: bm@c4.ca
  author_url: http://www.c4.ca
  date: '2009-09-09 04:22:27 -0400'
  date_gmt: '2009-09-09 09:22:27 -0400'
  content: "Unfortunately the isight only streams the video in VLC 1.0 and not audio.
    \ I'm having a little issue making this all work on only Mac hardware.  The option
    for streaming is only set to mpeg-ts which I would rather have VLC send out RAW
    from the Quicktime Broadcaster and let ffmpeg deal with the conversion to mpeg-ts.\r\n\r\nAnyone
    else have a good solution for streaming from an external camera?"
- id: 161055
  author: Kunmi
  author_email: kunmi@shebafoods.com
  author_url: http://www.aakika.com
  date: '2010-01-14 12:27:13 -0500'
  date_gmt: '2010-01-14 17:27:13 -0500'
  content: "Carson help!  I need a lot of education.  Do I need both RED5 and FFMPEG
    to do the intended live broadcasting and ondemand streaming on my website?  \r\n\r\nCan
    I use just FFMPEG?  Please share.  \r\n\r\nThanks for your attention and Happy
    New Year!"
- id: 163168
  author: Max Lapshin
  author_email: max@maxidoors.ru
  author_url: http://erlyvideo.org/
  date: '2010-02-13 18:47:59 -0500'
  date_gmt: '2010-02-13 23:47:59 -0500'
  content: Hi, I want to mention, that erlyvideo can accept video stream from Quicktime
    Broadcaster and retransmit it to flash clients.
---

In my attempt to stream live video to my iPhone I ran into an issue with the USB QuickCam I have. Instead of fighting the problem I decided to turn to the iSight camera on a macbook but I quickly found that there isn't a great way to get the video stream to another machine. The best way that I have found to stream from the iSight to a second machine is to use a combination of QuickTime Broadcaster and VLC. In this post I detail how I got it set up and working.


<b>Step 1: Install QuickTime Broadcaster</b>

The first step is to install <a href="http://www.apple.com/quicktime/broadcaster/">QuickTime Broadcaster</a>. It doesn't have a lot of requirements so it should work on most macs. The QuickTime Broadcaster will be the source of the video and the destination of the video in my case is a second machine with <a href="http://www.videolan.org/">VLC</a> installed on it although you could run VLC on the source machine if you wanted to.

An important note at this point is to make sure the destination machine doesn't have a firewall turned on or if it does that it isn't blocking ports 5432 and 5434.

<b>Step 2: Configure QuickTime Broadcaster for Streaming</b>

Navigate to the Applications folder and launch QuickTime broadcaster. Click on the network tab and select "Custom" from the "Preset" list. For "Transmission" select the "Manual Unicast" option. The "Address" field contains the IP for your <b>target machine</b>, the one that you are <b>streaming to</b>. When you are finished, your settings should look something like this:

<a href="/assets/2009_07_QTBroadcastNetworkSetup.png"><img src="/assets/2009_07_QTBroadcastNetworkSetup.png" alt="QuickTime Broadcast Network Setup for Streaming Video to VLC" title="QuickTime Broadcast Network Setup for Streaming Video to VLC" width="300" height="221" class="alignnone size-medium wp-image-479" /></a>

Now the configuration is ready and it is time to create an export for use in VLC. To export go to File -> Export -> SDP menu option. For this example I'm calling the file stream01.sdp.

<a href="/assets/2009_07_QTBroadcasterExportSDP.png"><img src="/assets/2009_07_QTBroadcasterExportSDP.png" alt="QuickTime Broadcaster Export SDP" title="QuickTime Broadcaster Export SDP" width="300" height="103" class="alignnone size-medium wp-image-481" /></a>

You should transfer this file to the machine you are going to run VLC on at this point. If you are interested you can actually view the contents of the SDP file. Here is the one generated for me from the above:

```
v=0
o=- 0 3702455757 IN IP4 127.0.0.0
s=QuickTime
t=0 0
a=range:npt=now-
a=isma-compliance:2,2.0,2
m=audio 5432 RTP/AVP 96
c=IN IP4 192.168.132.100
b=AS:125
a=rtpmap:96 mpeg4-generic/44100/2
a=fmtp:96 profile-level-id=15;mode=AAC-hbr;sizelength=13;indexlength=3;indexdeltalength=3;config=1210
a=mpeg4-esid:101
m=video 5434 RTP/AVP 97
c=IN IP4 192.168.132.100
b=AS:1372
a=rtpmap:97 H264/90000
a=fmtp:97 packetization-mode=1;profile-level-id=4D401E;sprop-parameter-sets=J01AHqkYFAe2ANQYBBrbCte98BA=,KN4JF6A=
a=mpeg4-esid:201
a=cliprect:0,0,480,640
a=framesize:97 640-480
```

<b>Step 3: Play the Video Stream with VLC</b>

Once the SDP file is on the destination machine you can start VLC and open it. In VLC go to File -> Open File then select the SDP file that was exported earlier.

<a href="/assets/2009_07_VLCOpenFile.png"><img src="/assets/2009_07_VLCOpenFile-300x100.png" alt="VLC Open File" title="VLC Open File" width="300" height="100" class="alignnone size-medium wp-image-484" /></a>

VLC is now ready to stream from QuickTime Broadcaster. In QuickTime Broadcaster click the Broadcast button and then in VLC click the play button. At this point you should start seeing the stream in VLC. The order you start broadcasting between QuickTime Broadcaster and VLC doesn't seem to matter. There were a few times that I had VLC start for a second then freeze but I was using a wireless network so I'll blame that for the freezes. In general it worked well once it was all set up.

You can start VLC from the command line and point it directly to the stream file if you want. To do that use this command:

```
vlc stream01.sdp
```

or if you want fancy logging:

```
vlc -vvv --color --file-logging --logfile vlc-log.html --logmode html stream01.sdp
```

<b>Step 4: VLC Streaming</b>

This is actually what I would call re-streaming since my need is to get the iSight stream to FFMpeg. In the perfect world I would be able to stream directly from QuickTime Broadcaster to FFMpeg but the limitations of QuickTime Broadcaster don't allow that to happen, at least from what I could find.

To re-stream the iSight stream follow these steps:

1. Go to Media -> Streaming

    ![VLC Streaming Menu Option](/assets/2009_07_VLCStreaming.png)

    Enter the SDP file in the file window and hit the Stream button.

2. After you click the Stream button a window will pop up where you have the option to select a Destination:

    ![VLC Stream Output Destinations HTTP Add](/assets/2009_07_VLCStreamOutputDestinationsHTTPAdd.png)

    Select "Display locally" if you want to see the video as it is re-streamed. 

    Select HTTP from the "New destination" drop down list and click the Add button. I have picked HTTP here because it is what works the best for me but there are other options you can use if you want to try different streaming protocols. I was able to leave the defaults as they were for the HTTP stream.

3. Select a transcoding profile. Here I've selected the "Video - Theora + Vorbis (OGG)" profile for streaming. It seems to work the best for me:

    ![VLC Stream Output Destinations Setup](/assets/2009_07_VLCStreamOutputDestinationsSetup.png)

    Click the Stream button at the bottom to start streaming.

4. Test the stream with something like mplayer or ffplay. Because I'm using HTTP to do the stream I can run the following command to test:

    ```
    mplayer http://192.168.132.100:8080/
    ```

    Just as the playback can be done from the command line the re-streaming can too:

    ```
    vlc stream01.sdp --sout '#transcode{vcodec=theo,vb=800,scale=1,acodec=vorb,ab=128,channels=2,samplerate=44100}:duplicate{dst=std{access=http,mux=ogg,dst=0.0.0.0:8080},dst=display}'
    ```
    
    If you want to drop the local display:

    ```
    vlc stream01.sdp --sout '#transcode{vcodec=theo,vb=800,scale=1,acodec=vorb,ab=128,channels=2,samplerate=44100}:duplicate{dst=std{access=http,mux=ogg,dst=0.0.0.0:8080}}'
    ```
