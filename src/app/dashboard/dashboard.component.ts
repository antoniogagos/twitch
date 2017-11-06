import { Component, OnInit } from '@angular/core';
import { featuredGamesComponent } from '../featured-games/featured-games.component';
import { topStreamings } from '../top-streamings/top-streamings.component';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class dashboardComponent implements OnInit {
  ngOnInit() {

  }
}