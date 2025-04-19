---
layout: archive
status: publish
published: true
title: iPhone Windowed HTTP Live Streaming Using Amazon S3 and Cloudfront Proof of
  Concept
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 475
wordpress_url: http://www.ioncannon.net/?p=475
date: '2009-07-05 21:07:37 -0400'
date_gmt: '2009-07-06 02:07:37 -0400'
categories:
- programming
tags:
- iphone
- video
- s3
- cloudfront
comments:
- id: 142990
  author: Mert
  author_email: mert@vayentech.com
  author_url: ''
  date: '2009-07-07 11:40:03 -0400'
  date_gmt: '2009-07-07 16:40:03 -0400'
  content: Great job man! Finally I got it running too, thanks to your tips about
    Theora/Ogg and the incredible segmenter. I used only Mac OS X, no linux involved,
    and I can stream to my iphone any existing MMS/RTSP or live input from broadcaster
    or wirecast! thanks a lot!
- id: 143008
  author: Corp186
  author_email: chasedouglas@gmail.com
  author_url: ''
  date: '2009-07-07 19:48:49 -0400'
  date_gmt: '2009-07-08 00:48:49 -0400'
  content: "I'm very impressed with where you're taking my segmenter :) I'm glad others
    have found a good use for it. I hope to implement windowing soon, though it will
    still be through the index file, not through a secondary TCP connection.\r\n\r\nAlso,
    why did you need to remove the break after av_write_frame() failed? Is ffmpeg
    just failing on the first frame or something?\r\n\r\nKudos for your hard work!"
- id: 143009
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-07-07 21:11:34 -0400'
  date_gmt: '2009-07-08 02:11:34 -0400'
  content: "@Corp186 thanks. I actually think using the TCP connection makes some
    sense because of variable rate streams. Having one central server that can push
    all the different bitrate streams and index files from different encoders makes
    sense to me. I'm also being a little lazy because doing everything in C will take
    me more time. :) If I could pull ffmpeg in and make just one script or executable
    then I would probably be more motivated because that would probably make it much
    easier to use for most people.\r\n\r\nI'm not sure why the break was causing issues.
    What I ran into was that the error that was generated wasn't causing the stream
    to be corrupted but caused the segmenter to exit."
- id: 143029
  author: Mike@amplemedia.com
  author_email: mihaimarian@gmail.com
  author_url: ''
  date: '2009-07-08 07:44:47 -0400'
  date_gmt: '2009-07-08 12:44:47 -0400'
  content: "quick questions:\r\n1) Is it possible to do the encoding on the amazon
    service directly \r\nso i currentley have an IPTV service i run using vlc servers
    can i just use ffmpeg to read the http stream straight on the amazon service,
    encode, then pass to segemnter.\r\n2) What happens if a user starts the stream
    30 minutes in... will he begin at the beginning of the stream or at the current
    position. I am streaming live TV so i would need it when a user starts viewing
    on their iphone they start at the current position."
- id: 143030
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-07-08 08:03:46 -0400'
  date_gmt: '2009-07-08 13:03:46 -0400'
  content: "1) Yes if you use an EC2 node. You would just stream from your IPTV service
    to there. I think it could be useful to do this for people making multirate encodings
    as well.\r\n2) It all depends on the size of the window and the length of the
    segment. In the example here the window is 5 segments long so 5 segments * 10
    second segment length = 50 seconds of video available in the stream. In your case
    the consumer would start at most 50 seconds behind what is currently live if you
    used the above example. You can however close the window more if you want. The
    length of each segment can be shorter and the number of segments in the index
    file can be reduced down to 3 (the spec says you have to have at least 3 segments
    in an index). So if you reduced the segment length down to 5 seconds and the index
    down to 3 segments then a user would start at most 15 seconds behind \"live\"."
- id: 143032
  author: Mike@amplemedia.com
  author_email: mihaimarian@gmail.com
  author_url: ''
  date: '2009-07-08 08:22:28 -0400'
  date_gmt: '2009-07-08 13:22:28 -0400'
  content: "Cool, \r\nYea the issue is not a delay of a few seconds these are people
    in foreign countries wanting to watch a local tv station from europe, so for them
    the 50 second delay is not an issue. \r\n\r\nAs long as regardless of when they
    hit the url, they are seeing current streaming, meaning not stuff that has accumulated
    in the last hours etc etc. \r\n\r\n\r\nThanks for all your help,"
- id: 143058
  author: Markus
  author_email: w-chi@gmx.de
  author_url: ''
  date: '2009-07-08 13:42:51 -0400'
  date_gmt: '2009-07-08 18:42:51 -0400'
  content: "Hi,\r\n\r\nthanks for this here...but 1 question ....can i use live_upload
    for segmentation of a livestream without uploading the ts-files? In my setup is
    the server that encoding the stream equal to the webserver that publish my test-website."
- id: 143068
  author: trebla
  author_email: albertng@cheerful.com
  author_url: ''
  date: '2009-07-08 15:44:13 -0400'
  date_gmt: '2009-07-08 20:44:13 -0400'
  content: Thanks a lot for the information and tips. However, I am baffling in the
    concept of index file. The index file makes it impossible to watch a real "live"
    event for users coming on-line at different time lines because it always starts
    from the first chunk as saved in the index file. One possibility is to have  a
    different index file for different user. I am sure there may be other ways to
    resolve this issue, any suggestions? Thanks again.
- id: 143071
  author: woo
  author_email: woo@ootunes.com
  author_url: http://ootunes.com
  date: '2009-07-08 16:11:07 -0400'
  date_gmt: '2009-07-08 21:11:07 -0400'
  content: "I'm also hoping to use your segmenter @Corp186 and so far all my testing
    is working really well except for one thing:  I really really really want to use
    VLC for the mpegts and transcoding, without ffmpeg. The cool thing is, with vlc
    1.0 release, it's working fine with your segmenter, with one problem which I hope
    someone can help me with.\r\n\r\nThe problem is that the end of the stream (not
    sure if it's the very last segment but always in the end) the video just stops
    playback on the iphone.  I assume this has something to do with the timestamps,
    but this low level frame/pts/etc. stuff is totally out of my realm of knowledge.
    \ So any clues on where I should be looking to get the segmenter working with
    VLC?  I know from the apple forums that you've said just don't use VLC, but vlc
    is an easy to find compiled fantastic program whereas ffmpeg is ... um .. not
    :)\r\n\r\nI'm planning on building a statically compiled segmenter and releasing
    all the source and changes (of course) and the binaries as well to the segmenter
    for all suppoted os's (for me that's intel and ppc macs, windows and possibly
    linux) which might help others use this too.\r\n\r\nI'm less comfortable building
    and distributing ffmpeg."
