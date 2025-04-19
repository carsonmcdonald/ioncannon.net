---
layout: archive
status: publish
published: true
title: Getting Started with JRuby Webapps using Rack and Sinatra
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1325
wordpress_url: http://www.ioncannon.net/?p=1325
date: '2010-10-07 06:17:16 -0400'
date_gmt: '2010-10-07 11:17:16 -0400'
categories:
- programming
tags:
- rack
- jruby
- sinatra
- mizuno
comments: []
---

Going to <a href="http://jrubyconf.com/">JRubyConf</a>, hosted by some of the <a href="https://www.saferglasgow.com/new-online-casinos-uk/">latest online casinos</a> leading the internet world, inspired me enough to expand my knowledge of <a href="http://jruby.org/">JRuby</a>. This is a quick guide for anyone looking to see what can be done with JRuby and Sinatra.


Of course the first step is to install the <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java JDK</a>. Download, install and then set it up in your path. I'm using JDK 6 update 21 on Linux for this post in case it matters.


There are a couple ways to install JRuby after you have Java installed. The hard way is to <a href="http://www.jruby.org/download">download JRuby</a> and install it by hand. The easy way is to use <a href="http://rvm.beginrescueend.com/">Ruby Version Manager</a> to install it. Using RVM will let you switch between Ruby versions as well as giving you a simple command to install JRuby:


```
rvm install jruby
rvm use jruby
```

At this point you should be able to run a test JRuby application and install gems in the JRuby environment. The next step is to install a few gems. Those gems are <a href="http://github.com/matadon/mizuno">mizuno</a>, <a href="http://rack.rubyforge.org/">rack</a> and <a href="http://www.sinatrarb.com/">sinatra</a>:


```
gem install mizuno rack sinatra
```

Of these three packages the one that you may not have heard about is mizuno. Mizuno runs a Java based web container called Jetty and will allow you to easily run rack based JRuby apps easily. Beyond the ease of running Rack apps mizuno is also very fast but for this post the main thing is that it gives you a very easy way to get the sinatra application up and running without a lot of work.


You now have all the basics installed and it is time to create a simple sinatra app. Start by creating a file named myapp.rb with the follwing in it:


```
require 'sinatra/base'
class MyApp &amp;lt; Sinatra::Base
  get '/' do
    'Hello world!'
  end
end
```

This is a very simple sinatra application that will display "Hello world!" whenever you get the root URL. Check out the <a href="http://www.sinatrarb.com/intro.html">sinatra intro</a> for more information about sinatra if you aren't already familiar with it.


Next you will need to create a rack configuration file named config.ru in the same directory as your myapp.rb file:


```
require 'rubygems'
require 'myapp'
MyApp.run! :host =&amp;gt; 'localhost', :port =&amp;gt; 8080
```

The above configuration tells rack to run the simple MyApp application on localhost:8080.

Now you are ready to start the application with mizuno. In the same directory as the config.ru and myapp.rb file run the following command:


```
mizuno
```

Something like the following should be displayed on the console after running the command:


```
== Sinatra/1.0 has taken the stage on 8080 for development with backup from WEBrick
[2010-10-04 21:04:06] INFO  WEBrick 1.3.1
[2010-10-04 21:04:06] INFO  ruby 1.8.7 (2010-09-28) [java]
[2010-10-04 21:04:06] INFO  WEBrick::HTTPServer#start: pid=26276 port=8080
```

Now if you connect to localhost:8080 with a web browser you will see "Hello world!" To stop the mizuno server just hit ctrl-c. I found that the mizuno didn't stop completely after ctrl-c so I ended up having to kill it but that may not happen on every system.


At this point you are able to make simple applications with sinatra and JRuby but you won't want to stop there. Your next step will be to use a database. For database access I decided to use <a href="http://datamapper.org/">DataMapper</a> on top of SQLite. If you aren't familiar with DataMapper check out the <a href="http://datamapper.org/getting-started">DataMapper getting started guide</a>. Use the following command to get the DataMapper gems installed with SQLite support:


```
gem install dm-core dm-migrations dm-sqlite-adapter
```

The following code adds a DataEntry model and two routes to the original simple application. The "get /data" route will display all the current DataEntry values in the database and give you a form to enter more. The "post /data" route will take a new entry to add to the database:


