---
layout: archive
status: publish
published: true
title: Fun with ANSI escape codes
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 101
wordpress_url: http://www.ioncannon.net/ruby/101/fun-with-ansi-escape-codes/
date: '2006-11-03 09:21:55 -0500'
date_gmt: '2006-11-03 13:21:55 -0500'
categories:
- ruby
- utilities
tags: []
comments: []
---
For fun I recently pimped out a ruby script that I had written for some testing with a little color and a spinner. If you have never used ANSI escape codes before I've put together a simple script that shows how easy it is.


First let me say that if you are using ruby and all you want to do is add color there is a <a href="http://term-ansicolor.rubyforge.org/">Term::ANSIColor gem</a> that you can install. It seems a little overkill to have a gem for this but I figured I would mention it.

The following script displays some sample colors:

```
#!/usr/bin/ruby

printf "\033[0mAll attributes off\033[0m\n"
printf "\033[1mBold\033[0m\n"
printf "\033[4mUnderline\033[0m\n"
printf "\033[5mBlink\033[0m\n"
printf "\033[8mHide\033[0m\n"
printf "\033[30mBlack\033[0m\n"
printf "\033[31mRed\033[0m\n"
printf "\033[32mGreen\033[0m\n"
printf "\033[33mYellow\033[0m\n"
printf "\033[34mBlue\033[0m\n"
printf "\033[35mMagenta\033[0m\n"
printf "\033[36mCyan\033[0m\n"
printf "\033[37mWhite\033[0m\n"
printf "\033[40m\033[37mBlack Background\033[0m\n"
printf "\033[41mRead Background\033[0m\n"
printf "\033[42mGreen Background\033[0m\n"
printf "\033[43mYellow Background\033[0m\n"
printf "\033[44mBlue Background\033[0m\n"
printf "\033[45mMagenta Background\033[0m\n"
printf "\033[46mCyan Background\033[0m\n"
printf "\033[47mWhite Background\033[0m\n"
```
The only trick to this is that you use an escape code of "\033[" then some code that changes or resets the color. For more information see the Wikipedia link at the end of this post.

And here is how to make a simple spinner:

```
#!/usr/bin/ruby

sym = ['|', '/', '-', '\\\']
count = 0

printf "\033[s"
10.times do
  printf "\033[u\033[1D"
  printf "\033[34m" + sym[count % sym.length] + "\033[0m"
  printf "\033[s\033[0;0f"
  STDOUT.flush
  sleep 1
  count += 1
end
printf "\033[u"
```
If you want the full list of the codes you can use and more general information check out the Wikipedia <a href="http://en.wikipedia.org/wiki/ANSI_escape_code">ANSI Escape Code Information</a>.



