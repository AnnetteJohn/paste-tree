import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCupcakesComponent } from './product-details-cupcakes.component';

describe('ProductDetailsCupcakesComponent', () => {
  let component: ProductDetailsCupcakesComponent;
  let fixture: ComponentFixture<ProductDetailsCupcakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsCupcakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsCupcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
