import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  selectedCountry: any = { code: 'اختر الدولة', flag: '' }; // Default placeholder
  dropdownOpen = false;
  loginData = {
    email_or_phone: '',
    password: ''
  };
  errorMessage: string = '';
  countryList: any[] = []; // Initialize as empty
  isPasswordVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.fetchCountries();
  }

  fetchCountries() {
    this.countryList = [
      { code: '+20', flag: 'https://flagcdn.com/w40/us.png' },
      { code: '+44', flag: 'https://flagcdn.com/w40/gb.png' }
    ];
    console.log('Mock countries loaded:', this.countryList);
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
        this.authService.setUsername(this.loginData.email_or_phone);
        alert('مرحبا ' + this.loginData.email_or_phone);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login Failed:', error);
        this.errorMessage = error.error?.message || 'فشل تسجيل الدخول، تحقق من البيانات المدخلة';
      },
    });
  }
}
