import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Product } from '../../model/product.model.js'
import { products } from '../../data/product.data.js'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products: Product[] = products
  private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(products);

  constructor() {
    //Initial value for the product$ observable is set to static product array
    // this.products$.next(products)
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  getProductsByTitle(searchItemTitle: string): Observable<any[]> {
    if (!searchItemTitle) {
      return this.products$.asObservable();
    }
    const filteredProducts = this.products$.value.filter(item => item.title.toLowerCase().includes(searchItemTitle.toLowerCase()));
    return of(filteredProducts); //wrapper product array in an observable
  }

  getProductById(productId: number) {
    const product = this.products$.value.find(product => product.id === productId)
    return of(product);
  }

  addProduct(newProduct: Product): void {
    const products = [...this.products$.value, newProduct];
    this.products$.next(products);
  }

  updateProduct(updatedProduct: Product): void {
    const updatedProducts = this.products$.value
      .map((product) => product.id === updatedProduct.id ? { ...updatedProduct } : product)
    this.products$.next(updatedProducts);
  }

  deleteProduct(productId: number): void {
    const products = this.products$.value.filter((product) => product.id !== productId);
    this.products$.next(products);
  }
}
