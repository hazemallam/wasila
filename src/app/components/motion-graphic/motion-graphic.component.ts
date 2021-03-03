import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motion-graphic',
  templateUrl: './motion-graphic.component.html',
  styleUrls: ['./motion-graphic.component.scss']
})
export class MotionGraphicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    } 
   
  }
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
