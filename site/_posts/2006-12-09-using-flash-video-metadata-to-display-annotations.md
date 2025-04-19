---
layout: archive
status: publish
published: true
title: Using Flash video metadata to display annotations
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 110
wordpress_url: http://www.ioncannon.net/php/110/using-flash-video-metadata-to-display-annotations/
date: '2006-12-09 15:58:30 -0500'
date_gmt: '2006-12-09 19:58:30 -0500'
categories:
- php
- web design
- utilities
tags: []
comments:
- id: 5784
  author: Deb
  author_email: deb.tech@yahoo.com
  author_url: ''
  date: '2007-03-20 03:34:10 -0400'
  date_gmt: '2007-03-20 08:34:10 -0400'
  content: "Hi,\r\n\r\nI have been trying this and getting an error as follows:\r\n\r\nParse
    error: syntax error, unexpected T_STRING in E:\\WEBHOME\\phpvideo\\file1.php on
    line 34\r\n\r\n\r\nCould you please help?\r\n\r\nRegards,\r\nDeb"
- id: 5786
  author: Deb
  author_email: deb.tech@yahoo.com
  author_url: ''
  date: '2007-03-20 03:39:04 -0400'
  date_gmt: '2007-03-20 08:39:04 -0400'
  content: "Also an another error:\r\n\r\nFatal error: Call to undefined function
    Ming_setScale() in E:\\WEBHOME\\phpvideo\\file1.php on line 29\r\n\r\nRegards,\r\nDeb"
- id: 11122
  author: Sajith.M.R
  author_email: sajithmr2005@yahoo.com
  author_url: http://mobshare.in
  date: '2007-04-08 03:39:10 -0400'
  date_gmt: '2007-04-08 08:39:10 -0400'
  content: "Hello Debs: Your first error is at line 34 is due to background color
    setting. Since you copy the whole data from browser direct to you r php editor.
    delete \r\n$movie->setBackground(0x33,0x33,0x33);\r\n\r\nline and type by hand;\r\n\r\n(since
    x in 0x33  is the problem here )\r\nthen your first problem will be solved."
- id: 11123
  author: Sajith.M.R
  author_email: sajithmr2005@yahoo.com
  author_url: http://mobshare.in
  date: '2007-04-08 03:41:44 -0400'
  date_gmt: '2007-04-08 08:41:44 -0400'
  content: "Debs, \r\n\r\nFor your second error:\r\n\r\nMake sure that  Ming Library
    is installed perfectly on your server.\r\n\r\nyou can install it by apt-get (if
    enabled)"
- id: 21254
  author: zzeroo
  author_email: co@zzeroo.com
  author_url: http://zzeroo.com
  date: '2007-06-16 16:35:15 -0400'
  date_gmt: '2007-06-16 21:35:15 -0400'
  content: "Can You help me please. I try to implement this in ruby, but I've not
    enough skills for that.\r\n\r\nI want not the complete solution. But a little
    \"scaffold\" would be fine ;)"
- id: 34277
  author: flvtool2 &laquo; Interactive Section
  author_email: ''
  author_url: http://interactivesection.wordpress.com/2007/10/30/flvtool2/
  date: '2007-10-31 01:17:02 -0400'
  date_gmt: '2007-10-31 06:17:02 -0400'
  content: "[...] flvtool2  http://www.ioncannon.net/php/110/using-flash-video-metadata-to-display-annotations/
    [...]"
---
Now that you can <a href="http://www.ioncannon.net/ruby/108/flash-video-steam-ming-php-ruby/">create a streaming Flash video player with PHP or Ruby</a> and you know <a href="http://www.ioncannon.net/web-design/109/metadata-cuepoint-flash-video-flvtool/">add metadata for cuepoints to Flash videos</a> you are ready for something else. The following code will show you how to create a video player with PHP that will watch for metadata events and display annotations contained inside the metadata either over the video itself or in a div on the same page as the movie.
<!--more-->

The first steps are to create your Flash video if you haven't already and then add the metadata to it. See my post on <a href="http://www.ioncannon.net/web-design/109/metadata-cuepoint-flash-video-flvtool/">adding cuepoint metadata with flvtool2</a> if you want to know more on how to create the Flash video and add the metadata. I'm using the same video from that post but a different set of metadata. 

