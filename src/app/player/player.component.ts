import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @ViewChild('player') player: ElementRef;
  @Input() source: string;
  @Output('play') emitPlay = new EventEmitter<string>();
  @Output('stop') emitStop = new EventEmitter<string>();
  isPlaying = false;

  constructor() { }
  togglePlay(): void {
    if(!this.isPlaying) {
      this.emitPlay.emit('playing');
    } else {
      this.emitStop.emit('stopped');
    }
  }

  stop() {
    this.isPlaying = false;
    this.player.nativeElement.pause();
  }

  play() {
    this.isPlaying = true;
    this.player.nativeElement.play();
  }

  ngOnInit() {
  }
}
