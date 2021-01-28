import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motion-graphic',
  templateUrl: './motion-graphic.component.html',
  styleUrls: ['./motion-graphic.component.css']
})
export class MotionGraphicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    
    menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
  }

}
