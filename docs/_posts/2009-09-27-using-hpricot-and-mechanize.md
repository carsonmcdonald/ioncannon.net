---
layout: archive
status: publish
published: true
title: How I Used Hpricot and Mechanize in GeeQE
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 675
wordpress_url: http://www.ioncannon.net/?p=675
date: '2009-09-27 19:50:46 -0400'
date_gmt: '2009-09-28 00:50:46 -0400'
categories:
- programming
tags:
- ruby
- hpricot
- mechanize
comments: []
---

While building <a href="http://www.ioncannon.net/projects/geeqe/">GeeQE</a> I wanted to enhance the <a href="http://blog.stackoverflow.com/2009/06/stack-overflow-creative-commons-data-dump/">CC dump of Stack Overflow's data</a>. The main reason I wanted to do this was to capture <a href="http://www.gravatar.com/">Gravatar</a> hashes and user badges. To do this I decided to continue using Ruby as I did with the XML loading (see  my previous post on <a href="http://www.ioncannon.net/programming/643/fast-xml-parsing-with-ruby/">XML parsing with Ruby</a>).  The easy choice was of course <a href="http://github.com/hpricot">Hpricot</a> to parse the HTML from the <a href="http://stackoverflow.com/users">users page</a> and <a href="http://mechanize.rubyforge.org/mechanize/">Mechanize</a> to move from one page to the next.


The first thing I wanted to make sure to do was to scrape this data as efficiently as possible. That is why I use the users page instead of going over every single user's profile page. This approach is not optimal since the users pages most likely update as the script moves through them so users could be missed but I'm not looking for 100% here so that limitation was acceptable.

To run the <a href="http://code.google.com/p/geeqe/source/browse/trunk/scripts/useroverviewpuller.rb">user profile script</a> that is described here you will first need to load the database <a href="http://code.google.com/p/geeqe/source/browse/trunk/scripts/schema.sql">schema</a> and then load the CC data dump with the <a href="http://code.google.com/p/geeqe/source/browse/trunk/scripts/load.rb">XML loader script</a>.

Two good sources of information about using Hpricot can be found in the <a href="http://wiki.github.com/hpricot/hpricot/an-hpricot-showcase">Hpricot showcase</a> and the <a href="http://wiki.github.com/hpricot/hpricot/hpricot-challenge">Hpricot challenge</a> wiki pages.

The only tricky thing that I needed to do with Hpricot was associated with parsing badge counts since the outer spans have a title with the name of the badge type in them:

```
<div class="user-details">
  <a href="/users/256/example-user" >Example User</a><br>
  <span class="reputation-score" title="reputation score">22k</span>
  <span title="8 gold badges"><span class="badge1">&#9679;</span><span class="badgecount">8</span></span>
  <span title="5 silver badges"><span class="badge2">&#9679;</span><span class="badgecount">5</span></span>
  <span title="7 bronze badges"><span class="badge3">&#9679;</span><span class="badgecount">7</span></span>
</div>
```

I could have probably used the class of the inner span but I decided since it wasn't named that I couldn't be completely sure those would stay the same.

I used the ability of Hpricot to match attribute values based on <a href="http://trac.edgewall.org/wiki/TracQuery#QueryLanguage">Trac Query</a> syntax. Here you can see that with the "@title~=badge type" where ~= matches when the value of the title attribute contains the corrisponding badge type name:

```
  user_bc = (user_info/"div[@class='user-details']/span[@title~=gold]/span[@class='badgecount']")
  user_gold = user_bc != nil && user_bc[0] != nil ? user_bc[0].inner_html : 0

  user_bc = (user_info/"div[@class='user-details']/span[@title~=silver]/span[@class='badgecount']")
  user_silver = user_bc != nil && user_bc[0] != nil ? user_bc[0].inner_html : 0

  user_bc = (user_info/"div[@class='user-details']/span[@title~=bronze]/span[@class='badgecount']")
  user_bronze = user_bc != nil && user_bc[0] != nil ? user_bc[0].inner_html : 0
```

After parsing the page for user information the script then looks for the next page URL to parse then sleeps for a random amount of time before using Mechanize to pull down the page.

