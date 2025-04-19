---
layout: archive
status: publish
published: true
title: Using fetchmail and procmail for maildir style storage from a pop3 account
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 97
wordpress_url: http://www.ioncannon.net/system-administration/97/using-fetchmail-and-procmail-for-maildir-style-storage-from-a-pop3-account/
date: '2006-09-25 09:03:31 -0400'
date_gmt: '2006-09-25 13:03:31 -0400'
categories:
- system administration
- linux
- utilities
tags: []
comments:
- id: 622
  author: Umut Tezduyar
  author_email: maps@tezduyar.com
  author_url: http://www.UmutTezduyar.com
  date: '2006-11-22 14:34:55 -0500'
  date_gmt: '2006-11-22 18:34:55 -0500'
  content: Good job. It is working fine. I just tested it. I tried to access to the
    gmail. I had to add "ssl" to the fetchmail configuration file to enable SSL. That
    is all. Thank you
- id: 2297
  author: George
  author_email: george.patterson@gmail.com
  author_url: ''
  date: '2007-01-27 08:28:24 -0500'
  date_gmt: '2007-01-27 13:28:24 -0500'
  content: "Great Tutorial. I had been meaning to do this for a while.\r\n\r\nMy next
    step is to configure squirrelmail to present a web based interface to the imap
    server.\r\n\r\nThank you for getting me started"
---
For the longest time having POP3 messages stored in one large file bothered me. I found out however that you can easily convert the single file storage into Maildir style storage with fetchmail and procmail. Here are the steps I used to fetch mail from a POP3 mailbox and store the messages in Maildir style folders.


<h1>1. Fetchmail setup</h1>
The following configuration file for fetchmail will pop all the mail off the server and purge it so be careful. The main thing to notice is the mta line at the end that calls procmail.

```
set logfile /tmp/fetchmail.log
set invisible
set no bouncemail

poll "mail.mypop3service.com"
protocol pop3
username "username"
password "password"
fetchall
nokeep
mda "/usr/bin/procmail -m /directory/to/procmail.conf"
```
<h1>2. Procmail setup</h1>
This is a very simple Procmail configuration file. It stores everything in on directory called Mail. The main thing to notice here is that there is a / at the end of the directory. 

```
CORRECTHOME=/directory/to/store/mail/in
MAILDIR=$CORRECTHOME/
PMDIR=/directory/to/store/procmail/info/in
LOGFILE=$PMDIR/log
VERBOSE=on

:0
Mail/
```
<h1>3. Running fetchmail</h1>
Now all you need to do is run fetchmail with the above configuration file:

```
/usr/bin/fetchmail -f fetchmail.conf
```
Doing this should result in a number of files stored in your Mail/cur directory if there are messages on the server. 

