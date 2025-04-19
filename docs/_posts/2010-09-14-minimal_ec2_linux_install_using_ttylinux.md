---
layout: archive
status: publish
published: true
title: Minimal EC2 Linux Install Using TTYLinux
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1310
wordpress_url: http://www.ioncannon.net/?p=1310
date: '2010-09-14 12:22:10 -0400'
date_gmt: '2010-09-14 17:22:10 -0400'
categories:
- system administration
tags:
- ec2
- linux
- ttylinux
comments:
- id: 202387
  author: stefc
  author_email: stefan.boether@gmail.com
  author_url: ''
  date: '2011-04-15 08:13:36 -0400'
  date_gmt: '2011-04-15 13:13:36 -0400'
  content: Hi I look for your public AMI ami-0cfe0b65 but not found it on EC2 AWS!
    Is it still there ?
- id: 206823
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-06-12 20:31:59 -0400'
  date_gmt: '2011-06-13 01:31:59 -0400'
  content: It looks like it is still there to me. Not sure why you can't find it,
    maybe try searching for just TTYLinux.
- id: 210198
  author: Chonglei
  author_email: meizibupt@gmail.com
  author_url: ''
  date: '2011-07-22 11:01:26 -0400'
  date_gmt: '2011-07-22 16:01:26 -0400'
  content: Hi, I just wonder how you configure the network to work. It looks like
    you assign the IP, netmask, dhcp  and so on at the booting time, is there any
    reason to use those specific parameters?
- id: 213255
  author: carson
  #author_email: mcdonaec@yahoo.com
  #author_url: http://ioncannon.net
  date: '2011-09-05 20:21:25 -0400'
  date_gmt: '2011-09-06 01:21:25 -0400'
  content: The DHCP will override anything that is set.
---

If you have ever wondered how to get a Linux EC2 node down to the bare minimum this post is for you. I have been wanting to do this for a long time but it wasn't possible until pv-grub support that was added recently. To make this even more exciting Amazon now offers <a href="http://aws.typepad.com/aws/2010/09/new-amazon-ec2-micro-instances.html">EC2 micro instances</a> that will go well with this type of bare bones system.


You may wonder why you would want to do this. I'll give you at least two reasons. First there is speed. The configuration I ended up with will boot in about 14 seconds. Almost all of that time is spent waiting on the AWS DHCP server for an IP address. The second reason is security. There is little on this system that you don't need. The majority of what you need is provided by a single application that you can easily monitor for patches. That leaves you to worry about only the tools you must have to get your job done. I'll also include a couple downsides. First this isn't going to be easy for everyone and it can be fairly complicated. The second issue you will run into is that there is nothing in this distribution. If you need something like PHP you might spend a long time building all the support you need. There isn't much to be done about the complexity if you want to do this all yourself. Selection of tools can help you lessen the impact of the bare nature of the system, more on that in a future post.


I picked <a href="http://minimalinux.org/ttylinux/">TTYLinux</a> because that is what I'm most familiar with. I have used it a number of times and I believe it may be the most basic of all the small Linux distros. It really is bare and the large majority of the features are provided by <a href="http://www.busybox.net/">BusyBox</a>. Before attempting to build your own instance it may help to read some of the TTYLinux documentation. Although I haven't tried I assume that other small distros like DSL would probably work with the same general instructions.


A couple important prerequisites are needed before starting this. First look at the How_To_Build_ttylinux.txt file that comes with the TTYLinux source. It contains a lot of information about how you go about building the system. Next look at my post on <a href="http://www.ioncannon.net/system-administration/1290/how-to-build-compile-a-custom-linux-kernel-for-ec2/">compiling the Linux kernel for EC2</a> because you will need to do that for this TTYLinux instance. Finally you need to have to have gcc, g++ and yacc available on the machine you are going to use to build on.


I have also created a public AMI that anyone can use with the name TTYLinuxBase and AMI ID of ami-0cfe0b65. Be sure to boot it with the correct hd0 kernel for your region. The password for root on this AMI is just password so be sure to change it when you fire it up. I have created the AMI so that the EBS volume gets deleted when it is terminated.


1. Grab the source from <a href="http://minimalinux.org/ttylinux/source.html">the TTYLinux source page</a>:
  ```
  wget http://minimalinux.org/ttylinux/Download/ttylinux-src-mp3.tar.bz2
  tar xvjf ttylinux-src-mp3.tar.bz2
  ```
