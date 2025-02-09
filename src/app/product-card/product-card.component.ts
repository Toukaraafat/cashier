import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() item: any;
  @Output() sendToCategories = new EventEmitter(); // bywsl value mn component l component
  category: any;
  products: any[] = [];
  selectedProduct: any | null = null;
  // deleteProduct(id: string) {
  //   // console.log(id)
  //   this.sendToCategories.emit(id) //method byakhod l value de todyha ll parent
  // }
  ngOnInit(): void {}

  // openModal(item: any) : void{
  //   this.selectedProduct = item;
  //   console.log(item);
  // }
  constructor(private productService: ProductsService) {}

  openModal(item: any): void {
    this.productService.setProduct(item);
        console.log(item);

  }
}
