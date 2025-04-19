---
layout: archive
status: publish
published: true
title: How to build FlowPlayer from source
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 112
wordpress_url: http://www.ioncannon.net/web-design/112/how-to-build-flowplayer-from-source/
date: '2006-12-30 14:29:28 -0500'
date_gmt: '2006-12-30 19:29:28 -0500'
categories:
- programming
tags:
- flash
- FlowPlayer
comments:
- id: 1625
  author: Anssi
  author_email: api@iki.fi
  author_url: http://flowplayer.sourceforge.net
  date: '2007-01-06 05:13:41 -0500'
  date_gmt: '2007-01-06 10:13:41 -0500'
  content: "This is really good information.\r\n\r\nNote that currently the CVS HEAD
    branch contains sources that are being ported to ActionScript 3.0. This effort
    is currently in progress and you need different tools for building it.\r\n\r\nThe
    sources that correspond to the insctructions presented here must be checked out
    from  fixes_1_11 branch:\r\n\r\ncvs -d:pserver:anonymous@flowplayer.cvs.sourceforge.net:/cvsroot/flowplayer
    co -r fixes_1_11 -P flowplayer\r\n\r\n// Anssi"
- id: 21700
  author: Federico
  author_email: federico@galassi.net
  author_url: ''
  date: '2007-06-20 03:04:31 -0400'
  date_gmt: '2007-06-20 08:04:31 -0400'
  content: As of june 2007, swfmill has released 0.2.12 which will lead to a successfull
    build but to a broken swf as well. Stick to swfmill 0.2.11.
- id: 39428
  author: Kevin
  author_email: kztang@yahoo.com
  author_url: ''
  date: '2007-12-09 20:04:56 -0500'
  date_gmt: '2007-12-10 01:04:56 -0500'
  content: "Very good instruction.  I tried to digg it, but the site tells me \"topic
    is invalid\".  Ain't getting it.  Maybe I just can't dig a thing.\r\n\r\nOn the
    subject of swfmill version, the readme file from flowplayer said the same thing,
    that swfmill 0.2.12 does not work.  But I am NOT able to build it at all with
    swfmill 0.2.11, but only with 0.2.12; with the rest following exactly as above.
    \ I am wondering if it has to do with libxlt version.  Here are mine:\r\n\r\nlibxslt.i386
    \                            1.1.21-1.fc6           installed       \r\nlibxslt-devel.i386
    \                      1.1.21-1.fc6           installed"
- id: 52005
  author: Deb
  author_email: debdarsan.niyogi@tcs.com
  author_url: ''
  date: '2008-02-19 04:17:03 -0500'
  date_gmt: '2008-02-19 09:17:03 -0500'
  content: "Getting an error aroung \"alert\" for the function function fpCuePoint(data)\r\n{\r\n
    \ alert(data);\r\n}\r\nwhile building. Could you please let me know the reason?"
- id: 60063
  author: 2fkd &raquo; Blog Archive &raquo; Building FlowPlayer from Source on Mac
    OS X
  author_email: ''
  author_url: http://2fkd.com/2008/03/25/building-flowplayer-from-source-on-mac-os-x/
  date: '2008-03-26 00:19:28 -0400'
  date_gmt: '2008-03-26 05:19:28 -0400'
  content: "[...] This is tangential, but I'm noting it because I'm publishing
    this simply because I figured it out and there isn't a lot of good information
    out there to this effect.&Acirc;&nbsp; These instructions are based on a somewhat
    outdated post I found that didn't make an OS-distinction and turned out
    not to work as written on Macs. [...]"
- id: 95680
  author: greg
  author_email: greg@claranet.fr
  author_url: ''
  date: '2008-09-03 08:05:16 -0400'
  date_gmt: '2008-09-03 13:05:16 -0400'
  content: "Answering \"deb\" at February 19th, 2008 at 4:17 am:\r\n\r\nthis function
    is a sample javascript callback, it should be in your webpage, not in Flowplayer"
