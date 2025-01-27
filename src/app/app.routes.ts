import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },        
    { path: '**', redirectTo: 'login' },          
    { path: 'orders', component: OrdersComponent },
    { path: '', component: HomeComponent },
    { path: '', component: SidebarComponent },
    { path: '', component: NavbarComponent },
]
