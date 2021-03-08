import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // paypal:any;
  constructor(public translate: TranslateService, private router: Router) { }
 
  @ViewChild('payPalRef', {static : true}) private payPalRef? : ElementRef;
  ngOnInit(): void {
    console.log(window.paypal)
    window.paypal.Buttons({
      style:{
        layout:'horizontal',
        color:'blue',
        label:'paypal',
        shape:'pill',
        size:'responsive',
        tagline:'false'
      },
      createOrder : (data:any, action:any)=>{
        return action.order.create({
          purchase_units: [{
            amount: {
              value: '9.99',
              currency_code:'USD',
            }
          }]
        })
      },
      onApprove: function(data:any, actions:any) {
        return actions.order.capture().then(function(details:any) {
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }

    }).render(this.payPalRef?.nativeElement)
    
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }

    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 300); 
    if (!localStorage.getItem('foo2')) {
      localStorage.setItem('foo2', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo2')
    }

    AOS.init();
    
  }

  

  auth():boolean{
     let value =  localStorage.getItem('UserToken')? true :false;
    return value;
  }

}
