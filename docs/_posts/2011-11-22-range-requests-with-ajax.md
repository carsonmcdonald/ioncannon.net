---
layout: archive
status: publish
published: true
title: Range Requests with Ajax
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1506
wordpress_url: http://www.ioncannon.net/?p=1506
date: '2011-11-22 11:03:58 -0500'
date_gmt: '2011-11-22 16:03:58 -0500'
categories:
- programming
tags:
- ajax
- javascript
- http
comments: []
---

I ran across something the other day that made wonder about doing range requests using ajax. For some reason it wasn't obvious at first if this would be easy but as it turns out it is.


If you aren't familiar with range requests head over to the HTTP RFC and check out the <a href="http://tools.ietf.org/html/rfc2616#section-14.35.2">range header</a>. Your web server needs to support range requests for this to be useful but most do so that shouldn't be a huge issue. As a bonus you will find that some CDNs support range request as well (Amazon S3 for example).


To show how this works I'll start off by getting the offsets of a text file, then use curl to show the actual request and then put it into an ajax request. Even though I'm using a text file the same thing could be done with a binary file as well. Here are the contents of the file I've called range-test.txt:


```
First part of the file.
More text here.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Some text after Lorem Ipsum.
End of the file.
```

Using egrep we can get the offset of each line pretty easy like so:


```
> egrep -b "\r|\n" range-test.txt
0:First part of the file.
25:More text here.
42:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
618:Some text after Lorem Ipsum.
660:End of the file.
```

Quickly verify that the range looks right in isolation using hexdump:


```
> hexdump -c -s 618 -n 30 range-test.txt
000026a   S   o   m   e       t   e   x   t       a   f   t   e   r
000027a   L   o   r   e   m       I   p   s   u   m   .  \n  \n
0000288
```

Now we have a sample range so put the text file on your web server and use curl to send the range request headers (note that the hexdump takes an offset and count of bytes while the range header takes an start and end offset):


```
> curl -H 'Range:bytes=618-647' http://localhost/range-test.txt
Some text after Lorem Ipsum.
```

Now that it makes sense how this range is used to make a request for part of a file we can move on to doing it with an ajax request. I'm going to use <a href="http://jquery.com/">jQuery</a>'s <a href="http://api.jquery.com/jQuery.ajax/">ajax</a> function to make this really simple. It has a feature that lets you set headers really easily. The following is all you need:


```
<html>
  <head>
    <script type="text/javascript" src="jquery-1.7.min.js"></script>
    <script type="text/javascript">
    $(function() {
      $.ajax({
        url: 'range-test.txt',
        headers: {Range: "bytes=618-647"},
        success: function( data ) { $('#results').html( data ); }
      });
    });
    </script>
  </head>
  <body>
<div id="results"></div>
  </body>
</html>
```

And that is all there is to it. This could be useful for all kinds of things like displaying just a section of a large log file at a time. This might also be useful in a situation where you want to stream binary data back to the browser a chunk at a time.

