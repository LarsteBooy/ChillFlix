import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieOverviewComponent } from './components/movie-overview/movie-overview.component';
import { MoviePlayerComponent } from './components/movie-player/movie-player.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    YoutubePlayerModule
  ],
  declarations: [
    HomeComponent,
    MovieDetailsComponent,
    MovieOverviewComponent,
    MoviePlayerComponent,
    LoginPageComponent,
  ]
})
export class HomeModule { }
