import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentBuildComponent } from './enviroment-build.component';

describe('EnviromentBuildComponent', () => {
  let component: EnviromentBuildComponent;
  let fixture: ComponentFixture<EnviromentBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