Here is the metadata I've added to the video for the following examples:

```
<tags>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 1</name>
        <timestamp>4000</timestamp><parameters><mydata>Some data 1</mydata>
        </parameters>
        <type>event</type>
    </metatag>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 2</name>
        <timestamp>8000</timestamp><parameters><mydata>Some data 2</mydata>
        </parameters>
        <type>event</type>
    </metatag>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 3</name>
        <timestamp>12000</timestamp><parameters><mydata>Some data 3</mydata>
        </parameters>
        <type>event</type>
    </metatag>
    <metatag event="onCuePoint" overwrite="true">
        <name>Cue Point 4</name>
        <timestamp>16000</timestamp><parameters><mydata>Some data 4</mydata>
        </parameters>
        <type>event</type>
    </metatag>
</tags>
```
The main thing to notice here is that the <b>type</b> for each metatag is <i>event</i> and in the <b>parameters</b> list there is a tag called <b>mydata</b> that contains some text. The text inside <b>mydata</b> is what we will be using for annotations. This tag can be called anything you like and you can have more than one.

I am using icons from the <a href="http://www.famfamfam.com/lab/icons/silk/preview.php">famfamfam silk</a> collection in the following examples. You will want to download them before trying these examples. 

```
wget http://www.famfamfam.com/lab/icons/silk/icons/control_pause.png
wget http://www.famfamfam.com/lab/icons/silk/icons/control_pause_blue.png
wget http://www.famfamfam.com/lab/icons/silk/icons/control_start.png
wget http://www.famfamfam.com/lab/icons/silk/icons/control_start_blue.png
wget http://www.famfamfam.com/lab/icons/silk/icons/control_play.png
wget http://www.famfamfam.com/lab/icons/silk/icons/control_play_blue.png
```
The first example will display the annotation over the video itself. Here is the PHP code for generating the Flash player to display the annotations:

```
<?php
function createImage($img)
{
  $shape = new SWFShape();
  $shape->setRightFill($shape->addFill(new SWFBitmap(fopen($img, "rb"))));
  $shape->drawLine(16,0);
  $shape->drawLine(0,16);
  $shape->drawLine(-16,0);
  $shape->drawLine(0,-16);
  return $shape;
}

function createButton($movie, $name, $loc, $script)
{
  $button = new SWFButton();
  $button->addShape(createImage("control_" . $name . ".png"), SWFBUTTON_UP);
  $button->addShape(createImage("control_" . $name . "_blue.png"), SWFBUTTON_DOWN | SWFBUTTON_HIT | SWFBUTTON_OVER);
  $button->addAction(new SWFAction($script), SWFBUTTON_HIT);
  $item=$movie->add($button);
  $item->moveto($loc,248);
}

Ming_setScale(20.0000000);
ming_useswfversion(7);

$movie = new SWFMovie(7);
$movie->setDimension(320,270); // width x height
$movie->setBackground(0x33,0x33,0x33);
$movie->setRate(8);

createButton($movie, "start", 10, "_root.videoStream.seek(0);");
createButton($movie, "pause", 40, "_root.videoStream.pause(true);");
createButton($movie, "play", 70, "_root.videoStream.pause(false);");

$strAction = "
this.createTextField('video_txt', 999, 0, 0, 100, 100);
video_txt.autoSize = 'left';
video_txt.multiline = true;
video_txt.textColor = 0xeeeeee;

stop();
nc=new NetConnection();
nc.connect(null);
videoStream=new NetStream(nc);
videoStreamItem.attachVideo(videoStream);
videoStream.setBufferTime(10);
videoStream.play('http://localhost/test.flv');
videoStream.pause();

videoStream.onCuePoint = function(infoObject)
{
  video_txt.text = 'Name: ' + infoObject.name + '\n';
  if( infoObject.parameters != undefined )
  {
    video_txt.text += 'Info: ' + infoObject.parameters['mydata'] + '\n';
  }
  else
  {
    video_txt.text += 'Info: undef\n';
  }
};
";

$stream = new SWFVideoStream();
$stream->setDimension(320, 240);
$item=$movie->add($stream);
$item->setName("videoStreamItem");
$movie->add(new SWFAction($strAction));

$movie->nextFrame();

$movie->save("test.swf");
?>
```
The following part of the above PHP is what connects the cuepoints to the overlay text. Notice the use of the <b>mydata</b> tag. The tag data is available in the parameters hash:

