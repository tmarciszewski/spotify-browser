import { Injectable } from '@angular/core';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {SearchResult} from "./search-result";

@Injectable()
export class SpotifyService {

  constructor(private http: Http ) { }
  search(term: string): Observable<SearchResult> {
    return this.http.get('https://api.spotify.com/v1/search?limit=10&q=m&type=album,artist,track')
      .map(res => res.json() as SearchResult);
  }

}
