---
layout: archive
status: publish
published: true
title: Cleaning up stale rails sessions (removing ruby_sess files)
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 20
wordpress_url: http://www.ioncannon.net/uncategorized/20/cleaning-up-stale-rails-sessions-removing-ruby_sess-files/
date: '2006-06-08 11:59:02 -0400'
date_gmt: '2006-06-08 16:59:02 -0400'
categories:
- system administration
tags:
- ruby
- rails
comments: []
---

I'm not sure if something isn't set up correctly of if this is just a fact of life with rails but the sessions it creates never seem to go away. I think before rails 1.1 the sessions where stored in /tmp and now they are stored in the apps directory along with everything else so they is probably no internal mechanism to delete them. I only noticed because after about a month of an certain app running the disk on the machine started to fill up. After digging a little I found 50K ruby_sess.* files hanging out in the rails session directory.

Anyway it was easy enough to clean up the stale ruby_sess files by going into the rails webapp/session directory and then running the following command:

```find -type f -name "ruby_sess*" -exec rm -f {} \;```

I'm not sure why the app is creating sessions but it isn't something that stores state so I didn't have to worry about killing active sessions here. If you do need to worry about that you will probably want to toss a time on the find command.

After looking a little more I found a <a href="http://www.realityforge.org/articles/2006/03/01/removing-stale-rails-sessions">post about this</a> that has a ruby way of cleaning up the sessions.



