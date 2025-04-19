---
layout: archive
status: publish
published: true
title: Approximating a circle with a polygon
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 32
wordpress_url: http://www.ioncannon.net/uncategorized/32/approximating-a-circle-with-a-polygon/
date: '2006-04-18 02:36:18 -0400'
date_gmt: '2006-04-18 06:36:18 -0400'
categories:
- gis
tags: []
comments: []
---
I recently had an opportunity to use ESRI's <a href="http://www.esri.com/software/arcgis/arcsde/index.html">ArcSDE</a> again. It is a spatial database interface and in this instance I was using the java api. I wanted to change what used to be a query using a rectangle into a query using a circle. For some reason parts of the java api for ArcSDE require a C library or something. I gave up pretty quickly on trying to make their arc function work since the documentation wasn't very clear on how it worked. Instead I decided to figure out how to approximate a circle with a polygon and use that instead. Here is the result of that research.


First it helps to have a little background. Most people are familiar with <a href="http://en.wikipedia.org/wiki/Latitude">latitude</a> and <a href="http://en.wikipedia.org/wiki/Longitude">longitude</a> but you may not be familiar with their exact definitions. I have included the links to the wikipedia pages for both so you can research them more if you want. The main things to know are: latitude runs north/south and each degree of latitude is about 111 km; longitude runs east/west and is 111 km times the cosine of the latitude. The next thing that is helpful to know is the <a href="http://en.wikipedia.org/wiki/Earth_radius">radius of the earth</a>: 6,378.135 km in this case I'll just use the equatorial radius.

Now that we have the earth taken care of we need to go back to basics. We start by looking at the definition of a <a href="http://en.wikipedia.org/wiki/Circle">circle</a> and <a href="http://en.wikipedia.org/wiki/Unit_circle">the unit circle</a>. The mathematical definition of a circle is the important part here. The following equations will play an important part: x = a + r cos(t) and y = b + r sin(t) where a,b are the center of the circle, x,y are points of the unit circle, r is the radius of the circle, and t is the angle of a line from the origin to x,y in radians. It helps to think of the circle as broken up into triangles.

The last thing to keep in mind is that latitude and longitude are in degrees but when working with cos and sin you need to use radians and not degrees. The conversion between radians and degrees is easy: radians = degrees * (PI / 180) and degrees = radians * (180 / PI).

So now for the main formula in pseudocode:


```
 earths_radius = 3963 // number of miles in the radius of the earth
 longitude = 80          // longitude of the center of the circle
 latitude = 90            // latitude of the center of the circle
 points = 32              // number of points in the polygon
 circle_radius = 1       // miles of radius
 // find the raidus in lat/lon, units per latitude, units per longitude
 r_latitude = radius_to_degrees(circle_radius / earths_radius)
 r_longitude = r_latitude / cos(degrees_to_radius(latitude))
 // create a point for each edge, we need one extra point to connect the
 // end to the begining
 for point_count = 0 to points + 1
 {
    theta = PI * (point_count / (points / 2))    // find the angle for the current triangle
    circle_x = lng + (r_longitude * cos(theta))  // center a + radius x * cos(theta)
    circle_y = lat + (r_latitude * sin(theta))     // center b + radius y * sin(theta)
    // circle_x, circle_y represents a point on the circle
 }
```

That is all there is to it. In this example I just picked 32 points for the circle but you may want more or less depending on how large your radius is and how closely you want to approximate the circle. One thing to note about this function is that it produces the points in a counter-clockwise direction.

Now for an example using google maps to display a circle around a point with a radius of one mile:

<h3>Missiondata World HQ, Louisville, Ky</h3>

And here is the javascript source you need to do it:


```
var d2r = Math.PI / 180;   // degrees to radians
var r2d = 180 / Math.PI;   // radians to degrees
var earthsradius = 3963; // 3963 is the radius of the earth in miles
var hqpoint = new GPoint(-85.578852, 38.215601);
var map = new GMap(document.getElementById("map"));
map.addControl(new GSmallMapControl());
map.addControl(new GMapTypeControl());
map.centerAndZoom(hqpoint, 4);
map.addOverlay(new GMarker(hqpoint));
drawCircle(-85.578852, 38.215601, map);
function drawCircle(lng, lat, map)
{
   var points = 32;
   var radius = 1;             // radius in miles
   // find the raidus in lat/lon
   var rlat = (radius / earthsradius) * r2d;
   var rlng = rlat / Math.cos(lat * d2r);
   var extp = new Array();
   for (var i=0; i < points+1; i++) // one extra here makes sure we connect the
   {
      var theta = Math.PI * (i / (points/2));
      ex = lng + (rlng * Math.cos(theta)); // center a + radius x * cos(theta)
      ey = lat + (rlat * Math.sin(theta)); // center b + radius y * sin(theta)
      extp.push(new GPoint(ex, ey));
   }
   map.addOverlay(new GPolyline(extp, "#000000", 2));
}
```


