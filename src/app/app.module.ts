import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './modules/home/components/movie-details/movie-details.component';
import { MovieOverviewComponent } from './modules/home/components/movie-overview/movie-overview.component';
import { MovieSidescrollerComponent } from './modules/home/components/movie-sidescroller/movie-sidescroller.component';
import { SearchComponent } from './core/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePlayerComponent } from './modules/home/components/movie-player/movie-player.component';
import { AdminComponent } from './modules/admin/admin.component';
import { BreezerCasePipe } from './shared/pipes/breezerCase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieOverviewComponent,
    MovieSidescrollerComponent,
    SearchComponent,
    MoviePlayerComponent,
    BreezerCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
