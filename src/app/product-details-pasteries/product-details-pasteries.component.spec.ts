import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPasteriesComponent } from './product-details-pasteries.component';

describe('ProductDetailsPasteriesComponent', () => {
  let component: ProductDetailsPasteriesComponent;
  let fixture: ComponentFixture<ProductDetailsPasteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsPasteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPasteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
