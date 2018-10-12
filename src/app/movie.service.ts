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

  getMovie(title: string): Observable<Movie> {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=fd57cb4c`;
    let movie: Movie;
    this.http.get(url)
    .pipe(map(response => response as Movie))
    .subscribe(data => {
      movie = data;
    });
    return of(movie);
  }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  constructor(private http: HttpClient) { }
}
