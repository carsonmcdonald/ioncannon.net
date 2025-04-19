---
layout: archive
status: publish
published: true
title: Upgrade to Fedora 12 from Fedora 11
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 719
wordpress_url: http://www.ioncannon.net/?p=719
date: '2009-11-18 06:56:18 -0500'
date_gmt: '2009-11-18 11:56:18 -0500'
categories:
- system administration
tags:
- linux
- Fedora
comments:
- id: 170836
  author: Upgrade to Fedora 13 from Fedora 12
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/1136/upgrade-to-fedora-13-from-fedora-12/
  date: '2010-05-27 05:54:48 -0400'
  date_gmt: '2010-05-27 10:54:48 -0400'
  content: "[...] Make sure you are using a Fedora 12 install. If you need instructions
    on getting to Fedora 12 then start with upgrading from Fedora 11 to Fedora 12.
    [...]"
---

<a href="http://docs.fedoraproject.org/release-notes/f12/en-US/html/">Fedora 12</a> was just released and it is time to upgrade again of course. I almost thought this was going to be a version to yawn at but then I saw that there was going to be a new version of Fedora based on <a href="http://moblin.org/">Moblin</a> and it seemed exciting again. Of course that isn't the only thing being upgraded in the latest version of Fedora. Some of the more notable changes in this version:

<ul>
  <li>Updated window managers <a href="http://www.fedoraproject.org/wiki/Features/Gnome2.28">Gnome 2.28</a>, <a href="http://www.fedoraproject.org/wiki/Features/KDE43">KDE 4.3</a> and <a href="http://www.fedoraproject.org/wiki/Features/FedoraMoblin">Fedora Moblin</a></li>
  <li><a href="http://fedoraproject.org/wiki/Features/Presto">Delta RPM support</a></li>
  <li><a href="http://www.fedoraproject.org/wiki/Features/F12X86Support">i686 as the base architecture</a></li>
  <li>Lots of virtualization changes: <a href="http://www.fedoraproject.org/wiki/Features/KSM">KSM</a>, <a href="http://www.fedoraproject.org/wiki/Features/KVM_Huge_Page_Backed_Memory">KVM huge page support</a>, <a href="http://www.fedoraproject.org/wiki/Features/KVM_NIC_Hotplug">KVM NIC hotplug</a>, <a href="http://www.fedoraproject.org/wiki/Features/KVM_qcow2_Performance">KVM QCow2 performance improvements</a>, <a href="http://www.fedoraproject.org/wiki/Features/KVM_Stable_Guest_ABI">KVM Stable Guest ABI</a>, <a href="http://www.fedoraproject.org/wiki/Features/libguestfs">libguestfs</a>, <a href="http://www.fedoraproject.org/wiki/Features/Network_Interface_Management">Virtual network management</a> and <a href="http://www.fedoraproject.org/wiki/Features/VirtPrivileges">improved virtual privileges</a> to name a few</li>
  <li>An easier to use bug reporting interface <a href="http://www.fedoraproject.org/wiki/Features/ABRTF12">Abrt 1.0</a></li>
  <li><a href="http://www.fedoraproject.org/wiki/Features/BetterWebcamSupportF12">Better Webcam Support</a></li>
</ul>

You can find the complete list of <a href="http://www.fedoraproject.org/wiki/Releases/12/FeatureList">Fedora 12 enhancements</a> as well if you want more details.

I'm again starting with <a href="http://fedoraproject.org/wiki/Features/PreUpgrade">PreUpdate</a> since it worked well last time. The steps are pretty much the same as last time but I did have more problems after the upgrade:

<ol>
  <li>You have to be at Fedora11 before you try this. If you aren't there follow the <a href="http://www.ioncannon.net/system-administration/358/upgrading-to-fedora-11-from-fedora-10/">steps to get to Fedora11</a>.</li>
  <li>yum clean all</li>
  <li>yum udpate</li>
  <li>Make sure to back up your xorg.conf since it can disappear with the upgrade.</li>
  <li>preupgrade-cli "Fedora 12 (Constantine)" The total download for the upgrade from Fedora 11 to Fedora 12 was 1.1GB for me</li>
  <li>After I rebooted the first time I got an error that the /boot directory didn't have enough space. It turns out I needed about 27M of free space so I ended up having to delete old kernels until I had 28M of free space.</li>
  <li>reboot and wait</li>
</ol>

I lucked out again and didn't have to remove anything to fix dependency issues. I recompiled my existing NVIDIA driver but I ran into an issue with the nouveau NVIDIA driver that comes with Fedora 12. I needed to remove the nouveau package, rebuild initrd and reboot before I could build the NVIDIA driver:

```
yum remove xorg-x11-drv-nouveau.i686
rm /boot/initramfs-2.6.31.5-127.fc12.i686.img
mkinitrd /boot/initramfs-2.6.31.5-127.fc12.i686.img 2.6.31.5-127.fc12.i686
```

If that is too much work you can also get the NVIDIA driver from <a href="http://www.atrpms.net/">atrpms</a> but you will still need to remove the nouveau driver first. I also needed to pull down the Fedora 12 version of <a href="http://www.virtualbox.org/wiki/Linux_Downloads">Virtualbox</a> but so far that was all.

If you prefer the yum upgrade option here are the steps for that as well:

<ol>
  <li>yum clean all</li>
  <li>yum update</li>
  <li>rpm -Uvh http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-notes-12.0.0-4.fc12.noarch.rpm http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-12-1.noarch.rpm</li>
  <li>yum clean all</li>
  <li>yum -y update</li>
  <li>You may need to resolve dependencies and then do another yum -y update</li>
  <li>reboot</li>
</ol>

I had to resolve dependencies to get this to work. I had to remove tigervnc-server-1.0.0-2.fc11.i586 and VirtualBox-3.0.10_54097_fedora11-1.i586. The resulting update was about 1.4G so it took a little while to apply.

I've also put together a few <a href="http://www.ioncannon.net/projects/miscellaneous-projects/fedora-12-screenshots-and-videos/">videos and screenshots</a> if you want to get a quick preview of what the different versions available look like. You can also view the videos on Youtube: <a href="http://www.youtube.com/watch?v=W6rTVTyjQ1Q&feature=player_embedded">Moblin</a>, <a href="http://www.youtube.com/watch?v=F0UlVnoUtbw&feature=player_embedded">KDE</a> and <a href="http://www.youtube.com/watch?v=GZ8tSxMJTr8&feature=player_embedded">Gnome</a>