2. The kernel that comes with the current version of TTYLinux isn't new enough to work on EC2 so the configuration and build scripts need to be changed to get a more recent version that will. The first step is to create a kernel configuration and put it in the correct location:

   ```
   ttylinux-src-mp3/config/platform_pc/kernel-2.6.35.4-i686.cfg
   ```

   You can create this configuration by doing a make menuconfig on the kernel you want to use and then saving the kernel configuration to a file. You may also download the <a href="/examples/ec2ttylinux/kernel-2.6.35.4-i686.cfg">kernel config</a> I used:
  
   ```
   wget http://www.ioncannon.net/examples/ec2ttylinux/kernel-2.6.35.4-i686.cfg
   cp kernel-2.6.35.4-i686.cfg ttylinux-src-mp3/config/platform_pc/kernel-2.6.35.4-i686.cfg
   ```
  
   There is a lot of the kernel that can be pruned from the kernel configuration so if you do this by hand take time to turn things off that you won't need. Doing so will speed up the kernel compile and make the system boot faster. The above kernel configuration is pruned down quite a bit.
3. Copy the packages configuration to one that matches the kernel version:
   ```
   cp ttylinux-src-mp3/config/platform_pc/packages-2.11-2.6.30.5.txt ttylinux-src-mp3/config/platform_pc/packages-2.11-2.6.35.4.txt
   ```
4. Modify the kernel build script to apply the XSAVE patch. Start by adding the following line to line 132 of the ttylinux-src-mp3/scripts/build-kernel.sh build script:

   ```
   patch -p1 < /tmp/kernel.patch
   ```

   You should end up with the following around it:

   ```
   echo -n "b." >&${CONSOLE_FD}
   cp "${kcfg}" "linux-${kver}/.config"
   cd "linux-${kver}"
   patch -p1 < /tmp/kernel.patch
   sed --in-place scripts/mod/sumversion.c \
           --expression="s|<string.h>|
   <limits.h>\n#include <string.h>|"
   source "${TTYLINUX_XTOOL_DIR}/_xbt_env_set"
   ```

   Create the patch file /tmp/kernel.patch with the following in it:

    ```
    --- a/arch/x86/xen/enlighten.c  2010-08-05 20:35:13.000000000 -0400
    +++ b/arch/x86/xen/enlighten.c  2010-08-05 20:35:22.000000000 -0400
    @@ -776,6 +776,7 @@
    {
      cr4 &= ~X86_CR4_PGE;
      cr4 &= ~X86_CR4_PSE;
    +	cr4 &= ~X86_CR4_OSXSAVE;
      native_write_cr4(cr4);
    }
    ```

    Note that the above patch file has tabs in it. Make sure there is a tab before each cr4 line and the native_write_cr4 line or download the <a href="/examples/ec2ttylinux/kernel.patch">kernel patch</a> file I created.
5. Select the correct build target in the ttylinux-src-mp3/ttylinux.dist-config.sh file. Find the TTYLINUX_TARGET lines, comment them all out and then add the following line:
    ```
    TTYLINUX_TARGET="i686:pc:2.11-2.6.35.4"
    ```
6. Set up the cross compile tools build directory:
    ```
    cp -Rp ttylinux-src-mp3/cross-tools-2.11-2.6.30.5/ ttylinux-src-mp3/cross-tools-2.11-2.6.35.4/
    ```

    Find XBT_KERNEL in the script ttylinux-src-mp3/cross-tools-2.11-2.6.35.4/_scripts/xbt-versions.sh and change it to:


    ```
    XBT_KERNEL="linux-2.6.35.4"
    ```
7. Build the cross compile tools:
    ```
    cd ttylinux-src-mp3/cross-tools-2.11-2.6.35.4
    make setup
    make dload
    make i686
    cd ..
    ```
8. Build the entire TTYLinux distro:
    ```
    make dist
    ```
    From this point the instructions are just like the last few posts I have made. The distribution created in here needs to be transferred to an EBS volume and made into an AMI.
9. Using a temporary EC2 instance create a volume that will be used to boot the install and give it a file system:
    ```
    ec2-create-volume -z us-east-1a -s 1
    ec2-attach-volume volume-id -i instance-id -d /dev/sdh
    mkfs.ext3 /dev/sdh
    ```
