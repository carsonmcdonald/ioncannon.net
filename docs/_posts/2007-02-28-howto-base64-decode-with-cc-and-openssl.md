---
layout: archive
status: publish
published: true
title: Howto base64 decode with C/C++ and OpenSSL
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 122
wordpress_url: http://www.ioncannon.net/cc/122/howto-base64-decode-with-cc-and-openssl/
date: '2007-02-28 08:27:47 -0500'
date_gmt: '2007-02-28 13:27:47 -0500'
categories:
- programming
tags:
- C/C++
- openssl
- base64
comments:
- id: 63379
  author: saleem
  author_email: msaleemn@rediffmail.com
  author_url: ''
  date: '2008-04-16 00:05:48 -0400'
  date_gmt: '2008-04-16 05:05:48 -0400'
  content: "Hi,\r\nThanks for the code.\r\n\r\nCould you please share some code, on
    how to decode base64 encode DER format to X509.\r\n\r\nAny help will be great.\r\n\r\nThanks,\r\nSaleem"
- id: 112854
  author: G
  author_email: ioncannon@grahamhoyle.co.uk
  author_url: ''
  date: '2008-12-31 05:06:05 -0500'
  date_gmt: '2008-12-31 10:06:05 -0500'
  content: "Used this for a project of mine and had a bit of trouble getting it to
    work.  If anyone is tearing their hair out wondering why no errors are being reported
    but no data is being delivered, try changing\r\n\r\nbmem = BIO_push(b64, bmem);\r\n\r\nto\r\n\r\nBIO_push(b64,
    bmem);"
- id: 142111
  author: Carlo Pires
  author_email: carlopires@gmail.com
  author_url: ''
  date: '2009-06-18 20:11:41 -0400'
  date_gmt: '2009-06-19 01:11:41 -0400'
  content: This doesn't work to me. BIO_read always returns 0 bytes readed.
- id: 142326
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-06-22 08:39:11 -0400'
  date_gmt: '2009-06-22 13:39:11 -0400'
  content: "@Carlo\r\n\r\nCan you provide more information? I've tested to make sure
    it works with the latest version of OpenSSL."
- id: 142417
  author: Lucas
  author_email: "^veto@arcar.de"
  author_url: ''
  date: '2009-06-24 09:58:55 -0400'
  date_gmt: '2009-06-24 14:58:55 -0400'
  content: Same Problem here! nothing readed!
- id: 151972
  author: roxaz
  author_email: roxaz911@gmail.com
  author_url: ''
  date: '2009-09-19 07:41:11 -0400'
  date_gmt: '2009-09-19 12:41:11 -0400'
  content: "add:\r\n\tBIO_set_flags(b64, BIO_FLAGS_BASE64_NO_NL);\r\nafter:\r\n\tb64
    = BIO_new(BIO_f_base64());\r\n\r\nand this will work."
