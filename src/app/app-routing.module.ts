import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieSidescrollerComponent } from './movie-sidescroller/movie-sidescroller.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: 'details/:id', component: MovieDetailsComponent},
  { path: '', redirectTo: '/sidescroller', pathMatch: 'full'},
  { path: 'sidescroller', component: MovieSidescrollerComponent },
  { path: 'overview', component: MovieOverviewComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
