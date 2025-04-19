---
layout: archive
status: publish
published: true
title: Full Text Search with Sphinx
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 685
wordpress_url: http://www.ioncannon.net/?p=685
date: '2009-10-20 03:30:28 -0400'
date_gmt: '2009-10-20 08:30:28 -0400'
categories:
- programming
tags:
- php
- mysql
- sphinx
comments:
- id: 159730
  author: dwi
  author_email: steamboatid@gmail.com
  author_url: ''
  date: '2009-12-26 06:52:39 -0500'
  date_gmt: '2009-12-26 11:52:39 -0500'
  content: |-
    hi,

    i did all the things above and can get results from simple query, problem is that sphinx only return the doc id just like your example above.
    how can i get the full column data like when i did with mysql?

    many thanks in advance,
    dwi
- id: 159734
  author: Sesh Kothandaraman
  author_email: seshadribpl@gmail.com
  author_url: ''
  date: '2009-12-26 07:23:18 -0500'
  date_gmt: '2009-12-26 12:23:18 -0500'
  content: "Hi Carson,\r\n\r\nI am a newbie to Sphinx and apologize if you find my
    question too trivial. \r\n\r\nI have plaintext files, say, doc1.txt, doc2.txt,
    etc. which contain unstructured text (may be log messages, writings from various
    contributors, etc). I want to be able to search through them using Sphinx. I understood
    some concepts from your nice article, but I am not able to figure out how to get
    these files into the Mysql database. If you don't mind, can you please tell me
    in a few concise steps on how to get this going and configure the sphinx.conf
    file?\r\n\r\nThanks a lot in advance !\r\n\r\nSesh"
- id: 160573
  author: santosh
  author_email: koolnyze@gmail.com
  author_url: http://www.indiainternets.com
  date: '2010-01-07 03:53:15 -0500'
  date_gmt: '2010-01-07 08:53:15 -0500'
  content: "dwi,\r\n\r\nsphinx returns only the document ids and you have to query
    the mysql table to get the full row."
---

While developing my <a href="http://www.ioncannon.net/projects/geeqe/">GeeQE</a> iPhone application I decided I needed a way to let users search posts so I started looking around for a simple search engine that I could use with PHP. I took a look at a number of different options like <a href="http://dev.mysql.com/doc/refman/5.1/en/fulltext-search.html">MySQL Full Text search</a>, <a href="http://www.sphinxsearch.com/">Sphinx</a>, <a href="http://lucene.apache.org/solr/">Solr</a> and others based on <a href="http://lucene.apache.org/">Lucene</a>. After looking at what it would take to get started with each I decided to go with Sphinx. Sphinx looked like it would be the easiest and quickest to set up, didn't require a lot of resources to run in an idle state and would integrate with PHP easily.

This post goes over how I went about configuring Sphinx and gives an example of how to integrate it with PHP. I'm using MySQL as the data store filled with the <a href="http://blog.stackoverflow.com/2009/06/stack-overflow-creative-commons-data-dump/">Stack Overflow CC data dump</a> although it should be easy to adapt the instructions to other data sources. To follow along just download a copy of the data dump and use my <a href="http://code.google.com/p/geeqe/source/browse/trunk/scripts/schema.sql">schema</a> and <a href="http://code.google.com/p/geeqe/source/browse/trunk/scripts/load.rb">loader</a> to get the same MySQL database.

I've broken the setup down into the following 4 steps:

<ol>
  <li><a href="#sphinx-config">Configuring Sphinx</a></li>
  <li><a href="#sphinx-index">Building an Index with Sphinx</a></li>
  <li><a href="#sphinx-search">Searching with Sphinx</a></li>
  <li><a href="#sphinx-php-api">Using the Sphinx PHP API</a></li>
</ol>

As a side note, Sphinx is available as a package under Fedora 11 and I assume the same of other Linux distributions so it shouldn't be too hard to install. I am using version 0.9.8.1 compiled from source.

<a name="sphinx-config"><b>Configuring Sphinx</b></a>

The Sphinx configuration file can be be broken down into different parts with some of those parts being used by the indexer and some by the search service. I have broken the configuration file I am using into different sections but I include the full file for download at the end. The first segment of the configuration describes where to get the data for the index, in this case it is a MySQL database:

```
###############################################
## source for the data to be indexed
###############################################

source sosrc
{
	type			= mysql

	sql_host		= localhost
	sql_user		= souser
	sql_pass		=
	sql_db		        = so_2009_10
	sql_port		= 3306

	sql_query		= SELECT id, owner_id, UNIX_TIMESTAMP(created) AS date_added, title, body_text FROM post WHERE post_type_id = 1

	sql_attr_uint		= owner_id
	sql_attr_timestamp	= date_added

	sql_ranged_throttle	= 0

	# document info query, ONLY for CLI search (ie. testing and debugging)
	sql_query_info		= SELECT * FROM post WHERE id=$id
}
```

