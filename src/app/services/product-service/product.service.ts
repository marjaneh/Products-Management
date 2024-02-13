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

  getProductById(productId: number) {
    return this.products.find(product => product.id === productId)
  } 

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  removeProduct(productId: number) {
    return this.products.filter(item => item.id !== productId);
  }
}
