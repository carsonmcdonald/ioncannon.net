---
layout: archive
status: publish
published: true
title: Spring 3 File Upload Example
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 975
wordpress_url: http://www.ioncannon.net/?p=975
date: '2010-03-22 06:30:40 -0400'
date_gmt: '2010-03-22 11:30:40 -0400'
categories:
- programming
tags:
- java
- spring
- mvc
comments:
- id: 166682
  author: paulo
  author_email: phavelar@gmail.com
  author_url: ''
  date: '2010-04-01 00:37:38 -0400'
  date_gmt: '2010-04-01 05:37:38 -0400'
  content: "Sweet stuff  thanks !\r\nHow about making a RESTfull fileuploader example
    using Spring 3 as well?"
- id: 168895
  author: wsams
  author_email: wjsams@gmail.com
  author_url: http://www.siamnet.org
  date: '2010-04-29 15:28:00 -0400'
  date_gmt: '2010-04-29 20:28:00 -0400'
  content: "Hi, I was wondering if you've junit tested this upload controller?\r\n\r\nI
    can't figure out how to pass the uploadItem and result to the method when testing
    the create method below,\r\n\r\ncreate(UploadItem uploadItem, BindingResult result)"
- id: 170159
  author: Carlos Segu&Atilde;&shy;n
  author_email: seguin_lozano@yahoo.es
  author_url: ''
  date: '2010-05-18 04:18:49 -0400'
  date_gmt: '2010-05-18 09:18:49 -0400'
  content: |-
    Just one doubt,

    how do you make form:input path="fileData" type="file" work? As far as I ve seen there is not support for the input type file in spring tld lib.

    Thanks
- id: 193308
  author: Abhijith
  author_email: mk_abhi05@yahoo.co.in
  author_url: ''
  date: '2010-12-22 00:17:53 -0500'
  date_gmt: '2010-12-22 05:17:53 -0500'
  content: "I agree with Carlos Segu&Atilde;&shy;n, there is no such attribute \"type\"
    found in  tag in jstl. Where did you get that..? Will you please explain...? \r\n\r\nThanks"
- id: 197032
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-01-31 09:26:37 -0500'
  date_gmt: '2011-01-31 14:26:37 -0500'
  content: '@Carlos @Abhijith The type attribute is just passed along to the input
    tag and not processed by the taglib at all. If you want to see what I mean just
    take a normal text input tag and add a type="whatever" to it and you will see
    that type="whatever" shows up in the resulting output.'
- id: 199003
  author: Vladimir
  author_email: valdemar85@ukr.net
  author_url: ''
  date: '2011-02-25 10:11:19 -0500'
  date_gmt: '2011-02-25 15:11:19 -0500'
  content: "Very good example. And what about several file upload inputs? How to bind
    file upload inputs if they are added dynamically by javascript and we don't know
    how much them will be?\r\nCould you give an example for this case, please?"
- id: 200749
  author: Hoof
  author_email: hovendal@gmail.com
  author_url: ''
  date: '2011-03-21 09:39:22 -0400'
  date_gmt: '2011-03-21 14:39:22 -0400'
  content: "\"\"\"\r\n@Carlos @Abhijith The type attribute is just passed along to
    the input tag and not processed by the taglib at all. If you want to see what
    I mean just take a normal text input tag and add a type=\"whatever\" to it and
    you will see that type=\"whatever\" shows up in the resulting output.\r\n\"\"\"\r\nIf
    I do this, I get the following error... So how again, do you make this work?\r\n\r\norg.apache.jasper.JasperException:
    /WEB-INF/jsp/upload.jsp(70,3) Attribute type invalid for tag input according to
    TLD"
- id: 203190
  author: Julian Bonilla
  author_email: gator99@gmail.com
  author_url: http://julianbonilla.com
  date: '2011-04-27 12:49:46 -0400'
  date_gmt: '2011-04-27 17:49:46 -0400'
  content: "One thing that took some further investigation was getting this work in
    a portlet environment with Spring Portlet MVC.\r\n\r\nI was using CommonsMultipartResolver,
    but the model attributes always came back null.  I swapped the resolver to use
    CommonsPortletMultipartResolver and everything else works unchanged."
- id: 213563
  author: Naveen
  author_email: naveen65@gmail.com
  author_url: ''
  date: '2011-09-09 06:32:21 -0400'
  date_gmt: '2011-09-09 11:32:21 -0400'
  content: "Hi Carson,\r\n\r\ni am getting the following error when i use this code:\r\n\r\njava.lang.IllegalStateException:
    Neither BindingResult nor plain target object for bean name"
