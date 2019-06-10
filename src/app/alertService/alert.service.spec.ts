import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let component: AlertService;
  let fixture: ComponentFixture<AlertService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
