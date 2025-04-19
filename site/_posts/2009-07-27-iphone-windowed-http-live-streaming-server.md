---
layout: archive
status: publish
published: true
title: iPhone Windowed HTTP Live Streaming Server
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 564
wordpress_url: http://www.ioncannon.net/?p=564
date: '2009-07-27 06:22:54 -0400'
date_gmt: '2009-07-27 11:22:54 -0400'
categories:
- meta
tags:
- iphone
- video
- streaming
comments:
- id: 143926
  author: Sean Goheen
  author_email: ioncannon@onfire.us
  author_url: http://ybbtv.com
  date: '2009-07-27 23:58:16 -0400'
  date_gmt: '2009-07-28 04:58:16 -0400'
  content: "This is awesome, it is so much better then the hacked version (Tried to
    add ftp support, didn't work out.) I have been trying to get to work but, it's
    giving me an error, any help would be appreciated.\r\n\r\nThis is on a Mac Pro
    G5, with all of the prerequisites installed through MacPorts. It gives the same
    error when it is started by the ruby script.\r\n\r\n```\r\n$ ./live_segmenter\r\n\r\ndyld:
    Library not loaded: libopennet.dylib\r\n  Referenced from: /opt/local/lib/libconfig.0.2.3.dylib\r\n
    \ Reason: image not found\r\nTrace/BPT trap\r\n```"
- id: 144038
  author: Markus
  author_email: w-chi@gmx.de
  author_url: ''
  date: '2009-07-28 13:51:07 -0400'
  date_gmt: '2009-07-28 18:51:07 -0400'
  content: "Hi Carson,\r\n\r\nworks fine for me on my 1st tests... \r\n\r\n2 questions:\r\n\r\nIt
    is possible for scp-uploads to connect to non-standard ssh ports?\r\n\r\nLogging
    per stdout and per file at the same time?\r\n\r\nthx for the great work here and
    greetings from berlin :)"
- id: 144320
  author: JW
  author_email: wjwelch@gmail.com
  author_url: ''
  date: '2009-07-31 01:23:39 -0400'
  date_gmt: '2009-07-31 06:23:39 -0400'
  content: "Carson, first of all thanks for the great work. The new features are awesome.
    \r\n\r\nI got the stream running using a AVI file but I'm having trouble sending
    a stream through using VLC. \r\n\r\nFrom the command line:\r\n```cvlc [mms
    stream url] --sout \"#transcode{vcodec=h264,venc=x264,scale=1,width=320,height=240,acodec=mp3,ab=64,channels=2,samplerate=48000}:std{access=file,mux=ts,dst=-}\"
    | ./http_streamer.rb config-multirate.yml```\r\n\r\nThe reason I'm using VLC
    is because ffmpeg can't take a mms stream. But since I'm using it just as a pass
    through the command is probably could be simpler...\r\n\r\nAnother stupid question:
    When sending the stream through a pipe called '-' do you have to first issue the
    mkfifo command of \"mkfifo -\" /end stupid question ;)"
- id: 146468
  author: Eno
  author_email: kapo@acroid.com
  author_url: ''
  date: '2009-08-13 17:40:26 -0400'
  date_gmt: '2009-08-13 22:40:26 -0400'
  content: Anyone tested the segmenter with FME 3.0 with  MainConcept AAC Encoder
    plugin that creates base line 3.0/acc  mpg4 feed ?!!
- id: 147007
  author: Mait
  author_email: mait@emt.ee
  author_url: ''
  date: '2009-08-17 04:00:06 -0400'
  date_gmt: '2009-08-17 09:00:06 -0400'
  content: "hey,\r\n\r\nsorry for the newbie question but how do get pass these compilation
    errors:\r\n\r\nlive_segmenter.c: In function 'add_output_stream':\r\nlive_segmenter.c:45:
    warning: implicit declaration of function 'exit'\r\nlive_segmenter.c:45: warning:
    incompatible implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:58:
    error: 'AVCodecContext' has no member named 'ticks_per_frame'\r\nlive_segmenter.c:61:
    error: 'AVCodecContext' has no member named 'ticks_per_frame'\r\nlive_segmenter.c:71:
    error: 'AVCodecContext' has no member named 'channel_layout'\r\nlive_segmenter.c:71:
    error: 'AVCodecContext' has no member named 'channel_layout'\r\nlive_segmenter.c:
    In function 'main':\r\nlive_segmenter.c:124: warning: implicit declaration of
    function 'atoi'\r\nlive_segmenter.c:130: warning: implicit declaration of function
    'malloc'\r\nlive_segmenter.c:130: warning: incompatible implicit declaration of
    built-in function 'malloc'\r\nlive_segmenter.c:134: warning: incompatible implicit
    declaration of built-in function 'exit'\r\nlive_segmenter.c:145: warning: incompatible
    implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:153: warning:
    incompatible implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:159:
    warning: incompatible implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:166:
    warning: incompatible implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:169:
    warning: implicit declaration of function 'avformat_alloc_context'\r\nlive_segmenter.c:169:
    warning: initialization makes pointer from integer without a cast\r\nlive_segmenter.c:173:
    warning: incompatible implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:207:
    warning: incompatible implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:228:
    warning: incompatible implicit declaration of built-in function 'exit'\r\nlive_segmenter.c:234:
    warning: incompatible implicit declaration of built-in function 'exit'\r\n\r\nthanks!\r\nMait"
- id: 147768
  author: more fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-08-23 16:39:01 -0400'
  date_gmt: '2009-08-23 21:39:01 -0400'
  content: "@Mait..\r\n\r\nYou either do not have all libraries installed or your
    -Include/-Library path does not contain the location of the needed libs.."
- id: 147771
  author: more fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-08-23 17:01:46 -0400'
  date_gmt: '2009-08-23 22:01:46 -0400'
  content: "@Markus..\r\n\r\nRe: non-standard ports..\r\n\r\nhttp://net-ssh.rubyforge.org/ssh/v1/chapter-2.html"
- id: 147772
  author: more fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-08-23 17:03:26 -0400'
  date_gmt: '2009-08-23 22:03:26 -0400'
  content: "@Sean..\r\n\r\nWhat is the ftp error message you are receiving?"
