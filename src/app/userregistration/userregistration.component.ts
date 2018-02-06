import { Component, OnInit } from '@angular/core';
import { UserService } from  '../user.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
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

  constructor(private userService : UserService,private fb:FormBuilder) { 
    this.rForm = fb.group({'firstName':[null,Validators.required],
                            'lastName':[null,Validators.required],
                            'email':[null,Validators.required],
                            'password':[null,Validators.required],
                            'mobile':[null,Validators.required]
                                  });

  }

  ngOnInit() {
  }

  userRegistartion(post){
     this.userService.userRegistartion(post)
  }

}
