import { Component, OnInit } from '@angular/core';
import { UserService } from  '../user.service';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';

import { Router } from '@angular/router';
import {FlashMessage} from 'angular-flash-message';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MObile_REGEX = /^[0-9]{10,10}$/;
const PWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
const cPWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
       rForm: FormGroup;
       firstName:string = '';
       lastName:string = '';
       email:string = '';
       password:string ='';
       mobile:string = '';
      confirmPassword:string='';
      Address:string='';
      errormeassege:string='';


  constructor(private userService : UserService,private fb:FormBuilder,private router:Router,private flashMessage:FlashMessage) {
    this.rForm = fb.group({'firstName':['',Validators.compose([Validators.required])],
                            'lastName':['',Validators.compose([Validators.required])],
                            'email':['',Validators.compose([Validators.required,Validators.pattern(EMAIL_REGEX)])],
                            'mobile':['',Validators.compose([Validators.required,Validators.pattern(MObile_REGEX)])],
                            'password':['',Validators.compose([Validators.required,Validators.pattern(PWORD_REGEX),])],
                            'confirmPassword':['',Validators.compose([Validators.required,Validators.pattern(cPWORD_REGEX),])],
                            'Address':['',Validators.compose([Validators.required])]
                              });

  }

  ngOnInit() {
  }

  userRegistartion(value:any){
    console.log(value);
   
    value.userRole = 'customer';
    if(value.password === value.confirmPassword){
    this.userService.userRegistartion(value).subscribe((data)=>{
        if(data.success == true){
           console.log(data.message);
           alert('You are now registered and can now login');
           this.router.navigate(['/login']);
           this.rForm.reset();
        }else{
            console.log(data.message);
        }

    }
    );

    }else{
      this.errormeassege = "confirm password should  match with password"
    }

  }

}
