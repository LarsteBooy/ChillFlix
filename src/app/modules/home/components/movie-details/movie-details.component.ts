import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

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
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMoviesFromYoutube().subscribe(data => {
      for (const playlistItem of data) {
        this.movieService.getMovieDetails(playlistItem.snippet.title).subscribe(movieData => {
          movieData.id = playlistItem.snippet.resourceId.videoId;
          if (movieData.id === id) {
            this.movie = movieData as Movie;
          }
        });
    }});
  }

}
