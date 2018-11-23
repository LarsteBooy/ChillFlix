import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_USER_ROLE } from 'src/app/shared/constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setAdmin(): void {
    localStorage.setItem(LOCAL_STORAGE_USER_ROLE, 'Admin');
    console.log(localStorage.getItem(LOCAL_STORAGE_USER_ROLE));
  }

}
