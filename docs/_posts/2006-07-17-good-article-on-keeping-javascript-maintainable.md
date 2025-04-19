---
layout: archive
status: publish
published: true
title: Good article on keeping javascript maintainable
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 86
wordpress_url: http://www.ioncannon.net/web-design/86/good-article-on-keeping-javascript-maintainable/
date: '2006-07-17 13:53:45 -0400'
date_gmt: '2006-07-17 18:53:45 -0400'
categories:
- web design
tags:
- javascript
comments: []
---
Vitamin has a good article today on <a href="http://www.thinkvitamin.com/features/dev/the-importance-of-maintainable-javascript">the importance of maintainable javascript</a>. 95% of what the article covers is applicable to any code. The important parts of the article cover javascript specific things like: <a href="http://www.wait-till-i.com/index.php?p=239">object literals</a>, <a href="http://www.dustindiaz.com/namespace-your-javascript/">namespaces</a> and where to go when you want to compress your javascript to save bandwidth/make it download faster. They recommend <a href="http://dean.edwards.name/packer/">packer</a> and <a href="http://javascript.crockford.com/jsmin.html">JSMIN</a> as two javascript compressors but I think JSMIN is probably a better bet mainly because you can run it from the command line and make it part of a build script.

