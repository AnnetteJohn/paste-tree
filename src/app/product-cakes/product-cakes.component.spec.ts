import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCakesComponent } from './product-cakes.component';

describe('ProductCakesComponent', () => {
  let component: ProductCakesComponent;
  let fixture: ComponentFixture<ProductCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