- id: 213579
  author: Karl Minor
  author_email: k-minor@ti.com
  author_url: ''
  date: '2011-09-09 09:29:13 -0400'
  date_gmt: '2011-09-09 14:29:13 -0400'
  content: This used to work for me, but lately I get the "Attribute type invalid
    for tag input according to TLD" error because, as is pointed out above, "type"
    is not valid in the TLD.  Maybe something changed in a recent release.   I'm concerned
    that uploading files is so rare in Spring MVC that it is virtually undocumented,
    at least when using the form tag lib.
- id: 213587
  author: Karl Minor
  author_email: k-minor@ti.com
  author_url: ''
  date: '2011-09-09 11:39:12 -0400'
  date_gmt: '2011-09-09 16:39:12 -0400'
  content: "In case anyone else is still struggling with this, I worked around the
    \"\"Attribute type invalid for tag input according to TLD\"\" error by reverting
    the  element to the raw  element equivalent that it would generate (the other
    spring  form tags can be left alone):\r\n\r\n                <!--form:input path=\"multipartfile\"
    type=\"file\"/-->\r\n                \r\n\r\nIt looks like the latest version
    of Spring enforces the limitation that the form:input tag can only represent a
    text input."
- id: 213589
  author: Karl Minor
  author_email: k-minor@ti.com
  author_url: ''
  date: '2011-09-09 11:47:21 -0400'
  date_gmt: '2011-09-09 16:47:21 -0400'
  content: "Oops . . . previous post swallowed my markup:\r\n\r\n                <!--form:input
    path=\"multipartfile\" type=\"file\"/-->\r\n                <input id=\"multipartfile\"
    name=\"multipartfile\" type=\"file\" value=\"\"/>"
- id: 229266
  author: Kevin Findlay
  author_email: kevinfindlay@yahoo.com
  author_url: ''
  date: '2012-01-10 09:55:42 -0500'
  date_gmt: '2012-01-10 14:55:42 -0500'
  content: I needed to add the Commons Logging file to the lib directory to get this
    to work without a startup error in Tomcat6
---

I had the opportunity to figure out how to do file uploads using Spring 3 the other day and I couldn't find anything that pulled it all together. What follows is a complete example of how to do MVC based file uploads with Spring 3.


I'm going to assume you know something about <a href="http://www.springsource.org/">Spring</a> and their MVC configuration in general. If you want a simple MVC example to start with check out their <a href="https://src.springframework.org/svn/spring-samples/mvc-basic/trunk/src/main/">SVN MVC-Basic sample</a>. There is a decent amount of boiler plate work so I've created a <a href="/examples/Spring3Upload.zip">project zip file</a> with all the code, a build file and configuration in it (you just need to add the libraries).


First lets start by gathering up all the libraries we are going to need (see the end of the post for the directory layout I used or just unzip the project). Grab a copy of the Spring 3 libraries, at this time the latest version is spring-framework-3.0.1.RELEASE-A.zip and that is what I used for the following example. For the file upload part there are two non-Spring dependencies as well: <a href="http://commons.apache.org/fileupload/">Apache Commons FileUpload</a> and <a href="http://commons.apache.org/io/">Apache Commons IO</a>. If you want to use the example project from the zip just copy all the jar files to the lib directory.


Next it is worth a quick look at the information provided in the Spring documentation about <a href="http://static.springsource.org/spring/docs/3.0.0.RELEASE/reference/html/mvc.html#mvc-multipart">MVC multipart</a>. It touches on what needs to be done but leaves out a full example. In documentation you will see that they talk about using a "multipart resolver" and that can be found at the end of <i>web/WEB-INF/spring/app-config.xml</i>:


```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
		http://www.springframework.org/schema/beans	http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.0.xsd">
    <!-- Scans the classpath of this application for @Components to deploy as beans -->
    <context:component-scan base-package="net.ioncannon"/>
    <!-- Configures Spring MVC -->
    <import resource="mvc-config.xml"/>
    <!-- Configure the multipart resolver -->
    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
        <!-- one of the properties available; the maximum file size in bytes -->
<property name="maxUploadSize" value="100000"/>
    </bean>
</beans>
```

The above app-config.xml configuration file is referenced from the mvc-config.xml configuration file. The mvc-config.xml configuration file doesn't need anything special for multipart uploads so I'll skip listing it here, have a look in the zip file if you are interested in its contents.


Now that the configuration is set the next step is to create the entry form for the upload. I've done this in the view JSP found in <i>web/WEB-INF/views/upload/uploadForm.jsp</i>:


```
<%@page contentType="text/html;charset=UTF-8" %>
<%@page pageEncoding="UTF-8" %>
<%@ page session="false" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
    <head>
        <META http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <title>Upload Example</title>
    </head>
    <body>
<form:form modelAttribute="uploadItem" method="post" enctype="multipart/form-data">
<fieldset>
<legend>Upload Fields</legend>
<form:label for="name" path="name">Name</form:label><br/>
<form:input path="name"/>
<form:label for="fileData" path="fileData">File</form:label><br/>
<form:input path="fileData" type="file"/>

                    <input type="submit" />
                
</fieldset>
</form:form>
    </body>
</html>
```

