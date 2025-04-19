---
layout: archive
status: publish
published: true
title: VNC on OS X + Devil's Pie = seamless desktop
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 164
wordpress_url: http://www.ioncannon.net/?p=164
date: '2009-02-09 07:28:34 -0500'
date_gmt: '2009-02-09 12:28:34 -0500'
categories:
- linux
- utilities
tags:
- devilspie
- vnc
- mac
comments: []
---

I've been doing iPhone development lately using a mac mini. When we first started looking at developing for the iPhone it seemed like overkill to go out and buy multiple macbooks or one macbook to share between developers so instead we got a mac mini to share using <a href="http://www.testplant.com/products/vine_viewer">Vine VNC</a>. 

For reference we are able to share the mac mini by taking advantage of <a href="http://en.wikipedia.org/wiki/Fast_user_switching">fast user switching</a> for more information see this guide on using <a href="http://www.testplant.com/products/vine_viewer/multidesktop">Multiple Desktop Sessions on Mac OS X</a>.

The VNC part is pretty easy once you have the multiple desktop sessions working. I've been doing development on a linux box that has two monitors connected so I will open the desktop in one window and all the non-mac stuff in the other. After using the VNC desktop like that for a while I started to get annoyed by the window decorations so I looked to see what I could do to remove them and that is when I ran into <a href="http://burtonini.com/blog/computers/devilspie">Devil's Pie</a>.

Devil's Pie runs as an application in the background and watches for window events that you set up in a configuration file. When it sees the events it can do all kinds of fancy things to the window like remove decorations and set position. It turns out there isn't a lot of documentation on the configuration language but I did find a <a href="http://live.gnome.org/DevilsPie">configuration language reference</a>, a <a href="http://code.google.com/p/gdevilspie/">gnome configuration file editor</a> that kind of works depending on what you need it to do, a <a href="https://help.ubuntu.com/community/Devilspie">decent reference</a>, some <a href="http://foosel.org/linux/devilspie">configuration examples</a>, and best of all an <a href="http://ubuntu-tutorials.com/2007/07/25/how-to-set-default-workspace-size-and-window-effects-in-gnome/">example of how to remove window effects</a>. With all that I was able to cobble together the following configuration file:

```
(if (contains (window_name) "VNC:") (begin (undecorate) (maximize) (geometry "+1280+0")))
```

This says to undecorate, maximize, and set the geometry of any window that contains the value "VNC:". The undecorate will strip the title bar and any border from the window, the maximize does what it says to the window, and the geometry in my case puts the window on the right hand screen. I tweaked the background for my account in OS X and the resulting combination of it all looks like this:

<img width="520" src="/assets/remotemac/macdesktop-800.png"/>

So now I have what feels like an OS X box integrated right into my normal desktop.

