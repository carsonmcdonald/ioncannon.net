---
layout: archive
status: publish
published: true
title: Smooth scrolling image list
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 48
wordpress_url: http://www.ioncannon.net/uncategorized/48/smooth-scrolling-image-list/
date: '2006-02-16 02:26:03 -0500'
date_gmt: '2006-02-16 07:26:03 -0500'
categories:
- programming
tags:
- javascript
comments:
- id: 6
  author: IONCANNON &raquo; Easier scrolling images with Yahoo UI
  author_email: ''
  author_url: http://www.ioncannon.net/web-design/60/easier-scrolling-images-with-yahoo-ui/
  date: '2006-07-08 06:45:44 -0400'
  date_gmt: '2006-07-08 10:45:44 -0400'
  content: "[...] This is a great article about the yahoo ui tools. I mention it mainly
    because they have a nice scrolling widget a lot like what I put together as an
    example of the things you can do with script.aculo.us (see Smooth Scrolling Image
    List). [...]"
- id: 642
  author: Etan
  author_email: etancuban@hotmail.com
  author_url: ''
  date: '2006-11-24 09:18:41 -0500'
  date_gmt: '2006-11-24 13:18:41 -0500'
  content: "Very great article! Thx :)\r\n\r\nCould you tell me how can i add a link
    on every image? The basix idea is to scroll an image list but maybe it could be
    great to add the ability to click on each image to visit a website."
- id: 673
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2006-11-27 09:29:17 -0500'
  date_gmt: '2006-11-27 13:29:17 -0500'
  content: Etan, you can just put a link around each img and that should do what you
    want.
- id: 2382
  author: zeeker
  author_email: zeeker@tiscali.it
  author_url: ''
  date: '2007-01-29 11:57:48 -0500'
  date_gmt: '2007-01-29 16:57:48 -0500'
  content: "wonderful! just what i was out for. but what if I wanted to stop the scroll
    once the pics are over? now it just scrolls to infinity!? even if i reduce the
    \"width\".. am i missing something?\r\nthanks"
- id: 10134
  author: afx2000
  author_email: afx@rossiworld.com
  author_url: ''
  date: '2007-04-03 04:45:24 -0400'
  date_gmt: '2007-04-03 09:45:24 -0400'
  content: "zeeker: I used the \"left\" value of the ImageBoxInside to determine the
    scroll buttons:\r\nif left is 0, ImageBoxInside is on the very left, so hide left
    scroll arrow\r\n\r\nif left + width of the ImageBoxInside = width of imageBox,
    ImageBoxInside is on the very right, so hide right scroll arrow.\r\n\r\nif width
    of ImageBoxInside "
- id: 15772
  author: Pragan
  author_email: jganesh@gmail.com
  author_url: ''
  date: '2007-04-30 11:00:36 -0400'
  date_gmt: '2007-04-30 16:00:36 -0400'
  content: "Hi,\r\n\r\nI am new to script.aculo.us so I would like to know how the
    above script works if I use it in my webpages??Is there any configuration/installion
    for any script.aculo.us ??or we can copy the reqd functions from the library?I
    am confused here..Please help me out."
- id: 15778
  author: Pragan
  author_email: jganesh@gmail.com
  author_url: ''
  date: '2007-04-30 11:25:15 -0400'
  date_gmt: '2007-04-30 16:25:15 -0400'
  content: "Please ignore my previous comment! i got it worked but I would like to
    know whether is there any way to display end of gallery if we reach the last image
    because right now if we keep pressing the right arrow after the last image its
    just show the white space and we have to refresh the page or click the left arrow
    for equal number of times we clicked the right arrow..\r\n\r\nPlease help me out.\r\n\r\nThanks\r\nPragan"
