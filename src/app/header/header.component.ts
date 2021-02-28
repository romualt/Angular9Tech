import { Component, OnInit } from '@angular/core';
import { AuthetificationService } from '../authetification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility : boolean=false;
  constructor(public authentificationService : AuthetificationService,
              private router : Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authentificationService.logOut();
    const link = ['login'];
    this.router.navigate(link);
  }

  show(){
      this.visibility = ! this.visibility;
  }
}
