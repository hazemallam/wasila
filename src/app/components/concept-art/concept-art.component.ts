import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';

@Component({
  selector: 'app-concept-art',
  templateUrl: './concept-art.component.html',
  styleUrls: ['./concept-art.component.scss']
})
export class ConceptArtComponent implements OnInit {
  cart:Icart = {};
  constructor(private userCart: CartService) { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }

    AOS.init();
    
  }
  addToCart(image:string, name:string){
    let email = localStorage.getItem('UserToken')
  this.cart = {name:name, userEmail:email as string, image:image}
  this.userCart.postToCart(this.cart);
  }
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
