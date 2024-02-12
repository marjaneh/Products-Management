import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../product-service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    // debugger
    const productId = parseInt(this.route.snapshot.paramMap.get('id'));
    // debugger
    this.product = this.productService.getProducts().find(product => product.id === productId)
  }

}
