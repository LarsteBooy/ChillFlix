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
import { BreezerCasePipe } from './shared/pipes/breezerCase.pipe';
import { AdminButtonsComponent } from './modules/home/components/admin-buttons/admin-buttons.component';
import { AdminLogoutComponent } from './modules/home/components/admin-logout/admin-logout.component';
import { AdminLoginComponent } from './modules/home/components/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieOverviewComponent,
    MovieSidescrollerComponent,
    SearchComponent,
    MoviePlayerComponent,
    BreezerCasePipe,
    AdminButtonsComponent,
    AdminLogoutComponent,
    AdminLoginComponent
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
