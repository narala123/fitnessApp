import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private http:Http) { }

   userRegistartion(data):Observable<any> {
     
    return this.http.post('http://localhost:3000/user/registartion',data).map((response)=>response.json());

   }
   userLogin(user){
       return this.http.post('http://localhost:3000/user/login',user).map((response)=>response.json());
   }

}
