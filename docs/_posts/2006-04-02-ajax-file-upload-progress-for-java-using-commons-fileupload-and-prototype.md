---
layout: archive
status: publish
published: true
title: AJAX file upload progress for Java using commons fileupload and prototype
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 38
wordpress_url: http://www.ioncannon.net/uncategorized/38/ajax-file-upload-progress-for-java-using-commons-fileupload-and-prototype/
date: '2006-04-02 21:15:15 -0400'
date_gmt: '2006-04-03 02:15:15 -0400'
categories:
- programming
tags:
- ajax
- javascript
- java
comments:
- id: 4457
  author: Stephen More
  author_email: mores@yahoo.com
  author_url: ''
  date: '2007-02-28 13:15:50 -0500'
  date_gmt: '2007-02-28 18:15:50 -0500'
  content: "commons-fileupload version 1.2 now has support for progress listeners:
    \r\nupload.setProgressListener(progressListener);\r\n\r\nIt also supports Streaming
    so the upload can go straight into a database.\r\n\r\nPerhaps you can provide
    a new example...the code has been simplified."
- id: 28381
  author: ss
  author_email: sudhir@jyog.com
  author_url: http://www.jyog.com
  date: '2007-09-08 01:52:03 -0400'
  date_gmt: '2007-09-08 06:52:03 -0400'
  content: "Excellent\r\nThis is what I was looking for."
- id: 28383
  author: ss
  author_email: sudhir@jyog.com
  author_url: http://www.jyog.com
  date: '2007-09-08 01:54:14 -0400'
  date_gmt: '2007-09-08 06:54:14 -0400'
  content: I think i will use dojo insted of prototype.
- id: 28791
  author: Matt
  author_email: mharrah@platinumsolutions.com
  author_url: ''
  date: '2007-09-13 13:58:19 -0400'
  date_gmt: '2007-09-13 18:58:19 -0400'
  content: Very nice.  Took me a moment to figure out that the sample code is NOT
    what you were going over in the text of the article.
- id: 66879
  author: Dan
  author_email: dpolites@gmail.com
  author_url: ''
  date: '2008-05-06 10:34:56 -0400'
  date_gmt: '2008-05-06 15:34:56 -0400'
  content: "One issue I ran into with this code was adding non-file form fields along
    with the file field.  For example, I added a description field before my file
    upload field.  This caused the bytes read to be set to the total size as soon
    as the file upload began. Then my progress bar would go to 200%.  Here is my fix,
    I'm open to better solutions if any.\r\n\r\nInside MonitoredDiskFileItem.java:\r\n\r\n\r\npublic
    OutputStream getOutputStream() throws IOException {\r\n    if( mos == null ) {\r\n
    \       // Create a new MonitoredOutputStream.\r\n        this.mos = new MonitoredOutputStream(super.getOutputStream(),
    listener);\r\n\r\n        // Reset the bytes of the file upload listener.\r\n
    \       ( (FileUploadListener ) listener ).getFileUploadStats().setBytesRead(0);
    \   \r\n    }\r\n\r\n    return this.mos;\r\n}"
- id: 146101
  author: tmax
  author_email: max@test.com
  author_url: ''
  date: '2009-08-11 07:22:39 -0400'
  date_gmt: '2009-08-11 12:22:39 -0400'
  content: "Hi Carson,\r\n\r\nNice example you have provided in source code.\r\n\r\nI
    have came across a problem in your source code.\r\n\r\nWhen file upload completes
    and response comes to the html page, it is not able to call the javascript function
    \"killUpdate\". That results in the non stop update cycle.\r\n\r\nI have tried
    with eval() but no success. If you can look around for this your help is much
    appreciated.\r\n\r\nthanks"
- id: 158046
  author: Sonia Pandit
  author_email: v.kris21@gmail.com
  author_url: ''
  date: '2009-12-01 13:59:34 -0500'
  date_gmt: '2009-12-01 18:59:34 -0500'
  content: "It works nicely, but I have a lot of red markups in eclipse for the prototype.js
    file.\r\nSorry I don't have too much experience in javascript.  I also need to
    upload multiple files.  How do I modify it for multiple file upload and where
    are the files being uploaded to?  \r\n\r\nThanks,\r\n\r\nSonia"
