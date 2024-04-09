import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() tick = new EventEmitter<number>();
  @Input('curTime') time = 0;
  gameInt;

  startGame() {
    this.gameInt = setInterval(() => {
      this.tick.emit(++this.time);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.gameInt);
  }
}
