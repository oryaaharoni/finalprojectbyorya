import { Component } from '@angular/core';
import Dice from 'src/app/models/dice.model';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css'],
})
export class BoardGameComponent {
  trowDiceValid: boolean = true;

  timerValue: number = 0;
  dispatcherTimer: any;

  currentDice: any;

  existingDice1: any;
  existingDice2: any;

  currentPlayer: any = 'white';
  counter: number = 1;

  ifDouble: boolean = false;

  dice1: Dice = new Dice();
  dice2: Dice = new Dice();
  x: any;
  y: any;

  tbool: boolean = false; // check if we need or delete this

  BlackWinCheckers: any = [];
  WhiteWinCheckers: any = [];

  isEmptyWhite: boolean = false;
  isEmptyBlack: boolean = false;

  tryToWinWhite: boolean = false;
  tryToWinBlack: boolean = false;

  tempBoolWhite: boolean = false;

  beatsCheckers: any = [
    {
      id: 1,
      top: 198,
      left: 2,
      color: 'white',
      // elements: [1, 2],
      elements: [],
    },
    {
      id: 2,
      top: 228,
      left: 2,
      color: 'black',
      elements: [],
      // elements: [9, 10],
    },
  ];

  boardlocation: any = [
    {
      id: 1,
      top: 425,
      left: 532,
      // color: 'white',
      // color: '',
      // elements: [1, 2],
      color: 'black',
      elements: [29, 30], // שמתי באכילות
    },
    {
      id: 2,
      top: 425,
      left: 492,
      // color: '',
      // elements: [],
      color: 'black',
      elements: [9, 10],
      // elements: [], // שמתי באכילות
    },
    {
      id: 3,
      top: 425,
      left: 452,
      // color: '',
      // elements: [],
      color: 'black',
      elements: [16, 17, 18, 19, 20],
    },
    {
      id: 4,
      top: 425,
      left: 412,
      // color: '',
      color: 'black',
      // elements: [],
      elements: [6, 7, 8],
    },
    {
      id: 5,
      top: 425,
      left: 372,
      color: '',
      elements: [],
      // color: 'white',
      // elements: [24, 25, 26, 27, 28],
    },
    {
      id: 6,
      top: 425,
      left: 332,
      color: 'black',
      // elements: [3, 4, 5, 6, 7],
      elements: [3, 4, 5],
    },
    {
      id: 7,
      top: 425,
      left: 217,
      color: '',
      elements: [],
      // color: 'black',
      // elements: [9, 10],
    },
    {
      id: 8,
      top: 425,
      left: 177,
      // color: 'black',
      color: '',
      // elements: [8, 9, 10],
      elements: [],
    },
    {
      id: 9,
      top: 425,
      left: 137,
      color: '',
      elements: [],
    },
    {
      id: 10,
      top: 425,
      left: 97,
      color: '',
      elements: [],
    },
    {
      id: 11,
      top: 425,
      left: 57,
      color: '',
      elements: [],
    },
    {
      id: 12,
      top: 425,
      left: 17,
      // color: 'white',
      color: '',
      elements: [],
      // elements: [11, 12, 13, 14, 15],
    },
    {
      id: 13,
      top: 0,
      left: 17,
      // color: 'black',
      // elements: [16, 17, 18, 19, 20],
      color: '',
      elements: [],
    },
    {
      id: 14,
      top: 0,
      left: 57,
      color: '',
      elements: [],
    },
    {
      id: 15,
      top: 0,
      left: 97,
      color: '',
      elements: [],
    },
    {
      id: 16,
      top: 0,
      left: 137,
      // color: 'black',
      // elements: [29, 30],
      color: '',
      elements: [],
    },
    {
      id: 17,
      top: 0,
      left: 177,
      // color: 'white',
      color: '',
      // elements: [21, 22, 23],
      elements: [],
    },
    {
      id: 18,
      top: 0,
      left: 217,
      color: '',
      // color: 'white',
      elements: [],
      // elements: [1, 2],
    },
    {
      id: 19,
      top: 0,
      left: 332,
      color: 'white',
      // color: '',
      // elements: [24, 25, 26, 27, 28],
      elements: [24, 25, 26, 21, 22],
      // elements: [],
    },
    {
      id: 20,
      top: 0,
      left: 372,
      color: '',
      elements: [],
    },
    {
      id: 21,
      top: 0,
      left: 412,
      // color: '',
      // elements: [],
      color: 'white',
      elements: [27, 28, 23],
    },
    {
      id: 22,
      top: 0,
      left: 452,
      // color: '',
      color: 'white',
      // elements: [],
      elements: [11, 12, 13, 14, 15],
    },
    {
      id: 23,
      top: 0,
      left: 492,
      color: '',
      elements: [],
    },
    {
      id: 24,
      top: 0,
      left: 532,
      // color: 'black',
      // color: '',
      // elements: [29, 30],
      // elements: [],
      color: 'white',
      elements: [1, 2],
    },
  ];

