import { TestBed } from '@angular/core/testing';

import { DataSurveyService } from './data-survey.service';

describe('DataSurveyService', () => {
  let service: DataSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
