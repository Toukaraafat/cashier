import { Component } from '@angular/core';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxCountriesDropdownModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedCountry: any;
  dropdownOpen = false;
  loginData = {
    username: '',
    pass: ''
  };
  errorMessage: string = '';

  countryList = [
    { code: '+02', flag: 'https://flagcdn.com/w40/eg.png' },
    { code: '+965', flag: 'https://flagcdn.com/16x12/kw.png' },
    { code: '+44', flag: 'https://flagcdn.com/w40/gb.png' },
  ];

  isPasswordVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.countryList.length > 0) {
      this.selectedCountry = this.countryList[0];
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.dropdownOpen = false;
    console.log('Selected country:', this.selectedCountry);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onLogin() {

    // Call the login method from AuthService
    this.authService.login(this.loginData.username, this.loginData.pass).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);

        // Update the username in AuthService
        this.authService.setUsername(this.loginData.username);  // Set the username in the service

        // Show welcome alert with username
        alert('Welcome ' + this.loginData.username);

        // Redirect to the home page
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login Failed:', error);
        this.errorMessage = 'Invalid username or password';
        alert('Invalid username or password');  // Show alert on failed login
      },
    });
  }
}
