import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNotDoNotKnowComponent } from './yes-not-do-not-know.component';

describe('YesNotDoNotKnowComponent', () => {
  let component: YesNotDoNotKnowComponent;
  let fixture: ComponentFixture<YesNotDoNotKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNotDoNotKnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNotDoNotKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
