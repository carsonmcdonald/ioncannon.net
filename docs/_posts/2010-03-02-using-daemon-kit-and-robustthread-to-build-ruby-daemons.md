---
layout: archive
status: publish
published: true
title: Using Daemon-Kit and RobustThread to Build Ruby Daemons
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 941
wordpress_url: http://www.ioncannon.net/?p=941
date: '2010-03-02 05:30:22 -0500'
date_gmt: '2010-03-02 10:30:22 -0500'
categories:
- programming
tags:
- ruby
- rabbitmq
- daemon
- daemon-kit
- robustthread
comments:
- id: 167007
  author: iPad Streaming Video and More
  author_email: ''
  author_url: http://www.ioncannon.net/programming/1015/ipad-streaming-video-and-more/
  date: '2010-04-06 06:02:05 -0400'
  date_gmt: '2010-04-06 11:02:05 -0400'
  content: "[...] I had thoughtabout using the ruby daemon utils to wrap the segmenter
    but I decided it probably isn&#39;t necessary at this point.     Bookmark to:
    \                  This entry was posted in programming and tagged ipad, iphone,
    segmenter, Streaming Video. Bookmark the permalink. Post a comment or leave a
    trackback: Trackback URL.   &laquo; Using Cursors with PHP MySQLi and Multiple
    Prepared Statements [...]"
---

On a number of occasions I have found myself needing to assemble a daemon process for some type or processing done using Ruby. Each time I roll things a little different and I finally started to wonder if someone had already put together tools for doing the daemon parts. After some quick digging I ran into <a href="http://github.com/kennethkalmer/daemon-kit">Daemon-Kit</a> and after adding it together with a couple other tools it seems like what I've needed. I've put together a few recipes here to help guide others who might be looking for something similar.


<ol>
  <li><a href="#simple-daemon">A simple daemon</a></li>
  <li><a href="#evented-daemon">An event driven daemon with RabbitMQ</a></li>
  <li><a href="#other">RobustThread, timeouts, monit/god, capistrano</a></li>
  <li><a href="#ruby-daemon-options">Other Ruby daemon options</a></li>
</ol>

<b><a name="simple-daemon">A simple daemon</a></b>


Creating a simple daemon is easy. This is a simple walk through so look at the project's documentation for much more information. First you will need to get the gem installed:


```
gem install daemon-kit

```

After the gem is installed you create a daemon with the following command:


```
daemon-kit asimple
```

Now you have some generated code in the asimple directory. In that directory you will find a README that tells you want each directory is used for. The main file to look at for this example is:


```
libexec/asimple-daemon.rb
```

A fresh file will have a lot of comments in it pointing you in the right direction. Here is a modified version where I'm displaying the contents of /tmp over and over:


```
DaemonKit::Application.running! do |config|
end
loop do
  DaemonKit.logger.info Dir.entries('/tmp/').join(' ')
  sleep 5
end
```

To run the daemon you would use a command like the following:


```
RUBYOPT=rubygems ./bin/asimple
```

The documentation found in the project is great so look there for more information. There is a lot of flexibility built in like multiple environment support and command line options. The <a href="http://www.elctech.com/articles/ruby-daemons-and-angels">daemons and angels</a> blog post is educational and worth a read for more on the basics of daemon-kit.


After experimenting for a while I think I may want to go back and redo the <a href="http://www.ioncannon.net/projects/http-live-video-stream-segmenter-and-distributor/">live segmenter</a> so that it uses daemon-kit instead of my hand rolled process. That is probably a good example of where the simple functionality comes in.


<b><a name="evented-daemon">An event driven daemon with RabbitMQ</a></b>


What tilted me towards looking into Ruby daemon options was actually another event driven process I was thinking about. As it turns out daemon-kit supports creating evented daemons as well. I picked RabbitMQ for the following example but anything that supports <a href="http://www.amqp.org/confluence/display/AMQP/Advanced+Message+Queuing+Protocol">AMQP</a> should work. I'm going to assume you have RabbitMQ installed already.


First off you need to install the <a href="http://github.com/tmm1/amqp">AMQP gem</a>:


```
gem install eventmachine
gem install amqp
```

At this point you might want to verify that you can connect to your MQ server using some <a href="http://github.com/ninjaconcept/amqp_examples">AMQP examples</a>. 


To generate an event based daemon use the following command:


```
daemon-kit -i amqp eventbased
```

For some reason the generated code didn't work right out of the box for me but a slight modification fixed the issue. I added the following to the top of the config/environment.rb file:


```
require 'amqp'
require 'mq'
```

Again the file generated in libexec is the starting point and gives you good hints as to where you want to start. I've modified my example above to take a directory to gather the contents of and respond with those contents as another message:


```
DaemonKit::Application.running! do |config|
end
DaemonKit::AMQP.run do
  amq = ::MQ.new
  amq.queue('dir_request').subscribe(:ack => true) do |h, msg|
      h.ack # just ack the message
      DaemonKit.logger.debug "Received message: #{msg.inspect}"
      amq.queue('dir_response').publish(Dir.entries(msg).join(' '))
  end
end
```

One thing to note is that I've set the message queue to require an acknowledgement for each message. I did this to simulate a process that requires that each request be executed once. Now all that is needed is a simple application to produce request messages and display the response:


