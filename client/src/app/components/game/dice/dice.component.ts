import { Component, Input, Output, EventEmitter } from '@angular/core';
import Dice from 'src/app/models/dice.model';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {

  @Input() diceTemp :Dice=new Dice();
  @Input() focused :boolean = false;

}
