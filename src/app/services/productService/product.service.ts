import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host = "http://localhost:8000"

  constructor(
    private http: HttpClient
  ) {

  }
  product = () => {
    return this.http.get(`${this.host}/product`)
  }

  addProduct = (data: any) => {
    return this.http.post(`${this.host}/product/addProduct`, data)
  }
  deleteProduct = (id: any) => {
    return this.http.delete(`${this.host}/product/${id}`,)
  }
  getOneProduct = (id: any) => {
    return this.http.get(`${this.host}/product/${id}`,)
  }
  editProduct = (id: any, data: any) => {
    return this.http.post(`${this.host}/product/${id}`, data)
  }

}
