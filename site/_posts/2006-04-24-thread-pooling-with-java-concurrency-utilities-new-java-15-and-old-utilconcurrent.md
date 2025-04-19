---
layout: archive
status: publish
published: true
title: Thread pooling with Java concurrency utilities new (java 1.5) and old (util.concurrent)
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 30
wordpress_url: http://www.ioncannon.net/uncategorized/30/thread-pooling-with-java-concurrency-utilities-new-java-15-and-old-utilconcurrent/
date: '2006-04-24 12:21:17 -0400'
date_gmt: '2006-04-24 16:21:17 -0400'
categories:
- java
tags: []
comments: []
---
<div style="float: right; width: 106px;"><a href="http://www.amazon.com/exec/obidos/redirect?tag=httpblogforsm-20%26link_code=xm2%26camp=2025%26creative=165953%26path=http://www.amazon.com/gp/redirect.html%253fASIN=0321349601%2526tag=httpblogforsm-20%2526lcode=xm2%2526cID=2025%2526ccmID=165953%2526location=/o/ASIN/0321349601%25253FSubscriptionId=1NBF6KFYQSVK18ZKM7G2" title="View product details at Amazon"><img src="http://images.amazon.com/images/P/0321349601.01._SCMZZZZZZZ_.jpg" alt="Java Concurrency in Practice" /><br/>Java Concurrency in Practice</a></div>
Threading in java is fairly easy and now with java 1.5 some of the stuff that was harder has become even easier. A few years ago someone pointed me to a site that had some concurrency utils that where the precursor to what are now the concurrent utils in java 1.5. They are very close in functionality and if you can't use java 1.5 the older version of the utils will work with older versions of java and give you a lot of the same functionality.

I'm going to give a quick thread pooling example using both the new and old concurrency utils. I picked the thread pooling out of both since that seems to be what I end up using the most out of all the new utilities. I may revisit this again at some point to go over the periodic executors or some of the other things I have used but just not as much. 



The examples are for a network server that needs to process requests from clients. It is nice if each client doesn't have to wait for the other to finish and one of the easiest ways of doing that is to create threads for each client request. We will start with some code that is common between both concurrent implementations. Both versions will execute Runnable classes so the following class implements Runnable and will be the code that gets run with each new client request.