  getFocuseOnDice() {
    if (this.currentDice == 1) {
      this.existingDice1 = true;
      this.existingDice2 = false;
    } else if (this.currentDice == 2) {
      this.existingDice1 = false;
      this.existingDice2 = true;
    } else {
      this.existingDice1 = '';
      this.existingDice2 = '';
    }
  }

  getValidToDiceBtn() {
    if (this.dice1.used == true && this.dice2.used == true) {
      this.trowDiceValid = true;
    } else {
      this.trowDiceValid = false;
    }
  }

  checkDouble() {
    if (this.dice1.value == this.dice2.value) {
      return true;
    } else {
      return false;
    }
  }

  getPlayerForCurrentTurn() {
    const double = this.checkDouble();
    console.log('double:', double);

    if (this.currentPlayer == 'white') {
      // if (this.dice1.value==this.dice2.value){
      if (double) {
        if (this.counter == 2) {
          this.counter = 1;
          this.currentPlayer = 'black';
          console.log('counter: ', this.counter);
          console.log('current player change to : ' + this.currentPlayer);
        } else {
          this.dice1.used = false;
          this.dice2.used = false;
          console.log('befor counter: ', this.counter);
          this.counter++;
          console.log('after counter: ', this.counter);
          this.currentDice = 1;
          this.getFocuseOnDice();
        }
      } 
      else {
        this.currentPlayer = 'black';
        console.log('current player change to : ' + this.currentPlayer);
        // return;
      }
       return;
    }
     else if (this.currentPlayer == 'black') {
      // if (this.dice1.value== this.dice2.value){
      if (double) {
        // maybe chang and use this.ifdouble
        if (this.counter == 2) {
          this.counter = 1;
          this.currentPlayer = 'white';
          console.log('counter: ', this.counter);
          console.log('current player change to : ' + this.currentPlayer);
        } else {
          this.dice1.used = false;
          this.dice2.used = false;
          console.log('befor counter: ', this.counter);
          this.counter++;
          console.log('after counter: ', this.counter);
          this.currentDice = 1;
          this.getFocuseOnDice();
        }
      } else {
        this.currentPlayer = 'white';
        console.log('current player change to : ' + this.currentPlayer);
      }
    }
    // console.log("current player change to : " + this.currentPlayer);
  }

  getDiceNum() {
    if (
      this.dice1.used == false &&
      this.dice2.used == false &&
      this.currentDice == 1
    ) {
      this.currentDice = 1;

      console.log('function getDiceNum : 1');

      this.getFocuseOnDice();

      return this.dice1.value;
    } 
    else if (
      this.dice1.used == false &&
      this.dice2.used == false &&
      this.currentDice == 2
    ) {
      console.log('ssssssssssssssssssss');
      console.log('function getDiceNum : 2');

      this.getFocuseOnDice();

      return this.dice2.value;
    } 
    else if (this.dice1.used == true && this.dice2.used == false) 
    {
      this.currentDice = 2;
      console.log('function getDiceNum : 3');

      this.getFocuseOnDice();

      return this.dice2.value;
    } 
    else if (this.dice1.used == false && this.dice2.used == true) 
    {
      this.currentDice = 1;
      console.log('function getDiceNum : 4');

      this.getFocuseOnDice();

      return this.dice1.value;
    } 
    else if (this.dice1.used == true && this.dice2.used == true) 
    {
      if (this.ifDouble) 
      {
        this.dice1.used = false;
        this.dice2.used = false;
        this.ifDouble = false;
      }
      this.getValidToDiceBtn();
      this.currentDice = 0;
      console.log('function getDiceNum : 5');

      this.getFocuseOnDice();

      this.getPlayerForCurrentTurn();
      return 0;
    } 
    else 
    {
      let c = 0;
      this.getValidToDiceBtn();
      this.currentDice = 1;
      c = this.getDiceNum();
      this.getFocuseOnDice();
      console.log('function getDiceNum : 6 (else) : ' + c);
      return c;
    }
  }

  changeUsedDice() {
    if (this.currentDice == 1) {
      this.dice1.used = true;
      console.log('dice1.used change to ' + true);
      this.getDiceNum();
      this.getFocuseOnDice();
    } else if (this.currentDice == 2) {
      this.dice2.used = true;
      console.log('dice2.used change to ' + true);
      this.getDiceNum();
      this.getFocuseOnDice();
    }
  }