- id: 110226
  author: tan123
  author_email: soitocmauden@yahoo.com
  author_url: http://hanoimuathu111003.googlepages.com
  date: '2008-12-03 22:13:11 -0500'
  date_gmt: '2008-12-04 03:13:11 -0500'
  content: "Could you guide me build FlowPlayer 3.0.0 from source?\r\n\r\nI use cygwin,
    java 6, apache ant 1.7.0 and Flex SDK 3 on Window \r\n\r\nI encountered these
    errors, one can point me in the right direction?\r\n\r\n\r\n$ant\r\nBuildfile:
    build.xml\r\n\r\ncheck-uptodate:\r\n\t[echo] main up-to-date: ${uptodate.main}\r\n\t[echo]
    main up-to-date: ${uptodate.commercial}\r\n\t[echo] lib up-to-date: ${uptodate.lib}\r\n\r\nbuild-lib:\r\n\r\nprepare:\r\n\r\ncompile-lib:\r\n\t[exec]
    Loading configuration file C:\\flowplayer\\flex_sdk_3\\frameworks\\flexconfig.xml\r\n\t[copy]
    Copying 1 file to C:\\flowplayer\\bild\r\n\t[copy] Copying 1 file to C:\\flowplayer.devkit\r\n\r\nplugins:\r\n\t[subant]
    No sub-builds to iterate on\r\n\r\nbuild:\r\n\r\nprepare:\r\n\r\ncompile:\r\n\t[echo]
    Building binary flowplayer.swf\r\n\t[exec] command line: Error: configuration
    variable 'compiler.define' expected 2 argument(s), got 1\r\n\t[exec] Adobe Compc
    (Flex Component Compiler)\r\n\t[exec]\r\n\t[exec] Use 'mxmlc -help' for information
    about using the command line.\r\n\t[exec] Result: 1\r\n\r\nBUILD FAILED\r\nC:\\flowplayer\\build.xml:64:
    The following error occurred while executing this line:\r\nC:\\flowplayer\\build.xml:78:
    Warning: Could not find file C:\\flowplayer\\build\\flowplayer.swf to copy.\r\n\r\nTotal
    time: 25 second\r\n\r\n\r\nThanks for all the help!"
- id: 125797
  author: Roland Mai
  author_email: roland.mai@gmail.com
  author_url: http://rolandmai.com/
  date: '2009-03-06 17:35:17 -0500'
  date_gmt: '2009-03-06 22:35:17 -0500'
  content: Build succeeded. Thanks. I had to download asunit and flowplayer.devkit
    but there was no problem.
- id: 158753
  author: T
  author_email: t@t.com
  author_url: ''
  date: '2009-12-09 23:20:08 -0500'
  date_gmt: '2009-12-10 04:20:08 -0500'
  content: "These instructions  are working 12/09.  Grab latest files from SVN.  Works
    better than trying to use files from src zip files.  \r\nhttp://flowplayer.org/documentation/developer/development-environment.html\r\n\r\n(Note
    on this tutorial, you'll need to check out the extra control, content, etc, subfolders
    from SVN as well)"
---
I have mentioned the <a href="http://flowplayer.sourceforge.net/">free open source flash video player FlowPlayer</a> before in my post about <a href="http://www.ioncannon.net/web-design/109/metadata-cuepoint-flash-video-flvtool/">adding cuepoints</a> and <a href="http://www.ioncannon.net/linux/105/create-flash-videos-ffmpeg/">create flash videos</a>. It is a great free flash video player that you can modify yourself. After writing about <a href="http://www.ioncannon.net/php/110/using-flash-video-metadata-to-display-annotations/">adding  metadata to your flash videos</a> I decided to add support for calling javascript from FlowPlayer one cue events. The first step to modifying the FlowPlayer source is to be able to build FlowPlayer from source.


FlowPlayer is created using a number of different open source Flash tools. Here is a list of the tools you will need:

<ul>
<li><a href="http://ant.apache.org/">Ant</a>  - This is used to build the source. It along with a few of the other packages require java to run.</li>
<li><a href="http://sourceforge.net/projects/as2lib/">AS2Ant</a> - An AS2Lib build tool.</li>
<li><a href="http://sourceforge.net/projects/as2lib/">AS2Lib</a> - An ActionScript 2.0 application framework.</li>
<li><a href="http://swfmill.org/">SWFMill</a> - Creates SWF files from XML definitions.</li>
<li><a href="http://www.mtasc.org/">MTASC</a> - An open source Actionscript compiler.</li>
<li><a href="http://www.luminicbox.com/blog/default.aspx?page=post&id=2">luminicbox.log</a> - A logging framework for Actionscript.</li>
</ul>
If you want to find out more about these tools you can use <a href="http://www.osflash.org/">osflash.org as a great open source flash resource</a>.

