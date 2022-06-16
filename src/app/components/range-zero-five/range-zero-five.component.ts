import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-zero-five',
  templateUrl: './range-zero-five.component.html',
  styleUrls: ['./range-zero-five.component.css']
})
export class RangeZeroFiveComponent implements OnInit {
  @Input() public name: string;
  @Input() public id: string;

  @Output() public value = new EventEmitter<number>();
  @Output() public valueChange = new EventEmitter<boolean>();


  constructor() {}

  ngOnInit(): void {}

  setAnswer(rating: number){
    this.value.emit(rating);
    this.valueChange.emit(true);
  }

}
