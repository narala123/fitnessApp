import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule,FormControl,FormBuilder,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from  './user.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration',component:UserregistrationComponent},
  { path: 'login',component:UserloginComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserregistrationComponent,
    UserloginComponent,

  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes
      // <-- debugging purposes only
    ),
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
