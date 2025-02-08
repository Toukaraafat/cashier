import { CommonModule } from '@angular/common';
import { Component, Input, output, OnInit, } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductsService } from '../services/products.service';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, RouterLinkActive, CommonModule, ProductCardComponent, OfferCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  constructor(private productsRequestService: ProductsService) { }
  products: any;
  offers: any;
  categories: any[] = [];
  selectedCategory: any = null;
  selectedCategoryProducts: any[] = [];

  @Input() product: any;
  @Input() offer: any;

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
  //   });  

  // }


  ngOnInit(): void {
    // this.loadCategories();
    this.productsRequestService.getOffers().subscribe({
      next: (data: any) => {
        console.log('offers:', data.data
        );
        this.offers = data.data;
      },
      error: (err) => console.error('Error fetching products:', err)
    });
    this.fetchMenuData();

  }

  // loadCategories(): void {
  //   this.productsRequestService.getCategories().subscribe({
  //     next: (data: any)  => {
  //       if (data.status) {
  //         this.categories = data.data;
  //         this.selectedCategoryProducts = this.categories[0]?.dishes;
  //         console.log('cat:', this.selectedCategoryProducts );
  //       }
  //     },
  //     error: (err)  => {
  //       console.error('Error fetching categories:', err);
  //     }
  //  });
  // // }
  // onCategorySelect(category: any): void {
  //   this.selectedCategoryProducts = category.dishes || [];
  //   console.log('trr:', this.selectedCategoryProducts );

  // }




  fetchMenuData(): void {
    this.productsRequestService.getMenuDishes().subscribe(response => {
      if (response.status) {
        this.categories = response.data;
        if (this.categories.length > 0) {
          this.onCategorySelect(this.categories[0]); // Select first category by default
        }
      }
    });
  }

  onCategorySelect(category: any): void {
    if (!category || !Array.isArray(category.dishes)) {
      this.selectedCategoryProducts = []; // Ensure no crash if dishes is undefined/null
      return;
    }

    this.selectedCategory = category;
    this.selectedCategoryProducts = category.dishes
      .filter((d: { dish: any; }) => d && d.dish) // Ensure `d` and `d.dish` exist before mapping
      .map((d: { dish: any; sizes: any; addon_categories: any; }) => ({
        ...d.dish,
        sizes: Array.isArray(d.sizes) ? d.sizes : [], // Ensure it's always an array
        addon_categories: Array.isArray(d.addon_categories) ? d.addon_categories : []
      }));
  }


  recieveFromProduct(id: any) {
    // console.log("recieve")
    this.products = this.products.filter((product: { id: any; }) => product.id !== id)
  }
  clearSelection() {
    this.selectedCategory = null;
  }
}
