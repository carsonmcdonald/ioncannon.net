---
layout: archive
status: publish
published: true
title: Building Chromium and Chrome OS with EC2
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 771
wordpress_url: http://www.ioncannon.net/?p=771
date: '2009-11-23 16:17:59 -0500'
date_gmt: '2009-11-23 21:17:59 -0500'
categories:
- system administration
tags:
- ec2
- chrome os
- chromium
comments:
- id: 158245
  author: dan
  author_email: dan1123@yahoo.com
  author_url: ''
  date: '2009-12-03 16:35:57 -0500'
  date_gmt: '2009-12-03 21:35:57 -0500'
  content: "It looks like from your video that you don't have xorg.conf monitor modelines
    set up.  I fixed this temporarily by copying the /etc/X11/xorg.conf file to my
    default user's home directory and putting in this from slackwiki.org/EeePC/xorg.conf\r\n\r\nSection
    \"Monitor\"\r\n\tIdentifier   \"Monitor1\"\r\n\tVendorName   \"ASUS\"\r\n\tModelName
    \   \"eeePC P701\"\r\n\tModeline     \"800x480\"  29.58  800 816 896 992  480
    481 484 497  -HSync +Vsync # 60 Hz\r\n\tModeline     \"1024x600\"  48.96  1024
    1064 1168 1312  600 601 604 622  -HSync +Vsync\r\nEndSection\r\n\r\nThis stopped
    the \"chromium\" title from jumping over when the login screen was displayed,
    and stopped the stretched look when browsing the web."
---

When the initial cut of the <a href="http://www.chromium.org/chromium-os">Chromium OS</a> source was released last week I decided to use the opportunity to see if it would run on my EEE PC 900 netbook (check out <a href="http://www.youtube.com/watch?v=gfQ6Qef5DWk">EEE PC 900 running Chrome OS</a> on Youtube to see the final result). The first roadblock I hit with the <a href="http://sites.google.com/a/chromium.org/dev/chromium-os/building-chromium-os/build-instructions">build instructions</a> was the Ubuntu requirement (I did give a little effort to getting it working on Fedora first). I don't have an Ubuntu box so I started out trying to use VirtualBox but that was going to take forever so I decided to move things to EC2 and what follows is the result. This isn't meant to be a replacement for the build docs since they are surely going to change, it is more of a cookbook to build <a href="http://www.chromium.org/Home">Chromium</a> (the browser) and Chromium OS using EC2 (EBS is used as well if you want to cache the source over time).

When I first started down the path of using EC2 I thought I would grab the source each time I wanted to build. I quickly ran into a snag however because it took forever to sync the source and download the Ubuntu repo. Once I had the initial sync of the source I decided I would copy it all to an EBS volume and keep that volume up to date. Using EBS to store the source feels better too since I assume Google expects people to be syncing changes only as opposed to pulling the entire source tree down every time they want to build.

I started out by finding this <a href="http://developer.amazonwebservices.com/connect/entry.jspa?externalID=1952&categoryID=101">Ubuntu AMI</a> for a base to work from. For the most efficient compile times I ended up using the High CPU (c1.medium) instance. I started with the default small instance but it was just too slow. With the high cpu instance you are looking at about 45 minutes to build the OS after you have the source synced for the first time and if you add building Chromium in there you are looking at around 55 additional minutes. All told you can have a complete build in less than 2 hours even if there are some source updates needed. For EBS you need a 3G volume for the Chrome OS source plus Ubuntu package repo and a 4G volume for the Chromium source. 


I've bundled everything up into one script called <a href="http://www.ioncannon.net/examples/builder.sh">builder.sh</a> and if you don't care to know the details you can download it and give it a try. There are some things you need to know about it however even if you don't want to follow all the details. First there are some of the assumptions made by the script:

<ol>
  <li>The EC2 AMI ami-ccf615a5 image is used on the node it is run on.</li>
  <li>If you are storing the source then you have attached the EBS volumes and you have initialized a filesystem on both with mkfs.ext3 </li>
  <li>If you are storing the source then you have attached the EBS volumes and indicated what devices they are using OSVOLDEV and BROWSERVOLDEV in the following config section</li>
  <li>You are running the script as the root user</li>
</ol>

Next is a small configuration area at the top of the script that lets it know what devices the two volumes will be mounted on. If you don't intend on having stored source then you don't need to worry about setting them to anything as long as what they are set to doesn't match a real device.

```
OSVOLDEV=/dev/sdf1
BROWSERVOLDEV=/dev/sdg1
```

There are a few command line options that will let you tune the script if you want to skip parts of the build process:

<ul>
  <li>&#45;-skip-sync - This will skip trying to sync any of the repos. If you aren't using EBS to store the source the script will fail if you use this option since there will be nothing to build.</li>
  <li>&#45;-skip-chrome-build - This will skip trying to build chrome. You have to build chrome at least once for the chrome os build to work.</li>
  <li>&#45;-skip-chrome-os-build - This will skip trying to build chrome os.</li>
</ul>

Here are a few other important things to make note of:

