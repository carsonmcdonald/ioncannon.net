---
layout: archive
status: publish
published: true
title: Installing Windows 7 on VirtualBox
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 82
wordpress_url: http://www.ioncannon.net/?p=82
date: '2009-01-12 07:28:44 -0500'
date_gmt: '2009-01-12 12:28:44 -0500'
categories:
- system administration
tags:
- VirtualBox
- Windows 7
comments:
- id: 119980
  author: Ananth
  author_email: cananthreddyn@hotmail.com
  author_url: ''
  date: '2009-01-29 15:48:01 -0500'
  date_gmt: '2009-01-29 20:48:01 -0500'
  content: how do we increase the desktop size to full screen when we are running
    Windows 7 on Virtual box. I could not figure out how do do it. When I increased
    the resolution the start bar went below my screen and I could not see it.
- id: 138136
  author: sven
  author_email: sven.vansteenbrugge@hotmail.com
  author_url: ''
  date: '2009-05-15 12:34:33 -0400'
  date_gmt: '2009-05-15 17:34:33 -0400'
  content: klik right on your desktop --> click screen resolution --> click resolution
    --> put on max.
- id: 142397
  author: Helper
  author_email: helper@fakemail.com
  author_url: ''
  date: '2009-06-23 21:42:24 -0400'
  date_gmt: '2009-06-24 02:42:24 -0400'
  content: In windowed mode, go to "devices" in the Virtualbox menubar. Under devices,
    select "install guest additions". In your VM, several UAC dialog boxes will pop
    up asking for permissions to run the installer. Answer yes, and the guest additions
    will be installed. After a restart of the VM, Windows 7 should auto detect your
    display and set it to full screen.
---

I have been seeing people talk about the Windows 7 Beta being available to download so I went to see how hard it was to sign up. It turns out that it actually pretty easy so I decided I would give it a try under VirtualBox just to see if it would work. The following is a list of steps I took.

To start with I'm using Fedora 10 as the host OS. I've had good luck with previous versions of Windows so I figured this wouldn't be a problem and it turns out it isn't. I am also using the 2.1.0 version of VirtualBox. I am not sure but it could be that the older versions won't work as well since doing the install requires using the Vista support in VirtualBox and that may not be as good in older version.

Now on to the steps you need to do the install:

1. Download the ISO from the <a href="http://technet.microsoft.com/en-us/evalcenter/dd353205.aspx">Windows 7 beta site</a>. At this time the ISO is named 7000.0.081212-1400_client_en-us_Ultimate-GB1CULFRE_EN_DVD.iso and is about 2.5G in size.<br/><br/>

2. Now that you have the ISO you are ready to start the install using VirtualBox. Start by creating a new configuration and pick "Windows Vista" as the OS version.<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-1-CreateNewVirtualMachine.png"><img title="VirtualBox create new virtual machine" alt="VirtualBox create new virtual machine" src="/assets/img/vbwin7/Screenshot-1-CreateNewVirtualMachine_small.png"/></a><br/><br/>

3. The next step is to pick a decent amount of memory for the instance. I picked 896 MB of memory because that was all I could on the machine I was using but it turned out to be enough.<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-2-CreateNewVirtualMachine.png"><img title="VirtualBox choose memory size" alt="VirtualBox choose memory size" src="/assets/img/vbwin7/Screenshot-2-CreateNewVirtualMachine_small.png"/></a><br/><br/>

4. Defining the disk is where I ran into the only real trouble for the entire install. I started with a small 5 GB dynamic disk. Doing that got me the following error:<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-8-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Windows 7 disk too small" alt="Windows 7 disk too small" src="/assets/img/vbwin7/Screenshot-8-Window7Base[Running]-SunxVMVirtualBox_small.png"/></a><br/><br/>

    You need at least 5545 MB to just install. I then increased the size to 7 GB and got the following warning:<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-9-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Windows 7 recommended disk size" alt="Windows 7 recommended disk size" src="/assets/img/vbwin7/Screenshot-9-Window7Base[Running]-SunxVMVirtualBox_small.png"/></a><br/><br/>

    It turns out you get that if you allocate less than 7984 MB. So I finally settled on 9 GB:<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-3-CreateNewVirtualMachine.png"><img title="Windows 7 correctly sized VDI" alt="Windows 7 correctly sized VDI" src="/assets/img/vbwin7/Screenshot-3-CreateNewVirtualMachine_small.png"/></a><br/><br/>

