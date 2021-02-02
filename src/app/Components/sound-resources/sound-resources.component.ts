import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { SoundResourcesServiceService } from 'src/app/Services/SoundResources/sound-resources-service.service';
import { SoundResourcesAlbumsInterface, SoundResourcesInterface } from 'src/app/ViewModels/SoundResources/sound-resources-interface';

@Component({
  selector: 'app-sound-resources',
  templateUrl: './sound-resources.component.html',
  styleUrls: ['./sound-resources.component.scss']
})
export class SoundResourcesComponent implements OnInit {

  albums : SoundResourcesAlbumsInterface[] = []
  sounds : SoundResourcesInterface[] = []
  subscription : Subscription | null = null;
  subscription2 : Subscription | null = null;
  constructor(private album : SoundResourcesServiceService,
    private sound : SoundResourcesServiceService) { }

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
    // });
      
      this.subscription = this.album.getAllSoundResourcesAlbuums().subscribe(
        (response)=>{
          this.albums = response;
          
        },
        (err)=>{console.log(err)}
      )
      this.subscription2 = this.sound.getAllSoundResources().subscribe(
        (response)=>{
          this.sounds = response;
          console.log(this.sounds)
          
        },
        (err)=>{console.log(err)}
      )
      
  }

  

}
