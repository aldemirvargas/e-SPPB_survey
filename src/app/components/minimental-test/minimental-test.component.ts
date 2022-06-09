import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';

@Component({
  selector: 'app-minimental-test',
  templateUrl: './minimental-test.component.html',
  styleUrls: ['./minimental-test.component.css'],
})
export class MinimentalTestComponent implements OnInit {
  //public minimentalTestTotalPoints: number = 0;

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
    finalScore: 0,
  };
  constructor(
public dataSurveyService: DataSurveyService
  ) {}


  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.minimentalTestForm = this.MinimentalTestForm;
  }
  
  recalculateTotalPoints(recalculate: boolean) {
    if (recalculate) {
      this.MinimentalTestForm.finalScore = 0;
      for (const key in this.MinimentalTestForm) {
        if (key != 'finalScore' && this.MinimentalTestForm[key] !== null ) {
          this.MinimentalTestForm.finalScore += this.MinimentalTestForm[key];
        }
      }
    }
  }
}
