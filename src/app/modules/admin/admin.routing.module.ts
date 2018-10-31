import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const adminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes)],
  exports: [ RouterModule ],
})

export class AdminRoutingModule { }