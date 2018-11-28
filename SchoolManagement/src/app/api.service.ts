import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions, URLSearchParams, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
  authUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  login(url: string, body: any) {
   return this.httpClient.post<any[]>(this.authUrl + url, body).pipe(map(res =>
   res));
  }

  logout() {

  }

  register(url: any , body: any) {
    return this.httpClient.post<any[]>(this.authUrl + url, body).pipe(map(res =>
      res));
  }
}