<ul>
  <li>The build script adds a user named "gogo" that can be used to log in if you don't want to use your Google login.</li>
  <li>The build script sets the password for root access to "gogo".</li>
  <li>Running the build script should result in an image named /mnt/builder/&gt;BUILDID&lt;.usb.img.bz when everything is done. This is a compressed bootable image that can be written to a USB key (use something like dd if=usb.img of=/dev/usbkeydevice bs=10M).</li>
  <li> I could imagine the same instructions and script being re-purposed for building on a non-EC2 system too.</li>
  <li>The script can be run multiple times on the same node and will skip the parts that should only be done once.</li>
  <li>There are probably ways to speed up the build to make it even faster. With some more effort the build for the browser could be kicked off while the source for the OS was still be synced. I also wondered if using a 64 bit EC2 node and creating a large ramdisk would help but I didn't want to fiddle with 64 bit builds of Chrome, I may revisit if I find time.</li>
  <li>I was tempted to build an AMI that included all the prerequisites but it only takes 5 minutes to pull all of those together so I decided not to. It could streamline things to do that but I'm not sure that it is worth the effort.</li>
</ul>

If you are looking for more information about the script, places where it might make sense to modify the script and the build process in general then read on. 

To get started there are a number of prerequisites that need to be installed. These are the required parts for both Chromium and Chromium OS. One note here is that there is some issue with lighttpd on Ubuntu that causes it to die while the apt-get is downloading all the packages so I had to resort to installing Apache as well. I make sure lighttpd isn't running since the prerequisites install it.

```
if [ -f /var/run/chromepre ]
then
  echo "Prereqs already installed, skipping..."
  return
fi

touch /var/run/chromepre

apt-get -y --force-yes update
apt-get -y --force-yes upgrade
wget http://src.chromium.org/svn/trunk/src/build/install-build-deps.sh -O /tmp/install-build-deps.sh
chmod +x /tmp/install-build-deps.sh
echo "yy" | /tmp/install-build-deps.sh # (requires y twice)
/etc/init.d/lighttpd stop
apt-get -y --force-yes install git-core apache2 apt-mirror zip

cat > /etc/apt/mirror.list <<__EOF__
set base_path    /mnt/builder/chromeos/repo
set mirror_path  /mnt/builder/chromeos/repo/mirror
set skel_path    /mnt/builder/chromeos/repo/skel
set nthreads     20
set _tilde 0
deb http://build.chromium.org/buildbot/packages/ chromeos main restricted universe multiverse
deb http://build.chromium.org/buildbot/packages/ chromeos_dev main restricted universe multiverse
clean http://build.chromium.org/buildbot/packages/
__EOF__

if [ ! -b /dev/loop6 ]
then
  mknod -m660 /dev/loop6 b 7 6
fi

if [ ! -b /dev/loop7 ]
then
  mknod -m660 /dev/loop7 b 7 7
fi
```

The next step is to create a user that will actually run the build. It turns out to be important that this user is not root so that is why there are some hoops being jumped here. The two source volumes get mounted into the user's home directory here as well. The last part of this section builds a filesystem to be used as temporary storage for output images. The way they build is set up it will push the final images into the source tree and because that is stored on EBS it could end up eating up a lot of room, there is more to this later in the Chrome OS build section.

```
if [ -d /mnt/builder ]
then
  echo "Build user already created, skipping..."
  return
fi

useradd -G disk -u 1001 -s /bin/bash -d /mnt/builder -m builder
echo "builder    ALL=NOPASSWD: ALL" >> /etc/sudoers

mkdir /mnt/builder/chromeos
chown builder.builder /mnt/builder/chromeos/
mkdir /mnt/builder/chrome
chown builder.builder /mnt/builder/chrome/

if [ -b $OSVOLDEV ]
then
  mount $OSVOLDEV /mnt/builder/chromeos/
fi
if [ -b $BROWSERVOLDEV ]
then
  mount $BROWSERVOLDEV /mnt/builder/chrome/
fi

echo "export PATH=\$PATH:/mnt/builder/chromeos/depot_tools/" >> /mnt/builder/.bashrc

ln -s /mnt/builder/chromeos/repo/mirror/build.chromium.org/buildbot/packages/ /var/www/packages

if [ ! -f /mnt/images.img ]
then
  dd if=/dev/zero of=/mnt/images.img bs=1 count=0 seek=10G
  losetup /dev/loop6 /mnt/images.img
  mkfs.ext3 /dev/loop6
fi

if [ ! -d /mnt/builder/chromeos/depot_tools/ ]
then
  su - builder -c "cd /mnt/builder/chromeos/; svn co http://src.chromium.org/svn/trunk/tools/depot_tools"
fi
```

The next sections each sync either source or the apt-get repository. The first is syncing the apt-get repository using apt-mirror. In case you missed it the mirror was defined in the prerequisites section above.

```
su - builder -c apt-mirror
```

The next is the Chromium OS source repository.

```
cd /mnt/builder/chromeos/chromiumos/
if [ ! -f .gclient ]
then
  su - builder -c "cd /mnt/builder/chromeos/chromiumos/; /mnt/builder/chromeos/depot_tools/gclient config http://src.chromium.org/git/chromiumos.git"
fi

su - builder -c "cd /mnt/builder/chromeos/chromiumos/; /mnt/builder/chromeos/depot_tools/gclient sync"
```

