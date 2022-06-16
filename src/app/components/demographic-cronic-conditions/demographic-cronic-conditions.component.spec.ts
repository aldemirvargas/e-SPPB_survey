import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicCronicConditionsComponent } from './demographic-cronic-conditions.component';

describe('DemographicCronicConditionsComponent', () => {
  let component: DemographicCronicConditionsComponent;
  let fixture: ComponentFixture<DemographicCronicConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemographicCronicConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicCronicConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
