---
layout: archive
status: publish
published: true
title: Building HipHop PHP for Fedora 12 on 64 bit and 32 bit Systems
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 918
wordpress_url: http://www.ioncannon.net/?p=918
date: '2010-02-23 06:14:04 -0500'
date_gmt: '2010-02-23 11:14:04 -0500'
categories:
- programming
tags:
- ec2
- Fedora
- php
- hphp
comments:
- id: 163937
  author: Matthew Heys
  author_email: matt@matt-heys.co.uk
  author_url: http://www.silveragent.co.uk
  date: '2010-02-24 16:53:12 -0500'
  date_gmt: '2010-02-24 21:53:12 -0500'
  content: "I'm not sure I fully understand.\r\n\r\nDo I write a website in PHP and
    then use HipHop to build a binary which is the equivalent of my site and a web-server
    combined?\r\n\r\nIf so do you get the C++ source code or just a binary? Would
    you be able to compile the source in Visual Studio on Windows, or is it just a
    *nix thing?"
- id: 164005
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-02-25 13:19:57 -0500'
  date_gmt: '2010-02-25 18:19:57 -0500'
  content: Yes, it is PHP turned into C++ code then compiled to a binary that has
    a built in web server. No support for Windows yet but looking at the code makes
    me think they are working on it or maybe thinking about it at least.
