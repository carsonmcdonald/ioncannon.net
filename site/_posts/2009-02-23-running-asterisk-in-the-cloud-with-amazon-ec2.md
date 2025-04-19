---
layout: archive
status: publish
published: true
title: Running Asterisk in the cloud with Amazon EC2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 131
wordpress_url: http://www.ioncannon.net/?p=131
date: '2009-02-23 06:39:55 -0500'
date_gmt: '2009-02-23 11:39:55 -0500'
categories:
- system administration
tags:
- ec2
- asterisk
- cloud
comments:
- id: 125430
  author: Henry
  author_email: b_ball_henry@hotmail.com
  author_url: ''
  date: '2009-03-03 14:50:12 -0500'
  date_gmt: '2009-03-03 19:50:12 -0500'
  content: "Will your version of converting VDI to AMI work for conference calls?
    \r\nBecause according to Voxilla, the zaptel has to be build against the AWS kernel-devel\r\n\r\nThanks"
---
I have been sitting on a half post for a while now on setting up Asterisk on EC2 and then this past week someone else came out with a post on <a href="http://voxilla.com/2009/02/13/asterisk-amazon-ec2-1178">how to install Asterisk from scratch on EC2</a>. I figured I would wrap up what I have since I take the path of installing Asterisk on VirtualBox first then <a href="http://www.ioncannon.net/system-administration/80/how-to-transfer-linux-from-virtualbox-to-xen/">converting that disk image to an AMI</a> as I outlined a few weeks ago when I got serious about testing out the Asterisk on EC2 concept.

Reading over the comments on the Voxilla post you will see some concern about how cost effective putting Asterisk on EC2 would be. Even if the cost is an issue for normal use I think Asterisk on EC2 could work for bursts of outgoing calls or even temporary conferencing systems. Part of what I wanted to do was find the least resistant path to getting started so I went with Trixbox since it has a lot of tools pre-installed and support for <a href="http://gizmo5.com/">Gizmo5</a> that was very easy to set up. The key with Gizmo5 is that it is cheap, works with Asterisk via SIP and you can have incoming calls for free from a land line so it is easy to test cheaply.


To start with I'll point out that the Voxilla guys have done what I'm about to go over here in a different way. A portion of what I do matches up with the Voxilla post but I'm using the AWS console. There is now even a <a href="http://voxilla.com/2009/02/18/asterisk-on-the-cloud-with-a-click-1405">Voxilla public AMI available</a> for people who don't want to do anything but fire up an Asterisk node.

The steps for this install break down as follows:

<h2>Install Trixbox under VirtualBox</h2>
Start by installing <a href="http://www.trixbox.com/products/trixbox-ce">Trixbox CE</a> under <a href="http://www.virtualbox.org/">VirtualBox</a>. I'm currently using VirtualBox 2.1.4 but older versions will probably work equally as well. Grab the <a href="http://www.trixbox.org/downloads">Trixbox CE ISO</a> and create a 2G partition to do the install. Here is the VirtualBox configuration I used:

<a href="/assets/img/asteriskec2/VirtualBox-Trixbox-Setup.png"><img title="TrixBox VirtualBox configuration" alt="TrixBox VirtualBox configuration" src="/assets/img/asteriskec2/VirtualBox-Trixbox-Setup_small.png"/></a><br/>(Click the image to see a larger version)<br/>

The install only takes a few minutes:

<a href="/assets/img/asteriskec2/Trixbox-Install.png"><img title="Installing TrixBox" alt="Installing TrixBox" src="/assets/img/asteriskec2/Trixbox-Install_small.png"/></a><br/>(Click the image to see a larger version)<br/>

Then when you are done you should let it boot:

<a href="/assets/img/asteriskec2/Trixbox-Login.png"><img title="TrixBox login" alt="TrixBox login" src="/assets/img/asteriskec2/Trixbox-Login_small.png"/></a><br/>(Click the image to see a larger version)<br/>

After doing the Trixbox install you should follow instructions to <a href="http://www.ioncannon.net/system-administration/80/how-to-transfer-linux-from-virtualbox-to-xen/">extract the image from the VDI and create as an AMI</a>. You should end with a bootable AMI that will start TrixBox once you are finished.

<h2>Create a security group to allow Asterisk traffic</h2>
The following closely matches what the Voxilla article has except for the use of AWS Management Console everywhere. I'm not really concerned with having a static IP assigned to the node so I've skipped that part. Depending on how you want to use the system you may not need one at all.

Start by going into the "security groups" option off the main console page:

<a href="/assets/img/asteriskec2/AWS_Management_Console_-_Security_Groups.png"><img title="AWS Management Console security groups" alt="AWS Management Console security groups" src="/assets/img/asteriskec2/AWS_Management_Console_-_Security_Groups_small.png"/></a><br/>(Click the image to see a larger version)<br/>

Create a new group that will contain the security rules. I've named mine "Trixbox":

<img title="AWS Management Console create security group" alt="AWS Management Console create security group" src="/assets/img/asteriskec2/AWS_Management_Console_-_Create_new_group.png"/><br/>
<img title="AWS Management Console security group detail" alt="AWS Management Console security group detail" src="/assets/img/asteriskec2/AWS_Management_Console_-_create_details.png"/><br/>

There are 5 rules that are needed. They are ssh, http, udp ports 10000 to 20000, tcp 5060 to 5061, and udp 5060 to 5060. Here is what my security group looks like:

<a href="/assets/img/asteriskec2/AWS_Management_Console_-_firewall_setup.png"><img title="AWS Management Console security group VOIP" alt="AWS Management Console security group VOIP" src="/assets/img/asteriskec2/AWS_Management_Console_-_firewall_setup_small.png"/></a><br/>(Click the image to see a larger version)<br/>

