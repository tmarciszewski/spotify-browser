import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';


const termCleanupRegExp = /[^a-zA-Z0-9 -]/g
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private searchTerms = new Subject<string>();

  constructor(private router: Router) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
      this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => {
          this.router.navigate(['/search', term.replace(termCleanupRegExp, '')]);
          return Observable.of<Object>({});
        })
        .subscribe(() => {});
  }
}
