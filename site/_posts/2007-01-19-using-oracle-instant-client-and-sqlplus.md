---
layout: archive
status: publish
published: true
title: Using Oracle Instant Client and SQLPlus
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 114
wordpress_url: http://www.ioncannon.net/system-administration/114/using-oracle-instant-client-and-sqlplus/
date: '2007-01-19 10:35:53 -0500'
date_gmt: '2007-01-19 15:35:53 -0500'
categories:
- system administration
tags:
- Oracle
- sqlplus
comments:
- id: 4912
  author: Patrick Holmes
  author_email: pholmes@ipcm.com
  author_url: ''
  date: '2007-03-07 18:34:35 -0500'
  date_gmt: '2007-03-07 23:34:35 -0500'
  content: "Thank you for posting this!  I was ready to give up until I found your
    post with a sample tnsnames.ora entry that actually works.  (Only Oracle can produce
    an \"instant\" product that takes hours to install and get working... ;-)\r\n\r\nthanks,\r\npat
    holmes"
- id: 30614
  author: Aravind
  author_email: aravind@ktelectric.com
  author_url: ''
  date: '2007-10-01 12:59:01 -0400'
  date_gmt: '2007-10-01 17:59:01 -0400'
  content: "What can I say.\r\n\r\nGood documents like this exist through out the
    Internet but getting to it is nothing but luck.  Definetely helped to solve my
    problem but I still trying to figure out LinkedSErver configuration from Sql Server
    to Oracle.\r\n\r\nKeep up the good work"
- id: 53689
  author: EsmCor
  author_email: esmirna.cortes@nissan.com.mx
  author_url: ''
  date: '2008-02-25 17:53:12 -0500'
  date_gmt: '2008-02-25 22:53:12 -0500'
  content: "... I have a question, should this configuration work for a Windows XP
    client or there's something else to consider?\r\n\r\nI've been making some attempts,
    but can't make it work!!\r\n\r\nPlease give me some advise"
- id: 141475
  author: Matt Rogers
  author_email: mrog71@gmail.com
  author_url: ''
  date: '2009-06-10 17:49:45 -0400'
  date_gmt: '2009-06-10 22:49:45 -0400'
  content: "Thanks for posting this.  This is exactly what I was looking for.  I'm
    connecting to an Oracle database on UNIX  box from my windows laptop, and runninng
    SQL Plus commands from SQL Developer was not working.  This works great!  Thanks!
    \ (found this from a Google search)\r\n\r\nMatt"
- id: 161474
  author: Andy
  author_email: andrew.carey1@pcc.edu
  author_url: ''
  date: '2010-01-20 16:17:34 -0500'
  date_gmt: '2010-01-20 21:17:34 -0500'
  content: "Please elaborate on these commands?  Do I put them into a batch file somewhere
    or what?\r\n\r\nexport LD_LIBRARY_PATH=.\r\nexport TNS_ADMIN=.\r\nexport ORACLE_HOME=.\r\n\r\nWhen
    I run SqlPlus.exe and, when prompted, enter my user-name and password, I get ERROR:
    ORA-12560: TNS: protocol adapter error.  I have TNSNAMES.ORA file in the same
    installclient_10_2 folder.\r\n\r\nThanks--"
- id: 171900
  author: DMcDConsult
  author_email: dave@dmcdconsulting.com
  author_url: http://www.dmcdconsulting.com
  date: '2010-06-14 09:08:42 -0400'
  date_gmt: '2010-06-14 14:08:42 -0400'
  content: "@Andy:   I put instantclient in folder OracleInstantClient on my USB drive
    - so change your paths accordingly, but you could use a batch file with: \r\n```\r\nSET
    PATH=E:\\OracleInstantClient;%PATH%\r\nSET TNS_ADMIN=E:\\OracleInstantClient\r\nSET
    LD_LIBRARY_PATH=E:\\OracleInstantClient\r\nSET SQLPATH=E:\\OracleInstantClient\r\nSET
    ORACLE_HOME=E:\\OracleInstantClient\r\n```\r\nGreat post though."
---
Some time ago Oracle introduced their <a href="http://www.oracle.com/technology/tech/oci/instantclient/instantclient.html">Instant Client</a> as an alternative to needing a full install of the Oracle client to run your own apps or SQLPlus. I've been putting the Instant Client to good use these days and figured I would give a quick howto on getting it set up.


First you should <a href="http://www.oracle.com/technology/software/tech/oci/instantclient/index.html">download the correct binary</a> for what you want to do. They have a build for a lot of different platforms and then they also split the libraries themselves out from SQLPlus. If all you need is the OCI library then all you have to do is download that part. I find it nice to get both the libraries and SQLPlus so I can verify that the setup works.

After you have downloaded that client you will need to unzip it. In the current case the directory it creates is "instantclient_10_2" and in this example I'm going to assume you got both the libraries and SQLPlus. After unziping both packages change into the instantclient_10_2 directory.

Now that you are in the instantclient_10_2 directory you will need to set up some environment variables to be able to run SQLPlus. The following will do the trick (just remember that I'm assuming that everything you need is in your current directory, you would of course need to change these if you want to install in a different location):

```
export LD_LIBRARY_PATH=.
export TNS_ADMIN=.
export ORACLE_HOME=.
```
Now you will need to create of copy a tnsnames.ora file into your current directory. Here is an example assuming you have Oracle running on a box at 192.168.1.100 with a listener on port 1521 and a SID of XE:

```
XE.WORLD =
  (DESCRIPTION =
    (ADDRESS_LIST =
        (ADDRESS =
          (COMMUNITY = tcp.world)
          (PROTOCOL = TCP)
          (Host = 192.168.1.100)
          (Port = 1521)
        )
    )
    (CONNECT_DATA = (SID = XE)
    )
  )
```
Now you are ready to go. Just run the following to connect to your Oracle database:

```
./sqlplus username/password@XE.WORLD
```
Oracle's Instant Client makes the world much easier now. In just a few steps you are able to connect to an Oracle database with SQLPlus and don't have to go through a ton of installation mess.

As a side note, I also found that if you grab the header files from a full installation you can easily compile against the Instant Client libraries when using OCI calls. This can make developing an application that connects to Oracle very easy to set up.



