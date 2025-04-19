---
layout: archive
status: publish
published: true
title: Segmenting WebM Video and the MediaSource API
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1515
wordpress_url: http://www.ioncannon.net/?p=1515
date: '2012-01-03 08:59:08 -0500'
date_gmt: '2012-01-03 13:59:08 -0500'
categories:
- utilities
tags: []
comments:
- id: 229189
  author: Nick
  author_email: nick.p.doyle@gmail.com
  author_url: ''
  date: '2012-01-09 22:29:25 -0500'
  date_gmt: '2012-01-10 03:29:25 -0500'
  content: "Awesome, though like so many good ideas it needs adoption.\r\nAny idea
    how DRM or content protection could work with it? Wonder how efficient javascript-based
    decryption would be .... and, like HLS keeping the decryption key secret would
    be difficult (or impossible)."
- id: 231460
  author: Daniel Roviriego
  author_email: daniel@m2dmultimeios.com.br
  author_url: ''
  date: '2012-01-30 10:18:51 -0500'
  date_gmt: '2012-01-30 15:18:51 -0500'
  content: "Hi..\r\n\r\nthanks a lot for the nice article. one thing is that I just
    get a black frame without playback at the media source api demo page . Already
    running chrome dev version (18.0.1017.2-r118867 ) with MediaSourceAPI on  elements
    enabled . missing anything ?"
- id: 232403
  author: Matthias De Geyter
  author_email: matthias.degeyter@ibbt.be
  author_url: ''
  date: '2012-02-08 12:39:19 -0500'
  date_gmt: '2012-02-08 17:39:19 -0500'
  content: "Interesting to see an alternative to Apple's HTTP Live Streaming!\r\nI
    had some problems getting your demo to work (canary 9.0.1033.0 on lion); for some
    reason the 'progress' event never fires...\r\nBy adding one additional fetch_next_cluster
    to the 'webkitsourceopen' event, the video started playing, and then I used a
    'timeupdate' event instead of 'progress' to fetch the remaining data.\r\nIn some
    cases I had some trouble with the Python script as well; e.g. this video http://www.ioncannon.net/examples/vp8-webm/demo.html
    (pure coincidence that it was your site; just googled for some webm sample :-p
    ) generated some IOerror. Do you happen to know whether it's really important
    how you split the data? Another example I found simply uses a constant for the
    number of chunks, and I changed that without causing any problems..."
- id: 232469
  author: Matthias De Geyter
  author_email: matthias.degeyter@ibbt.be
  author_url: ''
  date: '2012-02-09 05:26:33 -0500'
  date_gmt: '2012-02-09 10:26:33 -0500'
  content: Just fiddled some more, the segmenting with the header and clusters is
    really useful if you want to start playing at an offset, otherwise I think it
    doesn't matter that much
---

For a while now I've seen people ask when support for Apple's <a href="http://tools.ietf.org/html/draft-pantos-http-live-streaming-07">Pantos HTTP live streaming</a> would make it past Safari and iOS. The answer seems to have been that it wasn't clear that Pantos streaming was the best option and something else would come about eventually that would be more flexible. There have been other options but they involve either Flash or Silverlight and most people want something that works with html5 video. After a long wait it seems like the time is getting close now with the <a href="http://html5-mediasource-api.googlecode.com/svn/trunk/draft-spec/mediasource-draft-spec.html">MediaSource API</a>.


The MediaSource API has experimental support in Chrome and can be enabled by using the chrome://flags option. To see it in action you can go to the <a href="/assets/MediaSourceAPIDemo/demo.html">MediaSource demo page</a>. You can also read a litte more about it <a href="http://updates.html5rocks.com/2011/11/Stream-video-using-the-MediaSource-API">here</a> although the spec linked to above is probably a better place to learn about it.


A while ago I created a tool for <a href="http://www.ioncannon.net/projects/http-live-video-stream-segmenter-and-distributor/">segmenting H264 video</a> in a Pantos compliant way. When I saw the MediaSource API I wondered how the same type of tool might fit in. The first thing to note is that the Pantos draft describes a complete technique for video streaming while the MediaSource API gives you the tools to stream video and leaves the technique. What follows is a simple technique for segmenting a WebM video in a way that allows standard streaming with the MediaSource API in the same fasion as the Pantos draft technique. While this example will not support variable rate streams it could be expanded to do so and would be the next logical step.


