import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product;

  // constructor(private router: Router) { }

  // showDetails(productId: number) {
  //   // console.log(`Id: ${productId} clicked`)
  //   debugger
  //   this.router.navigate(['/product', productId]);
  // }
}
