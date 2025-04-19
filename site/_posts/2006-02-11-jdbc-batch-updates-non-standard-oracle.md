---
layout: archive
status: publish
published: true
title: JDBC + Batch updates + Non-Standard == Oracle
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 52
wordpress_url: http://www.ioncannon.net/uncategorized/52/jdbc-batch-updates-non-standard-oracle/
date: '2006-02-11 19:21:02 -0500'
date_gmt: '2006-02-11 23:21:02 -0500'
categories:
- java
tags: []
comments: []
---
I recently ran into an issue where doing a large number of inserts and updates in an Oracle 8i database was taking forever. I was already using a prepared statement and commiting only after a certain number of rows. After some digging I found out that there is a special Oracle way of doing batch updates that made things a good bit faster. They do support the normal addBatch batch updates but it isn't as fast as using their special way. 


Here is an example of how to do things their way:


```
public static void doBatchInsert(List aLargeList, Connection connection) throws SQLException
{
  // You have to turn auto commit off, if you are doing a large set of inserts and updates you are probably doing this already.
  connection.setAutoCommit(false);
  PreparedStatement preparedStatement = connection.prepareStatement("insert into a_table(a_col) values (?)");
  // This is the magic. Set the number of statements to allow in one batch
  ((OraclePreparedStatement)ps).setExecuteBatch (10);
  int count = 0;
  for(Iterator i=aLargeList.iterator(); i.hasNext(); count++)
  {
    YourData yourData = (YourData)i.next();
    preparedStatement.setInt(1, yourData.getAnInt());
    preparedStatement.executeUpdate();
    if(count % 10 == 0)
    {
      // Send all currently queued statements
      ((OraclePreparedStatement)preparedStatement).sendBatch();
      connection.commit();
    }
  }
  ((OraclePreparedStatement)preparedStatement).sendBatch();
  connection.commit();
  preapredStatement.close();
}
```


For more information see the following link:
<a href="http://www.oracle.com/technology/products/oracle9i/daily/jun07.html">http://www.oracle.com/technology/products/oracle9i/daily/jun07.html</a>