- id: 143074
  author: woo
  author_email: woo@ootunes.com
  author_url: http://ootunes.com
  date: '2009-07-08 16:18:19 -0400'
  date_gmt: '2009-07-08 21:18:19 -0400'
  content: P.S.  FFmpeg is a fantastic program, just not easy to find compiled :)  That
    sounded like I was dissing FFmpeg, but I wasn't :)
- id: 143148
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-07-09 06:26:17 -0400'
  date_gmt: '2009-07-09 11:26:17 -0400'
  content: "@Markus, you can if you modify the upload script. As soon as I have time
    I am going to make it more flexible and part of that will be adding different
    ways of doing the upload, one of those will be just a straight copy from one directory
    to another."
- id: 143149
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-07-09 06:28:03 -0400'
  date_gmt: '2009-07-09 11:28:03 -0400'
  content: "@trebla, well the index file doesn't have to start with the first chunk
    of the entire video, that is the windowing part. You can start the index file
    as little as 3 segments behind the current end of the live video if you want."
- id: 143181
  author: trebla
  author_email: albertng@cheerful.com
  author_url: ''
  date: '2009-07-09 14:48:48 -0400'
  date_gmt: '2009-07-09 19:48:48 -0400'
  content: "Yes, you are absolutely correct. I made some changes to the segmenter
    according to the iphone spec and your comments from above. I am streaming \"live\"
    and the latency for users coming on-line later is minimal. In some occasions,
    a new user is actually seeing \"n+1\" chunk vs an existing user still watching
    the \"n\" chunk. Thanks again for the nice tutorial.\r\nTo answer some questions
    raised by other. I am using VLC-0.9.9a doing the streaming capturing and transcoding,
    vlc then spits it out to a pipe. The segmenter reads the stream from the pipe
    and chops it into chunks. The duration of each chunk is five seconds and the number
    of file in the playlist is three."
- id: 143199
  author: PyjamaSam
  author_email: pyjamasam@vanguardfrontiers.com
  author_url: ''
  date: '2009-07-09 19:32:43 -0400'
  date_gmt: '2009-07-10 00:32:43 -0400'
  content: "Great guide carson.  Some great information.  Works just perfectly.  Well
    done.\r\n\r\nHave you given any more though to multiple bitrates when trying to
    stream a live source?\r\n\r\nSo far the issue I see coming up is synchronizing
    the separate TS files at the different bitrates.\r\n\r\nI admit that I haven't
    tried anything yet, but its the next piece on my list to try working through and
    though I would just bounce the question off you.\r\n\r\nThanks again for the great
    guide.\r\n\r\nchris."
- id: 143471
  author: JW
  author_email: wjwelch@gmail.com
  author_url: ''
  date: '2009-07-12 17:30:26 -0400'
  date_gmt: '2009-07-12 22:30:26 -0400'
  content: "I have everything set up but I am running into one big problem with ffmpeg.
    \r\n\r\nNo matter what file I input I get this same error: \r\n\r\n[h264 @ 0x1005000]non-existing
    PPS referenced\r\n    Last message repeated 1 times\r\n[h264 @ 0x1005000]decode_slice_header
    error\r\n[h264 @ 0x1005000]no frame!\r\n\r\nAnd then at the bottom I presume because
    of the previous error it throws: \r\nSeems stream 1 codec frame rate differs from
    container frame rate: 180000.00 (180000/1) -> 1000.00 (1000/1)\r\nIncorrect frame
    size\r\n\r\nI'm assuming it has something to do with libx264. I compiled ffmpeg
    on my Mac also and I get the same type of errors."
- id: 143560
  author: PyjamaSam
  author_email: pyjamasam@vanguardfrontiers.com
  author_url: http://capsuleer.evesuite.com
  date: '2009-07-13 15:59:41 -0400'
  date_gmt: '2009-07-13 20:59:41 -0400'
  content: "Ok.  I have what looks to be a multi-bitrate setup.  The files \"seem\"
    to be in sync, but I haven't actually tried them on the phone yet (just been watching
    them on my desktop and switching back and forth between bitrates manually).\r\n\r\nI
    have yet to try it with a live source, but right now I am feeding the 4 encoders
    from a single source, so it should be the same (though the live source is my next
    test).\r\n\r\nThe jist of it is:\r\n- 4 fifos (edge.fifo, 3glow.fifo, 3ghigh.fifo,
    wifi.fifo)\r\n- 4 copies of ffmpeg running, reading from the fifos and sending
    output to stdout which is piped to a copy of  the live_segmenter\r\n- modified
    s3server.rb file that just writes stuff locally for now (not testing with s3 in
    the mix yet)\r\n- cat video.source | tee fifo/edge.fifo fifo/3glow.fifo fifo/3ghigh.fifo
    > fifo/wifi.fifo serving the video to all the encoders at the same time.\r\n\r\nI
    am running 4 encoders based on the white paper from the Akamai folks at http://iphone.akamai.com/solutions.html\r\n\r\nThings
    seam to work well.  My macbook pro can run the 4 encoders and \"uploader\" faster
    then realtime - though I am only encoding at 400x224 right now. (this is all running
    through VMWare on linux)\r\n\r\nHopefully the live test will work out.  Going
    to try a DVB card as a source.\r\n\r\nI'll let you know how that goes.  Again
    thanks for the great info.  Really helped get things started.\r\n\r\nchris."
- id: 143576
  author: Markus
  author_email: w-chi@gmx.de
  author_url: ''
  date: '2009-07-14 10:35:22 -0400'
  date_gmt: '2009-07-14 15:35:22 -0400'
  content: "@PyjamaSam ...pls post the changes of the s3server.rb, my coding skills
    are limited and in my setup ffmpeg and the webserver are running on the same machine
    ...thx a lot :)"