A few notes about this view JSP:


<ul>
  <li>The form needs to have the encoding type set correctly. Look for: enctype="multipart/form-data"</li>
  <li>The file input field needs to be set: type="file"</li>
  <li>In the above I've included a Name field in the model as well as the File field just to show that you can mix fields in the same form</li>
  <li>The definition of the model can be found next and I assume that it is introduced into the form as "uploadItem"</li>
</ul>

The model is pretty simple and can be found in <i>src/net/ioncannon/model/UploadItem.java</i>:

```
package net.ioncannon.model;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

public class UploadItem
{
  private String name;
  private CommonsMultipartFile fileData;
  public String getName()
  {
    return name;
  }
  public void setName(String name)
  {
    this.name = name;
  }
  public CommonsMultipartFile getFileData()
  {
    return fileData;
  }
  public void setFileData(CommonsMultipartFile fileData)
  {
    this.fileData = fileData;
  }
}
```

The Name attribute is just an extra input field and not the name of the file. Notice that the File attribute is of type CommonsMultipartFile. The CommonsMultipartFile type has a number of features that give you information about the uploaded file as well as access to its contents.


The controller brings everything together. The source can be found in the file <i>src/net/ioncannon/controller/UploadController.java</i>:

```
package net.ioncannon.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import net.ioncannon.model.UploadItem;
@Controller
@RequestMapping(value = "/upload")
public class UploadController
{
  @RequestMapping(method = RequestMethod.GET)
  public String getUploadForm(Model model)
  {
    model.addAttribute(new UploadItem());
    return "upload/uploadForm";
  }
  @RequestMapping(method = RequestMethod.POST)
  public String create(UploadItem uploadItem, BindingResult result)
  {
    if (result.hasErrors())
    {
      for(ObjectError error : result.getAllErrors())
      {
        System.err.println("Error: " + error.getCode() +  " - " + error.getDefaultMessage());
      }
      return "upload/uploadForm";
    }
    // Some type of file processing...
    System.err.println("-------------------------------------------");
    System.err.println("Test upload: " + uploadItem.getName());
    System.err.println("Test upload: " + uploadItem.getFileData().getOriginalFilename());
    System.err.println("-------------------------------------------");
    return "redirect:/app/";
  }
}
```

Once the file is uploaded I'm just dumping out part of the information. Doing something exciting with the file is up to you.


That is all there is to it. Here is a list of what the project structure looks like with everything pulled together including all the libraries, build file, source and configuration files:


```
build/build.xml
lib/commons-fileupload-1.2.1.jar
lib/commons-io-1.4.jar
lib/org.springframework.aop-3.0.1.RELEASE-A.jar
lib/org.springframework.asm-3.0.1.RELEASE-A.jar
lib/org.springframework.aspects-3.0.1.RELEASE-A.jar
lib/org.springframework.beans-3.0.1.RELEASE-A.jar
lib/org.springframework.context-3.0.1.RELEASE-A.jar
lib/org.springframework.context.support-3.0.1.RELEASE-A.jar
lib/org.springframework.core-3.0.1.RELEASE-A.jar
lib/org.springframework.expression-3.0.1.RELEASE-A.jar
lib/org.springframework.instrument-3.0.1.RELEASE-A.jar
lib/org.springframework.instrument.tomcat-3.0.1.RELEASE-A.jar
lib/org.springframework.jdbc-3.0.1.RELEASE-A.jar
lib/org.springframework.jms-3.0.1.RELEASE-A.jar
lib/org.springframework.orm-3.0.1.RELEASE-A.jar
lib/org.springframework.oxm-3.0.1.RELEASE-A.jar
lib/org.springframework.spring-library-3.0.1.RELEASE-A.libd
lib/org.springframework.test-3.0.1.RELEASE-A.jar
lib/org.springframework.transaction-3.0.1.RELEASE-A.jar
lib/org.springframework.web-3.0.1.RELEASE-A.jar
lib/org.springframework.web.portlet-3.0.1.RELEASE-A.jar
lib/org.springframework.web.servlet-3.0.1.RELEASE-A.jar
lib/org.springframework.web.struts-3.0.1.RELEASE-A.jar
src/net/ioncannon/controller/UploadController.java
src/net/ioncannon/model/UploadItem.java
web/WEB-INF/web.xml
web/WEB-INF/spring/app-config.xml
web/WEB-INF/spring/mvc-config.xml
web/WEB-INF/views/welcome.jsp
web/WEB-INF/views/upload/uploadForm.jsp
```
