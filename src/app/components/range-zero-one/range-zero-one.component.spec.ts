import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeZeroOneComponent } from './range-zero-one.component';

describe('RangeZeroOneComponent', () => {
  let component: RangeZeroOneComponent;
  let fixture: ComponentFixture<RangeZeroOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeZeroOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeZeroOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