- id: 143581
  author: PyjamaSam
  author_email: pyjamasam@vanguardfrontiers.com
  author_url: http://capsuleer.evesuite.com
  date: '2009-07-14 13:42:39 -0400'
  date_gmt: '2009-07-14 18:42:39 -0400'
  content: "@Markus:\r\n\r\nThe modified version is here.\r\nhttp://pastie.org/545775\r\n\r\nJust
    removed the S3 related stuff and dropped the number of segments to 3 (but thats
    easy enough to change)\r\n\r\nchris."
- id: 143582
  author: PyjamaSam
  author_email: pyjamasam@vanguardfrontiers.com
  author_url: http://capsuleer.evesuite.com
  date: '2009-07-14 13:50:19 -0400'
  date_gmt: '2009-07-14 18:50:19 -0400'
  content: "Updates on my live streaming...\r\n\r\nI ended up using VLC to open the
    iSight on my MacBook Pro.  I just re-streamed the video and used the same setup
    as my above post with the exception of the command to feed the fifos with data.\r\n\r\nI
    now use\r\ncurl http://ip.of.vlc.maching:port | tee fifos/edge.fifo fifos/3glow.fifo
    fifos/3ghigh.fifo > fifos/wifi.fifo \r\n\r\nI actually found an interesting bug
    in both the segmenter and live_segmenter (they are essentually the same code)\r\n\r\nWhen
    the first file in the sequence is opened for write a TS header is written to it
    with the following code.\r\n\r\n if (av_write_header(output_context))\r\n  {\r\n
    \   fprintf(stderr, \"Could not write mpegts header to first output file\\n\");\r\n
    \   exit(1);\r\n  }\r\n\r\nAfter that each additional segment doesn't have that
    header written to it.\r\n\r\nStrangely when I \"stream\" a file I downloaded off
    of youtube all the segments are created correctly, but when I tried using iSight
    via VLC as my source every file after the first one wouldn't play back in any
    media player.\r\n\r\nBy adding an additional write of the TS header to each file
    as its opened the files play back correctly now in media players (vlc and mplayer).\r\n\r\nI
    have yet to confirm anything on the phone (need to sort out wifi or better cell
    reception where I am testing this).  But so far so good.\r\n\r\nA patch is available
    here:\r\nhttp://pastie.org/545790\r\n\r\nchris."
- id: 143598
  author: JW
  author_email: wjwelch@gmail.com
  author_url: ''
  date: '2009-07-15 00:52:42 -0400'
  date_gmt: '2009-07-15 05:52:42 -0400'
  content: "@Chris\r\n\r\nI've noticed the same problem, although I was trying to
    keep S3 a part of the mix using the live_upload.c and it doesn't seem to be a
    quick fix using that patch like the other segmenters. I may try your methods and
    just code another script to send up to S3.\r\n\r\nUsing VLC makes the process
    much easier if you are getting the stream from different locations, mms:// in
    my case, just push the data to a pipe."
- id: 143610
  author: PyjamaSam
  author_email: pyjamasam@vanguardfrontiers.com
  author_url: http://capsuleer.evesuite.com
  date: '2009-07-15 10:58:41 -0400'
  date_gmt: '2009-07-15 15:58:41 -0400'
  content: "@JW\r\n\r\nThe fix should work in either the live_upload.c file linked
    in this post or the code at http://svn.assembla.com/svn/legend/segmenter/\r\n\r\nAs
    its both based on the same thing.\r\n\r\nThe patch might not work straight off
    as I renamed the segmented to live_segmenter instead of live_uploader as it doesn't
    actually do any uploading.\r\n\r\nReally all that has to be done is add the writing
    of the mpeg ts header when a new file is opened.\r\n\r\nYou can see it here (http://pastie.org/546950)
    on line 19.\r\n\r\nThe only thing that touches S3 is the ruby code (it also generates
    the m3u8 files).  The live_segmenter/live_uploader C++ code just handles splitting
    the TS stream into smaller files.  \r\n\r\nHope that helps.\r\n\r\nAs a side note
    I got things going all the way to my phone last night.  Worked well.  Need to
    verify that the segments are in sync across bitrates, but thats the final test.\r\n\r\nchris."
- id: 143627
  author: Satish
  author_email: satiarora@gmail.com
  author_url: ''
  date: '2009-07-16 10:32:44 -0400'
  date_gmt: '2009-07-16 15:32:44 -0400'
  content: "I updated software to 3.0 on my iTouch (had to pay 9.95 $) and tried accessing
    akamai webpage in Safari, but found that for some reason the streaming is not
    working I do get to see the video screenshots but then I am not able to play them.\r\nOn
    envivio website also I am not able to play the streams.\r\nDoes any body know
    if  http streaming is supported on iTouch ? Am I missing anything?"
- id: 143628
  author: Satish
  author_email: satiarora@gmail.com
  author_url: ''
  date: '2009-07-16 10:34:04 -0400'
  date_gmt: '2009-07-16 15:34:04 -0400'
  content: Can some body point me some content (ts file and index file) that I can
    put on a http server and test it with my iTouch?
- id: 143636
  author: Charlie Good
  author_email: charlie@wowzamedia.com
  author_url: http://www.wowzamedia.com
  date: '2009-07-16 19:34:31 -0400'
  date_gmt: '2009-07-17 00:34:31 -0400'
  content: "Wowza Media Server 2 Preview 3 can do this as well on EC2 (both live and
    video on demand from S3). Check out the preview release here: http://www.wowzamedia.com/advanced.php\r\n\r\nCharlie
    (The Wowza Guy)"
- id: 143638
  author: Markus
  author_email: w-chi@gmx.de
  author_url: ''
  date: '2009-07-17 02:32:31 -0400'
  date_gmt: '2009-07-17 07:32:31 -0400'
  content: "Hi @ all,\r\n\r\n@PyjamaSam your modified s3server.rb works great ...thx
    :) Now i use for testing issues the VLC-iSight and it works (without sound :/).
    The Pipe between QT-Broadcaster and VLC has work in the beginning of my testingPhase
    but now it is broken ...anyway.Then i use the QT-Broadcaster(H264-Video,Mpeg4-Audio)--->VLC(VLC
    not transcode the QT-B. stream) ----->ffmpeg -Pipe   ffmpeg produces many errors
    like Header damaged and so on .If VLC is to be transcoding the QT-B.-stream produces
    ffmpeg other errors :/ Looks like a damaged VLC-Installation for me...\r\n\r\nmy
    Pipe \r\n\r\nQT-Broadcaster---->VLC -------->ffmpeg ------->Webserver\r\n                    (MacbookPro)
    \               (Opensuse11.1DualCore)"
