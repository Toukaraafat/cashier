import { Component } from '@angular/core';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { CommonModule } from '@angular/common';
import { IConfig } from 'ngx-countries-dropdown'; // Import the IConfig interface
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-delivery-details',
  standalone:true,
  imports: [NgxCountriesDropdownModule,CommonModule,FormsModule],
  templateUrl: './delivery-details.component.html',
  styleUrl: './delivery-details.component.css'
})
export class DeliveryDetailsComponent {

  selectedCountry: any;
  dropdownOpen = false;

  // Add flag URLs for each country
  countryList = [
    { code: '+02', flag: 'https://flagcdn.com/w40/eg.png' }, 
    { code: '+965', flag: 'https://flagcdn.com/16x12/kw.png' },
    {  code: 'GB', flag: 'https://flagcdn.com/w40/gb.png' }, 

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
    console.log("Selected country:", this.selectedCountry);
  }
   
}

