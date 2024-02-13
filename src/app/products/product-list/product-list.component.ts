import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product-service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    // console.log(`ngOnInit ${this.products}`);
  }

  onSearchProduct(searchItemTitle): void {
    this.products = this.productService.getProductsByTitle(searchItemTitle)
    // console.log(`onSearchProduct ${this.products}`);
  }

  removeProduct(productId: number): void {
  this.products = this.productService.removeProduct(productId);
  }
}
