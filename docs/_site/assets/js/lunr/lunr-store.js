var store = [{
        "title": "JDBC + Batch updates + Non-Standard == Oracle",
        "excerpt":"I recently ran into an issue where doing a large number of inserts and updates in an Oracle 8i database was taking forever. I was already using a prepared statement and commiting only after a certain number of rows. After some digging I found out that there is a special...","categories": ["java"],
        "tags": [],
        "url": "/java/2006/02/11/jdbc-batch-updates-non-standard-oracle/",
        "teaser": null
      },{
        "title": "Fun with Oracle Strings",
        "excerpt":"Today I needed to find a way to count the number of unique email domains in a table. I figured there was a way of getting the index of a string in another string and sure enough there is. This did the trick in Oracle: select count(1), SUBSTR(email, INSTR(email, '@',...","categories": ["database administration"],
        "tags": ["Oracle"],
        "url": "/database%20administration/2006/02/14/fun-with-oracle-strings/",
        "teaser": null
      },{
        "title": "No javascript detection",
        "excerpt":"Have you ever wondered what you can do if someone doesn’t have javascript turned on and it is needed on the page they are sitting at? Well here is the answer: &lt;html&gt; &lt;head&gt; &lt;noscript&gt;&lt;meta http-equiv=\"refresh\" content=\"0; URL=nojscript.html\"/&gt;&lt;/noscript&gt; &lt;/head&gt; &lt;body&gt; A javascript test. &lt;/body&gt; &lt;/html&gt; If the user doesn’t have javascript...","categories": ["web design"],
        "tags": ["javascript"],
        "url": "/web%20design/2006/02/15/no-javascript-detection/",
        "teaser": null
      },{
        "title": "Smooth scrolling image list",
        "excerpt":"I had someone ask me about fitting more images in a small area and the way flickr does their image scrolling came to mind. I wanted to see how hard it was to do and as it turns out it isn’t hard to do at all thanks to script.aculo.us. I’m...","categories": ["programming"],
        "tags": ["javascript"],
        "url": "/programming/2006/02/16/smooth-scrolling-image-list/",
        "teaser": null
      },{
        "title": "GIS Geocoding experiments",
        "excerpt":"I’ve been evaluating a couple different mapping software packages recently and the other day I noticed that the same addresses geocoded (for those who don’t know what geocoding is you can find out more about it here) to different locations. They are mostly the same but I figured it was...","categories": ["gis"],
        "tags": [],
        "url": "/gis/2006/03/09/gis-geocoding-experiments/",
        "teaser": null
      },{
        "title": "Credit card type and luhn check in ruby",
        "excerpt":"I was looking at implementing a luhn and credit card type check the other day in java and I noticed that there seems to be a lack of code for doing this in ruby. So I figured I would put something together for doing the checks in ruby. The following...","categories": ["ruby"],
        "tags": [],
        "url": "/ruby/2006/03/15/credit-card-type-and-luhn-check-in-ruby/",
        "teaser": null
      },{
        "title": "Ruby Oracle DBI ActiveRecord in 7 steps",
        "excerpt":"Setting up ruby to work with Oracle seems to be a pain for a lot of people. Here are the steps I follow to set it up on a linux box from nothing to Active Record or DBI in 7 steps. Gather the installation sources you will need. You have...","categories": ["programming"],
        "tags": ["ruby","Oracle","DBI","ActiveRecord"],
        "url": "/programming/2006/03/23/ruby-oracle-dbi-activerecord-in-7-steps/",
        "teaser": null
      },{
        "title": "AJAX file upload progress for Java using commons fileupload and prototype",
        "excerpt":"This has been done before with PHP (AJAX upload progress meter for PHP) etc but I needed something a little different because I wanted to upload a file and then have it loaded into a database. I looked around and found that someone had already made something that used the...","categories": ["programming"],
        "tags": ["ajax","javascript","java"],
        "url": "/programming/2006/04/02/ajax-file-upload-progress-for-java-using-commons-fileupload-and-prototype/",
        "teaser": null
      },{
        "title": "Howto base64 encode with C/C++ and OpenSSL",
        "excerpt":"I’ve been doing a little C programming lately and I have found that if you have a up to date distribution of linux there are a lot of libraries out there that make doing things you do in other languages like java easier. As I have time I’m going to...","categories": ["programming"],
        "tags": ["C/C++","openssl","base64"],
        "url": "/programming/2006/04/11/howto-base64-encode-with-cc-and-openssl/",
        "teaser": null
      },{
        "title": "Using strptime to parse ISO 8601 formated timestamps",
        "excerpt":"A lot of dates that come back from XML based web services are in the ISO 8601 form. I found out recently that it isn’t straight forward to parse such a date using C functions and have the time come out in the correct timezone. It isn’t rocket science but...","categories": ["programming"],
        "tags": ["C/C++"],
        "url": "/programming/2006/04/15/using-strptime-to-parse-iso-8601-formated-timestamps/",
        "teaser": null
      },{
        "title": "Approximating a circle with a polygon",
        "excerpt":"I recently had an opportunity to use ESRI’s ArcSDE again. It is a spatial database interface and in this instance I was using the java api. I wanted to change what used to be a query using a rectangle into a query using a circle. For some reason parts of...","categories": ["gis"],
        "tags": [],
        "url": "/gis/2006/04/18/approximating-a-circle-with-a-polygon/",
        "teaser": null
      },{
        "title": "Good Techcrunch review of mapping apis",
        "excerpt":"Techcrunch has a good review by Frank Gruber of the look and feel of mapping services. I think it is notable that ESRI’s service is not included in the review. I think it is at least as good as the mapquest service. I may have to find time to redo...","categories": ["gis"],
        "tags": [],
        "url": "/gis/2006/04/18/good-techcrunch-review-of-mapping-apis/",
        "teaser": null
      },{
        "title": "Thread pooling with Java concurrency utilities new (java 1.5) and old (util.concurrent)",
        "excerpt":"Java Concurrency in Practice Threading in java is fairly easy and now with java 1.5 some of the stuff that was harder has become even easier. A few years ago someone pointed me to a site that had some concurrency utils that where the precursor to what are now the...","categories": ["java"],
        "tags": [],
        "url": "/java/2006/04/24/thread-pooling-with-java-concurrency-utilities-new-java-15-and-old-utilconcurrent/",
        "teaser": null
      },{
        "title": "Converting unix or java timestamps (time since the epoch) to real dates with Oracle",
        "excerpt":"A few days ago I made use of a couple Oracle built in functions and it made me happy I didn’t have to write a stored proc or some type of mini-app to do it. I needed to parse a timestamp out of a field that was put there by...","categories": ["database administration"],
        "tags": ["Oracle"],
        "url": "/database%20administration/2006/04/29/converting-unix-or-java-timestamps-time-since-the-epoch-to-real-dates-with-oracle/",
        "teaser": null
      },{
        "title": "How to build the PHP rrdtool extension by hand",
        "excerpt":"I think by now most sysadmin types know about rrdtool and the nice graphs it makes. I recently wanted to create some graphs by hand using PHP so I turned to the php-rrdtool extension. I found that it takes a little work to get it to compile but that could...","categories": ["system administration","php","linux"],
        "tags": [],
        "url": "/system%20administration/php/linux/2006/05/09/how-to-build-the-php-rrdtool-extension-by-hand/",
        "teaser": null
      },{
        "title": "Search Engine Optimization",
        "excerpt":"Recently I’ve been collecting links on interesting SEO topics. I figured I would dump a few of them out with quick reasons why I think they are good to read. A technical read on how search engines work in general. It focuses on google but has a lot of good...","categories": ["web design"],
        "tags": ["seo"],
        "url": "/web%20design/2006/05/10/search-engine-optimization/",
        "teaser": null
      },{
        "title": "Free geocoding",
        "excerpt":"I’ve had opertunities to work with a number of different GIS packages in the past (see my post comparing a few). Most of them are great but they all cost a lot of money to use. If you trying to get your feet wet and don’t want to spend money...","categories": ["gis"],
        "tags": [],
        "url": "/gis/2006/05/20/free-geocoding/",
        "teaser": null
      },{
        "title": "Creating S3 URLs that expire using PHP",
        "excerpt":"After reading this post on the S3 forum I realized that other people are thinking about doing some of the same stuff I have. paolonew was looking for a way to for a way to create URLs to S3 objects that expired. I did this a while back when I...","categories": ["programming"],
        "tags": ["php","s3"],
        "url": "/programming/2006/06/01/creating-s3-urls-that-expire-using-php/",
        "teaser": null
      },{
        "title": "Cleaning up stale rails sessions (removing ruby_sess files)",
        "excerpt":"I’m not sure if something isn’t set up correctly of if this is just a fact of life with rails but the sessions it creates never seem to go away. I think before rails 1.1 the sessions where stored in /tmp and now they are stored in the apps directory...","categories": ["system administration"],
        "tags": ["ruby","rails"],
        "url": "/system%20administration/2006/06/08/cleaning-up-stale-rails-sessions-removing-ruby_sess-files/",
        "teaser": null
      },{
        "title": "Upgrade FC4 to FC5 with yum",
        "excerpt":"I recently upgraded a bunch of FC4 (a few FC3) installs to FC5 using yum. It has been a long time since I’ve tried doing an OS upgrade like this because it used to be pretty painful. I was surprised at how easy it is to do now. There are...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2006/06/15/upgrade-fc4-to-fc5-with-yum/",
        "teaser": null
      },{
        "title": "Some interesting and useful AJAX/Javascript code",
        "excerpt":"I like seeing more and more uses of prototype. I’m not sure if the big guys will win out with their UI toolkits (Yahoo UI/GWT) or if it will always feel better to put things together by hand. Either way it is good to understand how this stuff works. This...","categories": ["web design"],
        "tags": ["ajax","javascript"],
        "url": "/web%20design/2006/06/23/some-interesting-and-useful-ajaxjavascript-code/",
        "teaser": null
      },{
        "title": "Wordpress 404 with lighttpd (lighty)",
        "excerpt":"If you are having a problem getting your wordpress 404 page to show up when using lighttpd you need to add the following to your lighttpd config file to tell it where to get 404 responses from: server.error-handler-404 = \"/index.php?error=404\" This assumes that your blog starts at the root directory....","categories": ["system administration"],
        "tags": [],
        "url": "/system%20administration/2006/06/26/wordpress-404-with-lighttpd-lighty/",
        "teaser": null
      },{
        "title": "Easier scrolling images with Yahoo UI",
        "excerpt":"This is a great article about the yahoo ui tools. I mention it mainly because they have a nice scrolling widget a lot like what I put together as an example of the things you can do with script.aculo.us (see Smooth Scrolling Image List). A link to the demo: Sliding...","categories": ["programming"],
        "tags": ["javascript","yui"],
        "url": "/programming/2006/07/03/easier-scrolling-images-with-yahoo-ui/",
        "teaser": null
      },{
        "title": "Wordpress permalinks with lighttpd (lighty)",
        "excerpt":"Wordpress out of the box works just fine with lighttpd. But you will run into issues if you want nice looking and search engine friendly URLs. To get that you need to turn on the non-default permalinks. Most of the information out there on how to set your webserver up...","categories": ["system administration"],
        "tags": [],
        "url": "/system%20administration/2006/07/05/wordpress-permalinks-with-lighttpd-lighty/",
        "teaser": null
      },{
        "title": "SQL Beautifier",
        "excerpt":"I pulled a large amount of SQL out of some existing code and wanted to have it formated nicely for me. I figured there had to be some type of pretty printer for SQL available outside of applications like TOAD. I have access to TOAD but it would have required...","categories": ["database administration"],
        "tags": ["Oracle","sql"],
        "url": "/database%20administration/2006/07/06/sql-beautifier/",
        "teaser": null
      },{
        "title": "Virtualization gaining speed",
        "excerpt":"At work we jumped on the virtualization wagon some time ago first when User Mode Linux and then later with Xen. UML was pretty good but Xen has been great. We had a few reasons for moving from physical machines to virtual ones: Rack space is a recurring cost so...","categories": ["system administration"],
        "tags": [],
        "url": "/system%20administration/2006/07/07/virtualization-gaining-speed/",
        "teaser": null
      },{
        "title": "Capture full page screenshots with firefox",
        "excerpt":"Ever wanted to capture the entire page you are viewing in firefox instead of just what is shown on your screen? Ever need to do that from a command line? Here are two extensions that let you do just that. Page Saver The first extension is called Page Saver and...","categories": ["web design","utilities"],
        "tags": [],
        "url": "/web%20design/utilities/2006/07/09/capture-full-page-screenshots-with-firefox/",
        "teaser": null
      },{
        "title": "Sun ZFS and some big hardware",
        "excerpt":"This is one large set of disks to have in only 4u of space. And to top it off the thing has 4 cores. I love commodity hardware and sun has been rolling out some nice commodity hardware these days. The price for some of the equipment has started to...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2006/07/11/sun-zfs-and-some-big-hardware/",
        "teaser": null
      },{
        "title": "Tape drives are obsolete",
        "excerpt":"I was reading an article today that asks the question Are Tape Backup systems obsolete? I would say the answer is yes and that it has been that way for some time now. Take google who build thier own commodity hardware. How would they ever back up so much data?...","categories": ["system administration","linux","utilities"],
        "tags": [],
        "url": "/system%20administration/linux/utilities/2006/07/12/tape-drives-are-obsolete/",
        "teaser": null
      },{
        "title": "Interesting alternative to tagging",
        "excerpt":"I found a post about an alternative approach to tagging today and thought it would be interesting if someone made a wordpress plugin that would use this idea. It seems like it might be a nice alternative to the normal site map that most sites have when there is a...","categories": ["web design"],
        "tags": [],
        "url": "/web%20design/2006/07/12/interesting-alternative-to-tagging/",
        "teaser": null
      },{
        "title": "5 ImageMagick command line examples - part 1",
        "excerpt":"If you have ever wanted to manipulate images under linux you probably have used Gimp. This isn’t your only option and if you want to do things from the command line a better option is to use ImageMagick’s convert utility. I’ve put together 5 simple command line examples that I...","categories": ["linux","utilities"],
        "tags": [],
        "url": "/linux/utilities/2006/07/14/5-imagemagick-command-line-examples-part-1/",
        "teaser": null
      },{
        "title": "Good article on keeping javascript maintainable",
        "excerpt":"Vitamin has a good article today on the importance of maintainable javascript. 95% of what the article covers is applicable to any code. The important parts of the article cover javascript specific things like: object literals, namespaces and where to go when you want to compress your javascript to save...","categories": ["web design"],
        "tags": ["javascript"],
        "url": "/web%20design/2006/07/17/good-article-on-keeping-javascript-maintainable/",
        "teaser": null
      },{
        "title": "PHP RRDTool tutorial",
        "excerpt":"On a number of occasions I’ve used RRDTool to graph network traffic and the like. A few years ago when I started using cacti I started wondering how to make the graphs myself. Creating the graphs on the command line isn’t that hard once you know how to set things...","categories": ["system administration","php"],
        "tags": [],
        "url": "/system%20administration/php/2006/07/18/php-rrdtool-tutorial/",
        "teaser": null
      },{
        "title": "Building firefox and mozilla tools on an AMD64",
        "excerpt":"Sometimes I curse the day I decided to get a 64 bit box. Everything is fine until I want to build something by hand or upgrade something and then if it doesn’t just work it is like a maze of problems. Recently I was trying to build firefox from source...","categories": ["linux","java"],
        "tags": [],
        "url": "/linux/java/2006/07/21/building-firefox-and-mozilla-tools-on-an-amd64/",
        "teaser": null
      },{
        "title": "5 ImageMagick command line examples part 2",
        "excerpt":"I’ve put together another 5 ImageMagick command line examples as a followup to part 1. These examples are a little more advanced and include some extra information on techniques. I started with the following image as a base for all the examples that follow: 1. Resizing an image. Resizing seems...","categories": ["linux","utilities"],
        "tags": [],
        "url": "/linux/utilities/2006/07/22/5-imagemagick-command-line-examples-part-2/",
        "teaser": null
      },{
        "title": "How to set up different window managers with VNC",
        "excerpt":"I recently needed to replace twm as the window manager I used under VNC. I wanted something light so I looked at: blackbox, fluxbox, and flwm. These window managers have been around for some time and are probably available as binary packages for most distributions. I went with blackbox after...","categories": ["system administration","linux","utilities"],
        "tags": [],
        "url": "/system%20administration/linux/utilities/2006/07/24/how-to-set-up-different-window-managers-with-vnc/",
        "teaser": null
      },{
        "title": "Making screencasts with Linux",
        "excerpt":"After my post about capturing full page screenshots with firefox I started wondering if there was a way to do screencasts using Linux. It just so happens that you can. There are a couple different options if you want a pure movie of your desktop but I was more interested...","categories": ["linux","utilities","software"],
        "tags": [],
        "url": "/linux/utilities/software/2006/07/26/making-screencasts-with-linux/",
        "teaser": null
      },{
        "title": "How to get the next date for a weekday using Oracle",
        "excerpt":"If you ever need to find the next weekday from a given date in Oracle it turns out they have a built in function for doing just that. If you want the next Sunday from yesterday you would do: SELECT NEXT_DAY(SYSDATE - 1, 'SUN') FROM dual; Valid entries for the...","categories": ["database administration"],
        "tags": ["Oracle","sql"],
        "url": "/database%20administration/2006/08/02/how-to-get-the-next-date-for-a-weekday-using-oracle/",
        "teaser": null
      },{
        "title": "Limiting Bandwidth Usage on Xen Linux Setup",
        "excerpt":"Xen seems to be gaining speed these days and has a lot of useful features for those who want to resale or otherwise split a single box. Now that you have your Xen system set up you may be interested in going farther with bandwidth limiting. The hardest part of...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2006/08/06/limiting-bandwidth-usage-on-xen-linux-setup/",
        "teaser": null
      },{
        "title": "Monitoring Bandwidth Usage for a Xen node",
        "excerpt":"After my last post on limiting bandwidth usage on a Xen node I thought I would follow up with how to monitor the bandwidth usage of a Xen node. I chose to use netacct-mysql to monitor bandwidth and store the results into a mysql database. This isn’t the only way...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2006/08/13/monitoring-bandwidth-usage-for-a-xen-node/",
        "teaser": null
      },{
        "title": "Xen on a Mac mini",
        "excerpt":"A few days ago I read this article on how to put Xen on a Mac mini and though of the Mac mini colo. Now you can get even more machines into the same small area. The article talks about using Xen to not only run Linux but windows as...","categories": ["linux"],
        "tags": [],
        "url": "/linux/2006/08/16/xen-on-a-mac-mini/",
        "teaser": null
      },{
        "title": "How to map URLs with PHP and lighttpd",
        "excerpt":"On a number of occasions I’ve wanted to map a section of a site hosted with lighttpd onto a single PHP file that could then be used as a controller. Here is how I go about doing it. The first part is to re-write the given part of the site...","categories": ["system administration","php"],
        "tags": [],
        "url": "/system%20administration/php/2006/08/22/how-to-map-urls-with-php-and-lighttpd/",
        "teaser": null
      },{
        "title": "Lighty XCache for PHP",
        "excerpt":"I noticed Lighty XCache when it came out a few months ago. I like EAccelerator myself but now there is an admin console for XCache that looks pretty nice.   ","categories": ["php"],
        "tags": [],
        "url": "/php/2006/09/18/lighty-xcache-for-php/",
        "teaser": null
      },{
        "title": "Using fetchmail and procmail for maildir style storage from a pop3 account",
        "excerpt":"For the longest time having POP3 messages stored in one large file bothered me. I found out however that you can easily convert the single file storage into Maildir style storage with fetchmail and procmail. Here are the steps I used to fetch mail from a POP3 mailbox and store...","categories": ["system administration","linux","utilities"],
        "tags": [],
        "url": "/system%20administration/linux/utilities/2006/09/25/using-fetchmail-and-procmail-for-maildir-style-storage-from-a-pop3-account/",
        "teaser": null
      },{
        "title": "DNS Black List Checker",
        "excerpt":"At work we have been using DNS Black Lists for a long time to deny spam coming into our email systems. There are a number of places you can check to see if you are on one of these lists but I figured I would write my own web 2.0...","categories": ["system administration","utilities"],
        "tags": [],
        "url": "/system%20administration/utilities/2006/10/15/dns-black-list-checker/",
        "teaser": null
      },{
        "title": "Upgrade FC5 to FC6 with yum",
        "excerpt":"Now that Fedora Core 6 is available it is time to upgrade those old crusty FC5 installs. To upgrade from FC5 you can follow these steps: You may be able to skip this step but I did a yum update on FC5 first to make sure everything there was up...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2006/10/25/upgrade-fc5-to-fc6-with-yum/",
        "teaser": null
      },{
        "title": "Fedora Core 6 on a Laptop",
        "excerpt":"So after doing my yum upgrade from FC5 to FC6 on a desktop I decided to see if it worked any better than FC5 on my old Dell Inspiron 600m laptop. FC5 wasn’t bad on this laptop but two things always bugged me: 1) the ATI driver didn’t work out...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2006/10/27/fedora-core-6-on-a-laptop/",
        "teaser": null
      },{
        "title": "How to compile ImageMagick for PHP by hand",
        "excerpt":"Some time ago I was looking at how to re-size uploaded images in a way that looks good using PHP. I was impressed that when I uploaded a 4M picture to flickr it managed to re-size and compress it into a smaller version that looked correct. I knew they weren’t...","categories": ["php","web design"],
        "tags": [],
        "url": "/php/web%20design/2006/10/31/how-to-compile-imagemagick-for-php-by-hand/",
        "teaser": null
      },{
        "title": "Fun with ANSI escape codes",
        "excerpt":"For fun I recently pimped out a ruby script that I had written for some testing with a little color and a spinner. If you have never used ANSI escape codes before I’ve put together a simple script that shows how easy it is. First let me say that if...","categories": ["ruby","utilities"],
        "tags": [],
        "url": "/ruby/utilities/2006/11/03/fun-with-ansi-escape-codes/",
        "teaser": null
      },{
        "title": "Installing Beryl and The Latest Linux NVidia Drivers",
        "excerpt":"I finally kicked my 64 bit install to the curb and am now running my AMD 64 desktop box in 32 bit mode. I decided that I had had enough of random crashes and having to compile things special every time I wanted something new. Having just upgraded from FC5...","categories": ["linux"],
        "tags": [],
        "url": "/linux/2006/11/09/installing-beryl-and-the-latest-linux-nvidia-drivers/",
        "teaser": null
      },{
        "title": "Upgrade to PHP 5.2 and Get JSON For Free",
        "excerpt":"A few days ago when PHP 5.2 was released one of the things that caught my eye was that it now includes the JSON extension. For anyone doing AJAXy type stuff JSON is an easy way to martial your data between your server side language and javascript. For the longest...","categories": ["programming"],
        "tags": ["ajax","php","json"],
        "url": "/programming/2006/11/14/upgrade-to-php-52-and-get-json-for-free/",
        "teaser": null
      },{
        "title": "Using Java to get detailed DNS information",
        "excerpt":"Not long ago I was curious about using Java to look up DNS information so I decided to put together a little DNSBL/RBL checker so I could experiment with Java DNS lookups and some PHP/Java communications. There isn’t a lot of Java DNS stuff out there but it was easy...","categories": ["system administration","utilities","java"],
        "tags": [],
        "url": "/system%20administration/utilities/java/2006/11/19/using-java-to-get-detailed-dns-information/",
        "teaser": null
      },{
        "title": "PHP ImageMagick MagickWand Examples",
        "excerpt":"A while back I explained how to compile the ImageMagick extension for PHP and this past week I got around to creating some example code to make some of the command line examples I have in ImageMagick command line examples part 1 and ImageMagick command line examples part 2. The...","categories": ["php"],
        "tags": [],
        "url": "/php/2006/11/23/php-imagemagick-magickwand-examples/",
        "teaser": null
      },{
        "title": "Even Amazon Can Hurt",
        "excerpt":"It just goes to show that even the most redundant sites in the world have their limits. Amazon is mostly unusable ATM because they tried to sell XBox360s at $100.   ","categories": ["meta"],
        "tags": [],
        "url": "/meta/2006/11/23/even-amazon-can-hurt/",
        "teaser": null
      },{
        "title": "Building The Ming Ruby Extension",
        "excerpt":"I’ve been trying out Ming SWF output library in PHP for a few days and I thought I would give the Ruby extension a try to see how well it worked. It turns out that it is kind of old and busted but it is fixable. First you need to...","categories": ["ruby","utilities"],
        "tags": [],
        "url": "/ruby/utilities/2006/11/25/building-the-ming-ruby-extension/",
        "teaser": null
      },{
        "title": "Creating Flash Videos Using FFMpeg",
        "excerpt":"One of the hardest parts about doing video on the Internet in the past has been knowing what video format to use. With the rise of video sharing sites like youtube the answer these days seems to be Flash video. It is very easy to create Flash videos and display...","categories": ["linux","utilities"],
        "tags": [],
        "url": "/linux/utilities/2006/11/26/create-flash-videos-ffmpeg/",
        "teaser": null
      },{
        "title": "Ruby Ming Extension Patch to Add Video Streaming",
        "excerpt":"After playing with the Ruby Ming extension a little more I found that they don’t have support for SWFVideoStreams so I made a patch to add it. The patch also fixes the beta issues I described in building the ming ruby extension. Here are the steps you need to follow...","categories": ["ruby","utilities"],
        "tags": [],
        "url": "/ruby/utilities/2006/11/27/ruby-ming-extension-patch-to-add-video-streaming/",
        "teaser": null
      },{
        "title": "How to Create a Streaming Flash Video Player Using Ming PHP or Ruby",
        "excerpt":"I mentioned in creating Flash videos using FFMpeg that you could use Ming to create your own Flash video player. I’ve added a patch to the ruby -ming extension for video streaming so now it is possible to create a streaming player with both PHP and Ruby using their Ming...","categories": ["ruby","php","utilities"],
        "tags": [],
        "url": "/ruby/php/utilities/2006/11/29/flash-video-steam-ming-php-ruby/",
        "teaser": null
      },{
        "title": "How to create and use Flash video metadata to add cue-points with flvtool2",
        "excerpt":"Adding cue-points allows you to spice up your flash videos created with FFMpeg. Adding metadata to a FLV will allow you to introduce cue-points that have their own metadata that can be display when the cue-point is reached or let you jump to that cue-point. In the following tutorial you...","categories": ["web design","linux","utilities"],
        "tags": [],
        "url": "/web%20design/linux/utilities/2006/12/08/metadata-cuepoint-flash-video-flvtool/",
        "teaser": null
      },{
        "title": "Using Flash video metadata to display annotations",
        "excerpt":"Now that you can create a streaming Flash video player with PHP or Ruby and you know add metadata for cuepoints to Flash videos you are ready for something else. The following code will show you how to create a video player with PHP that will watch for metadata events...","categories": ["php","web design","utilities"],
        "tags": [],
        "url": "/php/web%20design/utilities/2006/12/09/using-flash-video-metadata-to-display-annotations/",
        "teaser": null
      },{
        "title": "Mingruby 0.1.8 released",
        "excerpt":"I have brought the Ming Ruby library up to date with Ming 0.3, added patches submitted by users over the past year and included a ton of user supplied examples. I hope to find time soon to include the real examples on a page by themselves with the code needed...","categories": ["ruby","web design"],
        "tags": [],
        "url": "/ruby/web%20design/2006/12/17/mingruby-018-released/",
        "teaser": null
      },{
        "title": "How to build FlowPlayer from source",
        "excerpt":"I have mentioned the free open source flash video player FlowPlayer before in my post about adding cuepoints and create flash videos. It is a great free flash video player that you can modify yourself. After writing about adding metadata to your flash videos I decided to add support for...","categories": ["programming"],
        "tags": ["flash","FlowPlayer"],
        "url": "/programming/2006/12/30/how-to-build-flowplayer-from-source/",
        "teaser": null
      },{
        "title": "Akismet spam graphs with PHP RRD",
        "excerpt":"After reading a post on hacking Akismet to add graphs I decided I liked the idea but I didn’t want to store the data in a database. It seemed like it would be better to store it using a RRD and then use the PHP RRD library. So after a...","categories": ["php","utilities"],
        "tags": [],
        "url": "/php/utilities/2007/01/01/akismet-spam-graphs-with-php-rrd/",
        "teaser": null
      },{
        "title": "Optaros Open Source Catalogue",
        "excerpt":"For anyone interested in using open source software in the enterprise Optaros just published their Open Source Catalogue 2007. The paper doesn’t cover every project out there but it is a good read and a starting point for others who might want to publish a more comprehensive guide.   ","categories": ["system administration"],
        "tags": ["Open Source"],
        "url": "/system%20administration/2007/01/11/optaros-open-source-catalogue/",
        "teaser": null
      },{
        "title": "Creating your own FC6 instance for EC2",
        "excerpt":"I’ve been playing around with the EC2 service at Amazon and figured I would document a little about how you create your own FC6 AMI. The Amazon documentation goes over everything you need to know about creating your own FC4 AMI and if you don’t want to roll your own...","categories": ["system administration"],
        "tags": ["ec2","linux","s3"],
        "url": "/system%20administration/2007/01/12/creating-your-own-fc6-instance-for-ec2/",
        "teaser": null
      },{
        "title": "Debian EC2 AMI",
        "excerpt":"After working on my FC6 AMI I started thinking about how small of an AMI I could create. The goal would be to have a 10 meg or less image that is very specialized for doing something like serving images with lighttpd or apache. I started very very small but...","categories": ["system administration"],
        "tags": ["ec2","linux","Debian"],
        "url": "/system%20administration/2007/01/16/debian-ec2-ami/",
        "teaser": null
      },{
        "title": "Using Oracle Instant Client and SQLPlus",
        "excerpt":"Some time ago Oracle introduced their Instant Client as an alternative to needing a full install of the Oracle client to run your own apps or SQLPlus. I’ve been putting the Instant Client to good use these days and figured I would give a quick howto on getting it set...","categories": ["system administration"],
        "tags": ["Oracle","sqlplus"],
        "url": "/system%20administration/2007/01/19/using-oracle-instant-client-and-sqlplus/",
        "teaser": null
      },{
        "title": "A lesson in on the limits of administrating your way out of problems: Shared MySQL",
        "excerpt":"I just finished reading a post to the Media Temple blog about their MySQL problems . I think it is an excellent example of what happens when you only have one side of the house trying to fix a problem. The post leaves out some details but they make it...","categories": ["system administration"],
        "tags": ["linux","mysql"],
        "url": "/system%20administration/2007/01/29/admin-shared-mysql/",
        "teaser": null
      },{
        "title": "Dynamic DNS with EC2 and ZoneEdit",
        "excerpt":"There seems to be a lot of questions on how to set up dyndns with EC2. It is fairly easy to do but I haven’t seen anyone put everything together to do it yet so I figured I would write a little example using ZoneEdit. I picked ZoneEdit because it...","categories": ["system administration"],
        "tags": ["ec2","ZoneEdit"],
        "url": "/system%20administration/2007/02/11/dynamic-dns-with-ec2-and-zoneedit/",
        "teaser": null
      },{
        "title": "Acrobat Reader 7 and FC6",
        "excerpt":"I broke down and wanted to install Adobe Acrobat Reader 7 on my FC6 box to replace xpdf. After installing it from the tar.gz version the acroread startup script bombed out with the error: expr substr 2400000000000 1 After a little searching I didn’t find much help so I started...","categories": ["system administration","linux","utilities","software"],
        "tags": [],
        "url": "/system%20administration/linux/utilities/software/2007/02/14/acrobat-reader-7-and-fc6/",
        "teaser": null
      },{
        "title": "SOAP vs REST",
        "excerpt":"Recently it seems like the SOAP vs REST debate is heating up. Most of the debate seems to be leaning toward convincing people to not use SOAP based on its increasing complexity. Different people have different views on what REST is but in general if you look at the SOAP...","categories": ["meta"],
        "tags": ["SOAP","web services","REST"],
        "url": "/meta/2007/02/21/soap-vs-rest/",
        "teaser": null
      },{
        "title": "Howto base64 decode with C/C++ and OpenSSL",
        "excerpt":"Someone asked for an example of decoding with OpenSSL on the Howto base64 encode with C/C++ and OpenSSL post. So here it is: #include &lt;string.h&gt; #include &lt;openssl/sha.h&gt; #include &lt;openssl/hmac.h&gt; #include &lt;openssl/evp.h&gt; #include &lt;openssl/bio.h&gt; #include &lt;openssl/buffer.h&gt; char *unbase64(unsigned char *input, int length); int main(int argc, char **argv) { char *output =...","categories": ["programming"],
        "tags": ["C/C++","openssl","base64"],
        "url": "/programming/2007/02/28/howto-base64-decode-with-cc-and-openssl/",
        "teaser": null
      },{
        "title": "Good Presentation on REST with ActiveResource",
        "excerpt":"I wrote about SOAP vs REST a few weeks ago. Today I noticed this article with a presentation about putting together Rails REST services with ActiveResource.   ","categories": ["programming"],
        "tags": ["web services","rails","active resource","REST"],
        "url": "/programming/2007/03/28/good-presentation-on-rest-with-activeresource/",
        "teaser": null
      },{
        "title": "EC2 and NAT",
        "excerpt":"Amazon just added NAT to their EC2 service. It also sounds like they will be turning the old direct addressing scheme off soon. This is probably a step towards assigning static IPs to your hosts in EC2. It may even allow you to have EC2 instances with no external IP...","categories": ["system administration"],
        "tags": ["ec2","s3","nat"],
        "url": "/system%20administration/2007/04/03/ec2-and-nat/",
        "teaser": null
      },{
        "title": "Anonymous functions in PHP",
        "excerpt":"I ran into this and found it interesting. Someone has added support for anonymous functions in PHP. With the patch you can now do stuff like: $data = array(\"zoo\", \"orange\", \"car\", \"lemon\", \"apple\"); usort($data, function($a, $b) { return strcmp($a, $b); }); var_dump($data); # data is sorted alphabetically Before you had...","categories": ["programming"],
        "tags": ["php"],
        "url": "/programming/2007/05/18/anonymous-functions-in-php/",
        "teaser": null
      },{
        "title": "Lots of new releases this week",
        "excerpt":"It seems like this week has been release week for “web 2.0” stuff. Facebook F8 went live last week. All kinds of apps have followed. Google released Maplets, a mashup editor, and Google Gears Mapquest released an updated mapquest API that uses actionscript. The one thing I note in all...","categories": ["meta"],
        "tags": [],
        "url": "/meta/2007/05/31/lots-of-new-releases-this-week/",
        "teaser": null
      },{
        "title": "Upgrading from FC6 to Fedora 7 with yum",
        "excerpt":"Now that Fedora 7 has been release it is time to upgrade from that crusty old Fedora Core 6. Note that they have removed the “Core” from the name so a few things have changed with the paths used in yum. Last year I did a post on how to...","categories": ["linux"],
        "tags": [],
        "url": "/linux/2007/06/02/upgrading-from-fc6-to-fedora7-with-yum/",
        "teaser": null
      },{
        "title": "How to create a Fedora 7 Instance for EC2",
        "excerpt":"Now that Fedora 7 is out I figured it was time to update the EC2 instance howto. It is almost exactly the same as creating a FC6 instance so if you want to know the details you can reference that article. Here is an updated script for creating the AMI...","categories": ["system administration"],
        "tags": ["ec2","linux","Fedora"],
        "url": "/system%20administration/2007/06/02/how-to-create-a-fedora-7-instance-for-ec2/",
        "teaser": null
      },{
        "title": "10 Tips For Creating Good Looking Diagrams Using Inkscape",
        "excerpt":"After multiple attempts to find a good free diagraming application I think I have found a decent solution. I’m not creating enough diagrams to justify buying something expensive and I don’t feel like finding a graphics designer to make Dia diagrams prettier. If you have a Mac you are probably...","categories": ["utilities"],
        "tags": [],
        "url": "/utilities/2007/07/11/10-tips-for-creating-good-looking-diagrams-using-inkscape/",
        "teaser": null
      },{
        "title": "Connection timeouts with the Apache commons TelnetClient",
        "excerpt":"I recently used the Apache commons net package in a project to create a small telnet client that automated a login process. It is hard to find a lot of documentation on TelnetClient but there are some examples. For what I wanted to use the telnet client for I ran...","categories": ["java"],
        "tags": [],
        "url": "/java/2007/07/24/connection-timeouts-with-the-apache-commons-telnetclient/",
        "teaser": null
      },{
        "title": "Upgrading from Fedora 7 to Fedora 8 with yum",
        "excerpt":"Fedora 8 has been released so it is time to upgrade once again. First you should go back and upgrade to Fedora 7 if you haven’t already. From there it is even easier this time to upgrade. Here are the steps you need to do the upgrade from Fedora 7...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2007/11/08/upgrading-from-fedora-7-to-fedora-8-with-yum/",
        "teaser": null
      },{
        "title": "Java GIF Adventure",
        "excerpt":"I was recently working on a project that generated PNGs using Java from a Java2D canvas. Along the way someone wanted to change the graphics to have transparent backgrounds and because they were needed for display on the web I knew this would become an issue because IE doesn’t support...","categories": ["php"],
        "tags": [],
        "url": "/php/2008/03/07/java-gif-adventure/",
        "teaser": null
      },{
        "title": "Examples of why netcat is still useful",
        "excerpt":"I recently got a new work PC and was worried that stuck somewhere in the 40G hard drive of the old PC was something I would one day need. The new PC had 300G of space so I figured I would just copy the entire drive over and keep it...","categories": ["system administration"],
        "tags": ["linux"],
        "url": "/system%20administration/2008/04/24/netcat-examples/",
        "teaser": null
      },{
        "title": "Upgrading from Fedora 8 to Fedora 9 with yum",
        "excerpt":"A new release of Fedora is out again so it is time to check out the upgrade. This time it is the Fedora 9 release. The upgrade from Fedora 8 to Fedora 9 is almost exactly like the upgrade to Fedora 8. Here are the steps you need to do...","categories": ["system administration","linux"],
        "tags": [],
        "url": "/system%20administration/linux/2008/05/13/upgrading-from-fedora-8-to-fedora-9-with-yum/",
        "teaser": null
      },{
        "title": "Spiffing up JFreeChart charts",
        "excerpt":"I recently was given a copy of ChartFX for Java to evaluate as a charting solution for a Java project. After using it for a while it seemed nice despite having some odd ways of doing things that I think come from it originally being a C# and VB product....","categories": ["java"],
        "tags": [],
        "url": "/java/2008/06/18/spiffing-up-jfreechart-charts/",
        "teaser": null
      },{
        "title": "FreeRADIUS with Oracle",
        "excerpt":"I recently needed to find a RADIUS server for use in a project where I could stick profile data into Oracle. I remembered seeing FreeRADIUS a while back so I checked to see if it was active and supported Oracle. Sure enough it did. It was a little tricky to...","categories": ["system administration"],
        "tags": ["linux","Oracle","radius"],
        "url": "/system%20administration/2008/07/07/freeradius-with-oracle/",
        "teaser": null
      },{
        "title": "C# custom SOAP header",
        "excerpt":"While working on an SOAP service I needed to create a number of clients for different languages. This would normally not be that big of a challenge except that the SOAP service had custom headers for doing authentication. Because of the complexity in setting up Axis to use WS-Security the...","categories": ["programming"],
        "tags": ["SOAP","web services","CSharp"],
        "url": "/programming/2008/08/10/csharp-custom-soap-header/",
        "teaser": null
      },{
        "title": "PowerDNS Makes Custom DNS Backends Easy",
        "excerpt":"I ran into PowerDNS recently when I needed to find a DNS server that would allow me to produce custom responses to domain queries. I needed to have a request for a DNS entry return a different IP depending on some factors in a database and I needed that data...","categories": ["system administration","linux","utilities","java","software"],
        "tags": [],
        "url": "/system%20administration/linux/utilities/java/software/2008/09/14/powerdns-custom-dns-backend/",
        "teaser": null
      },{
        "title": "The Search for Timezone Maps",
        "excerpt":"For a while I had been casually searching for a way to overlay US time zones over a map for a project I was working on. It was never important enough to have a solution that required paying for something so I was searching for some type of government data...","categories": ["utilities","gis","meta"],
        "tags": [],
        "url": "/utilities/gis/meta/2008/10/16/the-search-for-timezone-maps/",
        "teaser": null
      },{
        "title": "SOAP on the Google App Engine platform",
        "excerpt":"I generally don’t recomend using SOAP instead of REST but I have been required to use SOAP so much now that I think it is inevitably going to be a requirement for a long time for certain projects. So when I noticed a question on stack overflow about using SOAP...","categories": ["programming"],
        "tags": ["python","SOAP","web services","GAE"],
        "url": "/programming/2008/12/02/soap-on-the-google-app-engine-platform/",
        "teaser": null
      },{
        "title": "Automounting Amazon EBS volumes on EC2 instances",
        "excerpt":"I’ve been using S3 to store semi-transient information like log files from EC2 nodes in the past but recently decided to give Amazon’s Elastic Block Store (EBS) a try instead. I quickly realized a downside to using EBS in that there is no mechanism for auto-attach and mounting volumes when...","categories": ["system administration"],
        "tags": ["EBS","AWS","ec2"],
        "url": "/system%20administration/2008/12/23/automounting-amazon-ebs-volumes-on-ec2-instances/",
        "teaser": null
      },{
        "title": "Converting videos (flv,wmv,avi,etc) into a format that will work with the iPhone/iTunes",
        "excerpt":"I have had an iPhone for a while now and I keep running into instances where I want to have videos outside of youtube in some format that I can watch on the device. These include windows WMV formatted videos from PDC as well as FVL formatted videos on Flex....","categories": ["meta"],
        "tags": ["mencoder","itunes","iphone","touch","ipod","video","Open Source"],
        "url": "/meta/2008/12/27/converting-videos-flvwmvavietc-into-a-format-that-will-work-with-the-iphoneitunes/",
        "teaser": null
      },{
        "title": "How to transfer a Linux image from VirtualBox to Xen",
        "excerpt":"There have been times recently when I wanted to pull a VirtualBox Linux instance I had into Xen. I kept thinking it had to be fairly easy but I kept putting off trying it until recently when I ran into something I wanted to install from a CD image into...","categories": ["system administration","linux"],
        "tags": ["virtual box","ec2"],
        "url": "/system%20administration/linux/2009/01/04/how-to-transfer-linux-from-virtualbox-to-xen/",
        "teaser": null
      },{
        "title": "Installing Windows 7 on VirtualBox",
        "excerpt":"I have been seeing people talk about the Windows 7 Beta being available to download so I went to see how hard it was to sign up. It turns out that it actually pretty easy so I decided I would give it a try under VirtualBox just to see if...","categories": ["system administration"],
        "tags": ["VirtualBox","Windows 7"],
        "url": "/system%20administration/2009/01/12/installing-windows-7-on-virtualbox/",
        "teaser": null
      },{
        "title": "Using scrub to destroy a hard drive",
        "excerpt":"Recently I had a hard drive failure that pushed me into getting a little NAS device that I could back up to S3 easily. After consolidating a lot of data to the NAS I was left with a few old hard drives that I needed to do something with as...","categories": ["system administration","utilities"],
        "tags": ["shred","security"],
        "url": "/system%20administration/utilities/2009/01/20/using-scrub-to-destroy-a-hard-drive/",
        "teaser": null
      },{
        "title": "Using Ruby and HTTParty to consume web services the easy way",
        "excerpt":"Web services seem to be multiplying like rabbits these days. For a good sampling of just how many there are check out the Programmable Web API list. In general it is pretty easy to consume basic REST web services but after you have done it enough it starts getting old....","categories": ["programming"],
        "tags": ["web services","HTTParty","ruby"],
        "url": "/programming/2009/01/26/using-ruby-and-httparty-to-consume-web-services-the-easy-way/",
        "teaser": null
      },{
        "title": "VNC on OS X + Devil's Pie = seamless desktop",
        "excerpt":"I’ve been doing iPhone development lately using a mac mini. When we first started looking at developing for the iPhone it seemed like overkill to go out and buy multiple macbooks or one macbook to share between developers so instead we got a mac mini to share using Vine VNC....","categories": ["linux","utilities"],
        "tags": ["devilspie","vnc","mac"],
        "url": "/linux/utilities/2009/02/09/vnc-on-os-x-devils-pie-seamless-desktop/",
        "teaser": null
      },{
        "title": "Running Asterisk in the cloud with Amazon EC2",
        "excerpt":"I have been sitting on a half post for a while now on setting up Asterisk on EC2 and then this past week someone else came out with a post on how to install Asterisk from scratch on EC2. I figured I would wrap up what I have since I...","categories": ["system administration"],
        "tags": ["ec2","asterisk","cloud"],
        "url": "/system%20administration/2009/02/23/running-asterisk-in-the-cloud-with-amazon-ec2/",
        "teaser": null
      },{
        "title": "Running Lotus Notes 8 on Linux with newer xulrunner",
        "excerpt":"I recently got tired of running Lotus Notes under wine because I kept getting meeting invites that I couldn’t accept. So I ventured out because I had heard that Notes now had a Linux client and sure enough it does. The install is huge but it went very smooth up...","categories": ["linux","software"],
        "tags": ["lotus notes","xulrunner"],
        "url": "/linux/software/2009/03/02/running-lotus-notes-8-on-linux-with-newer-xulrunner/",
        "teaser": null
      },{
        "title": "BlackBerry screen and icon sizes",
        "excerpt":"For some reason the old link I had that contained display dimensions for BlackBerry devices is resulting in a 404 now. When you are doing BlackBerry development it is nice to be able to go to one page that just shows you the screen sizes instead of having to look...","categories": ["meta"],
        "tags": ["BlackBerry"],
        "url": "/meta/2009/03/09/blackberry-screen-and-icon-sizes/",
        "teaser": null
      },{
        "title": "How to create iPhone wireframes with Inkscape",
        "excerpt":"While developing ideas for iPhone applications I’ve played around with just using Interface Builder to stub things out. This works reasonably well but I know how to use Interface Builder so that makes a difference. If you are designing an application and want to stick with graphical tools only you...","categories": ["meta"],
        "tags": ["iphone","inkscape","mobile"],
        "url": "/meta/2009/04/15/how-to-create-iphone-wireframes-with-inkscape/",
        "teaser": null
      },{
        "title": "10 Tips for BlackBerry Development",
        "excerpt":"Over time I’ve gathered up some nice tips I think would help get someone started developing applications for the BlackBerry so I decided to pull some of the more interesting ones together into the following list. The Eclipse plugin makes life much easier so use it. If you are used...","categories": ["programming"],
        "tags": ["BlackBerry","mobile"],
        "url": "/programming/2009/05/19/10-tips-for-blackberry-development/",
        "teaser": null
      },{
        "title": "Upgrading to Fedora 11 from Fedora 10",
        "excerpt":"It is time again to upgrade if you are using Fedora. Fedora 11 was released a few days ago and contains some nice enhancements. For people who can a complete re-install is probably best. One reason for that is the inclusion of ext4 in Fedora11. You won’t get the benefit...","categories": ["system administration"],
        "tags": ["linux","Fedora"],
        "url": "/system%20administration/2009/06/12/upgrading-to-fedora-11-from-fedora-10/",
        "teaser": null
      },{
        "title": "iPhone HTTP Streaming with FFMpeg and an Open Source Segmenter",
        "excerpt":"With the release of the iPhone OS 3 update came the ability to do live streaming. There are a few types of streaming and each requires a certain encoding and segmentation. I’ve put together a cheat sheet on how I went about building a static stream using FFMpeg and an...","categories": ["programming"],
        "tags": ["iphone","video","streaming","ffmpeg"],
        "url": "/programming/2009/06/28/iphone-http-streaming-with-ffmpeg-and-an-open-source-segmenter/",
        "teaser": null
      },{
        "title": "Streaming Video Between QuickTime Broadcaster and VLC",
        "excerpt":"In my attempt to stream live video to my iPhone I ran into an issue with the USB QuickCam I have. Instead of fighting the problem I decided to turn to the iSight camera on a macbook but I quickly found that there isn’t a great way to get the...","categories": ["software"],
        "tags": ["QuickTime Broadcaster","VLC","Streaming Video"],
        "url": "/software/2009/07/03/streaming-video-between-quicktime-broadcaster-and-vlc/",
        "teaser": null
      },{
        "title": "iPhone Windowed HTTP Live Streaming Using Amazon S3 and Cloudfront Proof of Concept",
        "excerpt":"This post should be seen as a proof of concept. I’m working on creating a more concise and easier to use package of everything covered here but I felt like getting the knowledge out sooner rather than later would be of help to people looking for a way to do...","categories": ["programming"],
        "tags": ["iphone","video","s3","cloudfront"],
        "url": "/programming/2009/07/05/iphone-windowed-http-live-streaming-using-amazon-s3-and-cloudfront-proof-of-concept/",
        "teaser": null
      },{
        "title": "iPhone Windowed HTTP Live Streaming Server",
        "excerpt":"After some more work I have enhanced the HTTP segmenter and uploading script from my iPhone streaming using AWS S3 and Cloudfront post. I added a number of features and tried to pull together some of the ideas from the comments. I’ll go over some of the features here and...","categories": ["meta"],
        "tags": ["iphone","video","streaming"],
        "url": "/meta/2009/07/27/iphone-windowed-http-live-streaming-server/",
        "teaser": null
      },{
        "title": "RFID Reader USB Prototyping Kit",
        "excerpt":"I recently won a programming contest that netted me a gift card for ThinkGeek and not knowing what else to do I strolled the site looking for something interesting to use the gift card on. Eventually I ran into the RFID Experimentation Kit they have and decided that was what...","categories": ["programming"],
        "tags": ["rfid","diy"],
        "url": "/programming/2009/08/03/rfid-reader-writer-usb-prototyping-kit/",
        "teaser": null
      },{
        "title": "Fast XML parsing with Ruby",
        "excerpt":"One of the first things I needed to do while building the GeeQE iPhone application was process the CC data dump from Stack Overflow. The dump contains XML files representing tables from Stack Overflow with the largest file being posts.xml weighing in at 1.2G as of September. I decided it...","categories": ["programming"],
        "tags": ["ruby","xml","parse"],
        "url": "/programming/2009/09/09/fast-xml-parsing-with-ruby/",
        "teaser": null
      },{
        "title": "How I Used Hpricot and Mechanize in GeeQE",
        "excerpt":"While building GeeQE I wanted to enhance the CC dump of Stack Overflow’s data. The main reason I wanted to do this was to capture Gravatar hashes and user badges. To do this I decided to continue using Ruby as I did with the XML loading (see my previous post...","categories": ["programming"],
        "tags": ["ruby","hpricot","mechanize"],
        "url": "/programming/2009/09/27/using-hpricot-and-mechanize/",
        "teaser": null
      },{
        "title": "Full Text Search with Sphinx",
        "excerpt":"While developing my GeeQE iPhone application I decided I needed a way to let users search posts so I started looking around for a simple search engine that I could use with PHP. I took a look at a number of different options like MySQL Full Text search, Sphinx, Solr...","categories": ["programming"],
        "tags": ["php","mysql","sphinx"],
        "url": "/programming/2009/10/20/full-text-search-with-sphinx/",
        "teaser": null
      },{
        "title": "Upgrade to Fedora 12 from Fedora 11",
        "excerpt":"Fedora 12 was just released and it is time to upgrade again of course. I almost thought this was going to be a version to yawn at but then I saw that there was going to be a new version of Fedora based on Moblin and it seemed exciting again....","categories": ["system administration"],
        "tags": ["linux","Fedora"],
        "url": "/system%20administration/2009/11/18/upgrade-to-fedora-12-from-fedora-11/",
        "teaser": null
      },{
        "title": "Building Chromium and Chrome OS with EC2",
        "excerpt":"When the initial cut of the Chromium OS source was released last week I decided to use the opportunity to see if it would run on my EEE PC 900 netbook (check out EEE PC 900 running Chrome OS on Youtube to see the final result). The first roadblock I...","categories": ["system administration"],
        "tags": ["ec2","chrome os","chromium"],
        "url": "/system%20administration/2009/11/23/building-chromium-and-chrome-os-with-ec2/",
        "teaser": null
      },{
        "title": "Heroku Tips for the Cheap",
        "excerpt":"I’ve been playing around with the Ruby/Rails cloud provider Heroku a little bit lately just to try it out. It is somewhat like Google App Engine or Microsoft Azure in the way it works since you bundle your application and push it out to the Heroku cloud for deployment. It...","categories": ["programming"],
        "tags": ["rails","heroku","mongodb","rack","tips"],
        "url": "/programming/2009/12/20/heroku-tips-for-the-cheap/",
        "teaser": null
      },{
        "title": "Developing Adobe Air Apps with Linux",
        "excerpt":"I finally found a little project I wanted to do using Adobe Air and after some searching I found out you can use Linux to develop Air applications. At first I thought I would have to use Flex Builder which is still in alpha for Linux but it turns out...","categories": ["programming"],
        "tags": ["linux","air","development"],
        "url": "/programming/2010/01/12/developing-adobe-air-apps-with-linux/",
        "teaser": null
      },{
        "title": "PHP MySQLi and Multiple Prepared Statements",
        "excerpt":"While sprucing up the PHP code I use to provide my own Stack Overflow API for GeeQe I ran into an error caused by trying to use multiple prepared statements with MySQLi. It turned up when I tried to execute one prepared statement while looping over the result set from...","categories": ["programming"],
        "tags": ["php","mysql","mysqli"],
        "url": "/programming/2010/02/09/php-mysqli-and-multiple-prepared-statements/",
        "teaser": null
      },{
        "title": "Fedora 12 Bootable Root EBS on EC2",
        "excerpt":"I recently needed to create a clean EC2 AMI using a fairly new linux distro. It has been a while since I’ve needed to create a new AMI so I also wanted to move away from the older pre-packaged AMI and boot using EBS. After taking a look at what...","categories": ["system administration"],
        "tags": ["EBS","ec2","Fedora"],
        "url": "/system%20administration/2010/02/16/fedora-12-bootable-root-ebs-on-ec2/",
        "teaser": null
      },{
        "title": "Building HipHop PHP for Fedora 12 on 64 bit and 32 bit Systems",
        "excerpt":"Now that Facebook has finally released the source for HipHop PHP it is time to give it a spin. Of course it is still a little rough around the edges so I figured I would toss together a quick howto on getting it to build. The first thing to note...","categories": ["programming"],
        "tags": ["ec2","Fedora","php","hphp"],
        "url": "/programming/2010/02/23/building-hiphop-php-for-fedora-12-on-64-bit-and-32-bit-systems/",
        "teaser": null
      },{
        "title": "Using Daemon-Kit and RobustThread to Build Ruby Daemons",
        "excerpt":"On a number of occasions I have found myself needing to assemble a daemon process for some type or processing done using Ruby. Each time I roll things a little different and I finally started to wonder if someone had already put together tools for doing the daemon parts. After...","categories": ["programming"],
        "tags": ["ruby","rabbitmq","daemon","daemon-kit","robustthread"],
        "url": "/programming/2010/03/02/using-daemon-kit-and-robustthread-to-build-ruby-daemons/",
        "teaser": null
      },{
        "title": "Parsing the SXSW Twitter Stream for Fun",
        "excerpt":"Over the weekend I decided to toss together a simple twitter stream monitoring app that would capture SXSW tweets. I wanted to build on some of what I learned while hacking together the stuff for code2009 and it was also an excuse to play with node.js and a few other...","categories": ["Uncategorized"],
        "tags": [],
        "url": "/uncategorized/2010/03/10/parsing-the-sxsw-twitter-stream-for-fun/",
        "teaser": null
      },{
        "title": "Spring 3 File Upload Example",
        "excerpt":"I had the opportunity to figure out how to do file uploads using Spring 3 the other day and I couldn’t find anything that pulled it all together. What follows is a complete example of how to do MVC based file uploads with Spring 3. I’m going to assume you...","categories": ["programming"],
        "tags": ["java","spring","mvc"],
        "url": "/programming/2010/03/22/spring-3-file-upload-example/",
        "teaser": null
      },{
        "title": "Using Cursors with PHP MySQLi and Multiple Prepared Statements",
        "excerpt":"After my post on using PHP MySQLi and multiple prepared statements at the same time someone commented that using cursors could do the same thing. With that comment I dug some more and found that modifying the cursor type that is used under the covers will indeed let you execute...","categories": ["programming"],
        "tags": ["php","mysql","mysqli","cursor"],
        "url": "/programming/2010/03/30/using-cursors-with-php-mysqli-and-multiple-prepared-statements/",
        "teaser": null
      },{
        "title": "iPad Streaming Video and More",
        "excerpt":"I’ve updated the configuration examples in the open source segmenter project to reflect Apple’s recommended stream bitrates for iPad video streaming, added a few fixes and a few new features. If you are interested in streaming video on the iPad, iPhone or iPod Touch and haven’t done so yet you...","categories": ["programming"],
        "tags": ["iphone","Streaming Video","ipad","segmenter"],
        "url": "/programming/2010/04/06/ipad-streaming-video-and-more/",
        "teaser": null
      },{
        "title": "How to Create iPad Formatted Videos Using HandBrake or FFMpeg",
        "excerpt":"This is for those who may want to load a video onto their iPad with iTunes that isn’t in the correct format. I needed to do this because I was trying to put an iTunes University video on my iPad a couple days ago and iTunes complained that it wasn’t...","categories": ["meta"],
        "tags": ["video","ffmpeg","ipad","handbrake"],
        "url": "/meta/2010/04/13/how-to-create-ipad-formatted-videos-using-handbrake-or-ffmpeg/",
        "teaser": null
      },{
        "title": "Faceted Search With Sphinx",
        "excerpt":"I decided to use the Sphinx search engine for the GeeQe iPhone app I build last year because it was fast and had a very small memory footprint. Recently I wanted to experiment with a search interface that had facets and wondered if I would need to move away from...","categories": ["programming"],
        "tags": ["sphinx","search"],
        "url": "/programming/2010/05/18/faceted-search-with-sphinx/",
        "teaser": null
      },{
        "title": "Upgrade to Fedora 13 from Fedora 12",
        "excerpt":"After a week delay Fedora 13 has been released and it is time to upgrade of course. As always there are a decent number of features in this release but here are a few that stand out to me: boot.fedoraproject.org - A small bootable image to start the install from....","categories": ["system administration"],
        "tags": ["Fedora","upgrade"],
        "url": "/system%20administration/2010/05/27/upgrade-to-fedora-13-from-fedora-12/",
        "teaser": null
      },{
        "title": "Compiling WebM into FFMpeg for Windows",
        "excerpt":"I have updated this post with a newer version of the VP8 patches to FFMpeg and support for libvorbis instead of the built in vorbis support. Google has released source for the VP8 codec as the WebM project. The WebM project will be an open alternative in the HTML5 video...","categories": ["meta"],
        "tags": ["ffmpeg","windows","webm","vp8"],
        "url": "/meta/2010/07/13/compiling-webm-ffmpeg-windows/",
        "teaser": null
      },{
        "title": "Installing Cent OS 5.5 on EC2 with the Cent OS 5.5 Kernel",
        "excerpt":"Amazon recently introduced the ability to boot a custom kernel using pv-grub on EC2. This opens the door for all kinds of interesting ideas that I’ve been thinking about for a while, like seeing if I can boot right into a web server and skip all that extra junk that...","categories": ["system administration"],
        "tags": ["AWS","ec2","linux","centos"],
        "url": "/system%20administration/2010/08/10/installing-cent-os-5-5-on-ec2-with-the-cent-os-5-5-kernel/",
        "teaser": null
      },{
        "title": "Converting from VirtualBox or VMWare to EC2 now Easier than Ever",
        "excerpt":"The new PV-Grub ability introduced by Amazon for EC2 has opened the door for more than just custom kernels, it also makes it a lot easier to turn VirtualBox and VMWare instances into EC2 instances. In the past I have written about transfering VirtualBox images to Xen but to do...","categories": ["system administration"],
        "tags": ["ec2","VirtualBox","vmware"],
        "url": "/system%20administration/2010/08/25/converting-from-virtualbox-or-vmware-to-ec2-now-easier-than-ever/",
        "teaser": null
      },{
        "title": "Using a HTTP Proxy to Debug JAX-WS and SOAP Over HTTPS",
        "excerpt":"Every once in a while I run into something I need to debug from the network up. Most of the time I can do this using Wireshark but there are a few instances where what I’m really looking for is a man in the middle proxy. I usually find an...","categories": ["programming"],
        "tags": ["SOAP","jax-ws"],
        "url": "/programming/2010/09/07/using-a-http-proxy-to-debug-jax-ws-and-soap-over-https/",
        "teaser": null
      },{
        "title": "How to Build and Compile a Custom Linux Kernel for EC2",
        "excerpt":"I have a long running goal that I’m trying to reach with all these pv-grub for EC2 posts. That goal is to find the smallest/tightest usable node that can be created for EC2. The next step in that path requires a custom Linux kernel. What follows is how to build...","categories": ["system administration"],
        "tags": ["AWS","ec2","linux"],
        "url": "/system%20administration/2010/09/09/how-to-build-compile-a-custom-linux-kernel-for-ec2/",
        "teaser": null
      },{
        "title": "Minimal EC2 Linux Install Using TTYLinux",
        "excerpt":"If you have ever wondered how to get a Linux EC2 node down to the bare minimum this post is for you. I have been wanting to do this for a long time but it wasn’t possible until pv-grub support that was added recently. To make this even more exciting...","categories": ["system administration"],
        "tags": ["ec2","linux","ttylinux"],
        "url": "/system%20administration/2010/09/14/minimal_ec2_linux_install_using_ttylinux/",
        "teaser": null
      },{
        "title": "Getting Started with JRuby Webapps using Rack and Sinatra",
        "excerpt":"Going to JRubyConf, hosted by some of the latest online casinos leading the internet world, inspired me enough to expand my knowledge of JRuby. This is a quick guide for anyone looking to see what can be done with JRuby and Sinatra. Of course the first step is to install...","categories": ["programming"],
        "tags": ["rack","jruby","sinatra","mizuno"],
        "url": "/programming/2010/10/07/getting-started-with-jruby-webapps-using-rack-and-sinatra/",
        "teaser": null
      },{
        "title": "Example Git pre-receive and post-receive Hooks to Avoid a Signal 13 Error",
        "excerpt":"Git has a very nice set of example hooks that you can find just by creating a new repo. The following is an easy way to see them all: mkdir myrepo cd myrepo git init ls .git/hooks/ If you do that you will end up with a list something like...","categories": ["system administration"],
        "tags": ["git","hook"],
        "url": "/system%20administration/2010/10/22/example-git-pre-receive-and-post-receive-hooks-to-avoid-a-signal-13-error/",
        "teaser": null
      },{
        "title": "Using Modernizr - Simple Guide and Examples ",
        "excerpt":"Modernizr is a Javascript library that detects the presence of browser functionality. This makes life a lot easier when using more modern features on your website by encapsulating all the feature tests into a library you don’t have to worry about. You can use Modernizr either in your own Javascript...","categories": ["programming"],
        "tags": ["javascript","modernizr","css"],
        "url": "/programming/2010/11/18/using-modernizr-simple-guide-and-examples/",
        "teaser": null
      },{
        "title": "Example Mongrel2 Handler in Ruby",
        "excerpt":"Right before I went to Rubyconf I started looking at Mongrel2 so I had something to hack on while I was there. I grabbed the two Ruby handlers listed on the main site, Ruby Mongrel2 and Rack Mongrel2, to get started. I noticed right away that I couldn’t kill the...","categories": ["programming"],
        "tags": ["ruby","mongrel2","zeromq"],
        "url": "/programming/2010/12/06/example-mongrel2-handler-in-ruby/",
        "teaser": null
      },{
        "title": "Browser Based Push Notifications with Mongrel2 and EventSource",
        "excerpt":"One of the interesting things about Mongrel2 is its ability to send output to multiple clients with a single handler message. This has a lot of potential for push applications and while I was investigating Mongrel2 a new version of iOS came out that included changes to Safari. While looking...","categories": ["programming"],
        "tags": ["ruby","mongrel2","html5"],
        "url": "/programming/2011/01/04/browser-based-push-notifications-with-mongrel2-and-eventsource/",
        "teaser": null
      },{
        "title": "Java AirPlay Client",
        "excerpt":"Ever since getting one of the new AppleTV devices I have been wanting to fiddle with AirPlay. I finally got around to looking at a dump of the traffic between an iPad and the AppleTV over Christmas and was surprised at how simple it was. Soon after I noticed a...","categories": ["utilities"],
        "tags": ["java","airplay"],
        "url": "/utilities/2011/01/25/java-airplay-client/",
        "teaser": null
      },{
        "title": "Google OAuth for Installed Apps PHP Example",
        "excerpt":"I have been working on a long needed update to the Google analytics dashboard plugin for Wordpress and one of the items I had on my TODO list was using Google’s OAuth login instead of the old ClientLogin. Setting OAuth up for a Wordpress plugin is complicated because it isn’t...","categories": ["programming"],
        "tags": ["php","oauth","google"],
        "url": "/programming/2011/02/08/google-oauth-for-installed-apps-php-example/",
        "teaser": null
      },{
        "title": "Google Analytics Dashboard WordPress Plugin Version 2.0 Released",
        "excerpt":"It has taken me a while but I’ve finally been able to release version 2 of the Google Analytics Dashboard WordPress Plugin. The primary enhancement of this version is that it no longer blocks the dashboard, posts or pages interfaces while loading. The next major change is an upgrade to...","categories": ["utilities"],
        "tags": ["wordpress"],
        "url": "/utilities/2011/02/22/google-analytics-dashboard-wordpress-plugi-version-2-0-released/",
        "teaser": null
      },{
        "title": "Using the Google Closure Compiler in Java",
        "excerpt":"I recently had a chance to try out Google’s closure compiler. The closure compiler is similar to the YUI compressor except that along with minimizing it may rewrite the JavaScript. If you want to understand more about what it does start at the overview documentation and then go from there....","categories": ["programming"],
        "tags": ["javascript","java","closure"],
        "url": "/programming/2011/03/08/using-the-google-closure-compiler-in-java/",
        "teaser": null
      },{
        "title": "Using WebP to Reduce Native iOS App Size",
        "excerpt":"Last year Google released WebM as an alternative to h264 encoded video. They followed that up with the release of WebP as an alternative to JPG. Ever since the release I’ve been thinking about giving it a try on iOS to see how well it might work to reduce application...","categories": ["programming"],
        "tags": ["iOS","WebP"],
        "url": "/programming/2011/06/29/using-webp-to-reduce-native-ios-app-size/",
        "teaser": null
      },{
        "title": "Range Requests with Ajax",
        "excerpt":"I ran across something the other day that made wonder about doing range requests using ajax. For some reason it wasn’t obvious at first if this would be easy but as it turns out it is. If you aren’t familiar with range requests head over to the HTTP RFC and...","categories": ["programming"],
        "tags": ["ajax","javascript","http"],
        "url": "/programming/2011/11/22/range-requests-with-ajax/",
        "teaser": null
      },{
        "title": "Segmenting WebM Video and the MediaSource API",
        "excerpt":"For a while now I’ve seen people ask when support for Apple’s Pantos HTTP live streaming would make it past Safari and iOS. The answer seems to have been that it wasn’t clear that Pantos streaming was the best option and something else would come about eventually that would be...","categories": ["utilities"],
        "tags": [],
        "url": "/utilities/2012/01/03/segmenting-webm-video-and-the-mediasource-api/",
        "teaser": null
      },{
        "title": "Embed Ruby in Your iOS Apps Using mruby",
        "excerpt":"I’ve been playing with mruby for the past week or so. If you haven’t seen it yet it is an embeddable version of Ruby. The first thing I wonder about when I heard about mruby last year a RubyConf was embedding it in iOS apps. Now that the initial version...","categories": ["programming"],
        "tags": ["iOS","mruby","objective-c","embed"],
        "url": "/programming/2012/05/08/embed-ruby-in-your-ios-apps-using-mruby/",
        "teaser": null
      },{
        "title": "Direct Browser Uploading - Amazon S3, CORS, FileAPI, XHR2 and Signed PUTs",
        "excerpt":"I’ve been hacking around with FileAPI and XHR2 in HTML5 recently (more on why hopefully in another month or so). So when Amazon announced S3 CORS support I figured I should create a demo of directly uploading a file to S3 from a browser. The first thing to understand is...","categories": ["programming"],
        "tags": [],
        "url": "/programming/2012/09/02/direct-browser-uploading-amazon-s3-cors-fileapi-xhr2-and-signed-puts/",
        "teaser": null
      },{
        "title": "Bluetooth 4.0 LE on Raspberry Pi with Bluez 5.x",
        "excerpt":"Over the holiday I had a little time to fiddle with the Raspberry Pi I got earlier in the summer and I started wondering how hard it would be to get a Bluetooth LE adapter working. It turned out not to be as hard to get working as I thought...","categories": ["linux","programming","hardware"],
        "tags": ["rpi","bluethooth"],
        "url": "/linux/programming/hardware/2013/01/21/bluetooth-4-0-le-on-raspberry-pi-with-bluez-5-x/",
        "teaser": null
      },{
        "title": "Turn a Raspberry Pi into an iBeacon",
        "excerpt":"Earlier this year Apple added the concept of beacon region monitoring into Core Location. This is more widely known as iBeacon. Right now there isn’t a large amount of information on how to take advantage of it outside of iOS and Macs but it is actually pretty easy to implement....","categories": ["programming","hardware"],
        "tags": ["rpi","bluetooth","ibeacon"],
        "url": "/programming/hardware/2013/10/12/turn-a-raspberry-pi-into-an-ibeacon/",
        "teaser": null
      },{
        "title": "Using Ruby to Send Targeted Email to an Apple Watch",
        "excerpt":"The other day I ran into a post about sending emails that could fall back to support the limited HTML that the Apple watch can display called hidden Apple Watch email. After reading the post I wondered if I could write a quick example to do what they demonstrated. I...","categories": ["ruby","programming"],
        "tags": ["ruby","apple watch","email"],
        "url": "/ruby/programming/2015/05/26/using-ruby-to-send-targeted-email-to-an-apple-watch/",
        "teaser": null
      },{
        "title": "Azure CLI and ACR Docker Credential Helper on macOS 12 Monterey",
        "excerpt":"After upgrading to macOS 12 Monterey I started getting the following error when using docker with the ACR Docker Credential Helper: fatal error: runtime: bsdthread_register error This error is caused when using a Golang binary that has been compiled with an older version of the Golang compiler, you can find...","categories": ["utilities"],
        "tags": ["docker","azure"],
        "url": "/utilities/2022/01/27/azure-cli-and-acr-docker-credential-helper-on-macos-12-monterey/",
        "teaser": null
      }]
