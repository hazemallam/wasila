import { Component, OnInit } from '@angular/core';
import {Minicourse} from 'src/app/ViewModels/minicourse'
import {MiniCoursesService} from 'src/app/Services/mini-courses.service'
import { Subscription } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-mini-courses',
  templateUrl: './mini-courses.component.html',
  styleUrls: ['./mini-courses.component.scss']
})
export class MiniCoursesComponent implements OnInit {

  miniCourses : Minicourse[] = []
  subscription : Subscription | null = null;
  p: number = 1;


  constructor(private course : MiniCoursesService,) { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    } 
    this.subscription = this.course.getAllCourses().subscribe(
      (response)=>{
        this.miniCourses = response;
        
      },
      (err)=>{console.log(err)}
    )

    AOS.init();
    
  }
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
