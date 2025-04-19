---
layout: archive
status: publish
published: true
title: Limiting Bandwidth Usage on Xen Linux Setup
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 57
wordpress_url: http://www.ioncannon.net/system-administration/57/limiting-bandwidth-usage-on-xen-linux-setup/
date: '2006-08-06 11:31:28 -0400'
date_gmt: '2006-08-06 15:31:28 -0400'
categories:
- system administration
- linux
tags: []
comments:
- id: 102
  author: Monitoring Bandwidth Usage for a Xen node @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/84/monitoring-bandwidth-usage-for-a-xen-node/
  date: '2006-08-13 06:41:00 -0400'
  date_gmt: '2006-08-13 10:41:00 -0400'
  content: "[...] After my last post on limiting bandwidth usage on a Xen node I thought
    I would follow up with how to monitor the bandwidth usage of a Xen node. [...]"
- id: 11874
  author: Fuzzy
  author_email: no@mytrashmail.com
  author_url: ''
  date: '2007-04-16 06:35:22 -0400'
  date_gmt: '2007-04-16 11:35:22 -0400'
  content: Nice article.  It would be nice if you also supplied examples of what the
    status output data from tc an iptables should look like.
- id: 30083
  author: hiephoi
  author_email: michel@longui.ch
  author_url: ''
  date: '2007-09-26 11:40:31 -0400'
  date_gmt: '2007-09-26 16:40:31 -0400'
  content: "I'm probably dense. This just doesn't work like it's stated above.\r\nmy
    domu's can still download at full speed."
---

<a href="http://www.ioncannon.net/system-administration/69/virtualization-gaining-speed/">Xen seems to be gaining speed</a> these days and has a lot of useful features for those who want to resale or otherwise split a single box. Now that you have your Xen system set up you may be interested in going farther with bandwidth limiting.

The hardest part of setting up bandwidth limiting is understanding the <a href="http://lartc.org/lartc.html#LARTC.QDISC">traffic control</a> system under Linux. This mainly revolves around the tc command. 

The first thing you will want to do is select a queue discipline. Although you can select from a number of disciplines I picked <a href="http://luxik.cdi.cz/~devik/qos/htb/manual/userg.htm">HTB</a> for the following instructions because it seems to be the simplest to set up. All of the following is done on Xen0.

1. The first thing you will need to do is find the name of your real ethernet device. This seems to change depending on what version of Xen you are running. For my setup it was peth0 and I was able to find it by looking at dmesg right after the system booted.

2. After finding the name of your ethernet device you will need to set up a default queuing discipline that will catch anything that doesn't hit a child rule. Here we set the handle to 1 and a class sub id of 99.

    ```
    tc qdisc add dev peth0 root handle 1: htb default 99
    ```
3. Next we define a default rate that will be used as a total for all child rates as well as anything that doesn't fall into a child bucket. In this case I'm setting the total rate to 20mbps with a burst of 15k.

    ```
    tc class add dev peth0 parent 1: classid 1:1 htb rate 20mbps burst 15k
    ```
    Setting a burst lets small amounts of traffic go faster than the normal rate. The burst is also shared with the children so make sure to set it higher than any one child. Also note that parent 1: references the parents classid that we created above.
4. Now that we have our default class and rate set up we set up child classes and rates for each node. Here I set up classes for 2 XenU nodes and the Xen0 node.

    ```
    tc class add dev peth0 parent 1:1 classid 1:13 htb rate 5mbps burst 15k
    tc class add dev peth0 parent 1:1 classid 1:14 htb rate 10mbps burst 15k
    tc class add dev peth0 parent 1:1 classid 1:99 htb rate 5mbps burst 15k
    ```
    Note that the parent classid is referenced here as 1:1 that we created above. We also assign each bucket its own unique classid.
5. Now we need to determine who gets serviced in what order. In this example I use sfq for each class so that each class should get equal time as traffic is coming in.

    ```
    tc qdisc add dev peth0 parent 1:13 handle 13: sfq perturb 10
    tc qdisc add dev peth0 parent 1:14 handle 14: sfq perturb 10
    tc qdisc add dev peth0 parent 1:99 handle 22: sfq perturb 10
    ```
6. Now the final step is to attach the defined classes to the routing system. This is done by using iptables and the given classid from the class setup step.

    ```
    iptables -t mangle -A POSTROUTING -p tcp -s 192.168.1.103 -j CLASSIFY --set-class 1:13
    iptables -t mangle -A POSTROUTING -p tcp -s 192.168.1.104 -j CLASSIFY --set-class 1:14
    iptables -t mangle -A POSTROUTING -p tcp -s 192.168.1.111 -j CLASSIFY --set-class 1:21
    ```


