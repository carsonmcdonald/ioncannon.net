---
layout: archive
status: publish
published: true
title: Creating S3 URLs that expire using PHP
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 21
wordpress_url: http://www.ioncannon.net/uncategorized/21/creating-s3-urls-that-expire-using-php/
date: '2006-06-01 11:50:24 -0400'
date_gmt: '2006-06-01 16:50:24 -0400'
categories:
- programming
tags:
- php
- s3
comments:
- id: 213909
  author: Robbie
  author_email: robbiesmith79@gmail.com
  author_url: ''
  date: '2011-09-13 17:51:49 -0400'
  date_gmt: '2011-09-13 22:51:49 -0400'
  content: Developers who copy / paste this and try to use it as is won't work. You
    need to replace the &'s with actual &, < with <. And FWIW, Crypt/HMAC.php
    is a PEAR module. You can install both from the command line without downloading
    anything.
- id: 236175
  author: col000r
  author_email: col000r@gmail.com
  author_url: http://blackish-games.com
  date: '2012-03-16 03:17:40 -0400'
  date_gmt: '2012-03-16 08:17:40 -0400'
  content: Thanks a lot! Also don't forget to revoke the open/download permission
    for "Everyone" in the S3 management console or people will simply be able to delete
    everything after the filename and download anyway...
- id: 266882
  author: Direct Browser Uploading &#8211; Amazon S3, CORS, FileAPI, XHR2 and Signed
    PUTs
  author_email: ''
  author_url: http://www.ioncannon.net/programming/1539/direct-browser-uploading-amazon-s3-cors-fileapi-xhr2-and-signed-puts/
  date: '2012-09-02 00:01:22 -0400'
  date_gmt: '2012-09-02 05:01:22 -0400'
  content: "[...] have an old way of creating signed URLs using PHP that hasn&#039;t
    been updated in forever. With the more recent versions of PHP there is [...]"
---

After reading <a href="http://developer.amazonwebservices.com/connect/thread.jspa?threadID=10726&#38;tstart=0">this post on the S3 forum</a> I realized that other people are thinking about doing some of the same stuff I have. paolonew was looking for a way to for a way to create URLs to S3 objects that expired. I did this a while back when I was thinking about how to host objects that I wanted to protect with some outside scheme. The confusion on the forum seemed to be about the timestamps used to expire the URL. For PHP it is fairly easy.

To clear up the expiration time issue I think these two steps are needed:

1. Keep in mind that the HTTP header dates <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html">must</a> be in GMT.
2. The PHP function <a href="http://us3.php.net/manual/en/function.time.php">time()</a> returns the seconds since the epoch January 1 1970 00:00:00 GMT). Notice here this is in GMT as well.
3. The HTTP Date header you see in a response from an S3 server is the time on that server. The machine you use to sign your request should be synced with that time. I think a good guess is that all the Amazon servers are synced with the atomic clock.

There isn't much to securing a URL after you have that tucked away. Here is an example that will sign a URL so that it is valid for 60 seconds:

```
<?php

require_once('Crypt/HMAC.php');

echo getS3Redirect("/test.jpg") . "\n";

function getS3Redirect($objectName)
{
  $S3_URL = "http://s3.amazonaws.com";
  $keyId = "your key";
  $secretKey = "your secret";
  $expires = time() + 60;
  $bucketName = "/your bucket";

  $stringToSign = "GET\n\n\n$expires\n$bucketName$objectName";
  $hasher =& new Crypt_HMAC($secretKey, "sha1");
  $sig = urlencode(hex2b64($hasher->hash($stringToSign)));

  return "$S3_URL$bucketName$objectName?AWSAccessKeyId=$keyId&Expires=$expires&Signature=$sig";
}

function hex2b64($str)
{
    $raw = '';
    for ($i=0; $i < strlen($str); $i+=2)
    {
        $raw .= chr(hexdec(substr($str, $i, 2)));
    }
    return base64_encode($raw);
}

?>
```

The hex2b64 function was pulled from the amazon S3 PHP example library.



