import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyOrSomeComponent } from './many-or-some.component';

describe('ManyOrSomeComponent', () => {
  let component: ManyOrSomeComponent;
  let fixture: ComponentFixture<ManyOrSomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyOrSomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyOrSomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
