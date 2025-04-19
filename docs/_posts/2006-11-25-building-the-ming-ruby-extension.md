---
layout: archive
status: publish
published: true
title: Building The Ming Ruby Extension
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 62
wordpress_url: http://www.ioncannon.net/seo/62/building-the-ming-ruby-extention/
date: '2006-11-25 12:06:25 -0500'
date_gmt: '2006-11-25 16:06:25 -0500'
categories:
- ruby
- utilities
tags: []
comments:
- id: 675
  author: Ruby Ming Extension Patch to Add Video Streaming @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/ruby/107/ruby-ming-extension-patch-to-add-video-streaming/
  date: '2006-11-27 11:52:53 -0500'
  date_gmt: '2006-11-27 15:52:53 -0500'
  content: "[...] After playing with the Ruby Ming extension a little more I found
    that they don&#39;t have support for SWFVideoStreams so I made a patch to add
    it. The patch also fixes the beta issues I described in building the ming ruby
    extension. [...]"
---

I've been trying out <a href="http://ming.sourceforge.net/">Ming SWF output library</a> in PHP for a few days and I thought I would give the Ruby extension a try to see how well it worked. It turns out that it is kind of old and busted but it is fixable.

First you need to download Ming version 0.3.0 and build it. 

Once you have the Ming libraries installed you will want to download the <a href="http://mingruby.rubyforge.org/">Ming/Ruby</a> source from rubyforge. If you try to build the source from the instructions you will get a couple errors because the latest version of the Ruby extension was made for a beta version of Ming and is no longer compatible. Luckily there isn't too much wrong and <a href="http://sourceforge.net/mailarchive/message.php?msg_id=15184915">someone has already figured out how to fix what is wrong</a>. To save you the hop here it is again:

Edit swfmovie.c under the ext/ming/mingc/ directory with the following:

```
 len = SWFMovie_output(m->this, simpleOutputMethod, NULL, level);
```

on line 231 should be replaced with:

```
 Ming_setSWFCompression(level);
 len = SWFMovie_output(m->this, simpleOutputMethod, NULL);
```

and

```
 count = SWFMovie_save(m->this, STR2CSTR(s), level);
```

on line 252 should be replaced with

```
 Ming_setSWFCompression(level);
 count = SWFMovie_save(m->this, STR2CSTR(s));
```

After making these two changes you should be able to follow the normal installation instructions and run the examples included in the source distribution.