There are a few notable parts to the above. The field "sql_query" defines the query that grabs data from the database for the index. The "sql_attr_*" values point out the columns in the data that will be used in search queries later to sort or group by, more on that in the searching section.

The next section defines the index:

```
###############################################
## base search index
###############################################

index so_2009_10
{
	source			= sosrc
	path			= ./data/so_2009_10
	docinfo			= extern
	mlock			= 0

	morphology		= none

	min_word_len		= 1
	charset_type		= sbcs

	html_strip		= 1
}

###############################################
## index that extends the original index
###############################################

index so_2009_10stemmed : so_2009_10
{
	path			= ./data/so_2009_10stemmed
	morphology		= stem_en
}
```

In the above there are two index definitions. The first index is very basic and has no morphology defined. The second index is derived from the first index and uses a <a href="http://en.wikipedia.org/wiki/Stemming">stemming</a> morphology. I'm also having any HTML stripped out of the content since there is some in the data and it doesn't need to be searchable in the index.

The next block in the configuration file defines how the indexer will run. Here I'm limiting the amount of memory used to 32M as an example of what could be done:

```
###############################################
## indexer settings
###############################################

indexer
{
	mem_limit		= 32M
}
```

The final part of the configuration file sets options for the search daemon:

```
###############################################
## searchd settings
###############################################

searchd
{
	port			= 3312
	log			= /tmp/searchd.log
	query_log		= /tmp/query.log

	read_timeout		= 5
	max_children		= 30
	pid_file	 	= /tmp/searchd.pid
	max_matches		= 100
	seamless_rotate	        = 1
	preopen_indexes	        = 0
	unlink_old		= 1
}
```

You can download the full configuration file here: <a href="/examples/sphinx.conf">sphinx.conf</a>

The above configuration gets you the basics. If you want to find out more you can check out the <a href="http://www.sphinxsearch.com/docs/current.html#indexing">indexing</a> documentation.

<a name="sphinx-index"><b>Building an Index with Sphinx</b></a>

The complexity of building and maintaining an index goes up with the frequency of the updates that are required to keep it up to date. Luckily the data set I'm working with gets updated once a month so it is fairly static. Because the data is updated monthly I only have to update the index once a month so this makes the indexing simple but keep in mind that I still need to use services like the ones offered at <a href="https://blog.couchbase.com/database-indexing-best-practices/">Couchbase</a>, as I think it improves productivity.

This is the command I use to create the index:

```
indexer --all --config sphinx.conf
```

Indexing the entire data set I have only takes a few minutes so re-indexing speed isn't an issue for me and the resulting index is in the 250M range as of this post so size isn't necessarily an issue either. However I currently create the index on one machine and then upload it to the server so a 250M transfer could become a bandwidth hog if I needed to update the index more often. If I were able to get deltas from the data dump I would look into using the <a href="http://www.sphinxsearch.com/docs/current.html#index-merging">index merging</a> feature and then transferring the delta index.

<a name="sphinx-search"><b>Searching with Sphinx</b></a>

Sphinx offers a lot of flexibility in configuring how a search is run and I found myself needing that flexibility to get better results. The search command line interface (see the <a href="http://www.sphinxsearch.com/docs/current.html#ref-search">reference</a> for all the options) can be used to test a few of the options but you can't do everything with it that you can with the various APIs available.

The first place I started changing defaults with the search is in how it matches the search words. The default is to find all words:

```
search --config sphinx.conf "php full text search"
```

Here is an example of the output you get from the CLI search:

```
Copyright (c) 2001-2008, Andrew Aksyonoff

using config file 'sphinx.conf'...
index 'so_2009_10': query 'php full text search ': returned 19 matches of 19 total in 0.061 sec

displaying matches:
1. document=553055, weight=6, owner_id=2287, date_added=Mon Feb 16 11:45:01 2009
        id=553055
        post_type_id=1
        accepted_answer_id=553269
        parent_id=(null)
        score=6
        view_count=604
        body_text=truncated... body text would be here
        owner_id=2287
        last_editor_user_id=2287
        last_editor_display_name=PConroy
        last_edit_date=2009-02-18 10:54:44
        last_activity_date=2009-03-25 19:42:34
        title=Best full text search for mysql?
        answer_count=5
        comment_count=0
        favorite_count=7
        created=2009-02-16 11:45:01
...
```