- id: 147878
  author: Mait
  author_email: mait@emt.ee
  author_url: ''
  date: '2009-08-24 05:35:47 -0400'
  date_gmt: '2009-08-24 10:35:47 -0400'
  content: "thanks, i got it compiled now!\r\n\r\nanother question:\r\nhow could is
    use an RTSP resource as an input? i understand it should be somehow via VLC but
    how exactly?\r\n\r\nregards,\r\nMait"
- id: 148176
  author: Ron
  author_email: theukjackjohnson@yahoo.com
  author_url: ''
  date: '2009-08-25 13:51:19 -0400'
  date_gmt: '2009-08-25 18:51:19 -0400'
  content: "trying to run simple make and have all ffmpeg, faad, faac libs installed,
    but getting hung up on -lconfig ...\r\n\r\nWhich lib am I missing?"
- id: 148270
  author: Ron
  author_email: theukjackjohnson@yahoo.com
  author_url: ''
  date: '2009-08-26 04:28:57 -0400'
  date_gmt: '2009-08-26 09:28:57 -0400'
  content: "pulling my hair out here. keep getting snagged on just trying to compile
    your sources correctly. \r\n\r\nI've got x264,faad,faac,mp3lame,and latest ffmpeg
    all compiled -- as far as the segmenter source \"as easy as running make in the
    root\" -- gives me:\r\n\r\ncc -Wall -g live_segmenter.c -o live_segmenter -lavformat
    -lavcodec -lavutil -lbz2 -lm -lz -lfaac -lmp3lame -lx264 -lfaad \r\nUndefined
    symbols:\r\n  \"_av_free_packet\", referenced from:\r\n      _main in ccV7L3nn.o\r\n
    \     _main in ccV7L3nn.o\r\n      _main in ccV7L3nn.o\r\n      _main in ccV7L3nn.o\r\nld:
    symbol(s) not found\r\ncollect2: ld returned 1 exit status\r\nmake: *** [all]
    Error 1\r\n\r\nwhat am i doing wrong?"
- id: 148330
  author: More Fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-08-26 12:49:00 -0400'
  date_gmt: '2009-08-26 17:49:00 -0400'
  content: "@Maitt\r\n\r\nModify as needed..\r\n\r\nvlc rtsp://192.168.1.1/file.wmv
    --sout '#transcode{vcodec=theo,vb=800,scale=1,acodec=vorb,ab=128,channels=2,samplerate=44100}:duplicate{dst=std{access=http,mux=ogg,dst=0.0.0.0:8080}}'"
- id: 148331
  author: More Fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-08-26 12:51:15 -0400'
  date_gmt: '2009-08-26 17:51:15 -0400'
  content: "@Ron\r\n\r\nHere you go..\r\n\r\nhttp://www.hyperrealm.com/libconfig/"
- id: 148459
  author: Martin
  author_email: wu7ang@gmail.com
  author_url: ''
  date: '2009-08-27 07:16:33 -0400'
  date_gmt: '2009-08-27 12:16:33 -0400'
  content: "Does anyone know how to compile live_segmenter.c statically, so it can
    be moved to other computers, without having to install all the libraries?\r\n\r\nI
    have been trying on my Intel Mac 10.5, but can't get it to work.\r\n\r\nAnyone
    who can give some pointers?\r\n\r\nThanks\r\n/Martin"
- id: 148635
  author: Markus
  author_email: w-chi@gmx.de
  author_url: ''
  date: '2009-08-28 07:27:43 -0400'
  date_gmt: '2009-08-28 12:27:43 -0400'
  content: "@ more fiya\r\n\r\nthx for the response ... but the method \r\n```Net::SSH.start(
    'host', 1234, 'user', 'passwd' ) do |session|```\r\n dosent work...\r\nerror-message
    ```\r\n\r\nafter
    some hour of testing i find a method\r\n\r\n1. edit the /etc/ssh/ssh_config   file\r\n```
    Port ```\r\n2. edit http_streamer.rb\r\n```\r\n...\r\nrequire 'net/scp'\r\nrequire
    'net/sftp'  #new \r\n...\r\nwhen 'scp'\r\n       if transfer_config.has_key?('password')\r\n
    \        Net::SCP.upload!(transfer_config['remote_host'], transfer_config['user_name'],
    source_file, transfer_config['directory'] + '/' + destination_file, :password
    => transfer_config['password'])\r\n       else\r\n         Net::SCP.upload!(transfer_config['remote_host'],
    transfer_config['user_name'], source_file, transfer_config['directory'] + '/'
    + destination_file)\r\n       end\r\n     when 'sftp' #new\r\n         Net::SFTP.start(transfer_config['remote_host'],
    transfer_config['user_name'], :password => transfer_config['password']) do |sftp|
    #new\r\n           sftp.upload!(source_file, transfer_config['directory'] + '/'
    + destination_file) #new\r\n       end\r\n     when 's3'\r\n...\r\n```\r\n3.
    edit your config.yml file\r\n```\r\nor create
    a new section sftp_dev \r\n```\r\nsftp_dev:\r\n  transfer_type: 'sftp'\r\n
    \ remote_host: 'xxx.xxx.xxx.xxx'\r\n  user_name: 'user'\r\n  password: 'xxxxx!'\r\n
    \ directory: '/remotepath'\r\n```\r\n\r\nand it work"
- id: 148842
  author: JP
  author_email: jphastings@gmail.com
  author_url: ''
  date: '2009-08-30 07:56:43 -0400'
  date_gmt: '2009-08-30 12:56:43 -0400'
  content: "@Martin & all\r\n\r\nHaving the same issue as you - libopennet isn't
    being found:\r\n``` make\r\ngcc -Wall -I/opt/local/include -L/opt/local/lib
    -g live_segmenter.c -o live_segmenter -lavformat -lavcodec -lavutil -lbz2 -lm
    -lz -lfaac -lmp3lame -lx264 -lfaad -lconfig\r\n$> ./live_segmenter\r\ndyld: Library
    not loaded: libopennet.dylib\r\n  Referenced from: /opt/local/lib/libconfig.0.2.3.dylib\r\n
    \ Reason: image not found\r\nTrace/BPT trap```\r\n\r\nWould very much appreciate
    some help, dying to try out this new tech! (Using Snow Leopard, standard install
    of macports for libraries)"
- id: 148843
  author: Martin
  author_email: wu7ang@gmail.com
  author_url: ''
  date: '2009-08-30 10:26:26 -0400'
  date_gmt: '2009-08-30 15:26:26 -0400'
  content: "JP,\r\n\r\nLeave out -lconfig and compile?\r\n\r\nI did, and it works
    fine without it.\r\n\r\nI don't know what it's for."
- id: 148845
  author: More Fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-08-30 12:37:36 -0400'
  date_gmt: '2009-08-30 17:37:36 -0400'
  content: "JP..\r\n\r\ntry this..\r\n\r\nfind / -iname \"*libopennet*\"\r\n\r\nrespond
    with output.."
- id: 148848
  author: JP
  author_email: jphastings@gmail.com
  author_url: ''
  date: '2009-08-30 16:14:53 -0400'
  date_gmt: '2009-08-30 21:14:53 -0400'
  content: "Martin,\r\n\r\nThanks for your quick reply - leaving out lconfig allows
    it to run properly (I'll test it further to see if the outputs are correct, but
    that'll take a while). Good tip!\r\n\r\nI'm also running find to see what libopennet
    files are floating about - looks like this is it:\r\n\r\n```\r\n\r\nEverything
    seems to be in order too:\r\n```ls -l /opt/local/lib/libopennet.dylib \r\nlrwxr-xr-x
    \ 1 root  admin  22 30 Aug 22:09 /opt/local/lib/libopennet.dylib -> libopennet.0.9.9.dylib```\r\n\r\nStrange
    behaviour ne?\r\n\r\nCheers again, JP"