- id: 48572
  author: luu tieu duong
  author_email: luutieuduong@gmail.com
  author_url: ''
  date: '2008-02-04 06:31:12 -0500'
  date_gmt: '2008-02-04 11:31:12 -0500'
  content: "Hi, it's the first time I use scriptaculous, but this article is easy
    to do. However, there is a problem, when I use DTD XHTML 1.0 Trasitional (-!DOCTYPE
    html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"-\r\n-html
    xmlns=\"http://www.w3.org/1999/xhtml\"-...), the page is ok in FF, but it is not
    correct in IE6. When I click on the arrow button the \"imageBoxInside\" expands
    horizontally over the \"imagebox\" (not inside it like FF).\r\nI tried to cancel
    the DTD on my page and everything is ok in both FF and IE6. But it affects another
    problem of the page.\r\nPlease help me solve this problem.\r\n\r\nThank you so
    much.\r\nluutieuduong"
- id: 51346
  author: EC
  author_email: el_chango@hotmail.com
  author_url: ''
  date: '2008-02-16 19:12:30 -0500'
  date_gmt: '2008-02-17 00:12:30 -0500'
  content: Great article and really nice implementation. The only problem that happens
    is when you click the scroll arrows quickly several times, the images display
    out of line. Is there a way to prevent the script from firing until the scroll
    is complete??
- id: 59003
  author: Christofer
  author_email: christofer@dorian.se
  author_url: http://www.andersroth.se/
  date: '2008-03-18 12:36:49 -0400'
  date_gmt: '2008-03-18 17:36:49 -0400'
  content: "I have the exact same problem as \"luutieuduong\". Anyone who has a solution?\r\n\r\nThe
    problem is that the Effect.Move changes the style property for imageBoxInside
    from position: static to position: relative. So in IE6+IE7 this causes the same
    problem for me as for \"luutieuduong\". See www(dot)andersroth(dot)se."
- id: 59004
  author: Christofer
  author_email: christofer@dorian.se
  author_url: http://www.dorian.se/
  date: '2008-03-18 12:43:07 -0400'
  date_gmt: '2008-03-18 17:43:07 -0400'
  content: "Adding \"position: relative\" to the imageBox-css fixed the problem for
    me, both in IE6 and IE7. \r\n\r\nI hope this fix will work for anyone else with
    the same problem!"
- id: 61187
  author: dandy
  author_email: ijlal2@hotmail.com
  author_url: ''
  date: '2008-04-02 15:35:25 -0400'
  date_gmt: '2008-04-02 20:35:25 -0400'
  content: "nice article.\r\n\r\nbut same problem. the next button moves the div to
    infinity. any solution?\r\n\r\nregards."
- id: 62003
  author: goldenapples
  author_email: goldenapplesdesign@gmail.com
  author_url: ''
  date: '2008-04-08 14:23:49 -0400'
  date_gmt: '2008-04-08 19:23:49 -0400'
  content: "@EC :\r\n\r\nI had the same problem in a site I was working on.  Adding
    the declaration\r\n\r\nqueue: 'end'\r\n\r\nto the effect properties solves that
    problem.  The move will still be recorded, but it won't start until all currently
    running moves have finished."
- id: 65065
  author: Trung Ly
  author_email: temp@trungly.com
  author_url: ''
  date: '2008-04-26 14:19:25 -0400'
  date_gmt: '2008-04-26 19:19:25 -0400'
  content: Thanks Christofer.  Your solution solved the IE6 position problem.  Very
    helpful.  Thanks.
- id: 71657
  author: demon
  author_email: oleinikov@gmail.com
  author_url: http://no
  date: '2008-05-30 17:24:40 -0400'
  date_gmt: '2008-05-30 22:24:40 -0400'
  content: how to make it go back when it reaches the end?
- id: 72443
  author: Marcus
  author_email: marcus.ting@live.com
  author_url: http://www.dfwolf.org
  date: '2008-06-03 04:35:43 -0400'
  date_gmt: '2008-06-03 09:35:43 -0400'
  content: That does not circulate at the end.
- id: 73150
  author: miriam
  author_email: miriam@miriamhendel.com
  author_url: ''
  date: '2008-06-06 17:22:41 -0400'
  date_gmt: '2008-06-06 22:22:41 -0400'
  content: "could someone better explain how correct the scrolling to infinity issue?
    \ If goldenapples queue:'end' works, how exactly does it get added to the code?\r\n\r\nThank
    you!!!"
- id: 98526
  author: FG
  author_email: laurent@familygenda.com
  author_url: ''
  date: '2008-09-18 05:51:31 -0400'
  date_gmt: '2008-09-18 10:51:31 -0400'
  content: "In case it may help I have implemented a solution to avoid to scroll beyond
    the limits of the list (it uses prototype functions) :\r\n\r\nUpdate the js:\r\n\r\nfunction
    moveToPrevious(boxDivId, contentDivId, imageWidth)\r\n{\r\n\tvar contentPosition
    = $(contentDivId).cumulativeOffset();\r\n\tvar boxPosition = $(boxDivId).cumulativeOffset();\r\n\r\n\tif
    (contentPosition[0]  (boxPosition[0] + boxWidth)) {\r\n\t\tnew Effect.Move(contentDivId,
    { x: -imageWidth, y: 0, transition: Effect.Transitions.sinoidal });\r\n\t}\r\n}\r\n\r\nReplace
    css by:\r\n\r\n#imageBox { margin: auto; overflow: hidden; position: relative;}\r\n\r\n\r\nHere
    is an example of the html:\r\n\r\n\r\n  \r\n  \t\r\n\t\t\r\n\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\r\n\t\t\t\r\n
    \ \r\n\r\n\r\n<a href=\"void(0);\" href=\"void(0);\" rel=\"nofollow\">prev</a>\r\n<a
    href=\"void(0);\" href=\"void(0);\" rel=\"nofollow\">next</a>\r\n\r\nNote that
    in this example, images are 400 px wide."
- id: 118314
  author: Brett
  author_email: brett@twistedpear.com.au
  author_url: ''
  date: '2009-01-22 16:04:57 -0500'
  date_gmt: '2009-01-22 21:04:57 -0500'
  content: "Hi\r\n\r\nThanks firstly to everyone involved in creating and updating
    this script to make it very useful.\r\nI'm just wondering if anyone sorted out
    the issue where an impatient user clicks multiple times on the Next or Previous
    buttons and it sort of breaks the scrolling. The images don't scroll all the way
    to the beginning or end.\r\n\r\nI noticed EC had the same question above but I'm
    not sure I can see any solutions. Any help would be greatly appreciated.\r\n\r\nKind
    Regards\r\nBrett"
- id: 119381
  author: Daniel
  author_email: brander04@hotmail.com
  author_url: ''
  date: '2009-01-27 09:01:07 -0500'
  date_gmt: '2009-01-27 14:01:07 -0500'
  content: "Hi!\r\n\r\nWhere have you all put the different codes. I have one html-document
    and one css-document.\r\n\r\nHowever the boxes does'nt work, you can see all the
    images all the time! \r\n\r\nThanks fore the scripts btw!"
- id: 119793
  author: Daniel
  author_email: brander04@hotmail.com
  author_url: ''
  date: '2009-01-28 19:08:37 -0500'
  date_gmt: '2009-01-29 00:08:37 -0500'
  content: "I have fixed the problem! \r\n\r\nThe only thing that does not work is
    that the scrolling does not have an end. \r\n\r\nI did not understand FGs sollution.\r\n\r\nThanks!"
- id: 125639
  author: Nurhadi
  author_email: nurhadijogja@gmail.com
  author_url: http://-
  date: '2009-03-05 21:33:43 -0500'
  date_gmt: '2009-03-06 02:33:43 -0500'
  content: "I have fixed the problem for infinity issue.\r\n\r\nupdate the js by adding
    getMoveStatus() function.\r\n\r\ntry this!\r\n\r\n/* ------------------- */\r\n\r\nvar
    validWBox = 520; /* imageBox width */\r\nvar validWImg = 130; /* image width */\r\nvar
    numImg    = 10;  /* count image */\r\n\r\nfunction getMoveStatus(currMove) {\r\n\tvar
    theLeft = document.getElementById('imageBoxInside').style.left;\r\n\t/* current
    left position of ImageBoxInside */\r\n\t\r\n\tvar imgNumComul = numImg * validWImg;\r\n\t/*
    comulative image width (10*130) */\r\n\r\n\ttheLeft = parseInt(theLeft.replace('px',''));\r\n\tif(currMove
    == 'next') {\r\n\t\ttheLeft = theLeft - validWBox;\r\n\t} else { \r\n\t\ttheLeft
    = theLeft + validWBox;\r\n\t}\r\n\tif(theLeft == validWBox) { \r\n\t\treturn false;\r\n\t}
    else if(theLeft <= (0-imgNumComul)) {  \r\n\t\treturn false;\r\n\t} else { \r\n\t\treturn
    true;\r\n\t}\r\n}\r\n\r\n\r\n/* ------------------- */\r\nfunction moveToPrevious()
    {\r\n  var validMove = getMoveStatus('prev');\r\n  if(validMove) { \r\n  \tnew
    Effect.Move('imageBoxInside', { x: validWBox, y: 0, transition: Effect.Transitions.sinoidal
    });\r\n  }\r\n}\r\n\r\nfunction moveToNext() {\r\n  var validMove = getMoveStatus('next');\r\n
    \ if(validMove) { \r\n  \tnew Effect.Move('imageBoxInside', { x: (0-validWBox),
    y: 0, transition: Effect.Transitions.sinoidal });\r\n  }\r\n}\r\n\r\n\r\n/* -------------------
    */\r\n\t\r\n\r\n    \r\n      \r\n        \r\n        \r\n        \r\n        \r\n
    \       \r\n        \r\n        \r\n        \r\n        \r\n        \r\n      \r\n
    \   \r\n\r\n    \r\n      <a href=\"void(0);\" rel=\"nofollow\">Prev</a> | <a
    href=\"void(0);\" rel=\"nofollow\">Next</a>\r\n    \r\n\r\n  \t\r\n\r\n\r\nI home
    it's usefull..."
- id: 126246
  author: Tom
  author_email: thomas@anakrome.net
  author_url: ''
  date: '2009-03-10 10:30:43 -0400'
  date_gmt: '2009-03-10 15:30:43 -0400'
  content: "thx nurhadi for your code, it looks good.\r\nbut FF told me \"moveToNext
    is not defined\"\r\n\r\nWhen I re-use old function moveToNext as\r\n\r\nfunction
    moveToPrevious() {\r\n  new Effect.Move('imageBoxInside', { x: 300, y: 0, transition:
    Effect.Transitions.sinoidal });\r\n} \r\n\r\nit's working with the bug of infinity
    .. \r\nany ideas ? \r\nthx a lot"
- id: 126325
  author: Tom
  author_email: thomas@anakrome.net
  author_url: ''
  date: '2009-03-11 10:22:55 -0400'
  date_gmt: '2009-03-11 15:22:55 -0400'
  content: "Be carreful on this line:\r\ntheLeft = parseInt(theLeft.replace('px',\"));\r\n\r\nthe
    \" should be replaced by ''\r\nor, the js bug."
- id: 126330
  author: Tom
  author_email: thomas@anakrome.net
  author_url: ''
  date: '2009-03-11 11:38:47 -0400'
  date_gmt: '2009-03-11 16:38:47 -0400'
  content: "there's another bug on line :\r\ntheLeft = theLeft + validWBox;\r\n\r\nthe
    JS makes a concatenation of both var, instead of add them.\r\n\r\ngood luck :)"
