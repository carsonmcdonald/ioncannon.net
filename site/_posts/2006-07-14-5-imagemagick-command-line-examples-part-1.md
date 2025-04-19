---
layout: archive
status: publish
published: true
title: 5 ImageMagick command line examples - part 1
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 81
wordpress_url: http://www.ioncannon.net/linux/81/5-imagemagick-command-line-examples-part-1/
date: '2006-07-14 22:20:54 -0400'
date_gmt: '2006-07-15 02:20:54 -0400'
categories:
- linux
- utilities
tags: []
comments:
- id: 11
  author: Tony Perrie
  author_email: hoyhoy@gmail.com
  author_url: http://involution.com
  date: '2006-07-15 12:45:36 -0400'
  date_gmt: '2006-07-15 16:45:36 -0400'
  content: Hmmm, I always used "mogrify" for resizing images.
- id: 13
  author: Ganesh
  author_email: kbganesh86@gmail.com
  author_url: http://www.njiggs.be
  date: '2006-07-17 04:02:31 -0400'
  date_gmt: '2006-07-17 08:02:31 -0400'
  content: "Interesting tutorial and nice examples! Looking forward to part 2...\r\n\r\n@Tony:
    If i am not mistaken, mogrify is indeed a part of the imagemagick suite :)"
- id: 18
  author: dajomu
  author_email: dmuren@start.no
  author_url: http://none
  date: '2006-07-19 03:11:55 -0400'
  date_gmt: '2006-07-19 07:11:55 -0400'
  content: "How can I optimize a jpg file? keep the aspect ratio i.e. 800x600 but
    reduce the file size only.\r\nMicrosoft has a image resize utility for this,  but
    I would like to use Linux and the CLI if possible."
- id: 19
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2006-07-19 09:15:47 -0400'
  date_gmt: '2006-07-19 13:15:47 -0400'
  content: You can use mogrify http://www.imagemagick.org/script/mogrify.php to resize
    and then use the -quality flag to change to reduce the size. I'll have the 2nd
    set of examples up soon and go into it more.
- id: 22
  author: 5 ImageMagick command line examples part 2 @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/linux/72/5-imagemagick-command-line-examples-part-2/
  date: '2006-07-22 08:44:44 -0400'
  date_gmt: '2006-07-22 12:44:44 -0400'
  content: "[...] I've put together another 5 ImageMagick command line examples
    as a followup to part 1. These examples are a little more advanced and include
    some extra information on techniques. [...]"
- id: 233
  author: Ankit
  author_email: ankit_mishra20@yahoo.co.in
  author_url: ''
  date: '2006-09-25 07:15:52 -0400'
  date_gmt: '2006-09-25 11:15:52 -0400'
  content: why use the command mode....why not GIMP!!!
- id: 251
  author: dhruv
  author_email: dhruvthecreator@yahoo.com
  author_url: ''
  date: '2006-09-27 06:45:28 -0400'
  date_gmt: '2006-09-27 10:45:28 -0400'
  content: why use the gimp at all in the first place?? we got better options like
    photoshop and photomagik at our disposal... moreover using linux has proven to
    be a pain this far
- id: 253
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2006-09-27 08:32:30 -0400'
  date_gmt: '2006-09-27 12:32:30 -0400'
  content: If you are comfortable putting gimp or photoshop in a script then I would
    think that would be fine. A lot of people need to be able to script or otherwise
    call image manipulation programs to do their hard work.
- id: 21330
  author: Eric
  author_email: eri4c@mailinator.com
  author_url: ''
  date: '2007-06-17 10:02:23 -0400'
  date_gmt: '2007-06-17 15:02:23 -0400'
  content: If you need to do LOTS of image conversions you need a script. For example,
    right I have 1705 GIF screenshots (pages of a book) which I want to optimize and
    convert to JPEG so I can then put it a single DJVU file (like PDF but more efficient).
    Try converting 1705 files without a script...
- id: 22036
  author: wander
  author_email: wdr@zephyrus.com.br
  author_url: ''
  date: '2007-06-22 20:51:41 -0400'
  date_gmt: '2007-06-23 01:51:41 -0400'
  content: "if I have 2 images of the same size and I need to sum each pixel  like
    this.\r\n\r\nimage 1 pixel i r=50 g=30 b=100\r\nimage 2 pixel i r=150 g=90 b=10\r\n\r\nhow
    I can get a result image like this:\r\nimage pixel i r=200 g=120 b=110"
- id: 29021
  author: wikifun
  author_email: maymoonshine@yahoo.com
  author_url: ''
  date: '2007-09-16 19:51:17 -0400'
  date_gmt: '2007-09-17 00:51:17 -0400'
  content: "hi. Thanks for this. I was looking for something like that. However when
    I tried some of the scripts linux came back with an error. For example, the first
    two commands worked. But it did not accept 128&Atilde;&mdash;128+50+50  Everytime
    I wrote a command that had that or anything more than the 50+50 it gave me an
    error. Any idea what the reason for this is?\r\nThanks."
