import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit {

  movies: Array<Movie> = new Array<Movie>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMoviesFromYoutube().subscribe(data => {
      for (const playlistItem of data) {
        this.movieService.getMovieDetails(playlistItem.snippet.title).subscribe(movieData => {
          movieData.id = playlistItem.snippet.resourceId.videoId;
          this.movies.push(movieData as Movie);
        });
    }});
  }

}