- id: 141103
  author: eng. Ilian Iliev
  author_email: ilian@magicbg.com
  author_url: ''
  date: '2009-06-06 18:18:24 -0400'
  date_gmt: '2009-06-06 23:18:24 -0400'
  content: "Hi all,\r\n\r\nI create a JS class based on this example and I`ll be glad
    to hear(see)\r\nwhat you think. Sorry for pasting so much code that way but please
    take\r\na look.\r\n\r\nThe scroller is called like that:\r\nvar my_scrolltest
    = new Scroller('imageBox', 'imageBoxInside', 'scroll_left', 'scroll_right', 202);\r\n\r\n3rd
    and 4th params are links id`s, last one (step) is the scroll step i pixels,\r\nclass
    source bellow:\r\n\r\nScroller = Class.create({\r\n\tinitialize: function(box,
    innerBox, el_left, el_right, step) {\r\n\t\tvar scroller = this;\r\n\t\t\r\n\t\tthis.box
    = $(box);\r\n\t\tthis.handle = $(innerBox);\r\n\t\tthis.el_left = $(el_left);\r\n\t\tthis.el_right
    = $(el_right);\r\n\t\tthis.step = step;\r\n\t\tthis.currentOffsetLeft = 0;\r\n\t\t\r\n\t\tthis.eventLeftScrollOnClick
    = this.ScrollLeft.bindAsEventListener(this);\r\n\t\tthis.eventRightScrollOnClick
    = this.ScrollRight.bindAsEventListener(this);\r\n\t\t\r\n\t\tthis.el_left.observe(\"click\",
    this.eventLeftScrollOnClick);\r\n\t\tthis.el_right.observe(\"click\", this.eventRightScrollOnClick);\r\n\t\t\r\n\t\tthis.initialized
    = true;\r\n\t},\t\r\n\tScrollLeft: function(event){\r\n\t\tif (Event.isLeftClick(event))
    {\r\n\t\t\toffset_left = this.currentOffsetLeft\r\n\t\t\t\r\n\t\t\tif(!offset_left
    || offset_left>= 0)\r\n\t\t\t\treturn;\r\n\t\t\t\r\n\t\t\tthis.currentOffsetLeft
    += this.step;\r\n\t\t\tnew Effect.Move(this.handle, { x: this.step, y: 0, transition:
    Effect.Transitions.sinoidal, queue: 'end'});\r\n\t\t\tEvent.stop(event);\r\n\t\t}\t\t\r\n\t},\t\r\n\tScrollRight:
    function(event){\r\n\t\tif (Event.isLeftClick(event)) {\r\n\t\t\tbox_width = this.getObjStyleProperty(this.box,
    'width');\r\n\t\t\tinnerBox_width = this.getObjStyleProperty(this.handle, 'width');\r\n\t\t\t\r\n\t\t\tif(box_width>=(this.currentOffsetLeft)+innerBox_width)\r\n\t\t\t\treturn;\r\n\t\t\t\r\n\t\t\tthis.currentOffsetLeft
    -= this.step;\r\n\t\t\tnew Effect.Move(this.handle, { x: -this.step, y: 0, transition:
    Effect.Transitions.sinoidal, queue: 'end'});\r\n\t\t  Event.stop(event);\r\n\t\t}\r\n\t},\r\n\tgetObjStyleProperty:
    function(obj, property){\r\n\t\toffset_left = obj.getStyle(property);\r\n\t\tif(!offset_left)\r\n\t\t\treturn;\r\n\t\treturn
    parseInt(offset_left.replace('px', ''));\r\n\t}\r\n});\r\n\r\nAny ideas will be
    appreciated"
- id: 142091
  author: LD
  author_email: leahdimac@yahoo.com
  author_url: ''
  date: '2009-06-18 09:07:15 -0400'
  date_gmt: '2009-06-18 14:07:15 -0400'
  content: How to configure if my scroll buttons are positioned at the beginning and
    end of the box holding all images?  Right now, it scrolls even the buttons.
- id: 142325
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-06-22 08:34:33 -0400'
  date_gmt: '2009-06-22 13:34:33 -0400'
  content: "@LD\r\n\r\nMake sure you have your button images outside of the two divs."
- id: 144318
  author: niranjan
  author_email: niranjan.nimbalkar@a3logics.on
  author_url: ''
  date: '2009-07-31 00:48:39 -0400'
  date_gmt: '2009-07-31 05:48:39 -0400'
  content: can we have add some description below the image ? if yes how should it
    be done?
- id: 145244
  author: eng. Ilian Iliev
  author_email: ilian@magicbg.com
  author_url: ''
  date: '2009-08-06 04:13:43 -0400'
  date_gmt: '2009-08-06 09:13:43 -0400'
  content: "@niranjan\r\n\r\nYou can just wrap each img element inside a div, example:\r\n\r\n\r\n
    \ \r\n     \r\n          \r\n          my info text\r\n    \r\n   ...............\r\n\r\nHope
    this helps )"
- id: 145595
  author: niranjan
  author_email: niranjan.nimbalkar@a3logics.in
  author_url: ''
  date: '2009-08-08 02:28:31 -0400'
  date_gmt: '2009-08-08 07:28:31 -0400'
  content: thx "eng. Ilian Iliev" for reply but it doesnt seems to work i had tried
    to encapsulate the img in a div and added some text but result is something like
    ladder steps images are displayed like steps of ladder. any thing else i could
    try?
- id: 147012
  author: eng. Ilian Iliev
  author_email: ilian@magicbg.com
  author_url: ''
  date: '2009-08-17 05:54:00 -0400'
  date_gmt: '2009-08-17 10:54:00 -0400'
  content: "Hi niranjan,\r\nsad to hear it`s not working for you.\r\nTo skip the flooding
    of Carson`s blog (10x for the post btw) just send me a link or the code you are
    working on at azareth(at)mail.bg I`ll try to review it as soon as possible."
