import {Component, Input, OnInit} from '@angular/core';
import {ArtistList} from '../artist-list';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  @Input() artists: ArtistList;
  @Input() label = 'Artists'
  @Input() showFoundCount = true;

  constructor() { }

  ngOnInit() {
  }

}
