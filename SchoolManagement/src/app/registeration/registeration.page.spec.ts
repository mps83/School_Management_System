import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationPage } from './registeration.page';

describe('RegisterationPage', () => {
  let component: RegisterationPage;
  let fixture: ComponentFixture<RegisterationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
