---
layout: archive
status: publish
published: true
title: Howto base64 encode with C/C++ and OpenSSL
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 34
wordpress_url: http://www.ioncannon.net/uncategorized/34/howto-base64-encode-with-cc-and-openssl/
date: '2006-04-11 16:26:32 -0400'
date_gmt: '2006-04-11 21:26:32 -0400'
categories:
- programming
tags:
- C/C++
- openssl
- base64
comments:
- id: 2919
  author: ChaosCreator
  author_email: bla@bla.de
  author_url: ''
  date: '2007-02-08 09:16:28 -0500'
  date_gmt: '2007-02-08 14:16:28 -0500'
  content: thanks for the code , but can you try to compile your code next time before
    you release it ????
- id: 2922
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2007-02-08 10:16:01 -0500'
  date_gmt: '2007-02-08 15:16:01 -0500'
  content: Sorry about that. I believe somewhere along the line an upgrade to the
    blog software converted some of the code into html. It should be good now.
- id: 3832
  author: offir
  author_email: offirbs@hotmail.com
  author_url: ''
  date: '2007-02-20 10:44:44 -0500'
  date_gmt: '2007-02-20 15:44:44 -0500'
  content: Can you Plz publish a parallel function for Base64 decoding?
- id: 4437
  author: Howto base64 decode with C/C++ and OpenSSL @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/cc/122/howto-base64-decode-with-cc-and-openssl/
  date: '2007-02-28 08:27:52 -0500'
  date_gmt: '2007-02-28 13:27:52 -0500'
  content: "[...] Someone asked for an example of decoding with OpenSSL on the Howto
    base64 encode with C/C++ and OpenSSL post. So here it is:  #include <string.h>
    [...]"
- id: 28764
  author: P&Atilde;&iexcl;draig Brady
  author_email: P@draigBrady.com
  author_url: http://www.pixelbeat.org/
  date: '2007-09-13 04:54:05 -0400'
  date_gmt: '2007-09-13 09:54:05 -0400'
  content: "Ha, I just noticed this now after\r\nfiguring out myself how to do it:\r\n\r\nhttp://www.pixelbeat.org/programming/lib_crypto.html\r\n\r\nReferenced
    there is a small wrapper library\r\naround libcrypto that uses the same\r\nmethod
    you do for base64 encoding\r\n(the lib also has interfaces for digests,\r\nand
    symmetric and assymetric ciphers).\r\nNote my lib is a little more generalised,\r\nand
    also more robust in the case of memory exhaustion.\r\n\r\ncheers,\r\nP&Atilde;&iexcl;draig."
- id: 30768
  author: Antonio
  author_email: aresendiz@cecoban.org.mx
  author_url: ''
  date: '2007-10-02 11:52:27 -0400'
  date_gmt: '2007-10-02 16:52:27 -0400'
  content: "Hi.\r\nI tested your program and it good i like.\r\nDo you have one example
    to sign a document with openSSL ?\r\n\r\nthanks."
- id: 59187
  author: Subra
  author_email: aswathsn@gmail.com
  author_url: ''
  date: '2008-03-19 10:37:40 -0400'
  date_gmt: '2008-03-19 15:37:40 -0400'
  content: "Hey Carson,\r\n\r\nThanks for the code. But do you have any idea as to
    why ur function base64 adds a newline ('\\n') character at the end of the string.\r\n\r\nSimilarly,
    ut base64 decode function expects a newline character at the end.\r\n\r\nThanks"
- id: 80015
  author: Amit
  author_email: ashrivastav1980@gmail.com
  author_url: ''
  date: '2008-07-05 08:19:36 -0400'
  date_gmt: '2008-07-05 13:19:36 -0400'
  content: "Hi Subra,\r\n\r\nbase64 algorithm in itself appends a carriage return
    and linefeed characters after its 'linesize' character and at the end of the test
    to be encoded. This infact increases the length of the encoded string by about
    3%, but this cannot be avoided."
