---
layout: archive
status: publish
published: true
title: How to build the PHP rrdtool extension by hand
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 25
wordpress_url: http://www.ioncannon.net/uncategorized/25/how-to-build-the-php-rrdtool-extension-by-hand/
date: '2006-05-09 12:17:28 -0400'
date_gmt: '2006-05-09 16:17:28 -0400'
categories:
- system administration
- php
- linux
tags: []
comments:
- id: 15
  author: IONCANNON &raquo; PHP RRDTool tutorial
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/59/php-rrdtool-tutorial/
  date: '2006-07-18 18:04:03 -0400'
  date_gmt: '2006-07-18 22:04:03 -0400'
  content: "[...] You need to have PHP compiled with RRDTool support to run the following
    PHP examples. If you compile PHP by hand then see: how to build the php rrdtool
    extension by hand. If you are using a distribution's pre-compiled PHP binary
    you should be able to install a second package with RRDTool support. You can verify
    that your PHP install is ready to go by running this:  <?php phpinfo&#40;INFO_MODULES&#41;;
    ?> [...]"
- id: 624
  author: Scott
  author_email: jshowe@liberty.edu
  author_url: http://Internal
  date: '2006-11-22 16:34:18 -0500'
  date_gmt: '2006-11-22 20:34:18 -0500'
  content: "Hi,\r\nI am trying to following your instructions (thank you btw) and
    while everything compiles I am not seeing any mention of rrdtool during the make/install.
    \ I rebuild the config file but when I run the ./configure I don't see it.  Below
    is autoconf and the configure I am using.  Do you have any idea what the problem
    could be?\r\n\r\n[root@localhost php-5.2.0]# PHP_AUTOCONF=autoconf ./buildconf
    --force\r\nForcing buildconf\r\nusing default Zend directory\r\nbuildconf: checking
    installation...\r\nbuildconf: autoconf version 2.59 (ok)\r\nbuildconf: Your version
    of autoconf likely contains buggy cache code.\r\n           Running cvsclean for
    you.\r\n           To avoid this, install autoconf-2.13.\r\nrebuilding configure\r\naclocal.m4:2056:
    PHP_PROG_LEX is expanded from...\r\nrebuilding main/php_config.h.in\r\nautoheader:
    WARNING: Using auxiliary files such as `acconfig.h', `config.h.bot'\r\nautoheader:
    WARNING: and `config.h.top', to define templates for `config.h.in'\r\nautoheader:
    WARNING: is deprecated and discouraged.\r\nautoheader: \r\nautoheader: WARNING:
    Using the third argument of `AC_DEFINE' and\r\nautoheader: WARNING: `AC_DEFINE_UNQUOTED'
    allows to define a template without\r\nautoheader: WARNING: `acconfig.h':\r\nautoheader:
    \r\nautoheader: WARNING:   AC_DEFINE([NEED_FUNC_MAIN], 1,\r\nautoheader:             [Define
    if a function `main' is needed.])\r\nautoheader: \r\nautoheader: WARNING: More
    sophisticated templates can also be produced, see the\r\nautoheader: WARNING:
    documentation.\r\naclocal.m4:2056: PHP_PROG_LEX is expanded from...\r\n\r\n\r\n[root@localhost
    php-5.2.0]# ./configure '--prefix=/usr/local/groundwork' '--exec-prefix=/usr/local/groundwork'
    '--with-config-file-path=/usr/local/groundwork/etc' '--libdir=/usr/local/groundwork/lib'
    '--with-libdir=lib' '--with-apxs2=/usr/local/groundwork/apache2/bin/apxs' '--enable-force-cgi-redirect'
    '--with-mod_charset' '--enable-safe-mode' '--enable-shared' '--with-ldap=/usr/local/groundwork'
    '--with-layout=GNU' '--enable-libxml' '--with-libxml-dir=/usr/local/groundwork'
    '--enable-spl' '--with-regex=php' '--disable-ipv6' '--enable-session' '--with-openssl=/usr/local/groundwork'
    '--with-jpeg=/usr/local/groundwork' '--with-png=/usr/local/groundwork' '--with-zlib=/usr/local/groundwork'
    '--with-gd=/usr\r\n/local/groundwork' '--enable-calendar' '--with-mnogosearch=/usr/local/groundwork'
    '--with-mysql=/usr' '--enable-ctype' '--with-freetype' '--enable-soap' '--with-rrdtool'\r\n\r\nThank
    you, so much for the help!\r\n-Scott"