```
import org.apache.log4j.Logger;

import java.net.Socket;
import java.io.*;
import java.util.Map;
import java.util.HashMap;

public class RequestThread implements Runnable
{
  private static final Logger log = Logger.getLogger(RequestThread.class);

  private Socket requestSocket = null;

  public RequestThread(Socket requestSocket)
  {
    this.requestSocket = requestSocket;
  }

  public void run()
  {
    try
    {
      BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(requestSocket.getInputStream()));
      BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(requestSocket.getOutputStream()));

      // do some processing...

      bufferedReader.close();
      bufferedWriter.close();
    }
    catch (IOException e)
    {
      log.error("Error communicating with client: " + e.getMessage(), e);
    }
  }
}
```
<h3>The java 1.5 concurrency utils example</h3>
```
import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

public class NetworkServer
{
  private static final Logger log = Logger.getLogger(NetworkServer.class);
  private static final int THREAD_COUNT = 10;
  private static final short LISTEN_PORT = 3434;

  private ServerSocket serverSocket = null;
  private boolean shutdown = false;

  private final ThreadPoolExecutor pool = new ThreadPoolExecutor(THREAD_COUNT, THREAD_COUNT, 10, TimeUnit.SECONDS, new LinkedBlockingQueue());

  public NetworkServer() throws IOException
  {
    try
    {
      serverSocket = new ServerSocket(LISTEN_PORT);
    }
    catch (IOException e)
    {
      pool.shutdownNow();
      throw e;
    }
import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

public class NetworkServer
{
  private static final Logger log = Logger.getLogger(NetworkServer.class);
  private static final int THREAD_COUNT = 10;
  private static final short LISTEN_PORT = 3434;

  private ServerSocket serverSocket = null;
  private boolean shutdown = false;

  private final ThreadPoolExecutor pool = new ThreadPoolExecutor(THREAD_COUNT, THREAD_COUNT, 10, TimeUnit.SECONDS, new LinkedBlockingQueue());

  public NetworkServer() throws IOException
  {
    try
    {
      serverSocket = new ServerSocket(LISTEN_PORT);
    }
    catch (IOException e)
    {
      pool.shutdownNow();
      throw e;
    }
  }

  public void serve()
  {
    try
    {
      while(!shutdown)
      {
        pool.execute(new RequestThread(serverSocket.accept()));
      }
    }
    catch (Exception e)
    {
      log.error(&acirc;&euro;&oelig;Exception while starting request: &acirc;&euro;&oelig; + e.getMessage(), e);
    }
  }

  public void shutdown()
  {
    this.shutdown = true;
    pool.shutdownNow();
    makeFinalConnection();
  }

  private void makeFinalConnection()
  {
    try
    {
      Socket clientSocket = new Socket(&acirc;&euro;&oelig;localhost&acirc;&euro;, LISTEN_PORT);
      clientSocket.close();
    }
    catch (Exception e)
    {
    }
  }
}

  }

  public void serve()
  {
    try
    {
      while(!shutdown)
      {
        pool.execute(new RequestThread(serverSocket.accept()));
      }
    }
    catch (Exception e)
    {
      log.error("Exception while starting request: " + e.getMessage(), e);
    }
  }

  public void shutdown()
  {
    this.shutdown = true;
    pool.shutdownNow();
    makeFinalConnection();
  }

  private void makeFinalConnection()
  {
    try
    {
      Socket clientSocket = new Socket("localhost", LISTEN_PORT);
      clientSocket.close();
    }
    catch (Exception e)
    {
    }
  }
}
```
<h3>The older java concurrency utils example</h3>
```
import EDU.oswego.cs.dl.util.concurrent.PooledExecutor;
import EDU.oswego.cs.dl.util.concurrent.LinkedQueue;

import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;

import org.apache.log4j.Logger;

public class NetworkServer
{
  private static final Logger log = Logger.getLogger(NetworkServer.class);
  private static final int THREAD_COUNT = 10;
  private static final short LISTEN_PORT = 3434;

  private ServerSocket serverSocket = null;
  private boolean shutdown = false;

  private final PooledExecutor pool = new PooledExecutor(new LinkedQueue());

  public NetworkServer() throws IOException
  {
    pool.setKeepAliveTime(-1);
    pool.createThreads(THEAD_COUNT);

    try
    {
      serverSocket = new ServerSocket(LISTEN_PORT);
    }
    catch (IOException e)
    {
      pool.shutdownNow();
      throw e;
    }
  }

  public void serve()
  {
    try
    {
      while(!shutdown)
      {
        pool.execute(new RequestThread(serverSocket.accept()));
      }
    }
    catch (Exception e)
    {
      log.error("Exception while starting request: " + e.getMessage(), e);
    }
  }

  public void shutdown()
  {
    this.shutdown = true;
    pool.drain();
    pool.shutdownNow();
    makeFinalConnection();
  }

  private void makeFinalConnection()
  {
    try
    {
      Socket clientSocket = new Socket("localhost",LISTEN_PORT);
      clientSocket.close();
    }
    }
    catch (Exception e)
    {
    }
  }
}
```
As you can see the concurrency utils in java 1.5 are a close match to what is available in the older edu.oswego.cs.dl.util.concurrent packages. This makes it fairly easy to create thread pools when you are stuck having to use an older version of java. It also helps a lot when upgrading from that old version of java to the newer java 1.5.

To find out more about the java 1.5 concurrency utils or the older util.concurrent project visit the following links: <br>
<a href="http://java.sun.com/j2se/1.5.0/docs/guide/concurrency/">Concurrent utils in java 1.5</a> <br>
<a href="http://gee.cs.oswego.edu/dl/classes/EDU/oswego/cs/dl/util/concurrent/intro.html">edu.oswego.cs.dl.util.concurrent project</a>



