import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Artist} from "../artist";
import {TrackList} from "../track-list";
import {ArtistList} from "../artist-list";
import {AlbumList} from "../album-list";

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
      .switchMap((params: Params) => this.spotify.getArtist(params['id']))
      .subscribe(artist => this.artist = artist );

    this.route.params
      .switchMap((params: Params) => this.spotify.getRelatedArtists(params['id']))
      .subscribe(relatedArtists => this.relatedArtists = relatedArtists );

    this.route.params
      .switchMap((params: Params) => this.spotify.getTopTracks(params['id']))
      .subscribe(topTracks => this.topTracks = topTracks );

    this.route.params
      .switchMap((params: Params) => this.spotify.getAlbums(params['id']))
      .subscribe(albums => this.albums = albums );
  }

}
