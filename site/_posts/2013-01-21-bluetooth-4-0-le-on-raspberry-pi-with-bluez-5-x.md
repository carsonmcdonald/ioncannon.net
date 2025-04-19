---
layout: archive
status: publish
published: true
title: Bluetooth 4.0 LE on Raspberry Pi with Bluez 5.x
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1570
wordpress_url: http://www.ioncannon.net/?p=1570
date: '2013-01-21 08:33:49 -0500'
date_gmt: '2013-01-21 13:33:49 -0500'
categories:
- linux
- programming
- hardware
tags:
- rpi
- bluethooth
comments: []
---


Over the holiday I had a little time to fiddle with the Raspberry Pi I got earlier in the summer and I started wondering how hard it would be to get a <a href="http://en.wikipedia.org/wiki/Bluetooth_low_energy">Bluetooth LE</a> adapter working. It turned out not to be as hard to get working as I thought it might be thanks to recently added support in the Bluez 5.x Bluetooth stack. What follows is the information you need to get things going.




To start with I picked the <a href="http://www.iogear.com/product/GBU521/">IOGEAR Bluetooth 4.0 USB Micro Adapter (GBU521)</a> that can be found on <a href="http://www.amazon.com/IOGEAR-Bluetooth-Micro-Adapter-GBU521/dp/B007GFX0PY/">Amazon for just $13</a> since it looked like the chip it uses is decently supported with recent Linux kernels. The only issue I had is the size itself, if it didn't have a little nub on the end it would be too small to pull back out of the USB plug.




The GBU521 seems to be recognized by older kernels but to get LE support go with the latest kernel you can find. For the RPi it is easy enough to get a very recently kernel using <a href="https://github.com/Hexxeh/rpi-update">rpi-update</a>. Currently it is 3.6.11 and that worked well for me. I also used a 3.5 kernel on a laptop that worked fine but you can't go any older than that.




Once you have the correct kernel in place you need to grab the latest version of <a href="http://www.bluez.org/">Bluez</a>. Bluez is the official Bluetooth stack for Linux and the 5.x series has introduced Bluetooth LE support. It is still a work in progress but it does work. Grab the <a href="http://www.bluez.org/download/">5.1 version</a> or later and uncompress/untar it somewhere on your RPi. Please note that Bluez 5.x <b>requires a 3.5+ kernel</b> to work correctly, this seems to be a sticking point that a lot of people hit.




I am using the <a href="http://www.raspbian.org/">Raspbian</a> distro found on <a href="http://www.raspberrypi.org/downloads">Raspberry Pi downloads</a>. Outside of the normal install needed to compile I had to install the following packages:



```
apt-get install libusb-dev libdbus-1-dev libglib2.0-dev automake libudev-dev libical-dev libreadline-dev
```


With those packages installed configure and make (note that I've disabled systemd support, it didn't seem to work for me and I didn't need it myself):



```
./configure --disable-systemd
make
make install
```


Now you will have a number of binaries installed that will get you rolling. I'm not going to go into a lot of detail here about what all of the following commands do but I want to touch on each of them briefly so you know they are there. Assuming you have the Bluetooth adapter plugged in you should be able to run the following command and get details about it:



```
hciconfig
hci0:	Type: BR/EDR  Bus: USB
BD Address: 00:00:12:34:56:78  ACL MTU: 1021:8  SCO MTU: 64:1
DOWN
RX bytes:467 acl:0 sco:0 events:18 errors:0
TX bytes:317 acl:0 sco:0 commands:18 errors:0
```

This shows that the device is in a down state. To bring it up you can issue the following command:


```
hciconfig hci0 up
hciconfig
hci0:	Type: BR/EDR  Bus: USB
BD Address: 00:00:12:34:56:78  ACL MTU: 1021:8  SCO MTU: 64:1
UP RUNNING
RX bytes:467 acl:0 sco:0 events:18 errors:0
TX bytes:317 acl:0 sco:0 commands:18 errors:0
```

Now if you know you have a Bluetooth LE peripheral sitting around advertising you can run the following command and you should see an address for that device show up:


```
hcitool lescan
LE Scan ...
12:88:FF:FF:11:99 touch
12:88:FF:FF:11:99 (unknown)
```

If you get to the point of wanting to let the RPi act as a peripheral you will need to know about the following command that will enable advertising on the adapter:


```
hciconfig hci0 leadv 0
```


Bluez also provides a deamon named bluetoothd (installed in /usr/local/libexc/bluetooth) that runs to take care of communicating with devices for you. It uses DBus to communicate with applications but at this point LE support hasn't been added. The best way to integrate with it if you want to write your own code is to use a plugin. I won't go into that here but you can see an example in the source (I also plan on releasing an example of my own that will work with an iOS app).




Lastly remember you don't need to start off on the Raspberry Pi. Most of the above will work on a normal Linux system and it may be easier to start there to get it working and then move to the RPi once you are familiar with the setup.



To protect all your electronic devices from short circuits, blackouts, etc. You must be sure that your house has all the electrical connections in good condition.


For this you must hire the best company in the market: BSK Data & Electrical. Visit them at <a href="https://www.bskelectrical.com.au">https://www.bskelectrical.com.au</a>, we are sure that they will not fail you, as they have the most trained professionals in electrical issues guaranteeing the electrical safety of your home.


Don't be afraid to ask the company to send you a request, there are many solutions which is how people like you prefer to live, especially in this day and age. Our website for all types of electrical problems is the solution for many different problems, so please make sure to take advantage of it.


There is all sorts of applications including all the devices at this site, you have very much to rely on this site for the complete solutions.

