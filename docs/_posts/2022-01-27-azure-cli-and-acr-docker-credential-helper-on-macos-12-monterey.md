---
layout: archive
status: publish
published: true
title: Azure CLI and ACR Docker Credential Helper on macOS 12 Monterey
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1763
wordpress_url: https://ioncannon.net/?p=1763
date: '2022-01-27 04:17:04 -0500'
date_gmt: '2022-01-27 09:17:04 -0500'
categories:
- utilities
tags:
- docker
- azure
comments: []
---
After upgrading to macOS 12 Monterey I started getting the following error when using docker with the ACR Docker <a href="https://docs.docker.com/engine/reference/commandline/login/#credential-helpers">Credential Helper</a>:


```
fatal error: runtime: bsdthread_register error
```

This error is caused when using a Golang binary that has been compiled with an older version of the Golang compiler, you can find out more in the <a href="https://github.com/golang/go/wiki/MacOS12BSDThreadRegisterIssue">MacOS12BSDThreadRegisterIssue</a> Golang wiki.

You can run the command helper by hand to verify that it is generating the error:


```
docker-credential-acr-darwin list
```

If you use the instructions provided by Microsoft to install the ACR Docker Credential Helper binary then you have installed a binary that is compiled with a fairly old version of Golang. The fix for the error is to recompile the ACR Docker Credential Helper using a newer version of Golang.

To recompile using a newer version you will first need to clone the helper github repo:


```
git clone https://github.com/Azure/acr-docker-credential-helper
```

Then you will need to edit the Dockerfile so that the Golang version used is a supported version on macOS 12, I found that version 1.15 worked and the helper still compiled:


```
FROM golang:1.15-alpine
RUN apk update && apk add make bash zip
ADD . /build-root
WORKDIR /build-root
CMD make
```

After modifying the Dockerfile you can build the binary by running the <b>build.sh</b> script. This script will build the helper for multiple platforms and put the results in the <b>artifacts</b> directory. The <b>artifacts/docker-credential-acr-darwin-amd64.tar.gz</b> file is the one with the new macOS binaries. The two binaries will need to be extracted from that file and put in the <b>/usr/local/bin/</b> directory.

You can verify that the update has fixed the issue by running the helper by hand again:


```
docker-credential-acr-darwin list
```
