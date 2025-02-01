import { Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';
import { PillsComponent } from './pills/pills.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'pills', component: PillsComponent },
      { path: 'delivery-details', component: DeliveryDetailsComponent },
      { path: 'order-details', component: OrderDetailsComponent },
    ],
  },
  { path: '**', redirectTo: 'login' }, // Redirect unknown routes to login
];
