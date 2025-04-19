---
layout: archive
status: publish
published: true
title: Example Mongrel2 Handler in Ruby
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1384
wordpress_url: http://www.ioncannon.net/?p=1384
date: '2010-12-06 09:27:35 -0500'
date_gmt: '2010-12-06 14:27:35 -0500'
categories:
- programming
tags:
- ruby
- mongrel2
- zeromq
comments:
- id: 196522
  author: Browser Based Push Notifications with Mongrel2 and EventSource
  author_email: ''
  author_url: http://www.ioncannon.net/programming/1410/browser-based-push-notifications-with-mongrel2-and-eventsource/
  date: '2011-01-25 09:36:41 -0500'
  date_gmt: '2011-01-25 14:36:41 -0500'
  content: "[...] Profile WatcherWidget Of AwesomenessAP4J Player &#8211; Java AirPlay
    PlayerContactSitemap       &laquo; Example Mongrel2 Handler in Ruby Java AirPlay
    Client [...]"
- id: 199393
  author: Nathan Duran
  author_email: user@host.com
  author_url: http://khiltd.com
  date: '2011-03-04 00:44:46 -0500'
  date_gmt: '2011-03-04 05:44:46 -0500'
  content: Passing a hardcoded 1 as the size of your client_id netstring means your
    handler will die after the 9th client connects.
- id: 227934
  author: lex lapax
  author_email: lexlapax@gmail.com
  author_url: http://about.me/lapax
  date: '2012-01-01 01:55:17 -0500'
  date_gmt: '2012-01-01 06:55:17 -0500'
  content: "is there a reason you're using two different ZMQ contexts in the same
    process?\r\n\r\nas per zmq's spec, it's supposed to be 1 ctx per os process..\r\nthe
    reason i'm asking is: what you've done here seems to be the only way to get it
    working in ruby. The thread that fires up first seems to lock up the whole vm
    (ruby vm).. i've tried jruby, mri 1.9X, mri 1.8x etc.."
---

Right before I went to <a href="http://rubyconf.org">Rubyconf</a> I started looking at <a href="http://mongrel2.org/">Mongrel2</a> so I had something to hack on while I was there. I grabbed the two Ruby handlers listed on the main site, <a href="https://github.com/perplexes/m2r">Ruby Mongrel2</a> and <a href="https://github.com/darkhelmet/rack-mongrel2">Rack Mongrel2</a>, to get started. I noticed right away that I couldn't kill the handler process once it started using either one of these libraries. I started down the path of figuring out why they wouldn't respond to SIGINT and eventually to writing my own handler in Ruby that demonstrates how to fix the issue


Before getting started with the handler itself it is important to note that Mongrel2 uses <a href="http://www.zeromq.org/">ZeroMQ</a> to communicate with handlers. At least some idea of how ZeroMQ works is needed to follow along with the handler code so take a few minutes to read over the <a href="http://www.zeromq.org/intro:read-the-manual">manual</a>. After looking at the manual take a look at the <a href="http://www.zeromq.org/bindings:ruby">ZeroMQ Ruby bindings</a>. You may even want to take a few minutes and check out some <a href="https://github.com/andrewvc/learn-ruby-zeromq">examples using ZeroMQ with Ruby</a>.


The first significant difference between the following example handler and the two Ruby handlers list above is that it uses the ZeroMQ Ruby bindings. The other two use the <a href="https://github.com/chuckremes/ffi-rzmq">FFI RZMQ</a> bindings. I decided to use the ZeroMQ Ruby bindings after reading the "FEATURES/PROBLEMS" section of the FFI RZMQ bindings. The main drawback in going this route is that the example handler won't run under JRuby. After installing the ZeroMQ library you can use the following command to install the correct gem needed for the handler:


```
gem install zmq
```

You will also need the ZeroMQ library installed before installing Mongrel2.


Before starting on the handler it is important to understand how Mongrel2 is configured. A good place to start is either the <a href="http://mongrel2.org/wiki?name=GettingStarted">Mongrel2 quickstart guide</a> or the <a href="http://mongrel2.org/doc/tip/docs/manual/book.wiki">Mongrel2 manual</a>. The example handler was tested using mongrel2-1.4 and the following Mongrel2 configuration will work with the example handler:


```
demo = Handler(send_spec='tcp://127.0.0.1:9999', send_ident='54c6755b-9628-40a4-9a2d-cc82a816345e',
               recv_spec='tcp://127.0.0.1:9998', recv_ident='')
routes = {
    '/demo': demo
}
main = Server(
    uuid="2f62bd5-9e59-49cd-993c-3b6013c28f05",
    access_log="/logs/access.log",
    error_log="/logs/error.log",
    chroot="./",
    pid_file="/run/mongrel2.pid",
    default_host="localhost",
    name="main",
    port=6767,
    hosts=[ Host(name="localhost", routes=routes) ]
)
settings = {"zeromq.threads": 1}
servers = [main]
```

Assuming you have Mongrel2 installed and working you can copy the above into a file called m2.conf and then run the following command:


```
m2sh load --db config.sqlite -config m2.conf
```

This configuration sets up a route at /demo that maps to the example handler. The handler is expected to use TCP to communicate with Mongrel2 on localhost ports 9999 and 9998.


