---
layout: archive
status: publish
published: true
title: How to Build and Compile a Custom Linux Kernel for EC2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1290
wordpress_url: http://www.ioncannon.net/?p=1290
date: '2010-09-09 09:55:58 -0400'
date_gmt: '2010-09-09 14:55:58 -0400'
categories:
- system administration
tags:
- AWS
- ec2
- linux
comments:
- id: 182658
  author: Minimal EC2 Linux Install Using TTYLinux
  author_email: ''
  author_url: http://www.ioncannon.net/system-administration/1310/minimal_ec2_linux_install_using_ttylinux/
  date: '2010-09-14 12:22:22 -0400'
  date_gmt: '2010-09-14 17:22:22 -0400'
  content: "[...] IONCANNON Thoughts on Software Development and Engineering   Skip
    to content AboutArchivesProjectsGoogle Analytics Dashboard WordPress WidgetHTTP
    Live Video Stream Segmenter and DistributorGeeQE &#8211; Native Stack Overflow
    iPhone ApplicationBuilding GeeQEMiscellaneous ProjectsFedora 12 Screenshots and
    VideosMozilla Jetpack &#8211; Google Reader Starred Post BrowserSwatch &#8211;
    A Firefox Stack Exchange Profile WatcherWidget Of AwesomenessContactSitemap       &laquo;
    How to Build and Compile a Custom Linux Kernel for EC2 [...]"
- id: 186079
  author: just me
  author_email: nevermind@notvaliddomain.org
  author_url: ''
  date: '2010-10-17 15:58:42 -0400'
  date_gmt: '2010-10-17 20:58:42 -0400'
  content: "Hello\r\n\r\nThank you for this page, I found the instructions very concise.\r\n\r\nI've
    been trying for a week now to build an EBS-based AMI for a specific distribution
    so I can boot it using PVGRUB.\r\nHowever I have a big problem - no matter what
    I try I can't seem to get the vm to boot... If you're reading this I hope you
    can suggest a solution at http://developer.amazonwebservices.com/connect/thread.jspa?threadID=53050&tstart=0
    (where I described what I did and where it stops).\r\n\r\nCheers"
- id: 187566
  author: Zeno Davatz
  author_email: zdavatz@gmail.com
  author_url: http://just.do
  date: '2010-10-29 03:55:03 -0400'
  date_gmt: '2010-10-29 08:55:03 -0400'
  content: "Thank you for this howto! How do I create a custom kernel with JFS on
    /root? I noticed that if I boot into a custom kernel with ext3 on /root I will
    run out of inodes very fast while still having lots of disk space.\r\n\r\nAny
    hints?\r\n\r\nBest\r\nZeno"
- id: 187975
  author: just me
  author_email: just@me.again.org
  author_url: ''
  date: '2010-11-01 21:19:40 -0400'
  date_gmt: '2010-11-02 02:19:40 -0400'
  content: "Hi Carson\r\n\r\nYou mentioned that \"most of what is needed to get a
    kernel to work on EC2 is now incorporated into the source\" - can you tell for
    sure what was the first (earliest) kernel.org version to incorporate the required
    patches? I got the 2.6.35.4 kernel to boot with PVGRUB, but now I need to go back
    as close to 2.6.32 as possible.\r\n\r\nCheers"
- id: 187976
  author: just me
  author_email: just@me.again.org
  author_url: ''
  date: '2010-11-01 21:26:47 -0400'
  date_gmt: '2010-11-02 02:26:47 -0400'
  content: "Also - when you're doing: \r\n\r\nec2-register -n \"CustomKernel\" -d
    \"Custom kernel AMI\" --root-device-name /dev/sda1 -b /dev/sda1=snap-id:15:true\r\n\r\nwhat
    does \"--root-device-name\" exactly stand for? I played with it (using both /dev/sda
    and /dev/sda1) and I got it working, but I'm still not clear what exactly it should
    point to:\r\n    - the same device name (either full disk like sda or just a partition
    like sda1) used with the -b option?\r\n    - the root to be used by grub - like
    (hd0) or (hd0,0)?\r\n    - the root fs as seen by the kernel (but with sda instead
    of xvda)?\r\n\r\nMany thanks"
- id: 189634
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-11-16 09:38:43 -0500'
  date_gmt: '2010-11-16 14:38:43 -0500'
  content: You can always apply the patches by hand if they aren't there. I didn't
    notice when they got accepted as part of the kernel.
- id: 189636
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2010-11-16 09:41:34 -0500'
  date_gmt: '2010-11-16 14:41:34 -0500'
  content: That --root-device-name is the root device the AWS system uses to boot
    from. It should be the root device where grub is installed I believe. It is confusing
    because it doesn't match what the kernel eventually understands the drive to be
    but maybe they will eventually change the flag to take a the hd* format to make
    it more clear.
---

I have a long running goal that I'm trying to reach with all these <a href="http://aws.typepad.com/aws/2010/07/use-your-own-kernel-with-amazon-ec2.html">pv-grub for EC2</a> posts. That goal is to find the smallest/tightest usable node that can be created for EC2. The next step in that path requires a custom Linux kernel. What follows is how to build the latest Linux kernel so that it works on EC2 using pv-grub.

It is important to have a recent kernel since most of what is needed to get a kernel to work on EC2 is now incorporated into the source. These instructions assume the latest kernel is 2.6.35.4 and I've used them with 2.6.35 as well but keep that in mind since the one patch that is required could eventually be merged in. Before getting started it may help to read over how to <a href="http://www.faqs.org/docs/Linux-HOWTO/Kernel-HOWTO.html">compile the Linux kernel</a> normally and then my post on <a href="http://www.ioncannon.net/system-administration/1205/installing-cent-os-5-5-on-ec2-with-the-cent-os-5-5-kernel/">running CentOS 5.5 on EC2 using pv-grub</a>.

