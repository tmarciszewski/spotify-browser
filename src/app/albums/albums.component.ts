import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  @Input() albums: Album;

  constructor() { }

  ngOnInit() {
  }

}
