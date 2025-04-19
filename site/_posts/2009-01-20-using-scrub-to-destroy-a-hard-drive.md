---
layout: archive
status: publish
published: true
title: Using scrub to destroy a hard drive
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 272
wordpress_url: http://www.ioncannon.net/?p=272
date: '2009-01-20 07:33:40 -0500'
date_gmt: '2009-01-20 12:33:40 -0500'
categories:
- system administration
- utilities
tags:
- shred
- security
comments:
- id: 118255
  author: P&Atilde;&iexcl;draig Brady
  author_email: P@draigBrady.com
  author_url: http://www.pixelbeat.org/
  date: '2009-01-22 12:28:04 -0500'
  date_gmt: '2009-01-22 17:28:04 -0500'
  content: "Note the recent paper suggesting a single pass is fine is:\r\nhttp://sansforensics.wordpress.com/2009/01/15/overwriting-hard-drive-data/\r\nHowever
    the methods there a questioned in the \"Further Epilogue\" here:\r\nhttp://www.cs.auckland.ac.nz/~pgut001/pubs/secure_del.html\r\n\r\nIn
    any case I think the concensus is 25 is too much so I've changed the default to
    3:\r\nhttp://git.savannah.gnu.org/gitweb/?p=coreutils.git;a=commit;h=83ae1bdd44432055e2cb6cf1502d1cc0cd651746\r\n\r\ncheers."
---
Recently I had a hard drive failure that pushed me into getting a little <a href="http://www.dlink.com/products/?pid=509">NAS device</a> that I could back up to <a href="http://aws.amazon.com/s3/">S3</a> easily. After consolidating a lot of data to the NAS I was left with a few old hard drives that I needed to do something with as well as some existing hard drives that I've collected over the years. Some of the drives I have are from family members that I have recycled computers for but kept the hard drives out of fear that personal data might still be on them. At the same time this was happening I read an article claiming that a <a href="http://www.securityfocus.com/brief/888">single drive wipe protects data</a>.


I started digging a little more to see just how effective a single drive wipe might be and found the old wisdom in this article: <a href="http://www.cs.auckland.ac.nz/~pgut001/pubs/secure_del.html">Secure Deletion of Data from Magnetic and Solid-State Memory</a>. Scanning over this older article I noticed that it had been updated with a response to the <a href="http://sansforensics.wordpress.com/2009/01/15/overwriting-hard-drive-data/">latest article</a> on the <a href="http://www.springerlink.com/content/408263ql11460147/?p=650ee5e3e45d4e1e845e2bfe8a959f1a&pi=20">effectiveness overwriting a drive with a single pass random data</a>. After reading through the articles I decided that overwriting was good enough. I figure if it doesn't completely destroy the data it will make it hard enough to not be worth recovering. 

The first step I took was to get a <a href="http://www.knoppix.org/">Knoppix</a> live CD. Doing this let me remove data on any drive that I could connect to the PC. The next step was to run the <b>shred</b> command on each disk that I wanted to destroy (<b>shred</b> happens to be on the Knoppix live CD):

```
shred -zv -n 3 /dev/hda
```
The options I used have the following meaning:

z - zero the drive once the random passes are done
v - verbose, shows the progress
n - number of passes to make writing random data

You can have <b>shred</b> make as many passes as you want and the default is 25 passes as described in <a href="http://www.cs.auckland.ac.nz/~pgut001/pubs/secure_del.html">Secure Deletion of Data from Magnetic and Solid-State Memory</a>. Depending on how fast and how large the drive is this command can take a really long time to run. I decided that 3 passes would be good enough for me. I will still probably hold on to most of the disks in question just in case I want to use them later but I now don't feel like I can't toss them if I no longer need them.

