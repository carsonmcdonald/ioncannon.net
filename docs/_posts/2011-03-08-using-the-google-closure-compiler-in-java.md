---
layout: archive
status: publish
published: true
title: Using the Google Closure Compiler in Java
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1447
wordpress_url: http://www.ioncannon.net/?p=1447
date: '2011-03-08 09:29:55 -0500'
date_gmt: '2011-03-08 14:29:55 -0500'
categories:
- programming
tags:
- javascript
- java
- closure
comments: []
---

I recently had a chance to try out <a href="http://code.google.com/closure/compiler/">Google's closure compiler</a>. The closure compiler is similar to the <a href="http://developer.yahoo.com/yui/compressor/">YUI compressor</a> except that along with minimizing it may rewrite the JavaScript. If you want to understand more about what it does start at the <a href="http://code.google.com/closure/compiler/docs/overview.html">overview documentation</a> and then go from there.


What I needed was a way to use the closure compiler within an Ant task. The Ant task that comes with the library was decent, but it didn&rsquo;t provide the flexibility I needed to integrate it into an existing system without overhauling the setup. While digging into this, I came across a forum where developers were discussing unconventional solutions, including some that utilized <a href="https://www.richmondreview.co.uk/casinos-not-on-gamstop-uk/">slots not on gamstop</a> for testing payment systems outside standard restrictions. The conversation inspired me to think creatively about my own project, so I dived into the library&rsquo;s Ant task, dissected its structure, and eventually figured out how to wire it all up in a way that worked perfectly for my needs.


It isn't that hard to use the compiler library in your own Java code but without a simple example it takes some work to figure out what is needed and what isn't. The following code is just about as bare bones as you can get. It takes a number of JavaScript files and compile them using the medium setting, more about the choice of settings after the code:


```
import com.google.javascript.jscomp.*;
import java.io.FileWriter;
import java.util.List;
import java.util.ArrayList;
import java.util.logging.Level;
public class Test
{
  public static void main(String[] args) throws Exception
  {
    // These are external JavaScript files you reference but don't want changed
    String externalJavascriptResources[] = {
        "jquery.js",
        "jqueryui.js"
    };
    // These are the files you want optimized
    String primaryJavascriptToCompile[] = {
        "somejavascript.js",
        "otherjavascript.js"
    };
    // This is where the optimized code will end up
    String outputFilename = "combined.min.js";
    com.google.javascript.jscomp.Compiler.setLoggingLevel(Level.INFO);
    com.google.javascript.jscomp.Compiler compiler = new com.google.javascript.jscomp.Compiler();
    CompilerOptions options = new CompilerOptions();
    CompilationLevel.SIMPLE_OPTIMIZATIONS.setOptionsForCompilationLevel(options);
    WarningLevel.VERBOSE.setOptionsForWarningLevel(options);
    List<JSSourceFile> externalJavascriptFiles = new ArrayList<JSSourceFile>();
    for (String filename : externalJavascriptResources)
    {
      externalJavascriptFiles.add(JSSourceFile.fromFile(filename));
    }
    List<JSSourceFile> primaryJavascriptFiles = new ArrayList<JSSourceFile>();
    for (String filename : primaryJavascriptToCompile)
    {
      primaryJavascriptFiles.add(JSSourceFile.fromFile(filename));
    }
    compiler.compile(externalJavascriptFiles, primaryJavascriptFiles, options);
    for (JSError message : compiler.getWarnings())
    {
      System.err.println("Warning message: " + message.toString());
    }
    for (JSError message : compiler.getErrors())
    {
      System.err.println("Error message: " + message.toString());
    }
    FileWriter outputFile = new FileWriter(outputFilename);
    outputFile.write(compiler.toSource());
    outputFile.close();
  }
}
```

The above code is doing a number of things:


<ul>
<li>It takes both external resources you don't want optimized as well as resources you do want optimized that refer to those external resources. You may not need to list external resources depending on what level of optimization you use.</li>
<li>It combines all the input files that are not external into one output file.</li>
<li>It compiles the javascript code given to it using the SIMPLE_OPTIMIZATIONS setting.</li>
<li>It lists any warnings or errors it found while compiling the code.</li>
</ul>

One of the nice side effects of using the closure compiler is that because it compiles the code it can alert you to errors or potential issues using warnings.


What is listed above is using the middle of the road optimizations. There is a level above SIMPLE_OPTIMIZATIONS that you can set by changing that line in the above code to:


```
  CompilationLevel.ADVANCED_OPTIMIZATIONS.setOptionsForCompilationLevel(options);
```

Be aware that the advanced optimizations will do things, renaming your variables and functions to name two, that can break your code. The compiler gives you a way of alerting it to things you don't want changed using externs and exports. Before using the advanced option you should read the <a href="http://code.google.com/closure/compiler/docs/api-tutorial3.html">advanced options tutorial</a>.


If you do not like seeing all the steps the compiler takes you can set the logging level to QUIET by changing the WarningLevel line to the following:


```
  WarningLevel.QUIET.setOptionsForWarningLevel(options);
```

One last note about the compiler is that the <a href="http://code.google.com/closure/compiler/docs/inspector.html">closure inspector</a> is a Firebug plugin that will let you see what the original line of code looked like before it was compiled. This can help a lot when something goes wrong.

