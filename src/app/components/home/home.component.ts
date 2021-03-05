import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService, private router: Router) { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }

    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 300); 
    if (!localStorage.getItem('foo2')) {
      localStorage.setItem('foo2', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo2')
    }

    AOS.init();
    
  }
  auth():boolean{
     let value =  localStorage.getItem('UserToken')? true :false;
    return value;
  }

}
