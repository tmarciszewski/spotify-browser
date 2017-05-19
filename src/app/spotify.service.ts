import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {SearchResult} from './search-result';
import {Album} from './album';
import {Artist} from './artist';
import {ArtistList} from './artist-list';
import {TrackList} from './track-list';
import {AlbumList} from './album-list';

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

  getArtist(id: string): Observable<Artist> {
    return this.http.get(`https://api.spotify.com/v1/artists?ids=${id}`)
      .map(res => res.json().artists[0]);
  }

  getTopTracks(artistId: string): Observable<TrackList> {
    return this.http.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`)
      .map(res => {
        return { items: res.json().tracks }
      });
  }

  getRelatedArtists(artistId: string): Observable<ArtistList> {
    return this.http.get(`https://api.spotify.com/v1/artists/${artistId}/related-artists`)
      .map(res => {
        return { items: res.json().artists };
      });
  }

  getAlbums(artistId: string): Observable<AlbumList> {
    return this.http.get(`https://api.spotify.com/v1/artists/${artistId}/albums?limit=10`)
      .map(res => res.json());
  }
}
