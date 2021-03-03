import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery'
import { Subscription } from 'rxjs';
import { VideoResourcesServiceService } from 'src/app/Services/VideoResources/video-resources-service.service';
import { VideoResourcesAlbumsInterface, VideoResourcesInterface } from 'src/app/ViewModels/VideoResources/video-resources-interface';
@Component({
  selector: 'app-video-resources',
  templateUrl: './video-resources.component.html',
  styleUrls: ['./video-resources.component.scss']
})
export class VideoResourcesComponent implements OnInit{

  videos : VideoResourcesInterface[] = []
  subscription : Subscription | null = null;

  
  constructor( private video : VideoResourcesServiceService, private router :Router) { }


  ngOnInit(): void {

    
    setTimeout(() => {
      this.router.navigate(['/videores'])
    }, 300);
    if (!localStorage.getItem('foo1')) {
      localStorage.setItem('foo1', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo1')
    }


    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      
    menu.addEventListener('click', function(){
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
  });
    }

      this.subscription = this.video.getAllVideoResources().subscribe(
        (response)=>{
          this.videos = response;
          console.log(this.videos)
          
        },
        (err)=>{console.log(err)}
      )

  }

  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }



}
