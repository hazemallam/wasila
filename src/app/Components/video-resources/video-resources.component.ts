import { AfterViewInit, Component, OnInit } from '@angular/core';
// import * as $ from 'jquery'
import { Subscription } from 'rxjs';
import { VideoResourcesServiceService } from 'src/app/Services/VideoResources/video-resources-service.service';
import { VideoResourcesAlbumsInterface, VideoResourcesInterface } from 'src/app/ViewModels/VideoResources/video-resources-interface';
@Component({
  selector: 'app-video-resources',
  templateUrl: './video-resources.component.html',
  styleUrls: ['./video-resources.component.scss']
})
export class VideoResourcesComponent implements OnInit, AfterViewInit {

  albums : VideoResourcesAlbumsInterface[] = []
  videos : VideoResourcesInterface[] = []
  subscription : Subscription | null = null;
  subscription2 : Subscription | null = null;
  
  constructor(private album : VideoResourcesServiceService,
    private video : VideoResourcesServiceService) { }

  ngAfterViewInit(): void {
    
    // (<any>$('.main-carousel')).flickity({
    //   cellAlign: 'right',
    //   contain: true
    // });
  }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      
    menu.addEventListener('click', function(){
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
  });
    }

   

  

      this.subscription = this.album.getAllVideoResourcesAlbums().subscribe(
        (response)=>{
          this.albums = response;
          console.log(response)
        },
        (err)=>{console.log(err)}
      )
      this.subscription2 = this.video.getAllVideoResources().subscribe(
        (response)=>{
          this.videos = response;
          console.log(this.videos)
          
        },
        (err)=>{console.log(err)}
      )
      // $('').flickity( 'append', this.albums )
      // this.flkty.prepend(this.albums)
  }


}
