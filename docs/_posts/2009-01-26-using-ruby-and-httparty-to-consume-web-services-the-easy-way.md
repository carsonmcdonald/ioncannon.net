---
layout: archive
status: publish
published: true
title: Using Ruby and HTTParty to consume web services the easy way
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 91
wordpress_url: http://www.ioncannon.net/?p=91
date: '2009-01-26 07:54:17 -0500'
date_gmt: '2009-01-26 12:54:17 -0500'
categories:
- programming
tags:
- web services
- HTTParty
- ruby
comments:
- id: 159034
  author: Jamison Dance
  author_email: jergason@gmail.com
  author_url: ''
  date: '2009-12-14 23:56:47 -0500'
  date_gmt: '2009-12-15 04:56:47 -0500'
  content: Thanks for this. I am starting out with Ruby and using web services is
    an interesting way to get to know the language better. I had some trouble with
    the HTTParty docs, but this is a great tutorial.
---
Web services seem to be multiplying like rabbits these days. For a good sampling of just how many there are check out the <a href="http://www.programmableweb.com/apis">Programmable Web API list</a>. In general it is pretty easy to consume basic REST web services but after you have done it enough it starts getting old. Thankfully for those of us who like to tinker with a lot of the new APIs there is <a href="http://httparty.rubyforge.org/">HTTParty</a> to make it quick and easy.


The author of HTTParty has a few <a href="http://railstips.org/2008/7/29/it-s-an-httparty-and-everyone-is-invited">examples</a> that show all the features but I figured I would toss a couple more out there for good measure. To get started you will need to install HTTParty with gem:

```
gem install httparty
```
The first example uses the new <a href="http://remix.bestbuy.com/">BestBuy Remix API</a>. The site has all the information on the web service they offer. You can search stores, products and determine if a product is available in a given area/store. In the following example I have implemented store search and a couple different ways of doing product search just to show how easy it is. I even tossed in a very hacked up <a href="http://weblog.jamisbuck.org/2006/1/1/under-the-hood-activerecord-base-find-part-3">method missing example</a>. One thing to note in the following code is the URI escaping that goes on for some of the searches that allow free form input.

```
require 'rubygems'
require 'httparty'

class BestBuy
  include HTTParty
  base_uri 'api.remix.bestbuy.com'
  default_params :apiKey => 'put your key here'

  def self.get_all_stores
    get("/v1/stores")
  end

  def self.get_stores_by_zip(zip)
    get("/v1/stores(postalCode=#{zip})")
  end

  def self.get_stores_by_zip_and_distance(zip, distance)
    get("/v1/stores(area(#{zip},#{distance}))")
  end

  def self.get_product_by_sku(sku)
    get("/v1/products/#{sku}.xml")
  end

  def self.get_products(filter)
    response = get(URI.escape("/v1/products(#{filter})"))
    response["products"]["product"]
  end

  def self.method_missing(method_id, *args)
    if match = /get_products_by_([_a-zA-Z]\w*)/.match(method_id.to_s)
      attribute_names = match.captures.last.split('_and_')

      request = ""
      attribute_names.each_with_index { |name, idx| request = request + name + "=" + args[idx] + (attribute_names.length-1 == idx ? "" : "") }

      get_products(request)
    else
      super
    end
  end
end
```
Here is the above in action:

```
pp BestBuy.get_stores_by_zip_and_distance(40299, 10)
pp BestBuy.get_product_by_sku(8880044)
pp BestBuy.get_products_by_manufacturer('canon')
pp BestBuy.get_products("manufacturer='canon'&salePrice<33")
pp BestBuy.get_products_by_manufacturer_and_department('canon','video')
pp BestBuy.get_products_by_manufacturer_and_department('canon','accessories')

products = BestBuy.get_products_by_manufacturer_and_department('canon','accessories')
products.each do |product|
  print "------------------------------------------------\n"
  print product["name"] + "\n"
  print product["longDescription"] + "\n"
end
```
The second example I have uses the <a href="http://developer.nytimes.com/docs/congress_api/">Congressional API</a> that was just put out by the <a href="http://developer.nytimes.com/">NY Times developer</a> program. To get started it may help to look at the blog post <a href="http://open.blogs.nytimes.com/2009/01/08/introducing-the-congress-api/">introducing the congressional API</a>. I've created this class in a different way than the above BestBuy just for diversity's sake. You may notice that I had to define the format specifically here otherwise HTTParty can not figure out how to parse the return.

```
require 'rubygems'
require 'httparty'

class NYTimesCongress
  include HTTParty
  base_uri 'http://api.nytimes.com/svc/politics/v2/us/legislative/congress'
  format :xml

  def initialize(apikey)
    @apikey = apikey
  end

  # Roll-Call Votes
  def rollCallVotes(congressNumber, sessionNumber, rollCallNumber)
    NYTimesCongress.get("/#{congressNumber}/house/sessions/#{sessionNumber}/votes/#{rollCallNumber}", :query => {"api-key" => @apikey})
  end

  # Member Positions
  def memberPositions(memberId)
    NYTimesCongress.get("/members/#{memberId}/votes", :query => {"api-key" => @apikey})
  end

  # Members of Congress
  def membersOfCongress(congressNumber)
    NYTimesCongress.get("/#{congressNumber}/house/members", :query => {"api-key" => @apikey})
  end

  # Member Bio and Role
  def memberBioAndRoles(memberId)
    NYTimesCongress.get("/members/#{memberId}", :query => {"api-key" => @apikey})
  end
end
```
Here it is in action:

```
nyTimesCongress = NYTimesCongress.new("your api key")
pp nyTimesCongress.rollCallVotes(111, 1, 9)
pp nyTimesCongress.membersOfCongress(111)
pp nyTimesCongress.memberBioAndRoles("Y000062")
pp nyTimesCongress.memberPositions("Y000062")
```
Just recently HTTParty got a <a href="http://railstips.org/2009/1/5/httparty-goes-commando">command line interface</a> that makes it even easier to fiddle with a new service. Here is an example of how easy it is to use the command line version with the Congressional API:

```
httparty -f xml -a get "http://api.nytimes.com/svc/politics/v2/us/legislative/congress/members/Y000062?api-key=your api key"
<?xml version='1.0'?>
<result_set>
  <status>
    OK
  </status>
  <copyright>
    Copyright (c) 2009 The New York Times Company. All Rights Reserved.
  </copyright>
  <results>
    <member>
      <id>
        Y000062
      </id>
      <name>
        John Yarmuth
      </name>
      <date_of_birth>
        1947-11-04
      </date_of_birth>
      <gender>
        M
      </gender>
      <url>
        http://yarmuth.house.gov
      </url>
      <govtrack_id>
        412211
      </govtrack_id>
      <roles>
        <role>
          <congress>
            111
          </congress>
          <chamber>
            House
          </chamber>
          <title>
            Representative
          </title>
          <state>
            KY
          </state>

<party>
            D
          </party>
          <start_date>
            2009-01-06
          </start_date>
          <end_date>
            2011-01-04
          </end_date>
        </role>
        <role>
          <congress>
            110
          </congress>
          <chamber>
            House
          </chamber>
          <title>
            Representative
          </title>
          <state>
            KY
          </state>

<party>
            D
          </party>
          <start_date>
            2007-01-04
          </start_date>
          <end_date>
            2009-01-03
          </end_date>
        </role>
      </roles>
    </member>
  </results>
</result_set>
```
