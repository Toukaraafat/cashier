import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
>>>>>>> a0830c87dfc28ae8ec8bfe94769a412e4b9d430b
// import {LoginComponent} from "./login/login.component";


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,HomeComponent,CommonModule],
=======
  imports: [RouterOutlet,NavbarComponent, SidebarComponent],
>>>>>>> a0830c87dfc28ae8ec8bfe94769a412e4b9d430b
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cashier';
}
