---
layout: archive
status: publish
published: true
title: Using WebP to Reduce Native iOS App Size
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1483
wordpress_url: http://www.ioncannon.net/?p=1483
date: '2011-06-29 07:23:40 -0400'
date_gmt: '2011-06-29 12:23:40 -0400'
categories:
- programming
tags:
- iOS
- WebP
comments:
- id: 208578
  author: Ramon Smits
  author_email: ramon.smits@gmail.com
  author_url: http://ramonsmits.com
  date: '2011-07-01 03:57:49 -0400'
  date_gmt: '2011-07-01 08:57:49 -0400'
  content: The webp image quality of the eggs is awful compared to the jpeg version.
- id: 209308
  author: Vu
  author_email: muclangthang@gmail.com
  author_url: ''
  date: '2011-07-08 04:41:03 -0400'
  date_gmt: '2011-07-08 09:41:03 -0400'
  content: 'pretty cool and useful article. I love it. However, when I try to run
    the script, there was an error: "sh: autogen.sh: No such file or directory" although
    I installed Macports and there was autogen.sh at "/opt/local/var/macports/sources/rsync.macports.org/release/ports/net/pidgin/files".
    Could you please give me an advice?'
- id: 213254
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-09-05 20:16:50 -0400'
  date_gmt: '2011-09-06 01:16:50 -0400'
  content: Yes, it turns out when you shrink the image down to a size like it is here
    it doesn't look nearly as good. If you look at the full size image it looks much
    better.
- id: 231996
  author: Thomas Mansencal
  author_email: thomas.mansencal@gmail.com
  author_url: http://www.thomasmansencal.com/
  date: '2012-02-04 19:09:18 -0500'
  date_gmt: '2012-02-05 00:09:18 -0500'
  content: 'I''m more worried by the colors shift differences between the 2 versions,
    it would have been great to provide the original PNG file to see who is wrong.
    Here is a diff between the 2 images, see how the eggs colors are affected: http://thomasmansencal.com/Sharing/Pictures/Others/Jpeg_WebP_Difference.png'
- id: 232017
  author: Byron
  author_email: bslayerw@gmail.com
  author_url: ''
  date: '2012-02-04 23:58:14 -0500'
  date_gmt: '2012-02-05 04:58:14 -0500'
  content: "please post the full res versions of each conversion. Also, did you compare
    webp vs a png run through pngcrunch (which  Xcode does automatically). \r\n\r\nAdditionally,
    did you calculate the overhead decoding webP format at runtime vs png? This could
    certainly negate any wins with compression quality in certain applications."
- id: 232020
  author: Byron
  author_email: bslayerw@gmail.com
  author_url: ''
  date: '2012-02-05 00:17:57 -0500'
  date_gmt: '2012-02-05 05:17:57 -0500'
  content: One more thing... with the combination on pngcrush and the fact that your
    ipa file is actually a zip file (and therefore compressed), it's hard to imagine
    that using a compression format jpg or otherwise would reduce your applications
    size. Regardless, these fills will all take up the same amount of memory because
    they need to be decompressed. The only real use for compression is when retrieving
    these images over a network or storing them on disk.
- id: 232036
  author: dean
  author_email: dean_richey@yahoo.com
  author_url: ''
  date: '2012-02-05 04:41:33 -0500'
  date_gmt: '2012-02-05 09:41:33 -0500'
  content: There is a loss of fidelity in the full size webp images too, some differences
    in color as well but  cant tell which method did that better without the originals
- id: 232056
  author: Ralf Ebert
  author_email: info@ralfebert.de
  author_url: http://www.ralfebert.de/
  date: '2012-02-05 08:45:05 -0500'
  date_gmt: '2012-02-05 13:45:05 -0500'
  content: "Thanks for this great recipe, works great!\r\n\r\nI encountered the following
    issues, just in case anyone else stumbles upon these:\r\n\r\n1) The 5.0 iPhone
    OS had no 'cpp' binary, I just did 'ln -s llvm-cpp-4.2 cpp' to fix this (there
    has to be a better way :)\r\n\r\n2) The iPhoneSimulator build picked up jpeglib.h
    from my system's homebrew. I just uninstalled it (there has to better way :)\r\n\r\nconfigure:
    WARNING: jpeglib.h: present but cannot be compiled\r\nconfigure: WARNING: jpeglib.h:
    \    check for missing prerequisite headers?\r\n\r\n3) Example code for RGBA array
    -> UIImage:\r\n\r\nhttps://github.com/PaulSolt/UIImage-Conversion/blob/master/ImageHelper.m"
