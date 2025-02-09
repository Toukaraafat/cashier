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

  @Input() product: any; // If used, implement logic for handling product.
  @Input() offer: any; // If used, implement logic for handling offer.

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
        /* if (this.categories.length > 0) {
          this.onCategorySelect(this.categories[0]); // Select first category by default
        } */
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

  recieveFromProduct(id: any): void {
    this.products = this.products.filter((product: { id: any; }) => product.id !== id);
  }

  clearSelection(): void {
    this.selectedCategory = null;
  }
}
