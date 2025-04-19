---
layout: archive
status: publish
published: true
title: How to transfer a Linux image from VirtualBox to Xen
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 80
wordpress_url: http://www.ioncannon.net/?p=80
date: '2009-01-04 14:19:11 -0500'
date_gmt: '2009-01-04 19:19:11 -0500'
categories:
- system administration
- linux
tags:
- virtual box
- ec2
comments:
- id: 124751
  author: Running Asterisk in the cloud with Amazon EC2 @ IONCANNON
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/131/running-asterisk-in-the-cloud-with-amazon-ec2/
  date: '2009-02-23 06:40:05 -0500'
  date_gmt: '2009-02-23 11:40:05 -0500'
  content: "[...] I would wrap up what I have since I take the path of installing
    Asterisk on VirtualBox first then converting that disk image to an AMI as I outlined
    a few weeks ago when I got serious about testing out the Asterisk on EC2 [...]"
- id: 154486
  author: oo
  author_email: olivier.oswald@gmail.com
  author_url: ''
  date: '2009-10-14 08:08:26 -0400'
  date_gmt: '2009-10-14 13:08:26 -0400'
  content: Have you already tried to convert a Windows Server 2008 VDI into an AMI
    and fire it up on EC2?
- id: 154656
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-10-16 08:03:48 -0400'
  date_gmt: '2009-10-16 13:03:48 -0400'
  content: I don't think you can transfer a windows server image over so I haven't
    tried. I'm not sure you can select anything but linux kernels to boot from.
- id: 157370
  author: dave
  author_email: dave@daveswave.net
  author_url: ''
  date: '2009-11-20 21:19:24 -0500'
  date_gmt: '2009-11-21 02:19:24 -0500'
  content: What OS are you using here?  My fdisk (OS X Intel)  is different and I'm
    a little stumped.
- id: 157403
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2009-11-22 10:47:36 -0500'
  date_gmt: '2009-11-22 15:47:36 -0500'
  content: I was using Linux. I can't easily test on OS X so I'm not sure what you
    would need to do there to get the image converted.
- id: 157499
  author: dave
  author_email: dave@daveswave.net
  author_url: ''
  date: '2009-11-23 00:20:11 -0500'
  date_gmt: '2009-11-23 05:20:11 -0500'
  content: 'Could you expand on: "I added a few scripts and created rc.local to let
    me in when the instance was started"  I have successfully created a custom AMI
    and registered it, but once launched, I am unable to SSH into it.  Yes, I have
    checked that port 22 is authorized.  Thanks.'
- id: 160936
  author: Nehemiah
  author_email: dacresni@slu.edu
  author_url: ''
  date: '2010-01-12 12:34:32 -0500'
  date_gmt: '2010-01-12 17:34:32 -0500'
  content: what if one of those images are in an LVM? I used virtual box to setup
    a ubuntu server install (9.10) and I couldn't mount the lvm partition. can I use
    dd to extract the data anyway?
- id: 160939
  author: Nehemiah
  author_email: dacresni@slu.edu
  author_url: ''
  date: '2010-01-12 13:35:23 -0500'
  date_gmt: '2010-01-12 18:35:23 -0500'
  content: found a solution. for LVM volume groups on the virtural box, here is a
    link to instructions for <a href="http://www.mail-archive.com/forensics@securityfocus.com/msg00219.html"
    rel="nofollow"> getting volume groups recovered from a dd. </a>
- id: 171370
  author: Seth
  author_email: seth@mailinator.com
  author_url: ''
  date: '2010-06-04 17:15:36 -0400'
  date_gmt: '2010-06-04 22:15:36 -0400'
  content: "Perhaps \r\n\r\nlosetup -f raw.img\r\nkpartx -a /dev/loop0\r\n\r\npartprobe\r\nblkid\r\n\r\nTreat
    the raw disk as a regular disk :)"
- id: 180924
  author: Peter
  author_email: pkd@lockboxlabs.com
  author_url: ''
  date: '2010-08-25 08:16:21 -0400'
  date_gmt: '2010-08-25 13:16:21 -0400'
  content: "Thanks, Carson. This post was very useful to me.\r\n\r\nIs there a one-off
    error in the count parameter to your dd command (because the end sector number
    is inclusive)?"
- id: 180925
  author: Converting from VirtualBox or VMWare to EC2 now Easier than Ever
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/1246/converting-from-virtualbox-or-vmware-to-ec2-now-easier-than-ever/
  date: '2010-08-25 08:20:56 -0400'
  date_gmt: '2010-08-25 13:20:56 -0400'
  content: "[...] easier to turn VirtualBox and VMWare instances into EC2 instances.
    In the past I have written about transfering VirtualBox images to Xen but to do
    that with EC2 required a matching kernel exist for your VirtualBox installed OS
    that was [...]"
- id: 181501
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-09-01 20:12:14 -0400'
  date_gmt: '2010-09-02 01:12:14 -0400'
  content: "@Peter There may be but I haven't noticed any problems after an fsck so
    it is hard to tell. Either way you would probably be OK."