There are a few extra parts to syncing the Chromium browser. One of those extras is to make sure the third party test suites don't get synced since they are large.

```
cat > /tmp/scs.sh <<__EOF__
export GYP_DEFINES="chromeos=1 target_arch=ia32"
export GYP_GENERATORS=make
cd /mnt/builder/chrome/

if [ ! -f .gclient ]
then
  /mnt/builder/chromeos/depot_tools/gclient config http://src.chromium.org/svn/trunk/src
  awk -f - .gclient << __END__
{ print }
/"    "custom_deps" : {"/ {
    print "    \"custom_deps\" : {\n\"src/third_party/WebKit/LayoutTests\": None,"
}
__END__
fi

/mnt/builder/chromeos/depot_tools/gclient sync --deps="chromeos,unix"

exit
__EOF__

chmod +x /tmp/scs.sh

su - builder -c /tmp/scs.sh
```

Building the Chromium browser. This isn't needed every time. When it is done it sticks the browser in place for the Chromium OS build.

```
if [ ! -d /mnt/builder/chrome.tmp ]
then
  su - builder -c "cp -Rp /mnt/builder/chrome /mnt/builder/chrome.tmp"
fi
su - builder -c "export PATH=$PATH:/mnt/builder/chromeos/depot_tools/; /mnt/builder/chromeos/chromiumos/chromiumos.git/src/scripts/build_chrome.sh --chrome_dir /mnt/builder/chrome.tmp/"
```

Finally the place where the OS actually gets compiled. The majority of this is right out of the build instructions. One thing to understand here is that the build process creates a chroot environment and then maps the source into that before the build starts. The build is done inside the chroot environment so the build script has to create a temporary script with all the commands that need to run there. One other note here is that the images filesystem created above has to be mapped into the chroot environment and I did that by setting it up as a loopback device then mounting it from inside the chroot environment. After the build is complete I can then get to the filesystem outside of the chroot environment to grab the final image. If you want to change the test user, the system password or get rid of either of those options this is the section to change.

```
su - builder -c "/mnt/builder/chromeos/chromiumos/chromiumos.git/src/scripts/make_chroot.sh --mirror http://localhost/packages/ --chroot /mnt/builder/chroot --replace"

cat > /mnt/builder/chroot/tmp/go.sh << __EOF__
#!/bin/sh
rm -f /tmp/go.sh

cd ../platform/pam_google && ./enable_localaccount.sh gogo
cd -
echo "gogo" | ./set_shared_user_password.sh

./build_platform_packages.sh
./build_kernel.sh

sudo mount /dev/loop6 /home/builder/trunk/src/build/images/
sudo chown builder.adm /home/builder/trunk/src/build/images

./build_image.sh --mirror http://localhost/packages/

sudo umount /home/builder/trunk/src/build/images/

exit
__EOF__

chown builder.builder /mnt/builder/chroot/tmp/go.sh
chmod +x /mnt/builder/chroot/tmp/go.sh

su - builder -c "/mnt/builder/chromeos/chromiumos/chromiumos.git/src/scripts/enter_chroot.sh --chroot /mnt/builder/chroot /tmp/go.sh"

mkdir /mnt/builder/mnt/
mount /dev/loop6 /mnt/builder/mnt
NEWEST=`ls -tadr /mnt/builder/mnt/*/ | tail -1 | head -1`
BUILDID=`basename $NEWEST`
dd if=/dev/zero of=/mnt/builder/$BUILDID.usb.img bs=1 count=0 seek=4G
losetup /dev/loop7 /mnt/builder/$BUILDID.usb.img
/mnt/builder/chromeos/chromiumos/chromiumos.git/src/scripts/image_to_usb.sh -y --from=$NEWEST --to=/dev/loop7
losetup -d /dev/loop7
umount /mnt/builder/mnt
bzip2 -9 /mnt/builder/$BUILDID.usb.img
```

A final bit of glue looks for command line arguments ties everything together.

```
SKIP_SYNC=false
SKIP_CHROME_BUILD=false
SKIP_CHROME_OS_BUILD=false

set -- $(getopt -l skip-sync,skip-chrome-build,skip-chrome-os-build abc: "$@")
while [ $# -gt 0 ]
do
  case "$1" in
    (--skip-sync) SKIP_SYNC=true; break;;
    (--skip-chrome-build) SKIP_CHROME_BUILD=true; break;;
    (--skip-chrome-os-build) SKIP_CHROME_OS_BUILD=true; break;;
    (--) shift; break;;
    (--*) echo "$0: error - unrecognized option $1" 1>&2; exit 1;;
    (*)  break;;
  esac
  shift
done

install_prereqs
create_build_user

if [ "$SKIP_SYNC" != "true" ]
then
  sync_apt
  sync_chrome
  sync_chrome_os
fi

if [ "$SKIP_CHROME_BUILD" != "true" ]
then
  build_chrome
fi

if [ "$SKIP_CHROME_BUILD" != "true" ]
then
  build_chrome_os
fi
```