- id: 153321
  author: Heavy
  author_email: t_sobotta@web.de
  author_url: http://akasha-software.de
  date: '2009-10-01 08:03:18 -0400'
  date_gmt: '2009-10-01 13:03:18 -0400'
  content: "Hi \r\nI had some trouble with the openssl base 64 de/encoding too. This
    was because openssl does no 'pure' base64 encoding by default but uses the pem
    standard base64 encoding scheme ( this is why adding the lines from roxas will
    make it work in the most cases because the newlines are ignored ) but if you want
    to decode base64 that is used inside a certificate or mail it will be encoded
    after the pem standard which requires a newline after 64 bytes of base64 data.
    This makes encoding a bit tricky because you have to calculate the lenght of the
    encoded data yourself ( or i yust did not find the propper openssl routine to
    do that ;) \r\n\r\nHowever here is some code i wrote that does the job. Feel free
    to use it ..\r\n\r\nsize_t MPSCalculateBase64Size(size_t inLen,int iLineSize)\r\n{\r\n\t\tdouble
    dInLen = inLen;\r\n\t\tdouble dLineSize = iLineSize;\r\n\t\tdouble dAdd = 0.0;\r\n\t\tdouble
    dLen = 0.0;\r\n\t\tsize_t iResult = 0;\r\n\r\n\t\tdouble dModIn = fmod( dInLen,3.0);\r\n\r\n\t\tif(
    dModIn )\r\n\t\t\tdLen = ( ((( dInLen + 3.0 ) - fmod( dInLen, 3.0 )) / 3.0 ) *
    4.0 );\r\n\t\telse\r\n\t\t\tdLen = ( ( dInLen  / 3.0 ) * 4.0 ) ;\r\n\r\n\t\t\r\n\t\tdAdd
    = dLen;\r\n\t\t\r\n\t\t// If line size is != 0 the we must add the newlines to
    our resulting\r\n\t\t// data length\r\n\t\tif( iLineSize != 0)\r\n\t\t{\r\n\t\t\t//
    Add the newlines required after the pem/base64 standard\r\n\t\t\t// (after 64
    chars)\r\n\t\t\tdAdd += ( dLen / dLineSize );\r\n\t\t\t\r\n\t\t\t// Check for
    incomplete line which is although terminated with a \r\n\t\t\t// \\n (PEM Base64).\r\n\t\t\tdouble
    dModLine = fmod(dLen,dLineSize);\r\n\t\t\tif( dModLine )\r\n\t\t\t{\r\n\t\t\t\tdAdd
    += 1.0;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tiResult = (size_t) dAdd;\r\n\t\treturn
    iResult;\r\n\t}\r\n\r\n\tint MPSBase64EncodeStr(const MPSCharType* ptrDataIn,size_t
    inLen,MPSStringType& strResult,size_t& stResultSize)\r\n\t{\r\n\t\tif(!
    ptrDataIn)\r\n\t\t\treturn MPS_ERR_PARAM;\r\n\r\n\t\tBIO *bio = NULL;\r\n\t\tBIO\t*b64
    = NULL;\r\n\t\t\r\n\t\tb64 = BIO_new(BIO_f_base64());\r\n\t\tbio = BIO_new( BIO_s_mem()
    );\r\n\t\tbio = BIO_push(b64, bio);\r\n\t\t\r\n\t\tsize_t rLen = BIO_write(bio,
    ptrDataIn, (int) inLen);\r\n\t\tBIO_flush(bio);\r\n\r\n\t\tchar* ptrOut = NULL;\r\n\t\tBIO_get_mem_data(bio,
    &ptrOut);\r\n\r\n\t\tif(ptrOut)\r\n\t\t{\r\n\t\t\t// Calculate line size\r\n\t\t\tstd::string
    strData(ptrOut);\r\n\t\t\tsize_t lineLen = strData.find(\"\\n\");\r\n\t\t\tif(lineLen
    == (size_t) MPSStringType::npos)\r\n\t\t\t{\r\n\t\t\t\tlineLen = 0;\r\n\t\t\t}\r\n\r\n\t\t\tint
    size = (int) MPSCalculateBase64Size( inLen, (int)lineLen ) ;\r\n\t\t\t\r\n\t\t\tstrResult.insert(0,ptrOut,size);\r\n\t\t\tstResultSize
    = size;\r\n\t\t}\r\n\r\n\t\tBIO_free_all(bio);\r\n\t\t\r\n\t\treturn MPS_OK;\r\n\t}\r\n\r\n\tint
    MPSBase64DecodeStr(const MPSCharType* ptrDataIn,size_t inLen,MPSStringType&
    strResult,size_t& stResultSize)\r\n\t{\r\n\t\tif(! ptrDataIn)\r\n\t\t\treturn
    MPS_ERR_PARAM;\r\n\r\n\t\tBIO* b64 = NULL; \r\n\t\tBIO* bmem = NULL;\r\n\t\tchar
    *buffer = (char *) malloc(inLen);\r\n\t\tif(buffer)\r\n\t\t{\r\n\t\t\tmemset(buffer,
    0, inLen);\r\n\t\t\tb64 = BIO_new(BIO_f_base64());\r\n\t\t\tbmem = BIO_new_mem_buf((void*)
    ptrDataIn, (int) inLen);\r\n\t\t\tbmem = BIO_push(b64, bmem);\r\n\r\n\t\t\tsize_t
    rLen = BIO_read(bmem, buffer,(int) inLen);\r\n\t\t\t\r\n\t\t\tstrResult.insert(0,
    (const char*) buffer, rLen);\r\n\t\t\tstResultSize = rLen;\r\n\r\n\t\t\tBIO_free_all(bmem);\r\n\t\t\tdelete
    [] buffer,buffer = NULL;\r\n\t\t\r\n\t\t\treturn MPS_OK;\r\n\t\t}\r\n\t\treturn
    MPS_ERR;\r\n\r\n\t}"
- id: 153337
  author: Heavy
  author_email: t_sobotta@web.de
  author_url: http://akasha-software.de
  date: '2009-10-01 11:32:44 -0400'
  date_gmt: '2009-10-01 16:32:44 -0400'
  content: "I like to add that doing that :\r\n\r\n// Calculate line size\r\nstd::string
    strData(ptrOut);\r\nsize_t lineLen = strData.find(\"\\n\");\r\nif(lineLen == (size_t)
    MPSStringType::npos)\r\n\r\nis a verry dangerous thing which will probably crash
    under a lot of circumstances. So it is a lot safer to just input the line len
    into the function.It can differ between 64 = PEM newline padding,and 72 for some
    other standard i cant recall right now X). Although there are some type mi&Atilde;&Yuml;matches
    i forgot to clean out.  \r\nThe input types i used where:\r\ntypedef std::string
    MPSStringType and\r\ntypedef char MPSCharType\r\n\r\nHave fun ;)"
- id: 239237
  author: felipe
  author_email: herofmb@gmail.com
  author_url: ''
  date: '2012-04-10 10:14:27 -0400'
  date_gmt: '2012-04-10 15:14:27 -0400'
  content: "Thank you roxaz, that worked. I was able to write to a memory bio, encoding
    it as base64, but I wasn't able to read from a base 64 encoded memory bio, decoding
    it.\r\n\r\nthe line\r\nBIO_set_flags(b64, BIO_FLAGS_BASE64_NO_NL);\r\nis only
    necessary when reading, I just didnt understand what it does, but it worked anyway
    =p"
---
Someone asked for an example of decoding with OpenSSL on the <a href="http://www.ioncannon.net/cc/34/howto-base64-encode-with-cc-and-openssl/">Howto base64 encode with C/C++ and OpenSSL</a> post. So here it is:

```
#include <string.h>

#include <openssl/sha.h>
#include <openssl/hmac.h>
#include <openssl/evp.h>
#include <openssl/bio.h>
#include <openssl/buffer.h>

char *unbase64(unsigned char *input, int length);

int main(int argc, char **argv)
{
  char *output = unbase64("WU9ZTyEA\n\0", strlen("WU9ZTyEA\n\0"));
  printf("Unbase64: *%s*\n", output);
  free(output);
}

char *unbase64(unsigned char *input, int length)
{
  BIO *b64, *bmem;

  char *buffer = (char *)malloc(length);
  memset(buffer, 0, length);

  b64 = BIO_new(BIO_f_base64());
  bmem = BIO_new_mem_buf(input, length);
  bmem = BIO_push(b64, bmem);

  BIO_read(bmem, buffer, length);

  BIO_free_all(bmem);

  return buffer;
}
```


