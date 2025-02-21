import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  postProduct(product: any): Observable<any>{
    return this.http.post(BASIC_URL+"/product", product);
  }

  getAllProduct(): Observable<any>{
    return this.http.get(BASIC_URL+"/product");
  }

  
  getProductById(id: number): Observable<any>{
    return this.http.get(BASIC_URL+"/product/"+id);
  }
  

  updateProduct(id: number , product:any): Observable<any>{
    return this.http.put(BASIC_URL+"/product/"+id, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(BASIC_URL+"/product/"+id); 
  }
}
