import {Product} from './product.model';

import { Component, EventEmitter, Injectable} from '@angular/core';


@Injectable()
export class ProductServices
{

    products : Product[] =
  [
      new Product('T-shit','this is new t-shirt','imag1.jpg',800),  //object create

      new Product('Nike Shoes','this is new sports shoes','imag1.jpg',500)
  ];

    constructor()
    {

    }
  

    getProduct()
    {
        return this.products.slice();
    }


    

}