- id: 148859
  author: More Fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-08-30 21:17:47 -0400'
  date_gmt: '2009-08-31 02:17:47 -0400'
  content: "@JP\r\n\r\nTry setting your library path.. then try compiling..\r\n\r\nCopy
    and paste the below..\r\n\r\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/local/lib"
- id: 148865
  author: freewind
  author_email: wupeng@openv.cn
  author_url: http://www.openv.com
  date: '2009-08-31 02:56:02 -0400'
  date_gmt: '2009-08-31 07:56:02 -0400'
  content: "@More Fiya,\r\n\r\nCould we use VLC and bypass ffmpeg?\r\nI mean, VLC
    could transcode the RTSP stream, why should we transcode the outut of VLC again
    with ffmpeg? why not use VLC to transcode the stream to our desired format then
    pipe to the Segmenter? You know transcode the stream again and again will cost
    a lot of CPU resource."
- id: 148874
  author: john p
  author_email: tck_012002@yahoo.com
  author_url: ''
  date: '2009-08-31 11:57:54 -0400'
  date_gmt: '2009-08-31 16:57:54 -0400'
  content: "hello,\r\n\r\ni'm not sure if this question is appropriate here.  i got
    everything works the way they should using the sample clips your links provide.
    \ however, when i transcode our clips (they are of .mxf format) i got the following
    errors;\r\n\r\nOutput #0, mpegts, to 'clip1.ts':\r\n    Stream #0.0: Video: libx264,
    yuv420p, 320x240 [PAR 1:1 DAR 4:3], q=10-51, 800 kb/s, 90k tbn, 29.97 tbc\r\n
    \   Stream #0.1: Audio: aac, 48000 Hz, 4 channels, s16, 64 kb/s\r\nStream mapping:\r\n
    \ Stream #0.0 -> #0.0\r\n  Stream #0.1 -> #0.1\r\nPress [q] to stop encoding\r\n[mpeg2video
    @ 0x1004600]intra matrix invalid, ignoring\r\nResampling with input channels greater
    than 2 unsupported.\r\nCan not resample 4 channels @ 48000 Hz to 4 channels @
    48000 Hz\r\n\r\nhow can i fix this? or, if you know of some forums i can check,
    please give the pointers (i'm googling too but think you folks may know off hand)\r\n\r\ntia,\r\n\r\njohnp"
- id: 149009
  author: john p
  author_email: tck_012002@yahoo.com
  author_url: ''
  date: '2009-09-01 13:26:04 -0400'
  date_gmt: '2009-09-01 18:26:04 -0400'
  content: "found a solution for this, just in case anyone interested. since iphone
    only takes mp3 or stereo audio, for all clips that carry higher number of audio
    channels (i.e. 2), we have to downsampling the clips.  here is how:\r\n\r\nhttp://muzso.hu/2009/02/25/downsampling-multichannel-audio-5.1-into-stereo-2-channels-with-ffmpeg\r\n\r\ncheers\r\njohnp"
- id: 149022
  author: Martin
  author_email: wu7ang@gmail.com
  author_url: ''
  date: '2009-09-01 15:30:02 -0400'
  date_gmt: '2009-09-01 20:30:02 -0400'
  content: "I'm still looking for pointers on how to compile live_segmenter.c (statically?),
    so that it can't be moved to other machines or used in an application, without
    the need for the associated libraries?\r\n\r\nThanks\r\n/Martin"
- id: 149169
  author: More Fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-09-02 10:38:59 -0400'
  date_gmt: '2009-09-02 15:38:59 -0400'
  content: "@Martin..\r\n\r\nGoogle the below keywords..\r\n\r\ngcc static linking"
- id: 149179
  author: More Fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-09-02 11:30:41 -0400'
  date_gmt: '2009-09-02 16:30:41 -0400'
  content: "@freewind..\r\n\r\nTake a look on the VLC forums.. I believe there may
    be development in the works to make VLC more segmentation friendly.. There are
    users there who also have the same questions you have.. The answers given in response
    are better than any answer I can give."
- id: 149188
  author: john p
  author_email: tck_012002@yahoo.com
  author_url: ''
  date: '2009-09-02 12:25:36 -0400'
  date_gmt: '2009-09-02 17:25:36 -0400'
  content: "... just wondering if you folks have tried with clips larger than 10G
    (yes, Gigs)?  the transcoding part seems ok, but when the segmenter kicks in,
    it fails with the following error:\r\n\r\nOutput #0, mpegts, to 'vict2008_800':\r\n
    \   Stream #0.0: Video: libx264, yuv420p, 320x240, q=2-31, 90k tbn, 29.97 tbc\r\n
    \   Stream #0.1: Audio: aac, 0 channels, s16\r\n[mpegts @ 0xa6ec360]sample rate
    not set\r\nCould not write mpegts header to first output file\r\n\r\nmaybe some
    of you have run into solutions for similar problem, please give some pointers..\r\n\r\ngreat
    many thanks,\r\njohnp"
- id: 149196
  author: More Fiya
  author_email: lavathrow@gmail.com
  author_url: ''
  date: '2009-09-02 13:20:32 -0400'
  date_gmt: '2009-09-02 18:20:32 -0400'
  content: "@john p..\r\n\r\nif you try a 1gig file what happens?\r\n\r\njust a thought..
    maybe try compiling with large file support..\r\n\r\ngcc -D_LARGEFILE64_SOURCE
    -D_FILE_OFFSET_BITS=64"
- id: 149230
  author: john p
  author_email: tck_012002@yahoo.com
  author_url: ''
  date: '2009-09-02 16:18:14 -0400'
  date_gmt: '2009-09-02 21:18:14 -0400'
  content: "@More Fiya\r\n\r\ni think the threshold is around 1gig... some folks in
    the other forums suggest transcoding with audio rate at 22.5khz. i tried that
    and it doesn't really work.  i will try your suggestion and see if it works.  will
    keep you folks posted when i found a solution...\r\n\r\ncheers,\r\njohnp"
- id: 149423
  author: Stijn Tintel
  author_email: stijn.tintel@gmail.com
  author_url: http://stijn.tintel.eu/
  date: '2009-09-04 04:37:38 -0400'
  date_gmt: '2009-09-04 09:37:38 -0400'
  content: "Hello, first of all I would like to thank you for your work on this. Unfortunately
    I too am having an issue with it...\r\n\r\nGot compilation sorted out rather easily,
    although both Debian and Ubuntu both lack some packages to get this to compile.
    Compiled out of the box on Gentoo, but don't have the V4L hardware in it.\r\n\r\nNow,
    I am using /dev/video0 (BT878) as an input device. To get this to work, I had
    to add '-f video4linux2 -s 320x240', to the encoding profile I am using, right
    before the '-i %s' option. Now, I see that ffmpeg starts grabbing frames from
    the video device, but after 20-40 frames, the output is no longer updated.\r\n\r\nI
    put strace in front of the segmenter_binary, which showed me that the segmenter
    just hangs after the 4th read. Looks like ffmpeg is writing to a pipe, but the
    segmenter stops reading from it - although I am not getting a SIGPIPE or anything
    useful. It just hangs and ffmpeg slowly starts filling memory (I suspect because
    the segmenter no longer reads from the pipe).\r\n\r\nAny ideas what could be wrong,
    and how I could solve it? Ran my tests on Ubuntu 9.04, with .deb's that I created
    from the Ubuntu Jaunty source package (needed to have libx264 support). Because
    this wasn't ffmpeg >= 0.5, I also tried with the source package from Ubuntu Karmic
    which is 0.5-svn20090706, but I always ran into the same problem.\r\n\r\nRight
    now I am updating the system to the latest Ubuntu testing, in the hopes that it
    would solve anything, but I don't think it will help. Any suggestions would be
    very appreciated."
- id: 150099
  author: Mait
  author_email: mait@emt.ee
  author_url: ''
  date: '2009-09-08 03:46:52 -0400'
  date_gmt: '2009-09-08 08:46:52 -0400'
  content: "@More Fiya\r\n\r\nfor this VLC command \r\n``` vlc rtsp://192.168.1.1/file.wmv
    &acirc;&euro;&ldquo;sout '#transcode{vcodec=theo,vb=800,scale=1,acodec=vorb,ab=128,channels=2,samplerate=44100}:duplicate{dst=std{access=http,mux=ogg,dst=0.0.0.0:8080}}'```,\r\nwhat
    should i use as a <i>input_location</i> and <i>source_command</i> ?\r\n\r\nregards,\r\nMait"
- id: 154010
  author: Aidan
  author_email: ag@aidangallagher.com
  author_url: ''
  date: '2009-10-08 17:07:25 -0400'
  date_gmt: '2009-10-08 22:07:25 -0400'
  content: "Hi Carson,\r\n\r\nI want to congratulate you on a great post.\r\nI have
    an issue I hope you can help me with.\r\nI have a problem when trying to restream
    from VLC. I am using the simple restream configuration and the ts and m3u8 files
    are being created. The problem comes when `i try to view the stream on an iPod
    Touch. It just sits of 'Loading Movie File' and no video ever plays.\r\n\r\nAny
    ideas on what I am doing wrong?\r\n\r\nThanks for all the great work,\r\nAidan"
- id: 155233
  author: Bjarne
  author_email: arnebjarne72@hotmail.com
  author_url: ''
  date: '2009-10-22 09:20:00 -0400'
  date_gmt: '2009-10-22 14:20:00 -0400'
  content: "According to http://developer.apple.com/iphone/library/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/FrequentlyAskedQuestions/FrequentlyAskedQuestions.html
    the output should have a 3 seconds keyframe.\r\nShould this be set in the livesegmenter.c
    code?\r\n\r\nie.: \r\noutput_codec_context->gop_size = (input_stream->time_base)*3;\r\n\r\n?"
- id: 155816
  author: Brian Blood
  author_email: brian@networkjack.info
  author_url: http://www.networkjack.info/
  date: '2009-10-29 11:48:15 -0400'
  date_gmt: '2009-10-29 16:48:15 -0400'
  content: "Been playing around with these pieces.\r\nIt would be really great if
    someone who has gotten this to work/understands it better than me, would post
    a command line call to VLC that does all the right transcoding/capturing/etc.
    to pull from the built-in iSight on a MacBook Pro and send the result to a udp
    destination.\r\nTIA."
- id: 156271
  author: Robert
  author_email: wgt3001@yahoo.com
  author_url: ''
  date: '2009-11-03 04:59:31 -0500'
  date_gmt: '2009-11-03 09:59:31 -0500'
  content: "Hi,\r\n\r\nCan anyone compile the segmenter to a windows .exe to make
    it run on windows 2003 server? Or can you give detailed step-by-step instructions
    how to do it including what tools to use. I am only a web programmer and don't
    know how to do C and compile it. Haven't done it yet. Please help!\r\n\r\nThanks,\r\nRobert."
- id: 159003
  author: Rene
  author_email: rene.calles@kitd.com
  author_url: ''
  date: '2009-12-14 11:27:59 -0500'
  date_gmt: '2009-12-14 16:27:59 -0500'
  content: "Hi,\r\n\r\nfirst of all, thank you for very nice documentation for the
    segmenting. But i have one problem getting the http_streamer working.\r\n\r\nI'm
    working on an debian machine and when i try to prcess i get the following error
    message:\r\nsh: line 3: ftp_dev:: command not found\r\nsh: line 4: scp_dev:: command
    not found\r\nsh: line 5: copy_dev:: command not found\r\n\r\nI can't understand
    why. Is it an ruby issue ? In my understanding the require settings are looking
    for all commands used in the script.\r\n\r\nIs there anyone who can help me ?\r\n\r\nThanks,\r\nRen&Atilde;&copy;"
- id: 159953
  author: Kerem
  author_email: kerem.erkan@gmail.com
  author_url: http://keremerkan.net
  date: '2009-12-30 11:41:40 -0500'
  date_gmt: '2009-12-30 16:41:40 -0500'
  content: "It seems like there is a problem with index file creation. Consider this
    scenario: Say, I have a very long video. I set 10 segments to be in the index
    file and each segment will be 10 seconds long. And I have a very fast encoder
    computer, which can encode and copy a segment in 1 second. I start encoding and
    at the same time, open the stream on my iPhone. After 10 seconds of encoding,
    the first segments will start to be removed from the index file, because my computer
    encodes, copies the file and updates index file every second. Say, After 20 seconds,
    my phone redownloads the index file, and in this scenario, the oldest segment
    in that file will be 11th one. But it is still playing segment 2 and it has to
    download segment 3 as the next segment. Instead of segment 3, it downloads segment
    11 and I lose the segments between 3 and 11.\r\n\r\nSo, when you have a fast encoder
    computer, the computer updates the index file much faster than the phone downloads
    segments. The updating of the index file (and maybe encoding) should pause when
    the encoder is too fast. Say, I encoded 50 seconds worth of data in 5 seconds,
    I should pause for like 45 seconds in order to have the phone catch up with me.\r\n\r\nI
    hope I could make the problem clear. Any ideas about the solution? :)"
