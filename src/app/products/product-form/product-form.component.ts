import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  productForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit () {
    this.productForm = this.fb.group ({
      title: [this.product ? this.product.title : '', Validators.required],
      description: [this.product ? this.product.description: '', Validators.required],
      likes: [this.product ? this.product.likes: '', [Validators.required, Validators.min(0)]],
      category: [this.product ? this.product.category: '']
    });
  }
  onSubmit(): void {}
}
