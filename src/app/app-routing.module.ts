import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieSidescrollerComponent } from './movie-sidescroller/movie-sidescroller.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: 'sidescroller', component: MovieSidescrollerComponent },
  { path: 'overview', component: MovieOverviewComponent},
  { path: 'details/:Title', component: MovieDetailsComponent},
  { path: '', redirectTo: 'sidescroller', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
