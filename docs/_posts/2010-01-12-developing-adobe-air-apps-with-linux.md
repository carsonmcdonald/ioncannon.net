---
layout: archive
status: publish
published: true
title: Developing Adobe Air Apps with Linux
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 875
wordpress_url: http://www.ioncannon.net/?p=875
date: '2010-01-12 07:21:24 -0500'
date_gmt: '2010-01-12 12:21:24 -0500'
categories:
- programming
tags:
- linux
- air
- development
comments:
- id: 176717
  author: Kbcbank
  author_email: kbcskype@gmail.com
  author_url: ''
  date: '2010-07-25 06:07:23 -0400'
  date_gmt: '2010-07-25 11:07:23 -0400'
  content: "Hello, \r\n\r\nI tried your example. but didnt worked, you didn't mention
    point by point its hard to get start. Can you point out like Step 1, Step 2 for
    Fedora linux and Aptana?\r\n\r\nThanks"
---

I finally found a little project I wanted to do using <a href="http://www.adobe.com/products/air/">Adobe Air</a> and after some searching I found out you can use Linux to develop Air applications. At first I thought I would have to use Flex Builder which is still in <a href="http://labs.adobe.com/technologies/flex/flexbuilder_linux/">alpha for Linux</a> but it turns out there is a better option from <a href="http://www.aptana.org/">Aptana</a>. 

The <a href="http://www.aptana.org/air/">Aptana Air</a> plugin supports developing Adobe Air applications using HTML and Javascript. It even support the 2.0 release of Air that is currently in beta. Aptana uses the Eclipse framework as an editor so if you are familure with Eclipse it will be even easier to use.

I started by downloading and installing the latest version of the <a href="http://get.adobe.com/air/">Air runtime</a>. Next I grabbed the <a href="http://www.adobe.com/products/air/tools/sdk/">Air SDK</a>, the SDK doesn't come with the plugin so it is something you have to get directly from the Air developers site. After getting the SDK unpacked I installed the latest Aptana core release. Once the core is installed there is a big plugin button on the startup screen that currently has Air listed.

The install went smoothly except for a few issues. The first one I ran into was very noticeable since it kept any dialog buttons from working when they were clicked although they did work when I clicked them and then hit enter or navigated to them with the keyboard. Luckily someone has already figured out that there is an issue with <a href="http://mou.me.uk/2009/10/31/fixing-eclipse-in-ubuntu-9-10-karmic-koala/">Eclipse and GTK+</a> that is the cause (even though the post is for Ubuntu the same problem and solution worked for me on Fedora). The fix is to set the GDK_NATIVE_WINDOWS variable before running the Aptana binary:

```
GDK_NATIVE_WINDOWS=true; AptanaStudio
```

The next thing I noticed was the application.xml descriptor that Aptana created didn't generate correctly. It needs to start with the correct xmlns or the following error will be thrown on run: "invalid application descriptor: descriptor version does not match runtime version". To fix this check the version of the Air SDK by running the following command:

```
./adt -version
adt version "1.5.3.9120"
```

For the version of the Air SDK I downloaded the correct xmlns was http://ns.adobe.com/air/application/1.5 so I needed the following application tag:

```
<application xmlns="http://ns.adobe.com/air/application/1.5">
```

Once I had that working I was able to compile and execute a demo application. I was also able to create an Air application package from within Aptana using File > Export > Adobe AIR > Adobe AIR Package. Before creating the Air package I had to create a signing certificate. Creating the certificate can be done within Aptana too but because I had not yet fixed the above button issue I created a cert on the command line with the Air SDK and then imported it. To create the Air signing certificate from the command line I used the adt command from the SDK:

```
adt -certificate -cn SelfSigned 1024-RSA sampleCert.pfx samplePassword
```

Remember the password that gets used to generate the certificate because it will have to be used before a package is signed.

Finally Adobe has a lot of information on developing Air applications on their <a href="http://www.adobe.com/devnet/air/">Air devnet site</a>. The <a href="http://www.adobe.com/devnet/air/ajax/">Air ajax section</a> is especially important.
