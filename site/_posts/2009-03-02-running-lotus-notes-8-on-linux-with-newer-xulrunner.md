---
layout: archive
status: publish
published: true
title: Running Lotus Notes 8 on Linux with newer xulrunner
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 316
wordpress_url: http://www.ioncannon.net/?p=316
date: '2009-03-02 06:49:01 -0500'
date_gmt: '2009-03-02 11:49:01 -0500'
categories:
- linux
- software
tags:
- lotus notes
- xulrunner
comments:
- id: 125363
  author: Dan Kegel
  author_email: dank@kegel.com
  author_url: http://kegel.com
  date: '2009-03-02 08:23:41 -0500'
  date_gmt: '2009-03-02 13:23:41 -0500'
  content: "I know you've moved on from Wine, but:\r\n\r\nWhich version of Notes were
    you using with\r\nwhich version of Wine?\r\n\r\nDid you file a bug with Wine?"
- id: 125364
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-03-02 09:00:01 -0500'
  date_gmt: '2009-03-02 14:00:01 -0500'
  content: I was running version 4 of the notes client so it was really only an issue
    with notes not wine. After running the new client for a while I'll probably move
    back to the wine version except for invites since it has a much smaller footprint.
- id: 143765
  author: Dilyard
  author_email: ddilyard@gmail.com
  author_url: ''
  date: '2009-07-22 17:17:25 -0400'
  date_gmt: '2009-07-22 22:17:25 -0400'
  content: Where can the Linux client  be found?
- id: 143789
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-07-23 08:00:12 -0400'
  date_gmt: '2009-07-23 13:00:12 -0400'
  content: It moves around and hides in IBM's download network so I'm not sure anymore.
    The last time I looked I had to log in and then search in the Notes area for "Linux
    beta" I think.
---
I recently got tired of running Lotus Notes under wine because I kept getting meeting invites that I couldn't accept. So I ventured out because I had heard that Notes now had a Linux client and sure enough it does. The install is huge but it went very smooth up until the point that I first launched to read my mail. At the point where it should have shown me the start screen I got an error dialog with the error "JVM terminated. Exit code=160" and a big stack trace. 

<a href="/assets/img/notes8linux/Screenshot-IBM_Lotus_Notes.png"><img title="Lotus Notes error message" alt="Lotus Notes error message" src="/assets/img/notes8linux/Screenshot-IBM_Lotus_Notes_small.png"/></a><br/>(Click the image to see a larger version)<br/>

After digging around a little I found that the Eclipse framework/SWT expected an older version of xulrunner to be installed. The simple fix to get Notes running was to move the xulrunner libraries out of the way:

```
mv /usr/lib/xulrunner-1.9/ /tmp/
mv /tmp/xulrunner-1.9/  /usr/lib/
```
Now when I started Notes I was able to get all the way in and see the following error on the start page:

<a href="/assets/img/notes8linux/Screenshot-Getting_Started_-_IBM_Lotus_Notes_.png"><img title="Lotus Notes start page error" alt="Lotus Notes start page error" src="/assets/img/notes8linux/Screenshot-Getting_Started_-_IBM_Lotus_Notes__small.png"/></a><br/>(Click the image to see a larger version)<br/>

Now the key to getting Notes into a usable state is to close the "Getting Started" tab. If you don't do this you can never move xulrunner back into place. Once you have closed the tab exit out of Notes and then put the xulrunner libraries back where they belong.

Now you can start Notes without an issue, just make sure not to open anything that requires a web browser.

<a href="/assets/img/notes8linux/Screenshot-Home_-_IBM_Lotus_Notes_.png"><img title="Lotus Notes home page" alt="Lotus Notes home page" src="/assets/img/notes8linux/Screenshot-Home_-_IBM_Lotus_Notes__small.png"/></a><br/>(Click the image to see a larger version)<br/>

After going through this someone pointed me towards the latest 8.5 beta 2 release of Lotus Notes for Linux and after installing that I can report that it actually has fixed the issue. So whenever 8.5 comes out this should be fixed until another incompatible version of xulrunner comes out.

