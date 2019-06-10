import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCodIbaneditComponent } from './profile-cod-ibanedit.component';

describe('ProfileCodIbaneditComponent', () => {
  let component: ProfileCodIbaneditComponent;
  let fixture: ComponentFixture<ProfileCodIbaneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCodIbaneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCodIbaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
