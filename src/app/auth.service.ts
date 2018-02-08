import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authToken: any;

  constructor(private http:Http,private router:Router) { }
   
   setUserToken(token){
     localStorage.setItem('id_token', token);
     this.authToken = token;
   }
   loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    return this.authToken;
  }
   loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    localStorage.clear();
    

  }
}
  