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
  selectedCategory: any;
  constructor(private productsRequestService: ProductsService) {}
  products :any ;  
  categories: any[] = [];
  selectedCategoryProducts: any[] = [];
  @Input() product: any;

  // ngOnInit(): void {
  //   this.baseurl = this.productsRequestService.getProducts().subscribe((response : any) => this.products = response);
  // }
  // ngOnInit() {
  //   this.productsRequestService.getProducts().subscribe({
  //     next: (data: any) => {
  //       console.log('Products:', data.data.categories
  //       );
  //       this.products = data.data.categories;
  //     },
  //     error: (err) => console.error('Error fetching products:', err)
  //   });    this.loadCategories();

  // }


  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.productsRequestService.getProducts().subscribe({
      next: (data: any)  => {
        if (data.status) {
          this.categories = data.data.categories;
          this.selectedCategoryProducts = this.categories[0]?.dishes || [];
        }
      },
      error: (err)  => {
        console.error('Error fetching categories:', err);
      }
   });
  }

  onCategorySelect(category: any): void {
    this.selectedCategoryProducts = category.dishes || [];
  }
  recieveFromProduct(id: any) {
    // console.log("recieve")
    this.products = this.products.filter((product: { id: any; }) => product.id !== id)
  }

}
