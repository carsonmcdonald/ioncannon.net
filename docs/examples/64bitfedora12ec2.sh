#!/bin/sh

# Fedora 8 to Fedora 10
yum -y remove dmraid-1.0.0.rc14-4.fc8.i386 dmraid-1.0.0.rc14-4.fc8.i386 curl-7.18.2-7.fc8.i386
yum clean all
rpm -Uhv http://mirror.liberty.edu/pub/fedora/linux/releases/10/Fedora/i386/os/Packages/fedora-release-10-1.noarch.rpm http://mirror.liberty.edu/pub/fedora/linux/releases/10/Fedora/i386/os/Packages/fedora-release-notes-10.0.0-1.noarch.rpm
yum -y update

# Fedora 10 to Fedora 11
yum -y remove gpm-1.20.5-2.fc10.i386
yum clean all
rpm -Uvh http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-11-1.noarch.rpm http://mirrors.usc.edu/pub/linux/distributions/fedora/linux/releases/11/Fedora/i386/os/Packages/fedora-release-notes-11.0.0-2.fc11.noarch.rpm
yum -y update

# Fedora 11 to Fedora 12
yum -y remove cryptsetup-luks-1.0.6-7.fc11.i586
yum clean all
rpm -Uvh http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-notes-12.0.0-4.fc12.noarch.rpm http://mirrors.kernel.org/fedora/releases/12/Fedora/i386/os/Packages/fedora-release-12-1.noarch.rpm
yum -y update
