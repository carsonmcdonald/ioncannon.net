---
layout: archive
status: publish
published: true
title: Examples of why netcat is still useful
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 134
wordpress_url: http://www.ioncannon.net/?p=134
date: '2008-04-24 08:18:41 -0400'
date_gmt: '2008-04-24 13:18:41 -0400'
categories:
- system administration
tags:
- linux
comments: []
---
I recently got a new work PC and was worried that stuck somewhere in the 40G hard drive of the old PC was something I would one day need. The new PC had 300G of space so I figured I would just copy the entire drive over and keep it forever. This isn't the most difficult task in the world and I actually started out using ssh to transfer the image.


To transfer the drive using ssh I was using the following command from the new PC:

```
ssh -c blowfish old-pc-ip "dd if=/dev/hda" > dd of=old-pc.hda
```
This worked fine but the old PC seemed to be having a hard time keeping up. I did some adjusting to the block size of the transfers using dd but that didn't seem to help. That is when I decided to give netcat a try.

On the old PC side I ran:

```
dd if=/dev/hda | nc -l 10001
```
and on the new PC side I ran:

```
nc old-pc-ip 10001 | dd of=old-pc.hda
```
This worked like a charm and transfered the drive about twice as fast as ssh using blowfish encryption.

Just for reference I was using dd here to give myself more control over block sizes, skip any read errors, and at times I was actually trying to just transfer parts of the drive instead of the entire thing using the seek and count options. Another useful trick with dd is that you can find out the current amount transfered and rate by sending it a USR1 signal with kill. After poking around I actually found another nice utility that you can stick in the stream call <a href="http://www.ivarch.com/programs/pv.shtml">pipe viewer</a> that is able to give you a nice display of the count instead of having to send signals to dd.

Another great use for netcat that I ran into recently was setting up a ppp tunnel between two machines. Again at first I started by using ssh:

```
pppd updetach noauth passive pty "ssh remote-host-ip -lroot -o Batchmode=yes pppd nodetach notty noauth" ipparam vpn 192.168.77.1:192.168.77.2
```
This worked between two machines that were already connected by a network but my real goal was build the tunnel over a device that wouldn't work with ssh traffic. I turned to netcat again.

On the initiating side I ran this:

```
/usr/sbin/pppd connect-delay 30000 updetach noauth passive pty "echo connect-585 | nc device-ip 2000" ipparam root 192.168.77.1:192.168.77.2
```
Here I send the traffic to a device in between that forms a connection over a non-network link to the end point machine. I don't need netcat on the endpoint because the communication channel is not a network. On the end point I run this:

```
/usr/sbin/pppd nodetach notty noauth
```
In this case netcat saved me from having to write some intermediate code that would communicate with the device and just pipe the bits through.

