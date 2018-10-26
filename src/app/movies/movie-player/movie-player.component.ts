import { Component } from '@angular/core';
 
@Component({
  selector: 'app-movie-player',
  template: `
        <youtube-player
      [videoId]="id"
      (ready)="savePlayer($event)"
      (change)="onStateChange($event)"
    ></youtube-player>
    `
})
export class MoviePlayerComponent {
  player: YT.Player;
  private id = 'qDuKsiwS5xw';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
