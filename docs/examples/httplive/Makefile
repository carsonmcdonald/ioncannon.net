all:
	#gcc -Wall -g segmenter.c -o segmenter -lavformat -lavcodec -lavutil -lbz2 -lm -lz -lfaac -lmp3lame -lx264 -lfaad
	#gcc -Wall -g live_segmenter.c -o live_segmenter -lavformat -lavcodec -lavutil -lbz2 -lm -lz -lfaac -lmp3lame -lx264 -lfaad
	gcc -Wall -g live_upload.c -o live_upload -lavformat -lavcodec -lavutil -lbz2 -lm -lz -lfaac -lmp3lame -lx264 -lfaad

clean:
	rm -f segmenter
	rm -f live_segmenter
	rm -f live_upload
