import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCakesComponent } from './product-details-cakes.component';

describe('ProductDetailsCakesComponent', () => {
  let component: ProductDetailsCakesComponent;
  let fixture: ComponentFixture<ProductDetailsCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
