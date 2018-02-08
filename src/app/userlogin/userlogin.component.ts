import { Component, OnInit } from '@angular/core';
import { UserService } from  '../user.service';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import {AuthService} from '../auth.service';

import { Router } from '@angular/router';
import {FlashMessage} from 'angular-flash-message';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
    lForm: FormGroup;
    email:string = '';
    password:string ='';

  constructor(private userService : UserService,private fb:FormBuilder,private router:Router,private authService:AuthService) { 
    this.lForm = fb.group({'email':['',Validators.compose([Validators.required,Validators.pattern(EMAIL_REGEX)])],
                          'password':['',Validators.compose([Validators.required])]})
  }


  ngOnInit() {
  }
  doLogin(value:any){
     this.userService.userLogin(value).subscribe((data)=>{

            if(data.success==true){
                 this.authService.setUserToken(data.token);
                 this.router.navigate(['/home'])
            }else{
              alert('please check your username and password')
            }

     });
  }

}
