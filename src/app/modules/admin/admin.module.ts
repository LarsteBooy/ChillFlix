import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyFormComponent } from './components/my-form/my-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    MyFormComponent
  ]
})
export class AdminModule { }