With all that out of the way it is finally time for the handler. The following is the outer shell of the handler. It creates a thread that will handle the incoming messages and the response. It then sets up an interrupt trap on the main thread and waits for the handler thread to end:


```
handler_thread = Thread.new do
# This is where the zeromq interface will go
  stopped = false
  until stopped do
# This is where messages will be processed
  end
end
trap('INT') do # Send a message to shutdown on SIGINT
# This is where the interrupt signal will be handled
end
handler_thread.join
```

With the shell in place the next part to go in is the communication with Mongrel2. Here we open two ZeroMQ sockets to Mongrel2. The first is a "PULL" socket that will have incoming request messages. The second is a "PUB" socket that will be used to push responses back. The incoming messages are parsed and the response is sent back containing "Hello world!":


```
require 'zmq'
require 'json'
handler_thread = Thread.new do
  handler_ctx = ZMQ::Context.new(1)
  receive_queue = handler_ctx.socket(ZMQ::PULL)
  receive_queue.connect("tcp://127.0.0.1:9999")
  response_publisher = handler_ctx.socket(ZMQ::PUB)
  response_publisher.connect("tcp://127.0.0.1:9998")
  response_publisher.setsockopt(ZMQ::IDENTITY, "82209006-86FF-4982-B5EA-D1E29E55D481")
  stopped = false
  until stopped do
    # Request comes in as "UUID ID PATH SIZE:HEADERS,SIZE:BODY,"
    sender_uuid, client_id, request_path, request_message = receive_queue.recv(0).split(' ', 4)
    len, rest = request_message.split(':', 2)
    headers = JSON.parse(rest[0...len.to_i])
    len, rest = rest[(len.to_i+1)..-1].split(':', 2)
    body = rest[0...len.to_i]
    if headers['METHOD'] == 'JSON' and JSON.parse(body)['type'] == 'disconnect'
      next # A client has disconnected, might want to do something here...
    end
    # Response goes out as "UUID SIZE:ID ID ID, BODY"
    content_body = "Hello world!"
    response_value = "#{sender_uuid} 1:#{client_id}, HTTP/1.1 200 OK\r\nContent-Length: #{content_body.size}\r\n\r\n#{content_body}"
    response_publisher.send(response_value, 0)
  end
end
trap('INT') do # Send a message to shutdown on SIGINT
# This is where the interrupt signal will be handled
end
handler_thread.join
```

At this point the handler will work just fine but it won't die without a kill -9. Fixing that is where the trap('INT') and handler thread come in to play. The following version is the final version and uses a third internal queue called the "shutdown_queue" to signal that the handler thread should stop. One change you should note from the above example is the use of the select call that watches multiple sockets:


```
require 'zmq'
require 'json'
handler_thread = Thread.new do
  handler_ctx = ZMQ::Context.new(1)
  receive_queue = handler_ctx.socket(ZMQ::PULL)
  receive_queue.connect("tcp://127.0.0.1:9999")
  response_publisher = handler_ctx.socket(ZMQ::PUB)
  response_publisher.connect("tcp://127.0.0.1:9998")
  response_publisher.setsockopt(ZMQ::IDENTITY, "82209006-86FF-4982-B5EA-D1E29E55D481")
  stop_queue = handler_ctx.socket(ZMQ::PULL)
  stop_queue.connect("ipc://shutdown_queue")
  stopped = false
  until stopped do
    selected_queue = ZMQ.select([receive_queue, stop_queue])
    if selected_queue[0][0] == stop_queue # Anything on the stop_queue ends processing
      stop_queue.close
      receive_queue.close
      response_publisher.close
      handler_ctx.close
      stopped = true
    else
      # Request comes in as "UUID ID PATH SIZE:HEADERS,SIZE:BODY,"
      sender_uuid, client_id, request_path, request_message = receive_queue.recv(0).split(' ', 4)
      len, rest = request_message.split(':', 2)
      headers = JSON.parse(rest[0...len.to_i])
      len, rest = rest[(len.to_i+1)..-1].split(':', 2)
      body = rest[0...len.to_i]
      if headers['METHOD'] == 'JSON' and JSON.parse(body)['type'] == 'disconnect'
        next # A client has disconnected, might want to do something here...
      end
      # Response goes out as "UUID SIZE:ID ID ID, BODY"
      content_body = "Hello world!"
      response_value = "#{sender_uuid} 1:#{client_id}, HTTP/1.1 200 OK\r\nContent-Length: #{content_body.size}\r\n\r\n#{content_body}"
      response_publisher.send(response_value, 0)
    end
  end
end
ctx = ZMQ::Context.new(1)
stop_push_queue = ctx.socket(ZMQ::PUSH)
trap('INT') do # Send a message to shutdown on SIGINT
  stop_push_queue.bind("ipc://shutdown_queue")
  stop_push_queue.send("shutdown")
end
handler_thread.join
stop_push_queue.close
```

This is the bare minimum handler and doesn't use all the features that Mongrel2 has. One of the most interesting features of Mongrel2 is the ability to have the handler respond to multiple client requests with a single response message. I hope to use this feature in the near future to test out server side event push with Javascript using <a href="http://dev.w3.org/html5/eventsource/">EventSource</a>. 

