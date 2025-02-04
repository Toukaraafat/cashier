import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  
  // Private BehaviorSubject to hold the current username value
  private usernameSubject = new BehaviorSubject<string>(''); 

  // Observable to expose the username to other components
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Login method to authenticate user and return token
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Set the username and emit the change to all subscribers
  setUsername(username: string): void {
    this.usernameSubject.next(username); // Update the BehaviorSubject with the new username
  }

  // Clear the username, typically when the user logs out
  clearUsername(): void {
    this.usernameSubject.next(''); // Reset the username to an empty string
  }

 
}
