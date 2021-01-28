import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threed-art',
  templateUrl: './threed-art.component.html',
  styleUrls: ['./threed-art.component.css']
})
export class ThreedArtComponent implements OnInit {

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
