import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_USER_ROLE } from '../../../../shared/constants';

@Component({
  selector: 'app-admin-buttons',
  templateUrl: './admin-buttons.component.html',
  styleUrls: ['./admin-buttons.component.css']
})
export class AdminButtonsComponent implements OnInit {

  isAdmin: boolean;

  constructor() { }

  ngOnInit() {
  }

  setAdmin(): void {
    localStorage.setItem(LOCAL_STORAGE_USER_ROLE, 'Admin');
    this.isAdmin = true;
  }

  setUser(): void {
    localStorage.setItem(LOCAL_STORAGE_USER_ROLE, 'User');
    this.isAdmin = false;
  }

}
