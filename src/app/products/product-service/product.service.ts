import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model.js'
import { products } from '../../data/product.data.js'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = products

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

  getProductsByTitle(searchItemTitle: string): any[] {
    if (!searchItemTitle) {
      return this.products;
    }
    return this.products.filter(item => item.title.toLowerCase().includes(searchItemTitle.toLowerCase()))
  }
}
