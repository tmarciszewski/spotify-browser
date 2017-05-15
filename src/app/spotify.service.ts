import { Injectable } from '@angular/core';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

import {SearchResult} from "./search-result";
import {Album} from "./album";

@Injectable()
export class SpotifyService {

  constructor(private http: Http ) { }
  search(term: string): Observable<SearchResult> {
    return this.http.get(`https://api.spotify.com/v1/search?limit=10&q=${term}&type=album,artist,track`)
      .map(res => res.json());
  }

  getAlbum(id: string): Observable<Album> {
    return this.http.get(`https://api.spotify.com/v1/albums?ids=${id}`)
      .map(res => res.json().albums[0]);

  }

}
