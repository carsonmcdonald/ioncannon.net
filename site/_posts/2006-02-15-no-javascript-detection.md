---
layout: archive
status: publish
published: true
title: No javascript detection
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 50
wordpress_url: http://www.ioncannon.net/uncategorized/50/no-javascript-detection/
date: '2006-02-15 20:08:44 -0500'
date_gmt: '2006-02-16 01:08:44 -0500'
categories:
- web design
tags:
- javascript
comments:
- id: 16
  author: guoshuang
  author_email: davidguoshuang@gmail.com
  author_url: http://blog.guoshuang.com
  date: '2006-07-18 22:34:14 -0400'
  date_gmt: '2006-07-19 02:34:14 -0400'
  content: a u sure can this work?i tired firefox and opera and links.close the javascript,but
    the refresh never happen.do u tried this code?
- id: 17
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2006-07-18 22:56:31 -0400'
  date_gmt: '2006-07-19 02:56:31 -0400'
  content: You are correct. Between what I tested and what got pasted into the box
    the U in URL was lost. It should work now.
---
Have you ever wondered what you can do if someone doesn't have javascript turned on and it is needed on the page they are sitting at? Well here is the answer:


```
<html>
  <head>
    <noscript><meta http-equiv="refresh" content="0; URL=nojscript.html"/></noscript>
  </head>
  <body>
    A javascript test.
  </body>
</html>
```

If the user doesn't have javascript turned on they will be redirected to the page nojscript.html. It doesn't work as well as having a page in between that does the detection but if you have to do it on the page you need the javascript on this is the way to go.