- id: 672
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2006-11-27 09:26:43 -0500'
  date_gmt: '2006-11-27 13:26:43 -0500'
  content: You should double check that you removed your configuration file before
    you ran the buildconf.
- id: 703
  author: Vern Dias
  author_email: tvdias@verizon.net
  author_url: ''
  date: '2006-11-29 18:35:06 -0500'
  date_gmt: '2006-11-29 22:35:06 -0500'
  content: "Trying to build on PHP 5.2.0 and getting the following:\r\n\r\n./buildconf
    --force\r\nForcing buildconf\r\nusing default Zend directory\r\nbuildconf: checking
    installation...\r\nbuildconf: autoconf version 2.60 (ok)\r\nbuildconf: Your version
    of autoconf likely contains buggy cache code.\r\n           Running cvsclean for
    you.\r\n           To avoid this, install autoconf-2.13.\r\nmake: Fatal error
    in reader: build/build2.mk, line 31: Badly formed macro assignment\r\nCurrent
    working directory /usr/local/nms/Source/php-5.2.0\r\n*** Error code 1\r\nThe following
    command caused the error:\r\nmake -s -f build/build2.mk\r\nmake: Fatal error:
    Command failed for target `all'\r\n\r\nAnyone have any ideas?\r\n\r\nThanks, Vern"
- id: 713
  author: Vern Dias
  author_email: tvdias@verizon.net
  author_url: ''
  date: '2006-11-29 21:14:33 -0500'
  date_gmt: '2006-11-30 01:14:33 -0500'
  content: "OK, ignore the previous post.  After installing autoconf 2.13, I got past
    this issue .....\r\n\r\nRight into another issue.  Apparently this code is not
    compatible with the newer versions of RRDTOOL.\r\n\r\n/usr/local/nms/Source/php-5.2.0/ext/rrdtool/rrdtool.c:347:
    error: too few arguments to function `rrd_graph'\r\nmake: *** [ext/rrdtool/rrdtool.lo]
    Error 1\r\n\r\nThe statement in question is passing 5 arguments:\r\n\r\nif ( rrd_graph(argc-1,
    &argv[1], &calcpr, &xsize, &ysize) != -1 )\r\n\r\nrrd:graph is
    now looking for 8 arguments.\r\n\r\nint    rrd_graph(int, char **, char ***, int
    *, int *, FILE *, double *, double *);\r\n\r\nNot really being a coder, I am at
    a loss as to how to fix this.\r\n\r\nVern"
- id: 766
  author: Scott
  author_email: jshowe@liberty.edu
  author_url: http://internal
  date: '2006-12-04 22:34:01 -0500'
  date_gmt: '2006-12-05 02:34:01 -0500'
  content: Well I got it working... For some reason with any other version of AUTOCONF
    (even newer versions) it will not configure correctly.  I had to uninstall the
    autoconf rpm and compile 2.13 from source to get it to work.  Once I did that
    your instructions were perfect!  Thanks for these tips.
- id: 812
  author: Mark
  author_email: mark.duling@biola.edu
  author_url: ''
  date: '2006-12-09 07:02:46 -0500'
  date_gmt: '2006-12-09 11:02:46 -0500'
  content: "For rrdtool versions 1.2.x, use the CFLAG:\r\n\r\nCFLAGS=-DHAVE_RRD_12X\r\n\r\nIt
    worked for my using rrdtool 1.2.15 and php 5.2.0."
