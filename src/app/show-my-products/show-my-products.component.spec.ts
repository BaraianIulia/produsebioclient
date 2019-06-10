import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyProductsComponent } from './show-my-products.component';

describe('ShowMyProductsComponent', () => {
  let component: ShowMyProductsComponent;
  let fixture: ComponentFixture<ShowMyProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
