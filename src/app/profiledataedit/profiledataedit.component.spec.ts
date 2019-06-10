import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledataeditComponent } from './profiledataedit.component';

describe('ProfiledataeditComponent', () => {
  let component: ProfiledataeditComponent;
  let fixture: ComponentFixture<ProfiledataeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiledataeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledataeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
