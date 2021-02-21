import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Login } from '../../ViewModels/Login/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
    
  }
  getAllUserLogin(): Observable <Login[]>
  {
    return this.http.get<Login[]>(`${environment.URL}/users`);
  }

  
  login(Token: string){
    // alert (Token);
    localStorage.setItem('UserToken', Token);
  }

  logout(){
    localStorage.removeItem('UserToken');
  }

  isLogged(): boolean {
    if (localStorage.getItem('UserToken')) {
      return true ;
      
    }
    else {
      return false;
    }
  }
  addUserLogin(prd: Login):Observable<any>
{
  console.log(prd);
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //,'Accept':' */*'
    //,'Authorization': 'my-auth-token'
      })};
    
  return this.http.post<any>(`${environment.URL}/users`,prd, httpOptions);
}
}