10. Transfer the TTYLinux distribution image that was created to the temporary EC2 instance. Then copy the image to the boot volume:

    ```
    mkdir /mnt/dest
    mkdir /mnt/src
    mount /dev/sdh /mnt/dest
    mount -o loop img/file_sys-i686-11.2.img /mnt/src
    cd /mnt/src
    find . | cpio -pvd /mnt/dest
    cd -
    cp config/boot/* /mnt/dest/boot/
    umount /mnt/src
    ```

    In the above the boot volume is mounted, the TTYLinux distribution image is mounted via a loop device and then all the files are copied from the image to the boot volume. I do a copy here because the default boot image that the TTYLinux build creates is only 8M and the smallest EBS volume you can create is 1G so it is better to use what you have to have.
11. While the boot volume is mounted there are a number of things that need to be configured that are different than some of the previous examples of booting custom systems in EC2. First set the password for root by using chroot:

    ```
    chroot /mnt/dest/ passwd
    ```

    Next change the root device in fstab:


    ```
    cat <<EOF > /mnt/dest/etc/fstab
    /dev/xvda1    /            ext3       defaults                      0 0
    tmpfs         /dev         tmpfs      noauto                        0 0
    devpts        /dev/pts     devpts     gid=5,mode=0620               0 0
    tmpfs         /dev/shm     tmpfs      rw,noexec,nosuid,size=24k     0 0
    proc          /proc        proc       noauto                        0 0
    sysfs         /sys         sysfs      noauto                        0 0
    EOF
    ```

    Then modify the inittab to only create one terminal:


    ```
    cat <<EOF > /mnt/dest/etc/inittab
    ::sysinit:/etc/rc.d/rc.sysinit
    tty1::respawn:/sbin/getty 38400 tty1
    ::ctrlaltdel:/sbin/reboot
    ::shutdown:/etc/rc.d/rc.sysdone
    EOF
    ```

    Then configure the network to start on boot:


    ```
    cat <<EOF > /mnt/dest/etc/sysconfig/network-scripts/ifcfg-eth0
    ENABLE=yes
    NAME=Ethernet
    IPADDRESS=192.168.1.20
    CIDRLEN=24
    NETWORK=192.168.1.0
    NETMASK=255.255.255.0
    GATEWAY=192.168.1.1
    BROADCAST=192.168.1.255
    DHCP=yes
    EOF
    ```

    Finally, If you want to get rid of the warnings about setting the hardware clock you can edit /mnt/dest/etc/rc.d/rc.sysdone and comment out the part that tries to set it:


    ```
    # Disabled for XenU use
    #if [[ "$(uname -m)" != armv5tej* ]]; then
    #     action $"syncing hardware clock to system time" hwclock ${HWCLOCKARGS}
    #fi
    ```

    and you will also want to do the same to /mnt/dest/etc/rc.d/rc.sysinit:


    ```
    # Disabled for XenU
    #if [[ "$(uname -m)" != armv5tej* ]]; then hwclock ${HWCLOCKARGS}; fi
    ```
12. To tell pv-grub what to boot you will need a /boot/grub/menu.lst file with the following in it:
    ```
    mkdir /mnt/dest/boot/grub

    cat <<EOF > /mnt/dest/boot/grub/menu.lst
    default 0
    timeout 0
    title TTYOS
            root (hd0)
            kernel /boot/vmlinuz root=/dev/xvda1
    EOF
    ```

    Unmount the boot image:


    ```
    umount /mnt/dest/
    ```
13. Snapshot the volume and register it as an AMI:
    ```
    ec2-create-snapshot -d "Volume Description" volume-id
    ec2-register -n "AMIName" -d "AMI Description" --root-device-name /dev/sda1 -b /dev/sda1=snap-id:1:true
    ```
14. Boot it using the hd0 kernel for your region (in my case that is aki-407d9529):
    ```
    ec2-run-instances -z us-east-1a -g your-group -k your-keypair -n 1 --kernel pv-grub-kernel-id ami-from-step-13
    ```

There are a few final notes that might be interesting. The smallest you can create is 1G and that is about 950M too large. This is probably not a real issue since you will most likely want space to put your application but it is interesting to note. The instructions assume you are building a i386 instance but they are almost the same for a 64 bit instance.


With the kernel config I provide you will see boot times from start to init in about 0.3 seconds. That is pretty fast. From init to login is fast as well but depends completely on how long it takes to get an IP from the DHCP server. This type of system could potentially boot in just a second or two if it didn't have to wait for any AWS parts.


A few people have created <a href="http://minimalinux.org/ttylinux/addons.html">TTY addons</a> to make compiling code for TTYLinux easier. You may want to check those out. Baring that you will find instructions on building anything with the cross compiling system in the TTYLinux howto documentation. Of course you may be able to bypass any pain there by compiling static binaries or even using something like Java.