- id: 4961
  author: kotto bass
  author_email: kotto_bass@yahoo.com
  author_url: ''
  date: '2007-03-08 13:28:45 -0500'
  date_gmt: '2007-03-08 18:28:45 -0500'
  content: "System: Red Hat Enterprise Linux ES release 4\r\nApache: 2.2.3\r\nPHP:
    5.2.1 from source\r\nImageMagick: 6.3.3\r\n\r\nSince I didn't want to recompile
    PHP, and also didn't want to downgrade autoconf to 2.13, here's my route:\r\n\r\n-
    Download and untar MagicWand\r\n- In MagicWand directory, run phpize\r\nNote:
    Mine is located at /usr/local/apache/php/bin/phpize\r\n- Type autoconf\r\n- Type
    ./configure with options. \r\nNote: I had to specify location of PHP config file,
    and directory of ImageMagick install, so I entered: ./configure --with-php-config=/usr/local/apache/php/bin/php-config
    --with-magickwand=/usr \r\n- Type make\r\nNote: Make creates magickwand.so in
    the modules subfolder. \r\n- Copy magickwand.so to your php modules directory
    from the MagickWand modules subdirectory.\r\nNote: My PHP modules directory is
    located at /usr/lib/php/modules/\r\n- Add 'extension=magickwand.so' to your php.ini
    file if it's not there already.\r\n- Restart Apache"
- id: 20707
  author: bitto
  author_email: harbito@yahoo.com
  author_url: ''
  date: '2007-06-12 04:16:54 -0400'
  date_gmt: '2007-06-12 09:16:54 -0400'
  content: "I am running PHP server in windows environment.\r\nMaybe this is a stupid
    question: 'is there any bin source of PHP RRDtool for Windows platform?'"
- id: 21709
  author: DaiBach
  author_email: crazydave@youmuppet.com
  author_url: http://youmuppet.com
  date: '2007-06-20 05:34:25 -0400'
  date_gmt: '2007-06-20 10:34:25 -0400'
  content: "Hey Bitto, I'm after a Windows version of the extension too.  Chris of
    SiteBuddy.com has tried to give it a go\r\n\r\nhttp://www.sitebuddy.com/php/rrdtool_extension_windows_binaries"
- id: 23240
  author: S&Atilde;&copy;bastien Cramatte
  author_email: scramatte@zensoluciones.com
  author_url: http://www.zensoluciones.com
  date: '2007-07-03 17:59:56 -0400'
  date_gmt: '2007-07-03 22:59:56 -0400'
  content: "For impatient and perfectionist It possible to build a clean php rrdtool
    debian package in 5mn ...\r\n\r\nFirst you should use www.dotdeb.org php5 packages
    that are always up to date ...\r\n\r\nWith the help of this little magic script
    \ \r\nhttp://svn.dotdeb.org/debianize/\r\n\r\nYou can build your extension ...\r\nThis
    script requires php5-dev, deb-helper, build-essential package and of course the
    \r\nphp-rrdtool source (http://ftp.idilis.ro/mirrors/rrdtool/contrib/php_rrdtool.tgz\r\n)\r\n\r\n/usr/src#apt-get
    install php5-dev deb-helper build-essential librrd2-dev \r\n/usr/src#wget http://ftp.idilis.ro/mirrors/rrdtool/contrib/php_rrdtool.tgz\r\n/usr/src#tar-xvzf
    php_rrdtool.tgz\r\n/usr/src#./debianize5 rrdtool \r\n...\r\n\r\nCreating php5-rrdtool...\r\n
    \  PHP version : 5.2.3-0.dotdeb.1\r\n   PHP Api : 20041225\r\n\r\nConfiguring
    for:\r\nPHP Api Version:         20041225\r\nZend Module Api No:      20060613\r\nZend
    Extension Api No:   220060519\r\ndh_testdir\r\n...\r\ndpkg-deb: building package
    `php5-rrdtool' in `../php5-rrdtool_5.2.3-0.dotdeb.1_amd64.deb'.\r\n\r\n\r\nNice
    ;)\r\nHope that will be useful ..."
- id: 142660
  author: setiawan
  author_email: setiawans@gmail.com
  author_url: ''
  date: '2009-06-28 00:25:37 -0400'
  date_gmt: '2009-06-28 05:25:37 -0400'
  content: "@S&Atilde;&copy;bastien Cramatte\r\n\r\nThe correct package name of deb-helper
    it should be written as debhelper (i have tried by using Debian Etch), and also
    i have been followed your post and it works properly..thanks.."
