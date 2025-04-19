#!/bin/sh
#
# This script assumes the following:
#  1) This is the EC2 AMI ami-ccf615a5
#  2) If you are storing the source you have attached the EBS volumes and
#     you have initialized a filesystem on them with mkfs.ext3 
#  3) If you are storing the source you have attached the EBS volumes and
#     indicated what devices they are using OSVOLDEV and BROWSERVOLDEV in
#     the following config section
#  4) You are running this as the root user
#

#
# Configuration area
#
OSVOLDEV=/dev/sdf1
BROWSERVOLDEV=/dev/sdg1

# 
# Get the system up to the point that it can build chromium(os)
#
install_prereqs() 
{
  echo "================================================="
  echo "Installing prereqs"
  echo "================================================="

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
}

#
# Create the build user
#
create_build_user()
{
  echo "================================================="
  echo "Creating build user"
  echo "================================================="

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
}

#
# Sync the apt mirror
#
sync_apt()
{
  echo "================================================="
  echo "Syncing the apt mirror"
  echo "================================================="

  su - builder -c apt-mirror
}

#
# Sync chrome os source
#
sync_chrome_os()
{
  echo "================================================="
  echo "Syncing chrome os source"
  echo "================================================="

  cd /mnt/builder/chromeos/chromiumos/
  if [ ! -f .gclient ]
  then
    su - builder -c "cd /mnt/builder/chromeos/chromiumos/; /mnt/builder/chromeos/depot_tools/gclient config http://src.chromium.org/git/chromiumos.git"
  fi

  su - builder -c "cd /mnt/builder/chromeos/chromiumos/; /mnt/builder/chromeos/depot_tools/gclient sync"
}

#
# Sync chrome source
#
sync_chrome()
{
  echo "================================================="
  echo "Syncing chrome source"
  echo "================================================="

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
}

#
# Build chrome
#
build_chrome()
{
  echo "================================================="
  echo "Building chrome"
  echo "================================================="

  if [ ! -d /mnt/builder/chrome.tmp ]
  then
    su - builder -c "cp -Rp /mnt/builder/chrome /mnt/builder/chrome.tmp"
  fi
  su - builder -c "export PATH=$PATH:/mnt/builder/chromeos/depot_tools/; /mnt/builder/chromeos/chromiumos/chromiumos.git/src/scripts/build_chrome.sh --chrome_dir /mnt/builder/chrome.tmp/"
}

#
# Build chrome os
#
build_chrome_os()
{
  echo "================================================="
  echo "Building chrome os"
  echo "================================================="

# These are needed if you never build your original chrome browser
#  mkdir -p ../build/x86/local_assets/
#  cp /mnt/builder/chromeos/chrome-linux.zip ../build/x86/local_assets/chrome-chromeos.zip

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
}

#
# Main
#
# Options:
#   --skip-sync
#   --skip-chrome-build
#   --skip-chrome-os-build
#

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