- id: 160614
  author: Ashley Taylor
  author_email: ashley@getdarker.com
  author_url: http://www.getdarker.com
  date: '2010-01-08 00:00:03 -0500'
  date_gmt: '2010-01-08 05:00:03 -0500'
  content: "Hi there folks,\r\n\r\nI'm having a few problems compiling the segmenter.
    I am using Debian Lenny (64bit) and all of the packages are installed - however
    I am getting the following errors when I try and compile live_segmenter.c:\r\nhttp://pastebin.com/m3f35ea36\r\n\r\nA
    few friends tell me it's because the versions I am using are either too old or
    too new. The libraries I am using are straight from apt (stable) (Debian package
    manager).\r\n\r\nDoes anyone know of any solutions to this issue?\r\n\r\nRegards,\r\n\r\nAshley
    Taylor"
- id: 162232
  author: yulian
  author_email: yulian@dmt204.de
  author_url: ''
  date: '2010-01-31 06:24:47 -0500'
  date_gmt: '2010-01-31 11:24:47 -0500'
  content: "Hey Mait,\r\nhow you resolve your first Problem?\r\nI have exact the same
    but i can not find any help...\r\n\r\ngcc -Wall -g live_segmenter.c -o live_segmenter
    -lavformat -lavcodec -lavutil -lm -lmp3lame -lfaad -lfaac -lbz2 -lpthread -lz
    -lx264\r\nlive_segmenter.c: In function &acirc;&euro;&tilde;add_output_stream&acirc;&euro;&trade;:\r\nlive_segmenter.c:45:
    warning: implicit declaration of function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:45:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:58:
    error: &acirc;&euro;&tilde;AVCodecContext&acirc;&euro;&trade; has no member named
    &acirc;&euro;&tilde;ticks_per_frame&acirc;&euro;&trade;\r\nlive_segmenter.c:61:
    error: &acirc;&euro;&tilde;AVCodecContext&acirc;&euro;&trade; has no member named
    &acirc;&euro;&tilde;ticks_per_frame&acirc;&euro;&trade;\r\nlive_segmenter.c:71:
    error: &acirc;&euro;&tilde;AVCodecContext&acirc;&euro;&trade; has no member named
    &acirc;&euro;&tilde;channel_layout&acirc;&euro;&trade;\r\nlive_segmenter.c:71:
    error: &acirc;&euro;&tilde;AVCodecContext&acirc;&euro;&trade; has no member named
    &acirc;&euro;&tilde;channel_layout&acirc;&euro;&trade;\r\nlive_segmenter.c: In
    function &acirc;&euro;&tilde;main&acirc;&euro;&trade;:\r\nlive_segmenter.c:124:
    warning: implicit declaration of function &acirc;&euro;&tilde;atoi&acirc;&euro;&trade;\r\nlive_segmenter.c:130:
    warning: implicit declaration of function &acirc;&euro;&tilde;malloc&acirc;&euro;&trade;\r\nlive_segmenter.c:130:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;malloc&acirc;&euro;&trade;\r\nlive_segmenter.c:134:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:145:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:153:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:159:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:166:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:169:
    warning: implicit declaration of function &acirc;&euro;&tilde;avformat_alloc_context&acirc;&euro;&trade;\r\nlive_segmenter.c:169:
    warning: initialization makes pointer from integer without a cast\r\nlive_segmenter.c:173:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:207:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:228:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nlive_segmenter.c:234:
    warning: incompatible implicit declaration of built-in function &acirc;&euro;&tilde;exit&acirc;&euro;&trade;\r\nmake:
    *** [all] Fehler 1"