- id: 158692
  author: shenanigans
  author_email: shenanigans@breakthru.com
  author_url: ''
  date: '2009-12-09 05:47:06 -0500'
  date_gmt: '2009-12-09 10:47:06 -0500'
  content: "hey guys,\r\nis there a way to make the images scroll automatically in...
    say... 450px steps? Like on this webpage: http://edshoots.com/html/  ? Does the
    above script work with IE8?\r\ncheers..."
- id: 166212
  author: Justin
  author_email: JRPeterson@email.msmary.edu
  author_url: http://www.jcpsnowproductions.com
  date: '2010-03-25 08:38:06 -0400'
  date_gmt: '2010-03-25 13:38:06 -0400'
  content: "First off, thanks for the code and ideas.  \r\n\r\nI slightly modified
    the code to not go on to infinity either way.  \r\nI created the following global
    variables:\r\nvar numVisible = 4;  //Number of images that are always visible\r\nvar
    totalImages = 5;  // Total Number of images\r\nvar numPossibleMoves = totalImages-numVisible;
    \ //The number of possible moves\r\nvar numMoves = 0;  //The number of moves taken.
    \ \r\n\r\nI then modified the following functions:\r\nfunction moveToPrevious()\r\n{\r\nif
    (numMoves > 0)\r\n{\r\nnumMoves--;\r\n  new Effect.Move('imageBoxInside', { x:
    200, y: 0, transition: Effect.Transitions.sinoidal });\r\n  }\r\n}  \r\nfunction
    moveToNext()\r\n{\r\n if (numMoves < numPossibleMoves)\r\n \t{\r\n \t//Then we
    can still move\r\n \tnumMoves++;\r\n      new Effect.Move(&#039;imageBoxInside&#039;,
    { x: -200, y: 0, transition: Effect.Transitions.sinoidal });\r\n    }\r\n}\r\n\r\n\r\nHope
    this helps.  \r\n\r\nJustin  http://www.jcpsnowproductons.com"
