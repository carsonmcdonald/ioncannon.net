---
layout: archive
status: publish
published: true
title: Upgrading to Fedora 11 from Fedora 10
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 358
wordpress_url: http://www.ioncannon.net/?p=358
date: '2009-06-12 05:40:54 -0400'
date_gmt: '2009-06-12 10:40:54 -0400'
categories:
- system administration
tags:
- linux
- Fedora
comments:
- id: 142026
  author: Chris van der Merwe
  author_email: chris@snipsys.com
  author_url: http://snipsys.com
  date: '2009-06-16 20:38:08 -0400'
  date_gmt: '2009-06-17 01:38:08 -0400'
  content: "Install PreUpgrade with:\r\n\r\nyum install preupgrade"
- id: 142416
  author: Aaron Gibson
  author_email: aaron@the-gibsons.org
  author_url: ''
  date: '2009-06-24 09:32:20 -0400'
  date_gmt: '2009-06-24 14:32:20 -0400'
  content: It appears that the above will only work if you are obtaining an IP address
    via DHCP.  A little googling seems to indicate that if you want to use preupgrade-cli
    with a static IP it must be listed in the command line.  (Apparently all of the
    /etc/syconfig/network-scripts files are completely ignored when upgrading.)  This
    is a bit frustrating since it is a significant departure from the behavior when
    upgrading with yum.
- id: 143329
  author: Cliff Stanford
  author_email: cliff@may.be
  author_url: http://www.may.be/
  date: '2009-07-11 06:07:52 -0400'
  date_gmt: '2009-07-11 11:07:52 -0400'
  content: "Hmm, I just tried this and it failed badly.  After rebooting, the machine
    failed to come back.  A visit to the data centre showed that it was sitting with
    a prompt asking which Ethernet interface to use.  I didn't actually care!\r\n\r\nAfter
    hitting return, it ran for a while an then came up with an error message again
    requiring console access.  The only option was reboot and I could envisage myself
    getting into an infinite loop.  However, after the reboot the machine came back
    into Fedora 10 and I breathed a sigh of relief, relocked the cabinet and went
    home.\r\n\r\nCan we please go back to your old way of doing it?  Besides the obvious
    advantage that it actually works, it also minimises downtime and works remotely.
    \ Please don't stop writing the guides that use yum; I miss being able to come
    here, copy and paste two lines of code and have my machines upgraded, as I have
    been doing since FC7.\r\n\r\nThanks,\r\nCliff."
- id: 144400
  author: Jon Baker
  author_email: me@jdavidbaker.com
  author_url: ''
  date: '2009-07-31 16:20:06 -0400'
  date_gmt: '2009-07-31 21:20:06 -0400'
  content: "Same issue here as Cliff and Aaron - updating via yum still is really
    the only safe way to do this on a headless server.  I've had about a 50% success
    rate using preupgrade - and 50% is clearly nowhere near good enough when you don't
    have access to your server.  One of my machines uses eth0 for the internal IP
    and eth1 for the external - but preugrade assigns the IP address to eth0.  Furthermore,
    when it does work, it requires taking your server offline for approximately 2
    hours (at least it did for me) - on a production server, using yum, your server
    is only offline long enough to reboot it.\r\n\r\nSo, it's still not automatic
    enough to use preugrade unless you're using a Fedora desktop system."
- id: 155239
  author: Daniel Morante
  author_email: daniel@morante.net
  author_url: http://www.unibia.net
  date: '2009-10-22 12:08:38 -0400'
  date_gmt: '2009-10-22 17:08:38 -0400'
  content: "PreUpgrade works great when your upgrading from a relatively new Fedora
    install. Systems which started on Fedora prior FC5 made a very small /boot partition
    by default (only 30MB). \r\n\r\nFor these systems Anaconda or Yum is the only
    way, unless you re-size your /boot partition."
