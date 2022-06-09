import { Component, OnInit } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';

@Component({
  selector: 'app-living-space-init',
  templateUrl: './living-space-init.component.html',
  styleUrls: ['./living-space-init.component.css']
})
export class LivingSpaceInitComponent implements OnInit {
public livingSpace: any = {
  q1: null,
  q2: null,
  q3: null,
  q4: null,
  q5: null,
  q6: null,
  q7: null,
  q8: null,
  q9: null,
  q10: null,
  q11: null,
  q12: null,
  q13: null,
  q14: null,
  q15: null,
  q16: null,
  q17: null,
  q18: null,
}
  constructor(
    public dataSurveyService: DataSurveyService
  ) { }

  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.livingSpace = this.livingSpace;
  }
}
