import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { featuredGamesComponent } from './featured-games/featured-games.component';
import { topStreamings } from './top-streamings/top-streamings.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { trendingComponent } from './trending/trending.component';
import { favoritesComponent } from './favorites/favorites.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    featuredGamesComponent,
    topStreamings,
    dashboardComponent,
    trendingComponent,
    favoritesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
