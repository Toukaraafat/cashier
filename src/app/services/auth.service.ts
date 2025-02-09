import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://erpsystem.testdomain100.online/api/login';
  
  // Private BehaviorSubject to hold the current username value
  private usernameSubject = new BehaviorSubject<string>(''); 

  // Observable to expose the username to other components
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Login method to authenticate user and return token
  login(loginData: { country_code: string; email_or_phone: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, loginData);
  }

  // Set the username and emit the change to all subscribers
  setUsername(username: string): void {
    this.usernameSubject.next(username); // Update the BehaviorSubject with the new username
  }

  // Clear the username, typically when the user logs out
  clearUsername(): void {
    this.usernameSubject.next(''); // Reset the username to an empty string
  }

  private countryApiUrl = 'https://erpsystem.testdomain100.online/api/country';

  // Fetch country list from API
  getCountries(): Observable<any> {
    return this.http.get<any>(this.countryApiUrl);
  }

  // Logout method to log out the user
  logout(): Observable<any> {
    const logoutUrl = 'https://erpsystem.testdomain100.online/api/logout';
    return this.http.post(logoutUrl, {});
  }
}
