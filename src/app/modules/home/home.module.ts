import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppModule } from '../../app.module';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
