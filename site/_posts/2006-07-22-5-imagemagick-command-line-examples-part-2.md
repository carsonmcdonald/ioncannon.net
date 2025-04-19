---
layout: archive
status: publish
published: true
title: 5 ImageMagick command line examples part 2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 72
wordpress_url: http://www.ioncannon.net/linux/72/5-imagemagick-command-line-examples-part-2/
date: '2006-07-22 08:44:29 -0400'
date_gmt: '2006-07-22 12:44:29 -0400'
categories:
- linux
- utilities
tags: []
comments:
- id: 24
  author: Leslie Hensley
  author_email: hensleyl@papermountain.org
  author_url: http://www.papermountain.org/blog
  date: '2006-07-22 15:58:52 -0400'
  date_gmt: '2006-07-22 19:58:52 -0400'
  content: Tried using the gel technique for the buttons on my web site http://www.showerinabox.com/.  For
    example the "Start Now" button on the home page.  However the second step in your
    gel button example no longer works with recent versions of imagemagick.  But luckily
    it still looks ok with that step omitted.  What version of imagemagick are you
    using?
- id: 25
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2006-07-22 16:10:24 -0400'
  date_gmt: '2006-07-22 20:10:24 -0400'
  content: I'm using version 6.2.7 of ImageMagick. I just tried to cut and paste the
    gel examples and it looks like in firefox some of the values are being converted
    to binary. I'm going to add a link to all the examples in one script.
- id: 30
  author: Ganesh
  author_email: kbganesh86@gmail.com
  author_url: http://njiggs.blogspot.com
  date: '2006-07-28 02:38:44 -0400'
  date_gmt: '2006-07-28 06:38:44 -0400'
  content: Cool Examples again :) and the link to the tutorial site was very useful!!
    thanks a lot again :)
- id: 430
  author: How to compile ImageMagick for PHP by hand @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/php/75/how-to-compile-imagemagick-for-php-by-hand/
  date: '2006-10-31 20:33:39 -0500'
  date_gmt: '2006-11-01 00:33:39 -0500'
  content: "[...] My goal was to be able to convert a large image into a smaller one
    and have it look decent. I tried a few different approaches directly in PHP before
    I decided to see just how hard it was to do with a command line tool. I found
    that I could re-size and enhance a photos in a way that made them look pretty
    good using ImageMagick's re-size and sharpen (for more on doing this on
    the command line see my ImageMagick command line examples). [...]"
- id: 17228
  author: Mahen
  author_email: mahen3d@hotmail.com
  author_url: http://3d.mahen3d.com
  date: '2007-05-20 07:42:25 -0400'
  date_gmt: '2007-05-20 12:42:25 -0400'
  content: "Any tips to convert a command like this into the string? i am using php
    in my server \r\n\r\nCommand:\r\n-draw \"gravity south fill black text 0,36 'Copyright
    2003'\"\r\n\r\nString (?):\r\n?draw(gravity south fill black text 0,36 'Copyright
    2003')\r\n\r\nI'm having difficulties getting text into my images \r\n\r\nsee
    my scrip at \r\nhttp://www.evolt.org/article/PHP_frontend_to_ImageMagick/17/55650/index.html"
---

I've put together another 5 ImageMagick command line examples as a followup to <a href="http://www.ioncannon.net/linux/81/5-imagemagick-command-line-examples-part-1/">part 1</a>. These examples are a little more advanced and include some extra information on techniques.

I started with the following image as a base for all the examples that follow: 

<img width="500" height="375" src="/assets/magick0706/img/flower_original.jpg"/>

<b>1. Resizing an image.</b>

Resizing seems to be a very common task that people need automated. With convert you can easily write a script that resizes call images in a directory. Before you start resizing images it helps if you read <a href="http://bobatkins.com/photography/digital/digital_image_resizing.html">a howto on resizing digital images</a>. 

Example: 

