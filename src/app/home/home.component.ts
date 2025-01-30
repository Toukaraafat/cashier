import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { OrdersCardComponent } from '../orders-card/orders-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoriesComponent,
    OrdersCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
