---
layout: archive
status: publish
published: true
title: Java GIF Adventure
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 79
wordpress_url: http://www.ioncannon.net/php/79/java-gif-adventure/
date: '2008-03-07 09:14:29 -0500'
date_gmt: '2008-03-07 14:14:29 -0500'
categories:
- php
tags: []
comments:
- id: 64514
  author: drain
  author_email: drain@nooospam.com
  author_url: http://none
  date: '2008-04-23 17:01:03 -0400'
  date_gmt: '2008-04-23 22:01:03 -0400'
  content: "Your way mangles and dirties the image so slightly. Try the following
    and it comes out nice and clean...\r\n\r\n\r\nbufferedImage = new BufferedImage(width,
    height, BufferedImage.TYPE_INT_ARGB);\r\ngraphic = (Graphics2D)bufferedImage.getGraphics();\r\n.\r\n.\r\n.\r\n
    \       graphic.setColor(java.awt.Color.white);\r\ngraphic.setComposite(AlphaComposite.Clear);
    // for transparency\r\ngraphic.fillRect(0, 0, width, height);\r\ngraphic.setComposite(AlphaComposite.SrcOver);
    // for transparency"
---
I was recently working on a project that generated PNGs using Java from a Java2D canvas. Along the way someone wanted to change the graphics to have transparent backgrounds and because they were needed for display on the web I knew this would become an issue because <a href="http://blogs.msdn.com/dmassy/archive/2004/08/05/209428.aspx">IE doesn't support transparency in PNGs</a> out of the box. And so my journey started.


I decided to start by making the PNGs I was generating transparent just to verify that it wasn't that difficult to do. It turned out to be very easy. I'm using the standard ImageIO libraries and wanted to stick to using them. Here is an example of making the background of an image transparent:

```
public class Test
{
  public static void main(String[] args) throws Exception
  {
    BufferedImage image = new BufferedImage(100, 100, BufferedImage.TYPE_INT_ARGB);
    Graphics2D canvas = (Graphics2D) image.getGraphics();
    canvas.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

    canvas.setColor(Color.white);
    canvas.setBackground(Color.white);
    canvas.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.0f));
    canvas.fillRect(0, 0, 100, 100);

    canvas.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 1.0f));
    canvas.setColor(Color.black);

    canvas.drawLine(10, 10, 20, 20);

    canvas.dispose();

    OutputStream ostream = new FileOutputStream("test.png");
    ImageIO.write(image, "png", ostream);
    ostream.flush();
  }
}
```
The next thing I did was try to just change the format that was being saved from "png" to "gif" thinking that because I had a recent version of Java 1.5 this might just work. However it appears that <a href="http://forum.java.sun.com/thread.jspa?threadID=770668&messageID=4391702">writting GIFs is not supported until Java 1.6</a> so I was out of luck.

As it turns out though I did some more searching and found that there is actually a <a href="https://gif-plugin.dev.java.net/">plugin for GIFs</a> that was made for the ImageIO system. It was very easy to install, just download the jar and put it into the classpath. After that changing "png" to "gif" worked. However, the plugin doesn't support alpha or doesn't support it in the same way as the PNG writer. I then tried to change the transparency around a number of ways but nothing worked and in some cases the GIF generated was broken. The most promising hack I tried was to change the alpha flag on the background color using a BufferedImageOp filter like this:

```
    BufferedImageOp filter = new BufferedImageOp()
    {
      public BufferedImage filter(BufferedImage src, BufferedImage dest)
      {
        if (dest == null)
        {
          dest = createCompatibleDestImage(src, null);
        }

        int width = src.getWidth();
        int height = src.getHeight();

        for (int y = 0; y < height; y++)
        {
          for (int x = 0; x < width; x++)
          {
            if( src.getRGB(x, y) == Color.white.getRGB())
            {
              dest.setRGB(x, y, 0x00FFFFFF & Color.white.getRGB());
            }
          }
        }
        return dest;
      }

      public Rectangle2D getBounds2D(BufferedImage src)
      {
        return src.getRaster().getBounds();
      }

      public BufferedImage createCompatibleDestImage(BufferedImage src, ColorModel destCM)
      {
        if (destCM == null)
        {
          destCM = src.getColorModel();
        }

        int width = src.getWidth();
        int height = src.getHeight();

        return new BufferedImage(destCM, destCM.createCompatibleWritableRaster(width, height), destCM.isAlphaPremultiplied(), null);
      }

      public Point2D getPoint2D(Point2D srcPt, Point2D dstPt)
      {
        if (dstPt == null)
        {
          dstPt = new Point2D.Float();
        }
        dstPt.setLocation(srcPt.getX(), srcPt.getY());
        return dstPt;
      }

      public RenderingHints getRenderingHints()
      {
        return null;
      }
    };
```
The problem with this approach is that the anti-aliasing caused the borders to stand out. While this was close it also wasn't good enough to use.

In the end I gave up and went back to PNGs. I fixed my issues with IE by using the <a href="http://www.twinhelix.com/css/iepngfix/">IE AlphaImageLoader fix</a>.

