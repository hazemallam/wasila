import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Services/Login/login.service';
import { RegisterService } from 'src/app/Services/Register/register.service';
import { Register } from "src/app/ViewModels/Register/register";
import * as AOS from 'aos';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersList: Register[]=[];
  subscribtion: Subscription|null=null;
  loginFrm: FormGroup = new FormGroup({});
  NewUser:Register;

  constructor(private prdService: RegisterService , private loginService : LoginService,private fb: FormBuilder
    , private router:Router ) { 
      this.NewUser={name:"", email:"",password:""}
    }


  ngOnInit(): void {
    this.subscribtion= this.prdService.getAllUserRegister().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.usersList=response;
      },
      (err)=>{console.log(err)}
    );

    console.log("After subscribe")


    this.loginFrm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
      Email: ['', [Validators.required, Validators.email, Validators.minLength(7)]]
      , Password: ['', [Validators.required, Validators.minLength(6)]]
    });

    AOS.init();

  }
  checkLogin()
  {
    let count;
    let x =1;

    console.log(this.NewUser)
    console.log(this.usersList)
    for (var i=0; i < this.usersList.length; i++) {
      if ((this.usersList[i].email === this.NewUser.name) || (this.usersList[i].password === this.NewUser.password)) {
        console.log("done")
        this.router.navigate(['/home']);
        this.login();
       
      }
      else{
        console.log("false");
        console.log(this.usersList.length)
        console.log(x)
      if(x== this.usersList.length){
        count = 2;
        console.log("hhh")
      
      }
      ++x;

      }
      
  }
  if(count == 2)
         alert("من فضلك لا يوجد لديك حساب . سجل الان ");

    }

    login(){
      // alert("In Login")
      this.loginService.login('TestToken');
      // this.userloginserve.login(this.NewUser.Email)
    }
  
    Logout(){
      // alert("logout");
      this.loginService.logout();
    }
}
