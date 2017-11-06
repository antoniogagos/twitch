import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})


export class trendingComponent implements OnInit {
  trendingClips: Clip[] = [];

  constructor(public sanitizer: DomSanitizer) {}

  async ngOnInit() {
    this.trendingClips = await this.fetchTrendingClips();
  }

  async fetchTrendingClips() {
    var data = [];
    const clipUrl = 'https://api.twitch.tv/kraken/clips/top?limit=3';
    try {
      const headers = new Headers();
      headers.append('Accept', 'application/vnd.twitchtv.v5+json');
      headers.append('Client-ID', '6h5bx1kmpwc7fw4ocobbeydw031kk3');
      const resp = await fetch(clipUrl, { method: 'GET', headers: headers });
      if (resp.status === 200) {
        const json = await resp.json();
        console.log(json);
        data = json.clips.map(clip => {
          const title = clip.title;
          const clipEmbed = clip.embed_url+'&autoplay=false';
          console.log(clipEmbed);

          const duration = Math.round(clip.duration);
          const game = clip.game;
          const views = clip.views;
          return new Clip(title, clipEmbed, duration, game, views)
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

class Clip {
  title: string
  clipEmbed: null
  duration: number
  game: string
  views: number

  constructor(title, clipEmbed, duration, game, views) {
    this.title = title;
    this.clipEmbed = clipEmbed;
    this.duration = duration;
    this.game = game;
    this.views = views;
  }
}
