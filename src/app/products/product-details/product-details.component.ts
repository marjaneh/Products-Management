import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('addProductModal') addProductModal: any;
  product: Product

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    // const productId = parseInt(this.route.snapshot.paramMap.get('id'));
    const productId = parseInt(this.route.snapshot.params['id']);
    this.product = this.productService.getProductById(productId);

    // debugger
  }
  openModal(): void {
    this.addProductModal.show();
  }

}