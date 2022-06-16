import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-many-or-some',
  templateUrl: './many-or-some.component.html',
  styleUrls: ['./many-or-some.component.css']
})
export class ManyOrSomeComponent implements OnInit {

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
