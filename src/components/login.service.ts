import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  mainUrl = 'https://yt-downloader-api-50sv.onrender.com';

  saveUserData(data: any): Observable<any> {
    return this.http.post(`${this.mainUrl}/saveUserData`, {
      data: data,
    });
  }

  getUserData(): Observable<any> {
    return this.http.post(`${this.mainUrl}/getUserData`, {});
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.mainUrl}/login`, {
      data: data,
    });
  }
}
