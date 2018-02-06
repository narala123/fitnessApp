import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private http:Http) { }

   userRegistartion(data){

     console.log(data);
     
    return this.http.post('http://localhost:3000/user/registartion',data).map(response=>response.json).subscribe(data=>console.log(data));

   }

}
