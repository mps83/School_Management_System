import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectorPage } from './account-selector.page';

describe('AccountSelectorPage', () => {
  let component: AccountSelectorPage;
  let fixture: ComponentFixture<AccountSelectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSelectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
