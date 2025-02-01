import { CommonModule } from '@angular/common';
import { Component, Input, output, OnInit, } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, RouterLinkActive, CommonModule, ProductCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  constructor(private productsRequestService: ProductsService) {}
  baseurl: any;
  products :any ;
  @Input() product: any;

  // ngOnInit(): void {
  //   this.baseurl = this.productsRequestService.getProducts().subscribe((response : any) => this.products = response);
  // }
  ngOnInit() {
    this.productsRequestService.getProducts().subscribe({
      next: (data: any) => {
        console.log('Products:', data);
        this.products = data.products;
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }
  recieveFromProduct(id: any) {
    console.log("recieve")
    this.products = this.products.filter((product: { id: any; }) => product.id !== id)
  }
}
