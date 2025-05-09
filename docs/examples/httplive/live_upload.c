/*
 * Copyright (c) 2009 Carson McDonald
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License version 2
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Originaly created by and Copyright (c) 2009 Chase Douglas
 */

#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

#include "libavformat/avformat.h"

static AVStream *add_output_stream(AVFormatContext *output_format_context, AVStream *input_stream) 
{
  AVCodecContext *input_codec_context;
  AVCodecContext *output_codec_context;
  AVStream *output_stream;

  output_stream = av_new_stream(output_format_context, 0);
  if (!output_stream) 
  {
    fprintf(stderr, "Could not allocate stream\n");
    exit(1);
  }

  input_codec_context = input_stream->codec;
  output_codec_context = output_stream->codec;

  output_codec_context->codec_id = input_codec_context->codec_id;
  output_codec_context->codec_type = input_codec_context->codec_type;
  output_codec_context->codec_tag = input_codec_context->codec_tag;
  output_codec_context->bit_rate = input_codec_context->bit_rate;
  output_codec_context->extradata = input_codec_context->extradata;
  output_codec_context->extradata_size = input_codec_context->extradata_size;

  if(av_q2d(input_codec_context->time_base) * input_codec_context->ticks_per_frame > av_q2d(input_stream->time_base) && av_q2d(input_stream->time_base) < 1.0/1000) 
  {
    output_codec_context->time_base = input_codec_context->time_base;
    output_codec_context->time_base.num *= input_codec_context->ticks_per_frame;
  }
  else 
  {
    output_codec_context->time_base = input_stream->time_base;
  }

  switch (input_codec_context->codec_type) 
  {
    case CODEC_TYPE_AUDIO:
      output_codec_context->channel_layout = input_codec_context->channel_layout;
      output_codec_context->sample_rate = input_codec_context->sample_rate;
      output_codec_context->channels = input_codec_context->channels;
      output_codec_context->frame_size = input_codec_context->frame_size;
      if ((input_codec_context->block_align == 1 && input_codec_context->codec_id == CODEC_ID_MP3) || input_codec_context->codec_id == CODEC_ID_AC3) 
      {
        output_codec_context->block_align = 0;
      }
      else 
      {
        output_codec_context->block_align = input_codec_context->block_align;
      }
      break;
    case CODEC_TYPE_VIDEO:
      output_codec_context->pix_fmt = input_codec_context->pix_fmt;
      output_codec_context->width = input_codec_context->width;
      output_codec_context->height = input_codec_context->height;
      output_codec_context->has_b_frames = input_codec_context->has_b_frames;

      if (output_format_context->oformat->flags & AVFMT_GLOBALHEADER) 
      {
          output_codec_context->flags |= CODEC_FLAG_GLOBAL_HEADER;
      }
      break;
    default:
      break;
  }

  return output_stream;
}

