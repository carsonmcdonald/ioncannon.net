---
layout: archive
status: publish
published: true
title: The Search for Timezone Maps
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 137
wordpress_url: http://www.ioncannon.net/?p=137
date: '2008-10-16 22:25:46 -0400'
date_gmt: '2008-10-17 03:25:46 -0400'
categories:
- utilities
- gis
- meta
tags: []
comments:
- id: 228569
  author: Jens
  author_email: jramrath@agi.com
  author_url: ''
  date: '2012-01-05 11:35:51 -0500'
  date_gmt: '2012-01-05 16:35:51 -0500'
  content: "Carson,\r\n\r\nI am in the same boat as you are. Unfortunately the link
    to the USGS site is no longer any good. Do you have any idea where I can find
    the latest version of the data the you were able to track down?\r\n\r\nJens"
---
For a while I had been casually searching for a way to overlay US time zones over a map for a project I was working on. It was never important enough to have a solution that required paying for something so I was searching for some type of government data source. 


My first attempt was to use <a href="http://aa.usno.navy.mil/graphics/TimeZoneMap0802.jpg">this large international timezone map</a>, <a href="http://en.wikipedia.org/wiki/Image:National-atlas-timezones-2006.gif">this wikipedia map</a> or <a href="http://en.wikipedia.org/wiki/List_of_U.S._states_by_time_zone">the list of US states by time zone</a> and then trace and outline over the states. This turned out to be a non-starter because the maps aren't detailed enough and the list of states doesn't give you enough information.

I figured I would end up looking for <a href="http://www.esri.com/news/arcuser/0401/topo.html">ESRI shape files</a> at some point and that is where I turned next. An initial google search got me to <a href="http://laughingmeme.org/2004/04/09/timezone-shape-files/">a post</a> that led to a <a href="http://fri.sfasu.edu/data/geographic/world/shape/">link to what should have been a set of shape files</a>. Of course the link was dead so I turned to archive.org and <a href="http://web.archive.org/web/20030705005855/http://fri.sfasu.edu/data/geographic/world/shape/">found that the archive was incomplete</a>.

I reverted back to looking for another source and found <a href="http://data.crgsc.org/geographic/world/shape/">a set of shapes that ended up being just a bunch of squares</a>. At this point I had gone over a lot of random links that didn't get me anything and I was about to give up for good when I finally found <a href="http://www-atlas.usgs.gov/atlasftp.html?openChapters=chpbound#chpref">the USGS atlas site's time zone data</a>. This was the jackpot, not only do they have time zone shapefiles but they have a large number of other shapefiles that could come in handy some day. This quest has made it apparent to me that the government doesn't do a great job of getting their data found.

One helpful tool in my shapefile search was <a href="http://www.esri.com/software/arcexplorer/index1.html">ESRI's free Arc Explorer</a>. It was a quick way to validate the shapefiles where or where not what I was looking for before landing on a set of files that would work.

Now that I had a valid set of time zone shapes I created a simple java application using <a href="http://www.osgeo.org/geotools">geotools</a> to read the files in and generate a resulting map graphic that I could overlay in the project. The shapefiles are easily converted to lat/lon polygons so using this data to overlay on something like a google map would be even easier.

