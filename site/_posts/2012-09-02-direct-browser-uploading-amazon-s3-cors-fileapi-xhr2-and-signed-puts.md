---
layout: archive
status: publish
published: true
title: Direct Browser Uploading - Amazon S3, CORS, FileAPI, XHR2 and Signed PUTs
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1539
wordpress_url: http://www.ioncannon.net/?p=1539
date: '2012-09-02 00:01:07 -0400'
date_gmt: '2012-09-02 05:01:07 -0400'
categories:
- programming
tags: []
comments: []
---
I've been hacking around with FileAPI and XHR2 in HTML5 recently (more on why hopefully in another month or so). So when Amazon <a href="http://aws.typepad.com/aws/2012/08/amazon-s3-cross-origin-resource-sharing.html">announced S3 CORS support</a> I figured I should create a demo of directly uploading a file to S3 from a browser.


The first thing to understand is that while the upload happens directly to S3 there still needs to be some server side code that signs the URL used by the PUT call. That bit of code is really simple and I'm including an example at the end for both PHP and Ruby. If you want to skip to the fun part you can check out the <a href="https://github.com/carsonmcdonald/direct-browser-s3-upload-example">PHP and Ruby example code</a> on github (instructions there on deploying to Heroku as well).


Second there are a good number of technologies involved here so I've compiled a list of helpful links in case you aren't already familiar with them and/or want a reference:


<ul>
<li><a href="http://www.html5rocks.com/en/tutorials/file/dndfiles/">FileAPI</a></li>
<li><a href="http://www.html5rocks.com/en/tutorials/file/xhr2/">XHR2</a></li>
<li><a href="http://www.html5rocks.com/en/tutorials/cors/">CORS</a></li>
<li><a href="http://docs.amazonwebservices.com/AmazonS3/latest/dev/cors.html">S3 CORS support docs</a></li>
<li><a href="http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAuthentication.html">S3 REST Authentication</a></li>
<li><a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUT.html">S3 PUT requests</a></li>
</ul>

Setting up CORS support for an S3 bucket can be done using the console, see the S3 CORS support docs above for details. For everything in this demo I used the following CORS configuration:


```
<CORSConfiguration>
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>PUT</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>Content-Type</AllowedHeader>
        <AllowedHeader>x-amz-acl</AllowedHeader>
        <AllowedHeader>origin</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

That configuration allows any origin to issue PUTs and include the headers Content-Type, x-amz-acl and origin. You would probably want to restrict the origin more but for this demo I want to make sure it works for people who just cut and paste the above.


The following HTML sets up the file input tag and a progress bar to track the upload (index.html):


```
<html>
<head>
<link rel="stylesheet" type="text/css" href="styles.css" />
 <script type="text/javascript" src="app.js"></script>
</head>
<body>
<table>
<tr>
<td>File selection:</td>
<td><input type="file" id="files" name="files[]" multiple /></td>
</tr>
<tr>
<td>Progress:</td>
<td>
<div id="progress_bar">
<div class="percent">0%</div>
</div>
</td>
</tr>
<tr>
<td>Status:</td>
<td><span id="status"></span></td>
</tr>
</table>
  <script type="text/javascript">
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
    setProgress(0, 'Waiting for upload.');
  </script>
</body>
</html>
```

CSS for the progress bar (styles.css):


```
#progress_bar {
  width: 200px;
  margin: 10px 0;
  padding: 3px;
  border: 1px solid #000;
  font-size: 14px;
  clear: both;
  opacity: 0;
  -moz-transition: opacity 1s linear;
  -o-transition: opacity 1s linear;
  -webkit-transition: opacity 1s linear;
}
#progress_bar.loading {
  opacity: 1.0;
}
#progress_bar .percent {
  background-color: #99ccff;
  height: auto;
  width: 0;
}
```

The JavaScript that follows has a couple different parts.


<ul>
<li><b>handleFileSelect</b> - This is where things get started when a file is selected for upload. It kicks off the upload process with each file that was selected.</li>
<li><b>uploadFile</b> - Called for each file in handleFileSelect and ties the signing process to the S3 PUT process.</li>
<li><b>executeOnSignedUrl</b> - Calls the server side signing process with the a filename and mime type. The server side signed URL is then passed on to a callback.</li>
<li><b>uploadToS3</b> - Uses a signed PUT URL to upload the given file to S3 using CORS enabled XHR2.</li>
<li><b>createCORSRequest</b> - Creates a CORS XHR2 request.</li>
<li><b>setProgress</b> - Sets the current progress of the upload.</li>
</ul>

```
function createCORSRequest(method, url)
{
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr)
  {
    xhr.open(method, url, true);
  }
  else if (typeof XDomainRequest != "undefined")
  {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  }
  else
  {
    xhr = null;
  }
  return xhr;
}
function handleFileSelect(evt)
{
  setProgress(0, 'Upload started.');
  var files = evt.target.files;
  var output = [];
  for (var i = 0, f; f = files[i]; i++)
  {
    uploadFile(f);
  }
}
/**
 * Execute the given callback with the signed response.
 */
