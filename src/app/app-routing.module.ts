import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { featuredGamesComponent } from './featured-games/featured-games.component';
import { topStreamings } from './top-streamings/top-streamings.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { trendingComponent } from './trending/trending.component';
import { favoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: dashboardComponent },
  { path: 'trending', component: trendingComponent },
  { path: 'favorites', component: favoritesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