- id: 143639
  author: Markus
  author_email: w-chi@gmx.de
  author_url: ''
  date: '2009-07-17 02:37:41 -0400'
  date_gmt: '2009-07-17 07:37:41 -0400'
  content: "Correction of my previous post\r\n\r\nQT-Broadcaster(MBP/MacOSX10.5.7)--->VLC(MBP/MacOSX10.5.7)----->ffmpeg(Dualcore/Opensuse11.1)---->Webserver(Dualcore/Opensuse11.1)"
- id: 143644
  author: Corp186
  author_email: chasedouglas@gmail.com
  author_url: ''
  date: '2009-07-17 10:53:49 -0400'
  date_gmt: '2009-07-17 15:53:49 -0400'
  content: "@PyjamaSam\r\n\r\nYour patch to add the TS headers to every segment is
    incorrect. The segments are supposed to be pieces of the stream cut up into little
    chunks, not a bunch of individually playable files. I am not sure the iPhone would
    properly handle playing a bunch of streams like that stitched together. It may
    work if the headers don't reset the timestamps and just retransmit information,
    but there's no real point to adding the headers because each individual piece
    isn't terribly useful on its own."
- id: 143649
  author: Martin
  author_email: wu7ang@gmail.com
  author_url: ''
  date: '2009-07-17 12:51:20 -0400'
  date_gmt: '2009-07-17 17:51:20 -0400'
  content: "@Pyjamasam\r\n\r\nI'm very new at this, so I need some more step-by-step
    instructions :)\r\n\r\nI have compiled live_upload and downloaded your modified
    s3server.rb.\r\n\r\nBut, how do I use it and where does it put the output file?\r\n\r\nI
    have a stream captured in VLC (an EyeTV MPEG TV feed).\r\n\r\nAnd I wan't the
    output to be a local file that I can try and host on my own server, for the iPhone
    to see.\r\n\r\nI appreciate the help!\r\n\r\n/Martin"
- id: 143650
  author: PyjamaSam
  author_email: pyjamasam@vanguardfrontiers.com
  author_url: http://capsuleer.evesuite.com
  date: '2009-07-17 13:27:37 -0400'
  date_gmt: '2009-07-17 18:27:37 -0400'
  content: "@Corp186\r\n\r\nInteresting.   You bring up a good point...  Not sure
    why I didn't realize that after sifting through DVB streams for so long.\r\n\r\nThe
    phone does play them correctly (I have tried it with the code I posted), but I'll
    be removing the change since it shouldn't really be there.\r\n\r\nIt was more
    me just trying to test the files them selves before I got my phone connected to
    my test webserver.\r\n\r\nThough it was interesting that a file streamed through
    the code let me play each segment separately yet it \"failed\" that test when
    I did the live stream.\r\n\r\nEh.  Either way, thanks for letting me know about
    that.  I'll adjust my code accordingly.\r\n\r\nchris."
- id: 143727
  author: FrankZappa
  author_email: alan.gibson@gmail.com
  author_url: ''
  date: '2009-07-21 15:28:55 -0400'
  date_gmt: '2009-07-21 20:28:55 -0400'
  content: "@Corp186 \r\n\r\nThanks for writing the segmenter. You may want to add
    a comment somewhere for us n00bs about how only the first file produced is playable
    by the average media player. Until I read your post, I was convinced that it was
    producing invalid output because I could only get the first segment to play in
    VLC et al.\r\n\r\n@Pyjamasam\r\n\r\nIt would be nice to be able to have the option
    of switching on inclusion of TS headers in each segment file so that the entire
    stream would play in media players that don't directly support Live Streaming.
    For example, if you open the .m3u8 file in (for example) VLC, it will play the
    first file and then give up. I assume that if the headers were included, thus
    making each file individually playable, it would play every segment."
- id: 143886
  author: iPhone Windowed HTTP Live Streaming Server | IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/meta/564/iphone-windowed-http-live-streaming-server/
  date: '2009-07-27 06:22:57 -0400'
  date_gmt: '2009-07-27 11:22:57 -0400'
  content: "[...] IONCANNON What are you building?   Skip to content AboutProjectsGoogle
    Analytics Dashboard Wordpress WidgetHTTP Live Video Stream Segmenter and DistributorContactSitemap
    \      &laquo; iPhone Windowed HTTP Live Streaming Using Amazon S3 and Cloudfront
    Proof of Concept [...]"
- id: 148684
  author: Barry
  author_email: barry@medoff.com
  author_url: ''
  date: '2009-08-28 20:08:50 -0400'
  date_gmt: '2009-08-29 01:08:50 -0400'
  content: "@PyjamaSam\r\n\r\nWe find that without your patch to add a TS header at
    the beginning of each segment, the client is unable to begin playing a live stream
    that is joined at a segment beyond the first.  With your patch included the stream
    can be joined beginning at any segment.  \r\n\r\nCan you provide more specifics
    on why you concluded that the patch was incorrect, and what should instead be
    done to enable joining a live stream beyond the first segment?"
- id: 150220
  author: Stephen
  author_email: gawinsan@gmail.com
  author_url: ''
  date: '2009-09-08 23:17:25 -0400'
  date_gmt: '2009-09-09 04:17:25 -0400'
  content: "Hello, first of all, thanks for your info, we are able to create a basic
    environment so that the encoder (ffmpeg), segmenter (the original one) and the
    http server in the same machine and we were able to have archive streaming (non
    live) working.. However, we've encounter the following problems with trying to
    stream live:\r\n\r\n- when we didn't play the first segemented file (i.e starts
    from segment 4, assuming window =3), the audio and video are out of sync... we
    also realized that when we play from anything other than segment 1 from our non-live
    playlist (non windowed), we get the same problem ...\r\n\r\nHas anyone experienced
    the same thing?"
