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
  styleUrls: ['./login.component.css'] // ✅ Fixed "styleUrl" to "styleUrls"
})
export class LoginComponent {
  selectedCountry: any;
  dropdownOpen = false;

  countryList = [
    { code: '+02', flag: 'https://flagcdn.com/w40/eg.png' }, 
    { code: '+965', flag: 'https://flagcdn.com/16x12/kw.png' },
    { code: '+44', flag: 'https://flagcdn.com/w40/gb.png' }, // ✅ Fixed country code
  ];

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

  // Password Visibility Toggle
  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // ✅ FIXED: Added loginData object
  loginData = {
    username: '',
    pass: ''
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.loginData.username || !this.loginData.pass) {
      this.errorMessage = 'Please enter both username and password';
      return;
    }
  
    this.authService.login(this.loginData.username, this.loginData.pass).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
        localStorage.setItem('token', response.token);
        alert('Welcome ' + this.loginData.username);  // Displaying alert with the username
        this.router.navigate(['/home']);  // Redirecting to the home page
      },
      error: (error) => {
        console.error('Login Failed:', error);
        this.errorMessage = 'Invalid username or password';
        alert('Invalid username or password');  // Displaying alert for failed login
      },
    });
  }
  
}
