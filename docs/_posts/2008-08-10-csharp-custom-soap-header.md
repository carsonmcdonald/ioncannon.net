---
layout: archive
status: publish
published: true
title: C# custom SOAP header
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 71
wordpress_url: http://www.ioncannon.net/?p=71
date: '2008-08-10 19:34:48 -0400'
date_gmt: '2008-08-11 00:34:48 -0400'
categories:
- programming
tags:
- SOAP
- web services
- CSharp
comments:
- id: 127193
  author: dimiro
  author_email: dimiro@inwind.it
  author_url: ''
  date: '2009-03-20 06:59:34 -0400'
  date_gmt: '2009-03-20 11:59:34 -0400'
  content: "Good morning, i'm from Italy and i have find the same problem with an
    axis webservice.\r\nI pursued your same solution, giving a correct response from
    webservice;\r\nbut \r\n\"reference to the custom header before each call that
    requires the custom header\"\r\nand\r\n\"regenerating the code from an updated
    WSDL will wipe out the changes\"\r\nin the .Net 3.5 and VS2008 era...\r\nDo you
    know if WSE or WCF could give any workaround ?\r\nThank you for attention.\r\nBest
    regards."
- id: 149301
  author: francis
  author_email: francis_chie@yahoo.com
  author_url: http://www.pctimelogger.com
  date: '2009-09-03 16:02:37 -0400'
  date_gmt: '2009-09-03 21:02:37 -0400'
  content: You can use SoapExtension to insert header for each request. In this way,
    changes on generated proxy class is not required.
- id: 169289
  author: Tamer Fathy
  author_email: tamer.fathy@gmail.com
  author_url: http://tamer-fathy.blogspot.com/
  date: '2010-05-04 18:22:17 -0400'
  date_gmt: '2010-05-04 23:22:17 -0400'
  content: "you can use message inspection it gives you great control on message\r\n\r\nhttp://msdn.microsoft.com/en-us/library/aa717047.aspx"
---
While working on an SOAP service I needed to create a number of clients for different languages. This would normally not be that big of a challenge except that the SOAP service had custom headers for doing authentication. Because of the complexity in setting up Axis to use WS-Security the choice was made to do authentication by adding a few out of band SOAP header values. The first few implementations went fine but then I came to C# and had a problem.


The problem was that using the auto-generated code from the WSDL didn't provide any obvious way of adding the headers I needed to add. After a lot of digging I found an article on adding <a href="http://msdn.microsoft.com/en-us/library/bb802855.aspx">Support for Custom HTTP and SOAP Headers</a> and that led me down the following path to a solution.

First off you need a custom header class that derives from SoapHeader. This class will contain the attributes that get sent in the SOAP header. Here is an example:

```
[System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://model.ioncannon.net")]
[System.Xml.Serialization.XmlRootAttribute("securitytoken", Namespace = "http://model.ioncannon.net", IsNullable = false)]
public class CustomHeader : SoapHeader
{
  [System.Xml.Serialization.XmlTextAttribute()]
  public string securitytoken;
}
```
Next you will need an instance of the custom header in the generated service client. The variable name needs to match what gets stuck in something later so make it readable:

```
public CustomHeader creds;
```
The final step is to a reference to the custom header before each call that requires the custom header. This is probably the least obvious part. The first line in the following code is the tie between the custom header instance created above and the generated "echo" service call:

```
[System.Web.Services.Protocols.SoapHeaderAttribute("creds", Direction=System.Web.Services.Protocols.SoapHeaderDirection.InOut)]
[System.Web.Services.Protocols.SoapDocumentMethodAttribute("urn:echo", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Bare)]
[return: System.Xml.Serialization.XmlElementAttribute("echoResponse", Namespace="http://model.ioncannon.net")]
public echoResponse echo([System.Xml.Serialization.XmlElementAttribute("echo", Namespace="http://model.ioncannon.net")] echo echo1) {
  object[] results = this.Invoke("echo", new object[] {echo1});
  return ((echoResponse)(results[0]));
}
```
Here is an example of calling the modified service:

```
CustomHeader mySoapHeader = new CustomHeader();
mySoapHeader.securitytoken = "testtoken";

TestService client = new TestService();
client.creds = mySoapHeader;
echo request = new echo();
request.valueToEcho = "test";
string echoValue = client.echo(request).@return;
Console.WriteLine(echoValue);
```
The only downside to doing this is that regenerating the code from an updated WSDL will wipe out the changes.

