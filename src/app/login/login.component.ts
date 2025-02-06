import { Component, OnInit } from '@angular/core';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Keep this import
import { Router } from '@angular/router';

interface Country {
  code: string;
  flag: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxCountriesDropdownModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedCountry: Country = { code: 'اختر الدولة', flag: '' }; 
  dropdownOpen = false;
  loginData = {
    email_or_phone: '',
    password: ''
  };
  errorMessage: string = '';
  countryList: Country[] = []; 
  isPasswordVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.fetchCountries();
  }

  fetchCountries() {
    this.authService.getCountries().subscribe({
      next: (response) => {
        console.log('API Response:', response); // Debug log
  
        // Check if the response contains the `data` array
        if (response.data && Array.isArray(response.data)) {
          // Map the `data` array to extract only `phone_code` and `image`
          this.countryList = response.data.map((country: { phone_code: string, image: string }) => ({
            code: country.phone_code,
            flag: country.image
          }));
  
          console.log('Countries Loaded:', this.countryList);
        } else {
          this.errorMessage = 'No country data found in the response.';
        }
      },
      error: () => {
        this.errorMessage = 'Failed to load country data.';
      },
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.dropdownOpen = false;
    console.log('Selected country:', this.selectedCountry);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onLogin() {
    if (!this.selectedCountry.code || this.selectedCountry.code === 'اختر الدولة') {
      this.errorMessage = 'الرجاء اختيار الدولة';
      return;
    }
  
    if (!this.loginData.email_or_phone) {
      this.errorMessage = 'الرجاء إدخال رقم الهاتف أو البريد الإلكتروني';
      return;
    }
  
    if (!this.loginData.password) {
      this.errorMessage = 'الرجاء إدخال كلمة المرور';
      return;
    }
  
    const loginPayload = {
      country_code: this.selectedCountry.code,
      email_or_phone: this.loginData.email_or_phone,
      password: this.loginData.password
    };
  
    this.authService.login(loginPayload).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
  
        // Check if login is successful and response contains the token
        if (response.status && response.data.access_token) {
          this.authService.setUsername(this.loginData.email_or_phone);
  
          // Debug log
          console.log('Navigating to home page...');
  
          // Show success message
          alert('تم تسجيل الدخول بنجاح');
  
          // Redirect to home page
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = response.message || 'فشل تسجيل الدخول، تحقق من البيانات المدخلة';
        }
      },
      error: (error) => {
        console.error('Login Failed:', error);
        this.errorMessage = error.error?.message || 'فشل تسجيل الدخول، تحقق من البيانات المدخلة';
      },
    });
  }
}