- id: 158612
  author: Debabrata Biswas
  author_email: debabrata.biswas@yahoo.co.in
  author_url: ''
  date: '2009-12-08 06:02:53 -0500'
  date_gmt: '2009-12-08 11:02:53 -0500'
  content: I used your source code,it runs in local computer fine,showing percentage
    bar.But when i put this code in live server.it wont run mean progress bar not
    showing&acirc;&euro;&brvbar;I add every things whatever i used in local computer.Showing
    UploadMonotor not defined.I add DWR jar2.5,DWR.XML that create UploadMonitor.js.And
    import classes that contains UploadMonitor class.Please If you can look around
    for this your help is much appreciated and very needful to me.
- id: 160035
  author: Driss
  author_email: drisskazitani@hotmail.com
  author_url: ''
  date: '2010-01-01 16:12:02 -0500'
  date_gmt: '2010-01-01 21:12:02 -0500'
  content: "It's still accurate, efficient (very fast) and it gives more control on
    the flow than [```
    ;\r\n    many thanks for sharing Carson +++\r\n\r\nIt can handle also multiple
    files uploaded at once\r\n   (but the better is to generate dynamically new forms
    in the Javascript side as needed and handling the upload in Threads)\r\n\r\nI
    simply handled some javascript cases :\r\n-/ In  [UploadServlet.java],  escaping
    character \"'\" within the server's message returned by sendCompleteResponse()
    :\r\n    ```window.parent.killUpdate('\" + message.replace(\"'\", \"\\\\'\")
    + \"');```\r\n\r\nIn the client side, testing [updater] before stop it in
    [function killUpdate(message) :\r\n\t```if(updater != null){\r\n                    updater.stop();\r\n
    \         }```\r\n\r\n\r\nAll the best !"
---
This has been done before with PHP (<a href="http://bluga.net/projects/uploadProgressMeter/">AJAX upload progress meter for PHP</a>) etc but I needed something a little different because I wanted to upload a file and then have it loaded into a database. I looked around and found that someone had already made something that used the commons file upload package to do the upload part (<a href="http://www.telio.be/blog/2006/01/06/ajax-upload-progress-monitor-for-commons-fileupload-example/">AJAX Upload progress monitor for Commons-FileUpload Example</a>). It wasn't exactly what I was looking for but it a good start.

To understand the way this works I think it is easiest to break it down into parts:
<ol>
<li>A file upload extention that counts bytes as they are uploaded</li>
<li>An interface that monitors the progress of something running on the server</li>
<li>AJAX to pull the monitoring into the current screen</li>
</ol>
<a></a>
<h3>Counting bytes when files are uploaded</h3>
This was taken from the <a href="http://www.telio.be/blog/2006/01/06/ajax-upload-progress-monitor-for-commons-fileupload-example/">example listed above</a>. It extends and wraps parts of the commons File Upload classes so that you can count the bytes as they are uploaded to the server. You can download the <a href="http://www.ioncannon.net/examples/fileupload-ext.zip">source with build file</a> or the <a href="http://www.ioncannon.net/examples/fileupload-ext1.zip">binary</a>. You will also need the <a href="http://jakarta.apache.org/site/downloads/downloads_commons-fileupload.cgi">commons file upload</a>, <a href="http://jakarta.apache.org/site/downloads/downloads_commons-io.cgi">commons io</a> and <a href="http://jakarta.apache.org/site/downloads/downloads_commons-logging.cgi">commons logging</a>. If you download the source put the commons jars in the lib directory before building.
The code is fairly simple to follow. For a deeper dive into the logic behind each component, you can find <a href="https://www.newsbtc.com/cash-app-casinos/">all info here</a> in the official documentation. MonitoredDiskFileItemFactory replaces DiskFileItemFactory and the construction of a MonitoredDiskFileItemFactory takes an OutputStreamListener that will be passed on down the chain. The new factory creates MonitoredDiskFileItems instead of DiskFileItems for each file uploaded. When the file needs to be written to disk, a MonitoredOutputStream is given back instead of a normal OutputStream. The MonitoredOutputStream calls the OutputStreamListener methods as the bytes are written, and with that, you now have a way to monitor the byte count as the file is created on the server.
Now to test this all out we can just have an OutputStreamListener that writes its progress out to a logfile or something.

```
public class FileUploadListener implements OutputStreamListener
{
  private long totalFileSize;
  private long currentFileRead;
  public FileUploadListener(long totalFileSize)
  {
    this.totalFileSize = totalFileSize;
    this.currentFileRead = 0;
  }
  public void start()
  {
    log.debug("Upload started. Total file size: " + totalFileSize);
  }
  public void bytesRead(int byteCount)
  {
    log.debug("Read bytes. Currently " + byteCount + " out of " + totalFileSize + " bytes.");
    currentFileRead+=byteCount;
  }
  public void error(String error)
  {
    log.debug("Hit an error: " + error);
  }
  public void done()
  {
    log.debug("Upload done.");
  }
  public long getTotalRead()
  {
    return currentFileRead;
  }
  public long getTotalSize()
  {
    return totalFileSize;
  }
}
```

Now we try it out. You can put this in a servlet or jsp so I'm only going to list the parts that matter.

```
  FileUploadListener listener = new FileUploadListener(request.getContentLength());
  session.setAttribute("LISTENER", listener);
  FileItemFactory factory = new MonitoredDiskFileItemFactory(listener);
  ServletFileUpload upload = new ServletFileUpload(factory);
  List items = upload.parseRequest(request);
  for (Iterator i = items.iterator(); i.hasNext();)
  {
    FileItem fileItem = (FileItem) i.next();
    if (!fileItem.isFormField())
    {
       // code here to process the file
     }
   }
```

I'm going to assume you can find the correct way to do the actual form upload part.
Note: One issue that you will face at some point is where the upload post goes to becuase when you get to the AJAXy part of things you want the post to stay on the same page. You can use a hidden iframe and the form's "target" parameter to do this (I have an example later). This is one thing the Java examples I found didn't have but the PHP examples did and I'm not sure exactly how the Java examples work without it.
<h3>Monitoring progress on the server</h3>
The next step is to monitor the progress of the upload on the server. What you are monitoring on the server doesn't even need to be the upload. For the work I was doing the upload goes fairly quickly but what happens to the file after the upload takes a little longer. I wanted to monitor both and that is one reason I think it helps to break this up into parts because you aren't limited to just monitoring file uploads.
The main thing to keep in mind here is that the application server is multithreaded and you can make more than one request to the server at the same time. You probably know that you can open a tab in firefox or another window in ie and use the same session from the current webapp you are using. Knowing that you can create a page that monitors the status of things as they are running on the server. 
From the example above you could toss the listener into the users session. Then insead of logging you just add a couple variables to keep track of the number of bytes that have been uploaded. Then create a simple jsp that pulls the Listener out of the session and dumps its data to a page. Open two windows, one to the upload page and another one to the status page. Start the upload and then start refreshing the status. You should see that the values change as the file is uploaded.

```
<%@page%>
<%
  FileUploadListener listener = (FileUploadListener)session.getAttribute("LISTENER");
%>
Total size: <%=listener.getTotalSize()%><br/>
Read count: <%=listener.getTotalRead()%><br/>
```

Of course you will probably want more than just the total size and bytes read as well as more formating like a little progress bar or something but I'll leave that up to you. 
<h3>AJAX integration with prototype</h3>
You have the major parts to the upload progress done and now all you need is the AJAX part. To do this I chose to use <a href="http://prototype.conio.net/">prototype</a> because it cuts right to what you want to do. One call is all you need to use: Ajax.PeriodicalUpdater.
The Ajax.PeriodicalUpdater call will update a container (in my case a div) on a set interval. Here is an example of how to have it update a div with an id of "status" every second.

```
new Ajax.PeriodicalUpdater(
                                'status',
                                'status.jsp',
                                {asynchronous:true, frequency:1, method:'get'});
```

The first argument is the id of the div, the second is the jsp that contains the data to stick into the div every second and the 3rd arguement is a set of options. There are more options availabe if you need them.
You would want to kick the update off whenever the form is posted. When the post is complete the iframe used as a place to post to will load with the results of the servlet or jsp that you posted to. If you return some javascript as a result for the iframe you will be able to create a final "finished" message on the page to let the user know the upload has completed and stop the processing of the AJAX updater.
So there you have it. The basics of setting up an upload progress bar using java and AJAX. I have left out a good bit but you should have enough to at least get you started.
By request I have created a simple example that pulls everything together. The source contains everything you need to create a war file including all source and an ant build file.
<a href="/examples/testupload.zip">Example Source</a>

