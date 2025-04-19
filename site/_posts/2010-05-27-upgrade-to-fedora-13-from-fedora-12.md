---
layout: archive
status: publish
published: true
title: Upgrade to Fedora 13 from Fedora 12
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1136
wordpress_url: http://www.ioncannon.net/?p=1136
date: '2010-05-27 05:53:40 -0400'
date_gmt: '2010-05-27 10:53:40 -0400'
categories:
- system administration
tags:
- Fedora
- upgrade
comments: []
---

After a week delay <a href="http://docs.fedoraproject.org/en-US/Fedora/13/html/Release_Notes/index.html">Fedora 13</a> has been released and it is time to upgrade of course. As always there are a decent number of features in this release but here are a few that stand out to me:


<ul>
  <li><a href="http://boot.fedoraproject.org/">boot.fedoraproject.org</a> - A small bootable image to start the install from.</li>
  <li><a href="https://fedoraproject.org/wiki/Features/IntelliJ_IDEA">IntelliJ IDEA</a> - IntelliJ IDEA community edition. I'm glad to see my favorite IDE make it in along with Netbeans and Eclipse even if it is just the stripped down version.</li>
  <li><a href="https://fedoraproject.org/wiki/Features/Python3F13">Python 3</a> - Running along side Python 2.</li>
  <li><a href="https://fedoraproject.org/wiki/Features/NouveauDisplayPort">Nouveau DisplayPort</a> - Support for NVIDIA cards with a DisplayPort.</li>
  <li><a href="https://fedoraproject.org/wiki/Features/RadeonDisplayPort">Radeon DisplayPort</a> - Support for Radeon cards with a DisplayPort.</li>
  <li><a href="https://fedoraproject.org/wiki/Features/NetworkManagerCmdline">NetworkManager Command Line</a> - A command line interface for NetworkManager. As much as I find myself hating NetworkManager maybe this will help.</li>
  <li><a href="http://library.gnome.org/misc/release-notes/2.30/">Gnome 2.30</a> - The latest stable version of Gnome.</li>
  <li><a href="http://www.kde.org/announcements/announce-4.4.3.php">KDE 4.4</a> - The latest stable version of KDE.</li>
</ul>

Check out the <a href="http://fedoraproject.org/wiki/Releases/13/FeatureList">Fedora 13 feature list<a> for all the major features in this release.


I'm continuing with the trend of using <a href="http://fedoraproject.org/wiki/Features/PreUpgrade">PreUpdate</a> to do the upgrade:


<ol>
  <li>Make sure you are using a Fedora 12 install. If you need instructions on getting to Fedora 12 then start with <a href="http://www.ioncannon.net/system-administration/719/upgrade-to-fedora-12-from-fedora-11/">upgrading from Fedora 11 to Fedora 12</a>.</li>
  <li>yum clean all</li>
  <li>yum update</li>
  <li>Make sure you have plenty of space free in the /boot partition. I learned this lesson the last time I upgraded.</li>
  <li>I always back up my xorg.conf file since because it seems to disappear sometimes.</li>
  <li>preupgrade-cli "Fedora 13 (Goddard)" - My Fedora 12 to Fedora 13 upgrade weighed in at 1.0GB</li>
  <li>reboot and wait</li>
</ol>

No dependency issues when upgrading this time making it two in a row. I was tempted to try out the Nouveau NVIDIA drivers this time around but the driver from NVIDIA are not too hard to upgrade now so I haven't found a real reason. If you don't want to compile the NVIDIA drivers by hand you can get them from <a href="http://www.atrpms.net/">atrpms</a>, make sure to remove the Nouveau drivers first. The Fedora 13 version of <a href="http://www.virtualbox.org/wiki/Linux_Downloads">Virtualbox</a> was also needed.


I did run into a small issue with xorg after the upgrade. The NVIDIA driver requires the ignoreABI flag be sent to the X server on startup. I was able to modify startx but I always forget how to modify GDM. It turns out that you can also just put the flag in the xorg.conf file like this:


```
Section "ServerFlags"
        Option      "ignoreABI" "true"
EndSection
```

If you prefer the yum upgrade option here are the steps for that as well:


<ol>
  <li>yum clean all</li>
  <li>yum update</li>
  <li>rpm -Uvh http://mirrors.kernel.org/fedora/releases/13/Fedora/i386/os/Packages/fedora-release-13-1.noarch.rpm http://mirrors.kernel.org/fedora/releases/13/Fedora/i386/os/Packages/fedora-release-notes-13-3.fc13.noarch.rpm</li>
  <li>yum clean all</li>
  <li>yum -y update</li>
  <li>You may need to resolve dependencies and then do another yum -y update or in my case I had to use --skip-broken to resolve some issues with packages I've installed from atrpm.</li>
  <li>reboot</li>
</ol>

I needed to use the --skip-broken flag on yum this time but I didn't have to resolve any dependency issues. The resulting update was about 1.2G so it took a little while to apply. 

