---
layout: archive
status: publish
published: true
title: Heroku Tips for the Cheap
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 842
wordpress_url: http://www.ioncannon.net/?p=842
date: '2009-12-20 05:50:14 -0500'
date_gmt: '2009-12-20 10:50:14 -0500'
categories:
- programming
tags:
- rails
- heroku
- mongodb
- rack
- tips
comments:
- id: 161498
  author: Jerry Cheung
  author_email: jch@whatcodecraves.com
  author_url: http://whatcodecraves.com
  date: '2010-01-21 07:31:15 -0500'
  date_gmt: '2010-01-21 12:31:15 -0500'
  content: I liked your "poor man's cron" idea and I'm definitely planning on doing
    to the periodically have my app pull down emails from Gmail for processing since
    I can't do "ActionMailer#receive" like I would normally
- id: 162178
  author: medwezys
  author_email: tadastoo@yahoo.com
  author_url: ''
  date: '2010-01-30 16:15:01 -0500'
  date_gmt: '2010-01-30 21:15:01 -0500'
  content: "BTW, I only needed to add one line to production.rb to make gmail SMTP
    work under heroku\r\n\r\n<i>require 'smtp_tls'</i>\r\n\r\nmaybe that helps someone"
- id: 211148
  author: will
  author_email: will@heroku.com
  author_url: http://heroku.com
  date: '2011-08-04 20:03:47 -0400'
  date_gmt: '2011-08-05 01:03:47 -0400'
  content: "The preferred way to run something more often than the cron addon allows,
    is to use Procfile run a clock process using a gem like Clockwork. See http://devcenter.heroku.com/articles/process-model\r\n\r\nI
    realize though that it wouldn't fall under \"for the cheap\" since you'd need
    to run a second dyno to do so. But you should try that route out and see if you
    like it."
- id: 227141
  author: Tim
  author_email: tim_mcallister@yahoo.com
  author_url: http://backyardrocket.com
  date: '2011-12-26 23:01:38 -0500'
  date_gmt: '2011-12-27 04:01:38 -0500'
  content: Heroku now has a free cron-like addon called scheduler. It will run jobs
    daily, hourly or every 10 minutes. 10 minutes is granular enough for my needs.
    http://addons.heroku.com/scheduler
- id: 264429
  author: Dave Aronson
  author_email: ioncannon2dave@davearonson.com
  author_url: http://www.davearonson.com/
  date: '2012-07-15 14:17:22 -0400'
  date_gmt: '2012-07-15 19:17:22 -0400'
  content: "@Tim, doesn't that still require signing up for a worker dyno?  Since
    those are priced based on wall-clock time rather than CPU time, I'd prefer to
    avoid buying one for as long as I can."
---

I've been playing around with the Ruby/Rails cloud provider <a href="http://www.heroku.com">Heroku</a> a little bit lately just to try it out. It is somewhat like Google App Engine or Microsoft Azure in the way it works since you bundle your application and push it out to the Heroku cloud for deployment. It is very easy to get things going but I ran into a few interesting items that I figured I would share. 

Some of the following grew out of the requirement that you verify for a lot of the Heroku addons and verification requires a credit card. For some of these tips there are easier paths if you don't mind paying a little extra or just verifying your account.

<ul>
  <li><a href="#heroku-config">Configuration</a></li>
  <li><a href="#heroku-cname">Set up a custom domain name</a></li>
  <li><a href="#heroku-cron">Poor man's cron</a></li>
  <li><a href="#heroku-gmail">Sending mail with GMail</a></li>
  <li><a href="#heroku-logs">Keeping your logs</a></li>
  <li><a href="#heroku-rack">Rack works too</a></li>
  <li><a href="#heroku-compiled-gems">Compiled gems</a></li>
  <li><a href="#heroku-dynos">Understanding dynos</a></li>
</ul>

<a name="heroku-config"><b>Configuration</b></a>

