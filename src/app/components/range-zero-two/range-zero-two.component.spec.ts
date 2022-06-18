import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeZeroTwoComponent } from './range-zero-two.component';

describe('RangeZeroTwoComponent', () => {
  let component: RangeZeroTwoComponent;
  let fixture: ComponentFixture<RangeZeroTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeZeroTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeZeroTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
