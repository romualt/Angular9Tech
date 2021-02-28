import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthetificationService {
  link : string = 'http://localhost:3000/api/Users';

  constructor(private http : HttpClient) { }

  isLogged(){
    return (!! localStorage.getItem('token'));
  }

  login(credentials):Observable<any>{
    console.log(credentials);
    return this.http.post(this.link+`/login`, credentials);
  }
  
  logOut(){
    localStorage.removeItem('token');
  }
}
