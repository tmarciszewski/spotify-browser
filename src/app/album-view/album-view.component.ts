import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Album} from "../album";

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {
  album: Album;

  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.spotify.getAlbum(params['id']))
      .subscribe(album => this.album = album);

  }

}
