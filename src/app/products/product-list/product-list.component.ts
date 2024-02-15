import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
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
    .pipe(
      catchError(error => {  //handling error using operators/pipeline
        console.error('Error:', error);
        return [];
      })
    )
    .subscribe(result => {
      this.products$ = result
    });
  }

  onSearchProduct(searchItemTitle): void {
    this.productService.getProductsByTitle(searchItemTitle)
    .pipe(
      catchError(error => { 
        console.error('Error:', error);
        return [];
      })
    )
    .subscribe(result => {
      this.products$ = result
    });
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
  }
}
