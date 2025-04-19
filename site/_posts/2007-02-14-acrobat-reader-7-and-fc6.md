---
layout: archive
status: publish
published: true
title: Acrobat Reader 7 and FC6
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 121
wordpress_url: http://www.ioncannon.net/system-administration/121/acrobat-reader-7-and-fc6/
date: '2007-02-14 08:41:54 -0500'
date_gmt: '2007-02-14 13:41:54 -0500'
categories:
- system administration
- linux
- utilities
- software
tags: []
comments:
- id: 3621
  author: Bill Vissman
  author_email: papabilly66013@charter.net
  author_url: ''
  date: '2007-02-18 05:49:00 -0500'
  date_gmt: '2007-02-18 10:49:00 -0500'
  content: Attempting to upgrade my reader from 7.0.8 I received the error message
    1714 "Adobe reader 8 cannot be removed.  Contact your terch support group.  I
    cand use the old version, and can't install an update.  How to resolve?
- id: 3947
  author: Shigeru Imano
  author_email: imano@dccnet.com
  author_url: ''
  date: '2007-02-22 01:23:19 -0500'
  date_gmt: '2007-02-22 06:23:19 -0500'
  content: "The second set of script that you suggested to change seems same, please
    see below which I copied from:\r\n.............following line:\r\necho $mfile|
    sed 's/libgtk-x11-\\([0-9]*\\).0.so.0.\\([0-9]\\)00.\\([0-9]*\\)\\|\\(.*\\)/\\1\\2\\3/g'\r\n\r\nto\r\necho
    $mfile| sed 's/libgtk-x11-\\([0-9]*\\).0.so.0.\\([0-9]\\)000.\\([0-9]*\\)\\|\\(.*\\)/\\1\\2\\3/g'\r\n\r\nWould
    you please double check if the above is error?\r\n\r\nBy the way, I have upgraded
    FC4 to FC5 & FC6 now. My problem when try to install the latest acrobat reder,
    AdobeReader_jpn-7.0.9-1.i386.rpm, is that I get error that says \"file /usr/bin/acroread
    from install of AdobeReader_jpn-7.0.9-1 conflicts with file from package acroread-7.0.5-2.2.fc4.rf\".\r\nSo,
    I thought that your suggestion might solve my problem here.\r\nWould you please
    give me your comment?\r\nThank you,\r\nRegards,\r\nShigeru"
- id: 3959
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2007-02-22 06:45:10 -0500'
  date_gmt: '2007-02-22 11:45:10 -0500'
  content: That should work. One thing I forgot to put in the post is that I was using
    the tgz file and not the rpm. It could be that they have different scripts.
- id: 16213
  author: milton
  author_email: miltonp99@gmail.com
  author_url: ''
  date: '2007-05-07 23:13:13 -0400'
  date_gmt: '2007-05-08 04:13:13 -0400'
  content: Thank you very much for posting this fix. It worked like a charm!
---
I broke down and wanted to install Adobe Acrobat Reader 7 on my FC6 box to replace xpdf. After installing it from the tar.gz version the acroread startup script bombed out with the error: expr substr 2400000000000 1

After a little searching I didn't find much help so I started looking at the script myself to see if I could track down the problem. It turns out that it wasn't that hard to fix. First off the script file was located at: /usr/bin/acroread

Open the script file and find the function named "check_gtk_ver_and_set_lib_path". This is the location of the first error you will hit. To fix the error you will need to change:

```
base_version=`expr substr "${base_version}0000000000" 1 $len_version`
```
to

```
blah1="${base_version}0000000000"
base_version=${blah1:1:$len_version}
```
You will find this two places and it needs to be changed in both. If you don't notice the 2nd place it is right after the first in a loop:

```
while [ $len_version -gt $len_base_version ]; do
```
The second problem you will have is located in the function "get_gtk_file_ver". Find this function and change the following line:

```
echo $mfile| sed 's/libgtk-x11-\([0-9]*\).0.so.0.\([0-9]\)00.\([0-9]*\)\|\(.*\)/\1\2\3/g'
```
to

```
echo $mfile| sed 's/libgtk-x11-\([0-9]*\).0.so.0.\([0-9]\)000.\([0-9]*\)\|\(.*\)/\1\2\3/g'
```
Now you should be able to run acroread without errors.



