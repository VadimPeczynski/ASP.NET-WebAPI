import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ProductCrudService } from 'src/app/admin/services/product-crud/product-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:IProduct[] = [];
  private subject = new Subject<IProduct[]>();
  private _productUrl = 'api/Product';
  constructor(private httpClient: HttpClient, private productCrudService: ProductCrudService) { }

  getProducts(): Observable<IProduct[]>{
    this.httpClient.get<IProduct[]>(this._productUrl+"/getProducts").subscribe(
      products =>{
        this.products = products;
        this.subject.next(products)
      }
    );
    return this.subject.asObservable();
  }

  getCategories(): Observable<string[]>{
    return this.httpClient.get<string[]>(this._productUrl+"/getCategories");
  }

  deleteProduct(id: number){
    return this.productCrudService.deleteProduct(id).subscribe(p=>{
      this.products.splice(this.products.findIndex(p=>p.id==id), 1);
      this.subject.next(this.products);
    });
  }
}

export interface IProduct{
   id: number;
   name: string;
   description: string;
   price: number;
   category: string;
}
