import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_USER_ROLE } from '../../../../shared/constants';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem(LOCAL_STORAGE_USER_ROLE, 'USER');
  }

}
