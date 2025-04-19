---
layout: archive
status: publish
published: true
title: GIS Geocoding experiments
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 43
wordpress_url: http://www.ioncannon.net/uncategorized/43/gis-geocoding-experiments/
date: '2006-03-09 03:39:31 -0500'
date_gmt: '2006-03-09 07:39:31 -0500'
categories:
- gis
tags: []
comments:
- id: 5
  author: IONCANNON &raquo; Free geocoding
  author_email: ''
  author_url: http://www.ioncannon.net/gis/66/free-geocoding/
  date: '2006-07-05 19:38:04 -0400'
  date_gmt: '2006-07-05 23:38:04 -0400'
  content: "[...] I've had opertunities to work with a number of different GIS
    packages in the past (see my post comparing a few). Most of them are great but
    they all cost a lot of money to use. If you trying to get your feet wet and don't
    want to spend money on one of the real services there are a number of places where
    you can start like yahoo or ESRI. These free services however have strict rules
    about using them for any commercial venture. So if you wanted to do geocoding
    for something that you charge for you need something else. [...]"
- id: 7
  author: IONCANNON &raquo; Good Techcrunch review of mapping apis
  author_email: ''
  author_url: http://www.ioncannon.net/gis/31/good-techcrunch-review-of-mapping-apis/
  date: '2006-07-08 06:53:18 -0400'
  date_gmt: '2006-07-08 10:53:18 -0400'
  content: "[...] Techcrunch has a good review by Frank Gruber of the look and feel
    of mapping services. I think it is notable that ESRI's service is not included
    in the review. I think it is at least as good as the mapquest service. I may have
    to find time to redo my review of the acuracy of each again and a more technical
    evaluation of each. [...]"
---
I've been evaluating a couple different mapping software packages recently and the other day I noticed that the same addresses geocoded (for those who don't know what geocoding is you can find out more about it <a title="here" href="http://en.wikipedia.org/wiki/Geocoding">here</a>) to different locations. They are mostly the same but I figured it was interesting enough to do some more digging and see how different mapping services compared.I looked at the following services. Some of them are commercial services with open apis (ESRI and mapquest) and some of them are non-commercial services with open apis (yahoo and google although google does not have a geocoding api).


<ul>
<li><a title="http://www.esri.com/software/awspublicservices/index.html" href="http://www.esri.com/software/awspublicservices/index.html">http://www.esri.com/software/awspublicservices/index.html</a></li>
<li><a title="http://developer.yahoo.com/maps/index.html" href="http://developer.yahoo.com/maps/index.html"> http://developer.yahoo.com/maps/index.html</a></li>
<li><a title="http://www.mapquest.com/openapi" href="http://www.mapquest.com/openapi"> http://www.mapquest.com/openapi</a></li>
<li><a title="http://maps.google.com" href="http://maps.google.com"> http://maps.google.com</a></li>
</ul>
For google I viewed the resulting values for latitude and longitude that were generated from a search for the address. For yahoo and ESRI I used their REST geocoding apis and for mapquest I used their java api to their commercial service since their openapi service is only in beta currently.I took 5 addresses located at different points in the US and one in Canada and mapped the returned latitude and longitude from each service. Here are the results:
<a></a>

Missiondata, 2300 Hurstbourne Village Drive, Suite 1100, Louisville, KY, 40299
mapquest: 38.215303, -85.578698
google: 38.215601, -85.578852
yahoo: 38.215496, -85.578669
esri: 38.216273, -85.579028

<img alt="Missiondata Results" src="/examples/gis-01/md.gis.jpg" />

Googleplex, 1600 Amphitheatre Parkway, Mountain View, CA, 94043
mapquest: 37.4238,   -122.0901
google: 37.422845, -122.085035
yahoo: 37.42386,  -122.090332
esri: 37.42386,  -122.090332

<img alt="Googleplex Results" src="/examples/gis-01/google.gis.jpg" />

IBM New York, 590 Madison Ave, New York, NY, 10022
mapquest: 40.7623,   -73.972399
google: 40.762267, -73.972535
yahoo: 40.762245, -73.972644
esri: 40.762245, -73.972644

<img alt="IBM NY Results" src="/examples/gis-01/ibm.gis.jpg" />

Lockheed Martin, 6304 Spine Rd, Boulder, CO, 80301
mapquest: 40.0672,   -105.206711
google: 40.067084, -105.206555
yahoo: 40.067063, -105.20654
esri: 40.067063, -105.20654

<img alt="Lockheed Martin Results" src="/examples/gis-01/lm.gis.jpg" />

Red Hat Canada, 2323 Yonge Street, Suite #300, Toronto, Ontario M4P 2C9, Canada
yahoo: none
mapquest: 43.708137, -79.3985
google: 37.062500, -95.677068
esri: 79.398592, -43.7081

<img alt="Redhat Canada Mapquest Results" src="/examples/gis-01/canada.mapquest.jpg" />
<img alt="Redhat Canada Google Results" src="/examples/gis-01/canada.google.jpg" />

For the most part all of the services provide very similar results for geocoding in the US. From the limited number of locations I tested it seems that the larger cities have a more reliable set of outputs. In NY for example they almost completely stack on top of each other. I find it interesting too that in 4 out of 6 cases yahoo came back with the exact same results as ESRI provided.

The last thing to notice of course is that the results for Canada are not as good. First off I couldn't get yahoo's service to work with a Canadian address for some reason. Also notice that the ESRI latitude and longitude results are swapped. And viewing the results from google for latitude and longitude gave me some wildly incorrect values but the map was actually correct (thus the two maps). The only completely reliable service for Canada was mapquest and google (although google doesn't do geocoding) with ESRI coming in next just because the results were swapped. All in all I think all 3 did a good job.

I'm not sure why google hasn't produced something in the way of geocoding yet. I think they have the mapping nailed down but their lack of geocoding will put them at somewhat of a disadvantage at some point since the other 3 services are in the open now and both ESRI and mapquest already have commercial versions of their services that people use widely.