- id: 146239
  author: RRDTool bindings for php5 in Ubuntu
  author_email: ''
  author_url: http://slacy.com/blog/2009/08/rrdtool-bindings-for-php5-in-ubuntu/
  date: '2009-08-12 00:38:52 -0400'
  date_gmt: '2009-08-12 05:38:52 -0400'
  content: "[...] others are talking about compiling it from source, but this seems
    very wrong and unnecessary to [...]"
- id: 154912
  author: patrick oleary
  author_email: pjaol@pjaol.com
  author_url: http://www.nsshutdown.com/
  date: '2009-10-18 14:41:54 -0400'
  date_gmt: '2009-10-18 19:41:54 -0400'
  content: "Much easier to compile if you use phpize\r\n\r\ncd rrdtool-php/\r\nphpize\r\n./configure
    --enable-rrdtool\r\nmake\r\nmake install\r\n\r\necho \"extension=rrdtool.so\"
    >> /etc/php.ini \r\n\r\nrestart your web server or continue with command line."
- id: 183589
  author: JAMES JARA
  author_email: jamesjara@gmail.com
  author_url: http://www.google.co.cr/search?q=james+jara
  date: '2010-09-23 16:50:32 -0400'
  date_gmt: '2010-09-23 21:50:32 -0400'
  content: "Hi! i am using this\r\nQuick Install of the PHP RRDTool Extension\r\n==========================================\r\n\r\nPHP
    version    : 5.2.1\r\nApache version : 2.x\r\n\r\nThis extension is build for
    PHP 5.2.1 as downloadable from the PHP site,\r\nand will probably not work with
    other versions!\r\nAlso it is recommended that you download the complete RRDTool
    package\r\nfor further documentation:\r\nhttp://oss.oetiker.ch/rrdtool/\r\n\r\n\r\ncan
    you help me to work with  PHP 5.3.3  i cant found any info about it"
---
I think by now most sysadmin types know about <a href="http://oss.oetiker.ch/rrdtool/">rrdtool</a> and the nice graphs it makes. I recently wanted to create some graphs by hand using PHP so I turned to the php-rrdtool extension. I found that it takes a little work to get it to compile but that could be because I'm not constantly recompiling PHP and just don't know better. You can get this module as an rpm for fedora (php-rrdtool) but I like to compile php by hand so I couldn't use it. I'm going to assume that you know how to compile PHP normally with whatever other items you want to include and that you have the rrdtool development libraries installed or have compiled and installed rrdtool from source.


<h3>Step 1. Get the PHP rrdtool source</h3>
Go to the contrib directory on the rrdtool distribution site:
<a href="http://people.ee.ethz.ch/~oetiker/webtools/rrdtool/pub/contrib/">http://people.ee.ethz.ch/~oetiker/webtools/rrdtool/pub/contrib/</a>

There are a number of files in this directory that mention rrd. You want the one named: <a href="http://people.ee.ethz.ch/~oetiker/webtools/rrdtool/pub/contrib/php_rrdtool.tgz">php_rrdtool.tgz</a> <br>

<a></a>

<h3>Step 2. Untar into the correct place</h3>
Now that you have the source go into your php source directory and then into the ext directory. So you will be somewhere like this:

/usr/local/src/php-5.1.3/ext/

Now untar the source into this directory.

<h3>Step 3. Recreate the php configuration file</h3>
There is a warning that you will get if you do not have autoconf 2.13 installed on your system when you try to do this. It is easy enough to get this version if you have fedora so that is what I did. 

One tricky part to this is that I had to remove the old configuration file first before the new one could be created.

<ol>
<li>Change directory to your PHP source, if you are still in the ext directory just cd ..</li>
<li>Remove the existing configuration file</li>
<li>If you are using autoconf 2.13 run the following command: <br> PHP_AUTOCONF=autoconf-2.13 ./buildconf &#8211;force<br> If you are using whatever other autoconf you have installed just run: <br> ./buildconf &#8211;force</li>
<li>You should now have a new configuration file that can be run with the &#8211;with-rrdtool option</li>
</ol>
<h3>Step 4. Test</h3>
After compiling with rrdtool you should be able to use the phpinfo() function to list the installed extensions. If everything went right you should see rrdtool listed.



