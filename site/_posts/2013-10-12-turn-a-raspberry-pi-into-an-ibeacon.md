---
layout: archive
status: publish
published: true
title: Turn a Raspberry Pi into an iBeacon
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1603
wordpress_url: http://www.ioncannon.net/?p=1603
date: '2013-10-12 08:54:21 -0400'
date_gmt: '2013-10-12 13:54:21 -0400'
categories:
- programming
- hardware
tags:
- rpi
- bluetooth
- ibeacon
comments: []
---

Earlier this year Apple added the concept of <a href="https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/LocationAwarenessPG/RegionMonitoring/RegionMonitoring.html#//apple_ref/doc/uid/TP40009497-CH9-SW7">beacon region monitoring</a> into Core Location. This is more widely known as iBeacon. Right now there isn't a large amount of information on how to take advantage of it outside of iOS and Macs but it is actually pretty easy to implement. The following instructions will get you to a point where a Raspberry Pi can function as an iBeacon (any Linux box should actually work).

Before diving into the technical details I think it is worth noting a few things. There are a few hardware based iBeacons already available in various "beta" states, to name a few: <a href="http://www.kstechnologies.com/collections/all">KST's iBeacon</a>, <a href="http://blog.onlycoin.com/posts/2013/10/3/coin-arduino-ble-dev-kit">coin for arduino</a> and <a href="http://redbearlab.com/ibeacon/">ReadBearLab's iBeacon</a>. These dedicated devices are going to have a power and most likely a price advantage over the Raspberry Pi so that is something to keep in mind. The setup I used cost around $70 for example and that is around the cost of the KST device but more than the others and the more that are made the more the price will probably decrease. The main advantage of the Raspberry Pi is flexibility and included in that $70 is a wifi dongle that the other devices don't have.

My configuration for this post:

  - <a href="http://www.newark.com/jsp/search/productdetail.jsp?sku=43W5302&COM=embedded-link_RaspberryPi">Raspberry Pi</a> Model B. The Model A would work as well but currently you wouldn't be able to run both wifi and bluetooth at the same time. You also need <a href="http://www.newark.com/jsp/search/productdetail.jsp?sku=53W8467">power</a>, <a href="http://www.amazon.com/Transcend-Class-Flash-Memory-TS8GSDHC10E/dp/B003VNKNEG/">storage</a> and maybe a <a href="http://www.newark.com/jsp/search/productdetail.jsp?sku=07W8936">case</a>.
  - I've used both the <a href="http://www.amazon.com/dp/B007GFX0PY">IOGEAR Bluetooth 4.0 USB Micro Adapter (GBU521)</a> and the <a href="http://www.amazon.com/dp/B0090I9NRE">Cirago Bluetooth 4.0 USB Mini Adapter (BTA8000)</a> adapters successfully.
  - For wifi I've been using the <a href="http://www.amazon.com/EW-7811UN-IEEE-802-11n-draft-USB/dp/B005CLMJLU">Edimax</a> device.

Assuming you have your Pi hardware ready the first step is to install the <a href="http://www.raspberrypi.org/downloads">Raspbian distro</a>. I tested on the 2013-09-25-wheezy-raspbian version. Make sure it boots and then run the following commands as root to get the dependancies ready:

```
apt-get update
apt-get install libglib2.0-dev libdbus-1-dev libudev-dev libical-dev libreadline6-dev
```

Next you will need to download and compile a more recent version of <a href="http://www.bluez.org/">Bluez</a> than what is available for the Raspbain distro. I've been able to use a number of versions in the Bluez 5.X family but for this I'll assume <a href="http://www.bluez.org/release-of-bluez-5-9/">Bluez 5.9</a>. Use the following to get it installed and compiled (make sure to do the install part here as root):

```
wget https://www.kernel.org/pub/linux/bluetooth/bluez-5.9.tar.xz
tar xvJf bluez-5.9.tar.xz
cd bluez-5.9
./configure --disable-systemd --enable-library
make
make install
```

Now you have Bluez installed with bluetooth library support. There are also a number of tools available at this point. The first one you want to run is hciconfig to configure your bluetooth device. It works a lot like ifconfig if you are familiar with setting up network interface. If you run it without any command line arguments you will get a list of bluetooth devices:

```
hciconfig
# hci0:   Type: BR/EDR  Bus: USB
#         BD Address: 00:02:72:32:CA:23  ACL MTU: 1021:8  SCO MTU: 64:1
#         DOWN
#         RX bytes:340 acl:0 sco:0 events:7 errors:0
#         TX bytes:54 acl:0 sco:0 commands:12 errors:0
```

You want to bring the bluetooth device up so it is available:

```
hciconfig hci0 up
hciconfig
# hci0:   Type: BR/EDR  Bus: USB
#         BD Address: 00:02:72:32:CA:23  ACL MTU: 1021:8  SCO MTU: 64:1
#         UP RUNNING
#         RX bytes:813 acl:0 sco:0 events:26 errors:0
#         TX bytes:374 acl:0 sco:0 commands:31 errors:0
```

Make sure you see "UP RUNNING" before proceeding. You will probably want to add the command to bring the bluetooth device up to the startup script. Next you will want to grab my <a href="https://github.com/carsonmcdonald/bluez-ibeacon">bluez-ibeacon</a> repo from github and build it:


```
git clone https://github.com/carsonmcdonald/bluez-ibeacon.git
bluez-ibeacon/bluez-beacon/
make

```
Now you have a binary named ibeacon that you can run and that will turn the Pi into an iBeacon:

```
./ibeacon 200 e2c56db5dffb48d2b060d0f5a71096e0 1 1 -29
```

You can read more about what the above means in the README for the bluez-ibeacon project.

There is a demo iOS app in the same bluez-ibeacon project that you can use to then detect the beacon now that it is running.

