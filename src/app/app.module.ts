import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './modules/home/components/movie-details/movie-details.component';
import { MovieOverviewComponent } from './modules/home/components/movie-overview/movie-overview.component';
import { SearchComponent } from './core/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePlayerComponent } from './modules/home/components/movie-player/movie-player.component';
import { BreezerCasePipe } from './shared/pipes/breezerCase.pipe';
import { AdminButtonsComponent } from './modules/home/components/admin-buttons/admin-buttons.component';
import { LoginPageComponent } from './modules/home/components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule, ReactiveFormConfig } from '@rxweb/reactive-form-validators';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieOverviewComponent,
    SearchComponent,
    MoviePlayerComponent,
    BreezerCasePipe,
    AdminButtonsComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YoutubePlayerModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
