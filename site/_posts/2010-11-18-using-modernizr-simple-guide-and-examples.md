---
layout: archive
status: publish
published: true
title: 'Using Modernizr - Simple Guide and Examples '
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1369
wordpress_url: http://www.ioncannon.net/?p=1369
date: '2010-11-18 21:18:07 -0500'
date_gmt: '2010-11-19 02:18:07 -0500'
categories:
- programming
tags:
- javascript
- modernizr
- css
comments: []
---

<a href="http://www.modernizr.com/">Modernizr</a> is a Javascript library that detects the presence of browser functionality. This makes life a lot easier when using more modern features on your website by encapsulating all the feature tests into a library you don't have to worry about. You can use Modernizr either in your own Javascript or you can use the CSS classes it sets on the HTML element.


To get a full list of the browser functionality that is tested check out the <a href="http://www.modernizr.com/docs/">Modernizr docs</a>. If the feature you need a test for isn't available it is fairly easy to add new tests as well.


I'll start with an example that shows how to use the feature tests in Javascript. After Modernizr runs it populates the "Modernizr" structure with boolean values for each functionality test. This example waits for the page to load and then simply populates a DIV with text depending on your browsers support for web sockets:


```
<!DOCTYPE html>
<html class="no-js">
  <head>
    <title>Modernizr - Javascript Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js" type="text/javascript"></script>
    <script src="modernizr.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function()
      {
        if (Modernizr.websockets)
        {
          $("#result").html('Your browser has support for Web Sockets');
        }
        else
        {
          $("#result").html('Your browser does not support Web Sockets');
        }
      });
    </script>
  </head>
  <body>
<p id="result">
  </body>
</html>
```

See this code in action: <a href="http://www.ioncannon.net/examples/modjs.html">Modernizr Javascript example</a>. 


You can try this example with an older version of Firefox and the text should indicate that there is no support for web sockets. Try again with a newer version of Google's Chrome browser and the page will indicate that there is support for web sockets.


The next example shows how to use the Modernizr CSS support. The key here is to know that the library will inject classes into the HTML tag. Those classes correspond to the functionality tests and are listed in the documentation. I am again testing for web sockets support and Modernizr will set the HTML class to either no-websockets or websockets and display one of two DIVs:


```
<!DOCTYPE html>
<html class="no-js">
  <head>
    <title>Modernizr - CSS Example</title>
    <style type="text/css" media="screen">
      div.wsno, div.wsyes { display: none }
      .no-websockets div.wsno { display: block }
      .websockets div.wsyes { display: block }
    </style>
    <script src="modernizr.js" type="text/javascript"></script>
  </head>
  <body>
    <div class="wsno">
      Your browser does not support WebSockets.
    </div>
    <div class="wsyes">
      Your browser supports WebSockets.
    </div>
  </body>
</html>
```

See this code in action: <a href="http://www.ioncannon.net/examples/modcss.html">Modernizr CSS example</a>. 


For a much more detailed CSS example check out <a href="http://www.alistapart.com/articles/taking-advantage-of-html5-and-css3-with-modernizr/">this A List Apart article</a>.


If you need the information Modernizr assembles outside of the browser check out <a href="https://github.com/jamesgpearce/modernizr-server">Modernizr on the server</a>.


While I was putting together the two demo pages for this I discovered a new service much like the <a href="http://code.google.com/apis/libraries/devguide.html">Google Javascript library CDN</a> but with more Javascript libraries. It is called <a href="http://cachedcommons.org/">Cached Commons</a> and it uses Github's CDN.

