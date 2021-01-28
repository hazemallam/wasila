import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concept-art',
  templateUrl: './concept-art.component.html',
  styleUrls: ['./concept-art.component.css']
})
export class ConceptArtComponent implements OnInit {

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
