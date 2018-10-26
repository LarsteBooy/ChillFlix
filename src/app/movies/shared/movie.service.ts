import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private youtubeApiKey: String = 'AIzaSyAHeZkLc_DHUzzH87AuOA3wkQVWJezbbmE';
  private omdbApiKey: String = 'fd57cb4c';
  private youtubeApi: String = 'GET https://www.googleapis.com/youtube/v3/search';

  getMovie(title: string): Observable<Movie> {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=fd57cb4c`;
    const movie: Movie = {Title: 'Dummy', Plot: '1234'};
    this.http.get(url)
    .pipe(map(response => response as Movie))
    .subscribe(data => {
      Object.assign(movie, data);
    });
    return of(movie);
  }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  constructor(private http: HttpClient) { }
}
