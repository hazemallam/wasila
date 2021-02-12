import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/Courses/courses.service'
import { Icourses } from 'src/app/ViewModels/icourses';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  courses:Icourses[]=[]
  constructor(private coursesService: CoursesService) {}

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
    
  }

}
