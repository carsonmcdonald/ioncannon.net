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
