import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';


@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html'
})
export class StreamPage implements AfterViewInit{

  constructor(
    public navCtrl: NavController,
    private streamingMedia: StreamingMedia
  ) {}

  ngAfterViewInit() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };
    this.streamingMedia.playVideo('https://www.youtube.com/watch?v=-_jfBYgI48c', options);
  }
}
