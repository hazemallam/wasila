import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.css']
 
})
export class AppComponent {
  title = 'wasila-angular';

  constructor(public translate: TranslateService, private router : Router){

  }

  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }

 logout(){
   localStorage.removeItem('UserToken');
   console.log('logout')
    this.router.navigate(['/login'])
 }

}
