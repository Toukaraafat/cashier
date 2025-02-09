import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://erpsystem.testdomain100.online/api'; 
  private token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZGU0ZTAwMDFjZWNjMmFhNmU2ZTg3OTg5MzdiZDkxNGE3NTg3ODRmYTdmNWQxMTJkYTgxMmFjYjRkNDg2YmRjNmMzMGRkMTliNjkwOWJiYjMiLCJpYXQiOjE3Mzg0OTgxMzQuMTY5ODA2MDAzNTcwNTU2NjQwNjI1LCJuYmYiOjE3Mzg0OTgxMzQuMTY5ODEwMDU2Njg2NDAxMzY3MTg3NSwiZXhwIjoxNzcwMDM0MTM0LjE1NzMyNTk4MzA0NzQ4NTM1MTU2MjUsInN1YiI6Ijk0Iiwic2NvcGVzIjpbXX0.FjNslriLBmgZwjmC6sRdG44G50X5xZzSEyXMHJEhTv_56cvsPvOw0axjHELUf2BOR2mV778CDTYkSFmw_7xa9Iivh1xurNsm1KyyWnOwY1qd_c2aRLE4S1eGksrzwcT7C7rk4W4r4K52n_I00NqMmNPRJqRzXSDu6PeEzdLRNMCMgHkfGBVrY-8E3GRJs03Ct3xZ4jVjS6bcpy8pMAqROUawyi2smsH2DYkth2E0ZxleySdQE_276FOc99NACRLMw8pU1Kh5CJL584F0HYkGgSWzfNaelWrztplfAgi4PdJRZBBkj9KLgRYio9_07Gs1XsOWRIST84PmA77sHTNIGHcopZvR8OasuSY-Uz9pvNtHYEto7mpRjGaUqAI69Z-AAisXMib1cgWDd8VCe6qK5Nj6PcvePjJnlaXbjO4fNIo2ee51cUFPyKyKQXdyuUFL3c6b2e3OX1Of2I5IjyQahnkQJ9oDpSfh0qMYOv_j7RUVKGBRGT07EOcLQHHG6_QCX4_wELkRf5L6fkIBIqL2oO2XNu3ARwCa8x2QUscHTvCa6af6RQRVmXqNB0A9-MPlyfCMfonMTA1EEpU2f3eoA3eNhRN3DVs61KHGdAvT-oP-7GukAbwoCHTlUsW73-fHmhRggjgXMBhGkGdwDwfZwTb1F1gj6kmEUqWvs_ZYT_Y'; // 🔹 Replace with the actual token
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });
  }
  private productSubject = new BehaviorSubject<any>(null);
  product$ = this.productSubject.asObservable();

  setProduct(product: any) {
    this.productSubject.next(product);
  }
  getMenuDishes(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.apiUrl}/menu-dishes`, { headers });
  }

  getOffers(){
    return this.http.get(`${this.apiUrl}/offers`, {
      headers: this.getHeaders(),
    });
  }


}