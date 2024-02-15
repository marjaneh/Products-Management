import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @ViewChild('productModal') productModal: any;
  // @Input() mode: 'add' | 'update';
  @Input() product: Product;

  ngOnInit() {
  }

  closeModal() {
    this.productModal.style.display = 'none';

  }
  // openModal() {
  //   this.productModal.nativeElement.show();
  // }


}
