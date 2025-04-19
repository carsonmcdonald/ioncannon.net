---
layout: archive
status: publish
published: true
title: PHP RRDTool tutorial
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 59
wordpress_url: http://www.ioncannon.net/system-administration/59/php-rrdtool-tutorial/
date: '2006-07-18 18:03:47 -0400'
date_gmt: '2006-07-18 22:03:47 -0400'
categories:
- system administration
- php
tags: []
comments:
- id: 822
  author: passerby
  author_email: nospam@please.com
  author_url: ''
  date: '2006-12-09 16:50:02 -0500'
  date_gmt: '2006-12-09 20:50:02 -0500'
  content: "Seems nice, makes the graph and all but doesnt update any info? Graph
    available for download also didnt not show any info, with script to check provided.\r\n\r\n--
    copy as . due to some funky stuff on this site."
- id: 823
  author: passerby
  author_email: nospam@please.com
  author_url: ''
  date: '2006-12-09 17:06:38 -0500'
  date_gmt: '2006-12-09 21:06:38 -0500'
  content: "Just to update before the prev post gets approved it seems to work, it
    was just reading a weird cache copy, changed a few names and all is good.\r\n\r\nPlease
    make a note on the -- (double dashes) copying over as . (periods), was a little
    weird."
- id: 1463
  author: Akismet spam graphs with PHP RRD @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/php/113/akismet-spam-graphs-with-php-rrd/
  date: '2007-01-01 12:37:42 -0500'
  date_gmt: '2007-01-01 17:37:42 -0500'
  content: "[...] A good place to start is the PHP RRDTool tutorial. It will make
    it easier to read the following code if you have an idea of how to use the RRDTool
    extension. [...]"
- id: 2407
  author: Mathews
  author_email: mathews@vtrio.com
  author_url: ''
  date: '2007-01-30 01:02:52 -0500'
  date_gmt: '2007-01-30 06:02:52 -0500'
  content: "I did every configuration as mensioned in http://www.ioncannon.net/system-administration/25/how-to-build-the-php-rrdtool-extension-by-hand/.\r\n\r\nBut
    I dont get 'rrdtool' in\r\nphpinfo(INFO_MODULES);\r\n\r\nI get the Configure Command
    as  './configure' '--with-apxs2=/usr/local/apache/apache2/bin/apxs' '--with-mysql'
    '--with-rrdtool' when try\r\nphpinfo() alone.\r\n\r\nCould you help me?"
- id: 5257
  author: S&Atilde;&copy;bastien Cramatte
  author_email: s.cramatte@wanadoo.fr
  author_url: ''
  date: '2007-03-14 11:50:58 -0400'
  date_gmt: '2007-03-14 16:50:58 -0400'
  content: "Does anyone know how can I made a raw output directly in PHP without generate
    the image file on the disk ? \r\n\r\nI've tried to put '-' as filename and effectively
    no file is generated ... but  I don't know how can I get the output ...\r\n\r\n\r\n#
    this code doesn't work because rrd_graph return an array but no raw datas ...\r\n\r\n\r\nheader('Content-type:
    image/png');\r\n...\r\necho rrd_graph(\"-\", $opts, count($opts);"
