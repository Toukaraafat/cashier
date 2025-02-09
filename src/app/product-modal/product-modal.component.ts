import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-modal',
  imports: [],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
  @Input() item: any;
  product: any;
  selectedProduct: any;
  bootstrap: any; // Import Bootstrap JS (needed for modal)

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

  }
}