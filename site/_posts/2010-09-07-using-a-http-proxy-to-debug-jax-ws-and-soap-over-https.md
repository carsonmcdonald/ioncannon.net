---
layout: archive
status: publish
published: true
title: Using a HTTP Proxy to Debug JAX-WS and SOAP Over HTTPS
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1280
wordpress_url: http://www.ioncannon.net/?p=1280
date: '2010-09-07 08:06:13 -0400'
date_gmt: '2010-09-07 13:06:13 -0400'
categories:
- programming
tags:
- SOAP
- jax-ws
comments: []
---

Every once in a while I run into something I need to debug from the network up. Most of the time I can do this using <a href="http://www.wireshark.org/">Wireshark</a> but there are a few instances where what I'm really looking for is a man in the middle proxy. I usually find an alternative way to debug what I'm working on but recently I decided to find a combination that worked so the next time I can use it.


Most of the time what I'm working on when I need a proxy has something to do with SOAP and there is actually a MITM proxy in <a href="http://www.soapui.org/">SoapUI</a> but it doesn't have support for HTTPS. If you are working with SOAP and can use HTTP then SoapUI is a great tool. If that doesn't fit the bill then <a href="http://www.parosproxy.org/">Paros proxy</a> does a good job.


Paros proxy is pretty easy to set up, just download the binary distribution and run it. The only thing I wanted to change was the port that Paros listened on and that can be done by going to the Tools menu option then Options and then selecting Local proxy:


<a href="/assets/2010_09_Paros-Options.png"><img src="/assets/2010_09_Paros-Options.png" alt="" title="Paros Local Proxy Options" width="600" height="450" class="alignnone size-full wp-image-1284" /></a> 


From the description of this option you can see the Paros listens for both HTTP and HTTPS on the same port. Tell Java where to find the proxy server either on the command line with the following system settings:


```
-Dhttp.proxyHost=localhost -Dhttp.proxyPort=8081 -Dhttps.proxyHost=localhost -Dhttps.proxyPort=8081
```

or in code using the System.setProperty call:


```
    System.setProperty("http.proxyHost", "localhost");
    System.setProperty("http.proxyPort", "8081");
    System.setProperty("https.proxyHost", "localhost");
    System.setProperty("https.proxyPort", "8081");
```

At this point if you try to use the proxy with HTTPS you are going to get an error because the proxy doesn't have the correct certificate or a matching hostname for the proxied service. Luckily you can tell Java to ignore all SSL certificate problems and any hostname miss-matches with the following code:


```
// The following tells Java to ignore certificate problems
TrustManager[] trustAllCerts = new TrustManager[]
{
  new X509TrustManager()
  {
    public java.security.cert.X509Certificate[] getAcceptedIssuers()
    {
      return null;
    }
    public void checkClientTrusted(java.security.cert.X509Certificate[] certs, String authType)
    {
    }
    public void checkServerTrusted(java.security.cert.X509Certificate[] certs, String authType)
    {
    }
  }
};
try
{
  SSLContext context = SSLContext.getInstance("TLS");
  context.init(null, trustAllCerts, new java.security.SecureRandom());
  HttpsURLConnection.setDefaultSSLSocketFactory(context.getSocketFactory());
}
catch (Exception e)
{
}
// This tells Java to not worry about hostnames matching
HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier()
{
  public boolean verify(String string, SSLSession ssls)
  {
    return true;
  }
});
```

Make sure the above block of code is executed before any SOAP calls need to be made.


Now if you start Paros proxy and run your application you should see the SOAP requests in their raw form. If you are debugging SOAP messages these raw requests can be exported to text files and then loaded into SoapUI for further processing if need be.

