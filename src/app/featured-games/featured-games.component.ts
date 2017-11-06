import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-games',
  templateUrl: './featured-games.component.html',
  styleUrls: ['./featured-games.component.css'],
})

export class featuredGamesComponent implements OnInit {
  featuredGames: Game[] = [];

  async ngOnInit() {
    this.featuredGames = await this.fetchFeaturedGames();
  }

  async onGameClicked(game) {
    const name = game.name;
    console.log(name);
  }

  async fetchFeaturedGames() {
    var data = [];
    try {
      const headers = new Headers();
      headers.append('Client-ID', '6h5bx1kmpwc7fw4ocobbeydw031kk3');
      const resp = await fetch('https://api.twitch.tv/kraken/games/top?limit=5', {
        method: 'GET',
        headers: headers,
      });
      if (resp.status === 200) {
        const json = await resp.json();
        data = json.top.map(gameData => {
          const gameDataIndex = json.top.indexOf(gameData);
          const name = gameData.game.name;
          const picture = gameData.game.box.medium;
          return new Game(name, picture);
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

class Game {

  name: string
  picture: string

  constructor(name, picture) {
    this.name = name;
    this.picture = picture;
  }

}
