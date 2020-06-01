import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPieComponent } from './product-details-pie.component';

describe('ProductDetailsPieComponent', () => {
  let component: ProductDetailsPieComponent;
  let fixture: ComponentFixture<ProductDetailsPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