Now that you know what you need it is time to get the source. You can either check it out from the <a href="http://sourceforge.net/cvs/?group_id=133868">FlowPlayer CVS</a> repo or download the <a href="http://sourceforge.net/project/showfiles.php?group_id=133868&package_id=146998">FlowPlayer source distribution</a>.

The following shows how I went about gather all the tools and source for the build. I assume here that you have java already installed.

```
cd /tmp/
mkdir flowplayer
cd flowplayer

wget http://apache.mirrors.tds.net/ant/binaries/apache-ant-1.7.0-bin.tar.gz
tar xvzf apache-ant-1.7.0-bin.tar.gz
export ANT_HOME=/tmp/flowplayer/apache-ant-1.7.0/

mkdir aux
cd aux

wget http://umn.dl.sourceforge.net/sourceforge/as2lib/as2ant_2.2.zip
mkdir as2ant
cd as2ant
unzip ../as2ant_2.2.zip
cd ..

wget http://umn.dl.sourceforge.net/sourceforge/as2lib/as2lib_0.9.3_with_dependencies.zip
mkdir as2lib
cd as2lib
unzip ../as2lib_0.9.3_with_dependencies.zip
cd ..

wget http://swfmill.org/releases/swfmill-0.2.11.tar.gz
tar xvzf swfmill-0.2.11.tar.gz
cd swfmill-0.2.11
./configure
make
cd ..

wget http://www.mtasc.org/zip/mtasc-1.12-linux.tgz
mkdir mtasc
cd mtasc
tar xvzf ../mtasc-1.12-linux.tgz
sed -i '/function onStatus/ i\  function onCuePoint(info:Object):Void;' std/NetStream.as
cd ..

wget http://www.luminicbox.com/dev/flash/log/luminicbox.log.zip
unzip luminicbox.log.zip

cd ..

cvs -d:pserver:anonymous@flowplayer.cvs.sourceforge.net:/cvsroot/flowplayer login
cvs -z3 -d:pserver:anonymous@flowplayer.cvs.sourceforge.net:/cvsroot/flowplayer co -P flowplayer

cd flowplayer
```
Now you have everything you need to build FlowPlayer and you are in the flowplayer source directory. The next step is to change the build.properties file to point to your build tools. If you have followed the above procedure here is a build.properties file that will work:

```
AS2ANT_LIB=../aux/as2ant/as2ant.jar
LUMINICBOX_DIR=../aux/LB.Log
AS2LIB_SRC_DIR=../aux/as2lib/src

// plug-in classes for as2lib unit test and asunit to be used with the unit test task
AS2ANT_UNITTEST_DIR=../aux/as2ant/flash
ASUNIT_DIR=../aux/asunit/as25
UNITTEST_FLASHPLAYER=

STD_LIB=../aux/mtasc/std
STD8_LIB=../aux/mtasc/std8
MTASC_BIN=../aux/mtasc/mtasc
SWFMILL_BIN=../aux/swfmill-0.2.11/src/swfmill

// Uncomment following if you want to copy the files to some dir after building
//DEPLOY_DIR=../flowplayer-web/video
```
After modifying the build.properties file you are ready to build.

```
/tmp/flowplayer/apache-ant-1.7.0/bin/ant
```
After the build is complete you will find FlowPlayer in the build directory ready to be used. 

Now that you can build FlowPlayer lets modify it so a javascript function gets called when a cuepoint is hit. To do that you will need to edit the file:
src/actionscript/org/flowplayer/FLVController.as

Add the following to the import section:

```
import flash.external.ExternalInterface;
```
Now find the line in the same file that defines the cuePointCallback function, search for "function cuePointCallback" and add the following line after the function definition:

```
ExternalInterface.call("fpCuePoint", cuePointInfo.parameters.mydata);
```
The above assumes the parameter you want to pass to your function is called "mydata" in your cuepoint. You can then define the javascript function in the page and retreive the data as each cuepoint is hit.

```
function fpCuePoint(data)
{
  alert(data);
}
```