int write_index_file(const char index[], const unsigned int segment_duration, const char output_directory[], const char output_prefix[], const char http_prefix[], const unsigned int first_segment, const unsigned int last_segment, const int end, const char bucket_name[], const char key_prefix[])
{
  char buffer[1024 * 10];
  memset(buffer, 0, sizeof(char) * 1024 * 10);
  sprintf(buffer, "%s, %s, %d, %s, %s, %d, %d, %d, %s, %s", index, output_directory, segment_duration, output_prefix, http_prefix, first_segment, last_segment, end, bucket_name, key_prefix);

  fprintf(stderr, "Sending: %s\n", buffer);

  int sock;
  if ((sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0)
  {
    fprintf(stderr, "Could not open socket.");
    return -1;
  }

  const char *serverIP = "127.0.0.1";  
  int serverPort = 10234;

  struct sockaddr_in serverAddress;
  memset(&serverAddress, 0, sizeof(serverAddress));
  serverAddress.sin_family      = AF_INET;
  serverAddress.sin_addr.s_addr = inet_addr(serverIP);
  serverAddress.sin_port        = htons(serverPort);

  if (connect(sock, (struct sockaddr *) &serverAddress, sizeof(serverAddress)) < 0)
  {
    fprintf(stderr, "Could not connect to socket.");
    return -1;
  }

  int buffer_len = strlen(buffer);
  if (send(sock, buffer, buffer_len, 0) != buffer_len)
  {
    fprintf(stderr, "Could not send command.");
    return -1;
  }

  close(sock);

  return 0;
}

int main(int argc, char **argv)
{
  int i;

  if (argc != 9) 
  {
    fprintf(stderr, "Usage: %s <input MPEG-TS file> <segment duration in seconds> <output directory> <output MPEG-TS file prefix> <output m3u8 index file> <http prefix> <bucket name> <key prefix>\n", argv[0]);
    exit(1);
  }

  const char *input = argv[1];
  if (!strcmp(input, "-")) 
  {
    fprintf(stderr, "Using piped input\n");
    input = "pipe://1";
  }

  char *segment_duration_check;
  double segment_duration = strtoll(argv[2], &segment_duration_check, 10);
  if (segment_duration_check == argv[2]) 
  {
    fprintf(stderr, "Segment duration time (%s) invalid\n", argv[2]);
    exit(1);
  }
  const char *output_directory = argv[3];
  const char *output_prefix = argv[4];
  const char *index = argv[5];
  const char *http_prefix = argv[6];
  const char *bucket_name = argv[7];
  const char *key_prefix = argv[8];

  char *output_filename = malloc(sizeof(char) * (strlen(output_directory) + 1 + strlen(output_prefix) + 10));
  if (!output_filename) 
  {
    fprintf(stderr, "Could not allocate space for output filenames\n");
    exit(1);
  }

  // ------------------ Done parsing input --------------


  av_register_all();

  AVInputFormat *input_format = av_find_input_format("mpegts");
  if (!input_format) 
  {
    fprintf(stderr, "Could not find MPEG-TS demuxer\n");
    exit(1);
  }

  AVFormatContext *input_context = NULL;
  int ret = av_open_input_file(&input_context, input, input_format, 0, NULL);
  if (ret != 0) 
  {
    fprintf(stderr, "Could not open input file, make sure it is an mpegts file: %d\n", ret);
    exit(1);
  }

  if (av_find_stream_info(input_context) < 0) 
  {
    fprintf(stderr, "Could not read stream information\n");
    exit(1);
  }

  AVOutputFormat *output_format = guess_format("mpegts", NULL, NULL);
  if (!output_format) 
  {
    fprintf(stderr, "Could not find MPEG-TS muxer\n");
    exit(1);
  }

  AVFormatContext *output_context = avformat_alloc_context();
  if (!output_context) 
  {
    fprintf(stderr, "Could not allocated output context");
    exit(1);
  }
  output_context->oformat = output_format;

  int video_index = -1;
  int audio_index = -1;

  AVStream *video_stream;
  AVStream *audio_stream;

  for (i = 0; i < input_context->nb_streams && (video_index < 0 || audio_index < 0); i++) 
  {
    switch (input_context->streams[i]->codec->codec_type) {
      case CODEC_TYPE_VIDEO:
        video_index = i;
        input_context->streams[i]->discard = AVDISCARD_NONE;
        video_stream = add_output_stream(output_context, input_context->streams[i]);
        break;
      case CODEC_TYPE_AUDIO:
        audio_index = i;
        input_context->streams[i]->discard = AVDISCARD_NONE;
        audio_stream = add_output_stream(output_context, input_context->streams[i]);
        break;
      default:
        input_context->streams[i]->discard = AVDISCARD_ALL;
        break;
    }
  }

  if (av_set_parameters(output_context, NULL) < 0) 
  {
    fprintf(stderr, "Invalid output format parameters\n");
    exit(1);
  }

  dump_format(output_context, 0, output_prefix, 1);

  AVCodec *codec = avcodec_find_decoder(video_stream->codec->codec_id);
  if (!codec) 
  {
    fprintf(stderr, "Could not find video decoder, key frames will not be honored\n");
  }

  if (avcodec_open(video_stream->codec, codec) < 0) 
  {
    fprintf(stderr, "Could not open video decoder, key frames will not be honored\n");
  }

  unsigned int output_index = 1;
  snprintf(output_filename, strlen(output_directory) + 1 + strlen(output_prefix) + 10, "%s/%s-%05u.ts", output_directory, output_prefix, output_index++);
  if (url_fopen(&output_context->pb, output_filename, URL_WRONLY) < 0) 
  {
    fprintf(stderr, "Could not open '%s'\n", output_filename);
    exit(1);
  }

  if (av_write_header(output_context)) 
  {
    fprintf(stderr, "Could not write mpegts header to first output file\n");
    exit(1);
  }

  unsigned int first_segment = 1;
  unsigned int last_segment = 0;
  int write_index = 1;
  write_index = !write_index_file(index, segment_duration, output_directory, output_prefix, http_prefix, first_segment, last_segment, 0, bucket_name, key_prefix);

  double prev_segment_time = 0;
  int decode_done;
  do 
  {
    double segment_time;
    AVPacket packet;

    decode_done = av_read_frame(input_context, &packet);
    if (decode_done < 0) 
    {
      break;
    }

    if (av_dup_packet(&packet) < 0) 
    {
      fprintf(stderr, "Could not duplicate packet");
      av_free_packet(&packet);
      break;
    }

    if (packet.stream_index == video_index && (packet.flags & PKT_FLAG_KEY)) 
    {
      segment_time = (double)video_stream->pts.val * video_stream->time_base.num / video_stream->time_base.den;
    }
    else if (video_index < 0) 
    {
      segment_time = (double)audio_stream->pts.val * audio_stream->time_base.num / audio_stream->time_base.den;
    }
    else 
    {
      segment_time = prev_segment_time;
    }

    // done writing the current file?
    if (segment_time - prev_segment_time >= segment_duration) 
    {
      put_flush_packet(output_context->pb);
      url_fclose(output_context->pb);

      if (write_index) 
      {
        write_index = !write_index_file(index, segment_duration, output_directory, output_prefix, http_prefix, first_segment, ++last_segment, 0, bucket_name, key_prefix);
      }

      snprintf(output_filename, strlen(output_directory) + 1 + strlen(output_prefix) + 10, "%s/%s-%05u.ts", output_directory, output_prefix, output_index++);
      if (url_fopen(&output_context->pb, output_filename, URL_WRONLY) < 0) 
      {
        fprintf(stderr, "Could not open '%s'\n", output_filename);
        break;
      }

      prev_segment_time = segment_time;
    }

    ret = av_write_frame(output_context, &packet);
    if (ret < 0) 
    {
      fprintf(stderr, "Could not write frame of stream: %d\n", ret);
      av_free_packet(&packet);
      //break; removed for streaming support
    }
    else if (ret > 0) 
    {
      fprintf(stderr, "End of stream requested\n");
      av_free_packet(&packet);
      break;
    }

    av_free_packet(&packet);
  } while (!decode_done);

  av_write_trailer(output_context);

  avcodec_close(video_stream->codec);

  for(i = 0; i < output_context->nb_streams; i++) 
  {
    av_freep(&output_context->streams[i]->codec);
    av_freep(&output_context->streams[i]);
  }

  url_fclose(output_context->pb);
  av_free(output_context);

  if (write_index) 
  {
    write_index_file(index, segment_duration, output_directory, output_prefix, http_prefix, first_segment, ++last_segment, 1, bucket_name, key_prefix);
  }

  return 0;
}
