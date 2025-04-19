---
layout: archive
status: publish
published: true
title: Browser Based Push Notifications with Mongrel2 and EventSource
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1410
wordpress_url: http://www.ioncannon.net/?p=1410
date: '2011-01-04 14:00:05 -0500'
date_gmt: '2011-01-04 19:00:05 -0500'
categories:
- programming
tags:
- ruby
- mongrel2
- html5
comments: []
---

One of the interesting things about <a href="http://mongrel2.org/">Mongrel2</a> is its ability to send output to multiple clients with a single handler message. This has a lot of potential for push applications and while I was investigating Mongrel2 a new version of iOS came out that included changes to Safari. While looking at the list of <a href="http://www.mobilexweb.com/blog/safari-ios-accelerometer-websockets-html5">Safari changes in iOS 4.2</a> I noticed something called <a href="http://dev.w3.org/html5/eventsource/">EventSource</a> and went to investigate what it was.


As it turns out EventSource is a newer way of doing browser push currently supported by Chrome, Opera and Safari (mobile Safari as well). There is a good <a href="http://www.html5rocks.com/tutorials/eventsource/basics/">HTML5Rocks post on Server-Sent Events</a> that goes into more detail on the differences of using it over something like WebSockets. One of the differences is that EventSource specially addresses mobile device use with the ability to do a "Connectionless push" through a proxy so the end device can sleep but still receive push notifications.


Before reading on check out my <a href="http://www.ioncannon.net/programming/1384/example-mongrel2-handler-in-ruby/">example Mongrel2 ruby handler</a> post if you haven't already. The following examples will be based on the code from that post. I'm also going to use Modernizr to detect support for EventSource so check out my post on <a href="http://www.ioncannon.net/programming/1369/using-modernizr-simple-guide-and-examples/">using Modernizr to detect browser support</a> as well.


The first thing to do is configure Mongrel2. The following configuration will tell Mongrel2 to serve static content from a directory named "html" and connect the /esupdates path to a ruby handler we will write later (also note that it listens on more than one host, make sure you put your IP in place of the example IP):


```
root_dir = Dir(base='html/', index_file='index.html', default_ctype='text/plain')
esupdates = Handler(send_spec='tcp://127.0.0.1:9999', send_ident='54c6755b-9628-40a4-9a2d-cc82a816345e',
                    recv_spec='tcp://127.0.0.1:9998', recv_ident='')
routes = {
    '/esupdates': esupdates,
    '/': root_dir
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
    hosts=[ Host(name="192.168.1.1", routes=routes)
            Host(name="localhost", routes=routes) ]
)
settings = {"zeromq.threads": 1}
servers = [main]
```

The next step is to create the page that will set up the EventSource connection and display any push messages. In this example I'm using a modified version of Modernizr to detect EventSource support but you could do the test by hand or assume the user has support. The current version of Modernizr doesn't support EventSource yet but you can grab <a href="https://github.com/carsonmcdonald/Modernizr">my fork of Modernizr</a> where I have added it.


```
<!doctype html>
<html style="no-js">
  <head>
    <title>EventSource Test</title>
<style type="text/css" media="screen">
      div.esno, div.esyes { display: none }
      .no-eventsource div.esno { display: block }
      .eventsource div.esyes { display: block }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js" type="text/javascript"></script>
    <script src="modernizr-min.js" type="text/javascript"></script>
    <script type="text/javascript">
      function startUpdates()
      {
        var source = new EventSource('/esupdates');
        source.onmessage = function (event)
        {
          $("#events").innerHTML += event.data + '<br/>';
        };
        source.onerror = function (event)
        {
          $("#events").innerHTML += 'error<br/>';
        };
        source.onopen = function (event)
        {
           $("#events").innerHTML += 'open<br/>';
        };
      }
      $(document).ready(function()
      {
        if (Modernizr.eventsource)
        {
          setTimeout(startUpdates, 10);
        }
      });
    </script>
  </head>
  <body>
<div class="esno">
      Your browser does not support EventSource.
    </div>
<div class="esyes">
      Messages:<br/>
<div id="events"></div>
</div>
  </body>
</html>
```

The above creates the EventSource connection to the /esupdates URL and when any event comes in it appends that event to the div with the id of "events".  This and the Modernizr javascript need to go in the "html" directory.


