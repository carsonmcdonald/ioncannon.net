---
layout: archive
status: publish
published: true
title: FreeRADIUS with Oracle
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 136
wordpress_url: http://www.ioncannon.net/?p=136
date: '2008-07-07 07:41:51 -0400'
date_gmt: '2008-07-07 12:41:51 -0400'
categories:
- system administration
tags:
- linux
- Oracle
- radius
comments:
- id: 84748
  author: Ales
  author_email: ales.jagodnik@telsima.com
  author_url: ''
  date: '2008-07-24 07:28:24 -0400'
  date_gmt: '2008-07-24 12:28:24 -0400'
  content: "2.0.5 freeradius\r\n\r\ninstead of\r\nINSERT INTO radusergroup VALUES(radusergroup_seq.NEXTVAL,
    'dynamic', 'fredf');\r\n\r\nit should be\r\nINSERT INTO radusergroup VALUES(radusergroup_seq.NEXTVAL,
    'fredf', 'dynamic');\r\n\r\nthe order is just different"
- id: 93734
  author: alxgomz
  author_email: alxgomz@gmail.com
  author_url: ''
  date: '2008-08-29 15:36:06 -0400'
  date_gmt: '2008-08-29 20:36:06 -0400'
  content: "I am trying to compile freeradius  2.0.5 with oracle support (instantclient_11_1)
    but it fails when doing make:\r\n\r\ngcc -shared  .libs/sql_oracle.o  -L/opt/oracle/instantclient_11_1/
    -lm -lclntsh  -Wl,-soname -Wl,rlm_sql_oracle-2.0.5.so -o .libs/rlm_sql_oracle-2.0.5.so\r\n/usr/bin/ld:
    cannot find -lclntsh\r\ncollect2: ld returned 1 exit status\r\n\r\nDo you have
    any clue?\r\n\r\nP.S: Sorry, I know it's not a forum, but the doc is so poor about
    compiling freeradius with oracle support"
- id: 228263
  author: Nicolas Mosso
  author_email: nmosso@gmail.com
  author_url: ''
  date: '2012-01-03 14:55:44 -0500'
  date_gmt: '2012-01-03 19:55:44 -0500'
  content: "Thanks a lot for this guide.\r\nI'm also use this (http://wiki.freeradius.org/Rlm_sql_oracle)
    and a lot of patience, and works for me.\r\nI'm using radius 2.1.12 and oracle
    instant client 11.2"
---

I recently needed to find a RADIUS server for use in a project where I could stick profile data into Oracle. I remembered seeing <a href="http://freeradius.org/">FreeRADIUS</a> a while back so I checked to see if it was active and supported Oracle. Sure enough it did. It was a little tricky to set up because some of the documentation is out of sync with the latest version so here is what you need to know to get it working.

I'm using FreeRADIUS version 2.0.3 so some of these issues may be fixed down the road. The first thing you should do is compile FreeRADIUS and get it working using the normal users file. After you have done that and successfully tested queries to the server you can recompile to build Oracle in. 

I used the <a href="http://www.oracle.com/technology/tech/oci/instantclient/instantclient.html">Oracle Instant client</a> again. I've used the Oracle instant client a number of times now and I can't believe it took them so long to release their SDK in this type of paired down package.

This should be all you need to add to the configure command to enable the Oracle driver:

```
./configure --with-oracle-home-dir=
<path to oracle instant client>
```

However that didn't work for me. Instead I had to go into the RLM Oracle driver directory and run the configure command from there:

```
cd freeradius-server-2.0.3/src/modules/rlm_sql/drivers/rlm_sql_oracle
ORACLE_HOME=
<path to oracle instant client> CFLAGS=-I
<path to oracle instant client>/sdk/include/ LDFLAGS=-L
<path to oracle instant client> ./configure
```

This created the Makefile but then that still wasn't correct. I had to modify the includes and libraries so they matched the correct location:

```
RLM_SQL_CFLAGS =    $(INCLTDL) -I
<path to oracle instant client>/sdk/include/
RLM_SQL_LIBS   =  -L
<path to oracle instant client> -lclntsh -lm
```

After making these changes I could then do a make and make install. You can verify that the module is installed by looking for the module file named rlm_sql_oracle.a in your lib directory (in my case /usr/local/lib/). After you have verified that the module is compiled and in place you are ready to move on to the configuration.

The first thing to do is load the provided Oracle schema. That schema can be found in: freeradius-server-2.0.3/raddb/sql/oracle

Next read over the <a href="http://wiki.freeradius.org/Rlm_sql">RLM SQL configuration</a> information to get a general idea of what is going on in the configuration files and how FreeRADIUS uses the queries to find the correct information for a given request. 

The following steps are needed to configure the Oracle access and have FreeRADIUS use that configuration for data (I assume that you have installed with a base of /usr/local):


1. Edit /usr/local/etc/raddb/sql.conf set database = "oracle", set the server, login, password, and radius_db values. The following is an example of the connection information needed:
    ```
    # Connection info:
    server = "127.0.0.1"
    login = "username"
    password = "password"

    # Database table configuration for everything except Oracle
    #radius_db = "radius"
    # If you are using Oracle then use this instead
    radius_db = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521))(CONNECT_DATA=(SID=MYDB01)))"
    ```

2. Search for the following and uncomment the SQL load line in the file /usr/local/etc/raddb/sites-enabled/default as follows:
    ```
      # See "Authorization Queries" in sql.conf
      sql
    ```

    Note: This is something that I didn't find in the documentation. I believe that is due to the documentation being for an older version and this being a new requirement.

3. Load sample data into the database:
    ```
    insert into radusergroup values(radusergroup_seq.nextval, 'dynamic', 'fredf');
    insert into radcheck values(radcheck_seq.nextval, 'fredf', 'Cleartext-Password', ':=', 'wilma');
    insert into radreply values(radreply_seq.nextval, 'fredf', 'Framed-IP-Address', ':=', '1.2.3.4');
    insert into radgroupreply values(radgroupreply_seq.nextval, 'dynamic', 'Framed-Compression', ':=', 'Van-Jacobsen-TCP-IP');
    ```
4. Start the daemon in debug mode:

    ```
    radius -X
    ```

    If you don't have the oracle libraries in your path you will need to start radius with the correct LD path entry like this:

    ```
    LD_LIBRARY_PATH=
    <path to oracle instant client> radiusd -X
    ```

5. Send a test query:
    ```
    radtest fredf wilma localhost 0 radpassword
    ```

    On the console for radius -X you will see debug and you should receive a valid response from the test that looks like this:

    ```
    User-Name = "fredf"
    User-Password = "wilma"
    NAS-IP-Address = 127.0.0.1
    NAS-Port = 0
    Framed-IP-Address = 1.2.3.4
    ```

At this point you are ready to load your data into FreeRADIUS via Oracle.

Other Notes:

Depending on how large your configuration values are the provided schema may not give you enough room to store everything. You may need to alter the tables to increase the space available for values like this:

```
alter table radreply modify value varchar(128);
```

