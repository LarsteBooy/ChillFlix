import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_USER_ROLE } from '../../../../shared/constants';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem(LOCAL_STORAGE_USER_ROLE, 'ADMIN');
  }

}
