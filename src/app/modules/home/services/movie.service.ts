import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private youtubeApiKey = 'AIzaSyAHeZkLc_DHUzzH87AuOA3wkQVWJezbbmE';
  private omdbApiKey = 'fd57cb4c';
  private playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL1DD10E84B9B08A35&maxResults=50&key=AIzaSyAHeZkLc_DHUzzH87AuOA3wkQVWJezbbmE';

  // Map youtubeAPI data to this.movies
  getMoviesFromYoutube(): Observable<any> {
    return this.http.get(this.playlistUrl)
    .pipe(tap(data => console.log('Vraag videos op van youtube', data)))
    .pipe(map(response => response['items']));
  }

  getMovieDetails(title: string): Observable<Movie> {
    const cutTitle = this.cutTitleString(title);
    const url = `http://www.omdbapi.com/?t=${cutTitle}&apikey=fd57cb4c`;
    console.log('checking title..', cutTitle);
    return this.http.get(url).pipe(map(response => response as Movie));
  }

  cutTitleString(title: string): string {
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
    return title;
  }


  constructor(private http: HttpClient) { }
}
