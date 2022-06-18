import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frecuency',
  templateUrl: './frecuency.component.html',
  styleUrls: ['./frecuency.component.css']
})
export class FrecuencyComponent implements OnInit {
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
