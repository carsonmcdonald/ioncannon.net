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
