import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserSignup } from '../models/user-signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)

  private auth_url = "http://localhost:7000/api/auth"


  public signup(user: UserSignup | any) {
     return this.http.post(`${this.auth_url}/signup`, user)
  }



  
}