```
require 'sinatra/base'
require 'dm-core'
require 'dm-migrations'
class DataEntry
  include DataMapper::Resource
  property :id, Serial
  property :entry, String
end
class MyApp &amp;lt; Sinatra::Base
  configure do
    DataMapper::Logger.new($stdout, :debug)
    DataMapper.setup(:default, 'sqlite:///tmp/survey.db')
    DataMapper.auto_upgrade!
  end
  get '/' do
    'Hello world!'
  end
  get '/data' do
    display_value = '&amp;lt;ol&amp;gt;'
    DataEntry.all.each do |data|
      display_value += '&amp;lt;li&amp;gt;' + data.entry + '&amp;lt;/li&amp;gt;'
    end
    display_value += '&amp;lt;/ol&amp;gt;'
    display_value += '&amp;lt;form action=&amp;quot;/data&amp;quot; method=&amp;quot;POST&amp;quot;&amp;gt;'
    display_value += 'Entry: &amp;lt;input name=&amp;quot;entry&amp;quot; type=&amp;quot;text&amp;quot;/&amp;gt;&amp;lt;br/&amp;gt;'
    display_value += '&amp;lt;input type=&amp;quot;submit&amp;quot;/&amp;gt;'
    display_value += '&amp;lt;/form&amp;gt;'
  end
  post '/data' do
    @entry = DataEntry.create(:entry =&amp;gt; params[:entry])
    'Entry created&amp;lt;br/&amp;gt; &amp;lt;a href=&amp;quot;/data&amp;quot;&amp;gt;Enter more&amp;lt;/a&amp;gt;'
  end
end
```

The sinatra reference documentation has examples of a number of different templating engines but I'm going to use <a href="http://haml-lang.com/">haml templates</a> for one final example. Use the following command to install the haml gem:


```
gem install haml
```

The following code does the same thing as the last version but uses named templates, check out the <a href="http://haml-lang.com/docs/yardoc/file.HAML_REFERENCE.html">haml reference</a> for details:


```
require 'sinatra/base'
require 'dm-core'
require 'dm-migrations'
require 'haml'
class DataEntry
  include DataMapper::Resource
  property :id, Serial
  property :entry, String
end
class MyApp &amp;lt; Sinatra::Base
  configure do
    DataMapper::Logger.new($stdout, :debug)
    DataMapper.setup(:default, 'sqlite:///tmp/survey.db')
    DataMapper.auto_upgrade!
  end
  get '/' do
    haml :index
  end
  get '/data' do
    haml :data_entry, :locals =&amp;gt; { :data =&amp;gt; DataEntry.all }
  end
  post '/data' do
    @entry = DataEntry.create(:entry =&amp;gt; params[:entry])
    haml :data_created
  end
  template :layout do
    &amp;quot;%html\n  =yield\n&amp;quot;
  end
  template :index do
    '%h2 Hello World!'
  end
  template :data_entry do
    &amp;quot;%ol\n&amp;quot; +
    &amp;quot;  - data.each do |entry|\n&amp;quot; +
    &amp;quot;    %li= entry.entry\n&amp;quot; +
    &amp;quot;%form{:action =&amp;gt; '', :method =&amp;gt; 'post'}\n&amp;quot; +
    &amp;quot;  Entry:\n&amp;quot;+
    &amp;quot;  %input{:type =&amp;gt; 'text', :name =&amp;gt; 'entry'}\n&amp;quot;+
    &amp;quot;  %input{:type =&amp;gt; 'submit', :value =&amp;gt; 'Create'}&amp;quot;
  end
  template :data_created do
    &amp;quot;%div\n&amp;quot; +
    &amp;quot;  Entry created\n&amp;quot; +
    &amp;quot;%a(href='/data') Enter more&amp;quot;
  end
end
```

Again, I've included everything in one file for simplicity but you would want to split this up. Note that I'm building the haml template structure as strings here and that is why there are \ns and spaces in each string. Creating separate files for each template would be the way to go in any complex application.

I had already been thinking about using JRuby before the conference as a way to show that Java on a TTYLinux box can be widely useful. One of the main drawbacks of running TTYLinux is that you have to build everything by hand and that can get complicated. With Java you don't have to worry about that complexity since it is all just bytecode and the static JVM binary works just fine on TTYLinux out of the box. I think <a href="http://www.ioncannon.net/system-administration/1310/minimal_ec2_linux_install_using_ttylinux/">TTYLinux on EC2</a> and Java could be a powerful solution.