  trowDices() {
    console.log('current player now is : ' + this.currentPlayer);

    // this.dice1.value = Math.floor(Math.random() * 6) + 1;
    this.dice1.value = 4; //remove

    this.dice1.used = false;
    this.existingDice1 = true;

    // this.dice2.value = Math.floor(Math.random() * 6) + 1;
    this.dice2.value = 6; //remove

    this.dice2.used = false;
    console.log('dice1: (value) ' + this.dice1.value);
    console.log('dice1: (used) ' + this.dice1.used);
    console.log('dice2: (value) ' + this.dice2.value);
    console.log('dice2: (used) ' + this.dice2.used);

    this.ifDouble = this.checkDouble();
    console.log('ifDouble: ', this.ifDouble);

    this.trowDiceValid = false;

    console.log('starting');
    console.log('current player= ', this.currentPlayer);
    this.checkSomthing(this.dice1.value, this.dice2.value, this.currentPlayer);

    console.log('----------------------------------');
  }

  checkBoardLocationIsValid(num: number) {
    //white
    let e = false;
    this.boardlocation.map((b: any) => {
      if (b.id == num) {
        if (b.elements.length > 1 && b.color == 'black') {
          e = false;
        } else {
          e = true;
        }
      }
    });
    console.log('e', e);
    return e;
  }

  checkBoardLocationIsValidForBlack(num: number) {
    //black
    let e = false;
    this.boardlocation.map((b: any) => {
      if (b.id == num) {
        if (b.elements.length > 1 && b.color == 'white') {
          e = false;
        } else {
          e = true;
        }
      }
    });
    console.log('e', e);
    return e;
  }

  checkSomthing(num1: number, num2: number, existPlayer: string) {
    if (existPlayer == 'white') {
      this.checkWhiteBeatsIsEmpty();
      console.log(' its empty white', this.isEmptyWhite);

      //check if we need to add here something
    }
    if (existPlayer == 'black') {
      this.checkBlackBeatsIsEmpty();
      console.log(' its empty black', this.isEmptyBlack);

      var location1 = this.getBoardLocationByDiceValue(num1);
      var location2 = this.getBoardLocationByDiceValue(num2);
      console.log('location1 = ', location1);
      console.log('location2 = ', location2);
    }
    //fix here befor change black

    if (
      (this.isEmptyWhite == false && existPlayer == 'white') ||
      (this.isEmptyBlack == false && existPlayer == 'black')
    ) {
      let a3 = false;
      let b3 = false;
      this.boardlocation.map((b: any) => {
        if (existPlayer == 'white') {
          if (b.id <= 6 && b.id >= 1) {
            if (
              this.ifDouble == true &&
              b.id == num1 &&
              b.elements.length > 1 &&
              b.color == 'black'
            ) {
              console.log('double and not valid ');

              this.dispatcherTimer = setInterval(() => {
                this.timerValue++;
                console.log('this.timerValue ', this.timerValue);

                if (this.timerValue >= 2) {
                  clearInterval(this.dispatcherTimer);
                  this.currentDice = 0;
                  this.getFocuseOnDice();
                  this.dice1.used = true;
                  this.dice2.used = true;
                  this.currentPlayer = 'black';
                  this.getValidToDiceBtn();
                  this.timerValue = 0;
                }
              }, 1000);
            } else {
              if (num1 == b.id && b.elements.length > 1 && b.color == 'black') {
                console.log('not empty to remove 1', b.id);
                a3 = true;

                this.currentDice = 2;
                this.getFocuseOnDice();
              } else if (
                num2 == b.id &&
                b.elements.length > 1 &&
                b.color == 'black'
              ) {
                console.log('not empty to remove 2', b.id);
                b3 = true;

                this.currentDice = 1;
                this.getFocuseOnDice();
              }
            }
          }
        } else if (existPlayer == 'black') {
          if (b.id <= 24 && b.id >= 19) {
            console.log('aaa');
            if (
              this.ifDouble == true &&
              b.id == location1 &&
              b.elements.length > 1 &&
              b.color == 'white'
            ) {
              console.log('double and not valid ');

              this.dispatcherTimer = setInterval(() => {
                this.timerValue++;
                console.log('this.timerValue ', this.timerValue);

                if (this.timerValue >= 2) {
                  clearInterval(this.dispatcherTimer);
                  this.currentDice = 0;
                  this.getFocuseOnDice();
                  this.dice1.used = true;
                  this.dice2.used = true;
                  this.currentPlayer = 'white';
                  this.getValidToDiceBtn();
                  this.timerValue = 0;
                }
              }, 1000);
            } else {
              console.log('*****');
              console.log('num1= ', num1);
              console.log('b.id= ', b.id);

              if (
                location1 == b.id &&
                b.elements.length > 1 &&
                b.color == 'white'
              ) {
                console.log('not empty to remove 1', b.id);
                a3 = true;

                this.currentDice = 2;
                this.getFocuseOnDice();
              } else if (
                location2 == b.id &&
                b.elements.length > 1 &&
                b.color == 'white'
              ) {
                console.log('not empty to remove 2', b.id);
                b3 = true;

                this.currentDice = 1;
                this.getFocuseOnDice();
              }
            }
          }
        }
      });
      console.log('a3 ', a3);
      console.log('b ', b3);

      if (a3 && b3) {
        console.log('not ok 000000000');

        this.dispatcherTimer = setInterval(() => {
          this.timerValue++;
          console.log('this.timerValue ', this.timerValue);

          if (this.timerValue >= 2) {
            clearInterval(this.dispatcherTimer);
            this.dice1.used = true;
            this.dice2.used = true;
            this.currentDice = 0;
            this.getFocuseOnDice();
            this.getPlayerForCurrentTurn();
            this.getValidToDiceBtn();
            this.timerValue = 0;
          }
        }, 1000);
      } else if (a3 && !b3) {
        this.dice1.used = false;
        this.currentDice = 2;
        this.getFocuseOnDice();
        console.log('not ok 1`11111111111');
      } else if (!a3 && b3) {
        this.currentDice = 1;
        this.getFocuseOnDice();
        console.log('not ok 22222222222');
      }
    } else {
      this.currentDice = 0;
      this.getFocuseOnDice();
      this.existingDice1 = true;
    }
  }