And last comes the handler code. I have modified the ruby handler example from my previous post by adding a new ZMQ queue called "eventsource_queue" as well as a beacon thread that pushes a message to the "eventsource_queue" every 5 seconds. Messages coming in on the "eventsource_queue" are sent to every connected client:


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
  eventsource_queue = handler_ctx.socket(ZMQ::PULL)
  eventsource_queue.connect("ipc://eventsource_queue")
  connections = []
  stopped = false
  until stopped do
    selected_queue = ZMQ.select([receive_queue, stop_queue, eventsource_queue])
    if selected_queue[0][0] == stop_queue # Anything on the stop_queue ends processing
      stop_queue.close
      receive_queue.close
      eventsource_queue.close
      response_publisher.close
      handler_ctx.close
      stopped = true
    elsif selected_queue[0][0] == eventsource_queue # A message that goes out to all clients
      next if connections.size == 0 
      # The following must be the send_ident value used in the Handler config file entry
      sender_uuid = '54c6755b-9628-40a4-9a2d-cc82a816345e' 
      es_message = eventsource_queue.recv(0)
      # Note: This can only handle 128 connections without modification
      client_str = connections.join(' ')
      response_value = "#{sender_uuid} #{client_str.length}:#{client_str}, #{es_message}"
      response_publisher.send(response_value, 0)
    else
      # Request comes in as "UUID ID PATH SIZE:HEADERS,SIZE:BODY,"
      sender_uuid, client_id, request_path, request_message = receive_queue.recv(0).split(' ', 4)
      len, rest = request_message.split(':', 2)
      headers = JSON.parse(rest[0...len.to_i])
      len, rest = rest[(len.to_i+1)..-1].split(':', 2)
      body = rest[0...len.to_i]
      if headers['METHOD'] == 'JSON' and JSON.parse(body)['type'] == 'disconnect'
        connections.delete(client_id) # A client has disconnected, remove them from the list
        next
      end
      # Respond with the opening EventSource information
      connections << client_id
      headers = {}
      headers['Content-Type'] = 'text/event-stream'
      headers['Expires'] = 'Fri, 01 Jan 1990 00:00:00 GMT'
      headers['Cache-Control'] = 'no-cache, no-store, max-age=0, must-revalidate'
      headers['Pragma'] = 'no-cache'
      headers_s = headers.map{|k, v| "%s: %s" % [k,v]}.join("\r\n")
      content_body = ": time stream\nretry: 5000\n\n";
      response_value = "#{sender_uuid} #{client_id.to_s.length}:#{client_id}, HTTP/1.1 200 OK\r\n#{headers_s}\r\n\r\n#{content_body}"
      response_publisher.send(response_value, 0)
    end
  end
end
# This thread sends out a message every 5 seconds to all connected clients
beacon_thread = Thread.new do
  beacon_ctx = ZMQ::Context.new(1)
  eventsource_queue = beacon_ctx.socket(ZMQ::PUSH)
  eventsource_queue.bind("ipc://eventsource_queue")
  index = 1
  loop do
    eventsource_queue.send("id: #{index}\r\ndata: Timestamp #{Time.now}\r\n\r\n")
    sleep(5)
    index = index + 1
  end
end
ctx = ZMQ::Context.new(1)
stop_push_queue = ctx.socket(ZMQ::PUSH)
trap('INT') do # Send a message to shutdown on SIGINT
  stop_push_queue.bind("ipc://shutdown_queue")
  stop_push_queue.send("shutdown")
end
handler_thread.join
beacon_thread.kill
beacon_thread.join
stop_push_queue.close
```

There is a limitation in the above of 128 client connections at one time. This is something that could be fixed by splitting the set of connections into subsets of 128 each and sending each subset a message. I left that out to try to reduce the complexity of this example.


Although this example shows a single event going out to every client there is no need to limit it to just that. You could easily do the same thing for subsets of the full set of clients.


As a next step it might be interesting to see how well this setup could handle the <a href="http://www.kegel.com/c10k.html">C10k problem</a> or even the <a href="http://blog.urbanairship.com/blog/2010/08/24/c500k-in-action-at-urban-airship/">C500k problem</a>.

