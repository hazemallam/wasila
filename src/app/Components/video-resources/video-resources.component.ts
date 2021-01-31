import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-video-resources',
  templateUrl: './video-resources.component.html',
  styleUrls: ['./video-resources.component.scss']
})
export class VideoResourcesComponent implements OnInit {

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

    (<any>$('.main-carousel')).flickity({
        cellAlign: 'right',
        contain: true
      });
  }

}
