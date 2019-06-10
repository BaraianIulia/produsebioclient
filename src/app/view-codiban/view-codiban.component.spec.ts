import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCodIBANComponent } from './view-cod-ibandescriere.component';

describe('ViewCodIBANDescriereComponent', () => {
  let component: ViewCodIBANComponent;
  let fixture: ComponentFixture<ViewCodIBANComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCodIBANComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCodIBANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
