---
layout: archive
status: publish
published: true
title: Ruby Oracle DBI ActiveRecord in 7 steps
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 41
wordpress_url: http://www.ioncannon.net/uncategorized/41/ruby-oracle-dbi-activerecord-in-7-steps/
date: '2006-03-23 00:35:26 -0500'
date_gmt: '2006-03-23 05:35:26 -0500'
categories:
- programming
tags:
- ruby
- Oracle
- DBI
- ActiveRecord
comments: []
---

Setting up ruby to work with Oracle seems to be a pain for a lot of people. Here are the steps I follow to set it up on a linux box from nothing to Active Record or DBI in 7 steps.

1. Gather the installation sources you will need. You have to be registered with oracle to get their instant client packages.
    Download the <a href="http://www.jiubao.org/ruby-oci8/">ruby oci8 drivers</a> 

    Download the <a href="http://www.oracle.com/technology/software/tech/oci/instantclient/htdocs/linuxsoft.html">oracle instant client</a> 

    You want the following packages (these examples assume the zip format): 

      - Instant Client Package - Basic or Instant Client Package - Basic Lite
      - Instant Client Package - SDK
      - Instant Client Package - SQL*Plus (optional but nice to have)

2. Install oracle instant client packages 

    I unzip them in the /opt directory and assume that for the examples. It doesn't matter where you put them as long as you know where they are. 

    The zip packages have one problem that needs to be solved after they are expanded. You must create a symlink in the install directory for a shared library: ln -s libclntsh.so.10.1 libclntsh.so

3. Set up the oracle environment: 

    I created a script called oracleenv.sh with the following lines in it: 

    ```
        export ORACLE_HOME=/opt/instantclient_10_2/
        export LD_LIBRARY_PATH=/opt/instantclient_10_2/
        export PATH=/opt/instantclient_10_2/:$PATH
        export SQLPATH=/opt/instantclient_10_2/
        export TNS_ADMIN=/etc/
    ```
    and then I source it when I want to use something oracle related  '. oracleenv.sh'. You may want to just put it in your profile. 

    You also need to create a /etc/tnsnames.ora file. This can be tricky. The best option is probably to ask your DBA to create it for you. Here is an example: 

    ```
    DEVDB.WORLD =
      (DESCRIPTION =
        (ADDRESS_LIST =
            (ADDRESS =
              (COMMUNITY = tcp.world )
              (PROTOCOL = TCP)
              (Host = 192.168.1.125)
              (Port = 1546)
            )
        )
        (CONNECT_DATA = (SID = DEVDB)
        )
      )
    ```
    The main thing you need for ruby later is the SID. At this point you may want to try to use sqlplus to see if you can connect to the database. 
4. Build the ruby oci8 package
    ```
      # untar
      ruby setup.rb config -- --with-instant-client=/opt/instantclient_10_2/
      make
      make install
    ```
5. Give the low level API a test 
    ```
    ruby -r oci8 -e "OCI8.new('username', 'password', 'DEVDB.WORLD').exec('select sysdate from dual') do |r| puts r.join(','); end"
    ```
    Here you provide the username, password and tns name. If this returns the current date and time then the driver is installed correctly.
6. Install DBI 

    download the <a href="http://rubyforge.org/projects/ruby-dbi/">dbi tar file</a> 

    The current version is: dbi-0.1.0.tar.gz 

    untar the archive 

    configure it (for this example only dbi itself is included): ruby setup.rb config &#8211;with=dbi 

    build: ruby setup.rb setup 

    install: ruby setup.rb install 

    test: 

    ```
    require 'dbi'
    dbh = DBI.connect('DBI:OCI8:DEVDB.WORLD', 'username', 'password')
    dbh.select_all('select sysdate from dual') do | row |
      p row
    end
    dbh.disconnect
    ```
    If this returns the current date and time then DBI is installed correctly.
7. Install ActiveRecord 

    I use gem to install active record: gem install activerecord  

    After installing you should be able to use active record. Here is an example use:
    ```
    require 'rubygems'
    require 'active_record'

    ActiveRecord::Base.establish_connection(
        :adapter => "oci",
        :username => "username",
        :password => "password",
        :host => "DEVDB.WORLD")

    class TestTable < ActiveRecord::Base
      set_table_name "test_table"
      set_primary_key "some_id"
    end
    TestTable.find(:all).each do |tt|
      p tt
    end
    nac = TestTable.new()
    nac.id = 1001
    nac.some_column = "test"
    nac.save()
    ```

One thing I learned that is someone confusing is that active record turns your primary key into a variable named 'id'. So if you don't use auto generated primary keys for some reason you can't just assign the primary key based on the name of the column as you can any other column in the table. Instead you need to use the id field of the model.

For more information check out the following links:

  - Info on <a href="http://www.oracle.com/technology/docs/tech/sql_plus/10103/readme_ic.htm">oracle's instant client</a>
  - Info on <a href="http://www.kitebird.com/articles/ruby-dbi.html">using dbi</a>
  - Info on <a href="http://ruby-dbi.rubyforge.org/">dbi</a>
  - Info on <a href="http://wiki.rubyonrails.org/rails/pages/Oracle">rails with oracle</a>



