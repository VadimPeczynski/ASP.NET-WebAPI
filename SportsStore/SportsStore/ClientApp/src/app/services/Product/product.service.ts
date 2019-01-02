import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = 'api/Product';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this._productUrl+"/getProducts");
  }

  getCategories(): Observable<string[]>{
    return this.httpClient.get<string[]>(this._productUrl+"/getCategories");
  }
}

export interface IProduct{
   name: string;
   description: string;
   price: number;
   category: string;
}