For configuration <a href="http://docs.heroku.com/config-vars#local-setup">Heroku has a way</a> but for some reason it didn't seem like the best or easiest way to do things. I started off setting up a configuration file as described in this <a href="http://railscasts.com/episodes/85-yaml-configuration-file">railscast on using yaml configuration files</a>. I took a while to dig a little more and found something similar but even <a href="http://almosteffortless.com/2009/06/25/config-vars-and-heroku/">better way of doing configuration with Heroku</a>.

<a name="heroku-cname"><b>Set up a custom domain name</b></a>

To make a more professional looking app you probably want to have a non-Heroku base domain name. They make it very easy to set that up using a <a href="http://docs.heroku.com/custom-domains#cname-setup">CNAME DNS entry</a>.

<a name="heroku-cron"><b>Poor man's cron</b></a>

One of the things I ran into pretty quickly was the need to run a task once every minute. Heroku offers both <a href="http://docs.heroku.com/cron">cron</a> and <a href="http://docs.heroku.com/delayed-job">delayed job</a>. The cron jobs offered are a little limited since the finest grained execution for cron is once an hour. I believe delayed jobs could be made to run every minute but the next issue with both cron and delayed job on Heroku is that they are addons that require verification. 

The solution for me was to create a poor man's cron. I added a controller that would execute the task and then ran wget to hit the controller from an external server. This isn't a great solution but for testing the service it worked fine. The main note on doing this is to keep in mind that you will tie up a dyno for the length of the request, see <a href="#heroku-dynos">Understanding dynos</a> for more.

<a name="heroku-gmail"><b>Sending mail with GMail</b></a>

If you want to send email you have a number of different options on Heroku. First off it is important to note that Heroku doesn't support sending email from their systems directly but instead they support outgoing <a href="http://docs.heroku.com/smtp">SMTP</a>. Sending mail with the <a href="http://docs.heroku.com/sendgrid">Sendgrid addon</a> is probably the most flexible option but the <a href="http://docs.heroku.com/gmail-smtp">GMail SMTP</a> option is the least costly. The GMail option gives you 500 emails a day and that was plenty for my use. 

Even though there is an addon for the GMail option you don't actually need to use it. Instead install the <a href="http://github.com/collectiveidea/action_mailer_optional_tls">action mailer optional TLS plugin</a>. Follow the readme to get it installed and configured. Then you put something like the following into your production.rb file:

```
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.raise_delivery_errors = true
  ActionMailer::Base.smtp_settings = {
    :tls            => true,
    :address        => 'smtp.gmail.com',
    :port           => 587,
    :domain         => 'example.come',
    :authentication => :plain,
    :user_name      => 'support@example.com',
    :password       => 'password'
  }
```

<a name="heroku-logs"><b>Keeping your logs</b></a>

One downside to Heroku is that they only retain a small portion of your logs. They indicate in their docs that they only retain <a href="http://docs.heroku.com/logs-exceptions">100 lines of logs</a>. So if you want to track your log output you will need to store them outside of the service. They give two suggestions in the docs for logging but there are other ways to do something similar on your own.

The solution I found that seems like the easiest is to use <a href="http://blog.philburrows.com/articles/2009/09/28/rails-logging-with-mongodb/">MongoDB to log</a> since it is <a href="http://blog.mongodb.org/post/172254834/mongodb-is-fantastic-for-logging">"fantastic for logging"</a>. You will need to have a <a href="http://www.mongodb.org/">MongoDB</a> server available first. If you don't want to <a href="http://www.engineyard.com/blog/2009/mongodb-a-light-in-the-darkness-key-value-stores-part-5/">install MongoDB on your own external server</a> you can try the new <a href="http://mongohq.com/">MongoDB hosted solution</a>.

Once you have the MongoDB server ready you will need to add the MongoDB gem to your .gems file:

```
mongodb-mongo --source gems.github.com
```

Then you will want to install the <a href="http://github.com/peburrows/mongo_db_logger">mongo db logger</a> plugin in your rails project. Just follow the instructions they give on the project page to get it installed. 