The output shows you the "document id" as well as the weight and any "sql_attr_" values. I used the CLI search to get the weights for each search change I made before I started working with the API. Please note that the extended information in the above example output only shows up if the sql_query_info query is set correctly in the configuration file.

Next I tested with "any" and "extended search version 2" before settling on extended version 2:

```
search --any --config sphinx.conf "php full text search"

search --ext2 --config sphinx.conf "php full text search"
```

The CLI search will also perform sorts. It is important to note that you can only sort on values that were indexed using the "sql_attr_"* configuration options. Here is an example of sorting by an indexed value:

```
search --sortby "date_added desc" --config sphinx.conf "php regex"
```

This is what happens when you try to sort based on an un-index attribute:

```
search --sortby "id desc" --config sphinx.conf "php regex"

Sphinx 0.9.8.1-release (r1533)
Copyright (c) 2001-2008, Andrew Aksyonoff

using config file 'sphinx.conf'...
index 'so_2009_10': search error: failed to create sorting queue: sort-by attribute 'id' not found.
```

One of the things that the CLI search interface can't do is change <a href="http://www.sphinxsearch.com/docs/current.html#weighting">weightings</a> for the different data points. I found that weighting the title more than the body made sense and that is reflected in the PHP code that follows in the API section.  

The last part of searching to cover is searchd server. This is the integration point for the various Sphinx APIs and I assume it is running for the examples in the PHP API section. If the configuration example given in the first section is used all that needs to be done is to start the daemon. The following is a simple init script I use to start and stop searchd:

```
#!/bin/sh

case "$1" in
'start')
searchd --config /etc/sphinx/sphinx.conf
;;
'stop')
killall -9 searchd;
;;
*)
echo "Usage: $0 { start | stop}"
exit 1
;;
esac
exit 0
#
```

<a name="sphinx-php-api"><b>Using the Sphinx PHP API</b></a>

The Sphinx PHP API is included in the <a href="http://www.sphinxsearch.com/downloads.html">Sphinx source</a>. The API is contained in one file named sphinxapi.php that is located in the api directory of the source. Make sure the library is in a place where it can be included before trying out the examples. There is also some <a href="http://www.sphinxsearch.com/wiki/doku.php?id=php_api_docs">documentation</a> for the PHP API.

In the following example I'm running the search query then serializing it to JSON format. Notice that the title is given a weight of 70 and the body_text is given a weight of 30 so the results will focus more on the title than what is in the body:

```
<?php

require_once('sphinxapi.php');

// Create the client, tell it where the server
// is and how long to wait for a response.
$sphinxClient = new SphinxClient();
$sphinxClient->SetServer( 'localhost', 3312 );
$sphinxClient->SetConnectTimeout( 1 );

// This gives the title more weight than the
// body text for searches.
$sphinxClient->SetFieldWeights(array('title' => 70, 'body_text' => 30));

// Use the exteneded v2 match type
$sphinxClient->SetMatchMode( SPH_MATCH_EXTENDED2 );

// Set the maximum number of search results to return
$sphinxClient->SetLimits( 0, 20, 1000 );

// Set how to rank the weighted values
$sphinxClient->SetRankingMode( SPH_RANK_PROXIMITY_BM25 );

// Give me back the results as an array
$sphinxClient->SetArrayResult( true );

$searchQuery = $_GET['query'];
$searchResults = $sphinxClient->Query( $searchQuery, '*' );

$jhash = array();

if ( $searchResults === false )
{
  $jhash['status'] = 'failed';
  $jhash['status_message'] = $sphinxClient->GetLastError();
}
else
{
  if ( $sphinxClient->GetLastWarning() )
  {
    $jhash['status'] = 'warning';
    $jhash['status_message'] = $sphinxClient->GetLastWarning();
  }
  else
  {
    $jhash['status'] = 'good';
  }

  $jhash['result_total'] = $searchResults['total'];
  $jhash['result_found'] = $searchResults['total_found'];

  $jhash_matches = array();
  if ( is_array($searchResults["matches"]) )
  {
    $row_ids = array();
    foreach ( $searchResults["matches"] as $docinfo )
    {
      array_push($row_ids, mysql_real_escape_string($docinfo['id']));
    }
  }

  $jhash['matches'] = $jhash_matches;
}

echo json_encode($jhash);

?>
```

Although I picked PHP there are a wide range of language specific libraries available.

Overall it didn't seem too difficult to set up Sphinx and have it serving search results quickly. I liked that it is very light weight and doesn't need a lot of resources or require a lot of extra parts to be installed.

