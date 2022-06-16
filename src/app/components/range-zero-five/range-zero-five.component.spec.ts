import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeZeroFiveComponent } from './range-zero-five.component';

describe('RangeZeroFiveComponent', () => {
  let component: RangeZeroFiveComponent;
  let fixture: ComponentFixture<RangeZeroFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeZeroFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeZeroFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
