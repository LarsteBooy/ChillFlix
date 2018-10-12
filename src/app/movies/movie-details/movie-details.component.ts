import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const title = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(title).subscribe(movie => this.movie = movie);
  }

}
