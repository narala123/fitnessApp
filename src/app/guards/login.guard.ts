import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor (private authService:AuthService, private router:Router,private state:ActivatedRoute){

  }

  canActivate() {
    if(!this.authService.loggedIn()) {
      return true;
    }else{
      this.router.navigate(['/home']);
      return false;
    }
  }
}