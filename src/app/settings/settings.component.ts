import { Component , OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { CommonModule } from '@angular/common';
import { IConfig } from 'ngx-countries-dropdown'; // Import the IConfig interface
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-settings',
  imports: [NgxCountriesDropdownModule,CommonModule,FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  username: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.username$.subscribe((username) => {
      this.username = username;
    });
     if (this.countryList.length > 0) {
      this.selectedCountry = this.countryList[0]; 
    }
  }
  selectedCountry: any;
  dropdownOpen = false;

  // Add flag URLs for each country
  countryList = [
    { code: '+02', flag: 'https://flagcdn.com/w40/eg.png' }, 
    { code: '+965', flag: 'https://flagcdn.com/16x12/kw.png' },
    {  code: 'GB', flag: 'https://flagcdn.com/w40/gb.png' }, 

  ];

 

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.dropdownOpen = false;
    console.log("Selected country:", this.selectedCountry);
  }
}

   