```
videoStream.onCuePoint = function(infoObject)
{
  video_txt.text = 'Name: ' + infoObject.name + '\n';
  if( infoObject.parameters != undefined )
  {
    video_txt.text += 'Info: ' + infoObject.parameters['mydata'] + '\n';
  }
  else
  {
    video_txt.text += 'Info: undef\n';
  }
};
```
Here is the result (hit the play button to start the video):

<object type="application/x-shockwave-flash" data="/assets/annotation-examples/test1.swf" width="320" height="270" id="go1"><param name="movie" value="/assets/annotation-examples/test1.swf" /><param name="quality" value="high" /></object>

The following examples is the same as the above example except that it uses a javascript call to display the annotation data in a div on the page:

```
<?php
function createImage($img)
{
  $shape = new SWFShape();
  $shape->setRightFill($shape->addFill(new SWFBitmap(fopen($img, "rb"))));
  $shape->drawLine(16,0);
  $shape->drawLine(0,16);
  $shape->drawLine(-16,0);
  $shape->drawLine(0,-16);
  return $shape;
}

function createButton($movie, $name, $loc, $script)
{
  $button = new SWFButton();
  $button->addShape(createImage("control_" . $name . ".png"), SWFBUTTON_UP);
  $button->addShape(createImage("control_" . $name . "_blue.png"), SWFBUTTON_DOWN | SWFBUTTON_HIT | SWFBUTTON_OVER);
  $button->addAction(new SWFAction($script), SWFBUTTON_HIT);
  $item=$movie->add($button);
  $item->moveto($loc,248);
}

Ming_setScale(20.0000000);
ming_useswfversion(7);

$movie = new SWFMovie(7);
$movie->setDimension(320,270); // width x height
$movie->setBackground(0x33,0x33,0x33);
$movie->setRate(8);

createButton($movie, "start", 10, "_root.videoStream.seek(0);");
createButton($movie, "pause", 40, "_root.videoStream.pause(true);");
createButton($movie, "play", 70, "_root.videoStream.pause(false);");

$strAction = "
this.createTextField('video_txt', 999, 0, 0, 100, 100);
video_txt.autoSize = 'left';
video_txt.multiline = true;
video_txt.textColor = 0xeeeeee;

stop();
nc=new NetConnection();
nc.connect(null);
videoStream=new NetStream(nc);
videoStreamItem.attachVideo(videoStream);
videoStream.setBufferTime(10);
videoStream.play('http://localhost/test.flv');
videoStream.pause();

videoStream.onCuePoint = function(infoObject)
{
  if( infoObject.parameters != undefined )
  {
    geturl('javascript:aTestCall(\'' + infoObject.parameters['mydata'] + '\')');
  }
};
";

$stream = new SWFVideoStream();
$stream->setDimension(320, 240);
$item=$movie->add($stream);
$item->setName("videoStreamItem");
$movie->add(new SWFAction($strAction));

$movie->nextFrame();

$movie->save("test.swf");
?>
```
This javascript will display the data in the div (note that this won't work for all browsers, I'm just making it simple):

```
  function aTestCall(data)
  {
    document.getElementById("infoDisplayArea").innerHTML = data;
  }
```
This is how you would set up the div to display the data:

```
<div id="infoDisplayArea" style="border: solid 1px #000; padding: 5px 5px 5px 5px; width: 50%;">
No data yet...
</div>
```
Here is the result (hit the play button to start the video):

<script type="text/javascript">//<!--
function aTestCall(data){document.getElementById("infoDisplayArea").innerHTML = data;} // --></script>

<object type="application/x-shockwave-flash" data="/assets/annotation-examples/test2.swf" width="320" height="270" id="go2"><param name="movie" value="/assets/annotation-examples/test2.swf" /><param name="quality" value="high" /></object>

<div id="infoDisplayArea" style="border: solid 1px #000; padding: 5px 5px 5px 5px; width: 50%;">
No data yet...
</div>
Keep an eye on the above box while the video is playing to see the annotations.



