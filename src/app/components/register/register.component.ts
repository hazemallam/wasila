import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService } from 'src/app/Services/Register/register.service';
import { Register } from 'src/app/ViewModels/Register/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  NewUser:Register;
  constructor(private router: Router , private userRegisterserve:RegisterService ) { 
    this.NewUser={name:"", email:"",password:""} }
  ngOnInit(): void {
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
