import { Component, Input, Output, EventEmitter   } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // This method is called when the user confirms logout in the modal
  confirmLogout() {
    this.authService.logout().subscribe({
      next: (response) => {
        console.log('Logout successful:', response);
        this.authService.clearUsername();
  
        // Remove modal backdrop manually
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
          modalBackdrop.remove();
        }
  
        // Close any open modals (in case modal stays open)
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('padding-right');
  
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout failed:', error);
      },
    });
  }
  
}