- id: 155016
  author: Bjarne
  author_email: arnebjarne72@hotmail.com
  author_url: ''
  date: '2009-10-19 08:00:54 -0400'
  date_gmt: '2009-10-19 13:00:54 -0400'
  content: "Hi Carson.\r\n\r\nWhich version (and OS platform) did you use for the
    setup?\r\nI can't get ffmpeg to read a stream input (either at VLC stream by http://myserver
    or a true MPEG-TS stream on udp://myserver:1234) using the latest ffmpeg svn 20231
    or ffmpeg version 0.5 from RPMforge).\r\n\r\nYour VOD setup though works fine
    (ie. using static movie files as input ).\r\n\r\nRegards,\r\nBjarne"
- id: 155076
  author: Bjarne
  author_email: arnebjarne72@hotmail.com
  author_url: ''
  date: '2009-10-20 05:10:18 -0400'
  date_gmt: '2009-10-20 10:10:18 -0400'
  content: "Hi again.\r\n\r\nSorry, found the problem on Google.\r\n\r\nFFmpeg needs
    the UDP url as this:\r\n\r\nudp://myserver?localport=1234 (strange, but true).\r\n\r\nUsing
    FFmpeg svn20231 libraries and the livesegmenter it now totally rocks and works!.
    We now just feed the livesegmenter with the mpegts stream from a hardware encoder
    so no need for ffmpeg transcoding (which was pretty unstable....).\r\nThanks for
    your proof of concept examples :-)"
- id: 156201
  author: Robert
  author_email: wgt3001@yahoo.com
  author_url: ''
  date: '2009-11-02 01:22:20 -0500'
  date_gmt: '2009-11-02 06:22:20 -0500'
  content: How can I make the segmenter work on windows 2003 server? Can someone post
    a link to download successfully made segmenter .exe for windows platform?
- id: 156776
  author: Venkat
  author_email: shavenkat@gmail.com
  author_url: ''
  date: '2009-11-11 05:00:07 -0500'
  date_gmt: '2009-11-11 10:00:07 -0500'
  content: What is the command to run FFMpeg against the source video stream and pipe
    the resulting transcoded output into the live segmenter for UDP multicast. Thanks
    in advance.
- id: 157215
  author: Tejesh Morla
  author_email: tmorl2@uis.edu
  author_url: ''
  date: '2009-11-18 10:42:24 -0500'
  date_gmt: '2009-11-18 15:42:24 -0500'
  content: "Does somebody have a link to a livesegmenter code that takes input from
    a pipe (-) for live http streaming to the iPhone but does not use Amazon S3?  \r\n\r\nBasically
    I want to do live streaming but want to use my own apache server for hosting it
    instead of Amazon S3 and Cloudfront.\r\n\r\nThanks in advance!  Great work."
- id: 164916
  author: Ram
  author_email: rramani@gmail.com
  author_url: ''
  date: '2010-03-09 21:57:29 -0500'
  date_gmt: '2010-03-10 02:57:29 -0500'
  content: "@Corp186 \r\nI see the normal workflow is to create a .ts file from ffmpeg
    and then pass that to the segmenter. Can I use raw video frames and accumulated
    x seconds worth of frames and create .ts segments ?\r\n\r\nThanks,\r\n\r\nRam."
- id: 166333
  author: Saravanan
  author_email: sshanmugam@gmail.com
  author_url: ''
  date: '2010-03-27 09:21:18 -0400'
  date_gmt: '2010-03-27 14:21:18 -0400'
  content: Can you anyone please post a capture of the packets between iphone and
    the Webserver ? After downloading the html file, my iphone did not go to the next
    step of finding the sending a GET to fetch the m3u8 file
- id: 166335
  author: Saravanan
  author_email: sshanmugam@gmail.com
  author_url: ''
  date: '2010-03-27 09:37:11 -0400'
  date_gmt: '2010-03-27 14:37:11 -0400'
  content: Is there a sample demo website where I can point my Iphone for http streaming
    ?
- id: 166341
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-27 12:20:58 -0400'
  date_gmt: '2010-03-27 17:20:58 -0400'
  content: The best demo if you want to just see something working is http://iphone.akamai.com/
    I don't know if anyone has my version of the streamer set up for anyone to connect
    to as a demo.
- id: 166378
  author: Saravanan
  author_email: sshanmugam@gmail.com
  author_url: ''
  date: '2010-03-28 08:33:39 -0400'
  date_gmt: '2010-03-28 13:33:39 -0400'
  content: "Thanks Carson. The small trick is to enable the plugin option of the Safari
    browser, else the Quicktime player never triggered even if the browser sees a
    \ tag. \r\n\r\nAfter I enabled the plugin it started working great."
- id: 175598
  author: Jomy Muttathil
  author_email: jomy@mac.com
  author_url: ''
  date: '2010-07-16 15:00:17 -0400'
  date_gmt: '2010-07-16 20:00:17 -0400'
  content: "It would be great if all these pieces could be compiled into a virtual
    appliance that could be easily deployed to EC2.\r\n\r\nI'm thinking of trying
    it with a turnkeylinux.org appliance but some of this stuff is over my head."
- id: 176203
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-07-21 08:34:04 -0400'
  date_gmt: '2010-07-21 13:34:04 -0400'
  content: "@Jomy I'm trying to get time to come back around and update things and
    that is on my list of items to do."
- id: 179872
  author: Mika
  author_email: miberger79@gmail.com
  author_url: ''
  date: '2010-08-16 06:38:07 -0400'
  date_gmt: '2010-08-16 11:38:07 -0400'
  content: "Awesome page and thanks for all the hints!\r\n\r\nAfter I could get VoD
    over HTTP to iPhone and iPad, at multiple bitrates, I am now looking at live,
    and face little issues.\r\n\r\nI have a Cisco DCM that is able to spit H.264/AAC
    in MPEG2-TS --> no Xcode needed.\r\nI also don't need to upload to any cloud computing
    (yet).\r\n\r\nIt looks then fairly simple but:\r\n\r\n1. How to just have ffmpeg
    to output to the segmenter (no Xcoding)? I was thinking of ffplay udp://239.1.1.1:40000
    and pipe it to the segmenter but ffplay just stalls on the udp stream and does
    nothing.\r\n\r\n2. I don't really need the live_upload but simply the segmenter.c
    that was working for VoD. Again, it does not work and just exits after 3 seconds.
    I checked your piece of code to fix input from stream. The code I have foir segmenter.c
    is a little bit different and it seems it already incorporates the fix:\r\n\r\n
    \      ret = av_interleaved_write_frame(oc, &packet);\r\n        if (ret  0)
    {\r\n            fprintf(stderr, \"End of stream requested\\n\");\r\n            av_free_packet(&packet);\r\n
    \           break;\r\n        }\r\n\r\n        av_free_packet(&packet);\r\n\r\n
    \r\nAny help much appreciated ;)\r\n\r\nMika"
