import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  carts:Icart[] = []
  cartsLoaded$?:Promise<boolean>;
  render:boolean = false
  constructor(private router: Router, private userCart: CartService, private translate : TranslateService) {
    this.cartsLoaded$ = Promise.resolve(false);

   }
  
  
  

  ngOnInit() {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }

    setTimeout(() => {
      this.router.navigate(['/userprofile'])
    }, 300); 
    if (!localStorage.getItem('foo2')) {
      localStorage.setItem('foo2', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo2')
    }

    this.fetchData();
    // console.log(this.render)
    // this.filterData()
  }
   fetchData(){
     this.userCart.getUserCart().subscribe((response)=>{
      this.carts = response
      this.cartsLoaded$ = Promise.resolve(true);
      this.render = true;
      // console.log(this.carts)
    })
  }
  removeFromCart(id:number){
    this.userCart.removeCart(id);
  }
  filterData(){
    this.userCart.getAllCart().subscribe((response)=>{
      this.render = true;
      this.carts = response.filter((cart)=>{ 
        return cart.userEmail = localStorage.getItem('UserToken') as string
      })
    })
  }

  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }
}
