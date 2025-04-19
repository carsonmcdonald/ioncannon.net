---
layout: archive
status: publish
published: true
title: How to compile ImageMagick for PHP by hand
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 75
wordpress_url: http://www.ioncannon.net/php/75/how-to-compile-imagemagick-for-php-by-hand/
date: '2006-10-31 20:33:34 -0500'
date_gmt: '2006-11-01 00:33:34 -0500'
categories:
- php
- web design
tags: []
comments:
- id: 629
  author: PHP ImageMagick MagickWand Examples @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/php/61/php-imagemagick-magickwand-examples/
  date: '2006-11-23 10:11:22 -0500'
  date_gmt: '2006-11-23 14:11:22 -0500'
  content: "[...] A while back I explained how to compile the ImageMagick extension
    for PHP and this past week I got around to creating some example code to make
    some of the command line examples I have in ImageMagick command line examples
    part 1 and ImageMagick command line examples part 2. [...]"
- id: 8509
  author: paco
  author_email: khoulibeut_khalibeut@yahoo.fr
  author_url: ''
  date: '2007-03-29 13:08:35 -0400'
  date_gmt: '2007-03-29 18:08:35 -0400'
  content: "hy,I tray to install magickwand with the extension DLL,I can see that
    the extension is enable, but in my phpinfo() I don't see it.\r\nI need help"
- id: 69264
  author: bernard
  author_email: bernardfeb2@yahoo.com
  author_url: ''
  date: '2008-05-19 09:37:13 -0400'
  date_gmt: '2008-05-19 14:37:13 -0400'
  content: "just downloaded imagemagick and I do not know what to do next.  Could
    someone be kind enough to expalin the complilation process to me.  I will passs
    the info along the next time I see a similar request in a forum.\r\n               Thank"
---

Some time ago I was looking at how to re-size uploaded images in a way that looks good using PHP. I was impressed that when I uploaded a 4M picture to flickr it managed to re-size and compress it into a smaller version that looked correct. I knew they weren't just resizing it so I went on a quest to find out what it took to do the same thing with PHP. The following is step one in that process.

My goal was to be able to convert a large image into a smaller one and have it look decent. I tried a few different approaches directly in PHP before I decided to see just how hard it was to do with a command line tool. I found that I could re-size and enhance a photos in a way that made them look pretty good using ImageMagick's re-size and sharpen (for more on doing this on the command line see my <a href="http://www.ioncannon.net/linux/72/5-imagemagick-command-line-examples-part-2/">ImageMagick command line examples</a>). 

At this point I started looking into how to translate what I did on the command line into PHP. The first step was to get access to the ImageMagick libraries into PHP. The first step was to get MagickWand for PHP installed so that I could call the ImageMagick functions with PHP. There are a few other ways of calling ImageMagick out there but they all involved system calls to the convert command and I would rather use library calls. Here are the steps you need to get the MagicKWand extension installed:

1. Install ImageMagick either from source or a binary. In my case I'm running fedora so I just installed it with yum.
2. Download the <a href="http://www.magickwand.org/download/php/">MagickWand extension</a> for PHP.
3. Go to your PHP source directory and find the ext directory under it. In the ext directory expand the extension.
4. Change directories into the magickwand directory under ext and run phpize.
5. Change back to the root PHP source directory and remove the current configuration file: rm -f ./configure
6. In the root PHP source directory run ./buildconf --force to rebuild the configuration script
7. You can verify the configuration file was created correctly by looking for magickwand in the new configure script: grep magickwand configure
8. Now reconfigure your PHP. Use the flag --with-magickwand=&lt;directory to ImageMagick&gt; to enable MagickWand. For me the directory to ImageMagick was /usr
9. Now you can recompile PHP and reinstall it. You should find MagickWand listed in a phpinfo() once it is compiled in correctly.

Next time I will go into how to use PHP to do some of the tricks you can do with ImageMagick on the command line.



