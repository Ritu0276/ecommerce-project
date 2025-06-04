import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Seller {

  constructor(private http:HttpClient) { }

  userSighUp(data:any){
    return this.http.post('http://localhost:3000/seller', data)
  }
}
