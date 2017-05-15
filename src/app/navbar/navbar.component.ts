import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../album";
import {Artist} from "../artist";
import {Track} from "../track";
import {SearchResult} from "../search-result";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.spotify.search(`queen`)
      .subscribe((data) => {
        console.log('DATAAAA', data);
        // data
        // console.log(data.albums);
        console.log((data as SearchResult).albums)
      },
      (err) => {
        console.log('err', err);
      });
  }


}