  //האם המערך אכילות ריק -שחור
  checkBlackBeatsIsEmpty() {
    //black
    const black = this.beatsCheckers[1].elements.length;
    if (black == 0) {
      this.isEmptyBlack = true;
      console.log('isEmpty black: ', this.isEmptyBlack);
    } else {
      this.isEmptyBlack = false;
      console.log('isEmpty black: ', this.isEmptyBlack);
    }
  }

  //האם המערך אכילות ריק -לבן
  checkWhiteBeatsIsEmpty() {
    //white
    const white = this.beatsCheckers[0].elements.length;
    if (white == 0) {
      this.isEmptyWhite = true;
      console.log('isEmpty White: ', this.isEmptyWhite);
    } else {
      this.isEmptyWhite = false;
      console.log('isEmpty White: ', this.isEmptyWhite);
    }
  }

  //הורדה ממערך האכילות-לבן /לבדוק אם המיקום על הלוח זמין או תפוס
  moveWhiteBeatElement(i: any) {
    console.log('moveWhiteBeatElement start ');

    //maybe remove tbool
    console.log('this.tbool', this.tbool);

    const numDiceTemp = this.getDiceNum();
    console.log('this.currentDice ', this.currentDice);
    console.log('numDiceTemp ', numDiceTemp);
    if (numDiceTemp != 0) {
      console.log('a:');
      let c = this.checkColorBeatChoosenIsWhite(i);
      console.log('c', c);
      console.log('b:');

      console.log('i:', i);

      if (c == true && this.currentPlayer == 'white') {
        console.log('true ok ');
        this.boardlocation.map((b: any) => {
          if (b.id <= 6 && b.id >= 1) {
            if (b.elements.length == 0) {
              console.log('empty triangle , b.id', b.id);

              if (numDiceTemp == b.id) {
                this.boardlocation[b.id - 1].elements.push(i);
                this.boardlocation[b.id - 1].color = 'white';
                this.removeFromBeatsArray(i);
                this.changeUsedDice();
              }
            } else if (b.elements.length >= 1 && b.color == 'white') {
              console.log('with white element , b.id', b.id);
              console.log('numDiceTemp', numDiceTemp);
              if (numDiceTemp == b.id) {
                this.boardlocation[b.id - 1].elements.push(i);
                this.removeFromBeatsArray(i);
                this.changeUsedDice();
              }
            } else if (b.elements.length == 1 && b.color == 'black') {
              console.log('one black element , b.id', b.id);
              let index;
              let a;
              if (numDiceTemp == b.id) {
                this.boardlocation[b.id - 1].elements.map((t: any) => {
                  a = t;
                  console.log('a', a);
                  index = this.boardlocation[b.id - 1].elements.indexOf(a);
                  console.log('index', index);
                });
                this.boardlocation[b.id - 1].elements.splice(index, 1);
                this.boardlocation[b.id - 1].color = 'white';
                this.boardlocation[b.id - 1].elements.push(i);

                this.removeFromBeatsArray(i);
                this.beatsCheckers[1].elements.push(a);
                this.changeUsedDice();
              }
            } else if (b.elements.length > 1 && b.color == 'black') {
              console.log('place is not empty ' + b.id);
              console.log('numdiceTemp', numDiceTemp);
              this.checkWhiteBeatsIsEmpty();

              if (
                this.dice1.used == true &&
                this.ifDouble == false &&
                this.isEmptyWhite == false
              ) {
                const w = this.checkBoardLocationIsValid(numDiceTemp);
                if (w == false) {
                  this.dice2.used = true;
                }
                console.log('beat arr is not empty and canot move beat');
              }
              console.log('xxx');
              if (b.id == numDiceTemp) {
                if (this.dice2.used != true) {
                  this.currentDice = 2;
                  //maybe add changeuseddice here
                  this.getFocuseOnDice();
                  console.log('a');
                } else {
                  this.dice1.used = true;
                  this.currentDice = 0;
                  this.getFocuseOnDice();
                  this.getPlayerForCurrentTurn();
                  this.getValidToDiceBtn();
                  console.log('b');
                }
              }
            } else {
              console.log('its ok to remove');
            }
          }
        });
      }

      console.log('after');
      console.log('dice1: (value) ' + this.dice1.value);
      console.log('dice1: (used) ' + this.dice1.used);
      console.log('dice2: (value) ' + this.dice2.value);
      console.log('dice2: (used) ' + this.dice2.used);
      this.checkWhiteBeatsIsEmpty();

      console.log('this.boardlocation ', this.boardlocation);
      console.log('this.beatsCheckers ', this.beatsCheckers);
    }
  }

