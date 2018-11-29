import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSectionPage } from './parent-section.page';

describe('ParentSectionPage', () => {
  let component: ParentSectionPage;
  let fixture: ComponentFixture<ParentSectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