- id: 163157
  author: Peter S.
  author_email: umpf@trash-mail.com
  author_url: ''
  date: '2010-02-13 06:19:19 -0500'
  date_gmt: '2010-02-13 11:19:19 -0500'
  content: '@ Kerem: Insert the ffmpeg parameter "-re" that encodes the video at native
    frame rate'
- id: 163994
  author: fapestniegd
  author_email: fapestniegd@gmail.com
  author_url: ''
  date: '2010-02-25 09:23:37 -0500'
  date_gmt: '2010-02-25 14:23:37 -0500'
  content: "What version of ffmpeg svn (specifically) did segmenter.c compile against?
    I get errrors with the latest svn and the 0.5 release, and the one that ships
    with lenny (which I was sure wouldn't work, but tried anyway) \r\n\r\n(and I've
    ensurede my -I  and $LD_LIBRARY_PATH  point to /usr/local/include and /usr/local/lib
    (respectively) where ffmpeg installed from source...)"
- id: 164111
  author: Bruce Bertrand
  author_email: brucebertrand@juno.com
  author_url: ''
  date: '2010-02-26 12:24:54 -0500'
  date_gmt: '2010-02-26 17:24:54 -0500'
  content: "Why does the bandwidth calculation in the encoding profile only take into
    account the video bandwidth?  \r\n\r\nFor example, in the example profile in this
    post, you have a video bitrate of 128k and an audio bitrate of 64k, for a total
    of 192k.  But the \"bandwidth\" setting is 128000.\r\n\r\nThis is also the case
    in the example config files."
