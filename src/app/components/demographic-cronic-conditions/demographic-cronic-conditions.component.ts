import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographic-cronic-conditions',
  templateUrl: './demographic-cronic-conditions.component.html',
  styleUrls: ['./demographic-cronic-conditions.component.css'],
})
export class DemographicCronicConditionsComponent implements OnInit {

  public cronicConditions: any = {
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
    medicationNumber: null,
    medicationName: null,
    medicationDescription: null,
    medicationNumberNotPrescription: null,
    medicationNameNotPrescription: null,
    size: 1,
    weight: 0,
    imc: null,
    bloodpPpressure: null,

  };

  constructor() {}

  ngOnInit(): void {}
  setAnswer(key: string, value: string) {
    this.cronicConditions[key] = value;
  }

  updateIMC(){
    let sizeM = this.cronicConditions.size / 100;
    let imc = this.cronicConditions.weight / (sizeM * sizeM);
    this.cronicConditions.imc = imc;
  }
}
