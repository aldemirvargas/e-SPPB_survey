import { Component, OnInit } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.css'],
})
export class AgreeComponent implements OnInit {
  constructor(
    public dataSurveyService: DataSurveyService,
    private surveyService: SurveyService
  ) {}

  ngOnInit(): void {
  }
  sendForm() {
    this.surveyService
      .sendSurvey(this.dataSurveyService.surveyFinal)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
