import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './core/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { BreezerCasePipe } from './shared/pipes/breezerCase.pipe';
import { LoginPageComponent } from './modules/home/components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AdminButtonsComponent } from './core/admin-buttons/admin-buttons.component';
import { HomeModule } from './modules/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BreezerCasePipe,
    LoginPageComponent,
    AdminButtonsComponent,
    HomeModule // Should not be declared here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
