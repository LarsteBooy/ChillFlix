import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieSidescrollerComponent } from './modules/home/components/movie-sidescroller/movie-sidescroller.component';
import { MovieOverviewComponent } from './modules/home/components/movie-overview/movie-overview.component';
import { MovieDetailsComponent } from './modules/home/components/movie-details/movie-details.component';
import { AdminAuthGuard } from './shared/guards/AdminAuthGuard.service';
import { AdminLogoutComponent } from './modules/home/components/admin-logout/admin-logout.component';
import { AdminLoginComponent } from './modules/home/components/admin-login/admin-login.component';

const routes: Routes = [
  { 
    path: 'details/:id', 
    component: MovieDetailsComponent
  },
  { 
    path: '', 
    redirectTo: '/overview', 
    pathMatch: 'full'
  },
  { 
    path: 'sidescroller', 
    component: MovieSidescrollerComponent 
  },
  { 
    path: 'admin', 
    loadChildren: './modules/admin/admin.module#AdminModule',
    canActivate: [AdminAuthGuard],
    data: {
      expectedRole: 'Admin'
    }
  },
  { 
    path: 'overview', 
    component: MovieOverviewComponent
  },
  {
    path: 'admin-logout',
    component: AdminLogoutComponent
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
