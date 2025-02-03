import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Fixed: `styleUrls` instead of `styleUrl`
})
export class NavbarComponent implements OnInit {
  username: string | null = null; // Allow null for better error handling

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.username$.subscribe((username: string | null) => {
      this.username = username;
    });
  }
}
