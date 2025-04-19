---
layout: archive
status: publish
published: true
title: Using Ruby to Send Targeted Email to an Apple Watch
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1661
wordpress_url: http://www.ioncannon.net/?p=1661
date: '2015-05-26 10:03:45 -0400'
date_gmt: '2015-05-26 15:03:45 -0400'
categories:
- ruby
- programming
tags:
- ruby
- apple watch
- email
comments: []
---
The other day I ran into a post about sending emails that could fall back to support the limited HTML that the Apple watch can display called <a href="https://litmus.com/blog/how-to-send-hidden-version-email-apple-watch">hidden Apple Watch email</a>. After reading the post I wondered if I could write a quick example to do what they demonstrated. I turned to Ruby + <a href="https://github.com/mikel/mail">Ruby mail gem</a> to give this a try and found that there are a few things to know but generally it works well.

To get started make sure you have the mail gem installed:


```
gem install mail
```

Next there are two main points to remember before diving into the examples:

<ul>
<li>The sort order of the mime types is important, they need to come in the order listed in the examples or you will end up with the plain text version of the email on the watch</li>
<li>You need to include something in the full featured HTML section that can't render on the watch or you will see the full featured HTML on the watch. See the article above for some pointers but generally the watch isn't going to fetch an image from the web so that should do it and is what I have in the following images.</li>
</ul>
First a simple example that will show plain text for mail clients that don't support HTML at all, normal HTML for full featured clients and a subset of HTML for the Apple watch. 


```
require 'mail'
mail = Mail.new do
  to      'user@something.com'
  from    'person@company.com'
  subject 'Watch mail example'
end
#
# The order supplied here matters
#
mail.body.set_sort_order [ "text/plain", "text/watch-html", "text/html" ]
#
# The order here doesn't matter
#
text_part = Mail::Part.new do
  body 'This is plain text'
end
mail.text_part = text_part
watch_part = Mail::Part.new do
  content_type 'text/watch-html; charset=UTF-8'
  body '<b>This is HTML for the Apple watch</b>'
end
mail.add_part watch_part
#
# If this part has something in it that can't display on the watch then
# the watch part will display. Keep that in mind if you want to force the
# watch part to display. Here the link out to an image will force the
# fallback to happen.
#
html_part = Mail::Part.new do
  content_type 'text/html; charset=UTF-8'
  body '<h1>This is HTML</h1><img src="http://images.company.com/someimage.jpg"/>'
end
mail.html_part = html_part
mail.deliver
```

Here is an example that includes an image that will display on the watch. It is important that in this case the image comes first in the sort order.


```
require 'mail'
mail = Mail.new do
  to      'user@something.com'
  from    'person@company.com'
  subject 'Watch mail example with image'
end
#
# The order supplied here matters
#
mail.body.set_sort_order [ "image/png", "text/plain", "text/watch-html", "text/html" ]
#
# The order here doesn't matter but you will need to
# reference the image later.
#
mail.attachments['test.png'] = File.read('/tmp/test.png')
image_cid = mail.parts.first.url
  text_part = Mail::Part.new do
  body 'This is plain text'
end
mail.text_part = text_part
  watch_part = Mail::Part.new do
  content_type 'text/watch-html; charset=UTF-8'
  body '<b>This is HTML for the watch</b> <br/> <img src="' + image_cid + '"/>'
end
mail.add_part watch_part
  html_part = Mail::Part.new do
  content_type 'text/html; charset=UTF-8'
  body '<h1>This is HTML</h1><img src="http://images.company.com/someimage.jpg"/>'
end
mail.html_part = html_part
mail.deliver
```
