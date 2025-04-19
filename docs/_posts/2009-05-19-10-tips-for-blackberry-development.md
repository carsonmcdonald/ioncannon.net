---
layout: archive
status: publish
published: true
title: 10 Tips for BlackBerry Development
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 373
wordpress_url: http://www.ioncannon.net/?p=373
date: '2009-05-19 13:17:46 -0400'
date_gmt: '2009-05-19 18:17:46 -0400'
categories:
- programming
tags:
- BlackBerry
- mobile
comments: []
---
Over time I've gathered up some nice tips I think would help get someone started developing applications for the BlackBerry so I decided to pull some of the more interesting ones together into the following list.

<ol>
<li>The Eclipse plugin makes life much easier so use it. If you are used to Intellij IDEA then try out the <a href="http://www.jroller.com/santhosh/entry/intellij_idea_key_scheme_for">Intellij IDEA keymap for Eclipse</a></li>
<li>Some information about signing keys:
<ul>
<li>You don't have to get signing keys to make a deployable application</li>
<li>They are inexpensive</li>
<li>If you do get the signing keys you will have access to libraries that you otherwise can't use</li>
<li>You will need the JDE installed even if you have the Eclipse plugin installed as <a href="http://www.blackberry.com/knowledgecenterpublic/livelink.exe/fetch/2000/348583/800989/Support_-_Unable_to_open_.csi_files?nodeid=1371862&vernum=0">explained here</a></li>
</ul>
</li>
<li>When sending apps to the background:
<ul>
<li>Make sure you don't exit() the app, only call <a href="http://www.blackberry.com/developers/docs/4.0.2api/net/rim/device/api/system/Application.html#requestBackground()">Application.requestBackground()</a></li>
<li>Make sure to provide an exit menu option</li>
</ul>
</li>
<li>Install the MDS emulator. You need the MDS emulator if you plan to do anything that requires a network connection.</li>
<li>If you need SOAP support use <a href="http://ksoap2.sourceforge.net/">kSOAP</a>. There is a good DDJ article with examples on <a href="http://www.ddj.com/mobile/208800166">how to use kSOAP in a mobile setting</a>.</li>
<li>Use <a href="http://www.blackberry.com/developers/docs/4.0.2api/net/rim/device/api/system/Display.html#getWidth()">Display.getWidth()</a> to make your custom items look correct on any device. Keep the following in mind:
<ul>
<li>Make any static graphics you use that need to span an entire screen as large as the largest device size</li>
<li>I have created a list of <a href="http://www.ioncannon.net/meta/321/blackberry-screen-and-icon-sizes/">BlackBerry device screen sizes</a></li>
</ul>
</li>
<li>The BlackBerry has an embeddable browser. There is a <a href="http://supportforums.blackberry.com/rim/board/message?board.id=java_dev&message.id=10288">good example post on how to use it</a>.</li>
<li>Spend time to make a splash screen. The knowledge base has a good article <a href="http://www.blackberry.com/knowledgecenterpublic/livelink.exe/fetch/2000/348583/800332/800505/800256/How_To_-_Create_a_splash_screen.html?nodeid=800334&vernum=0">on making a splash screen</a>.</li>
<li>Make good looking icons and make sure to also <a href="http://www.blackberry.com/knowledgecenterpublic/livelink.exe/fetch/2000/348583/800332/800505/800608/How_To_-_Define_a_rollover_icon_for_an_application.html?nodeid=1162799&vernum=0">define the rollover icon</a>.</li>
<li>If you need charts in your application take advantage of the device always being connected to the internet and give <a href="http://code.google.com/apis/chart/">Google Charts</a> a try. </li>
</ol>