Before you begin you will need a place to build the kernel. For these instructions I used an EC2 instance to build the kernel but you don't have to. I also installed the kernel on the same EC2 instance when I was done. The AMI I used was Amazon's EBS boot starter ( ami-b232d0db : amazon/getting-started-with-ebs-boot ).

The following steps go over building and installing the kernel in detail:

1. Download the latest <a href="http://www.kernel.org/">Linux kernel</a> or the version I'm using:
    
    ```
    wget http://www.kernel.org/pub/linux/kernel/v2.6/linux-2.6.35.4.tar.bz2
    ```

2. Configure the source to run on EC2:

    ```
    make menuconfig
    ```

    You will need to make sure the following options are set in the configuration:

    <ul>
      <li>"Processor type and features" -> "High Memory Support" -> Make sure it is set to 64GB</li>
      <li>"Processor type and features" -> "PAE (Physical Address Extension) Support" -> enable</li>
      <li>"Processor type and features" -> "Paravirtualized guest support" -> enable</li>
      <li>"Processor type and features" -> "Paravirtualized guest support" -> "Xen guest support" -> enable</li>
      <li>"Device Drivers" -> "Block devices" -> "Xen virtual block device support" -> enable either as a module or built in</li>
      <li>"Device Drivers" -> "Network device support" -> "Xen network device frontend driver" -> enable either as a module or built in</li>
    </ul>

    If you want you can make the device drivers modules but you have to have them so it is probably best to just compile them into the kernel itself. If you want to compare your config file with the one I used you can download mine here: <a href="/examples/ec2kernel/kernel-2.6.35.4-i686.config">kernel-2.6.35.4-i686.config</a>.


    The starter AMI I used needed ncurses development libraries and gcc installed for menuconfig to work:


    ```
    yum install ncurses-devel gcc
    ```

    If you want to know a little more about what is being enabled in this step see the "Building with domU support" section of <a href="http://wiki.xensource.com/xenwiki/XenParavirtOps">XenParavirtOps</a>.

3. Apply the following patch to disable XSAVE:

    ```
    --- a/arch/x86/xen/enlighten.c	2010-08-05 20:35:13.000000000 -0400
    +++ b/arch/x86/xen/enlighten.c	2010-08-05 20:35:22.000000000 -0400
    @@ -776,6 +776,7 @@
    {
      cr4 &= ~X86_CR4_PGE;
      cr4 &= ~X86_CR4_PSE;
    +	cr4 &= ~X86_CR4_OSXSAVE;
      native_write_cr4(cr4);
    }
    cd /path/to/root/of/kernel/source
    patch -p1 < /tmp/kernel.patch
    ```

    Note that the above patch file has tabs in it. Make sure there is a tab before each cr4 line and the native_write_cr4 line. If you want to you can download a copy of the <a href="/examples/ec2kernel/kernel.patch">patch with the tabs in it</a> to be sure.

4. Build the kernel and install it if you are on the same machine you want to install it on. If you need help compiling the kernel refer to the kernel compile howto. <br/><br/>
    After this step you have a kernel, modules and initrd that you can use. The remaining steps go over using it.

5. Configure the /boot/grub/menu.lst file on the target AMI to use the new kernel, the following is an example of the contents of the file:
    ```
    default 0
    timeout 1
    title Test
        root (hd0)
        kernel /boot/vmlinuz-2.6.35.4 root=/dev/xvda1
        initrd /boot/initrd-2.6.35.4.img
    ```

    Note that the root device here is /dev/xvda1 instead of /dev/sda1. This is caused by the XSAVE patch.

6. Verify that your /etc/fstab file is correct. If your previous root device was /dev/sda1 it is going to be /dev/xvda1 now. The contents of the fstab file I used follow:

    ```
    /dev/xvda1                              /                       ext3    defaults 1 1
    /dev/mapper/swapVG-swapFS               swap                    swap    defaults 0 0
    /dev/mapper/storageVG-storageFS         /mnt                    ext3    defaults 0 0
    none                                    /dev/pts                devpts  gid=5,mode=620 0 0
    none                                    /dev/shm                tmpfs   defaults 0 0
    none                                    /proc                   proc    defaults 0 0
    none                                    /sys                    sysfs   defaults 0 0
    ```

7. Make a snapshot of the volume and register it as an AMI:
    
    ```
    ec2-create-snapshot -d "Snapshot Description" volume-id
    ec2-register -n "CustomKernel" -d "Custom kernel AMI" --root-device-name /dev/sda1 -b /dev/sda1=snap-id:15:true
    ```

    Note that the devices here are /dev/sda1 and not /dev/xvda1. That is a little confusing but the AWS system doesn't see the devices in the same way your AMI will once it is booted.

8. Start the instance. In my case using the hd0 pv-grub kernel:

    ```
    ec2-run-instances -z us-east-1a -g your-group -k your-keypair -n 1 --kernel aki ami-from-step-7
    ```

If all goes well you should be able to run dmesg and see a boot message something like the following at the top:

```
Reserving virtual address space above 0xf5800000
Linux version 2.6.35.4 (root@domU) (gcc version 4.1.2 20070925 (Red Hat 4.1.2-33)) #2 SMP Mon Aug 23 20:00:01 EDT 2010
BIOS-provided physical RAM map:
 Xen: 0000000000000000 - 00000000000a0000 (usable)
 Xen: 00000000000a0000 - 0000000000100000 (reserved)
 Xen: 0000000000100000 - 000000006a400000 (usable)
NX (Execute Disable) protection: active
...
```

With the ability to create a custom kernel for EC2 the next step is to prune the OS itself down to the bare minimum.

