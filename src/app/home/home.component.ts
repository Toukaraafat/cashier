import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { OrdersCardComponent } from '../orders-card/orders-card.component';
import { SideOrderDetailsComponent } from "../side-order-details/side-order-details.component";
import { SideTableDetailsComponent } from "../side-table-details/side-table-details.component";
// import { SideContentComponent } from "../side-content/side-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoriesComponent,
    OrdersCardComponent,
    SideOrderDetailsComponent,
    SideTableDetailsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
