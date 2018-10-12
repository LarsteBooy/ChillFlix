import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-sidescroller',
  templateUrl: './movie-sidescroller.component.html',
  styleUrls: ['./movie-sidescroller.component.css']
})
export class MovieSidescrollerComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies.slice(0, 10));
  }

}
