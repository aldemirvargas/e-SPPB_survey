import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-not',
  templateUrl: './yes-not.component.html',
  styleUrls: ['./yes-not.component.css']
})
export class YesNotComponent implements OnInit {
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
