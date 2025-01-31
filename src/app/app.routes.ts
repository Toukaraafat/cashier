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
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },       
  { path: '', component: HomeComponent },          
  { path: 'orders', component: OrdersComponent },      
  { path: '', component: NavbarComponent }, 
  { path: 'tables', component: TablesComponent },    
  { path: 'pills', component: PillsComponent },    
  { path: 'delivery-details', component: DeliveryDetailsComponent  }, 
  { path: 'order-details', component: OrderDetailsComponent  },  
 
  { path: '**', redirectTo: 'login' },         
]