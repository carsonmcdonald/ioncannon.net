---
layout: archive
status: publish
published: true
title: Fun with Oracle Strings
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 51
wordpress_url: http://www.ioncannon.net/uncategorized/51/fun-with-oracle-strings/
date: '2006-02-14 03:14:07 -0500'
date_gmt: '2006-02-14 08:14:07 -0500'
categories:
- database administration
tags:
- Oracle
comments: []
---
Today I needed to find a way to count the number of unique email domains in a table. I figured there was a way of getting the index of a string in another string and sure enough there is. This did the trick in Oracle:


```
select count(1), SUBSTR(email, INSTR(email, '@', 1, 1)+1) from SOMETABLE group by SUBSTR(email, INSTR(email, '@', 1, 1)+1) order by count(1) desc
```

The INSTR function gives you the location in a string where another string is located. See the following link for more on the INSTR function: <a href="http://www.techonthenet.com/oracle/functions/instr.php">http://www.techonthenet.com/oracle/functions/instr.php</a>

I've always found the way Oracle handles case interesting. It looks like they are changing things a little starting with 10G: <a href="http://blogs.ittoolbox.com/database/solutions/archives/005951.asp">http://blogs.ittoolbox.com/database/solutions/archives/005951.asp</a>



