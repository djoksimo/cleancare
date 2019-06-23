import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistsComponent } from './dentists.component';

describe('DentistsComponent', () => {
  let component: DentistsComponent;
  let fixture: ComponentFixture<DentistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
