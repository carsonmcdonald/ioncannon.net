---
layout: archive
status: publish
published: true
title: Faceted Search With Sphinx
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1055
wordpress_url: http://www.ioncannon.net/?p=1055
date: '2010-05-18 05:42:34 -0400'
date_gmt: '2010-05-18 10:42:34 -0400'
categories:
- programming
tags:
- sphinx
- search
comments:
- id: 204630
  author: Alex Ksikes
  author_email: alex.ksikes@gmail.com
  author_url: https://github.com/alexksikes/fSphinx
  date: '2011-05-17 03:05:15 -0400'
  date_gmt: '2011-05-17 08:05:15 -0400'
  content: "Pretty cool! You can now also use fSphinx to perform faceted search with
    Sphinx.\r\n\r\nhttps://github.com/alexksikes/fSphinx"
---

I decided to use the <a href="http://www.sphinxsearch.com/">Sphinx</a> search engine for the <a href="http://www.ioncannon.net/projects/geeqe/">GeeQe</a> iPhone app I build last year because it was fast and had a very small memory footprint. Recently I wanted to experiment with a search interface that had facets and wondered if I would need to move away from Sphinx to something like <a href="http://lucene.apache.org/solr/">Solr</a>. As it turns out Sphinx can do <a href="http://en.wikipedia.org/wiki/Faceted_search">faceted search</a> almost as well as Solr can. The first half of what follows contains instructions on how to get Sphinx ready for faceted searches. If you are familiar with setting up Sphinx and already have data indexed by Sphinx you may find it better to skip to the second half after reading the intro to faceted search.


You have almost certainly seen faceted searching or faceted browsing already. A lot of online retailers now use facets in their online stores. Here are a few examples: 


<ul>
  <li><a href="http://www.amazon.com/s/?url=search-alias%3Daps&field-keywords=java+programming&sprefix=java+pro">An Amazon search for java programming</a></li>
  <li><a href="http://www.bestbuy.com/site/Televisions/All-Flat-Panel-TVs/abcat0101001.c?id=abcat0101001">A Best Buy search for flat panel TVs</a></li>
  <li><a href="http://www.newegg.com/Store/SubCategory.aspx?SubCategory=32&name=Laptops-Notebooks">A New Egg search for Laptops</a></li>
</ul>

In each of the above cases you will find the left hand navigation displaying the facets. Here is what the Amazon search looks like:


<a href="/assets/2010_05_AmazonFacetedSearchExampleAllDepartments.jpg"><img src="/assets/2010_05_AmazonFacetedSearchExampleAllDepartments.jpg" alt="All Departments Amazon Faceted Search Example" title="All Departments Amazon Faceted Search Example" width="300" height="250" class="alignnone size-medium wp-image-1056" /></a>


One of the ways facets are useful is the ability to drill down into the results and create filters based on the facets. In the Amazon example I went from looking for anything that was related to "java programming" to only things related to books:


<a href="/assets/2010_05_AmazonFacetedSearchExampleBooksOnly.jpg"><img src="/assets/2010_05_AmazonFacetedSearchExampleBooksOnly.jpg" alt="Books Only Amazon Faceted Search Example" title="Books Only Amazon Faceted Search Example" width="300" height="268" class="alignnone size-medium wp-image-1057" /></a><br/>


Some sites build a breadcrumb of facets you have selected as you drill down into the results. This lets you remove facets by just clicking one of the crumbs. The search for laptops on Newegg above provides an example of breadcrumb navigation:


<a href="/assets/2010_05_NeweggFacetsAndBreadcrumbs.jpg"><img src="/assets/2010_05_NeweggFacetsAndBreadcrumbs.jpg" alt="Breadcrumb Search Navagation with Facets" title="Breadcrumb Search Navagation with Facets" width="300" height="250" class="alignnone size-medium wp-image-1075" /></a>


Now that you have some examples of what faceted search looks like we can move on to creating the same using Sphinx. First we need some type of data to work from and in these examples I'm using the Stack Overflow CC data dump. The following steps should get you a database ready to index by Sphinx if you want to follow along with the same data:


<ol>
  <li>Download the latest <a href="http://blog.stackoverflow.com/2010/05/creative-commons-data-dump-may-10/">Stack Overflow CC data dump</a>.</li>
  <li>Create a MySQL database that will be used to hold the data.</li>
  <li>Grab the <a href="http://github.com/carsonmcdonald/ExampleSphinxSearchWithFacets/blob/master/schema.sql">schema</a> I created to hold the data and load it into your new database.</li>
  <li>Extract the Stack Overflow CC data dump into a directory.</li>
  <li>Use the Ruby <a href="http://github.com/carsonmcdonald/ExampleSphinxSearchWithFacets/blob/master/load.rb">load script</a> to load the XML files from the data dump into the database you created.</li>
</ol>

If you haven't already, now is the time to install Sphinx. I'm using version 0.9.9 for the following examples. I've created a sample configuration file that will get you started:


```
source stack_overflow_src
{
	type				= mysql
	sql_host			= localhost
	sql_user			= root
	sql_pass			=
	sql_db			= yourdbname
	sql_port			= 3306
	sql_query			= SELECT post.id AS post_id, post.owner_id AS owner_id, UNIX_TIMESTAMP(post.created) AS date_added, post.post_type_id AS post_type_id, post.score AS post_score, post.view_count AS post_view_count, post.favorite_count AS post_favorite_count, NOT ISNULL(post.accepted_answer_id) AS has_accepted_answer, GROUP_CONCAT(distinct(post_to_tag.tag_id)) AS tag_ids, title, body_text, GROUP_CONCAT(comment_text SEPARATOR '\n') AS comments, GROUP_CONCAT(distinct(tag.name) SEPARATOR ', ') as tags from post LEFT OUTER JOIN comment ON post.id = comment.post_id LEFT OUTER JOIN post_to_tag ON post_to_tag.post_id = post.id LEFT OUTER JOIN tag ON tag.id = post_to_tag.tag_id GROUP BY post.id;
	sql_attr_uint			= owner_id
	sql_attr_timestamp		= date_added
	sql_attr_uint			= post_type_id
	sql_attr_uint			= post_score
	sql_attr_uint			= post_view_count
	sql_attr_uint			= post_favorite_count
	sql_attr_bool			= has_accepted_answer
	sql_attr_multi			= uint tag_ids from field
	sql_ranged_throttle	= 0
	sql_query_info		= SELECT * FROM post WHERE id=$id
}
#############################################################################
## index definition
#############################################################################
index so_index
{
	source			= stack_overflow_src
	path			= ./data/so_index
	docinfo			= extern
	mlock			= 0
	morphology		= none
	min_word_len		= 1
	charset_type		= sbcs
	html_strip		= 1
}
index so_indexstemmed : so_index
{
	path			= ./data/so_index_stemmed
	morphology	= stem_en
}
#############################################################################
## indexer settings
#############################################################################
indexer
{
	mem_limit		= 512M
}
#############################################################################
## searchd settings
#############################################################################
searchd
{
	port			= 3312
	log			= /tmp/searchd.log
	query_log		= /tmp/query.log
	read_timeout	= 5
	max_children	= 30
	pid_file		= /tmp/searchd.pid
	max_matches	= 1000
	seamless_rotate= 1
	preopen_indexes= 1
	unlink_old		= 1
}
```

The above configuration file will index all posts in the database by title, body text, comments and tags as well add fields to each record for owner id, date added, post type, post score, post view count, post favorite count, if the post has an accepted answer and tag ids. The fields that get associated with each record can later be used in filters and for facets. For more information on how to use the configuration to create your index and start the Sphinx search server check out the <a href="http://www.sphinxsearch.com/docs/current.html">Sphinx documentation</a>.


You should now be able to test against the index. There is a handy PHP script named test.php included with the Sphinx source that will let you test just about every option available in the Sphinx search API (other language API wrappers are also available in the source but the test script is in PHP). The following is a simple search that will give you back every post related to "C#":


```
php test.php -h localhost -p 3312 -l 10 'c#'
```

The key to faceted searching with Sphinx is the <a href="http://sphinxsearch.com/docs/current.html#clustering">group by</a> feature. Now try out the same search using the group and group sort options:


```
php test.php -h localhost -p 3312 -l 10 -g tag_ids -gs '@count desc' 'c#'
```

In the above case we group by tag ids and sort by the count of documents containing each from the result of the search for "C#".


Faceted searches in Sphinx require multiple search calls to work in conjunction with a normal search. The query will first be run to generate the non-faceted results. The same search query is then run again with a grouping for each facet you want to include in the results. 


It is worth noting that doing the group by is not a simple operation for Sphinx to execute and can result in long queries. Take for instance the above search for "C#" where the non-faceted search returns 704556 documents. It will take a lot of work for Sphinx to count the tags for each of those documents. Slow here is 5 or 6 seconds per facet compared to sub-second for the non-faceted query.


A better approach is to only attempt to find faceted results when the query returns a limited enough set. Something generic enough to return hundreds of thousands of results probably won't be helped a lot by facets. In my final example I've limited the faceted search to queries that produce fewer than 1000 results.


I've created a couple simple examples in PHP to help get you started. These examples assume the sphinxapi.php library is in the current directory, you can find it in the Sphinx source API directory along with the test.php file mentioned above. The first example is a stripped down non-faceted search:


```
<?php
require ( "sphinxapi.php" );
$sphinx_client = new SphinxClient ();
$query = "java war file deploy";
$sphinx_client->SetServer ( 'localhost', 3312 );
$sphinx_client->SetConnectTimeout ( 1 );
$sphinx_client->SetArrayResult ( true );
$sphinx_client->SetWeights ( array ( 100, 1 ) );
$sphinx_client->SetMatchMode ( SPH_MATCH_ALL );
$sphinx_client->SetLimits( 0, 20, 20 );
$sphinx_client->SetRankingMode ( SPH_RANK_PROXIMITY_BM25 );
$results = $sphinx_client->Query ( $query, '*' );
if( $results===false )
{
  print "Query failed: " . $sphinx_client->GetLastError() . ".\n";
}
else
{
  if ( $sphinx_client->GetLastWarning() )
    print "WARNING: " . $sphinx_client->GetLastWarning() . "\n\n";
  print_results($query, $results);
}
function print_results($query, $results)
{
  print "Query '$query' retrieved $results[total] of $results[total_found] matches in $results[time] sec.\n";
  print "Query stats:\n";
  if ( is_array($results["words"]) )
    foreach ( $results["words"] as $word => $info )
      print "    '$word' found $info[hits] times in $info[docs] documents\n";
  print "\n";
  if ( is_array($results["matches"]) )
  {
    $n = 1;
    print "Matches:\n";
    foreach( $results["matches"] as $docinfo )
    {
      print "$n. doc_id=$docinfo[id], weight=$docinfo[weight]";
      foreach( $results["attrs"] as $attrname => $attrtype )
      {
        $value = $docinfo["attrs"][$attrname];
        if( $attrtype & SPH_ATTR_MULTI )
          $value = "(" . join ( ",", $value ) .")";
        else if ( $attrtype==SPH_ATTR_TIMESTAMP )
          $value = date ( "Y-m-d H:i:s", $value );
        print ", $attrname=$value";
      }
      print "\n";
      $n++;
    }
  }
}
?>
```

This second script does the same group by as the above test script example to create faceted results where the facets are tag ids:


```
<?php
require ( "sphinxapi.php" );
$sphinx_client = new SphinxClient ();
$query = "java war file deploy";
$sphinx_client->SetServer ( 'localhost', 3312 );
$sphinx_client->SetConnectTimeout ( 1 );
$sphinx_client->SetArrayResult ( true );
$sphinx_client->SetWeights ( array ( 100, 1 ) );
$sphinx_client->SetMatchMode ( SPH_MATCH_ALL );
$sphinx_client->SetLimits( 0, 20, 20 );
$sphinx_client->SetRankingMode ( SPH_RANK_PROXIMITY_BM25 );
$sphinx_client->SetGroupBy( 'tag_ids', SPH_GROUPBY_ATTR, '@count desc' );
$results = $sphinx_client->Query ( $query, '*' );
if( $results===false )
{
  print "Query failed: " . $sphinx_client->GetLastError() . ".\n";
}
else
{
  if ( $sphinx_client->GetLastWarning() )
    print "WARNING: " . $sphinx_client->GetLastWarning() . "\n\n";
  print_results($query, $results);
}
function print_results($query, $results)
{
  print "Query '$query' retrieved $results[total] of $results[total_found] matches in $results[time] sec.\n";
  print "Query stats:\n";
  if ( is_array($results["words"]) )
    foreach ( $results["words"] as $word => $info )
      print "    '$word' found $info[hits] times in $info[docs] documents\n";
  print "\n";
  if ( is_array($results["matches"]) )
  {
    $n = 1;
    print "Matches:\n";
    foreach( $results["matches"] as $docinfo )
    {
      print "$n. doc_id=$docinfo[id], weight=$docinfo[weight]";
      foreach( $results["attrs"] as $attrname => $attrtype )
      {
        $value = $docinfo["attrs"][$attrname];
        if( $attrtype & SPH_ATTR_MULTI )
          $value = "(" . join ( ",", $value ) .")";
        else if ( $attrtype==SPH_ATTR_TIMESTAMP )
          $value = date ( "Y-m-d H:i:s", $value );
        print ", $attrname=$value";
      }
      print "\n";
      $n++;
    }
  }
}
?>
```

The last example is a more complex and complete <a href="http://github.com/carsonmcdonald/ExampleSphinxSearchWithFacets">faceted search example</a> that I have put on github. This example gives you a full search interface for the Stack Overflow CC data that includes filters and faceted searches. Here is a screen shot of the resulting interface displaying a faceted search result:


<a href="/assets/2010_05_ExampleFacetedSearch.jpg"><img src="/assets/2010_05_ExampleFacetedSearch.jpg" alt="Faceted Search Example" title="Faceted Search Example" width="300" height="249" class="alignnone size-medium wp-image-1058" /></a><br/>


If you are interested in more information about faceted searches I found the following articles helpful:


<ul>
  <li><a href="http://blog.linkedin.com/2010/03/05/designing-linkedin-faceted-search/">LinkedIn's Faceted Search</a></li>
  <li><a href="http://webonrails.com/2008/11/25/presented-faceted-search-using-ultrasphinx/">Using Rails UltraSphinx for Faceted search</a></li>
  <li><a href="http://www.lucidimagination.com/Community/Hear-from-the-Experts/Articles/Faceted-Search-Solr">Solr faceted search</a></li>
  <li><a href="http://www.uxmatters.com/mt/archives/2010/04/design-patterns-for-mobile-faceted-search-part-i.php">Design Patterns for Mobile Faceted Search: Part I</a> and <a href="http://www.uxmatters.com/mt/archives/2010/05/design-patterns-for-mobile-faceted-search-part-ii.php">Design Patterns for Mobile Faceted Search: Part II</a></li>
  <li><a href="http://www.alistapart.com/articles/design-patterns-faceted-navigation/">Design Patterns for Faceted Navigation</a></li>
</ul>
