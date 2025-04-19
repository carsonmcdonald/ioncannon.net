---
layout: archive
status: publish
published: true
title: Connection timeouts with the Apache commons TelnetClient
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 132
wordpress_url: http://www.ioncannon.net/java/132/connection-timeouts-with-the-apache-commons-telnetclient/
date: '2007-07-24 11:13:57 -0400'
date_gmt: '2007-07-24 16:13:57 -0400'
categories:
- java
tags: []
comments:
- id: 179333
  author: Oriol
  author_email: oriolfauria@gmail.com
  author_url: ''
  date: '2010-08-12 04:54:34 -0400'
  date_gmt: '2010-08-12 09:54:34 -0400'
  content: "Hello Carson,\r\n\r\nI know the post is quite old but as you said, there's
    not too much information about Telnet and so I've finally found your webpage.
    I'll try if you still can help me and if not thanks anyways.\r\n\r\nSo I've made
    an application for connecting my computer to a telnet server (using apache common
    telnetclient) and everything's working while no exceptions are coming. I mean,
    as you know,telnet is not sending any end point so for example I keep reading
    until I match a word. Of course that when this word does not come, my program
    keeps reading and so I would like to implement a Timeout to unblock it.\r\n\r\nWell,
    I've tried to build your code and Netbeans does not recognise me the \"org.apache.commons.net.SocketFactory\"
    but it does for \"org.apache.commons.net.telnet.TelnetClient\" so I get an error
    on:\r\n\r\n****private static class TimeoutSockectFactory implements SocketFactory****\r\n\r\nas
    it can not find the class \"SocketFactory\".\r\n\r\nDo you know if they have changed
    the package? I went to apache commons and in \"org.apache.commons.net.*\" it does
    not appear the SocketFactory package. What do you suggest?\r\n\r\nThank you,\r\n\r\nOriol"
- id: 199584
  author: Will
  author_email: co.sinecure@gmail.com
  author_url: http://codingbone.wordpress.com
  date: '2011-03-07 23:03:29 -0500'
  date_gmt: '2011-03-08 04:03:29 -0500'
  content: Hi Carson, v2.0 (oct 2008) release notes indicate that it is an included
    feature (http://commons.apache.org/net/changes-report.html#a2.0) - but the function
    is ```
---
I recently used the <a href="http://jakarta.apache.org/commons/net/">Apache commons net package</a> in a project to create a small telnet client that automated a login process. It is hard to find a lot of documentation on <a href="http://jakarta.apache.org/commons/net/apidocs/org/apache/commons/net/telnet/TelnetClient.html">TelnetClient</a> but there are some examples. For what I wanted to use the telnet client for I ran into a problem because I needed the connect call to time out. Try as I might I couldn't get <a href="http://jakarta.apache.org/commons/net/apidocs/org/apache/commons/net/SocketClient.html#setDefaultTimeout(int)">setDefaultTimeout</a> to work as advertised.


As it turns out the Apache commons developers are trying to keep the net commons package compatible with java 1.3 for some reason (see <a href="http://issues.apache.org/jira/browse/NET-141">this issue in jira</a>). If you want to have your connect request time out you have to implement your own <a href="http://jakarta.apache.org/commons/net/apidocs/org/apache/commons/net/SocketFactory.html">SocketFactory</a> first. Since there seems to be a lot of confusion on this and the commons net project seems to be idle now I figured it was worth writing about in case other people ever go looking.

Here is an example with a custom SocketFactory that will get the timeouts to work on connect:

```
package net.ioncannon;

import org.apache.commons.net.telnet.TelnetClient;
import org.apache.commons.net.SocketFactory;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.net.*;

public class TelAllTestMain
{
  public static void main(String[] args) throws IOException
  {
    TelnetClient telnetClient = new TelnetClient();
    telnetClient.setSocketFactory(new TimeoutSockectFactory());
    telnetClient.setDefaultTimeout(1000);
    telnetClient.connect("localhost");
    telnetClient.setSoTimeout(1000);
    telnetClient.setSoLinger(true, 1000);

    BufferedReader reader = new BufferedReader(new InputStreamReader(telnetClient.getInputStream()));

    StringBuffer stringBuffer = new StringBuffer();
    try
    {
      char buffer[] = new char[1024];
      int size = -1;
      while((size = reader.read(buffer)) != -1)
      {
        stringBuffer.append(buffer, 0, size);
        if(stringBuffer.toString().endsWith("something"))
        {
          System.err.println("Found the string...");
          break;
        }
      }
    }
    catch (Exception e)
    {
      System.err.println("Didn't find the string...");
    }      

    telnetClient.disconnect();
  }

  private static class TimeoutSockectFactory implements SocketFactory
  {
    public Socket createSocket(String hostname, int port) throws IOException
    {
      Socket socket = new Socket();
      socket.connect(new InetSocketAddress(hostname, port), 1000);
      return socket;
    }

    public Socket createSocket(InetAddress hostAddress, int port) throws IOException
    {
      Socket socket = new Socket();
      socket.connect(new InetSocketAddress(hostAddress, port), 1000);
      return socket;
    }

    public Socket createSocket(String remoteHost, int remotePort, InetAddress localAddress, int localPort) throws IOException
    {
      return new Socket();
    }

    public Socket createSocket(InetAddress remoteAddress, int remotePort, InetAddress localAddress, int localPort) throws IOException
    {
      return new Socket();
    }

    public ServerSocket createServerSocket(int port) throws IOException
    {
      return new ServerSocket();
    }

    public ServerSocket createServerSocket(int port, int backlog) throws IOException
    {
      return new ServerSocket();
    }

    public ServerSocket createServerSocket(int port, int backlog, InetAddress bindAddress) throws IOException
    {
      return new ServerSocket();
    }
  }
}
```


