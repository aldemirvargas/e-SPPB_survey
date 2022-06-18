import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-by-week',
  templateUrl: './step-by-week.component.html',
  styleUrls: ['./step-by-week.component.css']
})
export class StepByWeekComponent implements OnInit {
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
