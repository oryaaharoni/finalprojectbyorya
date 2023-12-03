import { Component } from '@angular/core';

@Component({
  selector: 'app-option-game',
  templateUrl: './option-game.component.html',
  styleUrls: ['./option-game.component.css'],
})
export class OptionGameComponent {
  btnGame: boolean = false;
  btnRoom: boolean = false;
  btnGlobalChat: boolean = false;
  btnfriends: boolean = false;

  constructor() {}

  btnGameClick() {
    this.btnGame = !this.btnGame;
  }

  goToNextPage(choice: string) {
    if (choice === 'computer') {
      this.btnGame = false;
      this.btnGlobalChat = true;
      this.btnfriends = false;

    } else if (choice === 'twoplayers') {
      this.btnRoom = true;
      this.btnGame = false;
      this.btnfriends = true;
    }
  }
}