Note that in the above I'm opening everything up to the world for each entry but you probably want to restrict things more based on where the traffic will be coming from. At the very least if you open the http port to the world make sure to change all the default passwords.

Now you are ready to launch the instance. Find the "Launch Instances" button on the main console page:

<img title="AWS Management Console start instances" alt="AWS Management Console start instances" src="/assets/img/asteriskec2/AWS_Management_Console_-_start_instances.png"/><br/>

Find the AMI that was created from the TrixBox install:

<a href="/assets/img/asteriskec2/AWS_Management_Console_-_select_instance.png"><img title="AWS Management Console EC2 AMI selection" alt="AWS Management Console EC2 AMI selection" src="/assets/img/asteriskec2/AWS_Management_Console_-_select_instance_small.png"/></a><br/>(Click the image to see a larger version)<br/>

Configure the instance for launch:

<a href="/assets/img/asteriskec2/AWS_Management_Console_-_configure_instance.png"><img title="AWS Management Console EC2 instance configuration" alt="AWS Management Console EC2 instance configuration" src="/assets/img/asteriskec2/AWS_Management_Console_-_configure_instance_small.png"/></a><br/>(Click the image to see a larger version)<br/>

Notice that the advanced area is open and there is a specialized kernel (<a href="http://developer.amazonwebservices.com/connect/entry!default.jspa?categoryID=116&externalID=1350">aki-9b00e5f2</a>) that was selected. This is from the Voxilla article and the kernel has a higher frequency clock that makes audio lag less.

Once you have hit launch and the instance has started you should be able to ssh into it and verify that Asterisk is running if you wish. You can actually do all the configuration through the web interface so you don't have to log in if you have faith that everything started as it should.

<h2>Configure Asterisk with the web console</h2>
You should now be able to put the running instance name into your browser and bring up the web user console.

<a href="/assets/img/asteriskec2/trixbox_-_User_Mode_-_main.png"><img title="TrixBox user main" alt="TrixBox user main" src="/assets/img/asteriskec2/trixbox_-_User_Mode_-_main_small.png"/></a><br/>(Click the image to see a larger version)<br/>

There are a few initial changes that need to be made to get the box running smoothly so switch to maintenance mode by clicking the "maint" link on the top right. You will need to use the default username and password (see the <a href="http://trixbox.org/wiki/trixbox-quick-install-guide">TrixBox documentation</a>):

<a href="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_admin_main.png"><img title="TrixBox maintenance main" alt="TrixBox maintenance main" src="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_admin_main_small.png"/></a><br/>(Click the image to see a larger version)<br/>

Because the external IP is nated you will need to edit one of the configuration files to contain the external IP. Grab the external IP of your instance by pinging the hostname. From the main maintenance screen pick PBX then "Config file editor". Find the filename in the list of configuration files named "sip_general_custom.conf" and click it.

<img title="TrixBox SIP customization file" alt="TrixBox SIP customization file" src="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_sip_custom.png"><br/>

Put the following information in the entry box, remember to use the instance IP:

```
externip=<your instance ip here>
localnet=10.0.0.0/255.0.0.0
nat=yes
```
<a href="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_custom_sip_nat.png"><img title="TrixBox SIP NAT setup" alt="TrixBox SIP NAT setup" src="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_custom_sip_nat_small.png"/></a><br/>(Click the image to see a larger version)<br/>

If you want to find out more about SIP and NAT then check out <a href="http://www.voip-info.org/wiki/view/Asterisk+sip+nat">Asterisk SIP and NAT</a> as well as <a href="http://www.voip-info.org/tiki-index.php?page=Asterisk+SIP+externip">Asterisk SIP externip</a>.

Now you should have the NAT configuration working. One thing to take note of is that any change you make will require a reload of the Asterisk system. Don't worry though you still need to add extensions before anything is useful and you can reload after that.

Follow the FreePBX <a href="http://www.freepbx.org/support/documentation/administration-guide/adding-extensions">adding extensions</a> guide to set up a few extensions.

I also went ahead and made one of the extensions the default inbound for testing:

<img title="TrixBox Inbound configuration" alt="TrixBox Inbound configuration" src="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_inbound.png"/><br/>

At this point you should be able to use a VOIP phone to connect to your node and access voicemail or call from one extension to another.

<h2>Use the web console to configure Gizmo5 support</h2>
At this point you could just use the system for VOIP calls between extensions but that wouldn't be much fun. You really need a VOIP gateway to be able to call out and get calls in. This is where Gizmo5 comes in. You will need a Gizmo5 account before you proceed.

The setup with Trixbox is just a few clicks. Go to PBX, Gizmo5 and then enter your Gizmo5 login information:

<a href="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_gizmo5_step1.png"><img title="TrixBox Gizmo5 configuration" alt="TrixBox Gizmo5 configuration" src="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_gizmo5_step1_small.png"/></a><br/>(Click the image to see a larger version)<br/>

After this you probably want to set up the outbound route:

<a href="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_gizmo_outbound.png"><img title="TrixBox Gizmo5 outbound" alt="TrixBox Gizmo5 outbound" src="/assets/img/asteriskec2/trixbox_-_Admin_Mode_-_gizmo_outbound_small.png"/></a><br/>(Click the image to see a larger version)<br/>

You can test the Gizmo5 integration by calling one of their <a href="http://gizmo5.com/pc/network/access-numbers/">free access numbers</a>. You will first need to log in and get your Gizmo5 SIP number:

<a href="/assets/img/asteriskec2/Gizmo5_-_sip_number.png"><img title="Gizmo5 SIP number" alt="Gizmo5 SIP number" src="/assets/img/asteriskec2/Gizmo5_-_sip_number_small.png"/></a><br/>(Click the image to see a larger version)<br/>

