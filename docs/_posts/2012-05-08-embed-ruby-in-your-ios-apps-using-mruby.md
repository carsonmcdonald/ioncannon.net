---
layout: archive
status: publish
published: true
title: Embed Ruby in Your iOS Apps Using mruby
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1524
wordpress_url: http://www.ioncannon.net/?p=1524
date: '2012-05-08 10:20:59 -0400'
date_gmt: '2012-05-08 15:20:59 -0400'
categories:
- programming
tags:
- iOS
- mruby
- objective-c
- embed
comments: []
---
I've been playing with <a href="https://github.com/mruby/mruby">mruby</a> for the past week or so. If you haven't seen it yet it is an embeddable version of Ruby. The first thing I wonder about when I heard about mruby last year a RubyConf was embedding it in iOS apps. Now that the initial version has been released I figured I would give it a try.


There are a few things to take into account before diving into this. The first is that the mruby project is very new and there are a number of gaps in the language support right now but the goal is to support the ISO definition of Ruby at some point. The second thing to know is that I'm talking about embedding Ruby here and not writing iOS apps using Ruby. I'm more interested in the potential of Ruby as a scripting language for something like a game. If you want to look into writing iOS apps using Ruby check out <a href="http://www.rubymotion.com/">RubyMotion</a> or the <a href="http://mobiruby.org/">MobiRuby</a> project (MobiRuby is based on mruby).


Step one on the path to embedding mruby in an iOS app is getting the library compiled as a framework for XCode. Although the earliest version of mruby had support for building an iOS version that support was removed and there seems to be no current push to add it back. Because of that I created a simple <a href="https://github.com/carsonmcdonald/ios-ruby-embedded">iOS mruby build setup</a> on github. The instructions for using it are included with the project. Once the framework has been created it is easy enough to include in your XCode project just like any other external framework using the "Add Other" option in the "Build Phases" -> "Link Binary With Libraries" section.


There are two ways of using mruby, you can run a script as source or you can pre-compile the source into bytecode first. I'm going to focus on the pre-compiled way because I believe it is the less likely of the two to get an app rejected. This requires that you have the mruby tools available. If you use the build setup I created you can find the tools in the bin directory.


And finally I have created a simple <a href="https://github.com/carsonmcdonald/MRubyiOSExample">mruby iOS example</a> XCode project that you can use to get started. It includes a pre-compiled version of the framework created with the build setup mentioned before and examples of calling objective-c from Ruby and Ruby from objective-c. The following is a quick overview of the example:


<ul>
<li><b>FooUtil.h/m</b> - This is where all the interaction with mruby happens. It coordinates different parts of the examples as well.</li>
<li><b>example.rb</b> - This is the Ruby code for the example and has to be compiled into example.mrb before changes will take place.</li>
<li><b>example.mrb</b> - This is the compiled version of example.rb.</li>
<li><b>FooData.h/m</b> - This is an example data class that is wrapped using a Ruby class named FooData.</li>
</ul>

Everything is driven from the FooUtil singleton to make it easier to find each example. There are five methods to understand in FooUtil:


<ul>
<li><b>setDebugBlock</b> - This static method takes a block that will be passed a debug string. This gives an easy way of changing the output of the example.</li>
<li><b>loadFromBundle</b> - This is an example of loading a pre-compiled script. It assumes it can find the given filename in the app bundle.</li>
<li><b>execute</b> - This is an example of executing a loaded script. It assumes loadFromBundle has been called. Calling this method will cause the Ruby to objective-c examples to execute.</li>
<li><b>updateBarLocation</b> - This is an example of executing Ruby code from objective-c.</li>
<li><b>cleanup</b> - This method will force a garbage collection. It was added to demonstrate the release of the wrapped FooData class.</li>
</ul>

The example code doesn't as much error checking as you should have in a real app but it hopefully is enough to get you started. I plan on adding more examples to the github project as features get added to mruby and as I have time. As a reminder, you have to recompile the Ruby code if you make changes or they won't be seen.

