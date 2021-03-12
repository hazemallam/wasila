import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Icart } from 'src/app/ViewModels/icart';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Icart[] = []
  constructor(private http: HttpClient, private router: Router) { }
  postToCart(course: Icart){
    this.http.get<Icart>(`${environment.URL}/carts?courseId=${course.courseId}`).subscribe((response)=>{
      console.log(response)
      if(response.length != 0){
        alert("Already added to cart")
      }
      else{
        this.http.post<Icart>(`${environment.URL}/carts`, course).subscribe((response)=>{
          console.log("successfully added to cart")
          this.router.navigate(['/userprofile'])
        },(erro)=>{
          console.log(erro)
        });
      }
    })
    // console.log(course)

     
  }
  getUserCart():Observable<Icart[]>{
     return this.http.get<Icart[]>(`${environment.URL}/carts?userEmail=${localStorage.getItem('UserToken')}`)
  }
  removeCart(id:number){
    this.http.delete(`${environment.URL}/carts/${id}`).subscribe((response)=>{
      alert('removed successfully')
      window.location.reload()
    });
  }
  getAllCart():Observable<Icart[]>{
    return this.http.get<Icart[]>(`${environment.URL}/carts`);
  }
}
