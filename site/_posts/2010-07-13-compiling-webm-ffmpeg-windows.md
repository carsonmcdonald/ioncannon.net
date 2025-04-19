---
layout: archive
status: publish
published: true
title: Compiling WebM into FFMpeg for Windows
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1128
wordpress_url: http://www.ioncannon.net/?p=1128
date: '2010-07-13 05:30:55 -0400'
date_gmt: '2010-07-13 10:30:55 -0400'
categories:
- meta
tags:
- ffmpeg
- windows
- webm
- vp8
comments:
- id: 170310
  author: Gabriel
  author_email: w3stfa11@gmail.com
  author_url: ''
  date: '2010-05-20 11:40:32 -0400'
  date_gmt: '2010-05-20 16:40:32 -0400'
  content: Thanks for the tutorial. Could you share the compiled ffmpeg executable?
    It'd be much appreciated!
- id: 170318
  author: Ricardo
  author_email: rmasuk@hotmail.com
  author_url: ''
  date: '2010-05-20 12:50:33 -0400'
  date_gmt: '2010-05-20 17:50:33 -0400'
  content: "Hi, thanks for the guide\r\n\r\nI don't use Ubuntu nor have a spare pc
    to install it, can you share a ffmpeg build with vp8?\r\n\r\nThanks"
- id: 170347
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-05-20 17:31:15 -0400'
  date_gmt: '2010-05-20 22:31:15 -0400'
  content: 'For people looking for pre-compiled binaries I''ve been beat to the punch.
    You can find them here along with some comments on the command line options: http://micksam7.com/blog/index.php/?p=743'
- id: 170352
  author: Ricardo
  author_email: rmasuk@hotmail.com
  author_url: ''
  date: '2010-05-20 18:26:38 -0400'
  date_gmt: '2010-05-20 23:26:38 -0400'
  content: "Hello again.\r\n\r\nHis ffmpeg build using the command line he gave doesnt
    produce proper webm videos, unlike the other samples iveseen it only plays the
    audio.\r\n\r\nMediainfo info reports webm files as webm, the webm output produced
    by his ffmpeg build is recognized as mkv in mediainfo\r\n\r\nCan you suplly a
    build made by you?\r\n\r\nThanks"
- id: 170404
  author: Matthew Scheuerman
  author_email: mordecaidesign@gmail.com
  author_url: ''
  date: '2010-05-21 14:45:38 -0400'
  date_gmt: '2010-05-21 19:45:38 -0400'
  content: "I've had some \"wierdness\" running this script. \r\n\r\nFirst run, it
    didn't download any of the necessary Ubuntu files. \r\nThen next run downloaded
    all the necessary files.\r\nThen every run after that it returns  the following
    at the very end of the script's run\r\n\r\nls: cannot access *.exe: No such file
    or directory\r\n\r\nThis is probably my tenth time using linux and the linux terminal
    , so I might be doing something wrong.\r\n\r\nDo you have any idea what's going
    on?\r\n\r\nI'm going to download the binaries you linked to but I thought it might
    be nice to learn to do it myself."
- id: 170461
  author: Ricardo
  author_email: rmasuk@hhotmail.com
  author_url: ''
  date: '2010-05-22 13:18:38 -0400'
  date_gmt: '2010-05-22 18:18:38 -0400'
  content: "Hi Carson!\r\n\r\nAny chance of providing a windows ffmpeg build with
    libvorbis instead of the normal vorbis encoder, the audio encoded with vorbis
    from ffmpeg sounds insanely bad, i researched and it seems that we need to use
    -ac libvorbis with ffmpeg to use a different vorbis encoder with better quality\r\n\r\nCan
    you help?\r\n\r\nThanks"
- id: 170854
  author: Leon
  author_email: lgeyser@gmail.com
  author_url: ''
  date: '2010-05-27 12:06:34 -0400'
  date_gmt: '2010-05-27 17:06:34 -0400'
  content: "libVorbis seems to be missing in the build. The audio generated won't
    be of acceptable quality.\r\nPlease read: http://xiphmont.livejournal.com/51160.html"
- id: 170925
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-05-28 22:02:49 -0400'
  date_gmt: '2010-05-29 03:02:49 -0400'
  content: "@matthew Make sure you are running the version of Ubuntu listed. I haven't
    tried with anything but that would be my guess."