The basics of how the Pantos technique works are simple. A video is broken down into chunks and each of those chunks is downloaded, buffered and played. In older drafts this ment splitting a video file into multiple files but in later drafts support was added for range requests allowing the large file to remain intact. With that understanding there are two major parts that need to be addressed:


<ul>
<li>Segmenting a WebM video - This will require some understanding of the container format for WebM and the result will be something like a playlist for the video.</li>
<li>Javascript to play the video - This will use the playlist created by segmenting the WebM video to drive the MediaSource API.</li>
</ul>

<h2>Segmenting a WebM Video</h2>

Before reading on take a second to read the <a href="http://www.webmproject.org/about/">about WebM</a> page. It describes that WebM specifies a video/audio codec and a container format. We are only interested in the format of the container. If you want all the details you can read the <a href="http://www.webmproject.org/code/specs/container/">WebM container</a> format specs. It is enough to know that the WebM container is a modified version of the <a href="http://matroska.org/">Matroska Container</a> format and both containers use <a href="http://ebml.sourceforge.net/specs/">EBML</a> to specify their structure.


EBML is basically a binary XML format. There are a number of tools available for readin EBML and for my perposes I found the Python <a href="https://github.com/jspiros/python-ebml">python-ebml</a> implementation to be the easiest to get working.


The MediaSource API wants to be fed chunks of video data in a specific way. First it wants header information and then it wants what are called <a href="http://www.webmproject.org/code/specs/container/#cluster">clusters</a> from the WebM container. Each cluster contains various information but the most likely reason for wanting a cluster as input is that each cluster starts with a keyframe. A keyframe is an important reference point in the video stream and one that gets built on until the next keyframe.


The following code will take as input a WebM file and output a playlist for that file in JSON format. The playlist will contain the offsets of each cluster in the given WebM video and we will use it later to fetch the header and each cluster as chunks and feed those to a video element:


```
from ebml.schema import EBMLDocument, UnknownElement, CONTAINER, BINARY
def fill_video_info(element, offset, video_info):
  if element.name == 'Duration':
    video_info['duration'] = element.value
  if element.name == 'DisplayWidth':
    video_info['width'] = element.value
  if element.name == 'DisplayHeight':
    video_info['height'] = element.value
  if element.name == 'Cluster':
    video_info['clusters'].append({'offset': offset})
  if element.name == 'Timecode':
    video_info['clusters'][-1]['timecode'] = element.value
  if element.type == CONTAINER:
    for sub_el in element.value:
      fill_video_info(sub_el, offset + element.head_size, video_info)
      offset += sub_el.size
if __name__ == '__main__':
  import sys
  import json
  import os
  mod_name, _, cls_name = 'ebml.schema.matroska.MatroskaDocument'.rpartition('.')
  try:
    doc_mod = __import__(mod_name, fromlist=[cls_name])
    doc_cls = getattr(doc_mod, cls_name)
  except ImportError:
    parser.error('unable to import module %s' % mod_name)
  except AttributeError:
    parser.error('unable to import class %s from %s' % (cls_name, mod_name))
  video_info = {}
  video_info['filename'] = sys.argv[1]
  video_info['total_size'] = os.stat(sys.argv[1]).st_size
  video_info['clusters'] = []
  with open(sys.argv[1], 'rb') as stream:
    doc = doc_cls(stream)
    offset = 0
    for el in doc.roots:
      fill_video_info(el, offset, video_info)
      offset += el.size
  print json.dumps(video_info)
```

To run the script you will want to save the above script and install the module then do something like this:


```
git clone https://github.com/jspiros/python-ebml.git
PYTHONPATH=python-ebml python create_playlist.py test.webm
```

Running the script will result in JSON output that can be piped to a file and used as a playlist.


<h2>Javascript to Play the WebM Segmented Playlist</h2>

