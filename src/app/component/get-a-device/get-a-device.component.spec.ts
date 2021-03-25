import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetADeviceComponent } from './get-a-device.component';

describe('GetADeviceComponent', () => {
  let component: GetADeviceComponent;
  let fixture: ComponentFixture<GetADeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetADeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetADeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
