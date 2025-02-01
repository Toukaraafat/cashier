import { Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';
import { PillsComponent } from './pills/pills.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Default redirect to home
  { path: 'login', component: LoginComponent },        // Login route
  { path: 'home', component: HomeComponent },          // Home route
  { path: 'orders', component: OrdersComponent },      // Orders route
  { path: 'tables', component: TablesComponent },      // Tables route
  { path: 'pills', component: PillsComponent },        // Pills route
  { path: 'delivery-details', component: DeliveryDetailsComponent },  // Delivery details route
  { path: 'order-details', component: OrderDetailsComponent },  // Order details route
  { path: '**', redirectTo: 'login' },                 //undefined paths
];
