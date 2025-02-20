import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  saveUserData(data: any): Observable<any> {
    return this.http.post('http://localhost:3001/saveUserData', {
      data: data,
    });
  }

  getUserData(): Observable<any> {
    return this.http.post('http://localhost:3001/getUserData', {});
  }

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:3001/login', {
      data: data,
    });
  }
}
