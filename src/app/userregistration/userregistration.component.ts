import { Component, OnInit } from '@angular/core';
import { UserService } from  '../user.service';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';


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


  constructor(private userService : UserService,private fb:FormBuilder) {
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
    if(value.password === value.confirmPassword){
    //this.userService.userRegistartion(post)
    }else{
      this.errormeassege = "confirm password should  match with password"
    }

  }

}
