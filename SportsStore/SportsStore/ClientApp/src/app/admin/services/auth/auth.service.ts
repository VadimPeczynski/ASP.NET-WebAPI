import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_token: string;
  private _tokenUrl = 'connect/token';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private _http: HttpClient) { }

  get authenticated(){
    return !isNullOrUndefined(this.auth_token);
  }
  authenticate() {
    this._http.post<{access_token:string}>(this._tokenUrl, 'grant_type=client_credentials&client_id=client&client_secret=secret', this.httpOptions).subscribe(
      res=>{
        this.auth_token = res.access_token;
      }
    );
  }
}
