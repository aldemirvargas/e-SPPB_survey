import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographic-init',
  templateUrl: './demographic-init.component.html',
  styleUrls: ['./demographic-init.component.css'],
})
export class DemographicInitComponent implements OnInit {
  public demographicInit: any = {
    dateOfBirth: null,
    age: null,
    sex: null,
    principalOcupation: null,
    secondaryOcupation: null,
    eps: null,
    socialSafety: null,
    civilStatus: null,
    cohabitants: null,
    ageOfScholarity: null,
    maxLevelScholary: null,
    isDependentOfFamily: null,
    whereIncome: null,
    whichIncome: null,
    strat: null,
  };
  constructor() {}

  ngOnInit(): void {}

  setAnswer(key: string, answer: any) {
    this.demographicInit[key] = answer;
  }

}
