import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupPage } from './card-group.page';

describe('CardGroupPage', () => {
  let component: CardGroupPage;
  let fixture: ComponentFixture<CardGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
