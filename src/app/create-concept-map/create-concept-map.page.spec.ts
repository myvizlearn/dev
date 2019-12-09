import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConceptMapPage } from './create-concept-map.page';

describe('CreateConceptMapPage', () => {
  let component: CreateConceptMapPage;
  let fixture: ComponentFixture<CreateConceptMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConceptMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConceptMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
