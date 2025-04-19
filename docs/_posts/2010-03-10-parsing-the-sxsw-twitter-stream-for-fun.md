---
layout: archive
status: publish
published: true
title: Parsing the SXSW Twitter Stream for Fun
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 963
wordpress_url: http://www.ioncannon.net/?p=963
date: '2010-03-10 18:26:24 -0500'
date_gmt: '2010-03-10 23:26:24 -0500'
categories:
- Uncategorized
tags: []
comments: []
---

Over the weekend I decided to toss together a simple twitter stream monitoring app that would <a href="http://www.ioncannon.net/projects/watchsxsw2010/">capture SXSW tweets</a>. I wanted to build on some of what I learned while hacking together the stuff for <a href="http://www.ioncannon.net/projects/code2009/">code2009</a> and it was also an excuse to play with <a href="http://nodejs.org/">node.js</a> and a few other things. I figured I would put together a quick post with all the different parts and as I have time I'll pull together some of the more important sections into larger posts. Be warned that the site may stop functioning since it was only a few hours work and mostly put together with bailing wire and gum. 


Server side:


<ul>
  <li><a href="http://nodejs.org/">node.js</a> - Used to process the long polling requests</li>
  <li><a href="http://nginx.org/">ngnix</a> - Front for multiple nodejs instances and serving some static files</li>
  <li><a href="http://documentcloud.github.com/underscore/">underscore.js</a></li>
  <li><a href="http://www.rabbitmq.com/">rabbitmq</a> - Used to monitor the realtime feed</li>
  <li><a href="http://code.google.com/p/redis/">Redis</a> - Used as a datastore for everything</li>
  <li><a href="http://www.ruby-lang.org/">ruby</a> - Used to glue a bunch of things together, tons of gems used</li>
  <li><a href="http://github.com/blog/542-introducing-resque">Resque</a> - Used to handle the screen captures</li>
</ul>

Browser side:


<ul>
  <li><a href="http://jquery.com/">jQuery</a></li>
  <li><a href="http://code.google.com/p/flot/">jQuery flot</a></li>
  <li><a href="http://omnipotent.net/jquery.sparkline/">jQuery sparklines</a></li>
</ul>

Hosting:


<ul>
  <li><a href="http://aws.amazon.com/ec2/">AWS EC2</a> - Used for processing browser snapshots</li>
  <li><a href="http://aws.amazon.com/cloudfront/">AWS Cloudfront</a> - Used for storing CSS, etc</li>
  <li><a href="http://www.rackspacecloud.com/">Rackspace Cloud Servers</a> - Used to run the node servers</li>
  <li><a href="http://www.linode.com/">Linode</a> - Used to run the main web server</li>
</ul>