- id: 179874
  author: Mika
  author_email: miberger79@gmail.com
  author_url: ''
  date: '2010-08-16 06:46:16 -0400'
  date_gmt: '2010-08-16 11:46:16 -0400'
  content: 'To add on point 2: live_upload writes the .ts but not the .m3u8...'
- id: 198448
  author: Derek
  author_email: winnicki.derek@gmail.com
  author_url: http://none
  date: '2011-02-18 18:01:06 -0500'
  date_gmt: '2011-02-18 23:01:06 -0500'
  content: "Hi Carson,\r\n\r\nThanks a lot for all the work you've done. I've been
    trying to get project working on Snow Leopard but it's been a little slow going
    for me. My main problem was first of all installing FFMpeg which I finally solved
    after finding this blog post: \r\n\r\nhttp://www.haykranen.nl/2007/11/21/howto-install-and-use-ffmpeg-on-mac-os-x-leopard/\r\n\r\nIt
    shows how to install FFMpeg using Mac Ports as if it were a .dmg or package so
    I recommend this for any OSX users (it also simplifies the process of getting
    libraries such as faad, faac, libmp3lame, x264 etc..). \r\n\r\nSo, seeing as I
    now have all the needed libraries I figured that compiling the live_segmenter.c
    would be as easy as doing a make in the root directory, however, when I did so,
    the error messages said it couldn't find avformat.h. I decided to replace the
    #include line in live_segmenter.c with:\r\n\r\n#include \"../ffmpeg/libavformat/avformat.h\"\r\n\r\nwhich
    is the relative URL to where my avformat.h file is located. This then lead me
    to the same problem of locating another header file but this time I would've had
    to modify the #include in avformat.h and I didn't want to start messing around
    with FFMpeg's library files.\r\n\r\nAm I totally off track here or can someone
    help me out ? I've successfully encoded .mov files into .ts files (H.264 and MP3)
    using FFMpeg so my next step is to just compile this segmenter and chop up the
    .ts files."
- id: 198750
  author: Pavel
  author_email: i-love-spam@yandex.ru
  author_url: ''
  date: '2011-02-22 19:28:56 -0500'
  date_gmt: '2011-02-23 00:28:56 -0500'
  content: "Very useful info. I'm doing similar task: playing segmented videos on
    iPhone. I'm stuck with a  strange problem and would like to know if anyone had
    the same issue.\r\nWhen I segment a 20 minute video into 10 second segments and
    put first 10 segments into m3u8, then I get strange problem when playing: on the
    last 1 or two videos video playback slows down, while audio playback is normal.
    I'm sure that the segments themselves do not have problem (if I start playback
    from them, then they don't have slowdown in video), basically I'm sure it's some
    sort of bug in the iPhone streaming player itself. Did anyone of you noticed such
    problem? I'm using iPhone 4.\r\n\r\nthanks"
---

This post should be seen as a proof of concept. I'm working on creating a more concise and easier to use package of everything covered here but I felt like getting the knowledge out sooner rather than later would be of help to people looking for a way to do this. If you are interested keep an eye on the <a href="http://www.ioncannon.net/projects/http-live-video-stream-segmenter-and-distributor/">HTTP live video stream segementer and distributor project page</a> as well as the <a href="http://github.com/carsonmcdonald/HTTP-Live-Video-Stream-Segmenter-and-Distributor/tree/master">github git repository</a>.

After my post on <a href="http://www.ioncannon.net/programming/452/iphone-http-streaming-with-ffmpeg-and-an-open-source-segmenter/">using FFMpeg and an open source segmenter</a> to create videos for the iPhone that conform to the <a href="http://tools.ietf.org/html/draft-pantos-http-live-streaming-01">HTTP live streaming protocol</a> I decided to see if I could get the same segmenter to work on a live stream. As it turns out it didn't take much modification to work. 

If you are looking for something you can buy out of the box it appears that <a href="http://gigaom.com/2009/07/02/akamai-to-make-iphone-video-streaming-smooth/">Akamai</a> is doing <a href="http://newteevee.com/2009/06/30/video-see-apples-http-adaptive-video-streaming-in-action/">iPhone video streaming</a> now. I believe that the following solution using Amazon <a href="http://aws.amazon.com/s3/">S3</a> and <a href="http://aws.amazon.com/cloudfront/">Cloudfront</a> is probably as good as what Akamai can offer but it may be a better choice if you don't want to have to maintain the configuration.

I put together a quick diagram of the process of transferring the video stream from source to final destination that will hopefully help people understand the full picture before jumping into the details:

<a href="/assets/2009_07_streaming-diagram.png"><img src="/assets/2009_07_streaming-diagram.png" alt="HTTP Live Streaming Diagram" title="HTTP Live Streaming Diagram" width="450" height="250" class="alignnone size-medium wp-image-508" /></a>

Please note that except for the video stream all of the following was done using Fedora 11. I believe it could work on Windows or OS X but I haven't had time to test it on either.

<h3>Step 1: Find a suitable video source</h3>

This is an important part and can take more work than it seems like it should. I started out trying to stream video from a  USB QuickCam but for some reason the resulting stream wasn't correctly formatted even after going through the FFMpeg transcoding. I then turned to the iSight camera on a macbook using <a href="http://www.ioncannon.net/software/478/streaming-video-between-quicktime-broadcaster-and-vlc/">QuickTime Broadcaster to VLC streaming</a>. The resulting stream from the iSight camera works well.

The easiest way I found to experiment with finding a good stream is to dump a short clip out to a file then use the instructions in my <a href="http://www.ioncannon.net/programming/452/iphone-http-streaming-with-ffmpeg-and-an-open-source-segmenter/">previous post</a> to test.

It is also possible to do all of the following steps using a non-live video stream. In fact, due to the flexibility of what can be input into FFMpeg, someone could pull a stream from somewhere like <a href="http://ustream.tv">Ustream TV</a> or <a href="http://www.livestream.com/">Livestream</a> and rebroadcast it. Doing so would open up the door for live streaming to the iPhone using just Safari.

