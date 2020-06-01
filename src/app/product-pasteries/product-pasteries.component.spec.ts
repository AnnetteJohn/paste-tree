import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPasteriesComponent } from './product-pasteries.component';

describe('ProductPasteriesComponent', () => {
  let component: ProductPasteriesComponent;
  let fixture: ComponentFixture<ProductPasteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPasteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPasteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
