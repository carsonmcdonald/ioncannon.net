---
layout: archive
status: publish
published: true
title: Making screencasts with Linux
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 73
wordpress_url: http://www.ioncannon.net/linux/73/making-screencasts-with-linux/
date: '2006-07-26 06:44:35 -0400'
date_gmt: '2006-07-26 10:44:35 -0400'
categories:
- linux
- utilities
- software
tags: []
comments:
- id: 60204
  author: OLPC LAPTOP HACKS &raquo; Blog Archive &raquo; Screencasts On The XO
  author_email: ''
  author_url: http://www.olpclaptophacks.com/2008/03/26/screencasts-on-the-xo/
  date: '2008-03-27 00:18:51 -0400'
  date_gmt: '2008-03-27 05:18:51 -0400'
  content: "[...] With all that in mind, I investigated some Linux screencasting methods.
    On this site, I found a method that works and is pretty cool. Using vnc2swf, a
    swf file screencast can be generated that is easily embedded in a webpage. [...]"
---
After my post about <a href="http://www.ioncannon.net/web-design/70/capture-full-page-screenshots-with-firefox/">capturing full page screenshots with firefox</a> I started wondering if there was a way to do screencasts using Linux. It just so happens that you can. There are a couple different options if you want a pure movie of your desktop but I was more interested in a flash version. I found what I was looking for with this tutorial on <a on href="http://wolphination.com/linux/2006/06/30/how-to-record-videos-of-your-desktop/">how to record videos of your desktop</a> that uses <a href="http://www.unixuser.org/~euske/vnc2swf/">vnc2swf</a>. 


I tried the instructions on a fedora core 5 box and found that vnc2swf requires tkinter and pygame be installed but they are both packages that are easy to install with yum. You will also need some type of vnc server running on your box. If you want to do a screencast of your current desktop you will need to use <a href="http://www.karlrunge.com/x11vnc/">x11vnc</a>. It will allow you to let a vnc viewer connect to your current desktop. I found that using x11vnc didn't work that well. I'm not sure if it was the desktop I was using or what but the screencasts came out very choppy and for the most part unusable. I switched to using <a href="http://www.ioncannon.net/system-administration/90/how-to-set-up-different-window-managers-with-vnc/">vncserver with a lightweight window manager</a> and that fixed the issue. I think I like doing that better anyway because it gives me a fresh desktop to work from without all the normal extras. When you are doing a screencast it probably makes more sense to have less to look at anyway.

<ol>
<li>Start the vnc server (here I set the size too): vncserver :1 -geometry 640x480</li>
<li>Then you will want to start the viewer: vncviewer :1</li>
<li>Start the recorder: python vnc2swf.py -t video -o test.swf :1</li>
<li>Select a filename to save the screencast as</li>
<li>Select SWF(Video) from the dropdown on the left</li>
<li>Hit start and make your screencast using the viewer</li>
</ol>
Here is an example of the final product: <br/>

<center>
<object id="flash1" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="640" height="480" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0"><param name="movie" value="/assets/screencast0723/test.swf"><param name="play" value="true"><param name="loop" value="True"><param name="quality" value="low"><embed name="flash1" src="/assets/screencast0723/test.swf" width="640" height="480" play="true" loop="True" quality="low" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>
</center>

You may also only want to capture one window of your desktop. To do that you will need to run xwininfo in you vnc session and click on the window you want to capture. After clicking the window xwininfo will return the location of that window in absolute terms as well as the width and height of the window. With that information you add -C widthxheight+x+y to the recording command. For example the xterm in my previous example is at 11x29 on the screen and is 517 wide and 355 tall so the command would be:

python vnc2swf.py -t video -o test2.swf -C 517x355+11+29 :1

And that produces this:

<center>
<object id="flash2" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="517" height="355" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0"><param name="movie" value="/assets/screencast0723/test2.swf"><param name="play" value="true"><param name="loop" value="True"><param name="quality" value="low"><embed name="flash2"  src="/assets/screencast0723/test2.swf" width="517" height="355" play="true" loop="True" quality="low" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>
</center>

There are a couple other utilities that come with the package. One is a player that you can use to play your screencast and the other is an editor. The editor lets you remove frames, change the framerate and shrink the screencast .I found that shrinking the screencast was mostly useless since it became unreadable quickly.

A few other options you have if you want a pure video of your desktop are: <a href="http://www.debugmode.com/wink/">wink for linux</a>, <a href="http://live.gnome.org/Istanbul">Istanbul for gnome</a> and <a href="http://sourceforge.net/projects/screenkast">screenkast</a>.



