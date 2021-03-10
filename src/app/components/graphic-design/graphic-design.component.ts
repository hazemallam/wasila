import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/Courses/courses.service'
import { Icourses } from 'src/app/ViewModels/icourses';
import * as AOS from 'aos';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  courses:Icourses[]=[]
  cart:Icart = {};
  constructor(private coursesService: CoursesService, private userCart: CartService) {}

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    
    this.coursesService.getCourses().subscribe((response) => {
      this.courses = response
      console.log('courses', response)
    },
    (error)=> {
      console.log(error)
    })
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
