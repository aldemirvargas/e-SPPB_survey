import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimentalTestComponent } from './minimental-test.component';

describe('MinimentalTestComponent', () => {
  let component: MinimentalTestComponent;
  let fixture: ComponentFixture<MinimentalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimentalTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimentalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
