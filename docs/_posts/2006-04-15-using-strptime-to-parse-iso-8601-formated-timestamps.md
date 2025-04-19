---
layout: archive
status: publish
published: true
title: Using strptime to parse ISO 8601 formated timestamps
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 33
wordpress_url: http://www.ioncannon.net/uncategorized/33/using-strptime-to-parse-iso-8601-formated-timestamps/
date: '2006-04-15 11:23:59 -0400'
date_gmt: '2006-04-15 16:23:59 -0400'
categories:
- programming
tags:
- C/C++
comments:
- id: 8018
  author: Olivier Mengu&Atilde;&copy;
  author_email: olivier.mengue+ioncannon.net@gmail.com
  author_url: http://o.mengue.free.fr/
  date: '2007-03-27 09:00:56 -0400'
  date_gmt: '2007-03-27 14:00:56 -0400'
  content: This code does not work when the timezone has daylight saving.
- id: 52830
  author: Hans
  author_email: hans@fugal.net
  author_url: ''
  date: '2008-02-21 11:02:47 -0500'
  date_gmt: '2008-02-21 16:02:47 -0500'
  content: Also doesn't work on systems where strptime doesn't have (or match) %z,
    like OS X.
---

A lot of dates that come back from XML based web services are in the ISO 8601 form. I found out recently that it isn't straight forward to parse such a date using C functions and have the time come out in the correct timezone. It isn't rocket science but it is a lot more convoluted than higher level languages like Java.

First of lets see an example of the ISO 8601 format: 

2006-02-03T16:45:09.000Z

That breaks down into: 

&lt;date>T&lt;time>&lt;timezone>

Where a timezone of Z is equal to UTC. I was only interested in parsing timestamps in UTC so the following only applies to that timezone.

If you want to know any more about the format check out <a href="http://en.wikipedia.org/wiki/Iso8601">this page</a>.

The strptime function is a flexible way to turn a string into a <b>struct tm</b> given a specified format. It is like a sscanf for dates. For more information on it <a href="http://www.opengroup.org/onlinepubs/007908799/xsh/strptime.html">check here</a>. I'm not exactly sure of the portability of this function but it seems to be fairly old now so it is probably reasonably portable.

The format used to parse the a ISO 8601 timestamp is: %FT%T%z

That will give you the date in <b>struct tm</b> form. If you were to print the contents of this you would get the timestamp in UTC. For my application I needed to convert it into the local timezone for the machine it was running on. To do that I used the <a href="http://www.opengroup.org/onlinepubs/009695399/functions/tzset.html">tzset</a> function to populate the timezone. I then use the <a href="http://www.opengroup.org/onlinepubs/009695399/functions/mktime.html">mktime</a> function to turn the <b>struct tm</b> into a time_t (just a long that represents the number of seconds since the epoch). Now I use the timezone value to remove the correct number of seconds from the time_t to get my local time. Then to wrap it all back up I use the <a href="http://www.opengroup.org/onlinepubs/009695399/functions/localtime.html">localtime_r</a> function to put it back into <b>struct tm</b> form.

Here is an example:

```
#include <string.h>;
#include <stdio.h>;
#include <time.h>;

void convert_iso8601(const char *time_string, int ts_len, struct tm *tm_data)
{
  tzset();

  char temp[64];
  memset(temp, 0, sizeof(temp));
  strncpy(temp, time_string, ts_len);

  struct tm ctime;
  memset(&ctime, 0, sizeof(struct tm));
  strptime(temp, "%FT%T%z", &ctime);

  long ts = mktime(&ctime) - timezone;
  localtime_r(&ts, tm_data);
}

int main()
{
  char date[] = "2006-03-28T16:49:29.000Z";
  struct tm tm;
  memset(&tm, 0, sizeof(struct tm));
  convert_iso8601(date, sizeof(date), &tm);

  char buf[128];
  strftime(buf, sizeof(buf), "Date: %a, %d %b %Y %H:%M:%S %Z", &tm);
  printf("%sn", buf);
}
```

This example compiles with: cc -o timetest timetest.c

Although I haven't tested the code with other timezone encoded ISO 8601 timestamps it seems reasonable that if you have one in that type of format that you could add an extra step and convert it to UTC then into your local timezone without much hassle.

