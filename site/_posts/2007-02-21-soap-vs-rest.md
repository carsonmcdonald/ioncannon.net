---
layout: archive
status: publish
published: true
title: SOAP vs REST
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 117
wordpress_url: http://www.ioncannon.net/web-services/117/soap-vs-rest/
date: '2007-02-21 21:37:36 -0500'
date_gmt: '2007-02-22 02:37:36 -0500'
categories:
- meta
tags:
- SOAP
- web services
- REST
comments:
- id: 4278
  author: Jareds Blog &raquo; Blog Archive &raquo; SOAP vs REST from a complexity
    stand point
  author_email: ''
  author_url: http://jared.blitzstein.net/2007/02/25/soap-vs-rest-from-a-complexity-stand-point/
  date: '2007-02-25 18:52:49 -0500'
  date_gmt: '2007-02-25 23:52:49 -0500'
  content: "[...] Different people have different views on what REST is but in general
    if you look at the SOAP specifications or SOAP Standards and Web services and
    then look at the REST specification, REST for the Rest of Us, or REST you see
    that in general there is a lot more complexity to SOAP and that is just SOAP itself
    and not any of its extensions.read more | digg story  Like it? [...]"
- id: 8212
  author: Good Presentation on REST with ActiveResource @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/rails/124/good-presentation-on-rest-with-activeresource/
  date: '2007-03-28 08:23:51 -0400'
  date_gmt: '2007-03-28 13:23:51 -0400'
  content: "[...] I wrote about SOAP vs REST a few weeks ago. Today I noticed this
    article with a presentation about putting together Rails REST services with ActiveResource.
    [...]"
---
Recently it seems like the SOAP vs REST debate is heating up. Most of the debate seems to be leaning toward convincing people to not use SOAP based on its increasing complexity. Different people have different views on what REST is but in general if you look at the <a href="http://www.w3.org/TR/soap/">SOAP specifications</a> or <a href="http://www-128.ibm.com/developerworks/webservices/standards/">SOAP Standards and Web services</a> and then look at the <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm">REST specification</a>, <a href="http://doc.opengarden.org/Articles/REST_for_the_Rest_of_Us">REST for the Rest of Us</a>, or <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer">REST</a> you see that in general there is a lot more complexity to SOAP and that is just SOAP itself and not any of its extensions. Here are some good articles I've found that should give you insight into the debate: 

<ul>
<li>
  <a href="http://www.trachtenberg.com/blog/2006/11/06/rest-vs-httppox-vs-soap/">REST vs HTTP+POX vs SOAP</a> - A simple explanation of REST and SOAP.
</li>
<li>
  <a href="http://tomayko.com/articles/2004/12/12/rest-to-my-wife">How I Explained REST to My Wife</a> - Another simple explication of what REST is.
</li>
<li>
  <a href="http://wanderingbarque.com/nonintersecting/2006/11/15/the-s-stands-for-simple/">The S Stands for Simple</a> - A conversation that expresses the issues with using SOAP.
</li>
<li>
  <a href="http://www.crummy.com/writing/REST-Web-Services/">REST for Web Services</a> - The outline for a new REST for web services book.
</li>
<li>
  <a href="http://duncan-cragg.org/blog/post/getting-data-rest-dialogues/">The REST Dialogues</a> - A set of fictional dialogs on REST vs SOAP.
</li>
<li>
  <a href="http://www.addsimplicity.com/adding_simplicity_an_engi/2006/11/the_rest_dialog.html">The REST Dialogues, A Real eBay Architect</a> - A response to "The REST Dialogues" by a real eBay architect.
</li>
<li>
  <a href="http://www.oreillynet.com/pub/wlg/3005">85% of Amazon calls are to REST version of their API</a>
</li>
<li>
  <a href="http://radar.oreilly.com/archives/2006/12/google_depreciates_SOAP_API.html">Google turns off SOAP API</a>
</li>
<li>
  <a href="http://www.somebits.com/weblog/tech/bad/whySoapSucks.html?seemore=y">Why SOAP sucks</a>
</li>
</ul>
After looking over the above references you may be interested in looking at <a href="http://www.programmableweb.com/apilist">Programmable Web's API list</a> and see what others are using. The majority of the public services listed offer REST interfaces with some offering both REST and SOAP and very few offer just SOAP. Even though REST seems to be in favor now I believe there are still plenty of areas where SOAP makes sense when you have resources to devote to feeding and caring for it.



