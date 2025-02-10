import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() sendToCategories = new EventEmitter(); // bywsl value mn component l component
category: any;

  deleteProduct(id: string) {
    // console.log(id)
    this.sendToCategories.emit(id) //method byakhod l value de todyha ll parent
  }

}
