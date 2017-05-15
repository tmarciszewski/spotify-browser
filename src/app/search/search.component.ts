import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {SearchResult} from "../search-result";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: SearchResult;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.spotify.search(`yolo`)
      .subscribe((data) => {
          console.log('SearchResult', data);
          this.searchResult = data;
        },
        (err) => {
          console.log('err', err);
        });
  }

}
