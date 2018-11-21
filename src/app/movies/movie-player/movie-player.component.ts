import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: [ './movie-player.component.css' ]
})
export class MoviePlayerComponent implements OnInit {

  @Input() movieId: string;

  player: YT.Player;

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  ngOnInit() {
  }
}
