import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNotComponent } from './yes-not.component';

describe('YesNotComponent', () => {
  let component: YesNotComponent;
  let fixture: ComponentFixture<YesNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
