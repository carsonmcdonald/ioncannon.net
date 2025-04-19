---
layout: archive
status: publish
published: true
title: Fast XML parsing with Ruby
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 643
wordpress_url: http://www.ioncannon.net/?p=643
date: '2009-09-09 08:54:47 -0400'
date_gmt: '2009-09-09 13:54:47 -0400'
categories:
- programming
tags:
- ruby
- xml
- parse
comments:
- id: 150249
  author: Chuck Fouts
  author_email: ion@nugnug.net
  author_url: ''
  date: '2009-09-09 10:53:17 -0400'
  date_gmt: '2009-09-09 15:53:17 -0400'
  content: I recently needed to parse some crazy nested XML from multiple files into
    one merged file.  I decided that loading the DOM was the only way to accomplish
    this.  I'd read that Nokogiri was faster but didn't think it would be that much
    faster.  I was already familar with REXML so I went with that library.  I used
    TDD while creating the parser and was confident in the code by the time I finished.  I
    started the run to parse the multiple XML files and it was going to take almost
    40 minutes.  Kept finding corner cases to fix and soon I decided it was taking
    way too long to get going.  Installed Nokogiri and ported the code to use Nokogiri
    in a couple of hours.  Having the unit tests really saved me here.  Started the
    run again and it was amazingly faster.  In the end, the entire run with Nokogiri
    only took around 3 minutes instead of the 40 minutes with REXML.
- id: 152978
  author: How I Used Hpricot and Mechanize in GeeQE | IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/programming/675/using-hpricot-and-mechanize/
  date: '2009-09-28 05:40:54 -0400'
  date_gmt: '2009-09-28 10:40:54 -0400'
  content: "[...] IONCANNON What are you building?   Skip to content AboutProjectsGoogle
    Analytics Dashboard Wordpress WidgetHTTP Live Video Stream Segmenter and DistributorGeeQE
    &#8211; Native Stack Overflow iPhone ApplicationBuilding GeeQEContactSitemap       &laquo;
    Fast XML parsing with Ruby [...]"
- id: 156449
  author: Denis Ivanov
  author_email: visible.h4x@gmail.com
  author_url: ''
  date: '2009-11-05 11:04:10 -0500'
  date_gmt: '2009-11-05 16:04:10 -0500'
  content: "Useful article!\r\n\r\nGot my stuff working just fine, except that libxml-ruby
    still seems dismally slow. My XML structure is dropdead simple and my file is
    200MBs... All nodes are super short with no more than one integer attribute and
    half a dozen children or so. \r\n\r\nYet IM clocking in barely over one node a
    second on a dualcore 3.0Ghz latest Core 2 Duo with 4GBs of quite speedy DDR2 ram...\r\n\r\nHow
    can I gain more insight into where the time is being spent... any ideas, guys?"
- id: 156462
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-11-05 14:18:05 -0500'
  date_gmt: '2009-11-05 19:18:05 -0500'
  content: I would try pulling out any processing you are doing for each node, make
    sure you aren't printing anything to the console and time that. If you aren't
    even doing anything that would be a mystery.
---
One of the first things I needed to do while building the <a href="http://www.ioncannon.net/projects/geeqe/">GeeQE iPhone application</a> was process the <a href="http://blog.stackoverflow.com/2009/06/stack-overflow-creative-commons-data-dump/">CC data dump from Stack Overflow</a>. The dump contains XML files representing tables from Stack Overflow with the largest file being posts.xml weighing in at 1.2G as of September. I decided it would be pretty easy to use Ruby to parse the XML and load the data into MySQL so I went about finding the right parser for the job. 

If you haven't processed large amounts of XML before one thing to realize is that you don't want to use a DOM parser because it is going to load the entire XML structure into memory. What you want is a SAX parser that can work on the XML stream as it comes in. With this in mind I started looking around and quickly found an <a href="http://depixelate.com/2008/4/23/ruby-xml-parsing-benchmarks">older benchmark</a> post that gave me an educated guess that the <a href="http://libxml.rubyforge.org/">LibXML</a> library was going to be the fastest parser for Ruby. After figuring out how to use it I decided to also give a couple other libraries a shot to see how they stacked up, the other two I looked at were <a href="http://www.germane-software.com/software/rexml/">REXML</a> and <a href="http://nokogiri.rubyforge.org/nokogiri/">Nokogiri</a>.


The following is a set of example using each library in streaming SAX mode. Each processes the 1.2G posts.xml file from the dump and does nothing more than check that the element represents a "row". I have also included a sample runtime for each:

<h2>REXML SAX example</h2>
```
require 'rubygems'
require 'rexml/document'
require "rexml/streamlistener"

include REXML

class PostCallbacks
  include StreamListener

  def tag_start(element, attributes)
    if element == 'row'
      # Process row of data here
    end
  end
end

source = File.new "posts.xml"
Document.parse_stream(source, PostCallbacks.new)
```
<b>REXML runtime</b>

```
time ruby rexmltest.rb
real    47m22.871s
user    42m0.711s
sys     3m31.943s
```
<h2>Nokogiri SAX example</h2>
```
require 'rubygems'
require 'nokogiri'

include Nokogiri

class PostCallbacks < XML::SAX::Document
  def start_element(element, attributes)
    if element == 'row'
      # Process row of data here
    end
  end
end

parser = XML::SAX::Parser.new(PostCallbacks.new)
parser.parse_file("posts.xml")
```
<b>Nokogiri runtime</b>

```
time ruby nokogiri.rb
real    4m45.347s
user    4m7.504s
sys     0m19.332s
```
<h2>LibXML SAX example</h2>
```
require 'rubygems'
require 'libxml'

include LibXML

class PostCallbacks
  include XML::SaxParser::Callbacks

  def on_start_element(element, attributes)
    if element == 'row'
      # Process row of data here
    end
  end
end

parser = XML::SaxParser.file("posts.xml")
parser.callbacks = PostCallbacks.new
parser.parse
```
<b>LibXML runtime</b>

```
time ruby libxmltest.rb
real    1m55.657s
user    1m41.938s
sys     0m5.718s
```
<br/>
From the above you can see that LibXML is the fastest. I thought that Nokogiri would be a lot closer in execution time given that it uses libxml2 but it is still 2 times slower. The slowest by far was REXML clocking in more than 20 times slower than LibXML. Nokogiri seemed easier to debug when things went wrong than LibXML so had I needed to construct a more complex application to load the data I would have probably used it instead.

