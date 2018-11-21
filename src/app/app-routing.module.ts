import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieOverviewComponent } from './movies/movie-overview/movie-overview.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

const routes: Routes = [
  { path: 'details/:id', component: MovieDetailsComponent},
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: MovieOverviewComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {enableTracing: true})]
})
export class AppRoutingModule { }
