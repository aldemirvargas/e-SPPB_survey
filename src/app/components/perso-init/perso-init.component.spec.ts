import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoInitComponent } from './perso-init.component';

describe('PersoInitComponent', () => {
  let component: PersoInitComponent;
  let fixture: ComponentFixture<PersoInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
