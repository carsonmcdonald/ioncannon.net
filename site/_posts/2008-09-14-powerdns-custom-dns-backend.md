---
layout: archive
status: publish
published: true
title: PowerDNS Makes Custom DNS Backends Easy
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 135
wordpress_url: http://www.ioncannon.net/?p=135
date: '2008-09-14 17:55:41 -0400'
date_gmt: '2008-09-14 22:55:41 -0400'
categories:
- system administration
- linux
- utilities
- java
- software
tags: []
comments: []
---

I ran into <a href="http://www.powerdns.com/">PowerDNS</a> recently when I needed to find a DNS server that would allow me to produce custom responses to domain queries. I needed to have a request for a DNS entry return a different IP depending on some factors in a database and I needed that data to always be accurate (not cached locally). I found that PowerDNS allows for a lot of customization and I ended up using its <a href="http://doc.powerdns.com/pipebackend-dynamic-resolution.html">piped backend for dynamic queries</a> feature.

With this level of customization you can do things like write your own <a href="http://en.wikipedia.org/wiki/DNS_Blacklist">DNS black list</a>, track who is making DNS requests, give out IP addresses based on a servers availability or use geographic information to return a different IP.

The following is an overview of how to set up your own PowerDNS piped backend process. To start out it may help to read the <a href="http://doc.powerdns.com/backends-detail.html">overview of the PowerDNS backend</a>. 

Here is an example program that is run directly by PowerDNS using pipes:

```
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class PowerDNSPipeTest
{
  public static void main(String[] args) throws Exception
  {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

    readIntro(reader);

    String line;
    while((line = reader.readLine()) != null)
    {
      processLine(line);
    }
  }

  private static void processLine(String line)
  {
    String values[] = line.split("\t");

    if(values.length == 6)
    {
      // Testing any a response to the ANY or A record request
      if("ANY".equalsIgnoreCase(values[3]) || "A".equalsIgnoreCase(values[3]))
      {
        System.out.println("DATA\t" + values[1] + "\tIN\tA\t0\t1800\t127.0.0.5");
      }
    }
    else
    {
      System.out.println("LOG\tPowerDNS sent unpareable string");
      System.out.println("FAIL");
    }

    System.out.println("END");
    System.out.flush();
  }

  private static void readIntro(BufferedReader reader) throws IOException
  {
    String line = reader.readLine();
    if(line != null)
    {
      String values[] = line.split("\t");
      if(values.length == 2 && "HELO".equals(values[0]) && "1".equals(values[1]))
      {
        System.out.println("OK\tBackend starting");
        return;
      }
    }

    System.out.println("FAIL");
    System.out.flush();
    System.exit(-1);
  }
}
```

I found that for some reason PowerDNS didn't want to run the java command directly so I copied that class to /tmp and wrapped the command in a small shell script like this to see if that would fix the problem:

```
#!/bin/sh
/usr/local/java/bin/java -cp /tmp/ PowerDNSPipeTest
```

In the configuration file I then added:

```
launch=pipe
pipe-command=/tmp/powerdns.sh
```

This works fine but PowerDNS spawns multiple backend processes to run the piped application and with java that seemed like a bad idea since it would create an entire JVM instance each time. So I decided to modify their sample perl program to send the requests to a long running java background process that would then just use threads.

```
#!/usr/bin/perl -w

use strict;

$|=1;                                   # no buffering

my $line=<>;
chomp($line);

unless($line eq "HELO\t1")
{
        print "FAIL\n";
        print STDERR "Recevied '$line'\n";
        <>;
        exit;
}
print "OK       Sample backend firing up\n";    # print our banner

while(<>)
{
        print STDERR "$$ Received: $_\n";
        chomp();
        my @arr=split(/\t/);
        if(@arr<6)
        {
                print "LOG      PowerDNS sent unparseable line\n";
                print "FAIL\n";
                next;
        }

        print STDERR "$$ Sent A records\n";
        print &sendRequest($_ . "\n");

        print STDERR "$$ End of data\n";
        print "END\n";
}

sub sendRequest
{
  use Socket;
  my($sockaddr, $this, $that, $thataddr, $thisaddr, $remote, $port, $iaddr, $paddr, $proto, $line, @output);

  $remote = "127.0.0.1";
  $port = 4444;
  $sockaddr = 'S n a4 x8';

  if ($port =~ /\D/) { $port = getservbyname($port, 'tcp') }
  die "No port" unless $port;
  $thisaddr   = gethostbyname("localhost");
  $thataddr   = gethostbyname($remote);
  $this   = pack($sockaddr, AF_INET, 0, $thisaddr);
  $that   = pack($sockaddr, AF_INET, $port, $thataddr);

  $proto   = getprotobyname('tcp');
  socket(SOCK, PF_INET, SOCK_STREAM, $proto)  || die "socket: $!";
  bind(SOCK, $this)    || die "bind: $!";
  connect(SOCK, $that)    || die "connect: $!";
  select(SOCK); $| = 1; select(STDOUT);

  print SOCK @_;
  @output = <SOCK>;

  close (SOCK) || die "close: $!";
  @output;
}
```

Here is the code for the threaded java server modified from the above pipe example:

```
import java.net.ServerSocket;
import java.net.Socket;
import java.io.*;
import java.util.concurrent.PriorityBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class PowerDNSServerTest
{
  public static void main(String[] args) throws Exception
  {
    PriorityBlockingQueue<Runnable> queue = new PriorityBlockingQueue<Runnable>();
    ThreadPoolExecutor threadPool = new ThreadPoolExecutor(5, 30, 30, TimeUnit.SECONDS, queue);

    ServerSocket serverSocket = new ServerSocket(4444);

    while(true)
    {
      threadPool.execute(new PowerDNSServerClientThread(serverSocket.accept()));
    }
  }

  private static class PowerDNSServerClientThread implements Runnable
  {
    private Socket clientSocket;

    public PowerDNSServerClientThread(Socket clientSocket)
    {
      this.clientSocket = clientSocket;
    }

    public void run()
    {
      try
      {
        BufferedReader input = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
        BufferedWriter output = new BufferedWriter(new OutputStreamWriter(clientSocket.getOutputStream()));

        String command = input.readLine();
        System.err.println("[" + Thread.currentThread().getName() + "] Received: " + command);

        String values[] = command.split("\t");

        if(values.length == 6)
        {
          // Testing any a response to the ANY or A record request
          if("ANY".equalsIgnoreCase(values[3]) || "A".equalsIgnoreCase(values[3]))
          {
            output.write("DATA\t" + values[1] + "\tIN\tA\t0\t1800\t127.0.0.5\n");
          }
        }
        else
        {
          output.write("LOG\tPowerDNS sent unpareable string\n");
          output.write("FAIL\n");
        }

        output.write("END\n");
        output.flush();

        output.close();
        input.close();

        clientSocket.close();
      }
      catch (IOException e)
      {
        e.printStackTrace();
      }
    }
  }
}
```

In the config file I replaced the above entries with:

```
launch=pipe
pipe-command=/tmp/powerdns.pl
```

That is all there is to it. So far this is the easiest way I have found of passing requests on to an application. The configuration for PowerDNS also allows you to force a request to the backend with every query eliminating the internal cache. For me that was a needed feature since every request could potentially change from second to second and the latest IP would need to be given out. I found that there are a lot of options for small tweaks like this that are probably on the fringe of what 99% of users need but are very handy to be able to change when you need to change them.

