import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://erpsystem.testdomain100.online/api/login';
  private countryApiUrl = 'https://erpsystem.testdomain100.online/api/country';

  private countryListSubject = new BehaviorSubject<any[]>([]); // Store and emit countries
  countryList$ = this.countryListSubject.asObservable(); // Observable for countries list

  private usernameSubject = new BehaviorSubject<string | null>(null); // Track username
  username$ = this.usernameSubject.asObservable(); // Expose username as observable

  constructor(private http: HttpClient) {
    this.fetchCountries(); // Load countries on service initialization
  }

  // Fetch country codes dynamically
  private fetchCountries(): void {
    this.http.get<any>(this.countryApiUrl).subscribe({
      next: (response) => {
        console.log('API Response:', response); // Debugging step
        const countries = response.data || response; // Handle cases where data is nested
        if (Array.isArray(countries)) {
          this.countryListSubject.next(countries);
        } else {
          console.error('Unexpected country data format:', response);
        }
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    });
  }

  // Expose the countries list as an observable
  getCountries(): Observable<any[]> {
    if (this.countryListSubject.value.length === 0) {
      this.fetchCountries(); // Ensure fresh data is fetched
    }
    return this.countryList$;
  }

  // Check if the country code is valid
  private isValidCountryCode(phone_code: string): boolean {
    const countryList = this.countryListSubject.value;
    if (!Array.isArray(countryList) || countryList.length === 0) {
      console.warn('Country list is empty or not loaded yet.');
      return false;
    }
    return countryList.some(country => country.phone_code === phone_code);
  }

  // Login method
  login(phone_code: string, email_or_phone: string, password: string): Observable<any> {
    if (!this.isValidCountryCode(phone_code)) {
      return throwError(() => new Error('Invalid country code!'));
    }

    return this.http.post(this.apiUrl, { phone_code, email_or_phone, password }).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError(() => new Error('Login failed, please try again.'));
      })
    );
  }

  // Method to update the username
  updateUsername(username: string | null) {
    this.usernameSubject.next(username); // Update the username
  }
}
