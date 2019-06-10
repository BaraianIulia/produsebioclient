import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecardeditComponent } from './profilecardedit.component';

describe('ProfilecardeditComponent', () => {
  let component: ProfilecardeditComponent;
  let fixture: ComponentFixture<ProfilecardeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecardeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecardeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
