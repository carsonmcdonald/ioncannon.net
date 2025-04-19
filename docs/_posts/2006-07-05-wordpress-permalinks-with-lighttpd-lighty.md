---
layout: archive
status: publish
published: true
title: Wordpress permalinks with lighttpd (lighty)
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 6
wordpress_url: http://www.ioncannon.net/system-administration/6/wordpress-permalinks-with-lighttpd-lighty/
date: '2006-07-05 19:07:09 -0400'
date_gmt: '2006-07-05 23:07:09 -0400'
categories:
- system administration
tags: []
---

Wordpress out of the box works just fine with lighttpd. But you will run into issues if you want nice looking and search engine friendly URLs. To get that you need to turn on the non-default <a href="http://codex.wordpress.org/Using_Permalinks">permalinks</a>. Most of the information out there on how to set your webserver up to handle this is written for apache so if you are using lighttpd it is a little harder to find the correct way of doing the URL re-writing.

For more information about why you should use custom permalinks look <a href="http://www.emilyrobbins.com/how-to-blog/how-to-configure-wordpress-to-create-search-engine-friendly-urls-for-permalinks-242.htm">here</a> or <a href="http://www.tomrafteryit.net/boost-search-engine-optimisation-seo-using-permalinks/">here</a>.

I started with <a href="http://www.xyooj.com/blog/plink/technical/8/lighttpd-rewrite-rule-wordpress-permalinks/">this post</a> but it seemed to lack a few rules so I went looking again. Next I found <a href="http://laitsas.com/wordpress/3/rewrite-rules/">this post</a> that has a better set of rules. Between these two I came up with a set of my own that includes some extra rules for some plugins.

```
url.rewrite = (
"^/(wp-admin|images|wp-content|awstats)/{0,1}(?!no.css)(.*)" => "$0",
"^/sitemap/?$" => "/index.php?pagename=sitemap&pg=1",
"^/sitemap/([0-9]+)/?$" => "/index.php?pagename=sitemap&pg=$1",
"^/library/?$" => "/index.php?now_reading_library=true",
"^/library/tag/(.+)/?$" => "/index.php?now_reading_tag=true&now_reading_tag=$1",
"^/library/([0-9]+)/?$" => "/index.php?now_reading_single=true&now_reading_id=$1",
"^/page/([0-9]+)/?$" => "/index.php?paged=$1",
"^/date/([0-9]+)/?([0-9]+)/?$" => "/index.php?m=$1$2",
"^/date/([0-9]+)/?([0-9]+)/?([0-9]+)?$" => "/index.php?m=$1$2$3",
"^/feed/(feed|rdf|rss|rss2|atom)/?$" => "/index.php?feed=$2",
"^/(.+)/feed/(feed|rdf|rss|rss2|atom)/?$" => "/index.php?category_name=$1&feed=$2",
"^/(.+)/(feed|rdf|rss|rss2|atom)/?$" => "/index.php?category_name=$1&feed=$2",
"^/(.+)/([0-9]+)/[^/]+/?/feed/(feed|rdf|rss|rss2|atom)/?$" => "/index.php?category_name=$1&p=$2&feed=$3",
"^/(.+)/([0-9]+)/[^/]+/?/(feed|rdf|rss|rss2|atom)/?$" => "/index.php?category_name=$1&p=$2&feed=$3",
"^/(.+)/([0-9]+)/[^/]+/?/page/?([0-9]{1,})/?$" => "/index.php?category_name=$1&p=$2&paged=$3",
"^/(.+)/([0-9]+)/[^/]+/?([0-9]+)?/?$" => "/index.php?category_name=$1&p=$2&page=$3",
"^/(.+)/([0-9]+)/[^/]+/?/trackback/?$" => "/index.php?category_name=$1&p=$2&tb=1",
"^/category/(.+)/?$" => "/index.php?category_name=$1",
"^/?$" => "/index.php",
"^/([_0-9a-zA-Z-]+)/?$" => "/index.php?page_id=$1"
)
```

The blog is off the root of the site so unlike the first post everything starts with just ^/ and nothing else. I am still not completely happy with the feed structure but what I have works for rss2 and that seems good enough to me. I used a custom permalink structure of: /%category%/%post_id%/%postname%/