<h3>Step 2: Set up modified segmenter</h3>

To handle the live stream I had to modify the segmenter in two ways. The first was required to bypass an issue with the input coming in as a pipe. For those interested here is the modified section of code:

```
    ret = av_write_frame(output_context, &packet);
    if (ret < 0)
    {
      fprintf(stderr, "Could not write frame of stream: %d\n", ret);
      av_free_packet(&packet);
      //break; ****** removed for streaming support *****
    }
    else if (ret > 0)
    {
      fprintf(stderr, "End of stream requested\n");
      av_free_packet(&packet);
      break;
    }
```

The second modification was more extensive. The original segmenter wrote the index file out for each segment as the segment ended. Instead of writing the index to disk I need the index information to push to S3 as well as to know when the segment itself is ready to be pushed. I could have used a <a href="http://libs3.ischo.com/index.html">S3 library</a> and stuck everything into the C code but instead I decided that it made more sense to save the stream to disk then push the index information to another process.

I do the transfer of information over a TCP socket connection from the segmenter to the upload process. A side effect of doing this is that it will allow for the upload process to take input from multiple transcode and segmenters at the same time. This should make for easy variable rate configurations where the transcoding can take advantage of multiple machines.

Here is the modified section of code:

```
int write_index_file(const char index[], const unsigned int segment_duration, const char output_directory[], const char output_prefix[], const char http_prefix[], const unsigned int first_segment, const unsigned int last_segment, const int end, const char bucket_name[], const char key_prefix[])
{
  char buffer[1024 * 10];
  memset(buffer, 0, sizeof(char) * 1024 * 10);
  sprintf(buffer, "%s, %s, %d, %s, %s, %d, %d, %d, %s, %s", index, output_directory, segment_duration, output_prefix, http_prefix, first_segment, last_segment, end, bucket_name, key_prefix);

  fprintf(stderr, "Sending: %s\n", buffer);

  int sock;
  if ((sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0)
  {
    fprintf(stderr, "Could not open socket.");
    return -1;
  }

  const char *serverIP = "127.0.0.1";
  int serverPort = 10234;

  struct sockaddr_in serverAddress;
  memset(&serverAddress, 0, sizeof(serverAddress));
  serverAddress.sin_family      = AF_INET;
  serverAddress.sin_addr.s_addr = inet_addr(serverIP);
  serverAddress.sin_port        = htons(serverPort);

  if (connect(sock, (struct sockaddr *) &serverAddress, sizeof(serverAddress)) < 0)
  {
    fprintf(stderr, "Could not connect to socket.");
    return -1;
  }

  int buffer_len = strlen(buffer);
  if (send(sock, buffer, buffer_len, 0) != buffer_len)
  {
    fprintf(stderr, "Could not send command.");
    return -1;
  }

  close(sock);

  return 0;
}
```

The above function assumes that the upload server lives on the same machine as the segmenter at this point. Also note that the command line arguments for the segmenter have grown to include a S3 bucket name and a S3 key prefix:

```
Usage: live_upload <input MPEG-TS file> <segment duration in seconds> <output directory> <output MPEG-TS file prefix> <output m3u8 index file> <http prefix> <bucket name> <key prefix>
```

<ul>
<li>input MPEG-TS file - For the live streaming use you want this to be a pipe so it should be -</li>
<li>segment duration in seconds - How long to make each segment of video</li>
<li>output directory - Where the video segments live before they are transfered</li>
<li>output MPEG-TS file prefix - The prefix of the video file</li>
<li>output m3u8 index file - The name of the m3u8 index file</li>
<li>http prefix - The prefix of the URL where the segments are ultimately located</li>
<li>bucket name - The S3 bucket name that the segments and index will be stored in</li>
<li>key prefix - The S3 key that the segments and index should be prefixed with</li>
</ul>

Download the <a href="http://www.ioncannon.net/examples/httplive/Makefile">Makefile</a> and <a href="http://www.ioncannon.net/examples/httplive/live_upload.c">segmenter source</a> and compile if you want to follow step 4.

<h3>Step 3: Transfer the segments</h3>

The modified segmenter is now ready to push the index information to a process that will in turn upload the index as well as the stream segment. In this case I chose to push the segments and index to S3 but that isn't the only option possible. Furthermore I've stuck Cloudfront in front of the segments so they can be cached closer to the destination. Letting the index files be cached by Cloudfront could be done but care would need to be taken to make sure the index isn't cached for longer than the segment duration.

For the upload server I'm using Ruby and the <a href="http://rightscale.rubyforge.org/right_aws_gem_doc/">Rightscale AWS gem</a> to push the segments and the index files to S3. Here is the complete code to do the upload server (this file is called s3server.rb in the git repository):

```
require 'thread'
require 'socket'
require 'ftools'
require 'rubygems'
require 'right_aws'

AWS_S3_ID="your s3 id"
AWS_S3_KEY="your s3 private key"

def create_index(segment_duration, output_prefix, http_prefix, first_segment, last_segment, stream_end)
  File.open("tmp.index.m3u8", 'w') do |index_file|
    index_file.write("#EXTM3U\n")
    index_file.write("#EXT-X-TARGETDURATION:#{segment_duration}\n")
    index_file.write("#EXT-X-MEDIA-SEQUENCE:#{last_segment >= 5 ? last_segment-4 : 1}\n")

  first_segment.upto(last_segment) do | segment_index |
    if segment_index > last_segment - 5
      index_file.write("#EXTINF:#{segment_duration}\n")
      index_file.write("#{http_prefix}#{output_prefix}-%05u.ts\n" % segment_index)
    end
  end

    index_file.write("#EXT-X-ENDLIST") if stream_end
  end
end

def push_to_s3(index, output_directory, bucket_name, key_prefix, output_prefix, last_segment)
  s3 = RightAws::S3Interface.new(AWS_S3_ID, AWS_S3_KEY)

  video_filename = "#{output_directory}/#{output_prefix}-%05u.ts" % last_segment
  puts "Pushing #{video_filename} to s3://#{bucket_name}/#{key_prefix}/#{output_prefix}-%05u.ts" % last_segment
  s3.put(bucket_name, "#{key_prefix}/#{output_prefix}-%05u.ts" % last_segment, File.open(video_filename), {'x-amz-acl' => 'public-read', 'content-type' => 'video/MP2T'})
  puts "Done pushing video file"

  puts "Pushing tmp.index.m3u8 to s3://#{bucket_name}/#{key_prefix}/#{index}"
  s3.put(bucket_name, key_prefix + "/" + index, File.open("tmp.index.m3u8"), {'x-amz-acl' => 'public-read', 'content-type' => 'video/MP2T'})
  puts "Done pushing index file"
end

queue = Queue.new

server_thread = Thread.new do
  server = TCPServer.new('0.0.0.0', 10234)
  while (session = server.accept)
    input = session.gets
    queue << input
    session.close
  end
end

upload_thread = Thread.new do
  while (value = queue.pop)
    (index, output_directory, segment_duration, output_prefix, http_prefix, first_segment, last_segment, stream_end, bucket_name, key_prefix) = value.strip.split(%r{,\s*})
    if last_segment.to_i > 0
      create_index(segment_duration.to_i, output_prefix, http_prefix, first_segment.to_i, last_segment.to_i, stream_end.to_i == 1)
      push_to_s3(index, output_directory, bucket_name, key_prefix, output_prefix, last_segment.to_i)
    end
  end
end

server_thread.join
```

