import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductsService } from '../services/products.service';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, RouterLinkActive, CommonModule, ProductCardComponent, OfferCardComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: any;
  offers: any;
  categories: any[] = [];
  selectedCategory: any = null;
  selectedCategoryProducts: any[] = [];

  @Input() item: any; 
  @Input() offer: any; 

  constructor(private productsRequestService: ProductsService) { }

  ngOnInit(): void {
    this.productsRequestService.getOffers().subscribe({
      next: (data: any) => {
        console.log('offers:', data.data);
        this.offers = data.data;
      },
      error: (err) => console.error('Error fetching offers:', err)
    });
    this.fetchMenuData();
  }

  fetchMenuData(): void {
    this.productsRequestService.getMenuDishes().subscribe(response => {
      if (response.status) {
        this.categories = response.data;
        // if (this.categories.length > 0) {
        //   this.onCategorySelect(this.categories[0]); // Select first category by default
        // }
      }
    });
  }

  onCategorySelect(category: any): void {
    if (!category || !Array.isArray(category.dishes)) {
      this.selectedCategoryProducts = []; 
      return;
    }

    this.selectedCategory = category;
    this.selectedCategoryProducts = category.dishes
      .filter((d: { dish: any; }) => d && d.dish)
      .map((d: { dish: any; sizes: any; addon_categories: any; }) => ({
        ...d.dish,
        sizes: Array.isArray(d.sizes) ? d.sizes : [],
        addon_categories: Array.isArray(d.addon_categories) ? d.addon_categories : []
      }));
  }

  recieveFromProduct(id: any): void {
    this.products = this.products.filter((product: { id: any; }) => product.id !== id);
  }

  clearSelection(): void {
    this.selectedCategory = null;
  }
}
