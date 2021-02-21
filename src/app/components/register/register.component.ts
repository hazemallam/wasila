import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService } from 'src/app/Services/register/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/ViewModels/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  NewUser:Register;
   loginFrm: FormGroup = new FormGroup({});

  constructor(private router: Router , private userRegisterserve:RegisterService ,private fb: FormBuilder) { 
    this.NewUser={name:"", email:"",password:""} }

  ngOnInit(): void {
    this.loginFrm = this.fb.group({
      name: ['', [Validators.required, Validators.email, Validators.minLength(15)]]
      ,email: ['', [Validators.required, Validators.email, Validators.minLength(7)]]
      , Password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  addUsersReg(){
    // const prd: IProduct = {ID: 0, Name: 'Assiut PD-40 Test', Quantity: 37, Price: 100};
    console.log(this.NewUser);
    this.userRegisterserve.addUserRegister(this.NewUser).subscribe(
        res => {
          this.router.navigateByUrl('/home'); console.log(this.NewUser);
          this.login();
      },
        
        err => {console.log(err); }
      );
  }
  login(){
    // alert("In Login")
    this.userRegisterserve.login('TestToken');
    // this.userloginserve.login(this.NewUser.Email)
  }

  Logout(){
    // alert("logout");
    this.userRegisterserve.logout();
  }


}



