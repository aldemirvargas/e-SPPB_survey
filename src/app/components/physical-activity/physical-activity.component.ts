import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/Activity';
import { DataSurveyService } from '../../services/data-survey.service';

@Component({
  selector: 'app-physical-activity',
  templateUrl: './physical-activity.component.html',
  styleUrls: ['./physical-activity.component.css']
})
export class PhysicalActivityComponent implements OnInit {
  public activities: Activity[] = [];
public physicalActivity: any = {
  speed: null,
  walkingDays: null,
  walkingTime: null,
  activities: this.activities
}
  constructor(
    public dataSurveyService: DataSurveyService
  ) { }

  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.physicalActivity = this.physicalActivity;
  }
  setAnswer(key: string, value: number) {
    this.physicalActivity[key] = value;
  }
  setAnswerString(key: string, value: string) {
    this.physicalActivity[key] = value;
  }

}
