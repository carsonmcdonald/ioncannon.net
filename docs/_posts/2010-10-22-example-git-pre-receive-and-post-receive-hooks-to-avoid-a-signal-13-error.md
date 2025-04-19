---
layout: archive
status: publish
published: true
title: Example Git pre-receive and post-receive Hooks to Avoid a Signal 13 Error
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1362
wordpress_url: http://www.ioncannon.net/?p=1362
date: '2010-10-22 20:26:33 -0400'
date_gmt: '2010-10-23 01:26:33 -0400'
categories:
- system administration
tags:
- git
- hook
comments:
- id: 196743
  author: Matt McCormick
  author_email: mbmccormick@gmail.com
  author_url: http://mbmccormick.com
  date: '2011-01-27 20:25:14 -0500'
  date_gmt: '2011-01-28 01:25:14 -0500'
  content: "You, sir, are a lifesaver! This problem has been driving me nuts for 3
    days now! I am using this in a post-receive hook actually. It turns out that your
    hook does not support the standard input formats that most shell scripting supports
    (i.e. $1, $2, $3), which is what I was using to assign variables $oldhead, $newhead,
    etc. And for the life of me, I could not figure out why these were returning empty
    values. I hope you don't mind, but I will be referencing this post from my blog
    later tonight.\r\n\r\nThanks for the help!"
---

Git has a very nice set of example hooks that you can find just by creating a new repo. The following is an easy way to see them all:


```
mkdir myrepo
cd myrepo
git init
ls .git/hooks/
```

If you do that you will end up with a list something like this:


```
applypatch-msg.sample  post-commit.sample   post-update.sample     pre-commit.sample          pre-rebase.sample
commit-msg.sample      post-receive.sample  pre-applypatch.sample  prepare-commit-msg.sample  update.sample
```

I recently did this thinking I would create a pre-receive hook. Since there isn't a sample for pre-receive I went to the <a href="http://book.git-scm.com/5_git_hooks.html">git hooks reference</a> to see if there was anything special I needed to know. I didn't pay any attention to the fact that git will send something in on STDIN when it runs the hook and as it turns out that is important. In some instances if you don't read STDIN you will get an error message like the following when you try to push and the hook gets used:


```
fatal: The remote end hung up unexpectedly
error: error in sideband demultiplexer
error:  died of signal 13
```

The fix for this is to make sure you read STDIN when creating pre-receive and post-receive hooks. The following example shell script will show the commit information for each new revision id when you push and the hook is executed:


```
#!/bin/sh
while read oldrev newrev refname
do
  # Do something with $oldrev $newrev $refname
  git show --no-color --root -s --pretty=medium $newrev
done

```
The key part in the above is the "while read" that reads STDIN. So whatever language you write your hook in just make sure you read everything from STDIN before completing the script.

