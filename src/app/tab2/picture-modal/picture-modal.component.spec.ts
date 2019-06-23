import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureModalComponent } from './picture-modal.component';

describe('PictureModalComponent', () => {
  let component: PictureModalComponent;
  let fixture: ComponentFixture<PictureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
