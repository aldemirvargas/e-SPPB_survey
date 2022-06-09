import { Component, OnInit } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {
public habits: any = {
  q1: null,
  q2: null,
  q3: null,
  q4: null,
  q5: null,
  q6: null
}
  constructor(
    public dataSurveyService: DataSurveyService
  ) { }

  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.habits = this.habits;
  }
}
