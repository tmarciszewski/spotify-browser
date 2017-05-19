import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Artist} from '../artist';
import {TrackList} from '../track-list';
import {ArtistList} from '../artist-list';
import {AlbumList} from '../album-list';
import {Observable as RxObservable} from 'rxjs/Rx';

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
    const getArtistData = (id) => RxObservable.forkJoin(
      this.spotify.getArtist(id),
      this.spotify.getRelatedArtists(id),
      this.spotify.getTopTracks(id),
      this.spotify.getAlbums(id)
    );

    this.route.params
      .switchMap((params) => getArtistData(params.id))
      .subscribe(([artist, relatedArtists, topTracks, albums]) => {
        this.artist = artist;
        this.relatedArtists = relatedArtists;
        this.topTracks = topTracks;
        this.albums = albums;
      });
  }
}