- id: 20191
  author: Sam
  author_email: sam@samknows.com
  author_url: ''
  date: '2007-06-08 12:12:13 -0400'
  date_gmt: '2007-06-08 17:12:13 -0400'
  content: "There's an rrd_fetch function included with the library as well, but I
    cannot for the life of me get it to work. This should work:\r\n\r\nrrd_fetch(\"basic.rrd\",array(\"MAX\"),1);\r\n\r\nBut
    it just spits back null. If I add any arguments (like a start time), I get a seg
    fault. e.g.\r\n\r\nrrd_fetch(\"basic.rrd\",array(\"MAX\",\"-s\",\"now-1hr\"),3);\r\n\r\nAnyone
    got any insights in to this?"
- id: 23176
  author: kulaba james
  author_email: kujmes@yahoo.com
  author_url: ''
  date: '2007-07-03 03:07:09 -0400'
  date_gmt: '2007-07-03 08:07:09 -0400'
  content: "thanks for that work. but how do I use RRDtool to monitor the hard disk
    usage.\\\r\n\r\nthanks"
- id: 65778
  author: Fritz
  author_email: fritz@cyberverse.com
  author_url: http://www.cyberverse.com
  date: '2008-04-30 17:23:42 -0400'
  date_gmt: '2008-04-30 22:23:42 -0400'
  content: "The rrdtool extension works great with the apache php module through a
    web browser.  But if I try to use any of the rrd functions from the php-cli command
    line php, I get a segmentation fault.\r\n\r\nAny ideas/advice?"
- id: 72005
  author: Novae
  author_email: dylan.genius@lightray.org
  author_url: http://kingfisher.lightblast.ath.cx
  date: '2008-06-01 07:34:01 -0400'
  date_gmt: '2008-06-01 12:34:01 -0400'
  content: "Is there any way to force it to make png's instead of gifs. I'd like to
    use some custom fonts but ttf support is only available in png's.\r\n\r\ncheers,
    Novae."
- id: 110607
  author: Fritz
  author_email: fritz@cyberverse.com
  author_url: http://www.cyberverse.com
  date: '2008-12-10 18:48:38 -0500'
  date_gmt: '2008-12-10 23:48:38 -0500'
  content: "I have noticed another problem with rrd_graph.  When operating on the
    same datafile, with the same exact parameters, I refresh the page 4 times and
    get 4 slightly different graphs.\r\n\r\nIf I refresh 12 times, I get the same
    4 graphs in the same sequence over and over 3 times.\r\n\r\nIf I keep refreshing
    the browser, It continues to cycle through the same 4 graphs... same parameters...
    same rrd file.\r\n\r\nAny idea what's going on?  I've been trying to figure it
    out all day."
- id: 125463
  author: Florian
  author_email: florian@alphacore.org
  author_url: http://alphacore.org
  date: '2009-03-04 12:29:03 -0500'
  date_gmt: '2009-03-04 17:29:03 -0500'
  content: Excellent tutorial ! If you are providing random values to your rrd database
    using scripts or whatever, also make sure that when you call rrd_graph you pass
    the --start and --end arguments correctly. I spent some hours understanding why
    nothing was graphed while the RRD was correct. Hope that helps.
- id: 141952
  author: Marcin
  author_email: marts@o2.pl
  author_url: ''
  date: '2009-06-16 03:19:51 -0400'
  date_gmt: '2009-06-16 08:19:51 -0400'
  content: Well it is very good indeed but could you also add how to put on the Graph
    total sum up of incoming/outgoing traffic? It would be very helpful as many people
    ask about this. Thank you.
- id: 142332
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-06-22 09:18:34 -0400'
  date_gmt: '2009-06-22 14:18:34 -0400'
  content: "@Marcin\r\n\r\nYou would want to use the rrd_fetch call to do that. Something
    like this:\r\n\r\n  $opts = array( \"AVERAGE\", \"--start\", \"-1d\" );\r\n  $ret
    = rrd_fetch(\"net.rrd\", $opts, count($opts));\r\n\r\nThen iterate over the returned
    values and sum them up in code. After that you can just print the value along
    with all the other values in the rrd_graph call."
- id: 146482
  author: Peter
  author_email: xenware@gmail.com
  author_url: ''
  date: '2009-08-13 19:01:35 -0400'
  date_gmt: '2009-08-14 00:01:35 -0400'
  content: "Hi,\r\n\r\nthx for excellent tutorial.\r\n\r\nI have question:\r\n\r\nIs
    it possible to make network graph (based on netacct-mysql) with 5min average?\r\n\r\nThx"
- id: 156770
  author: Installing RRDTool for PHP on Ubuntu Server
  author_email: ''
  author_url: http://thirdroute.com/installing-rrdtool-for-php-on-ubuntu-server/
  date: '2009-11-11 02:34:44 -0500'
  date_gmt: '2009-11-11 07:34:44 -0500'
  content: "[...] PHP RRDTool tutorial [...]"
- id: 162799
  author: Luigi Rosa
  author_email: lrosa@venus.it
  author_url: http://www.fantascienza.com/blog/blackpig/
  date: '2010-02-07 02:07:33 -0500'
  date_gmt: '2010-02-07 07:07:33 -0500'
  content: "Under CentOS/64 the rrd_create() function returned \"can't parse argument
    '\\x96step'\" error.\r\n\r\nI solved it calling the function in this way:\r\n\r\n```$opts
    = array( chr(45).chr(45).\"step\", \"900\", chr(45).chr(45).\"start\",  0,```\r\n\r\nand
    so on."
- id: 163518
  author: Joe Linux
  author_email: joe@joe-linux.org
  author_url: http://www.joe-linux.org/
  date: '2010-02-19 03:36:09 -0500'
  date_gmt: '2010-02-19 08:36:09 -0500'
  content: "Hi,\r\n\r\nThe extension build fine, but when i tried this example i got
    the following error :\r\n\r\n```\r\n\r\nIf
    anyone has an idea... seems there's something weird in the API... Something related
    to my versions ? RRDtool 1.3.1 and PHP 5.2.5, and i'm on a 64-bits (AMD) plateform.\r\n\r\nThanks
    for any help,\r\nregards,"
- id: 165257
  author: Soule
  author_email: souleben@gmail.com
  author_url: ''
  date: '2010-03-14 16:37:05 -0400'
  date_gmt: '2010-03-14 21:37:05 -0400'
  content: "Hello,\r\n\r\nI've been following your fine tutorial from the start. I'm
    running Ubuntu server 8.04, I've installed the RRDtool extention and copied the
    first script you published - \r\nbut I get this error:  \r\n\r\nCreate error:
    can't parse argument '&acirc;&euro;&ldquo;step' \r\n\r\nCan you help me? For the
    record, i installed from ubuntu repository librrd-dev and did the rest manually,
    and on phpinfo() it says rrdtool 1.2x.\r\n\r\nCheers,\r\n\r\n-Soule"
- id: 165984
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-03-22 08:08:10 -0400'
  date_gmt: '2010-03-22 13:08:10 -0400'
  content: "@Soule You probably want to make sure that the step has two dashes in
    front of it and not one long dash. Depending on the day the double dashes get
    changed into one long dash by wordpress and make things fail."
- id: 168654
  author: tarek
  author_email: tarek@lostinmac.com
  author_url: ''
  date: '2010-04-27 10:02:09 -0400'
  date_gmt: '2010-04-27 15:02:09 -0400'
  content: "Hi and thanks for this tutorial, i had some trouble with php and rrdtool
    and i got this error : rrd_graph() ERROR: unknown option '1' when i try to run
    your exemple, do you know how to fix that?\r\n\r\nRegards."
- id: 168660
  author: tarek
  author_email: tarek@lostinmac.com
  author_url: ''
  date: '2010-04-27 11:00:25 -0400'
  date_gmt: '2010-04-27 16:00:25 -0400'
  content: "Another question: How to display the graph on the web page?\r\n\r\nThanks."
- id: 169173
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-05-03 11:47:25 -0400'
  date_gmt: '2010-05-03 16:47:25 -0400'
  content: "@tarek Make sure the options that need a double dash haven't been converted
    into the special long dash. For instance, the first value in the opts should have
    two dashes in front of it."
- id: 171194
  author: Reid Nicholson
  author_email: reid.nicholson@cox.net
  author_url: ''
  date: '2010-06-02 21:32:08 -0400'
  date_gmt: '2010-06-03 02:32:08 -0400'
  content: "Had a problem with the php-rrdtool RPM on a Centos5.x server.  The RPM
    didn't add the file \"rrdtool.ini\" to the \"/etc/php.d/\" directory.  Added the
    file with the following 2 lines:\r\n     ; Enable rrdtool extension module \r\n
    \    extension=rrdtool.so\r\n\r\nrestarted httpd and the module loaded."
---
On a number of occasions I've used RRDTool to graph network traffic and the like. A few years ago when I started using <a href="http://www.cacti.net/">cacti</a> I started wondering how to make the graphs myself. Creating the graphs on the command line isn't that hard once you know how to set things up and it turns out doing the same in PHP is just as easy.


For this tutorial I'm going to assume you understand how to get RRDTool installed and working from the command line. If not you should take a look at <a href="http://oss.oetiker.ch/rrdtool/tut/rrdtutorial.en.html">this tutorial</a> (if you are in a hurry look at the "A Real World Example" section) or any of the <a href="http://oss.oetiker.ch/rrdtool/tut/">tutorials on this page</a>. 

<b>Setup and introduction</b>

You need to have PHP compiled with RRDTool support to run the following PHP examples. If you compile PHP by hand then see: <a href="http://www.ioncannon.net/system-administration/25/how-to-build-the-php-rrdtool-extension-by-hand/">how to build the php rrdtool extension by hand</a>. If you are using a distribution's pre-compiled PHP binary you should be able to install a second package with RRDTool support. You can verify that your PHP install is ready to go by running this:

```
<?php
phpinfo(INFO_MODULES);
?>
```
Then search for "rrdtool" in the output and make sure that "rrdtool support" is enabled.

While going through each of the following steps you will notice that each call takes a couple of parameters and then one parameter that is just a string of options. The string of options is exactly how it is for generating/updating/graphing RRDs from the command line. This makes for a consistent interface for the different languages that have RRDTool support.

<b>Creating a RRD</b>

We first need to create a database for our data. For these examples I will be creating a database that could be used for generating network graphs. This database is created for updates every 5 minutes (300 seconds), has input and output counters that store data for the average and max counts and stores enough samples for hourly, daily, monthly and yearly graphs of both average and max.

```
<?php

  $fname = "net.rrd";

  $opts = array( "--step", "300", "--start", 0,
           "DS:input:COUNTER:600:U:U",
           "DS:output:COUNTER:600:U:U",
           "RRA:AVERAGE:0.5:1:600",
           "RRA:AVERAGE:0.5:6:700",
           "RRA:AVERAGE:0.5:24:775",
           "RRA:AVERAGE:0.5:288:797",
           "RRA:MAX:0.5:1:600",
           "RRA:MAX:0.5:6:700",
           "RRA:MAX:0.5:24:775",
           "RRA:MAX:0.5:288:797"
        );

  $ret = rrd_create($fname, $opts, count($opts));

  if( $ret == 0 )
  {
    $err = rrd_error();
    echo "Create error: $err\n";
  }
?>
```

After running you will have a file called net.rrd in the current directory. This is your RRD and will contain all the samples for your graphs.

For more information on the options to rrd_create see: <a href="http://oss.oetiker.ch/rrdtool/doc/rrdcreate.en.html">rrdcreate</a>

<b>Updating a RRD</b>

The next step is to update your RRD on the frequency you set when you created it. In the case above the frequency was set to 5 minutes (300 seconds). The following script generates random input and output values as input to the update function, sleeps for 300 seconds and then loops.

```
<?php

  $fname = "net.rrd";

  $total_input_traffic = 0;
  $total_output_traffic = 0;

  while(true)
  {
    $total_input_traffic += rand(10000, 15000);
    $total_output_traffic += rand(10000, 30000);

    echo time() . ": " . $total_input_traffic . " and " . $total_output_traffic . "\n";

    $ret = rrd_update($fname, "N:$total_input_traffic:$total_output_traffic");

    if( $ret == 0 )
    {
      $err = rrd_error();
      echo "ERROR occurred: $err\n";
    }

    sleep(300);
  }
?>
```

Your input and output values could be pulled from anywhere here, I just wanted to have a source that would work for anyone who wanted to try the script.

After letting this script run for a few hours you can run the following shell script to see what type of data you have collected so far:

For more information on the options to rrd_update here: <a href="http://oss.oetiker.ch/rrdtool/doc/rrdupdate.en.html">rrdupdate</a>

```
#!/bin/sh
END=`date +%s`
START=`echo $END-3600|bc` # over the hour
rrdtool fetch net.rrd AVERAGE --start $START --end $END
```

That should display the average sample values for the last hour.

<b>Displaying RRD data as a graph</b>

Now that you have data in your RRD you will want to graph it. The following code will graph the average input and output for 1 day as well as the max for that day.

```
<?php

  $opts = array( "--start", "-1d", "--vertical-label=B/s",
                 "DEF:inoctets=net.rrd:input:AVERAGE",
                 "DEF:outoctets=net.rrd:output:AVERAGE",
                 "AREA:inoctets#00FF00:In traffic",
                 "LINE1:outoctets#0000FF:Out traffic\\r",
                 "CDEF:inbits=inoctets,8,*",
                 "CDEF:outbits=outoctets,8,*",
                 "COMMENT:\\n",
                 "GPRINT:inbits:AVERAGE:Avg In traffic\: %6.2lf %Sbps",
                 "COMMENT:  ",
                 "GPRINT:inbits:MAX:Max In traffic\: %6.2lf %Sbps\\r",
                 "GPRINT:outbits:AVERAGE:Avg Out traffic\: %6.2lf %Sbps",
                 "COMMENT: ",
                 "GPRINT:outbits:MAX:Max Out traffic\: %6.2lf %Sbps\\r"
               );

  $ret = rrd_graph("net_1d.gif", $opts, count($opts));

  if( !is_array($ret) )
  {
    $err = rrd_error();
    echo "rrd_graph() ERROR: $err\n";
  }
?>
```

You should end up with a file named net_1d.gif in your working directory that looks something like: <br/>
<img src="/assets/rrd-php/img/net_1d.gif"/>

You can also do weekly and monthly graphs by changing the start parameter to -1w or -1m: <br/>
<img src="/assets/rrd-php/img/net_1w.gif"/> <br/>
<img src="/assets/rrd-php/img/net_1m.gif"/> <br/>

For the impatient you can download my <a href="/assets/rrd-php/net.rrd">net.rrd</a> file and try the graphs for yourself.

See the other tutorials for more information on the options you have for graphing.

For more information on the options to rrd_graph see: <a href="http://oss.oetiker.ch/rrdtool/doc/rrdgraph.en.html">rrdgraph</a>



