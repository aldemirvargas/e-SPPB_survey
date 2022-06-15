import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medical } from '../models/Medical';
import { ActivityDb } from '../models/ActivityDb';
import { Survey } from '../models/Survey';
import { PatientDb } from '../models/PatientDb';
import { MedicalCenterDb } from '../models/MedicalCenterDb';
import {QuestionsDb} from '../models/QuestionsDb';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  getMedicalByDocument(document: number) {
    return this.http.get<Medical[]>(
      `http://localhost:8000/api/v1/medical/${document}`
    );
  }

  getActivityByName(name: string) {
    return this.http.get<ActivityDb[]>(
      `http://localhost:8000/api/v1/activity/${name}`
    );
  }
  getPatientByName(name: string) {
    return this.http.get<PatientDb[]>(
      `http://localhost:8000/api/v1/patient/${name}`,
      
    );
  }
  getMedicalCenterById(id: number) {
    return this.http.get<MedicalCenterDb>(
      `http://localhost:8000/api/v1/medicalCenterById/${id}`,
    );
  }
  sendSurvey(survey: Survey) {
    return this.http.post<any>(
      `http://localhost:8000/api/v1/addSurvey`,
      survey
    );
  }
  getAllQuestions() {
    return this.http.get<QuestionsDb[]>(
      `http://localhost:8000/api/v1/getAllQuestions`
    );
  }
}
