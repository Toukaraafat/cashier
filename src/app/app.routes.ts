import { Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'orders', component:OrdersComponent},
    {path: '', component: HomeComponent}, 
    {path: '', component: SidebarComponent}, 
    {path: '', component: NavbarComponent},


];
