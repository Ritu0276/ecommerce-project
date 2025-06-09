import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class Seller {

  constructor(private http:HttpClient) { }
  userSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/seller',data)
  }
}
