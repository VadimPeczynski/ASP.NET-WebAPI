import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCrudService {
  private url = 'api/Product';

  constructor(private http:HttpClient, private auth:AuthService) { 
    this.auth.authenticate();
  }

  deleteProduct(id:number): Observable<number>{
    if (this.auth.authenticated) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.auth.getToken()}`
        })
      };
      const deleteUrl = `${this.url}/${id}`;
      return this.http.delete<number>(deleteUrl, httpOptions);
    } else {
      throwError("Not authorized");
    }
  }
}
