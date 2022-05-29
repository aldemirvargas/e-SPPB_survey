import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalPerformanceComponent } from './physical-performance.component';

describe('PhysicalPerformanceComponent', () => {
  let component: PhysicalPerformanceComponent;
  let fixture: ComponentFixture<PhysicalPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
