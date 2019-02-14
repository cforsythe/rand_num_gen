import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-number-gen',
  templateUrl: './number-gen.component.html',
  styleUrls: ['./number-gen.component.css']
})
export class NumberGenComponent implements OnInit {

  numberGenerated=false;
  generatedNumber: number;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  generateNumber(start: number, stop: number){
    this.messageService.clear()
    if(!start || !stop){
      if(!start){
        this.messageService.add("Please enter a start range")
      }
      if(!stop){
        this.messageService.add("Please enter a stop range")
      }
    }
    else{
      this.numberGenerated=true;
      let loops = Math.floor((Math.random() * 8) + 3)
      this.generatedNumber = this.getNumberInRange(start, stop)
    }
  }
  
  getNumberInRange(min: number, max: number){
    min = Math.ceil(min)
    max = Math.floor(max)
    let bottom = max - min + 1
    return Math.floor(Math.random() * bottom + min);
  }
}
