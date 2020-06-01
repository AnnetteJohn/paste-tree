import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDonutsComponent } from './product-donuts.component';

describe('ProductDonutsComponent', () => {
  let component: ProductDonutsComponent;
  let fixture: ComponentFixture<ProductDonutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDonutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
