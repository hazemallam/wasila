import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/Courses/courses.service'
import { Icourses } from 'src/app/ViewModels/icourses';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  courses:Icourses[]=[]
  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(['/graphic'])
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
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