- id: 155929
  author: JayZ
  author_email: octopush@gmail.com
  author_url: http://www.jaysbrain.com
  date: '2009-10-30 15:46:21 -0400'
  date_gmt: '2009-10-30 20:46:21 -0400'
  content: "Indeed!  Keep writing the Yum upgrade docs, but only if you are doing
    it :)   Obviously we can take previous FC>FC Yum posts and apply a bit of logic
    to do it on our own.\r\n\r\nThe benefit that I have had from your site, since
    FC5, is that you went through the pain and legwork that made me comfortable to
    do it in production.\r\n\r\nThanks for years of great help with Yum updates."
- id: 155950
  author: JayZ
  author_email: octopush@gmail.com
  author_url: http://www.jaysbrain.com
  date: '2009-10-30 17:47:19 -0400'
  date_gmt: '2009-10-30 22:47:19 -0400'
  content: "By the way... if you want to:\r\n\r\n```yum update\r\nyum clean all\r\nyum
    clean all\r\nyum update\r\n\r\nrpm -Uvh http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-11-1.noarch.rpm
    http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-notes-11.0.0-2.fc11.noarch.rpm\r\n\r\nyum
    -y update\r\n```\r\n\r\nShould get you going.  I ran into a problem with Nessus
    (which I removed and reinstalled after) and MySql (which I removed and reinstalled
    after).   Everything else built just fine."
- id: 164130
  author: Fedora 12 Bootable Root EBS on EC2
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/894/fedora-12-bootable-root-ebs-on-ec2/
  date: '2010-02-26 15:14:01 -0500'
  date_gmt: '2010-02-26 20:14:01 -0500'
  content: "[...] a messier instances after it is done. The next step for the upgrade
    path is to do what I outline in upgrading from Fedora 10 to Fedora 11 and upgrading
    from Fedora 11 to Fedora 12. Here are the commands all in one place to make it
    [...]"
- id: 238692
  author: Puple
  author_email: ksacry@gmail.com
  author_url: ''
  date: '2012-04-05 11:12:49 -0400'
  date_gmt: '2012-04-05 16:12:49 -0400'
  content: Has anyone tried editing /boot/upgrade/ks.cfg and adding --device=eth1
    to the network line after preupgrade runs and before rebooting?
---

It is time again to upgrade if you are using Fedora. <a href="http://docs.fedoraproject.org/release-notes/f11/">Fedora 11</a> was <a href="http://press.redhat.com/2009/06/09/fedora-11-rapid-innovation-available-today/">released</a> a few days ago and contains some nice <a href="http://fedoraproject.org/wiki/Fedora_11_tour">enhancements</a>.

For people who can a complete re-install is probably best. One reason for that is the inclusion of ext4 in Fedora11. You won't get the benefit of ext4 unless you do a fresh install or <a href="http://www.cyberciti.biz/tips/linux-convert-ext3-to-ext4-file-system.html">upgrade from ext3 to ext4</a>. If you read the <a href="http://docs.fedoraproject.org/install-guide/f11/en-US/html/ch-upgrade-x86.html">upgrade guide</a> that Fedora produces it recommends not doing an upgrade.


This time around I decided to go with <a href="http://fedoraproject.org/wiki/Features/PreUpgrade">PreUpdate</a> right off the bat and it worked great. Here are the condensed steps. I think this will be the last time I do an upgrade post since they have it down to almost nothing now.

<ol>
<li>You have to be at Fedora10 before you try this. If you aren't there follow the <a href="http://www.ioncannon.net/system-administration/142/upgrading-from-fedora-9-to-fedora-10-with-yum/">steps to get to Fedora10</a>.</li>
<li>yum clean all</li>
<li>yum udpate</li>
<li>preupgrade-cli "Fedora 11 (Leonidas)"</li>
<li>reboot and wait</li>
</ol>

It seems like the days of conflicts before upgrades are gone now so that is a good thing. I didn't have to remove anything to make dependencies work out. The only fallout I had from this upgrade was my NVIDIA configuration for xorg got wiped and I had to pull it from backup. So take note to back up your xorg.conf if you have a custom one.



