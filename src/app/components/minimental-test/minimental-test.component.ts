import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-minimental-test',
  templateUrl: './minimental-test.component.html',
  styleUrls: ['./minimental-test.component.css'],
})
export class MinimentalTestComponent implements OnInit, OnChanges {
  public minimentalTestTotalPoints: number = 0;

  public MinimentalTestForm: any = {
    city: null,
    closeEyesOrder: null,
    country: null,
    day: null,
    dayOfWeek: null,
    department: null,
    district: null,
    drawing: null,
    hourOfDay: null,
    masterTwoObjects: null,
    memoryNames: null,
    month: null,
    monthOfYear: null,
    paperFold: null,
    pevocationWords: null,
    place: null,
    repeat: null,
    subtract: null,
    writeSentence: null,
    year: null,
  };
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}
  
  recalculateTotalPoints(recalculate: boolean) {
    if (recalculate) {
      this.minimentalTestTotalPoints = 0;
      for (const key in this.MinimentalTestForm) {
        if (this.MinimentalTestForm[key] !== null) {
          this.minimentalTestTotalPoints += this.MinimentalTestForm[key];
        }
      }
    }
  }
}
