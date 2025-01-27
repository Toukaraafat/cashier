import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component'; // Adjust the path if needed

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },         // Login route
  { path: '**', redirectTo: 'login' }                  // Wildcard route for invalid paths
=======
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'orders', component:OrdersComponent},
    {path: '', component: HomeComponent}, 
    {path: '', component: SidebarComponent}, 
    {path: '', component: NavbarComponent},


>>>>>>> b2a039b134347e1c2856be570bf7a3070fe0cf29
];
