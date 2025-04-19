---
layout: archive
status: publish
published: true
title: PHP MySQLi and Multiple Prepared Statements
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 889
wordpress_url: http://www.ioncannon.net/?p=889
date: '2010-02-09 06:58:44 -0500'
date_gmt: '2010-02-09 11:58:44 -0500'
categories:
- programming
tags:
- php
- mysql
- mysqli
comments:
- id: 162992
  author: Andrey
  author_email: andrey@spamthis.com
  author_url: ''
  date: '2010-02-09 08:47:18 -0500'
  date_gmt: '2010-02-09 13:47:18 -0500'
  content: You can also use cursors, with 5.0+ then you don't need to store the result.
    Cursors fetch data row by row and every fetch means a round-trip to the server.
    The data is materialized on the server side. Thus, if the results are big cursors
    are not recommended.
- id: 163230
  author: Bill Karwin
  author_email: bill@karwin.com
  author_url: http://karwin.blogspot.com
  date: '2010-02-15 16:31:37 -0500'
  date_gmt: '2010-02-15 21:31:37 -0500'
  content: "Is this a simplified example?  Why don't you do this in one query using
    a join:\r\n\r\nselect p.id, p.title, c.user_id \r\nfrom post p left outer join
    comment c on p.id = c.post_id\r\nwhere p.id = 1000;\r\n\r\nGranted, that will
    give return <i>n</i> rows with repeating values in the post columns, but you won't
    have to worry about commands out of sync."
- id: 163242
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-02-15 22:03:22 -0500'
  date_gmt: '2010-02-16 03:03:22 -0500'
  content: "@bill I didn't want to return a ton of duplicated data from the join is
    all. It feels cleaner to make the second round trip."
- id: 166554
  author: Using Cursors with PHP MySQLi and Multiple Prepared Statements
  author_email: ''
  author_url: http://www.ioncannon.net/programming/998/using-cursors-with-php-mysqli-and-multiple-prepared-statements/
  date: '2010-03-30 06:38:46 -0400'
  date_gmt: '2010-03-30 11:38:46 -0400'
  content: "[...] my post on using PHP MySQLi and multiple prepared statements at
    the same time someone commented that using cursors could do the same thing. With
    that comment I dug some more and [...]"
---

While sprucing up the PHP code I use to provide my own Stack Overflow API for <a href="http://www.ioncannon.net/projects/geeqe/">GeeQe</a> I ran into an error caused by trying to use multiple prepared statements with <a href="http://www.php.net/manual/en/book.mysqli.php">MySQLi</a>. It turned up when I tried to execute one prepared statement while looping over the result set from another prepared statement that were both created on the same connection. What came out was the following error:

"Commands out of sync; you can't run this command now"

Details about this error can be found in the <a href="http://dev.mysql.com/doc/refman/5.0/en/commands-out-of-sync.html">mysql docs</a>. Reading those details makes it clear that the result sets of a prepared statement execution need to be fetched completely before executing another prepared statement on the same connection.

Fixing the issue can be accomplished by using the <a href="http://php.net/manual/en/mysqli-stmt.store-result.php">store result</a> call. Here is an example of what I initially was trying to do:

```
<?php
  $db_connection = new mysqli('127.0.0.1', 'user', '', 'test');
  $post_stmt = $db_connection->prepare("select id, title from post where id = 1000");
  $comment_stmt = $db_connection->prepare("select user_id from comment where post_id = ?");
  if ($post_stmt->execute())
  {
    $post_stmt->bind_result($post_id, $post_title);
    if ($post_stmt->fetch())
    {
      $comments = array();
      $comment_stmt->bind_param('i', $post_id);
      if ($comment_stmt->execute())
      {
        $comment_stmt->bind_result($user_id);
        while ($comment_stmt->fetch())
        {
          array_push($comments, array('user_id' => $user_id));
        }
      }
      else
      {
        printf("Comment statement error: %s\n", $comment_stmt->error);
      }
    }
  }
  else
  {
    printf("Post statement error: %s\n", $post_stmt->error);
  }
  $post_stmt->close();
  $comment_stmt->close();
  $db_connection->close();
  printf("ID: %d -> %s\n", $post_id, $post_title);
  print_r($comments);
?>
```

The above will result in the following error:

```
Comment statement error: Commands out of sync; you can't run this command now
PHP Notice:  Undefined variable: post_title in error.php on line 41
ID: 9033 ->
Array
(
)
```

Here is what needs to be done to make it work correctly:

```
<?php
  $db_connection = new mysqli('127.0.0.1', 'user', '', 'test');
  $post_stmt = $db_connection->prepare("select id, title from post where id = 1000");
  $comment_stmt = $db_connection->prepare("select user_id from comment where post_id = ?");
  if ($post_stmt->execute())
  {
    $post_stmt->store_result();
    $post_stmt->bind_result($post_id, $post_title);
    if ($post_stmt->fetch())
    {
      $comments = array();
      $comment_stmt->bind_param('i', $post_id);
      if ($comment_stmt->execute())
      {
        $comment_stmt->bind_result($user_id);
        while ($comment_stmt->fetch())
        {
          array_push($comments, array('user_id' => $user_id));
        }
      }
      else
      {
        printf("Comment statement error: %s\n", $comment_stmt->error);
      }
    }
    $post_stmt->free_result();
  }
  else
  {
    printf("Post statement error: %s\n", $post_stmt->error);
  }
  $post_stmt->close();
  $comment_stmt->close();
  $db_connection->close();
  printf("ID: %d -> %s\n", $post_id, $post_title);
  print_r($comments);
?>
```

A couple things to note about the above example:

<ul>
  <li>The bind and fetch on the statement still works correctly.</li>
  <li>Make sure the results are freed when the processing is done.</li>
</ul>
