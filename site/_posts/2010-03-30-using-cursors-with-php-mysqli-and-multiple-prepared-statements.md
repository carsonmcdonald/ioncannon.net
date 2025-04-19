---
layout: archive
status: publish
published: true
title: Using Cursors with PHP MySQLi and Multiple Prepared Statements
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 998
wordpress_url: http://www.ioncannon.net/?p=998
date: '2010-03-30 06:37:41 -0400'
date_gmt: '2010-03-30 11:37:41 -0400'
categories:
- programming
tags:
- php
- mysql
- mysqli
- cursor
comments: []
---

After my post on <a href="http://www.ioncannon.net/programming/889/php-mysqli-and-multiple-prepared-statements/">using PHP MySQLi and multiple prepared statements at the same time</a> someone commented that using <a href="http://dev.mysql.com/doc/refman/5.5/en/cursors.html">cursors</a> could do the same thing. With that comment I dug some more and found that modifying the cursor type that is used under the covers will indeed let you execute multiple prepared statements concurrently on the same connection.


First off you may ask yourself why you would want to use this. The best answer I have for that is that the solution in the other post loads the entire result set into memory from the very start while with this solution you can control just how many rows you load. To get started you will want to take a look at the <a href="http://php.net/manual/en/mysqli-stmt.attr-set.php">MySQLi statement set attribute</a> call. This call is will let you modify the underlying cursor type that is used with the prepared statement in two ways that are useful for this issue.


The MYSQLI_STMT_ATTR_CURSOR_TYPE attribute controls the type of cursor used for the results from the prepared statement. The default option is MYSQLI_CURSOR_TYPE_NO_CURSOR  which results in no cursor being used at all. The only other option is MYSQLI_CURSOR_TYPE_READ_ONLY and this is the one you will want to use.


The MYSQLI_STMT_ATTR_PREFETCH_ROWS attribute controls the number of rows that are fetched under the covers from the server as more data is needed. The default for this attribute is 1 which means that each fetch of the row causes a round trip to the server. Larger numbers for this attribute will cause more memory to be used to store the resulting rows but fewer round trips to the server. This is the attribute that gives this option more flexibility.


The following is a slightly modified example that was used in the previous post now using both the MYSQLI_STMT_ATTR_CURSOR_TYPE and MYSQLI_STMT_ATTR_PREFETCH_ROWS attributes to efficiently retrieve rows from two different prepared statements at the same time:


```
<?php
  $db_connection = new mysqli('127.0.0.1', 'user', '', 'test');
  $post_stmt = $db_connection->prepare("select id, title from post where id between 10000 and 10999");
  $post_stmt->attr_set(MYSQLI_STMT_ATTR_CURSOR_TYPE, MYSQLI_CURSOR_TYPE_READ_ONLY);
  $post_stmt->attr_set(MYSQLI_STMT_ATTR_PREFETCH_ROWS, 100);
  $comment_stmt = $db_connection->prepare("select user_id from comment where post_id = ?");
  if ($post_stmt->execute())
  {
    $post_stmt->bind_result($post_id, $post_title);
    while ($post_stmt->fetch())
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
      printf("ID: %d -> %s\n", $post_id, $post_title);
      print_r($comments);
    }
  }
  else
  {
    printf("Post statement error: %s\n", $post_stmt->error);
  }
  $post_stmt->close();
  $comment_stmt->close();
  $db_connection->close();
?>
```