- id: 164348
  author: trebla
  author_email: albert.ng@azukisystems.com
  author_url: ''
  date: '2010-03-02 14:12:05 -0500'
  date_gmt: '2010-03-02 19:12:05 -0500'
  content: "..just wondering if anyone has seen this symptom: for the same 120 seconds
    mpeg-ts file, generated by ffmpeg, the number of segments generated by the open
    source segmenter is 10 whereas the number of segments generated by the apple segmenter
    is 12. I also tried it on a longer clip, 5880 seconds. 470 segments generated
    by the open source segmenter vs 588 segments generated by the apple segmenter.
    The duration of each segment in all cases is set to 10 seconds.  Also there is
    a message, e.g. [NULL@0xfea980]missing picture in access unit, at the end of the
    open source segmenter command execution. The message is apparently spit out by
    ffmpeg libavcodec/h264_parser.c. Is this an issue with ffmpeg or an issue with
    the segmenter?  Any pointers would be greatly appreciated. Thanks."
- id: 166216
  author: kearygriffin
  author_email: keary.griffin@unwiredappeal.com
  author_url: http://techblog.unwiredappeal.com
  date: '2010-03-25 09:50:56 -0400'
  date_gmt: '2010-03-25 14:50:56 -0400'
  content: "Thanks to the tools, information and work done here I put together a patch
    to provide HTTP Live Streaming module for VLC.    I created this because I was
    having alot of issues getting ffmpeg to mux the output from VLC correctly.\r\n\r\nIf
    there is any interest you can read the instructions and download the patch here:\r\nhttp://techblog.unwiredappeal.com/2010/03/vlc-http-live-streaming-module-patch.html"
- id: 166420
  author: xargle
  author_email: tony@i-r-genius.com
  author_url: ''
  date: '2010-03-29 07:37:23 -0400'
  date_gmt: '2010-03-29 12:37:23 -0400'
  content: "Chaps, great work on this. Apple have recently published a spec on recommended
    live streaming formats :\r\n\r\n<a href=\"http://developer.apple.com/iphone/library/technotes/tn2010/tn2224.html\"
    rel=\"nofollow\">TN2224</a>\r\n\r\nAlso the streams generated need to pass the
    streamvalidator, currently the bitrates of the generated streams are way off.\r\n\r\nHas
    anyone got improved FFMPEG parameters to produce files that pass?"
- id: 166421
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-29 07:56:10 -0400'
  date_gmt: '2010-03-29 12:56:10 -0400'
  content: "@xargle Thanks for bringing that up. I've been trying to find some time
    to go back and apply changes that I've been given as well as tweak some stuff
    in the segmenter. The validation tool will give me extra reason to do so."
- id: 167006
  author: iPad Streaming Video and More
  author_email: ''
  author_url: http://www.ioncannon.net/programming/1015/ipad-streaming-video-and-more/
  date: '2010-04-06 06:01:44 -0400'
  date_gmt: '2010-04-06 11:01:44 -0400'
  content: "[...] iPad, iPhone or iPod Touch and haven&#39;t done so yet you it may
    help to start with my post on windowed streaming on for the iPhone, then read
    about iPhone HTTP streaming with FFMpeg and the open source segmenter and finally
    check [...]"
- id: 167326
  author: Estelle
  author_email: ewpaus@pobox.com
  author_url: ''
  date: '2010-04-10 21:12:39 -0400'
  date_gmt: '2010-04-11 02:12:39 -0400'
  content: Great stuff.  Thank you so much.  I need to use a UDP MpegTS stream as
    input to the segmenter.  Does ffmpeg handle live streams as input.  I thought
    it did.  But, I can find no information on how to do this.  Do you or any of your
    readers know about this?
- id: 167511
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-04-13 07:47:30 -0400'
  date_gmt: '2010-04-13 12:47:30 -0400'
  content: You can use whatever you want to feed the ffmpeg processes. The examples
    all use cat to do so but you could maybe use something like netcat instead. I
    haven't tried it myself but I'll stick it on my list to test out.
- id: 171228
  author: Stanislav
  author_email: elephantau@gmail.com
  author_url: ''
  date: '2010-06-03 03:48:23 -0400'
  date_gmt: '2010-06-03 08:48:23 -0400'
  content: "Very interesting project.\r\nHas anyone decide problem with rollover in
    write_frame() after 26 hours?"