function executeOnSignedUrl(file, callback)
{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'signput.php?name=' + file.name + '&type=' + file.type, true);
  // Hack to pass bytes through unprocessed.
  xhr.overrideMimeType('text/plain; charset=x-user-defined');
  xhr.onreadystatechange = function(e)
  {
    if (this.readyState == 4 && this.status == 200)
    {
      callback(decodeURIComponent(this.responseText));
    }
    else if(this.readyState == 4 && this.status != 200)
    {
      setProgress(0, 'Could not contact signing script. Status = ' + this.status);
    }
  };
  xhr.send();
}
function uploadFile(file)
{
  executeOnSignedUrl(file, function(signedURL)
  {
    uploadToS3(file, signedURL);
  });
}
/**
 * Use a CORS call to upload the given file to S3. Assumes the url
 * parameter has been signed and is accessable for upload.
 */
function uploadToS3(file, url)
{
  var xhr = createCORSRequest('PUT', url);
  if (!xhr)
  {
    setProgress(0, 'CORS not supported');
  }
  else
  {
    xhr.onload = function()
    {
      if(xhr.status == 200)
      {
        setProgress(100, 'Upload completed.');
      }
      else
      {
        setProgress(0, 'Upload error: ' + xhr.status);
      }
    };
    xhr.onerror = function()
    {
      setProgress(0, 'XHR error.');
    };
    xhr.upload.onprogress = function(e)
    {
      if (e.lengthComputable)
      {
        var percentLoaded = Math.round((e.loaded / e.total) * 100);
        setProgress(percentLoaded, percentLoaded == 100 ? 'Finalizing.' : 'Uploading.');
      }
    };
    xhr.setRequestHeader('Content-Type', file.type);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.send(file);
  }
}
function setProgress(percent, statusLabel)
{
  var progress = document.querySelector('.percent');
  progress.style.width = percent + '%';
  progress.textContent = percent + '%';
  document.getElementById('progress_bar').className = 'loading';
  document.getElementById('status').innerText = statusLabel;
}
```

The above example calls the PHP version of the server side signing code. It can easily be changed to anything that can sign a request in the same way.


I have an <a href="http://www.ioncannon.net/programming/21/creating-s3-urls-that-expire-using-php/">old way of creating signed URLs</a> using PHP that hasn't been updated in forever. With the more recent versions of PHP there is built in support for the <a href="http://php.net/manual/en/function.hash-hmac.php">hash-hmac function</a> and a <a href="http://php.net/manual/en/function.base64-encode.php">base64 encode</a>. Here is the updated PHP script you need on the server side, to get it to work you would need to replace the S3_KEY, S3_SECRET and S3_BUCKET values with your own:


```
//
// Change the following settings
//
$S3_KEY='S3 Key Here';
$S3_SECRET='S3 Secret Here';
$S3_BUCKET='/uploadtestbucket';
$EXPIRE_TIME=(60 * 5); // 5 minutes
$S3_URL='http://s3.amazonaws.com';
$objectName='/' . $_GET['name'];
$mimeType=$_GET['type'];
$expires = time() + $EXPIRE_TIME;
$amzHeaders= "x-amz-acl:public-read";
$stringToSign = "PUT\n\n$mimeType\n$expires\n$amzHeaders\n$S3_BUCKET$objectName";
$sig = urlencode(base64_encode(hash_hmac('sha1', $stringToSign, $S3_SECRET, true)));
$url = urlencode("$S3_URL$S3_BUCKET$objectName?AWSAccessKeyId=$S3_KEY&Expires=$expires&Signature=$sig");
echo $url;
```

With all of that in place you should now be able to upload directly to S3 using a browser that supports CORS, XHR2 and the FileAPI (pretty much everything but IE currently).