---
I had someone ask me about fitting more images in a small area and the way flickr does their image scrolling came to mind. I wanted to see how hard it was to do and as it turns out it isn't hard to do at all thanks to <a href="http://script.aculo.us/">script.aculo.us</a>.

I'm making this as simple as I can to illustrate just how nice the new tools like script.aculo.us are.

<strong>Step 1.</strong> You need a box and some images. You will also need to know the size of the images or at least the size of the largest one. In an attempt to keep this simple I'm going to assume all the images are the same size.



```
<div id="imageBox">
  <div id="imageBoxInside">
    <img src="http://www.ioncannon.net/examples/slide/images/turtle_sm_1.jpg" />
    <img src="http://www.ioncannon.net/examples/slide/images/elephants_sm_1.jpg" />
    <img src="http://www.ioncannon.net/examples/slide/images/turtle_sm_2.jpg" />
    <img src="http://www.ioncannon.net/examples/slide/images/elephants_sm_2.jpg" />
    <img src="http://www.ioncannon.net/examples/slide/mages/turtle_sm_3.jpg" />
    <img src="http://www.ioncannon.net/examples/slide/images/elephants_sm_3.jpg" />
    <img src="http://www.ioncannon.net/examples/slide/images/turtle_sm_4.jpg" />
    <img src="http://www.ioncannon.net/examples/slide/images/elephants_sm_4.jpg" />
    <br/>
  </div>
</div>
```

