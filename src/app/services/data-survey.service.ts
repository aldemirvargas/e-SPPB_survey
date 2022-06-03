import { Injectable } from '@angular/core';
import { Survey } from '../models/Survey';
@Injectable({
  providedIn: 'root',
})

export class DataSurveyService {

  public surveyFinal: Survey = {
    medical: null,
    patient: null,
    companion: null,
    date: null,
  };

  constructor() {}


}
