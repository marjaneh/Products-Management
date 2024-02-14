import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products$: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(result => this.products$ = result); 
  }

  onSearchProduct(searchItemTitle): void {
    this.productService.getProductsByTitle(searchItemTitle)
    .subscribe(result => this.products$ = result);
    // console.log(`onSearchProduct ${this.products$}`);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
  }
}
