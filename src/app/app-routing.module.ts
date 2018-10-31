import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieSidescrollerComponent } from './movies/movie-sidescroller/movie-sidescroller.component';
import { MovieOverviewComponent } from './movies/movie-overview/movie-overview.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

const routes: Routes = [
  { path: 'details/:id', component: MovieDetailsComponent},
  { path: '', redirectTo: '/sidescroller', pathMatch: 'full'},
  { path: 'sidescroller', component: MovieSidescrollerComponent },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: 'overview', component: MovieOverviewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
