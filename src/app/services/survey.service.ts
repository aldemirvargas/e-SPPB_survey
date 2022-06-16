import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medical } from '../models/Medical';
import { ActivityDb } from '../models/ActivityDb';
import { Survey } from '../models/Survey';
import { PatientDb } from '../models/PatientDb';
import { MedicalCenterDb } from '../models/MedicalCenterDb';
import {QuestionsDb} from '../models/QuestionsDb';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  getMedicalByDocument(document: number) {
    return this.http.get<Medical[]>(
      `${environment.apiUrl}/v1/medical/${document}`
    );
  }

  getActivityByName(name: string) {
    return this.http.get<ActivityDb[]>(
      `${environment.apiUrl}/v1/activity/${name}`
    );
  }
  getPatientByName(name: string) {
    return this.http.get<PatientDb[]>(
      `${environment.apiUrl}/v1/patient/${name}`,
      
    );
  }
  getMedicalCenterById(id: number) {
    return this.http.get<MedicalCenterDb>(
      `${environment.apiUrl}/v1/medicalCenterById/${id}`,
    );
  }
  sendSurvey(survey: Survey) {
    return this.http.post<any>(
      `${environment.apiUrl}/v1/addSurvey`,
      survey
    );
  }
  getAllQuestions() {
    return this.http.get<QuestionsDb[]>(
      `${environment.apiUrl}/v1/getAllQuestions`
    );
  }
}
