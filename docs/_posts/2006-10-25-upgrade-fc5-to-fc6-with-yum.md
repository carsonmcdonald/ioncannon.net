---
layout: archive
status: publish
published: true
title: Upgrade FC5 to FC6 with yum
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 99
wordpress_url: http://www.ioncannon.net/system-administration/99/upgrade-fc5-to-fc6-with-yum/
date: '2006-10-25 23:51:45 -0400'
date_gmt: '2006-10-26 03:51:45 -0400'
categories:
- system administration
- linux
tags: []
---

Now that <a href="http://fedoraproject.org/">Fedora Core 6</a> is available it is time to upgrade those old crusty FC5 installs. To upgrade from FC5 you can follow these steps:

1. You may be able to skip this step but I did a yum update on FC5 first to make sure everything there was up to date and worked before moving to FC6.
2. Do a "yum clean all" to remove all the old yum cruft.
3. Install the fedora-release for Fedora Core 6. Use the rpm command:
    ```
      rpm -Uhv http://download.fedora.redhat.com/pub/fedora/linux/core/6/i386/os/Fedora/RPMS/fedora-release-6-4.noarch.rpm http://download.fedora.redhat.com/pub/fedora/linux/core/6/i386/os/Fedora/RPMS/fedora-release-notes-6-3.noarch.rpm
    ```
  4. Run the yum update: yum -y update. At this point I had to remove a few packages to get past dependency issues they weren't important and I just added them back after the update.

If you are still on FC4 you can upgrade from <a href="http://www.ioncannon.net/system-administration/56/upgrade-fc4-to-fc5-with-yum/">FC4 to FC5</a> first.



