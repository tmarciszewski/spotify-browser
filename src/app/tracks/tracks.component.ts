import {Component, Input, QueryList, ViewChildren} from '@angular/core';
import {TrackList} from '../track-list';
import {PlayerComponent} from '../player/player.component';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent {
  @Input() tracks: TrackList;
  @Input() label = 'Tracks'
  @Input() showFoundCount = true;
  @Input() maxTrackCount = 10;

  @ViewChildren(PlayerComponent) players: QueryList<PlayerComponent>;
  constructor() { }

  play(ref: PlayerComponent, event) {
    this.players.forEach((el) => {
      el.stop();
    });

    ref.play();
  }

  stop(ref: PlayerComponent, event) {
    ref.stop();
  }
}