- id: 168723
  author: Theodore
  author_email: nielsen@madebycoil.com
  author_url: http://www.madebycoil.com
  date: '2010-04-28 02:40:45 -0400'
  date_gmt: '2010-04-28 07:40:45 -0400'
  content: "Thanks so much for the great walkthrough; I'm running this on a Parallels
    fedora 12, and perhaps this is a non-Amazon quirk, but the build failed at 87%
    because it couldn't find 'libtbb.so.2'.\r\n\r\nI had to expand the bit in that
    directory work to be:\r\n```\r\ncd tbb22_20090809oss\r\ngmake\r\ncp -Rp include/tbb/
    /usr/include/\r\ncp `pwd`/build/*_release/*.so /usr/lib/\r\n<strong>cp `pwd`/build/*_release/*.so.2
    /usr/lib/</strong>\r\nldconfig\r\ncd ..\r\n```\r\n\r\nAre there any options
    that you know of to exclude the webserver from the binary?  Or just get the c++
    to compile myself?  There are specific scripts that I want to run using ```
    and I don't need apache built-in.\r\n\r\nThanks!"
- id: 169171
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-05-03 11:36:27 -0400'
  date_gmt: '2010-05-03 16:36:27 -0400'
  content: "@Theodore I don't know if is a way to get a compiled version without the
    web server. My guess is if there isn't a way to do it right now then they will
    probably add a way at some point. I think I've seen people talking about them
    adding support for loading the resulting application as a module."
- id: 169665
  author: Chris Beaumont
  author_email: chris@foundation42.com
  author_url: ''
  date: '2010-05-11 16:36:15 -0400'
  date_gmt: '2010-05-11 21:36:15 -0400'
  content: "Sorry, I'm a linux novice but I'm trying to follow your procedures.\r\n\r\nThe
    issue is that yum is erased by the first command in the shell script:\r\n\r\nyum
    -y remove dmraid-1.0.0.rc14-4.fc8.i386 dmraid-1.0.0.rc14-4.fc8.i386 curl-7.18.2-7.fc8.i386\r\n\r\n...so
    the rest of the script breaks.  What am I missing?\r\n\r\nThanks!"
- id: 169799
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-05-13 15:12:40 -0400'
  date_gmt: '2010-05-13 20:12:40 -0400'
  content: "@chris you may try removing that line and seeing what happens. It could
    be that they have changed what is installed by default now."
- id: 169943
  author: Chris Beaumont
  author_email: chris@foundation42.com
  author_url: ''
  date: '2010-05-15 08:30:30 -0400'
  date_gmt: '2010-05-15 13:30:30 -0400'
  content: "Hey Carson,\r\n\r\nHmm, that didn't work either.  I read elsewhere that
    new EC2 images should come online around the time that Fedora 13 is released.
    \ Currently that is scheduled for around the 25th of May.  So, I think I'll wait
    a bit instead of struggling further. \r\n\r\nIn the meantime I'm making good progress
    with the Ubuntu 10.04 RC AMI.\r\n\r\nCheers"
---

Now that Facebook has finally released the source for <a href="http://github.com/facebook/hiphop-php/">HipHop PHP</a> it is time to give it a spin. Of course it is still a little rough around the edges so I figured I would toss together a quick howto on getting it to build.

The first thing to note is that they are only supporting 64 bit systems officially. Having said that it isn't too hard to modify the code to make it work on a 32 bit system although it may turn out that such early modifications are missing some fundamental bits on why they were only support 64 bit systems. I'm going to assume at first that you are using a 64 bit system and then end with what you need if you are still using a 32 bit system.

I don't actually have a 64 bit system myself so I used an EC2 instance for the following instructions. To do the same start with Amazon's Basic 64-bit Fedora Core 8 (AMI Id: ami-86db39ef) instance (note that this is EBS backed so you will end up with an EBS volume after you start it) and then upgrade to Fedora 12 using my <a href="http://www.ioncannon.net/system-administration/894/fedora-12-bootable-root-ebs-on-ec2/">previous instructions on building a EBS bootable Fedora 12 instance</a>. You will need to remove a few packages to get the 64 bit version of Fedora 8 to upgrade that I didn't have to do for the 32 bit version, here are all the commands you need to get to a running 64 bit Fedora 12 instance (the entire upgrade takes about 20 minutes):

```
# Fedora 8 to Fedora 10
yum -y remove dmraid-1.0.0.rc14-4.fc8.i386 dmraid-1.0.0.rc14-4.fc8.i386 curl-7.18.2-7.fc8.i386
yum clean all
rpm -Uhv http://archive.kernel.org/fedora-archive/releases/10/Fedora/i386/os/Packages/fedora-release-10-1.noarch.rpm http://archive.kernel.org/fedora-archive/releases/10/Fedora/i386/os/Packages/fedora-release-notes-10.0.0-1.noarch.rpm
yum -y update
# Fedora 10 to Fedora 11
yum -y remove gpm-1.20.5-2.fc10.i386
yum clean all
rpm -Uvh http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-11-1.noarch.rpm http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-notes-11.0.0-2.fc11.noarch.rpm
yum -y update
# Fedora 11 to Fedora 12
yum -y remove cryptsetup-luks-1.0.6-7.fc11.i586
yum clean all
rpm -Uvh http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-notes-12.0.0-4.fc12.noarch.rpm http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-12-1.noarch.rpm
yum -y update
# Make sure the basics are installed
yum -y install gcc-c++ git
```

To start with there are some prerequisites you need. This can be taken care of in one command with yum:

```
yum -y install git cmake boost pcre-devel libicu-devel libmcrypt-devel oniguruma-devel mysql-devel gd-devel boost-devel libxml2-devel libcap-devel binutils-devel flex bison expat-devel
```

Next create a directory to hold everything in, change into that directory and create another directory to hold the customized libraries needed to compile HipHop PHP:

```
mkdir hiphop
cd hiphop
mkdir local
```

Next it is time to pull down the HipHop PHP source along with the source for some libraries it depends on (these all go into the hiphop directory created above):

```
git clone git://github.com/facebook/hiphop-php.git
wget "http://downloads.sourceforge.net/project/re2c/re2c/0.13.5/re2c-0.13.5.tar.gz?use_mirror=cdnetworks-us-2"
wget "http://www.threadingbuildingblocks.org/uploads/77/142/2.2/tbb22_20090809oss_src.tgz"
wget http://curl.haxx.se/download/curl-7.20.0.tar.bz2
wget http://www.monkey.org/~provos/libevent-1.4.13-stable.tar.gz
tar xvjf curl-7.20.0.tar.bz2
tar xvzf libevent-1.4.13-stable.tar.gz
tar xvzf re2c-0.13.5.tar.gz
tar xvzf tbb22_20090809oss_src.tgz
```

Next the customized patches get applied to some of the library sources and each is built to install in the custom directory:

```
export CMAKE_PREFIX_PATH=`pwd`/local
cd tbb22_20090809oss
gmake
cp -Rp include/tbb/ /usr/include/
cp `pwd`/build/*_release/*.so /usr/lib/
ldconfig
cd ..
cd re2c-0.13.5
./configure --prefix=`pwd`/../local
make install
cd ..
cd libevent-1.4.13-stable
cp ../hiphop-php/src/third_party/libevent.fb-changes.diff .
patch < libevent.fb-changes.diff
./configure --prefix=`pwd`/../local
make install
cd ..
cd curl-7.20.0
cp ../hiphop-php/src/third_party/libcurl.fb-changes.diff .
patch -p0 < libcurl.fb-changes.diff
./configure --prefix=`pwd`/../local
make install
cd ..
```

There is one problem at this point that requires a little surgery on the HipHop PHP source itself. There is more about this in <a href="http://github.com/facebook/hiphop-php/issues#issue/6">issue #6</a> and once it gets fixed this won't need to be done. 

```
cd hiphop-php
echo "#ifndef LHASH" >> src/cpp/ext/ext_openssl.h
echo "#define LHASH LHASH_OF(CONF_VALUE)" >> src/cpp/ext/ext_openssl.h
echo "#endif" >> src/cpp/ext/ext_openssl.h
```

And at last it is time to compile HipHop PHP itself:

```
git submodule init
git submodule update
export HPHP_HOME=`pwd`
export HPHP_LIB=`pwd`/bin
cmake .
make
```

It takes about 20 minutes to compile everything. Once the compile is done you are ready to roll. Check out the <a href="http://wiki.github.com/facebook/hiphop-php/running-hiphop">running HipHop wiki page</a> to learn how to run the resulting binary. One important thing to note is that you need to make sure you have the correct environment variables set when you go to compile things. I created a little file I can source with the following in it:

```
export HPHP_BASE=
<path to the first directory>
export CMAKE_PREFIX_PATH=$HPHP_BASE/local
export HPHP_HOME=$HPHP_BASE/hiphop-php
export HPHP_LIB=$HPHP_HOME/bin
```

For those who just want it to go I've put all of the above into one script that can be found <a href="/examples/hiphopgo.sh">here</a>. If you are going from Fedora 8 to Fedora 12 on an EC2 node you can get a script for that <a href="/examples/64bitfedora12ec2.sh">here</a>.

Now if you want to do this on a 32 bit Fedora 12 install you will need to modify the source first. The easiest way I know of doing this is to look at <a href="http://github.com/carsonmcdonald/hiphop-php/commit/792a37cb10514178341877c1425e2f3884898645">this commit log</a> or clone my version that can be found here:

```
git clone git://github.com/carsonmcdonald/hiphop-php.git
```

Please note that my version my not be up to date and the modifications to get the source to build on the 32 bit system may not be 100% correct. My goal was to get it to build and run on a 32 bit system but I don't have the time to very much more than that.
