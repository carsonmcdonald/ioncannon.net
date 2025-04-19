---
layout: archive
status: publish
published: true
title: PHP ImageMagick MagickWand Examples
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 61
wordpress_url: http://www.ioncannon.net/php/61/php-imagemagick-magickwand-examples/
date: '2006-11-23 10:11:16 -0500'
date_gmt: '2006-11-23 14:11:16 -0500'
categories:
- php
tags: []
comments:
- id: 51979
  author: Kiran
  author_email: kirank_clarion@hotmail.com
  author_url: ''
  date: '2008-02-19 02:07:38 -0500'
  date_gmt: '2008-02-19 07:07:38 -0500'
  content: I want to add some php magickwand fucntion for sharpening an image. I tried
    with MagickUnsharpMaskImage but am not able to get proper combinations to be used
    for the 3 parameters of raduis,amount and threshold. Please anyone suggest me
    the solution.
- id: 143678
  author: Mike Fulton
  author_email: mike@fultonsoft.com
  author_url: http://www.fultonsoft.com
  date: '2009-07-19 14:24:52 -0400'
  date_gmt: '2009-07-19 19:24:52 -0400'
  content: "I got all excited about the MagickWand for PHP library... then I discovered
    that it needed to be installed as a PHP extension.  My sites are on a shared hosting
    setup, so I don't have any way to install additional PHP extensions.\r\n\r\n.cry\r\n\r\nI
    guess to do what I want, I'm gonna have to write a C program and use the original
    MagickWand library with that.  Fortunately, I do have SSH access and can compile
    things on the server."
---
A while back I explained <a href="http://www.ioncannon.net/php/75/how-to-compile-imagemagick-for-php-by-hand/">how to compile the ImageMagick extension for PHP</a> and this past week I got around to creating some example code to make some of the command line examples I have in <a href="http://www.ioncannon.net/linux/81/5-imagemagick-command-line-examples-part-1/">ImageMagick command line examples part 1</a> and <a href="http://www.ioncannon.net/linux/72/5-imagemagick-command-line-examples-part-2/">ImageMagick command line examples part 2</a>.
<!--more-->

The first step of course is to make sure the MagickWand extension is installed. You will want to verify that it is listed in a phpinfo() call before trying any of these examples. After verifying that you have the extension installed you might want to read an <a href="http://www.sitepoint.com/article/dynamic-images-imagemagick">introduction to using MagickWand</a> before looking at these examples. And of course you will want to know where the <a href="http://www.bitweaver.org/doc/magickwand/index.html">MagickWand reference documentation</a> is once you are ready to try more.

For more information on the options used in these examples it is best to look at their corresponding command line example.

<h2>Example 1: Simple Annotate</h2>
```
<?php

// convert flower.jpg -font courier -fill white -pointsize 20 -annotate +50+50 Flower flower_annotate1.jpg

$resource = NewMagickWand();
$dwand = NewDrawingWand();
$pwand = NewPixelWand();

PixelSetColor($pwand, "white");
DrawSetFont($dwand, "/usr/share/fonts/default/TrueType/cour.ttf");
DrawSetFontSize($dwand, 20);
DrawSetFillColor($dwand, $pwand);

MagickReadImage( $resource, 'small_flower.jpg' );

if( MagickAnnotateImage( $resource, $dwand, 0, 0, 0, "Flower" ) )
{
  header( 'Content-Type: image/gif' );
  MagickEchoImageBlob( $resource );
}
else
{
  echo MagickGetExceptionString($resource);
}

?>
```
One note on the above is that I needed to specify the exact location of the font to get it to show up. I believe this isn't always needed but if you try to leave it out and nothing shows up you should try specifying the full path to the font.

<h2>Example 2: Complex Annotate</h2>
```
<?php

// convert flower.jpg -fill white -box "#00770080" -gravity South -pointsize 20 -annotate +0+5 "   Flower  " flower_annotate2.jpg

$resource = NewMagickWand();
$dwand = NewDrawingWand();
$pwand = NewPixelWand();

PixelSetColor($pwand, "white");
DrawSetFont($dwand, "/usr/share/fonts/default/TrueType/cour.ttf");
DrawSetFontSize($dwand, 20);
DrawSetFillColor($dwand, $pwand);

DrawSetGravity($dwand, MW_SouthGravity);

MagickReadImage( $resource, 'small_flower.jpg' );

if( MagickAnnotateImage( $resource, $dwand, 0, 0, 0, "Flower" ) )
{
  header( 'Content-Type: image/gif' );
  MagickEchoImageBlob( $resource );
}
else
{
  echo MagickGetExceptionString($resource);
}

?>
```
<h2>Example 3: Crop an Area</h2>
```
<?php

// convert flower.jpg -crop 128x128+50+50 flower_crop.jpg

$resource = NewMagickWand();

MagickReadImage( $resource, 'small_flower.jpg' );

if( MagickCropImage( $resource, 128, 128, 50, 50 ) )
{
  header( 'Content-Type: image/gif' );
  MagickEchoImageBlob( $resource );
}
else
{
  echo MagickGetExceptionString($resource);
}

?>
```
<h2>Example 4: Rotate</h2>
```
<?php

// convert flower.jpg -rotate 45 flower_rotate45.jpg

$resource = NewMagickWand();
MagickReadImage( $resource, 'small_flower.jpg' );

MagickRotateImage( $resource, null, 45 );

header( 'Content-Type: image/gif' );
MagickEchoImageBlob( $resource );

?>
```
<h2>Example 5: Resize</h2>
```
<?php

// convert flower_original.jpg -resize 640x480 flower.jpg

$resource = NewMagickWand();
MagickReadImage( $resource, 'small_flower.jpg' );

MagickResizeImage( $resource, 100, 100, MW_QuadraticFilter, 1.0 );

header( 'Content-Type: image/gif' );
MagickEchoImageBlob( $resource );

?>
```
<h2>Example 6: Apply Resharp Filter</h2>
```
<?php

// convert flower.jpg -unsharp 1.5x1.0+1.5+0.02 flower_unsharp.jpg

$resource = NewMagickWand();
MagickReadImage( $resource, 'small_flower.jpg' );

MagickUnsharpMaskImage( $resource, 1.5, 1.0, 1.5, 0.02 );

header( 'Content-Type: image/gif' );
MagickEchoImageBlob( $resource );

?>
```
<h2>Example 7: Compress JPG</h2>
```
<?php

// convert flower.jpg -quality 80% flower_quality.jpg

$resource = NewMagickWand();
MagickReadImage( $resource, 'small_flower.jpg' );

MagickSetFormat($resource, 'JPG');
MagickSetImageCompression($resource, MW_JPEGCompression);
MagickSetImageCompressionQuality($resource, 80.0);

header( 'Content-Type: image/gif' );
MagickEchoImageBlob( $resource );

?>
```