- id: 170926
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-05-28 22:04:29 -0400'
  date_gmt: '2010-05-29 03:04:29 -0400'
  content: "@Ricardo The steps are pretty easy to follow and even on windows it would
    probably take an hour or so to install Virtualbox and end with an exe. I'll look
    at integrating in libvorbis into the example."
- id: 171152
  author: Ricardo
  author_email: rmasuk@hotmail.com
  author_url: ''
  date: '2010-06-02 10:01:13 -0400'
  date_gmt: '2010-06-02 15:01:13 -0400'
  content: "Hi Carson, altough not familiar with virtualbox i'll give it a try. lets
    us know when you change the script to include libvorbis\r\n\r\nThanks"
- id: 171456
  author: Dave Brown
  author_email: dave@davidhbrown.us
  author_url: ''
  date: '2010-06-07 00:00:17 -0400'
  date_gmt: '2010-06-07 05:00:17 -0400'
  content: "@matthew, I'm getting the same error, but more importantly (I think) a
    few lines up I see \"ERROR: libvpx_vp8 not found\". That \"ls -l *.exe\" appears
    to just be a convenience to show you what was made -- in our case, nothing.\r\n\r\nAbove
    this, I'm seeing a couple possibly-relevant errors:\r\n```\r\n    [CC] vp8/vp8_cx_iface.c.o\r\nvp8/vp8_cx_iface.c:106:1:
    warning: \"ERROR\" redefined\r\nIn file included from /usr/lib/gcc/i586-mingw32msvc/4.2.1-sjlj/../../../../i586-mingw32msvc/include/windows.h:52,\r\n
    \                from /home/dave/ffmpeg/win32-webm/src/libvpx/vp8/common/threading.h:22,\r\n
    \                from /home/dave/ffmpeg/win32-webm/src/libvpx/vp8/encoder/onyx_int.h:27,\r\n
    \                from vp8/vp8_cx_iface.c:15:\r\n/usr/lib/gcc/i586-mingw32msvc/4.2.1-sjlj/../../../../i586-mingw32msvc/include/wingdi.h:313:1:
    warning: this is the location of the previous definition\r\n```[....]```\r\ncp:
    cannot stat `vp8/*.h': No such file or directory\r\ncp: cannot stat `vpx_codec/*.h':
    No such file or directory\r\n```\r\n\r\nAlso, note that this line in the script,
    ```
    references your home directory root-relative, so I believe you *must* run the
    script from there because various directories are created relative to where the
    script resides. I initially ran it from the Desktop where Firefox dropped it for
    me.\r\n\r\nI recently upgraded my VirtualBox Ubuntu install to 10.04, so Carson's
    response that the Ubuntu version might need to be exact could very well be the
    thing, but maybe the other errors I saw will give someone a clue. \r\n\r\nBut
    it looks like patch-free solutions are starting to arrive anyway. Do appreciate
    the early effort here, even though I couldn't get it to work :-)"
- id: 172091
  author: Snaky
  author_email: snakylove@gmail.com
  author_url: ''
  date: '2010-06-17 08:24:14 -0400'
  date_gmt: '2010-06-17 13:24:14 -0400'
  content: hi, sorry, but the video demo page does not play at all. I tried with opera
    labs 10.54, newest chrome and firefox - no video play. at least opera does try
    to play the video, but it shows only a small stripe in the middle of the player.
---

I have updated this post with a newer version of the VP8 patches to FFMpeg and support for libvorbis instead of the built in vorbis support.


Google has released source for the VP8 codec as the <a href="http://www.webmproject.org/">WebM project</a>. The WebM project will be an open alternative in the HTML5 video tag codec space and being backed by Google, who will use it for YouTube, will give it a fighting chance. WebM is starting to be integrated into FFMpeg but there are still some patches that need to be applied. While there are some guides to how to <a href="http://lardbucket.org/blog/archives/2010/05/19/vp8-webm-and-ffmpeg/">build FFMpeg for Linux with VP8 WebM support</a> I wanted to get it compiled for Windows.


First off this won't be done using a Windows install but instead using <a href="http://www.virtualbox.org/">Virtual Box</a> with a fresh install of <a href="http://releases.ubuntu.com/lucid/">Ubuntu 10.04</a> desktop. It is just faster and easier that way. So go ahead and grab Virtual Box and get Ubuntu installed on it before you continue.


I used this <a href="http://www.bluebottle.net.au/blog/2010/cross-compiling-x264-for-win32-on-ubuntu-linux/">cross compiling X264 using Ubuntu</a> as a base for part of my script. The entire script follows but if you want to make sure you get a good copy you can <a href="/examples/vp8-webm/vp8webmffmpeg.sh">download it</a>:


```
mkdir ffmpeg
cd ffmpeg
BASEDIR=`pwd`
MINGBASE=$BASEDIR/win32-webm
sudo apt-get install pkg-config yasm subversion cvs git-core gcc-mingw32
cat > mingw32-setup.sh << EOF
#!/bin/sh
export CC=i586-mingw32msvc-gcc
export CXX=i586-mingw32msvc-g++
export CPP=i586-mingw32msvc-cpp
export AR=i586-mingw32msvc-ar
export RANLIB=i586-mingw32msvc-ranlib
export ADD2LINE=i586-mingw32msvc-addr2line
export AS=i586-mingw32msvc-as
export LD=i586-mingw32msvc-ld
export NM=i586-mingw32msvc-nm
export STRIP=i586-mingw32msvc-strip
export PATH="/usr/i586-mingw32msvc/bin:$PATH"
export PKG_CONFIG_PATH="$MINGBASE/lib/pkgconfig/"
exec "\$@"
EOF
chmod +x mingw32-setup.sh
mkdir $MINGBASE $MINGBASE/src $MINGBASE/lib $MINGBASE/include $MINGBASE/share $MINGBASE/bin
cd $MINGBASE/src
wget -qO - http://downloads.xiph.org/releases/ogg/libogg-1.2.0.tar.gz | tar xzf -
cd libogg-1.2.0
$BASEDIR/mingw32-setup.sh ./configure --enable-static --disable-shared --host=mingw32
make
DESTDIR=$MINGBASE make install prefix=
cd ..
wget -qO - http://downloads.xiph.org/releases/vorbis/libvorbis-1.3.1.tar.gz | tar xzf -
cd libvorbis-1.3.1
LDFLAGS="-L$MINGBASE/lib" CFLAGS="-I$MINGBASE/include" $BASEDIR/mingw32-setup.sh ./configure --enable-static --disable-shared --host=mingw32
make
DESTDIR=$MINGBASE make install prefix=
cd ..
wget -qO - ftp://sourceware.org/pub/pthreads-win32/pthreads-w32-2-8-0-release.tar.gz | tar xzf -
cd pthreads-w32-2-8-0-release
make GC-static CROSS=i586-mingw32msvc-
cp libpthreadGC2.a $MINGBASE/lib
cp *.h $MINGBASE/include
cd ..
wget -qO - http://zlib.net/zlib-1.2.5.tar.gz | tar xzf -
cd zlib-1.2.5/
$BASEDIR/mingw32-setup.sh ./configure
sed -i"" -e 's/-lc//' Makefile
make
DESTDIR=$MINGBASE make install prefix=
cd ..
git clone git://review.webmproject.org/libvpx.git
cd libvpx/
git checkout fd0d7ff4c155b94d3f322addc7b66234b6908cc6
cat > /tmp/libvpx.x.patch << EOP
diff -rupN libvpx.orig/configure libvpx/configure
--- libvpx.orig/configure	2010-07-11 14:49:18.703230816 -0400
+++ libvpx/configure	2010-07-11 14:50:33.747300030 -0400
@@ -436,9 +436,9 @@ process_detect() {
         }
     fi
     check_header stdio.h || die "Unable to invoke compiler: \${CC} \${CFLAGS}"
-    check_ld <<EOF || die "Toolchain is unable to link executables"
-int main(void) {return 0;}
-EOF
+#    check_ld <<EOF || die "Toolchain is unable to link executables"
+#int main(void) {return 0;}
+#EOF
     # check system headers
     check_header stdint.h
     check_header pthread.h
diff -rupN libvpx.orig/vp8/common/postproc.c libvpx/vp8/common/postproc.c
--- libvpx.orig/vp8/common/postproc.c	2010-07-11 14:49:18.939266476 -0400
+++ libvpx/vp8/common/postproc.c	2010-07-11 14:51:03.855300662 -0400
@@ -481,7 +481,7 @@ int vp8_post_proc_frame(VP8_COMMON *oci,
     }
 #if ARCH_X86||ARCH_X86_64
-    vpx_reset_mmx_state();
+//    vpx_reset_mmx_state();
 #endif
     if (flags & VP8D_DEMACROBLOCK)
diff -rupN libvpx.orig/vp8/common/systemdependent.h libvpx/vp8/common/systemdependent.h
--- libvpx.orig/vp8/common/systemdependent.h	2010-07-11 14:49:18.947263304 -0400
+++ libvpx/vp8/common/systemdependent.h	2010-07-11 14:51:25.019253115 -0400
@@ -10,12 +10,12 @@
 #include "vpx_ports/config.h"
-#if ARCH_X86 || ARCH_X86_64
-void vpx_reset_mmx_state(void);
-#define vp8_clear_system_state() vpx_reset_mmx_state()
-#else
+//#if ARCH_X86 || ARCH_X86_64
+//void vpx_reset_mmx_state(void);
+//#define vp8_clear_system_state() vpx_reset_mmx_state()
+//#else
 #define vp8_clear_system_state()
-#endif
+//#endif
 struct VP8Common;
 void vp8_machine_specific_config(struct VP8Common *);
EOP
patch -p1 < /tmp/libvpx.x.patch
$BASEDIR/mingw32-setup.sh ./configure --disable-examples --disable-mmx --disable-sse --disable-sse2 --disable-sse3 --disable-ssse3
$BASEDIR/mingw32-setup.sh make
DESTDIR=$MINGBASE make install prefix=/
cd ../..
mv usr/local/lib/* lib
mv usr/local/include/vpx/ include/
cd src
wget -qO - http://webm.googlecode.com/files/ffmpeg-0.6_libvpx-0.9.1.diff.gz | zcat - > /tmp/ffmpeg-0.6_libvpx-0.9.1.diff
wget -qO - http://www.ffmpeg.org/releases/ffmpeg-0.6.tar.gz | tar xzf -
cd ffmpeg-0.6
patch -p0 < /tmp/ffmpeg-0.6_libvpx-0.9.1.diff
LDFLAGS="-L$MINGBASE/lib" CFLAGS="-I$MINGBASE/include" ./configure --target-os=mingw32 --cross-prefix=i586-mingw32msvc- --arch=x86 --prefix=$MINGBASE --enable-memalign-hack --enable-gpl --enable-avisynth --enable-version3 --enable-postproc --enable-libvpx --enable-runtime-cpudetect --disable-network --disable-devices --disable-encoder=vorbis --enable-libvorbis
make
cp ffmpeg.exe $BASEDIR
```

Just transfer that script to the user you create when you installed Ubuntu and run it. You will need to provide your password once so that the system can install a few tools but after that everything is done automatically. At the end you will have exe files in the directory you ran the script from.


Transfer the exe files that are created to a windows machine and then transcode a video like this:


```
ffmpeg.exe -i Big_Buck_Bunny_1080p.avi -acodec libvorbis -ac 2 -ab 128k -ar 44100 -s 720x480 Big_Buck_Bunny_1080p.webm
```

Please note that you need to include the audio codec information above to correctly encode the video. If you don't include rate values you will get an error telling you the libvorbis can't be initialized.


When the transcoding is done you will have a WebM video. Grab your closest HTML5 video player like <a href="http://videojs.com/">VideoJS</a> and you are ready to go.

You will need to use one of the following browsers to view the demo (all of these are as of July 13 2010, support will eventually be added to the main build):

<ul>
  <li><a href="http://www.chromium.org/getting-involved/dev-channel">Chromium</a> dev channel build</li>
  <li><a href="http://www.mozilla.com/en-US/firefox/all-beta.html">Firefox</a> 4 beta</li>
  <li><a href="http://www.opera.com/download/">Opera</a></li>
  <li><a href="http://windowsteamblog.com/windows/b/bloggingwindows/archive/2010/05/19/another-follow-up-on-html5-video-in-ie9.aspx">IE 9</a> when the user has the Direct Show DLLs installed</li>
</ul>

I have tested the demo video on each of the above, except for IE9 that doesn't have WebM support as of yet, and it seems to work pretty well.

