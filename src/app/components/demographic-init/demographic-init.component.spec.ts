import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicInitComponent } from './demographic-init.component';

describe('DemographicInitComponent', () => {
  let component: DemographicInitComponent;
  let fixture: ComponentFixture<DemographicInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemographicInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
