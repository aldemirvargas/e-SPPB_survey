import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOfOtherComponent } from './help-of-other.component';

describe('HelpOfOtherComponent', () => {
  let component: HelpOfOtherComponent;
  let fixture: ComponentFixture<HelpOfOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpOfOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpOfOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
