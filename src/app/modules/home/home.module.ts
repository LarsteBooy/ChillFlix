import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppModule } from '../../app.module'
import { HomeRoutingModule } from './home.routing';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppModule
  ],
  declarations: [HomeComponent, AdminLoginComponent]
})
export class HomeModule { }
