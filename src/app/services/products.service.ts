import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BProduct} from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //url: string = 'http://localhost:3000/products';
  url: string = "http://localhost:8080/api/buttons";
  constructor(private http: HttpClient) { }



  getProducts(){
   return this.http.get<BProduct[]>(this.url);
  }

  getProduct(id:number){
    return this.http.get<BProduct>(this.url + "/get_by_id", {params:{"id": id}});
  }

  postProduct(product: BProduct){
    return this.http.post<BProduct>(this.url, product);
  }

  deleteProduct(id: number){
    //return this.http.delete<any>(`${this.url}/${id}`)
    return this.http.delete(this.url, {params:{"id": id}});
  }

  updateProduct(product: BProduct) {
    //return this.http.put<BProduct>(`${this.url}/${product.id}`, product);
    return this.http.put<BProduct>(this.url, product);
  }
}