Your app/controllers/application_controller.rb will look something like this:

```
class ApplicationController < ActionController::Base
  include MongoDBLogging

  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
end
```

After you get the plugin installed you will have to hard code the MongoDB information into the plugin. This could probably be fixed and pulled out of a configuration file but it won't work the way it is set up out of the box. Edit the file vendor/plugins/mongo_db_logger/lib/mongo_logger.rb and change the db_configuration to match your setup. It should be something like this:

```
  db_configuration = {
    'host'    => 'my.mongohost.com',
    'port'    => 56700,
    'database'    => 'testapp',
    'capsize' => default_capsize}
```

Now you should be able to deploy to Heroku and see your logs show up in your MongoDB database.

A couple very important things to note are that this logging won't catch exceptions that happen above the application itself and if your MongoDB server goes down your app may hang trying to connect to it.

<a name="heroku-rack"><b>Rack works too</b></a>

You aren't limited to just Ruby on Rails with Heroku, <a href="http://docs.heroku.com/rack">rack works</a> as well. That opens the door for other frameworks like <a href="http://www.sinatrarb.com/">Sinatra</a>, <a href="http://merbivore.com/">Merb</a> and <a href="http://camping.rubyforge.org/files/README.html">Camping</a> on Heroku. It is also possible that more in depth logging could be done using <a href="http://clogger.rubyforge.org/">clogger</a> or even <a href="http://www.rackamole.com/">rack a mole</a>.

Here is an example Camping application:

The .gems file:

```
camping
```

The config.ru file:

```
require 'hello'
run Rack::Adapter::Camping.new(Hello)
```

The hello.rb file:

```
require 'camping'

Camping.goes :Hello

module Hello::Controllers
  class Index < R '/'
     def get
        render :hello
     end
  end
end

module Hello::Views
  def hello
     p  "Hello World!"
  end
end
```

<a name="heroku-compiled-gems"><b>Compiled gems</b></a>

Heroku also lets you use gems that need to be compiled before they are installed. You can see this if you try to use something like <a href="http://github.com/ice799/memprof">memprof</a> however you will also notice that in the memprof case it won't actually work because there are missing libraries. So using gems that require libraries may be hit or miss. 

If you are lucky you may find that the gem is already part of Heroku like RMagick is. Here is a little example of using Heroku and the RMagick gem to produce an image using Camping:

The .gems file:

```
camping
rmagick
```

The config.ru file:

```
require 'hello'
run Rack::Adapter::Camping.new(Hello)
```

The hello.rb file:

```
require 'camping'
require 'RMagick'

Camping.goes :Hello

module Hello::Controllers
  class Index < R '/'
     def get
       @headers["Content-Type"] = "image/gif"
       img = Magick::Image.new(200, 200)

       gc = Magick::Draw.new
       gc.gravity = Magick::CenterGravity
       gc.pointsize = 32
       gc.font_family = "Helvetica"
       gc.font_weight = Magick::BoldWeight
       gc.stroke = 'none'
       gc.annotate(img, 0, 0, 0, 0, "Hello world!")

       img.format = "GIF"
       img.to_blob
     end
  end
end
```

<a name="heroku-dynos"><b>Understanding dynos</b></a>

It is important to understand how <a href="http://docs.heroku.com/dynos">dynos</a> work. The bottom line is that you need one for every concurrent request. This is easy to demonstrate with the following modification of the Camping example above:

```
require 'camping'

Camping.goes :Hello

module Hello::Controllers
  class Index < R '/'
     def get
        render :hello
     end
  end
end

module Hello::Views
  def hello
     sleep 10
     p  "Hello World!"
  end
end
```

If you deploy this application to the free version of Heroku and then open two requests to it at the same time the second request will hang until the first one completes. This should illustrate why it is important to keep your processing quick and have enough dynos to match the concurrent request needs of your application.