To use the above code you will need to put your S3 credentials in place for the values AWS_S3_ID and AWS_S3_KEY.

<h3>Step 4: Test it</h3>

1. Set up a HTML file that points to the streaming index file:

    ```
    <html>
      <head>
        <title>Video Test</title>
        <meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
      </head>
      <body style="background-color:#FFFFFF; ">
        <center>
          <video width='150' height='150' src="http://s3.amazonaws.com/ionlivestream/stream0001/stream-128k.m3u8" />
        </center>
      </body>
    </html>
    ```

    Note that the index file is coming from S3 directly and not from Cloudfront to keep it from being cached and a stale version being served. In case it helps, the format for the source index location in this example is: http://s3.amazonaws.com/&gt;bucket name&lt;/&gt;key prefix&lt;/&gt;index file&lt;

2. Start the upload script. Once started It will sit and wait for input from the segmenter:

    ```
    ruby s3server.rb
    ```

    As requests are made the script will dump output to stdout describing what it is doing.

3. Configure and start your source video stream. In my case I need to start the VLC to QuickTime Broadcaster connection for the iSight.

4. Run FFMpeg against the source video stream and pipe the resulting transcoded output into the segmenter. For my stream I used the following command:

    ```
    ffmpeg -v 0 -i http://192.168.132.101:8080 -f mpegts -acodec libmp3lame -ar 48000 -ab 64k -s 320x240 -vcodec libx264 -b 128k -flags +loop -cmp +chroma -partitions +parti4x4+partp8x8+partb8x8 -subq 5 -trellis 1 -refs 1 -coder 0 -me_range 16 -keyint_min 25 -sc_threshold 40 -i_qfactor 0.71 -bt 200k -maxrate 128k -bufsize 128k rc_eq 'blurCplx^(1-qComp)' -qcomp 0.6 -qmin 10 -qmax 51 -qdiff 4 -level 30 -aspect 320:240 -g 30 -async 2 - | live_upload - 10 /tmp/ sample_128k stream-128k.m3u8 http://d3vmly3syseqo9.cloudfront.net/stream0001/ ionlivestream stream0001
    ```

5. Point safari on your iPhone to the HTML file created in #1 and hit play. After buffering starts you should see the live video with a segment or two delay.

<i>Other information</i>

Again, this is just a proof of concept so there are a number of things lacking. Here are a list of enhancements I could imagine people would find useful:

<ul>
<li>Variable bitrate segments</li>
<li>Easier and more flexible configuration</li>
<li>Use <a href="http://aws.amazon.com/ec2/">EC2</a> for encoding from one source stream</li>
<li>Pluggable transfer to a website using FTP or SCP instead of S3</li>
</ul>

I thought some about the cost breakdown of doing this using S3 and Cloudfront. The following is a quick calculation on what it might cost for a variable rate stream using the cost of S3 and Cloudfront today.

<b>Some assumptions:</b>

Everyone always finishes the entire stream when they start it.
Variable rates: 128kbps, 256kbps, 364kbps
Video length: 5 minute video
Client streams: 100

30 segments for each stream (5 minutes = 300 seconds / 10 second intervals)

128kbps x 5 minutes = 4.8MB
256kbps x 5 minutes = 9.6MB
364kbps x 5 minutes = 13.65MB

% of each stream rate
25% client streams @ 364kbps = 25 * 13.65MB = 341.25MB
50% client streams @ 256kbps = 50 * 9.6MB = 480MB
25% client streams @ 128kbps = 25 * 4.8MB = 128MB

3 stream index files + 1 variable index file
30 segments * 3 streams = 90 index puts + 90 stream segment puts

<b>S3 put cost:</b>
  $0.10 per GB &acirc;&euro;&ldquo; all data transfer in
  $0.01 per 1,000 PUT, COPY, POST, or LIST requests

  $0.01 * (180/1000) = $0.0018 + $0.10 * (4.8+9.6+13.65)/1000 = $0.002805 = $0.004605

<b>S3 storage cost:</b>
  $0.15 per GB &acirc;&euro;&ldquo; first 50 TB / month of storage used

  $0.15 * (4.8+9.6+13.65)/1000 = $0.0042075

<b>S3 transfer cost:</b>
  $0.17 per GB &acirc;&euro;&ldquo; first 10 TB / month data transfer out
  $0.01 per 10,000 GET and all other requests

  The index gets pulled from S3 every time, the streams come from Cloudfront
  Assumes the transfer to Cloudfront happens 3 times per stream
  $0.17 * (3 * (4.8+9.6+13.65)) / 1000 = $0.0143055
  $0.01 * (100 * 30) + (30 * 3) / 10000 = $0.00309

<b>Cloudfront transfer cost:</b>
  $0.17 per GB &acirc;&euro;&ldquo; first 10 TB / month data transfer out
  $0.01 per 10,000 GET requests

  $0.17 * (341.25 + 480 + 128) / 1000 = $0.1613708
  $0.01 * (30 * 100) / 10000 = $0.003

<b>Rough total cost:</b> $0.1933833

So for 100 streams of 5 minutes worth of video you would be looking at something around 20 cents.

