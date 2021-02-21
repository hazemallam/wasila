import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }
    

    // (<any>$('.main-carousel')).flickity({
    //     cellAlign: 'right',
    //     contain: true
    // });
  }
  auth():boolean{
     let value =  localStorage.getItem('TestToken')? true :false;
    return value;
  }

}