5. You are now ready to map the ISO that was downloaded into the VM. Click the "CD/DVD-ROM" link on the configuration panel and select the 7000.0.081212-1400_client_en-us_Ultimate-GB1CULFRE_EN_DVD.iso as the CD/DVD-ROM.<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-4-Window7Base-Settings.png"><img title="VirtualBox loaded Windows 7 ISO" alt="VirtualBox loaded Windows 7 ISO" src="/assets/img/vbwin7/Screenshot-4-Window7Base-Settings_small.png"/></a><br/><br/>

    Your main configuration screen should look something like this now:<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-5-SunxVMVirtualBox.png"><img title="VirtualBox and Windows 7 settings" alt="VirtualBox and Windows 7 settings" src="/assets/img/vbwin7/Screenshot-5-SunxVMVirtualBox_small.png"/></a>  <br/><br/>

6. Now it is time to power up the VM. The initial part of the install took about 3 minutes for me so it is fairly quick.<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-6-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Initial Windows 7 install screen" alt="Initial Windows 7 install screen" src="/assets/img/vbwin7/Screenshot-6-Window7Base[Running]-SunxVMVirtualBox_small.png"/></a>  <br/><br/>

7. Because this is a fresh install you want to pick the "Install new" option when prompted. You will then get to pick what disk to use for the installation.<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-7-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Windows 7 install new" alt="Windows 7 install new" src="/assets/img/vbwin7/Screenshot-7-Window7Base[Running]-SunxVMVirtualBox_small.png"/></a>  <br/><br/>

    After selecting the disk to use the next part of the install takes about 10 minutes and when it is finished the VM will reboot. <br/>

    The final setup part of the install takes about another 10 minutes. It will finish with another reboot.<br/><br/>

8. The VM will now boot up into a user login:<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-10-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Windows 7 first user screen" alt="Windows 7 first user screen" src="/assets/img/vbwin7/Screenshot-10-Window7Base[Running]-SunxVMVirtualBox_small.png "/></a>  <br/><br/>

    The license key entry will show up next:<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-11-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Windows 7 license key screen" alt="Windows 7 license key screen" src="/assets/img/vbwin7/Screenshot-11-Window7Base[Running]-SunxVMVirtualBox_small.png"/></a>  <br/><br/>

    You are then asked to set up a few things like your timezone. After another 5 minutes of churning in "setup" everything was finished. <br/>

    Right off the bat there was an indicator dialog that came up at first saying there was an update being downloaded and installed as well. After that everything was complete.<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-12-Final.png"><img title="Windows 7 desktop" alt="Windows 7 desktop" src="/assets/img/vbwin7/Screenshot-12-Final_small.png"/></a>  <br/><br/>

9. The next issue is a VirtualBox only issue and has to do with installing the guest utilities. They won't install right out of the box but I found some <a href="http://www.ideaexcursion.com/2008/12/31/installing-windows-7-beta-1-in-virtualbox-210/">instructions for installing the guest utilties with Windows 7</a>. At some point Sun will fix this in the VirtualBox distribution but for now it is the only way to get them to work. Following the instruction worked like a charm for me.<br/><br/>

10. After one last reboot the final product now has mouse integration and screen resizing.<br/><br/>

    <a href="/assets/img/vbwin7/Screenshot-13-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Windows 7 login screen" alt="Windows 7 login screen" src="/assets/img/vbwin7/Screenshot-13-Window7Base[Running]-SunxVMVirtualBox_small.png"/></a> <br/><br/>

After all was said and done it took up about 6.3 GB to install the base OS and that resulted in an external VDI image size of 5 GB.<br/><br/>

<a href="/assets/img/vbwin7/Screenshot-14-Window7Base[Running]-SunxVMVirtualBox.png"><img title="Windows 7 disk explorer" alt="Windows 7 disk explorer" src="/assets/img/vbwin7/Screenshot-14-Window7Base[Running]-SunxVMVirtualBox_small.png"/></a> <br/><br/>

If I had more memory to allocate to the VM I would. It seems that Windows 7 has the same type of memory requirements as Vista and it is a little sluggish without more.

I'm impressed with the ease of being able to install under VirtualBox. I would say that except for the guest utilities it is as easy as installing Window XP under VirtualBox.

