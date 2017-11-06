import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'top-streamings',
  templateUrl: './top-streamings.component.html',
  styleUrls: ['./top-streamings.component.css'],
})

export class topStreamings implements OnInit {
  topStreamings: Stream[] = [];

  constructor(public sanitizer: DomSanitizer) {}

  async ngOnInit() {
    this.topStreamings = await this.fetchtopStreamings();
  }

  async onStreamClicked(stream) {
    console.log(stream);
  }

  async fetchtopStreamings() {
    var data = [];
    try {
      const headers = new Headers();
      headers.append('Client-ID', '6h5bx1kmpwc7fw4ocobbeydw031kk3');
      const resp = await fetch('https://api.twitch.tv/kraken/streams?limit=3', {
        method: 'GET',
        headers: headers,
      });
      if (resp.status === 200) {
        const json = await resp.json();
        data = json.streams.map(gameData => {
          const title = gameData.channel.status;
          const thumbnail_url = gameData.preview.template;
          const viewer_count = gameData.viewers;
          const url_stream = gameData.channel.url;
          const stream_name = 'http://player.twitch.tv/?channel='+gameData.channel.name+'&autoplay=false';
          console.log(stream_name);
          return new Stream(title, thumbnail_url, viewer_count, url_stream, stream_name);
        });
      } else {
        console.log(`Looks like there was a problem. Status Code: ${resp.status}`);
      }
    } catch(err) {
      console.log('Fetch Error :S', err);
    }
    return data;
  }
}

class Stream {

  title: string
  thumbnail_url: string
  viewer_count: number
  url_stream: string
  stream_name: string

  constructor(title, thumbnail_url, viewer_count, url_stream, stream_name) {
    this.title = title;
    this.thumbnail_url = thumbnail_url;
    this.viewer_count = viewer_count;
    this.url_stream = url_stream;
    this.stream_name = stream_name;
  }

}
