---
layout: archive
status: publish
published: true
title: Monitoring Bandwidth Usage for a Xen node
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 84
wordpress_url: http://www.ioncannon.net/system-administration/84/monitoring-bandwidth-usage-for-a-xen-node/
date: '2006-08-13 06:40:55 -0400'
date_gmt: '2006-08-13 10:40:55 -0400'
categories:
- system administration
- linux
tags: []
comments:
- id: 41186
  author: Alain
  author_email: akelder@gmail.com
  author_url: http://alain.giantdorks.org
  date: '2007-12-25 16:25:22 -0500'
  date_gmt: '2007-12-25 21:25:22 -0500'
  content: "Great post! Linked to you from my <a href=\"http://alain.giantdorks.org/linux-bandwidth-monitoring-and-network-accounting-tools\"
    rel=\"nofollow\">post on Netacct-mysql and network bandwidth monitoring</a>..\r\n\r\nCheers,
    -Alain."
- id: 109757
  author: Alain Kelder is a GIANT dork&#8230;
  author_email: ''
  author_url: http://alain.giantdorks.org/linux-bandwidth-monitoring-and-network-accounting-tools/
  date: '2008-11-26 23:30:56 -0500'
  date_gmt: '2008-11-27 04:30:56 -0500'
  content: "[...] some additional info, check out the Netacct-mysql project page.
    Also, take a look at this post on Monitoring Bandwidth Usage for a Xen node, which
    is where I first learned about [...]"
- id: 178324
  author: boliva
  author_email: carlos.oliva@gmail.com
  author_url: ''
  date: '2010-08-05 13:51:33 -0400'
  date_gmt: '2010-08-05 18:51:33 -0400'
  content: "Excellent post! I guess you didn't expect to get a comment on it almost
    4 years later. If you happen to still get this, have you managed to improve over
    it? How does it affects the overall network performance of the Xen domains?\r\n\r\nBest!"
- id: 178616
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-08-07 06:45:15 -0400'
  date_gmt: '2010-08-07 11:45:15 -0400'
  content: I haven't needed to use this for a while now so I'm not sure if it is still
    the best way to go. I do believe it would slow down the Xen domains at some point
    but it would depend on how much network traffic you have.
---
After my last post on <a href="http://www.ioncannon.net/system-administration/57/limiting-bandwidth-usage-on-xen-linux-setup/">limiting bandwidth usage on a Xen node</a> I thought I would follow up with how to monitor the bandwidth usage of a Xen node.


I chose to use <a href="http://netacct-mysql.gabrovo.com/">netacct-mysql</a> to monitor bandwidth and store the results into a mysql database. This isn't the only way of monitoring the bandwidth but it was easy to set up and stores the information directly into mysql without needing any extra scripts. 

On the Xen setup I'm using for an example there are 3 nodes and a bucket for each node will be created in the mysql database by netacct. Setting up netacct can be tricky so you will want to check to make sure traffic for each node is going into the correct bucket.

Your naccttab file will look something like:

```
sniff 0
database mysql
mysql_user acct
mysql_password acct_password
mysql_host localhost
mysql_port 0
mysql_database netacct
pidfile  /var/run/nacctd.pid

compactnet 192.168.1.1 255.255.255.255
compactnet 192.168.1.2 255.255.255.255
compactnet 192.168.1.3 255.255.255.255

ournet 192.168.1.1 255.255.255.255
ournet 192.168.1.2 255.255.255.255
ournet 192.168.1.3 255.255.255.255

flush 30

errdelay 2
fdelay 60

device peth0

ignorenet 127.0.0.0 255.0.0.0

debug 0
debugfile /tmp/nacctd.debug
```
A couple notes on setting up netacct:

<ol>
<li>nacctd runs on Xen0 so it can capture all the traffic from the XenU nodes.</li>
<li>The naccttab config file needs to go into /usr/local/etc in case it isn't obvious from the README.</li>
<li>You need to make sure you have the correct Xen0 device set up as the listen device in the naccttab config file.</li>
<li>If the mysql database is on the Xen0 node then you probably don't need a username or password in the config file.</li>
</ol>
After running netacct for some amount of time you can query the database it is logging to and get a count of all the different nodes and their bandwidth usage. Try this query out:

```
select traffic.ip, sum(input)/1073741824 inp, sum(output)/1073741824 outp from traffic group by ip;
```
That will show a total sum of bandwidth in gigabytes broken down by ip.

To get just the current month you would want this query:

