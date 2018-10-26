import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private youtubeApiKey: String = 'AIzaSyAHeZkLc_DHUzzH87AuOA3wkQVWJezbbmE';
  private omdbApiKey: String = 'fd57cb4c';

  movies: Array<Movie>;

  getMovie(title: string): Observable<Movie> {
    if (title.includes('-')) {
      title = title.substring(0, title.indexOf('-'));
    }
    if (title.includes('|')) {
      title = title.substring(0, title.indexOf('|'));
    }
    if (title.includes('/')) {
      title = title.substring(0, title.indexOf('/'));
    }
    if (title.includes('(')) {
      title = title.substring(0, title.indexOf('('));
    }
    if (title.includes('Trailer')) {
      title = title.substring(0, title.indexOf('Trailer'));
    }
    const url = `http://www.omdbapi.com/?t=${title}&apikey=fd57cb4c`;
    console.log('checking title..', title);
    const movie: Movie = null;
    return this.http.get(url)
    .pipe(map(response => response as Movie));
  }

  getMovies(): Observable<Array<Movie>> {
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL1DD10E84B9B08A35&maxResults=50&key=AIzaSyAHeZkLc_DHUzzH87AuOA3wkQVWJezbbmE';
    return this.http.get(url)
    .pipe(tap(data => console.log('Vraag videos op', data)))
    .pipe(map(response => response['items']));
  }


  constructor(private http: HttpClient) { }
}
