---
layout: archive
status: publish
published: true
title: Ruby Ming Extension Patch to Add Video Streaming
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 107
wordpress_url: http://www.ioncannon.net/ruby/107/ruby-ming-extension-patch-to-add-video-streaming/
date: '2006-11-27 11:52:47 -0500'
date_gmt: '2006-11-27 15:52:47 -0500'
categories:
- ruby
- utilities
tags: []
comments:
- id: 20743
  author: karim
  author_email: karim_zone@yahoo.com
  author_url: ''
  date: '2007-06-12 13:55:31 -0400'
  date_gmt: '2007-06-12 18:55:31 -0400'
  content: 'I cant do: Apply the patch: patch -p0 -u '
- id: 27352
  author: sumit
  author_email: sumit.kumar@vinove.com
  author_url: ''
  date: '2007-08-24 05:32:45 -0400'
  date_gmt: '2007-08-24 10:32:45 -0400'
  content: when i run this (wget -O ext/ming/mingc/swfvideostream.c) command on command
    prompt it gives a error that wget is not recognized as a internal or external
    command why it gives
---
After playing with the Ruby Ming extension a little more I found that they don't have support for SWFVideoStreams so I made a patch to add it. The patch also fixes the beta issues I described in <a href="http://www.ioncannon.net/ruby/62/building-the-ming-ruby-extension/">building the ming ruby extension</a>.
<!--more-->

Here are the steps you need to follow to patch and install the latest Ming Ruby extension:

<ul>
<li>Download the 0.1.7 version from: wget http://rubyforge.org/frs/download.php/1841/ming-ruby-0.1.7.tar.gz
  </li>
<li>Uncompress the archive file: tar xvzf ming-ruby-0.1.7.tar.gz</li>
<li>Change into the source directory: cd ming-ruby-0.1.7 </li>
<li>Download the new SWFVideoStream file and stick it into the ext/ming/mingc directory: wget -O ext/ming/mingc/swfvideostream.c /assets/mingruby/swfvideostream.c</li>
<li>Download the patch: wget /assets/mingruby/patch</li>
<li>Apply the patch: patch -p0 -u < patch</li>
<li>Run the setup script: ruby setup.rb</li>
</ul>
If you want the source and patch by themselves you can find get those from: <a href="/assets/mingruby/swfvideostream.c">swfvideostream.c</a> and <a href="/assets/mingruby/patch">patch</a>

And here is an example of using the SWFVideoStream to embed a Flash video into your Flash movie:

```
#!/usr/bin/env ruby

require 'ming/ming'
include Ming

Ming::set_scale(10.0000000)

m = SWFMovie.new(7)
m.set_background(0xff, 0xff, 0xff)
m.set_dimension(320, 240)
m.set_rate(8)

vstream = SWFVideoStream.new('test.flv')
vstream.set_dimension(320, 240)

m.add(vstream)

0.upto(vstream.get_num_frames) do
  m.next_frame
end

m.save("test.swf")
```
The above example assumes you have a Flash video file available named test.flv. If you don't have one you can make one by reading about <a href="http://www.ioncannon.net/linux/105/create-flash-videos-ffmpeg/">creating flash videos with FFMpeg</a>.



