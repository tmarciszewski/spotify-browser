import {Component, Input, OnInit} from '@angular/core';
import {TrackList} from "../track-list";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  @Input() tracks: TrackList;
  constructor() { }

  ngOnInit() {
  }

}
