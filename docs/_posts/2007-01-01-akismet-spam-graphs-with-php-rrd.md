---
layout: archive
status: publish
published: true
title: Akismet spam graphs with PHP RRD
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 113
wordpress_url: http://www.ioncannon.net/php/113/akismet-spam-graphs-with-php-rrd/
date: '2007-01-01 12:37:33 -0500'
date_gmt: '2007-01-01 17:37:33 -0500'
categories:
- php
- utilities
tags: []
comments:
- id: 1588
  author: Joshua Eichorn
  author_email: josh@bluga.net
  author_url: http://blog.joshuaeichorn.com
  date: '2007-01-04 15:55:59 -0500'
  date_gmt: '2007-01-04 20:55:59 -0500'
  content: RRD is nice from a data storage perspective since you won't have a lot
    of data growth.  But it sure does produce ugly graphs.
---
After reading a post on <a href="http://blog.joshuaeichorn.com/archives/2006/12/21/more-spam-fun/">hacking Akismet to add graphs</a> I decided I liked the idea but I didn't want to store the data in a database. It seemed like it would be better to store it using a RRD and then use the PHP RRD library. So after a little hacking I've created a version that does basically the same thing except uses a RRD.


A good place to start is the <a href="http://www.ioncannon.net/system-administration/59/php-rrdtool-tutorial/">PHP RRDTool tutorial</a>. It will make it easier to read the following code if you have an idea of how to use the RRDTool extension.

All of the following changes should be made in the plugins/akismet directory.

The first part of the code is akismet_rrd.php that adds a utility function for updating the RRD file. It will create the file if it doesn't already exist. To gather the stats on incoming spam it uses a timestamp of the last time it ran and then queries WordPress's comment table for anything marked as spam in increments that match the step used to set up the RRD. The update function can be called in a number of locations but the most efficient seems to be right before any deletes happen.

```
<?php
define('AKISMET_RRD_FILE', ABSPATH . 'wp-content/plugins/' . dirname(plugin_basename(__FILE__)) . '/akismet.rrd');
define('AKISMET_RRD_TS', 300);

function akismet_update_rrd()
{
  $last_update = get_option( 'akismet_stat_last_update' );

  $current_time = strtotime(current_time('mysql', 1));
  if($last_update == 0)
  {
    $last_update = $current_time - (AKISMET_RRD_TS * 200);
  }

  $time_diff = $current_time - $last_update;
  if( $time_diff > AKISMET_RRD_TS )
  {
    update_option( 'akismet_stat_last_update', ($current_time - (($time_diff - AKISMET_RRD_TS) % AKISMET_RRD_TS)) );

    akismet_create_rrd();

    global $wpdb;

    while( $last_update < $current_time - AKISMET_RRD_TS )
    {
      $data = $wpdb->get_row("SELECT COUNT(1) as spam_count FROM $wpdb->comments WHERE comment_date_gmt BETWEEN FROM_UNIXTIME(" . $last_update . ") AND FROM_UNIXTIME(" . ($last_update + AKISMET_RRD_TS) . ") AND comment_approved = 'spam'");
      $spam_count = 0;
      if($data)
      {
        $spam_count = $data->spam_count;
      }

      rrd_update(AKISMET_RRD_FILE, ($last_update + (get_settings('gmt_offset') * 3600)) . ":$spam_count");

      $last_update += AKISMET_RRD_TS;
    }
  }
}

function akismet_create_rrd()
{
  if( !file_exists(AKISMET_RRD_FILE) )
  {
    $opts = array( "--step", AKISMET_RRD_TS, "--start", 0,
       "DS:input:ABSOLUTE:600:0:100000",
       "RRA:AVERAGE:0.5:1:600",
       "RRA:AVERAGE:0.5:6:700",
       "RRA:AVERAGE:0.5:24:775",
       "RRA:AVERAGE:0.5:288:797",
       "RRA:MAX:0.5:1:600",
       "RRA:MAX:0.5:6:700",
       "RRA:MAX:0.5:24:775",
       "RRA:MAX:0.5:288:797"
    );

    rrd_create(AKISMET_RRD_FILE, $opts, count($opts));
  }
}

?>
```
The next step is the code to create graphs from the RRD in the file akismet_graph.php. This code registers the menu for WordPress in the Dashboard area and when displayed will generate the graphs for a day, month and year.