- id: 122712
  author: Jon Scobie
  author_email: scobiej@yahoo.co.uk
  author_url: ''
  date: '2009-02-10 10:03:41 -0500'
  date_gmt: '2009-02-10 15:03:41 -0500'
  content: I think you'll find that you should be using strlen("YOYO!") not sizeof
    as that will return a completely different answer. If you test with "uuencode
    -m" or "openssl enc" you will see what I mean.
- id: 172192
  author: Bill
  author_email: wmills_underscore_92105_at_yahoo_dot_com@nospam.us
  author_url: ''
  date: '2010-06-18 14:07:46 -0400'
  date_gmt: '2010-06-18 19:07:46 -0400'
  content: "/*\r\n** returns the length of the b64 decoded buffer, outbuf is set to
    a pointer\r\n** to new memory containing the result.  This will be null terminated
    with\r\n** an extra byte.\r\n**\r\n** Caller must free the returned string pointed
    to in outbuf.\r\n*/\r\nint base64d(const unsigned char *input, int length, char
    **outbuf) {\r\n\r\n  BIO *bio, *b64, *bmem, *decoder;\r\n  char inbuf[512];\r\n
    \ int inlen, readlen = -1;\r\n  BUF_MEM *bptr;\r\n  char * buffer;\r\n\r\n  bmem
    = BIO_new_mem_buf(input, length);\r\n  b64 = BIO_new(BIO_f_base64());\r\n  /*
    decoder = BIO_new(BIO_s_mem()); */\r\n\r\n  decoder = BIO_push(b64, bmem);\r\n
    \ /* BIO_push(decoder, b64); */\r\n\r\n  BIO_flush(decoder);\r\n  BIO_get_mem_ptr(decoder,
    &bptr);\r\n\r\n  if (buffer = (char *)malloc(length)) {\r\n    readlen = BIO_read(decoder,
    buffer, length);\r\n    buffer[readlen] = 0;\r\n  }\r\n\r\n  BIO_free_all(decoder);\r\n\r\n
    \ *outbuf = buffer;\r\n  return readlen;\r\n}"
- id: 198180
  author: trulyliu
  author_email: trulyliu@gmail.com
  author_url: ''
  date: '2011-02-15 21:37:51 -0500'
  date_gmt: '2011-02-16 02:37:51 -0500'
  content: "There is a minor mistake in your code:\r\n\r\n  char *buff = (char *)malloc(bptr->length
    +1);\r\n  memcpy(buff, bptr->data, bptr->length);\r\n  buff[bptr->length] = 0;"
---
I've been doing a little C programming lately and I have found that if you have a up to date distribution of linux there are a lot of libraries out there that make doing things you do in other languages like java easier. 


As I have time I'm going to post some examples of what I have found. The first here is how to base64 encode a chunk of memory using OpenSSL.

<a></a>

```
#include <string.h>

#include <openssl/sha.h>
#include <openssl/hmac.h>
#include <openssl/evp.h>
#include <openssl/bio.h>
#include <openssl/buffer.h>

char *base64(const unsigned char *input, int length);

int main(int argc, char **argv)
{
  char *output = base64("YOYO!", sizeof("YOYO!"));
  printf("Base64: *%s*\n", output);
  free(output);
}

char *base64(const unsigned char *input, int length)
{
  BIO *bmem, *b64;
  BUF_MEM *bptr;

  b64 = BIO_new(BIO_f_base64());
  bmem = BIO_new(BIO_s_mem());
  b64 = BIO_push(b64, bmem);
  BIO_write(b64, input, length);
  BIO_flush(b64);
  BIO_get_mem_ptr(b64, &bptr);

  char *buff = (char *)malloc(bptr->length);
  memcpy(buff, bptr->data, bptr->length-1);
  buff[bptr->length-1] = 0;

  BIO_free_all(b64);

  return buff;
}
```
And to compile this just use the following command:

```
cc -o base64 base64.c -lssl
```
