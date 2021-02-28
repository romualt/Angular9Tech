import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  message : string;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(
      (url)=>{
        this.message = url.toString();
        //this.message = this.activatedRoute.snapshot['_routerState'].url;
      }
    );
  }

}