```
<?php
include_once ("akismet_rrd.php");

define('AKISMET_GRAPH_DIR', ABSPATH . 'wp-content/plugins/' . dirname(plugin_basename(__FILE__)) . '/');

add_action('activity_box_end', 'akismet_stats');

function wp_akstat_add_pages() {
        if (function_exists('add_submenu_page'))
                add_submenu_page('index.php', 'Akismet Graphs', 'Akismet Graphs', 1, __FILE__, displayit);
}
add_action('admin_menu', 'wp_akstat_add_pages');

function displayit()
{
akismet_update_rrd();

$opts = array( "--start", "-1d", "--title=Hourly Spam Graph",
               "DEF:inspams=" . AKISMET_RRD_FILE .":input:AVERAGE",
               "CDEF:hr=inspams,720,*",
               "LINE2:hr#00FF00:Spams/Hour",
               "COMMENT:\\n",
               "GPRINT:hr:AVERAGE:Avg Spams/Hour\: %6.2lf",
               "COMMENT:  ",
               "GPRINT:hr:MAX:Max Spams/Hour\: %6.2lf\\r"
             );

rrd_graph(AKISMET_GRAPH_DIR . "akismet_1d.gif", $opts, count($opts));

$opts = array( "--start", "-1m", "--title=Daily Spam Graph",
               "DEF:inspams=" . AKISMET_RRD_FILE .":input:AVERAGE",
               "CDEF:dy=inspams,8640,*",
               "LINE2:dy#00FF00:Spams/Day",
               "COMMENT:\\n",
               "GPRINT:dy:AVERAGE:Avg Spams/Day\: %6.2lf",
               "COMMENT:  ",
               "GPRINT:dy:MAX:Max Spams/Day\: %6.2lf\\r"
             );

rrd_graph(AKISMET_GRAPH_DIR . "akismet_1m.gif", $opts, count($opts));

$opts = array( "--start", "-1y", "--title=Monthly Spam Graph",
               "DEF:inspams=" . AKISMET_RRD_FILE .":input:AVERAGE",
               "CDEF:dy=inspams,8640,*",
               "LINE2:dy#00FF00:Spams/Day",
               "COMMENT:\\n",
               "GPRINT:dy:AVERAGE:Avg Spams/Day\: %6.2lf",
               "COMMENT:  ",
               "GPRINT:dy:MAX:Max Spams/Day\: %6.2lf\\r"
             );

rrd_graph(AKISMET_GRAPH_DIR . "akismet_1y.gif", $opts, count($opts));

$img_loc = "/wp-content/plugins/" . dirname(plugin_basename(__FILE__)) . "/";
?>

<div style="text-align:center; padding: 5px;">
<img src="<?php echo $img_loc ?>akismet_1d.gif"/> <br/>
<img src="<?php echo $img_loc ?>akismet_1m.gif"/> <br/>
<img src="<?php echo $img_loc ?>akismet_1y.gif"/> <br/>
</div>
<?php
}
?>
```
The final step is to make some changes to akismet.php to add the update functionality.

Put this at the top:

```
include_once ("akismet_rrd.php");
include('akismet_graph.php');
```

Every place you find "DELETE FROM" add the following before it:

```
akismet_update_rrd();
```

And finally here is what you will end up with after a few days:

<img src="/examples/akismet-graph/akismet_1d.gif"/> <br/>

<img src="/examples/akismet-graph/akismet_1m.gif"/> <br/>

<img src="/examples/akismet-graph/akismet_1y.gif"/> <br/>

One downside to the way this setup works is that you can miss some data if you delete quicker than the step time. I figured that was ok since the graphs are averages, the step is only 5 minutes and most people probably don't purge their spam that quickly.



