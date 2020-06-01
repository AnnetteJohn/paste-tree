import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsDonutsComponent } from './product-details-donuts.component';

describe('ProductDetailsDonutsComponent', () => {
  let component: ProductDetailsDonutsComponent;
  let fixture: ComponentFixture<ProductDetailsDonutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsDonutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
