#!/bin/sh

# Make sure the basics are installed
yum -y install gcc-c++ git

yum -y install git cmake boost pcre-devel libicu-devel libmcrypt-devel oniguruma-devel mysql-devel gd-devel boost-devel libxml2-devel libcap-devel binutils-devel flex bison expat-devel

mkdir hiphop
cd hiphop
mkdir local

git clone git://github.com/facebook/hiphop-php.git

wget "http://downloads.sourceforge.net/project/re2c/re2c/0.13.5/re2c-0.13.5.tar.gz?use_mirror=cdnetworks-us-2"
wget "http://www.threadingbuildingblocks.org/uploads/77/142/2.2/tbb22_20090809oss_src.tgz"
wget http://curl.haxx.se/download/curl-7.20.0.tar.bz2
wget http://www.monkey.org/~provos/libevent-1.4.13-stable.tar.gz

tar xvjf curl-7.20.0.tar.bz2
tar xvzf libevent-1.4.13-stable.tar.gz
tar xvzf re2c-0.13.5.tar.gz
tar xvzf tbb22_20090809oss_src.tgz

export CMAKE_PREFIX_PATH=`pwd`/local

cd tbb22_20090809oss
gmake
cp -Rp include/tbb/ /usr/include/
cp `pwd`/build/*_release/*.so* /usr/lib/
ldconfig
cd ..

cd re2c-0.13.5
./configure --prefix=`pwd`/../local
make install
cd ..

cd libevent-1.4.13-stable
cp ../hiphop-php/src/third_party/libevent.fb-changes.diff .
patch < libevent.fb-changes.diff
./configure --prefix=`pwd`/../local
make install
cd ..

cd curl-7.20.0
cp ../hiphop-php/src/third_party/libcurl.fb-changes.diff .
patch -p0 < libcurl.fb-changes.diff
./configure --prefix=`pwd`/../local
make install
cd ..

cd hiphop-php
echo "#ifndef LHASH" >> src/cpp/ext/ext_openssl.h
echo "#define LHASH LHASH_OF(CONF_VALUE)" >> src/cpp/ext/ext_openssl.h
echo "#endif" >> src/cpp/ext/ext_openssl.h

git submodule init
git submodule update
export HPHP_HOME=`pwd`
export HPHP_LIB=`pwd`/bin
cmake .

make

cd ..

export HPHP_HOME=`pwd`/hiphop-php
export HPHP_LIB=$HPHP_HOME/bin
