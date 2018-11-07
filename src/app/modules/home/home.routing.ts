import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
];



@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
