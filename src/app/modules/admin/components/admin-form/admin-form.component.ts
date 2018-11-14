import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  adminForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
