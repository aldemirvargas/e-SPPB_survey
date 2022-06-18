import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-not-do-not-know',
  templateUrl: './yes-not-do-not-know.component.html',
  styleUrls: ['./yes-not-do-not-know.component.css']
})
export class YesNotDoNotKnowComponent implements OnInit {
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