Feeding data to the MediaSource API is done with Javascript. The first thing to do is read in the JSON playlist file created by the Python script when the page is finished loading. To do that I'm using the Snack JS framework, it is micro-framework that has some of the features of JQuery. After reading in the playlist chunks of the WebM file need to be read in with range requests.


A while ago I made created a post about <a href="http://www.ioncannon.net/programming/1506/range-requests-with-ajax/">range requests with ajax</a> and that comes in handy here. The main difference between that post and what we need here is that the MediaSource API expects a typed array as input so we need to use <a href="http://www.w3.org/TR/XMLHttpRequest2/">XHR2</a>.


The following Javascript code is bare bones. One of the most obvious limitations is that it doesn't have the ability to seek to a portion of the stream, it will only play the stream start to finish or if the player has the content buffered it should allow for seeking in the buffered portion. It demonstrates that the API works and should be a good starting point for experimenting more with multi-rate streaming which is my short term goal.


```
  /**
   * This fetches a chunk of video using a range request.
   *   video_name - The relative filename of the video to fetch
   *   start_bytes - The start byte of the chunk to fetch
   *   end_bytes - The last byte of the chunk to fetch
   *   is_last - True if this is the last chunk to fetch
   */
  function fetch_chunk(video, video_name, start_bytes, end_bytes, is_last)
  {
    var range_req = 'bytes=' + start_bytes + '-' + end_bytes;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', video_name, true);
    xhr.setRequestHeader("Range", range_req);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e)
    {
      video.webkitSourceAppend(new Uint8Array(this.response));
      if(is_last)
      {
        video.webkitSourceEndOfStream(HTMLMediaElement.EOS_NO_ERROR);
      }
    };
    xhr.send();
  }
  /**
   * Fetch the header portion of the video file.
   */
  function fetch_header(video, video_info)
  {
    fetch_chunk(video, video_info.filename, 0, video_info.clusters[0].offset-1, video_info.clusters.length == 1);
  }
  var current_cluster = 0;
  /**
   * Fetch the next cluster of the video file.
   */
  function fetch_next_cluster(video, video_info)
  {
    if(video_info.clusters.length == current_cluster+1)
    {
      fetch_chunk(video, video_info.filename, video_info.clusters[current_cluster].offset, video_info.total_size, true);
    }
    else
    {
      fetch_chunk(video, video_info.filename, video_info.clusters[current_cluster].offset, video_info.clusters[current_cluster+1].offset-1, false);
    }
    current_cluster++;
  }
  /**
   * Enable the video for MediaSource and attach event listeners to drive the fetching of video chunks.
   */
  function video_setup(video_info)
  {
    current_cluster = 0;
    video.src = video.webkitMediaSourceURL;
    video.addEventListener('webkitsourceopen', function(e)
    {
      var video = this;
      fetch_header(video, video_info);
      fetch_next_cluster(video, video_info);
    }, false);
    video.addEventListener('progress', function(e)
    {
      var video = this;
      if( video.webkitSourceState != HTMLMediaElement.SOURCE_ENDED )
      {
        fetch_next_cluster(video, video_info);
      }
    });
  }
  /**
   * When the page is done loading read in the JSON playlist and get the video set up.
   */
  snack.ready(function()
  {
    if (!video.webkitMediaSourceURL)
    {
      alert('webkitMediaSourceURL is not available');
      return;
    }
    snack.request({ method: 'get', url: 'test.json', }, function (err, res)
    {
      if (err)
      {
        alert(err);
        return;
      }
      video_setup(snack.parseJSON(res));
    });
  });
```

Assuming you have enabled support in Chrome (currently the only browser to support the API) you can see everything in action by checking out my <a href="/assets/MediaSourceAPIDemo/demo.html">MediaSource API demo</a> page.


I have glossed over a lot of details but the main take aways are that the MediaSource API gives you the interface to build a Pantos streaming system, segment WebM on clusters to feed to the MediaSource API and use XHR2 to fetch the WebM data with range requests. As one last point a lot of the best practices for encoding video for Pantos streaming will work here as well.

