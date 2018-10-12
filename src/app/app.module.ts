import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { MovieSidescrollerComponent } from './movie-sidescroller/movie-sidescroller.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieOverviewComponent,
    MovieSidescrollerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
