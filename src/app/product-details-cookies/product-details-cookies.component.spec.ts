import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCookiesComponent } from './product-details-cookies.component';

describe('ProductDetailsCookiesComponent', () => {
  let component: ProductDetailsCookiesComponent;
  let fixture: ComponentFixture<ProductDetailsCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