Notice from this code that we have an outer box and an inner box. We will next want to make the outer box smaller than the inner box so that only a few of the images can be seen at one time.

<strong>Step 2.</strong> To hide the extra images we give the outer box a set width, in this case I want to show only 2 images at a time and each image is 180px wide so I make the outer box 360px wide. Notice that the overflow is hidden. The hidden overflow is what keeps the images that are in the inner box but not within the outer box's width hidden.

I'm using floats to lay the images out one next to the other. Because of this we need to give the inside box a large width so that it will not wrap the floated images.


```
<style type="text/css">
#imageBox { margin: auto; width: 360px; border: 1px #000 solid; overflow: hidden; }
#imageBoxInside { width: 10000px; }  #imageBox img { float: left; padding: 0px; margin: 0px; }
#imageBox br { clear: both; }
</style>
```

<strong>Step 3.</strong> Now for the magic. You need the latest version of script.aculo.us because I use the Effects.Move function and they have changed Effects.MoveBy to Effects.Move only recently.

We now create two functions to move the images either one step to the right or one step to the left. To refine our transitions even further, we decided to <a href="https://bitcoinist.com/us-betting-sites-without-verification-no-id-withdrawal/">find different options</a> for adjusting the animation and ensuring smoother movement. Each step is the size of a single image so that when one is triggered, it moves one image out of view and brings another image into view. As you can see from the following code, this is extremely easy using the script.aculo.us library.


```
function moveToPrevious()
{
  new Effect.Move('imageBoxInside', { x: 180, y: 0, transition: Effect.Transitions.sinoidal });
}
function moveToNext()
{
  new Effect.Move('imageBoxInside', { x: -180, y: 0, transition: Effect.Transitions.sinoidal });
}
```

<strong>Step 4.</strong> The only thing that remains is to connect everything together. We add a couple links to move call the next and previous functions defined above.


```
<a href="javascript:void(0);" href="javascript:void(0);" onclick="moveToPrevious(); return true;"><img src="previous.png" /></a>
<a href="javascript:void(0);" href="javascript:void(0);" onclick="moveToNext(); return true;"><img src="next.png" /></a>
```

And that is all there is to it. See it in <a href="http://www.ioncannon.net/examples/slide/example1.html">action</a>!