```
convert flower_original.jpg -resize 640x480 flower.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower.jpg"/>

For more in depth examples of resizing check out the <a href="http://www.imagemagick.org/Usage/resize/">examples page</a> and the convert <a href="http://www.imagemagick.org/script/command-line-options.php?#resize">-resize</a> options. If you are interested in the output of the different filter types check out these <a href="http://www.dylanbeattie.net/magick/filters/result.html">examples</a> of each of them at different levels.

<b>2. Sharpening an image.</b>

Sharpening an image can bring out some details that get lost when you resize or compress an image. I came across an article about <a href="http://www.cameronmoll.com/archives/000169.html">using sharpen</a> to make a picture look better and went off to find a way to reproduce the results with ImageMagick. It wasn't easy but I found another article on <a href="http://redskiesatnight.com/Articles/IMsharpen/">sharpening with ImageMagick</a>. I have found the following command works the best:

Example: 

```
convert flower.jpg -unsharp 1.5x1.0+1.5+0.02 flower_unsharp.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_unsharp.jpg"/>

For more information on sharpening see <a href="http://www.imagemagick.org/Usage/convolve/">this example page</a> and the <a href="http://www.imagemagick.org/script/command-line-options.php?#unsharp">-unsharp</a> option.

<b>3. Changing image formats</b>

ImageMagick supports a wide range of image formats and you can use convert to change one format into another. Some formats have optional commands that can be given to change the output. An example of that would be png and jpg quality. 

Example (jpg to png): 

```
convert flower.jpg -quality 95 flower_quality.png
```

Produces: 

<img src="/assets/magick0706/img/flower_quality.png"/>

Example: (jpg to jpg - lower quality): 

```
convert flower.jpg -quality 80% flower_quality.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_quality.jpg"/>

PNGs have a different type of quality setting than JPGs. You can read more about the different options on the <a href="http://www.imagemagick.org/Usage/formats/">example page</a> or the <a href="http://www.imagemagick.org/script/command-line-options.php?#quality">-quality</a> option.

<b>4. Adding a raised border</b>   

Adding a frame around an image can come in handy. With ImageMagick there is nothing to it.

Example (simple raised border): 

```
convert flower.jpg -frame 6x6+2+2 flower_frame1.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_frame1.jpg"/>

Example (raised with annotation): 

```
convert flower.jpg -mattecolor grey -background grey -frame 3x3+0+3 -gravity South -splice 0x15 -annotate 0x0 'Flower' -frame 6x6+3+0 flower_frame2.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_frame2.jpg"/>

To see all the options you have with frames see <a href="http://www.imagemagick.org/Usage/crop/#frame">the examples</a>.

<b>5. Buttons</b>

This example shows how to make "gel" buttons. It could be modified to make buttons for a website.

Example: 


```
convert -size 100x60 xc:none -fill red -draw 'circle 25,30 10,30' \
-draw 'circle 75,30 90,30' -draw 'rectangle 25,15 75,45' gel_shape.png
```

Produces: 

<img src="/assets/magick0706/img/gel_shape.png"/>

Example: 

```
convert gel_shape.png \( +clone -fx A +matte  -blur 0x12  -shade 110x0 -normalize \
-sigmoidal-contrast 16,60% -evaluate Multiply .5 -roll +5+10 +clone -compose Screen -composite \) \
-matte -compose In -composite gel_highlight.png
```

Produces: 

<img src="/assets/magick0706/img/gel_highlight.png"/>

Example: 

```
convert gel_highlight.png \( +clone -fx A  +matte -blur 0x2  -shade 0x90 -normalize \
-blur 0x2  -negate -evaluate multiply .4 -negate -roll -.5-1 +clone  -compose Multiply -composite \) \
-matte -compose In -composite gel_border.png
```
Produces: 

<img src="/assets/magick0706/img/gel_border.png"/>

Example: 

```
convert gel_border.png -font AvantGarde-Book -pointsize 24 -fill white \
-gravity Center -annotate 0 "Gel" -trim +repage -bordercolor none -border 4  \
\( +clone -background navy -shadow 80x4+4+4 \) +swap -background none -flatten gel_button.png
```

Produces: 

<img src="/assets/magick0706/img/gel_button.png"/>

See this <a href="http://www.imagemagick.org/Usage/advanced/#gel_effects">example</a> for more information. 

If you are interested here is a link to <a href="/assets/magick0706/all.sh">all the examples in one file</a>.



