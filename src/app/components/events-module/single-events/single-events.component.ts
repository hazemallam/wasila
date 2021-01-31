import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-events',
  templateUrl: './single-events.component.html',
  styleUrls: ['./single-events.component.scss']
})
export class SingleEventsComponent implements OnInit {

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

}
