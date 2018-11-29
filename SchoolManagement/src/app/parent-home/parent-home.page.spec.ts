import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHomePage } from './parent-home.page';

describe('ParentHomePage', () => {
  let component: ParentHomePage;
  let fixture: ComponentFixture<ParentHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