  // עפ קוביות- מיקום בבית של הלבנים
  getBoardLocationByDiceValue(diceValue: number) {
    switch (diceValue) {
      case 1:
        return 24;
      case 2:
        return 23;
      case 3:
        return 22;
      case 4:
        return 21;
      case 5:
        return 20;
      case 6:
        return 19;
      default:
        return null;
    }
  }

  //check if the i-colore is like the current player
  checkColorBeatChoosenIsBlack(i: any) {
    let a;
    if (this.currentPlayer == 'black') {
      this.beatsCheckers[1].elements.map((b: any) => {
        console.log(b);
        if (i == b) {
          console.log('black + ', i);
          a = true;
        }
      });
    } else {
      console.log('not ok to remove ');
      a = false;
    }
    return a;
  }

  checkColorBeatChoosenIsWhite(i: any) {
    let a;
    if (this.currentPlayer == 'white') {
      this.beatsCheckers[0].elements.map((b: any) => {
        if (i == b) {
          console.log('white + ', i);
          a = true;
        }
      });
    } else {
      console.log('not ok to remove ');
      a = false;
    }
    return a;
  }

  //להוריד ממהערך של האכילות-שחור /לבדוק אם המיקום על הלוח זמין או תפוס
  moveBlackBeatElement(i: any) {
    console.log('moveBlackBeatElement start ');

    const numDiceTemp = this.getDiceNum();
    console.log('this.currentDice ', this.currentDice);
    console.log('numDiceTemp ', numDiceTemp);
    if (numDiceTemp != 0) {
      console.log('a');
      let c = this.checkColorBeatChoosenIsBlack(i);
      console.log('c', c);
      console.log('b');

      console.log('i:', i);
      if (c == true && this.currentPlayer == 'black') {
        console.log('true ok ');
        const position = this.getBoardLocationByDiceValue(numDiceTemp);
        console.log('position: ', position);

        this.boardlocation.map((b: any) => {
          if (b.id == position) {
            console.log('rrrrrrrr');
            if (b.elements.length == 0) {
              console.log('empty triangle , b.id', b.id);

              this.boardlocation[b.id - 1].elements.push(i);
              this.boardlocation[b.id - 1].color = 'black';
              this.removeFromBeatsArray(i);
              this.changeUsedDice();
            } else if (b.elements.length >= 1 && b.color == 'black') {
              console.log('with black element , b.id', b.id);
              this.boardlocation[b.id - 1].elements.push(i);
              this.removeFromBeatsArray(i);
              this.changeUsedDice();
            } else if (b.elements.length == 1 && b.color == 'white') {
              console.log('one white element , b.id', b.id);
              let index;
              let a;

              this.boardlocation[b.id - 1].elements.map((t: any) => {
                a = t;
                console.log('a', a);
                index = this.boardlocation[b.id - 1].elements.indexOf(a);
                console.log('index', index);
              });
              this.boardlocation[b.id - 1].elements.splice(index, 1);
              this.boardlocation[b.id - 1].color = 'black';
              this.boardlocation[b.id - 1].elements.push(i);

              this.removeFromBeatsArray(i);
              this.beatsCheckers[0].elements.push(a);
              this.changeUsedDice();
            } else if (b.elements.length > 1 && b.color == 'white') {
              console.log('place is not empty ' + b.id);
              console.log('numdiceTemp', numDiceTemp);
              this.checkBlackBeatsIsEmpty();

              if (
                this.dice1.used == true &&
                this.ifDouble == false &&
                this.isEmptyBlack == false
              ) {
                console.log('k');
                const w = this.checkBoardLocationIsValidForBlack(position!);

                if (w == false) {
                  this.dice2.used = true;
                }
                console.log('beat arr is not empty and canot move beat');
              }
              console.log('xxx');

              if (b.id == position) {
                if (this.dice2.used != true) {
                  this.currentDice = 2;
                  //maybe add changeuseddice here
                  this.getFocuseOnDice();
                  console.log('a');
                } else {
                  this.dice1.used = true;
                  this.currentDice = 0;
                  this.getFocuseOnDice();
                  this.getPlayerForCurrentTurn();
                  this.getValidToDiceBtn();
                  console.log('b');
                }
              }
            } else {
              console.log('its ok to remove');
            }
          }
        });
      }

      console.log('after');
      console.log('dice1: (value) ' + this.dice1.value);
      console.log('dice1: (used) ' + this.dice1.used);
      console.log('dice2: (value) ' + this.dice2.value);
      console.log('dice2: (used) ' + this.dice2.used);
      this.checkBlackBeatsIsEmpty();

      console.log('this.boardlocation ', this.boardlocation);
      console.log('this.beatsCheckers ', this.beatsCheckers);
    }
  }

