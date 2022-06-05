import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medical } from '../models/Medical';
import { ActivityDb } from '../models/ActivityDb';
import { Survey } from '../models/Survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getMedicalById(id: number) {
    return this.http.get<Medical[]>(`http://localhost:8000/api/v1/medical/${id}`);
  }

  getActivityByName(name: string) {
    return this.http.get<ActivityDb[]>(`http://localhost:8000/api/v1/activity/${name}`);
  }
  sendSurvey(survey: Survey) {
    return this.http.post<Survey>(`http://localhost:8000/api/v1/addSurvey`, survey);
  }
}
