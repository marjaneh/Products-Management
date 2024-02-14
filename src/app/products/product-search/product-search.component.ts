import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';

  performSearch(): void {
    // console.log("Searching button clicked...")
    this.search.emit(this.searchQuery);
  }

  removeSearchQuery(): void {
    this.searchQuery = '';
    this.search.emit('');
  }
}
