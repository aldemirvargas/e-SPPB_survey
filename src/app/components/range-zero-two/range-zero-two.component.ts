import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-zero-two',
  templateUrl: './range-zero-two.component.html',
  styleUrls: ['./range-zero-two.component.css']
})
export class RangeZeroTwoComponent implements OnInit {

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
