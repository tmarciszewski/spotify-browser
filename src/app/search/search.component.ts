import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {SearchResult} from '../search-result';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  searchResult: Observable<SearchResult>;
  private searchTerms = new Subject<string>();

  constructor(private spotify: SpotifyService) { }

// Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.searchResult =
      this.searchResult = this.searchTerms
        .debounceTime(300)        // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => {
          return term   // switch to new observable each time the term changes
            // return the http search observable
            ? this.spotify.search(term)
            // or the observable of empty heroes if there was no search term
            : Observable.of<SearchResult>();
        })
        .catch(error => {
          console.log(error);
          return Observable.of<SearchResult>();
        });
  }

  ngAfterViewInit() {
    this.search('yolo');
  }
}