```
select traffic.ip, sum(input)/1073741824 inp, sum(output)/1073741824 outp from traffic where time between concat(EXTRACT(YEAR_MONTH FROM now()), '01') and now() group by ip;
```
Now that you have traffic counts and can query the tables it is time to show some graphs and reports. I chose to do that in php so that I could display the results on the web. Start with my <a href="http://www.ioncannon.net/system-administration/59/php-rrdtool-tutorial/">PHP RRDTool</a> tutorial if you don't already know how to use RRDTool with PHP.

To display text with totals if fairly easy since all we need to do is run the above queries and then display the output. Here is an example of doing just that with PHP:

```
<?php
  $query_ip = '192.168.1.2';

  mysql_connect( '192.168.1.1', 'user', 'pass' ) or die ( 'Unable to connect to server.' );
  mysql_select_db( 'netacct' ) or die ( 'Unable to select database.' );

  $sql = "select sum(input) inp, sum(output) outp from traffic where ip = '$query_ip' and time between concat(EXTRACT(YEAR_MONTH FROM now()), '01') and now()";
  $result = mysql_query( $sql ) or die ( 'Unable to execute query.' );
  $row = mysql_fetch_row($result);

  $current_inpgigs = round($row[0]/1073741824, 3);
  $current_outgigs = round($row[1]/1073741824, 3);
  $current_total = round(($row[1]+$row[0])/1073741824, 3);

  $sql = "select sum(input) inp, sum(output) outp from traffic where ip = '$query_ip' and time between concat(EXTRACT(YEAR_MONTH FROM date_sub(now(), interval 1 month)), '01') and concat(EXTRACT(YEAR_MONTH FROM now()), '01')";
  $result = mysql_query( $sql ) or die ( 'Unable to execute query.' );
  $row = mysql_fetch_row($result);

  $last_inpgigs = round($row[0]/1073741824, 3);
  $last_outgigs = round($row[1]/1073741824, 3);
  $last_total = round(($row[1]+$row[0])/1073741824, 3);

  echo "Current: $current_inpgigs GB, $current_outgigs GB, $current_total GB\n";
  echo "Last: $last_inpgigs GB, $last_outgigs GB, $last_total GB\n";
?>
```
If you want to go a step further though you can display traffic graphs using rrdtool. There are two parts to generating the graphs. The first part builds the database and the second part displays graphs based on the database.

Here is an example PHP script that can be used to create and update a database per IP:

```
#!/usr/local/bin/php -q
<?php
  define("RRD_DIR", "/tmp/rrd/");

  function create_rrd($ip)
  {
    $fname = RRD_DIR . $ip . ".rrd";
    if( !file_exists($fname) )
    {
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
    }
  }

  function update_rrd($ip)
  {
    $sql = "select sum(input), sum(output) from traffic where ip = '$ip'";
    $result = mysql_query( $sql ) or die ( 'Unable to execute query.' );

    $row = mysql_fetch_row($result);
    $fname = RRD_DIR . $ip . ".rrd";

    $ret = rrd_update($fname, "N:$row[2]:$row[3]");

    if( $ret == 0 )
    {
      $err = rrd_error();
      echo "ERROR occurred: $err\n";
    }
  }

  $update_ip = '192.168.1.2';

  mysql_connect( '192.168.1.1', 'user', 'pass' ) or die ( 'Unable to connect to server.' );
  mysql_select_db( 'netacct' ) or die ( 'Unable to select database.' );

  create_rrd($update_ip);
  update_rrd($update_ip);
?>
```
You will want to put a command in cron to run the above script every 5 minutes to update the database.

The following example PHP script will display a graph of an IP generated from the given database:

```
<?php
  $query_ip = '192.168.1.2';

  $opts = array( "--start", "-1d", "--vertical-label=B/s",
                 "DEF:inoctets=/tmp/rrd/$query_ip.rrd:input:AVERAGE",
                 "DEF:outoctets=/tmp/rrd/$query_ip.rrd:output:AVERAGE",
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

  $ret = rrd_graph("/tmp/images/${query_ip}_1d.gif", $opts, count($opts));

  if( !is_array($ret) )
  {
    $err = rrd_error();
    echo "rrd_graph() ERROR: $err\n";
  }
?>
```
That is all there is to it. A more complex set of PHP scripts would allow you to limit access to graphs by user id and could be used by owners of XenU nodes to monitor their bandwidth usage as well as the owner of the box for billing.



