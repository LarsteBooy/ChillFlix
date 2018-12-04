import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_USER_ROLE } from '../../shared/constants';

@Component({
  selector: 'app-admin-buttons',
  templateUrl: './admin-buttons.component.html',
  styleUrls: ['./admin-buttons.component.css']
})
export class AdminButtonsComponent implements OnInit {

  isAdmin(): Boolean {
    if (localStorage.getItem(LOCAL_STORAGE_USER_ROLE) === 'Admin') {
      console.log(localStorage.getItem(LOCAL_STORAGE_USER_ROLE));
      return true;
    } else {
     return false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  setUser(): void {
    localStorage.setItem(LOCAL_STORAGE_USER_ROLE, 'User');
  }

}
