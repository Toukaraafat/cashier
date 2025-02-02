import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedCountry: any = null;
  countryList: any[] = [];
  dropdownOpen = false;
  errorMessage: string = '';
  isPasswordVisible: boolean = false;

  loginData = {
    country_code: '',
    email_or_phone: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getCountries().subscribe({
      next: (data) => {
        this.countryList = data; // Assuming API returns an array of countries with { code, flag }
        if (this.countryList.length > 0) {
          this.selectedCountry = this.countryList[0]; // Default selection
          this.loginData.country_code = this.selectedCountry.code; // Set default country code
        }
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.loginData.country_code = country.code;
    this.dropdownOpen = false;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onLogin() {
    this.authService.login(this.loginData.country_code, this.loginData.email_or_phone, this.loginData.password).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
        this.authService.setUsername(this.loginData.email_or_phone);
        alert('Welcome ' + this.loginData.email_or_phone);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login Failed:', error);
        this.errorMessage = 'Invalid credentials';
        alert('Invalid email/phone or password');
      }
    });
  }
}