- id: 171817
  author: nilsel
  author_email: nils@deviant.no
  author_url: http://nils.deviant.no/
  date: '2010-06-12 09:57:37 -0400'
  date_gmt: '2010-06-12 14:57:37 -0400'
  content: "Wow great stuff! After a few late nights i managed to compile live_streamer
    (my library paths seemed to be out of wack, cleaning up macports helped). Anyway
    it works great. It could be nice to merge this into the old iSquint (now punyVid
    [1]) to make some sort of live transcoder with gui and playlist support, but I
    do not have the Cocoa-skills (yet) ;). Thanks for sharing this!\r\n\r\n[1] http://transcoderredux.svn.sourceforge.net/viewvc/transcoderredux/PunyVid/"
- id: 172037
  author: bastien
  author_email: bastien.allibert@easii-ic.com
  author_url: ''
  date: '2010-06-16 02:29:09 -0400'
  date_gmt: '2010-06-16 07:29:09 -0400'
  content: "Very interesting project ! I managed to get everything working, but i
    have one problem : when playing the video, i realized that it contains some \"clicks\"
    in audio streams, and also some freezes in video stream. I've tried to tweek my
    encoding settings, but finally found the problem somewhere else : if i remove
    the pipe between ffmpeg encode and the segmenter, and replace it by, for example,
    a temporary file (thus making ffmpeg and segmenter running in sequence instead
    of parallel if i'm right),... it works perfectly ! I still don't understand why.\r\nAny
    ideas on that ?\r\nThanks again for the great work !"
- id: 173740
  author: bastien
  author_email: b.allibert@gmail.com
  author_url: ''
  date: '2010-07-06 03:47:41 -0400'
  date_gmt: '2010-07-06 08:47:41 -0400'
  content: "Hi again,\r\nDon't know if i am the only one having such problem... maybe
    because i'm using a tweaked version of ffmpeg for embedded. Anyway, i identified
    the reason for that: ffmpeg seems to create corrupted TS streams when the input
    protocol does not support \"seek\" function. Which means : in case of file protocol,
    no problem (that's why using a temporary file solved my problem). But, using pipe
    protocol, seek functionality is not provided and ffmpeg output contains clicks,
    like desynchronization between audio and video.\r\nHope this helps! (maybe an
    interesting idea would be to add some kind of ffmpeg protocol registering to the
    segmenter, in order to support \"seek\", even if restricted : i still have to
    check why seek is needed, and it would be sufficient)."
- id: 176387
  author: john p
  author_email: tck_012002@yahoo.com
  author_url: ''
  date: '2010-07-22 14:19:51 -0400'
  date_gmt: '2010-07-22 19:19:51 -0400'
  content: "folks,\r\n\r\nthe very last segment always misses a second or 2 (the time
    bar stops at --0:01) and the quicktime logo is shown.  \r\n\r\nhas anyone had
    a fix for this? thx."
- id: 194663
  author: fapestniegd
  author_email: fapestniegd@gmail.com
  author_url: ''
  date: '2011-01-02 00:00:21 -0500'
  date_gmt: '2011-01-02 05:00:21 -0500'
  content: "Is there any documentation on how to use this? Or do I need to know how
    to integrate the ruby into apache? I managed to get it to compile, but then when
    I go to http://my-server/html/streamingvideo/stream_multi.m3u8 on my iphone4,
    I get 20 seconds of choppy video and it exits.\r\n\r\nubuntu lucid lynx: https://gist.github.com/762299\r\n\r\nhow
    do I use it with a live stream from a pipe? is that possible?"
- id: 195132
  author: bn
  author_email: benjamin@nabet.Fr
  author_url: ''
  date: '2011-01-07 05:04:51 -0500'
  date_gmt: '2011-01-07 10:04:51 -0500'
  content: "Hi,\r\n\r\nVery interesting. \r\n\r\nI was wondering about the 64k bitrate
    fallback that seems to miss to the yaml file (required by Apple)\r\n\r\nAny tips
    on howto do integrate this ?\r\n\r\nMany thanks"
- id: 197033
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-01-31 09:28:58 -0500'
  date_gmt: '2011-01-31 14:28:58 -0500'
  content: "@bn The required 64k bitrate fallback is indeed missing. I haven't had
    time to add it yet and doing so will require some work because the audio tracks
    aren't currently separated from the video before being segmented. They need to
    be separated so that the 64k fallback will sync correctly."
- id: 200857
  author: bernhard pfennigschm
  author_email: bernhard@onvos.com
  author_url: http://www.onvos.com
  date: '2011-03-23 03:02:30 -0400'
  date_gmt: '2011-03-23 08:02:30 -0400'
  content: "Hello Carson\r\n\r\nThank you for the inspiration to follow through and
    make this work. I have written a Howto for the setup of a live broadcast. the
    url is http://www.onvos.com/http-live-streaming-howto.html \r\n\r\nThanks again.
    \r\nB\r\nDo you have the separate audio track commando already contemplated?"
- id: 201321
  author: bernhard pfennigschm
  author_email: bernhard@onvos.com
  author_url: http://www.onvos.com
  date: '2011-03-29 16:03:25 -0400'
  date_gmt: '2011-03-29 21:03:25 -0400'
  content: "Hello Carson\r\n\r\nI have segmented Zeitgeist Moving forward, a 2 hour
    41 min movie and get the m3u8 multi stream to play it in 2:19. \r\nhttp://www.onvos.com/zmf.html
    \r\nI am still trying to find the error in ffmpeg, but no additional parameter
    helps. \r\nWhen I use the -vn trying to create an audio only stream, the length
    is correctly 2:41 \r\nDo you have any idea where the missing 22 minutes went?\r\n\r\nTake
    the time and have a nice evening viewing the video.\r\nSaludos\r\nBernhard"
- id: 201747
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-04-05 17:37:58 -0400'
  date_gmt: '2011-04-05 22:37:58 -0400'
  content: "@bernhard no audio track support yet, it is something I haven't had time
    to really get started on."
- id: 205091
  author: tony
  author_email: tony@curzon.com
  author_url: ''
  date: '2011-05-22 13:35:25 -0400'
  date_gmt: '2011-05-22 18:35:25 -0400'
  content: "Hi Bastien - Can you let us have the version of the script where you've
    taken out the pipe ... might work for me!\r\n\r\nThanks, Tony"
- id: 205335
  author: Amit
  author_email: amit123delhi@gmail.com
  author_url: ''
  date: '2011-05-25 07:45:11 -0400'
  date_gmt: '2011-05-25 12:45:11 -0400'
  content: "I am getting the following error while compiling the live_segmenter.c
    file. Please help.\r\nThanks in advance.\r\nAmit\r\n\r\n=====ERROR=====\r\ngcc
    -Wall -g live_segmenter.c -o live_segmenter -lavformat -lavcodec -lavutil -lbz2
    -lm -lz -lfaac -lmp3lame -lx264 -lfaad -lpthread\r\nlive_segmenter.c: In function
    &acirc;&euro;&tilde;add_output_stream&acirc;&euro;&trade;:\r\nlive_segmenter.c:70:
    error: &acirc;&euro;&tilde;CODEC_TYPE_AUDIO&acirc;&euro;&trade; undeclared (first
    use in this function)\r\nlive_segmenter.c:70: error: (Each undeclared identifier
    is reported only once\r\nlive_segmenter.c:70: error: for each function it appears
    in.)\r\nlive_segmenter.c:84: error: &acirc;&euro;&tilde;CODEC_TYPE_VIDEO&acirc;&euro;&trade;
    undeclared (first use in this function)\r\nlive_segmenter.c: In function &acirc;&euro;&tilde;main&acirc;&euro;&trade;:\r\nlive_segmenter.c:165:
    warning: implicit declaration of function &acirc;&euro;&tilde;guess_format&acirc;&euro;&trade;\r\nlive_segmenter.c:165:
    warning: initialization makes pointer from integer without a cast\r\nlive_segmenter.c:192:
    e"
- id: 210031
  author: Yahor Beuz
  author_email: egorbevz@gmail.com
  author_url: ''
  date: '2011-07-20 02:01:55 -0400'
  date_gmt: '2011-07-20 07:01:55 -0400'
  content: "<q cite=\"e\">\r\n\r\n     Hello, Amit. I had the same problem and I have
    already solved it.\r\nThe reason is in new libavformat which has constants with
    different names.\r\nTry replace CODEC_TYPE_AUDIO with AVMEDIA_TYPE_AUDIO, CODEC_TYPE_VIDEO
    with AVMEDIA_TYPE_VIDEO and PKT_FLAG_KEY with AV_PKT_FLAG_KEY in your live_segmenter.c
    source. It helps me to compile live_segmenter."
---
After some more work I have enhanced the HTTP segmenter and uploading script from my <a href="http://www.ioncannon.net/programming/475/iphone-windowed-http-live-streaming-using-amazon-s3-and-cloudfront-proof-of-concept/">iPhone streaming using AWS S3 and Cloudfront</a> post. I added a number of features and tried to pull together some of the ideas from the comments. I'll go over some of the features here and there is a full list of configuration options on the <a href="http://www.ioncannon.net/projects/http-live-video-stream-segmenter-and-distributor/">HTTP Live Video Streaming server</a> project page and the source is available at the <a href="http://github.com/carsonmcdonald/HTTP-Live-Video-Stream-Segmenter-and-Distributor/tree/master">github repo</a>.

So the major changes I have added are:

<ul>
<li>Yaml based configuration file. See the project page for a complete list of options.</li>
<li>Ability to transfer segments via copy, ftp, scp and s3.</li>
<li>Added the ability to do variable bitrate streams.</li>
<li>Added re-streaming support.</li>
<li>Added logging to a file and better debug output.</li>
</ul>
The variable bitrate streams where done by using pipes. I have done a large amount of testing <a href="http://www.ittsystems.com/best-free-tftp-servers-windows/">via ITT Systems</a> and it seems to work fairly well. I am able to stream a live HD video source into 3 different bitrates on a fairly old PC. Here are a couple clips I created to show the progressive enhancement in action, you probably want to switch to the HD version of the video and watch it full screen to get the bet view:

<center>
<object width="480" height="295"><param name="movie" value="http://www.youtube.com/v/teKAyN0qZVY&rel=0&color1=0xb1b1b1&color2=0xcfcfcf&feature=player_profilepage&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowScriptAccess" value="always"></param><embed src="http://www.youtube.com/v/teKAyN0qZVY&rel=0&color1=0xb1b1b1&color2=0xcfcfcf&feature=player_profilepage&fs=1" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="480" height="295"></embed></object></center>

The configuration file will allow for any number of encoding options or transfer options and they can be put together in a number of different ways. Here are a couple examples of both, see the example configuration files for more. 

An encoder example:

```
ep_128k:
  ffmpeg_command: "ffmpeg -er 4 -y -i %s -f mpegts -acodec libmp3lame -ar 48000 -ab 64k -s 320x240 -vcodec libx264 -b 128k -flags +loop -cmp +chroma -partitions +parti4x4+partp8x8+partb8x8 -subq 5 -trellis 1 -refs 1 -coder 0 -me_range 16 -keyint_min 25 -sc_threshold 40 -i_qfactor 0.71 -bt 128k -maxrate 128k -bufsize 128k -rc_eq 'blurCplx^(1-qComp)' -qcomp 0.6 -qmin 10 -qmax 51 -qdiff 4 -level 30 -aspect 320:240 -g 30 -async 2 - | %s %s %s %s %s"
  bandwidth: 128000
```

Transfer configuration example:

```
ftp_dev:
  transfer_type: 'ftp'
  remote_host: '192.168.1.1'
  user_name: 'user'
  password: 'pass'
  directory: 'html/streamingvideo'
```
As a final note on changes, you are no longer able to use the segmenter without the script now really. If you want to do that you should use the original version of the <a href="http://svn.assembla.com/svn/legend/segmenter/">segmenter source</a>. 

Please note that there is still some work to be done on the script to be complete. If I have time my next enhancement will be to add encryption and I will probably try to test builds on other distributions (maybe attempt to create segmenter binaries).

