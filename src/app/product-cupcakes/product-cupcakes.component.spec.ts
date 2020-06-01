import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCupcakesComponent } from './product-cupcakes.component';

describe('ProductCupcakesComponent', () => {
  let component: ProductCupcakesComponent;
  let fixture: ComponentFixture<ProductCupcakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCupcakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCupcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
