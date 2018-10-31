import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieOverviewComponent } from './movies/movie-overview/movie-overview.component';
import { MovieSidescrollerComponent } from './movies/movie-sidescroller/movie-sidescroller.component';
import { SearchComponent } from './core/search/search.component';
import { HttpClientModule } from '@angular/common/http';
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
    BreezerCasePipe
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
