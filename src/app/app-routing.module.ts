import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieSidescrollerComponent } from './movies/movie-sidescroller/movie-sidescroller.component';
import { MovieOverviewComponent } from './movies/movie-overview/movie-overview.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieViewComponent } from './movies/movie-view/movie-view.component';

const routes: Routes = [
  { path: 'details/:id', component: MovieDetailsComponent},
  { path: '', redirectTo: '/sidescroller', pathMatch: 'full'},
  { path: 'sidescroller', component: MovieSidescrollerComponent },
  { path: 'overview', component: MovieOverviewComponent},
  { path: 'view/:id', component: MovieViewComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
