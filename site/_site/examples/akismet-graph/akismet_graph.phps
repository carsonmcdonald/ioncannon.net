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