- id: 41592
  author: Armin Theissen
  author_email: theissen@mps.mpg.de
  author_url: ''
  date: '2007-12-29 09:41:15 -0500'
  date_gmt: '2007-12-29 14:41:15 -0500'
  content: "Hi - I wanted to rotate an image by 90 degrees from the \r\ncommand line,
    but 'convert -rotate' will decrease the \r\nimage quality a bit. Any alternative?
    \r\nThe reason for the quality loss is probably due to some \r\nreal calculations
    (sines, cosines) in a transform matrix, but \r\nfor 90/180/270 deg rotations you
    would just need to \r\nswap pixels..."
- id: 114460
  author: Anthony Thyssen
  author_email: A.Thyssen@griffith.edu.au
  author_url: http://www.imagemagick.org/Usage/
  date: '2009-01-09 23:00:41 -0500'
  date_gmt: '2009-01-10 04:00:41 -0500'
  content: The 'animation' link is wrong, and has been for a long time.  Animation
    in IM examples is now in three sections (there is a lot of info and techniques).  I
    suggest you visit the primary source site for more detail, and techniques about
    any of these examples http://www.imagemagick.org/Usage/
- id: 161906
  author: Kathy
  author_email: kathrynm@cs.oregonian.com
  author_url: http://biz.oregonain.com
  date: '2010-01-27 17:52:55 -0500'
  date_gmt: '2010-01-27 22:52:55 -0500'
  content: "I have an issue with a PDF being optimized. what I'm doing right now is
    \r\nexec(\"/usr/bin/convert uploads/$newName.pdf -resize 200x200 uploads/$newName.jpg\");
    \ it works for all PDF's that are not optimized. How can I have this work for
    them too!"
---

If you have ever wanted to manipulate images under linux you probably have used <a href="http://www.gimp.org/">Gimp</a>. This isn't your only option and if you want to do things from the command line a better option is to use <a href="http://www.imagemagick.org/">ImageMagick</a>'s convert utility. 

I've put together 5 simple command line examples that I have found useful. This is just a sample of what you can do with convert. To see more examples and get more explanation of options see: <a href="http://www.imagemagick.org/Usage/">ImageMagick v6 Examples</a>.

I started with the following image as a base for all the examples that follow: 

<img width="500" height="375" src="/assets/magick0706/img/flower_original.jpg"/>

<b>1. Text annotations</b>

Example (simple text in static location): 

```
convert flower.jpg -font courier -fill white -pointsize 20 -annotate +50+50 'Flower' flower_annotate1.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_annotate1.jpg"/>

Example (text with background at bottom): 

```
convert flower.jpg -fill white -box '#00770080' -gravity South -pointsize 20 -annotate +0+5 '   Flower  ' flower_annotate2.jpg
```

Produces:

<img src="/assets/magick0706/img/flower_annotate2.jpg"/>

Look at <a href="http://www.imagemagick.org/Usage/annotating/">these examples</a> to see more.

<b>2. Cropping an image</b>

Example: 

```
convert flower.jpg -crop 128x128+50+50 flower_crop.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_crop.jpg"/>

Look at <a href="http://www.imagemagick.org/Usage/crop/#crop">these examples</a> or <a href="http://www.imagemagick.org/script/command-line-options.php?#crop">-crop</a> for more information.

<b>3. Rotate an image</b>

Example: 

```
convert flower.jpg -rotate 45 flower_rotate45.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_rotate45.jpg"/>

Look at <a href="http://www.imagemagick.org/Usage/transform/">these examples</a> or <a href="http://www.imagemagick.org/script/command-line-options.php?#rotate">-rotate</a> for more information.

<b>4. Image montage</b>

Example: 

```
montage flower.jpg flower_unsharp.jpg -geometry '300x200+20+20' flower_montage.jpg
```

Produces: 

<img src="/assets/magick0706/img/flower_montage.jpg"/>

Look at <a href="http://www.imagemagick.org/Usage/montage/">these examples</a> to see more.

<b>5. Animation</b>

Example: 

```
convert flower.jpg -resize 100x100 -font courier -fill white -pointsize 20 -annotate +50+50 'Frame 1' flower_frame1.gif
convert flower.jpg -resize 100x100 -font courier -fill white -pointsize 20 -annotate +50+50 'Frame 2' flower_frame2.gif
convert flower.jpg -resize 100x100 -font courier -fill white -pointsize 20 -annotate +50+50 'Frame 3' flower_frame3.gif
convert flower.jpg -resize 100x100 -font courier -fill white -pointsize 20 -annotate +50+50 'Frame 4' flower_frame4.gif
convert -delay 100 -size 100x100 \
   -page +0+0 flower_frame1.gif \
   -page +0+0 flower_frame2.gif \
   -page +0+0 flower_frame3.gif \
   -page +0+0 flower_frame4.gif \
   -loop 0 flower_animation.gif
```

Produces: 

<img src="/assets/magick0706/img/flower_animation.gif"/>

Look at <a href="http://www.imagemagick.org/Usage/anim_basics/">these examples</a>, <a href="http://www.imagemagick.org/Usage/anim_mods/">these examples</a>, or <a href="http://www.imagemagick.org/Usage/anim_opt/">these examples</a> for more information.

<b>Summary</b>

That is it for now. Part 2 should be up soon.


