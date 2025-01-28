import { Component } from '@angular/core';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { IConfig } from 'ngx-countries-dropdown'; // Import the IConfig interface
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [NgxCountriesDropdownModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Country Dropdown Example';

  // Configurations for the dropdown
  selectedCountryConfig: IConfig = {
    hideCode: true,
    hideName: true
  };
  countryListConfig = {
    hideCode: true
  };
  selectedCountry: any = null; // Default selected country
  ngOnInit() {
    // Set "Option 1" as the default selected country
    this.selectedCountry = {
      name: 'Option 1', // Replace with actual country name
      code: 'US'        // Replace with actual country code
    };
  }

  // Event handler for country change
  onCountryChange(country: any) {
    console.log('Selected Country:', country);
  }
}
