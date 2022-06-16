import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepByWeekComponent } from './step-by-week.component';

describe('StepByWeekComponent', () => {
  let component: StepByWeekComponent;
  let fixture: ComponentFixture<StepByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepByWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