- id: 236952
  author: klq
  author_email: wer@we3r.com
  author_url: http://pngmini.com
  date: '2012-03-22 09:16:50 -0400'
  date_gmt: '2012-03-22 14:16:50 -0400'
  content: You can shrink size of PNGs too, <a href="http://imageoptim.com/tweetbot.html"
    rel="nofollow">see this case study</a>.
---

Last year Google released <a href="http://www.webmproject.org/">WebM</a> as an alternative to h264 encoded video. They followed that up with the release of <a href="http://code.google.com/speed/webp/">WebP</a> as an alternative to JPG. Ever since the release I've been thinking about giving it a try on iOS to see how well it might work to reduce application size. As a bonus to reduced size, WebP also supports an alpha channel that JPG doesn't (there is more information available on the original <a href="http://blog.chromium.org/2010/09/webp-new-image-format-for-web.html">release</a> blog post).


To follow along you will need to grab the source for WebP and compile it. The easiest way to do that is to follow the official <a href="http://code.google.com/speed/webp/docs/compiling.html">compiling WebP</a> instructions. After compiling the source you will be able to encode WebP images, later I describe how to build the same source for use with iOS.


Before trying to build a web page I did some testing to see just how easy is to handle <a href="https://www.knownhost.com/wordpress-hosting.html">wordpress hosting</a> to add pictures and videos to blog posts. I used ImageMagick to convert the source images into JPG and pushed the quality of the JPG down as far as seemed reasonable to reduce the resulting size. I tried a number of combinations but ended up using the following command to convert the JPGs:


```
convert -quality 75 -resize 1024x680 inputfile.png outputfile.jpg
```

Here are a couple samples produced using that command:


<a href="/assets/2011_06_test2.jpg"><img src="/assets/2011_06_test2.jpg" alt="Egg Carton" title="Egg Carton" width="300" height="199" class="alignnone size-medium wp-image-1485"></a>


<a href="/assets/2011_06_test9.jpg"><img src="/assets/2011_06_test9.jpg" alt="Elephants" title="Elephants" width="300" height="199" class="alignnone size-medium wp-image-1485"></a>


For WebP I made the quality 90 and encoded the same images with the following command:


```
cwebp -q 90 -resize 1024 680 inputfile.png -o outputfile.webp
```

Here are a couple example images produced using that command (at the time of this post these will only be visible using Chrome):


<a href="/assets/2011_06_test2.webp"><img src="/assets/2011_06_test2.webp" alt="Egg Carton" title="Egg Carton" width="300" height="199" class="alignnone size-medium wp-image-1485"></a>


<a href="/assets/2011_06_test9.webp"><img src="/assets/2011_06_test9.webp" alt="Elephants" title="Elephants" width="300" height="199" class="alignnone size-medium wp-image-1485"></a>

Even with the advantage I was giving the JPG images by compressing them with a lower quality I was able to get a 25% size reduction in the WebP version. Generally the JPG images would have been usable but some ended up with artifacts that would have required them to be re-encoded at a higher quality. The WebP versions ended up looking better in every case.


This was just my quick attempt to verify that it would be worth the effort of using WebP. A more in depth overview of JPG vs WebP can be found in the <a href="http://code.google.com/speed/webp/gallery.html">example gallery</a>.


With that simple test out of the way I created a script that would compile the libwebp source into a framework compatible with the iOS simulators, iPad and iPhone:


