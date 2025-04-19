---
layout: archive
status: publish
published: true
title: How to set up different window managers with VNC
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 90
wordpress_url: http://www.ioncannon.net/system-administration/90/how-to-set-up-different-window-managers-with-vnc/
date: '2006-07-24 08:07:14 -0400'
date_gmt: '2006-07-24 12:07:14 -0400'
categories:
- system administration
- linux
- utilities
tags: []
comments:
- id: 28
  author: Making screencasts with Linux @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/linux/73/making-screencasts-with-linux/
  date: '2006-07-26 06:49:41 -0400'
  date_gmt: '2006-07-26 10:49:41 -0400'
  content: "[...] I tried the instructions on a fedora core 5 box and found that vnc2swf
    requires tkinter and pygame be installed but they are both packages that are easy
    to install with yum. You will also need some type of vnc server running on your
    box. If you want to do a screencast of your current desktop you will need to use
    x11vnc. It will allow you to let a vnc viewer connect to your current desktop.
    I found that using x11vnc didn't work that well. I'm not sure if it
    was the desktop I was using or what but the screencasts came out very choppy and
    for the most part unusable. I switched to using vncserver with a lightweight window
    manager and that fixed the issue. I think I like doing that better anyway because
    it gives me a fresh desktop to work from without all the normal extras. When you
    are doing a screencast it probably makes more sense to have less to look at anyway.
    [...]"
---
I recently needed to replace twm as the window manager I used under VNC. I wanted something light so I looked at: <a href="http://blackboxwm.sourceforge.net/">blackbox</a>, <a href="http://fluxbox.sourceforge.net/">fluxbox</a>, and <a href="http://flwm.sourceforge.net/">flwm</a>. These window managers have been around for some time and are probably available as binary packages for most distributions.


I went with blackbox after installing them all. To change what window manager starts when vnc starts you need to edit the xstartup file in your ~/.vnc directory. To start with it will look something like:

```
#!/bin/sh

[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
vncconfig -iconic &
xterm -geometry 80x24+10+10 -ls -title "$VNCDESKTOP Desktop" &
twm &
```
To start blackbox instead of twm you change it to:

```
#!/bin/sh

[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
vncconfig -iconic &
xterm -geometry 80x24+10+10 -ls -title "$VNCDESKTOP Desktop" &
blackbox &
```
You can remove some of the extra stuff started by the script if you want so that it looks like:

```
#!/bin/sh

[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
blackbox &
```
Now enjoy your new window manager.



