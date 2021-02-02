import { Component, OnInit,  } from '@angular/core';
import { AlumniModel } from 'src/app/ViewModels/alumni-model';
import { AlumniService } from 'src/app/services/alumni.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


import * as $ from 'jquery';
@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {
  alumniList: AlumniModel[]=[];
  subscribtion: Subscription| null =null;

  constructor(private alumService: AlumniService
     , private router: Router) { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }
    // (<any>$('.main-carousel')).flickity({
    //     cellAlign: 'right',
    //     contain: true
    //   });

      this.subscribtion= this.alumService.getAllAlumni().subscribe(
        (response)=>{
          console.log("in subscribe");
          this.alumniList=response;
          console.log(this.alumniList[1].name);
        },
        (err)=>{console.log(err)}
      );
  
      console.log("After subscribe");
   }
}