  //הורדה ממערך האכילות עצמו
  removeFromBeatsArray(i: any) {
    let index;
    this.beatsCheckers.map((c: any) => {
      index = c.elements.indexOf(i);

      if (index !== -1) {
        console.log('index', index);

        c.elements.splice(index, 1);
      }
    });
  }

  // מחזיר בוליאני -בדיקה האם כל השחקנים הלבנים בבית
  checkWhiteReadyToWin() {
    var win = 0;
    this.boardlocation.map((c: any) => {
      if (c.id >= 19 && c.id <= 24 && c.color == 'white') {
        console.log('c.elements.length: ' + c.elements.length);
        win = win + c.elements.length;
        console.log('win number white: ' + win);
      }
    });
    console.log('allllll win number white: ' + win);

    if (win == 15) {
      console.log('true');
      this.tryToWinWhite = true;
    } else {
      if (this.WhiteWinCheckers.length > 0) {
        win = win + this.WhiteWinCheckers.length;
        console.log('win list length', win, this.WhiteWinCheckers.length);
        this.tryToWinWhite = true;
        console.log('tryToWinWhite: true');
      } else {
        console.log('tryToWinWhite: false');
        this.tryToWinWhite = false;
      }
    }
  }

  //הוצאה מהבית- הוספה לליסט נצחון -לבנים
  addToWhiteWinCheckers(i: any, location: any) {
    console.log('dddddddddddddddddddd');
    const index = this.boardlocation[location - 1].elements.indexOf(i);
    console.log(
      'BEFOR this.boardlocation[location-1].elements ',
      this.boardlocation[location - 1].elements
    );

    this.boardlocation[location - 1].elements.splice(index, 1);
    console.log(
      'AFTER this.boardlocation[location-1].elements ',
      this.boardlocation[location - 1].elements
    );
    this.WhiteWinCheckers.push(i);
    console.log(' this.WhiteWinCheckers ', this.WhiteWinCheckers);
  }

