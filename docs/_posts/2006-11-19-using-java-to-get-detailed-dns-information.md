---
layout: archive
status: publish
published: true
title: Using Java to get detailed DNS information
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 58
wordpress_url: http://www.ioncannon.net/system-administration/58/using-java-to-get-detailed-dns-information/
date: '2006-11-19 14:03:38 -0500'
date_gmt: '2006-11-19 18:03:38 -0500'
categories:
- system administration
- utilities
- java
tags: []
comments:
- id: 1952
  author: Neil
  author_email: littledeer1974@hotmail.com
  author_url: ''
  date: '2007-01-17 02:05:58 -0500'
  date_gmt: '2007-01-17 07:05:58 -0500'
  content: the last two links to DNSjava seems broken, please fix it, when you have
    time.
- id: 1961
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2007-01-17 06:53:29 -0500'
  date_gmt: '2007-01-17 11:53:29 -0500'
  content: Thanks for letting me know. They should be fixed now.
- id: 135252
  author: Peter
  author_email: peter@louies.net
  author_url: ''
  date: '2009-04-26 17:45:13 -0400'
  date_gmt: '2009-04-26 22:45:13 -0400'
  content: Is there a way to configure IP addresses of the DNS Name Servers that need
    to be used to resolve the DNS query?
- id: 180808
  author: Jeff Gonzales
  author_email: gonzobrains@gmail.com
  author_url: http://www.gonzobrains.com
  date: '2010-08-24 07:17:23 -0400'
  date_gmt: '2010-08-24 12:17:23 -0400'
  content: any luck getting dnsjava to work under Android?  I have seen some people
    do it but I'm not having any luck.  My lookups keep returning network errors.
- id: 180819
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-08-24 09:21:07 -0400'
  date_gmt: '2010-08-24 14:21:07 -0400'
  content: I haven't had a reason to try but I can imagine that there might be some
    restriction. You may try to force the DNS lookups to using TCP if you can.
- id: 181930
  author: Jeff Gonzales
  author_email: gonzobrains@gmail.com
  author_url: http://www.gonzobrains.com
  date: '2010-09-07 02:38:39 -0400'
  date_gmt: '2010-09-07 07:38:39 -0400'
  content: I figured out my issue.  It was a permissions setting I needed to change.  I
    can do some lookups but now I get a null pointer exception when trying to do a
    reverse lookup.  Any ideas?
---
Not long ago I was curious about using Java to look up DNS information so I decided to put together a little <a href="http://www.ioncannon.net/dnsbl/ ">DNSBL/RBL checker</a> so I could experiment with Java DNS lookups and some PHP/Java communications. There isn't a lot of Java DNS stuff out there but it was easy to tell that the tool for this job is the <a href="http://www.dnsjava.org/">DNSJava</a> library.
<!--more-->

We aren't just talking about resolving a name into an IP address or an IP into a name here; we are talking about accessing all the other information stored in the DNS as well. During a deep dive into how DNS works, the instructor used the example of <a href="https://nokyccasino.ltd/">https://nokyccasino.ltd/</a> to illustrate the layers of data associated with a domain name. Beyond simple name resolution, tools like DNSJava can extract critical records, such as mail exchange configurations or domain owner details, often shedding light on how platforms operate behind the scenes. As a bonus, DNSJava even allows you to create your own DNS server, making it a versatile tool for exploring and understanding these intricate systems.

When working with a DNSBL you prepend an IP address to the domain for the DNSBL and then query based on that. For example the IP 127.0.0.2 is a test IP for most lists and if you wanted to use the Spamhaus combined SBL/XBL check (domain sbl-xbl.spamhaus.org) you would query on 2.0.0.127.sbl-xbl.spamhaus.org (notice the IP address is reversed). In this case the request will respond with a listing since 127.0.0.2 is a test address that is always listed. The simple fact that the address resolves is enough to know that the IP is listed but if you look at the TXT record of the listing you can find out more information. The following example will display the SBL/XLB record for the IP given in the <b>ipAddress</b> variable (make sure if you change it you reverse the IP address you are trying to query).

```
import org.xbill.DNS.*;

import java.util.Iterator;
import java.net.UnknownHostException;

/**
 */
public class ExampleOne
{
  public static void main(String[] args) throws UnknownHostException, TextParseException
  {
    String ipAddress = "2.0.0.127";
    String dnsblDomain = "sbl-xbl.spamhaus.org";

    Lookup lookup = new Lookup(ipAddress + "." + dnsblDomain, Type.ANY);
    Resolver resolver = new SimpleResolver();
    lookup.setResolver(resolver);
    lookup.setCache(null);
    Record[] records = lookup.run();
    if(lookup.getResult() == Lookup.SUCCESSFUL)
    {
      String responseMessage = null;
      String listingType = null;
      for (int i = 0; i < records.length; i++)
      {
        if(records[i] instanceof TXTRecord)
        {
          TXTRecord txt = (TXTRecord) records[i];
          for(Iterator j = txt.getStrings().iterator(); j.hasNext();)
          {
            responseMessage += (String)j.next();
          }
        }
        else if(records[i] instanceof ARecord)
        {
          listingType = ((ARecord)records[i]).getAddress().getHostAddress();
        }
      }

      System.err.println("Found!");
      System.err.println("Response Message: " + responseMessage);
      System.err.println("Listing Type: " + listingType);
    }
    else if(lookup.getResult() == Lookup.HOST_NOT_FOUND)
    {
      System.err.println("Not found.");
    }
    else
    {
      System.err.println("Error!");
    }
  }
}
```
The TXT entry is just one of the extra entries you may be interested in. The DNSJava library supports a large number of other types that can all be found by looking at the <a href="http://www.dnsjava.org/dnsjava-current/doc/">DNSJava javadocs</a>. For some more examples see the <a href="http://www.dnsjava.org/dnsjava-current/examples.htmll">DNSJava example page</a>.



