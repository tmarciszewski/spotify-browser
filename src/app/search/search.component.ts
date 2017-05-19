import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {SearchResult} from '../search-result';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: SearchResult;
  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.spotify.search(params['term']);
      })
      .subscribe(result => this.searchResult = result );
  }
}
