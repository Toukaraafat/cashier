import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://erpsystem.testdomain100.online/api/login';
  private countryApiUrl = 'https://erpsystem.testdomain100.online/api/countries';

  private usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch country codes dynamically
  getCountries(): Observable<any> {
    return this.http.get(this.countryApiUrl);
  }

  // Login method
  login(country_code: string, email_or_phone: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { country_code, email_or_phone, password });
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }

  clearUsername(): void {
    this.usernameSubject.next('');
  }
}
