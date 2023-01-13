import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = "http://localhost:8000"
  constructor(
    private http: HttpClient
  ) {

  }

  registation( data : any){
    return this.http.post(`${this.host}/registration`, data)
  }
  login( data : any){
    return this.http.post(`${this.host}/login`, data)
  }

}
