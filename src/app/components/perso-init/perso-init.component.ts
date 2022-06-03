import { Component, HostListener, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { SurveyService } from '../../services/survey.service';
import * as dayjs from 'dayjs';
import { Medical } from 'src/app/models/Medical';
import { __classPrivateFieldGet } from 'tslib';
import { DataSurveyService } from '../../services/data-survey.service';

@Component({
  selector: 'app-perso-init',
  templateUrl: './perso-init.component.html',
  styleUrls: ['./perso-init.component.css'],
})
export class PersoInitComponent implements OnInit {


  public currentDate: string = dayjs().format('YYYY-MM-DD');
  public evaluators: Medical[] = [];
  public searching: boolean = false;
  public currentEvaluator: Medical = {
    id: null,
    name: null,
    date_birth: null,
    email: null,
    phone_number: null,
    id_number: null,

  };
  public participant: Person = {
    id: null,
    name: '',
    lastName: '',
    address: '',
    subRegion: '',
    municipality: '',
    placeOfResident: '',
    isUrban: false,
    phone: '',
    celPhone: '',
  };

  public companion: Person = {
    id: null,
    name: '',
    lastName: '',
    address: '',
    subRegion: '',
    municipality: '',
    placeOfResident: '',
    isUrban: false,
    phone: '',
    celPhone: '',
  };

  constructor(
    private surveyService: SurveyService,
    public dataSurveyService: DataSurveyService
    ) {}

  ngOnInit(): void {
    this.searching = false;
  }

  @HostListener('window:keyup', ['$event'])
  searchEvaluator(event: Event) {
    let value = event.target['value'];
    if (value.length > 2) {
      this.searching = true;
      this.surveyService.getMedicalById(value).subscribe({
        next: (response) => {
          console.log(response);
          this.evaluators = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.evaluators = [];
    }
  }
  setEvaluator(evaluator: Medical) {
    this.currentEvaluator = evaluator;
    this.evaluators = [];
    this.searching = false;
    
    this.dataSurveyService.surveyFinal.medical = evaluator;
    this.dataSurveyService.surveyFinal.patient = this.participant;
    this.dataSurveyService.surveyFinal.companion = this.companion;
    this.dataSurveyService.surveyFinal.date = this.currentDate;

  }
}