- id: 192750
  author: Roch
  author_email: rdelsalle@gmail.com
  author_url: http://rdelsalle.blogspot.com
  date: '2010-12-17 09:09:54 -0500'
  date_gmt: '2010-12-17 14:09:54 -0500'
  content: now you can use http://aws.amazon.com/about-aws/whats-new/2010/12/15/announcing-vm-import/
    for vmware instance, but it doesn't work for vbox instances
---
There have been times recently when I wanted to pull a <a href="http://www.virtualbox.org/">VirtualBox</a> Linux instance I had into Xen. I kept thinking it had to be fairly easy but I kept putting off trying it until recently when I ran into something I wanted to install from a CD image into an Amazon EC2 AMI. It turns out the main hurdle in transferring an image is lack of documentation.


I'm using VirtualBox 2.1.0 so some of the following commands may not work with older versions. I learned the hard way that they have changed a number of tools for VirtualBox and some of the older tools where probably easier to use and documented better. I installed the package I was using from an ISO image and then started trying to extract the part that I needed from the VDI that was created.

My first attempt at extracting the partition required me to convert my dynamic VDI into a static image. To dump a dynamic VDI into a static image you run this command:

```
VBoxManage convertdd -static abox.vdi /tmp/abox.img
```
I thought I could find the image by hand in the VDI after I had it in a raw format. There were a number of hints that I found that made me think I could just pull the partition out without much of a problem: <a href="http://forensicir.blogspot.com/2008/01/virtualbox-and-forensics-tools.html">VirtualBox and forensics tools</a> and <a href="http://forums.virtualbox.org/viewtopic.php?t=52&start=0&postdays=0&postorder=asc&highlight=">a forum post</a>. However I found that just looking around wasn't easy enough to find where the partition started so I moved on to trying to find something else that could scan the disk and find it.

I rand into <a href="http://www.cgsecurity.org/wiki/TestDisk">TestDisk</a> and gave it a try. When it would scan the disk it found the /boot partition but for some reason it wasn't finding the root partition so I moved on.

I then took a look at the <a href="http://forums.virtualbox.org/viewtopic.php?t=8046">format for VDI disks</a> to see if it was possible to pull it out given the header information with a simple program but that looked like it would be a lot of work so it was back to square one.

Along the way I happened to came across information about an undocumented command to <a href="http://www.virtualbox.org/changeset/12775">export</a> raw <a href="http://techokarma.blogspot.com/2008/10/v2p-virtual-to-physical-for-virtualbox.html">disk image</a>. This turned out to be the break I needed because running the following command will result in only the disk image itself without any VirtualBox residue:

```
VBoxManage internalcommands converttoraw myosimage.vdi /tmp/myosimage.img
```
At this point things became a lot easier. There were multiple partitions on the resulting disk image but I only needed the / partition. To extract the root partition I first listed the partitions with this command:

```
fdisk -lu myosimage.img
``` 

This output the following for my image:

```
You must set cylinders.
You can do this from the extra functions menu.

Disk myosimage.img: 0 MB, 0 bytes
255 heads, 63 sectors/track, 0 cylinders, total 0 sectors
Units = sectors of 1 * 512 = 512 bytes
Disk identifier: 0x0003f47f

      Device Boot                Start             End         Blocks    Id  System
myosimage.img1   *              63       208844        104391   83  Linux
myosimage.img2          208845      3662819     1726987+  83  Linux
myosimage.img3         3662820     4192964       265072+  82  Linux swap / Solaris
```
To figure out where the root partition starts I just multiplied the start sector by the number of bytes per sector:  208845 * 512 = 106928640

I then did a quick test to make sure I had the correct partition:

```
mount -o loop,offset=106928640 myosimage.img /mnt/
```
This looked good so I extracted the partition from the disk and did a filesystem check on it:

```
dd if=myosimage.img of=mypartimage.img bs=512 skip=208845 count=3453974
e2fsck mypartimage.img
```
Extracting the partition you want is about 80% of the battle. Getting it to run under Xen after extraction is just a matter of fixing anything that was left out because the install was done under a "real" machine. 

I add a nosegneg ld.so.conf directive and move /lib/tls directory out of the way first:

```
echo "hwcap 0 nosegneg" >  /mnt/etc/ld.so.conf.d/nosegneg.conf
mv /mnt/lib/tls /mnt/lib/tls.disabled
```
Next the base device entries needed to be created:

```
for i in console null zero ; do /sbin/MAKEDEV -d /mnt/dev -x $i ; done
```
I then removed the disk label from the partition using e2label:

```
e2label mypartimage.img ""
```
Because I was sending this image to EC2 I recreated the fstab with the following entries that are specific to the way EC2 allocates disks to a node:

```
/dev/sda1  /         ext3    defaults        1 1
/dev/sda2  /mnt      ext3    defaults        1 2
/dev/sda3  swap      swap    defaults        0 0
```
The finally, again because I was going to EC2 I added a few scripts and created rc.local to let me in when the instance was started. 

This seems to be a fairly easy process now that I have done it from start to finish once.

