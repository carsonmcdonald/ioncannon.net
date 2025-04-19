---
layout: archive
status: publish
published: true
title: Automounting Amazon EBS volumes on EC2 instances
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 199
wordpress_url: http://www.ioncannon.net/?p=199
date: '2008-12-23 09:54:47 -0500'
date_gmt: '2008-12-23 14:54:47 -0500'
categories:
- system administration
tags:
- EBS
- AWS
- ec2
comments:
- id: 141841
  author: James Little
  author_email: jim@jameslittle.me.uk
  author_url: http://www.jameslittle.me.uk
  date: '2009-06-15 06:07:27 -0400'
  date_gmt: '2009-06-15 11:07:27 -0400'
  content: "Thanks for the script Carson. Do you know if Amazon created an auto-attach
    method yet? A quick Google and look over the API docs suggests not. \r\n\r\nAlso,
    there doesn't seem to be a way of programmatically grabbing the Volume ID. So
    if your EBS volume dies and you have to re-create from a snapshot, the ID changes
    and you have to edit your script and possibly rebuild your whole AMI; a far from
    ideal solution :(\r\n\r\nAnyway, thanks again!\r\n\r\nJames"
- id: 141990
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-06-16 09:09:21 -0400'
  date_gmt: '2009-06-16 14:09:21 -0400'
  content: "I don't think they have an auto-attach yet. \n\nI think you could get
    around rebuilding the AMI by passing the data you need in as a parameter when
    you launch the instance. The entire solution isn't ideal but until they provide
    something better it is probably the only way to take care of it. \n\nSome other
    issues I have seen and read about are that sometimes the EBS volumes get stuck
    in a mounted state and can't be remounted until they are forced to release. That
    kind of tosses a wrench into the mix too but again there isn't a lot that can
    be done about it. Over time I'm sure Amazon will work out those kinks."
- id: 167044
  author: Symphonious &#187; RightScale AWS Amazon EC2 Library for Ruby
  author_email: ''
  author_url: http://www.symphonious.net/2010/04/07/rightscale-aws-amazon-ec2-library-for-ruby/
  date: '2010-04-07 02:35:50 -0400'
  date_gmt: '2010-04-07 07:35:50 -0400'
  content: "[...] lazy to actually look into it in detail and never really needed
    to. However, I&acirc;&euro;&trade;ve stumbled across instructions for auto-mounting
    an EBS volume which turns out to be very handy, and leads on to the particularly
    awesome right_aws ruby [...]"
- id: 168332
  author: David
  author_email: davidst@gmail.com
  author_url: ''
  date: '2010-04-23 05:38:26 -0400'
  date_gmt: '2010-04-23 10:38:26 -0400'
  content: "Good stuff!\r\n\r\nI have checked that an attached volume state transitions
    from \"available\" to \"in-use\", but when in that state... isn't there any other
    way of confirming that the volume can safely used (for formatting it, for using
    it with mdadm or whatever), instead of waiting 20 seconds?\r\n\r\nRegards,\r\nDavid"
- id: 168603
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-04-26 20:03:28 -0400'
  date_gmt: '2010-04-27 01:03:28 -0400'
  content: It can probably be done through the API but I'm not sure if it is worth
    it. You could also probably look to see if the device is available in a loop.
---
I've been using <a href="http://aws.amazon.com/s3/">S3</a> to store semi-transient information like log files from <a href="http://aws.amazon.com/ec2/">EC2</a> nodes in the past but recently decided to give Amazon's Elastic Block Store (EBS) a try instead. I quickly realized a downside to using EBS in that there is no mechanism for auto-attach and mounting volumes when an AMI is launched. This is probably something Amazon will fix at some point and allow you to launch a given AMI with an attached EBS volume but until then you need some way of doing it yourself. The following is a simple way of using ruby to make it happen.


I'm going to assume you have already created your EBS volume, if you haven't you can learn more about that from the <a href="http://docs.amazonwebservices.com/AWSEC2/2008-12-01/DeveloperGuide/index.html?ebs-creating.html">docs</a>. You will need to make sure ruby is installed on the AMI you are going to use and that the <a href="http://rightaws.rubyforge.org/">RightScale AWS</a> gem is installed as well. 

The following script grabs the instance id from the <a href="http://docs.amazonwebservices.com/AWSEC2/2008-12-01/DeveloperGuide/index.html?AESDG-chapter-instancedata.html">EC2 metadata URL</a>. It then uses the <a href="http://rightaws.rubyforge.org/right_aws_gem_doc/classes/RightAws/Ec2.html">RightScale EC2</a> calls to attach the volume to the current EC2 instance. After the attach call it may take a few seconds for the volume to become ready so the script sleeps for a few seconds before calling out to the system to mount the device. One enhancement that is obvious here would be to have the script make a RightScale EC2 call to determine when the volume is really ready and then continue after that.

```
#!/usr/bin/ruby

require 'rubygems'
require 'right_aws'
require 'net/http'

url = 'http://169.254.169.254/2008-02-01/meta-data/instance-id'
instance_id = Net::HTTP.get_response(URI.parse(url)).body

AMAZON_PUBLIC_KEY='your public key'
AMAZON_PRIVATE_KEY='your private key'
EC2_LOG_VOL='the volume id'

ec2 = RightAws::Ec2.new(AMAZON_PUBLIC_KEY, AMAZON_PRIVATE_KEY)

vol = ec2.attach_volume(EC2_LOG_VOL, instance_id, '/dev/sdh')
puts vol

# It can take a few seconds for the volume to become ready.
# This is just to make sure it is ready before mounting it.
sleep 20

system('mount /dev/sdh /mymountpoint')
```
I called the script mountlogs.rb and call it out of the local startup script /etc/rc.local so it mounts the disk on startup. This seems to work pretty well as a stopgap until Amazon puts in place a way to auto-attach EBS volumes to instance creation.

