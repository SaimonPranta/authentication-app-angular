import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = "http://localhost:8000"

  isAuthenticated = new BehaviorSubject(false)

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {

  }

  registation(data: any) {
    return this.http.post(`${this.host}/registration`, data)
  }
  login(data: any) {
    return this.http.post(`${this.host}/login`, data)
  }
  user() {
    // if (this.cookie.get("token")) {
      return this.http.get(`${this.host}/user`, {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.cookie.get("token")}`
        })
      })
    // }
    // return false
  }

}
