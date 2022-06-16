import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-range-zero-one',
  templateUrl: './range-zero-one.component.html',
  styleUrls: ['./range-zero-one.component.css'],
})
export class RangeZeroOneComponent implements OnInit {
  
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
