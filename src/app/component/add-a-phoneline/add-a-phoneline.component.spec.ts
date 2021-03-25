import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAPhonelineComponent } from './add-a-phoneline.component';

describe('AddAPhonelineComponent', () => {
  let component: AddAPhonelineComponent;
  let fixture: ComponentFixture<AddAPhonelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAPhonelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAPhonelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
