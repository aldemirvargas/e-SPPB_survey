import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeZeroThreeComponent } from './range-zero-three.component';

describe('RangeZeroThreeComponent', () => {
  let component: RangeZeroThreeComponent;
  let fixture: ComponentFixture<RangeZeroThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeZeroThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeZeroThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
