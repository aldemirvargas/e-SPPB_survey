import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDevicesComponent } from './electronic-devices.component';

describe('ElectronicDevicesComponent', () => {
  let component: ElectronicDevicesComponent;
  let fixture: ComponentFixture<ElectronicDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
