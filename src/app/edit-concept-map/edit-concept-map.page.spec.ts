import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConceptMapPage } from './edit-concept-map.page';

describe('EditConceptMapPage', () => {
  let component: EditConceptMapPage;
  let fixture: ComponentFixture<EditConceptMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConceptMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConceptMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
