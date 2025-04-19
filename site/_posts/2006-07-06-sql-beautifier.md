---
layout: archive
status: publish
published: true
title: SQL Beautifier
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 67
wordpress_url: http://www.ioncannon.net/oracle/67/sql-beautifier/
date: '2006-07-06 12:35:24 -0400'
date_gmt: '2006-07-06 17:35:24 -0400'
categories:
- database administration
tags:
- Oracle
- sql
comments:
- id: 29
  author: GuidoMarcel
  author_email: author@sqlinform.com
  author_url: http://www.sqlinform.com
  date: '2006-07-27 05:27:50 -0400'
  date_gmt: '2006-07-27 09:27:50 -0400'
  content: "Hi,\r\nthx for the nice review of the sqlinform site.\r\nWith the next
    release I will increase the max size allowed for SQL statements. You will then
    be able to format monster SQL statements ;-)\r\nRegards\r\nGuidoMarcel"
- id: 19864
  author: Quellcode-Versch&Atilde;&para;nerer und -Formatierer | Dr. Web Weblog
  author_email: ''
  author_url: http://www.drweb.de/weblog/weblog/?p=851
  date: '2007-06-07 03:31:02 -0400'
  date_gmt: '2007-06-07 08:31:02 -0400'
  content: "[...] Weiteres: phpCodeBeautifier (Win/Linux Kommandozeilentool), HTB
    2.0 (ebenfalls Kommandozeilentool). Ein Blogbeitrag &Atilde;&frac14;ber SQL Beautifier.
    [...]"
- id: 202177
  author: Allen
  author_email: notspam9@gmail.com
  author_url: ''
  date: '2011-04-13 10:14:12 -0400'
  date_gmt: '2011-04-13 15:14:12 -0400'
  content: "I found this site and like it. www.dpriver.com/pp/sqlformat.htm \r\npaste
    code it,\r\nchose options on right (I use 'before comma w/ space')\r\nclick format
    (needed to 'cancel' and click format a second time)\r\nclick 'paste sql into clipboard'
    then pasted into my app/editor."
- id: 235885
  author: Tao
  author_email: tao@klerks.biz
  author_url: http://poorsql.com
  date: '2012-03-13 16:07:50 -0400'
  date_gmt: '2012-03-13 21:07:50 -0400'
  content: "A little late maybe (only 6 years), but reasonably recently I implemented
    a free open-source T-SQL formatter similar to the commercial offerings you listed;
    It's not specifically designed for unix, but it does have a command-line version
    which can use StdIn/StdOut, so I guess its unixey-enough. It should also run in
    any environment that has Mono.\r\n\r\nHope this helps someone: http://www.architectshack.com/PoorMansTSqlFormatter.ashx"
---

I pulled a large amount of SQL out of some existing code and wanted to have it formated nicely for me. I figured there had to be some type of pretty printer for SQL available outside of applications like TOAD. I have access to TOAD but it would have required a reboot so I figured I would ask google what to do. There seem to be a number of different formaters out there. I found a couple people talking about current options <a href="http://awads.net/wp/2005/12/12/format-your-sql-the-easy-way/">a list here</a> and <a href="http://blogs.ittoolbox.com/database/solutions/archives/free-sql-code-beautifier-3240">here</a>.  The following list is a summary of the options I found:

  - <a href="http://www.sqlinform.com/">SQLInform</a>
  - <a href="http://www.wangz.net/cgi-bin/pp/gsqlparser/sqlpp/sqlformat.tpl">Online SQL Formatter</a>
  - <a href="http://www.dbainfopower.com/dbaip_SQLreview.php">SQL Review</a>
  - <a href="http://psti.equinoxbase.com/">Pl/Sql tidy</a>
  - <a href="http://vsbabu.org/software/lsqlb.html">Make your own with C</a>
  - Use TOAD

I decided that since SQLInform was mentioned a lot I would give it a try. I was suprised at how well it did. I gave it a huge amount of SQL to re-format and it gave it back to me formated. There is a limit on how much you can ask it to format at once but that shouldn't be a big issue. I didn't see that it choked on anything that I gave it and there were all kinds of nasty things going on in the SQL.

One interesting thing to come from this is that it seems there are no open source or truely free unix based formaters out there. It seems like it would be easy enough to get going since the SQL grammar is available for a number of different parser generators.



