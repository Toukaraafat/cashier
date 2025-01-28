import { Routes } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to login
  { path: 'login', component: LoginComponent },         // Login route
  { path: 'home', component: HomeComponent },           // Home route
  { path: 'orders', component: OrdersComponent },       // Orders route
  { path: 'navbar', component: NavbarComponent },       // Navbar route
  { path: 'sidebar', component: SidebarComponent },     // Sidebar route
  { path: '**', redirectTo: 'login' },                  // Wildcard route for unknown paths
];
