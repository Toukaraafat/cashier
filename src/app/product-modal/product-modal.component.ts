import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-modal',
  imports: [],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent implements OnInit {
  @Input() item: any;
  product: any;
  selectedProduct: any;
  bootstrap: any; // Import Bootstrap JS (needed for modal)

  // constructor(private productService: ProductsService) { }
  @Input() src: any;
  constructor(public activeModal: NgbActiveModal,private productService: ProductsService) { }


  ngOnInit(): void {
    this.productService.product$.subscribe(product => {
      this.selectedProduct = product;
      console.log(this.selectedProduct);
    });
  }
}