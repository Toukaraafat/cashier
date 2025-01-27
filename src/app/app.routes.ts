import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust the path if needed

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },         // Login route
  { path: '**', redirectTo: 'login' }                  // Wildcard route for invalid paths
];
