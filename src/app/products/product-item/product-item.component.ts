import { Component, Input, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
// import { Router } from '@angular/router';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  // @Input() product$: Observable<Product>;
  @Input() product: Product;

  // product:Product;

  // ngOnInit() {
  //   this.product$.subscribe(product => {
  //     this.product = product;
  //   })
  // }

  // constructor(private router: Router) { }

  // showDetails(productId: number) {
  //   // console.log(`Id: ${productId} clicked`)
  //   debugger
  //   this.router.navigate(['/product', productId]);
  // }
}
