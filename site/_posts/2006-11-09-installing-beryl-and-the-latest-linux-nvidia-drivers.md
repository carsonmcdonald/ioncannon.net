---
layout: archive
status: publish
published: true
title: Installing Beryl and The Latest Linux NVidia Drivers
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 102
wordpress_url: http://www.ioncannon.net/linux/102/installing-beryl-and-the-latest-linux-nvidia-drivers/
date: '2006-11-09 00:26:00 -0500'
date_gmt: '2006-11-09 04:26:00 -0500'
categories:
- linux
tags: []
comments: []
---
I finally kicked my 64 bit install to the curb and am now running my AMD 64 desktop box in 32 bit mode. I decided that I had had enough of random crashes and having to compile things special every time I wanted something new. Having just <a href="http://www.ioncannon.net/system-administration/99/upgrade-fc5-to-fc6-with-yum/">upgraded from FC5 to FC6</a> on a couple other boxes I decided it was worth installing fresh on this box. Once the new install was finished I started looking into the new desktop enhancements that come in FC6 and after a little digging I ended up at the  <a href="http://www.beryl-project.org/">Beryl</a> project.

For anyone who hasn't seen it yet Beryl is a fork of Compiz that changes the way your normal X desktop works. It adds different types of OpenGL based effects and works with Xgl, AIGLX, and the latest NVidia binary drivers.


It wasn't too hard to get Beryl installed. With Fedora Core 6 the <a href="http://fedoraproject.org/wiki/RenderingProject/aiglx">AIGLX</a> extensions you need are included in the base version of XOrg. So I just used this <a href="http://liquidat.wordpress.com/2006/10/28/howto-using-beryl-in-fedora-core-6/">Beryl on Fedora Core 6 howto</a> and it just worked. The binary version included in the howto isn't the latest version so you don't get some of the cooler new effects. The howto is a great/easy place to start however and will help you figure out if you want to invest the time into compiling the SVN version to get all the latest effects.

Some of the effects that stand out are: 

<ul>
<li>3D virtual desktop</li>
<li>Unfocused windows turn translucent</li>
<li>Tabbing through apps shows a screen-shot of each app in its current state</li>
</ul>
As a bonus if you have an NVidia card and you use the binary drivers you get native support. Just a few days ago you would have had to get the beta drivers from NVidia but they just released the latest 9xxx series drivers that now have the needed support included: <a href="http://www.nvidia.com/object/linux_display_ia32_1.0-9629.html">Latest binary NVidia drivers (1.0-9629)</a>.



