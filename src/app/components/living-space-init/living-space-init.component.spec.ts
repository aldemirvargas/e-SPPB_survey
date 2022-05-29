import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingSpaceInitComponent } from './living-space-init.component';

describe('LivingSpaceInitComponent', () => {
  let component: LivingSpaceInitComponent;
  let fixture: ComponentFixture<LivingSpaceInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingSpaceInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingSpaceInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
