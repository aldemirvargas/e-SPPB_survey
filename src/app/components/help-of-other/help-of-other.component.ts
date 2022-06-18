import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-help-of-other',
  templateUrl: './help-of-other.component.html',
  styleUrls: ['./help-of-other.component.css']
})
export class HelpOfOtherComponent implements OnInit {

  @Input() public name: string;
  @Input() public id: string;

  @Output() public value = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  setAnswer(answer: string){
    this.value.emit(answer);
  }
}
