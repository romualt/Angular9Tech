import { Component, OnInit } from '@angular/core';
import { AuthetificationService } from '../authetification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private authetificationService : AuthetificationService,
              private router : Router) { }

  ngOnInit() {

  }
  login(credentials){  
    this.authetificationService.login(credentials).subscribe(
      (data)=>{
          const token = data.id;
          const link = ['cv']
          localStorage.setItem('token', token) ;
          this.router.navigate(link);
      },
      (error)=>{
        
      }
    );
  }
}
