import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {LOCAL_STORAGE_USER_ROLE } from '../constants/index';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot) : boolean {

    const userRole: string = localStorage.getItem(LOCAL_STORAGE_USER_ROLE);

    console.warn('User Role from LocalStorage: ', userRole);

    let hoi: boolean = false;

    if(route.data.expectedRole === userRole){
      hoi = true;
      return hoi
    }
    
    console.warn(hoi);

    return hoi

  }

}
