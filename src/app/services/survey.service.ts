import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medical } from '../models/Medical';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getMedicalById(id: number) {
    return this.http.get<Medical[]>(`http://localhost:8000/api/v1/medical/${id}`);
  }
}