  //תזוזה שמאלה- שחקנים לבנים
  moveElementLeft(i: any) {
    //white
    console.log(
      '______________________________________________________________________________________'
    );

    const numDiceTemp = this.getDiceNum();
    if (numDiceTemp != 0 && this.currentPlayer == 'white') {
      console.log('this.currentDice ', this.currentDice);
      console.log('numDiceTemp ', numDiceTemp);
      console.log('new moveElement *** LEFT ********************************');
      let location = -1;
      let colorTemp = '';
      console.log('i ', i);

      this.checkWhiteBeatsIsEmpty();

      if (this.isEmptyWhite == true) {
        this.checkWhiteReadyToWin();

        console.log('beats WHITE empty : *YES* !!');

        this.boardlocation.forEach((e: any) => {
          const index = e.elements.indexOf(i); // Find the index of i in e.element

          if (index !== -1) {
            location = e.id;

            console.log('location : ' + location);
            console.log('n = ', location + numDiceTemp);

            colorTemp = e.color;

            this.boardlocation.forEach((f: any) => {
              if (f.id == location + numDiceTemp) {
                console.log('f.id = ', f.id);
                console.log('color f.id = ', f.color);

                if (f.color == 'black' && f.elements.length > 1) {
                  console.log(' not ok');

                  //maybe remove
                  if (this.tryToWinWhite) {
                    console.log('///////');
                    console.log('this.tryToWinWhite:', this.tryToWinWhite);
                  }
                } else {
                  e.elements.splice(index, 1);
                  console.log('  ok');

                  this.changeUsedDice();
                }
              }
            });

            // Remove one element at the index
            if (e.elements.length == 0) {
              e.color = '';
            }
          }
        });

        if (location >= 19 && location <= 24 && this.tryToWinWhite == true) {
          console.log('bbb');

          if (location + numDiceTemp > 24) {
            console.log('tryy start');
            console.log('location', location);
            console.log('location+numDiceTemp', location + numDiceTemp);

            //check this 
            //מוציא מארבע אם יוצא שש בקוביות והשש עדין מלא
            if (location + numDiceTemp!=25){
              console.log("not compare to 25!!", location + numDiceTemp)
            }

            var lowId = 25;
            console.log('lowId', lowId);

            this.boardlocation.map((e: any) => {
              if (e.id >= 19 && e.id <= 24) {
                if (e.id==location && e.elements.length != 0 && e.color == 'white') {
                  if (lowId > e.id) {
                    lowId = e.id;
                  }
                }
              }
            });

            console.log('lowId', lowId);
            if (lowId >= location) {
              this.addToWhiteWinCheckers(i, location);
              console.log("pause here for check");

              //maybe we should change this
              
              this.changeUsedDice();
              console.log("1")
             
              // this.getDiceNum();
              // console.log("2");

            }
          }
        }

        if (location != -1) {
          this.boardlocation.map((n: any) => {
            if (n.id == location + numDiceTemp) {
              if (n.elements.length == 0) {
                // if the triangle empty
                n.color = colorTemp;
                n.elements.push(i);
              } else if (n.elements.length == 1) {
                // if the triangle exist checker
                n.elements.map((r: any) => {
                  //take the element that was in the triangle before
                  //maybe change y/x
                  this.x = r;
                  console.log('x: ', this.x);
                });

                if (n.color != colorTemp) {
                  //check the color of the element that was in the triangle before
                  n.color = 'white';

                  this.beatsCheckers.map((t: any) => {
                    if (t.color == n.color) {
                      this.beatsCheckers[1].elements.push(this.x);
                      console.log(' befor n.elements: ', n.elements);
                      n.elements.splice(0, 1);
                      console.log(' after n.elements: ', n.elements);
                      n.elements.push(i);
                      console.log(' after n.elements: ', n.elements);
                    }
                  });
                } else {
                  n.elements.push(i);
                }
              } else if (n.elements.length > 1 && n.color == colorTemp) {
                console.log('wwwwwwwwwwwwwwwwwwwwwwwww');
                n.elements.push(i);
              }
            } else if (
              this.tryToWinWhite == true &&
              n.elements.length >= 1 &&
              n.color == colorTemp &&
              location + numDiceTemp == 25
            ) {
              this.tempBoolWhite = true;
            }
          });

          //CHECK MAYBE REMOVE THIS
          // if (this.tempBoolWhite == true) {
          //   console.log('befor');
          //   console.log('this.tempBoolWhite', this.tempBoolWhite);
          //   console.log(' this.tryToWinWhite', this.tryToWinWhite);

          //   this.addToWhiteWinCheckers(i, location);

          //   this.tempBoolWhite = false;
          //   console.log('after');
          //   console.log('this.tempBoolWhite', this.tempBoolWhite);
          //   this.tryToWinWhite = false;
          //   console.log(' this.tryToWinWhite', this.tryToWinWhite);
          // }
        }
      } else {
        //if the beats array is not empty move beats elements befor you continue
        console.log(
          ' llllllllllllllllllllllllllllllllllllllllllllllllllllllll'
        );
        console.log(' beats WHITE empty : *NO*  !!');
      }

      ///see if its work
      console.log('after');
      console.log(this.boardlocation);

      console.log('WHITE CHECKER: move left done!');
      console.log('after : beatsCheckers');
      console.log(this.beatsCheckers);
      this.tryToWinWhite = false;

      this.getValidToDiceBtn();

      /////
      console.log("this.WhiteWinCheckers");
      console.log(this.WhiteWinCheckers);

      if (this.WhiteWinCheckers.length == 15) {
        alert('WHITE CHECKER WIN!!!!');
      }
    }
  }

  // findBoardIndex(i: any) {
  //   let index;
  //   let nn;
  //   this.boardlocation.forEach((e: any) => {
  //     index = e.elements.indexOf(i);

  //     if (index !== -1)
  //     {
  //       nn = e.id;
  //     }
  //   });
  //   // return index;
  //   return nn;
  // }

  //תזוזה ימינה- שחקנים שחורים

