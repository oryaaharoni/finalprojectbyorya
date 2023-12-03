import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent {

  @Input() myTop: string="";
  @Input() myLeft: string="";
  @Input() myColor: string="";
  @Input() myID: number=0;
  

  
}
