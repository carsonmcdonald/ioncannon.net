---
layout: archive
status: publish
published: true
title: How to get the next date for a weekday using Oracle
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 93
wordpress_url: http://www.ioncannon.net/oracle/93/how-to-get-the-next-date-for-a-weekday-using-oracle/
date: '2006-08-02 14:26:57 -0400'
date_gmt: '2006-08-02 19:26:57 -0400'
categories:
- database administration
tags:
- Oracle
- sql
comments:
- id: 156261
  author: ACrush
  author_email: acrush@mail.ru
  author_url: ''
  date: '2009-11-03 02:39:15 -0500'
  date_gmt: '2009-11-03 07:39:15 -0500'
  content: Which version is it? In Version 9 this returns exactly the date next SUNDAY
    will be. Not next weekday. By the way, the valid entries are sometimes not in
    english. I have an installation where only Russian abbreviations work.
- id: 156461
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-11-05 14:13:20 -0500'
  date_gmt: '2009-11-05 19:13:20 -0500'
  content: 'I did my test in 10g. To be clear, this returns the next day of the week
    with the given name. If you want the day name of tomorrow you should try: SELECT
    to_char(sysdate + 1, ''DY'') FROM dual;'
---
If you ever need to find the next weekday from a given date in Oracle it turns out they have a built in function for doing just that. If you want the next Sunday from yesterday you would do:

```
SELECT NEXT_DAY(SYSDATE - 1, 'SUN') FROM dual;
```
Valid entries for the day are: SUN, MON, TUE, WED, THU, FRI, and SAT