  moveElementRight(i: any) {
    //black
    console.log(
      '______________________________________________________________________________________'
    );

    const numDiceTemp = this.getDiceNum();
    if (numDiceTemp != 0 && this.currentPlayer == 'black') {
      console.log('this.currentDice ', this.currentDice);
      console.log('numDiceTemp ', numDiceTemp);

      console.log('new moveElement *** RIGHT ********************************');
      let location = -1;
      let colorTemp = '';
      console.log('i ', i);

      this.checkBlackBeatsIsEmpty();

      if (this.isEmptyBlack == true) {
        this.checkBlackReadyToWin();

        console.log(' beats BLACK empty : *YES* !!');

        this.boardlocation.forEach((e: any) => {
          const index = e.elements.indexOf(i); // Find the index of i in e.c

          if (index !== -1) {
            location = e.id;

            console.log('location : ' + location);
            console.log('n = ', location - numDiceTemp);

            colorTemp = e.color;

            this.boardlocation.forEach((f: any) => {
              if (f.id == location - numDiceTemp) {
                console.log('f.id = ', f.id);
                console.log('color f.id = ', f.color);

                if (f.color == 'white' && f.elements.length > 1) {
                  console.log(' not ok');

                  //maybe remove
                  if (this.tryToWinBlack) {
                    console.log('///////');
                    console.log('this.tryToWinBlack:', this.tryToWinBlack);
                  }
                } else {
                  e.elements.splice(index, 1);
                  console.log('  ok');

                  this.changeUsedDice();
                }
              }
            });

            // Remove one element at the index
            if (e.elements.length == 0) {
              e.color = '';
            }
          }
        });
        if (location >= 1 && location <= 6 && this.tryToWinBlack == true) {
          console.log('bbb');

          if (location - numDiceTemp < 0) {
            console.log('tryy start');
            console.log('location', location);
            console.log('location+numDiceTemp', location - numDiceTemp);
            var maxId = 0;
            //var colorT = '';

            this.boardlocation.map((e: any) => {
              if (e.id >= 1 && e.id <= 6) {
                if (e.elements.length != 0 && e.color != 'white') {
                  maxId = e.id;
                }
              }
            });

            console.log('maxId', maxId);
            if (maxId <= location) {
              this.addToBlackWinCheckers(i, location);
              console.log('black');
            }
          }
        }

        if (location != -1) {
          this.boardlocation.map((n: any) => {
            if (n.id == location - numDiceTemp) {
              if (n.elements.length == 0) {
                n.color = colorTemp;
                n.elements.push(i);
              } else if (n.elements.length == 1) {
                //maybe change y/x
                n.elements.map((r: any) => {
                  this.y = r;
                  console.log('y: ', this.y);
                });

                if (n.color != colorTemp) {
                  n.color = 'black';

                  this.beatsCheckers.map((t: any) => {
                    if (t.color == n.color) {
                      this.beatsCheckers[0].elements.push(this.y);

                      console.log(' befor n.elements: ', n.elements);
                      n.elements.splice(0, 1);
                      console.log(' after n.elements: ', n.elements);
                      n.elements.push(i);
                      console.log(' after n.elements: ', n.elements);
                    }
                  });
                } else {
                  n.elements.push(i);
                }
              } else if (n.elements.length > 1 && n.color == colorTemp) {
                console.log('wwwwwwwwwwwwwwwwwwwwwwwww');
                n.elements.push(i);
              }
            } else if (
              this.tryToWinBlack == true &&
              n.elements.length >= 1 &&
              n.color == colorTemp &&
              location - numDiceTemp == 0
            ) {
              console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
              console.log('befor');
              // console.log('this.tempBool', this.tempBool);
              console.log(' this.tryToWinBlack', this.tryToWinBlack);

              this.addToBlackWinCheckers(i, location);

              console.log('after');

              this.tryToWinBlack = false;
              console.log(' this.tryToWinBlack', this.tryToWinBlack);
            }
          });
        }
      } else {
        console.log(
          ' llllllllllllllllllllllllllllllllllllllllllllllllllllllll'
        );
        console.log(' beats BLACK empty : *NO*  !!');
      }
      ///see if its work
      console.log('after');
      console.log(this.boardlocation);

      console.log('BLACK CHECKER: move right done!');
      console.log('after : beatsCheckers');
      console.log(this.beatsCheckers);

      //maybe add
      // this.tryToWinBlack = false;
      this.getValidToDiceBtn();

      if (this.BlackWinCheckers.length == 15) {
        alert('BLACK CHECKER WIN!!!!');
      }
    }
  }

  addToBlackWinCheckers(i: any, location: any) {
    console.log('dddddddddddddddddddd');
    const index = this.boardlocation[location - 1].elements.indexOf(i);
    console.log(
      'BEFOR this.boardlocation[location-1].elements ',
      this.boardlocation[location - 1].elements
    );

    this.boardlocation[location - 1].elements.splice(index, 1);
    console.log(
      'AFTER this.boardlocation[location-1].elements ',
      this.boardlocation[location - 1].elements
    );
    this.BlackWinCheckers.push(i);
    console.log(' this.BlackWinCheckers ', this.BlackWinCheckers);
  }

  // מחזיר בוליאני - בדיקה האם כל השחקנים השחורים בבית
  checkBlackReadyToWin() {
    var win = 0;
    this.boardlocation.map((c: any) => {
      if (c.id >= 1 && c.id <= 6 && c.color == 'black') {
        console.log('c.elements.length: ' + c.elements.length);
        win = win + c.elements.length;
        console.log('win number black: ' + win);
      }
    });
    console.log('allllll win number black: ' + win);

    if (win == 15) {
      console.log('true');
      this.tryToWinBlack = true;
    } else {
      if (this.BlackWinCheckers.length > 0) {
        win = win + this.BlackWinCheckers.length;
        console.log('win list length', win, this.BlackWinCheckers.length);
        this.tryToWinBlack = true;
        console.log('true');
      } else {
        console.log('false');
        this.tryToWinBlack = false;
      }
    }
  }
}
