import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  movieId: String = 'M7lc1UVf-VE';

  constructor() { }

  ngOnInit() {
  }

}
