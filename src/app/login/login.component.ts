import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  countryList: any[] = []; // Store API country data
  selectedCountry: any = { phone_code: '', image: null }; // Default selected country
  dropdownOpen = false;

  loginData = {
    email_or_phone: '',
    password: ''
  };

  errorMessage: string = '';
  isPasswordVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.fetchCountries();
  }

  fetchCountries() {
    this.authService.getCountries().subscribe({
      next: (response) => {
        this.countryList = response; // Store API response (directly assign if array)
        if (this.countryList.length > 0) {
          this.selectedCountry = this.countryList[0]; // Default country
        }
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
        this.errorMessage = 'Failed to load countries. Please try again.';
      }
    });
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onLogin() {
    if (!this.selectedCountry.phone_code) {
      alert('Please select a country');
      return;
    }

    this.authService.login(
      this.selectedCountry.phone_code,
      this.loginData.email_or_phone,
      this.loginData.password
    ).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
        this.authService.updateUsername(this.loginData.email_or_phone); // Update username after login
        alert('Welcome ' + this.loginData.email_or_phone);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = 'Invalid credentials. Please check your login details.';
        alert(this.errorMessage); // Display the error message
      },
    });
  }
}
