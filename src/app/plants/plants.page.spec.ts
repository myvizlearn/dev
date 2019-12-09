import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsPage } from './plants.page';

describe('PlantsPage', () => {
  let component: PlantsPage;
  let fixture: ComponentFixture<PlantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