```
SDK=4.3
PLATFORMS="iPhoneSimulator iPhoneOS-V6 iPhoneOS-V7"
DEVELOPER=/Developer
TOPDIR=`pwd`
BUILDDIR="$TOPDIR/tmp"
FINALDIR="$TOPDIR/WebP.framework"
LIBLIST=''
mkdir -p $BUILDDIR
mkdir -p $FINALDIR
mkdir $FINALDIR/Headers/
for PLATFORM in ${PLATFORMS}
do
if [ "${PLATFORM}" == "iPhoneOS-V7" ]
then
PLATFORM="iPhoneOS"
ARCH="armv7"
elif [ "${PLATFORM}" == "iPhoneOS-V6" ]
then
PLATFORM="iPhoneOS"
ARCH="armv6"
else
ARCH="i386"
fi
ROOTDIR="${BUILDDIR}/${PLATFORM}-${SDK}-${ARCH}"
rm -rf "${ROOTDIR}"
mkdir -p "${ROOTDIR}"
export DEVROOT="${DEVELOPER}/Platforms/${PLATFORM}.platform/Developer"
export SDKROOT="${DEVROOT}/SDKs/${PLATFORM}${SDK}.sdk"
export CC=${DEVROOT}/usr/bin/gcc
export LD=${DEVROOT}/usr/bin/ld
export CPP=${DEVROOT}/usr/bin/cpp
export CXX=${DEVROOT}/usr/bin/g++
export AR=${DEVROOT}/usr/bin/ar
export AS=${DEVROOT}/usr/bin/as
export NM=${DEVROOT}/usr/bin/nm
export CXXCPP=$DEVROOT/usr/bin/cpp
export RANLIB=$DEVROOT/usr/bin/ranlib
export LDFLAGS="-arch ${ARCH} -pipe -no-cpp-precomp -isysroot ${SDKROOT} -L${ROOTDIR}/lib"
export CFLAGS="-arch ${ARCH} -pipe -no-cpp-precomp -isysroot ${SDKROOT} -I${ROOTDIR}/include"
export CXXFLAGS="-arch ${ARCH} -pipe -no-cpp-precomp -isysroot ${SDKROOT} -I${ROOTDIR}/include"
rm -rf libwebp-0.1.2
tar xzf libwebp-0.1.2.tar.gz
cd libwebp-0.1.2
sh autogen.sh
./configure --host=${ARCH}-apple-darwin --prefix=${ROOTDIR} --disable-shared --enable-static
make
make install
LIBLIST="${LIBLIST} ${ROOTDIR}/lib/libwebp.a"
cp -Rp ${ROOTDIR}/include/webp/* $FINALDIR/Headers/
cd ..
done
${DEVROOT}/usr/bin/lipo -create $LIBLIST -output $FINALDIR/WebP
rm -rf libwebp-0.1.2
rm -rf ${BUILDDIR}
```

The script assumes that the source for libwebp is in the same directory as the script is executed from. If you skipped the first part of the post or want to make sure you are using the same version I used then use the following curl command:


```
curl http://webp.googlecode.com/files/libwebp-0.1.2.tar.gz > libwebp-0.1.2.tar.gz
```

After you run the script you will have a WebP.framework directory that represents the library. You can use this as a framework in XCode.


Using the library is easy. The following snipit shows how to get the current WebP library version, get the width and height of an image and then read the image into a buffer:


```
// Get the current version of the WebP decoder
int rc = WebPGetDecoderVersion();
NSLog(@"Version: %d", rc);
// Get the width and height of the selected WebP image
int width = 0;
int height = 0;
WebPGetInfo([myData bytes], [myData length], &amp;width, &amp;height);
NSLog(@"Image Width: %d Image Height: %d", width, height);
// Decode the WebP image data into a RGBA value array
uint8_t *data = WebPDecodeRGBA([myData bytes], [myData length], &amp;width, &amp;height);
```

There is more documentation on the <a href="http://code.google.com/speed/webp/docs/api.html">WebP API</a> and I've put together a complete example on Github. If you grab the <a href="https://github.com/carsonmcdonald/WebP-iOS-example">WebP iOS example</a> from Github you will find the build script as well as the full example. First build the library from a command line then open the example project in XCode. If you don't first build the library before opening the project you will see that the WebP.framework is missing.


At this point you are on your way to having smaller iOS applications. There is at least one drawback at this point and that is speed. Decoding is a little slow and I think this is because the library isn't constructed to take advantage of any hardware acceleration. The next step is to see if it can be sped up by using the accelerate framework.