```
require 'rubygems'
require 'amqp'
require 'mq'
AMQP.start(:vhost=>"/", :host=>"localhost", :user=>"guest", :pass=>"guest") do
  def produce_periodic_requests
    mq = MQ.new
    EM.add_periodic_timer(1) do
      puts "Creating request..."
      mq.queue('dir_request').publish("/tmp/")
    end
  end
  def watch_for_response
    mq = MQ.new
    mq.queue('dir_response').subscribe(:ack => true) do |h, msg|
      puts "Got response: #{msg}"
      h.ack
    end
  end
  produce_periodic_requests
  watch_for_response
end
```

I'm assuming that the MQ server that is being used has the user guest set up with the password guest, this is the default in the default that is generated by daemon-kit in the config/amqp.yml as well. At this point you should be able to execute both the daemon process and the producer and see the output on each end as the requests are completed. Note that the messages that come in are processed one at a time and this may not be optimal, you would probably want to spawn a new thread for each message or use a thread pool so that multiple messages could process at the same time.


<b><a name="other">RobustThread, timeouts, monit/god, and capistrano</a></b>


The above gets you a long way but there are a number of open ends that need to be tied up. The first of those is what happens if the requested action fails? In the above evented example if the directory request fails the entire daemon will end and that isn't going to be good. The first step to fixing this is to use <a href="http://github.com/JaredKuolt/robustthread">RobustThread</a>. Wrapping the action with RobustThread will make sure any exceptions thrown don't cause everything to stop.


Next you may have tasks that end up never completing for some reason. In this case you will want to use a timeout to kill the processing and move along. This actually works well with RobustThread since it can catch TimeoutErrors that get raised after a certain amount of time. Here is a modified version of the evented daemon above that takes two parameters in the incoming message to give both RobustThread and timeouts a test:


```
require 'robustthread'
DaemonKit::Application.running! do |config|
  RobustThread.logger = DaemonKit.logger
end
DaemonKit::AMQP.run do
  AMQP.conn.connection_status do |status|
    DaemonKit.logger.debug("AMQP connection status changed: #{status}")
    if status == :disconnected
      AMQP.conn.reconnect(true)
    end
  end
  amq = ::MQ.new
  RobustThread.exception_handler do |exception|
    RobustThread.logger.debug "Exception: #{exception.inspect}"
    amq.queue('dir_response').publish("Exception: #{exception.inspect}")
  end
  amq.queue('dir_request').subscribe(:ack => true) do |h, msg|
    rt = RobustThread.new(:args => [h, msg, amq], :label => "message processing") do |h, msg, amq|
      h.ack # in this case we always want to just ack the message
      DaemonKit.logger.debug "Received message: #{msg.inspect}"
      dir_name, sleep_time = msg.split(",")
       # give the request 5 seconds to complete before ending it
      Timeout.timeout(5) do
        sleep sleep_time.to_i
        amq.queue('dir_response').publish(Dir.entries(dir_name).join(' '))
      end
    end
  end
end
```

A modified version of the producer is also needed:


```
require 'rubygems'
require 'amqp'
require 'mq'
AMQP.start(:vhost=>"/", :host=>"localhost", :user=>"guest", :pass=>"guest") do
  def produce_periodic_requests
    mq = MQ.new
    EM.add_periodic_timer(1) do
      puts "Creating request..."
      mq.queue('dir_request').publish("/tmp/,1") # directory to list,seconds to sleep before listing
    end
  end
  def watch_for_response
    mq = MQ.new
    mq.queue('dir_response').subscribe(:ack => true) do |h, msg|
      puts "Got response: #{msg}"
      h.ack
    end
  end
  produce_periodic_requests
  watch_for_response
end
```

To see RobustThread in action just modify the request so it asks for a directory listing of a directory that doesn't exist. To see the timeout handling in action change the number after the directory to a value greater than 5. One thing to keep in mind with this example is that every request will spawn a new thread and if you have a large number of requests at one time you may end up starving your threads so that none of them can finish. A more complete implementation of this example would have some type of limit on the number of threads that would spawn at one time or use some type of thread pool (the Servolux project listed later has such a thread pool).


Now you have a fairly sturdy daemon process but there is still some possibility that what gets processed causes Ruby itself to die. In this case daemon-kit also has support for <a href="http://mmonit.com/monit/">Monit</a> and <a href="http://god.rubyforge.org/">God</a> that can both restart the daemon if needed. This is probably also a good place to mention that instead of using threads it may be better to use processes and something like the process worker pool from <a href="http://github.com/TwP/servolux">Servolux</a> to provide the ability to withstand process crashes.


On top of all that there is also support for <a href="http://www.capify.org/">Capistrano</a> deployments.


<b><a name="ruby-daemon-options">Other Ruby daemon options</a></b>


After building a the above examples and some more digging I ran into a few other options that are worth mentioning. I haven't looked into any of these in detail so I may be overlooking features and I also believe that these all fall outside of the simple case where all you want is a long running process. The first few are <a href="http://backgroundrb.rubyforge.org/">BackgrounDRB</a>, <a href="http://kr.github.com/beanstalkd/">Beanstalkd</a> and <a href="http://github.com/TwP/servolux">Servolux</a>. Another option I will mention is <a href="http://github.com/defunkt/resque">Resque</a> that was <a href="http://github.com/blog/542-introducing-resque">released by github</a> and lives on top of <a href="http://code.google.com/p/redis/">Redis</a>. From an initial look it seems like Resque may be a better option for situations where evented tasks being executed may crash the entire process and also has a lot of other features right out of the box. Out of these I'm probably going to investigate Resque more to see how it survives with workers that may crash.

