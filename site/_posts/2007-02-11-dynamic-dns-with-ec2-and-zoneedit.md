---
layout: archive
status: publish
published: true
title: Dynamic DNS with EC2 and ZoneEdit
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 120
wordpress_url: http://www.ioncannon.net/system-administration/120/dynamic-dns-with-ec2-and-zoneedit/
date: '2007-02-11 16:25:44 -0500'
date_gmt: '2007-02-11 21:25:44 -0500'
categories:
- system administration
tags:
- ec2
- ZoneEdit
comments:
- id: 57992
  author: Shiraz Kanga
  author_email: skanga@bigfoot.com
  author_url: ''
  date: '2008-03-13 17:38:18 -0400'
  date_gmt: '2008-03-13 22:38:18 -0400'
  content: "It is advisable to use:\r\n\r\nwget -q -O /tmp/user-data.out http://169.254.169.254/latest/user-data\r\n\r\ninstead
    of\r\n\r\nwget -q -O /tmp/user-data.out http://169.254.169.254/1.0/user-data"
---
There seems to be a lot of questions on how to set up dyndns with EC2. It is fairly easy to do but I haven't seen anyone put everything together to do it yet so I figured I would write a little example using <a href="http://www.zoneedit.com/">ZoneEdit</a>. I picked ZoneEdit because it lets you sign up and host 5 domains for free.

First you need to sign up for a free ZoneEdit account and add your domain. I'll assume you can do this. Don't forget to change your domain to point to the ZoneEdit DNS servers. 


To find out more about how the following script works read: <a href="http://www.zoneedit.com/doc/dynamic.html">ZoneEdit's dynamic DNS information</a>.

I think it is nice to assign an instance its public hostname when it starts so I'm going to use the <a href="http://docs.amazonwebservices.com/AmazonEC2/dg/2007-01-03/AESDG-chapter-instancedata.html">instance metadata facility</a> to pull the hostname information.

Stick the following script in your local startup script (make sure you replace the username and password with your own ZoneEdit username and password):

```
wget -q -O /tmp/user-data.out http://169.254.169.254/1.0/user-data
HN=`cat /tmp/user-data.out`
rm -f /tmp/user-data.out
wget -q -O - --http-user=<username> --http-passwd=
<password> "http://dynamic.zoneedit.com/auth/dynamic.html?host=$HN" > /dev/null 2> /dev/null
hostname $HN
```
Then start your instance like this:

ec2-run-instances ami-2bb65342 -k gsg-keypair -d "test03.example.com"

Sometimes you may have to give ZoneEdit a few minutes to get your domain updated but soon after boot the node will be accessible by the name you have given it.



