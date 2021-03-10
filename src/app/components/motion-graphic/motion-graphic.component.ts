import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';

@Component({
  selector: 'app-motion-graphic',
  templateUrl: './motion-graphic.component.html',
  styleUrls: ['./motion-graphic.component.scss']
})
export class MotionGraphicComponent implements OnInit {
  cart:Icart = {};
  constructor(private userCart: CartService, private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(['/motion'])
    }, 300); 
    if (!localStorage.getItem('foo2')) {
      localStorage.setItem('foo2', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo2')
    }

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
