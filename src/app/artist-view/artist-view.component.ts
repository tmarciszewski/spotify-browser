import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Artist} from '../artist';
import {TrackList} from '../track-list';
import {ArtistList} from '../artist-list';
import {AlbumList} from '../album-list';
import {Observable as RxObservable} from 'rxjs/Rx';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent implements OnInit {
  artist: Artist;
  relatedArtists: ArtistList;
  topTracks: TrackList;
  albums: AlbumList;

  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return RxObservable.forkJoin(
          this.spotify.getArtist(params['id']),
          this.spotify.getRelatedArtists(params['id']),
          this.spotify.getTopTracks(params['id']),
          this.spotify.getAlbums(params['id'])
        );
      })
      .subscribe(([artist, relatedArtists, topTracks, albums]) => {
        this.artist = artist;
        this.relatedArtists = relatedArtists;
        this.topTracks = topTracks;
        this.albums = albums;
      } );
  }
}
