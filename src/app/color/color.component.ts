import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {
  color = "grey";
  constructor(private premierService : PremierService,
              private router: Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.color = params['default'];
      }
    )
  }

 /*  changeColor(input){
    console.log(input.value);
    this.color = input.value;
    input.value = "";
  } */
  loggerMesData(){
    this.premierService.logger("test");
  }
  processRequest(message : any){
    alert(message);
  }
  goToCv(){
    const link = ['cv'];
    this.router.navigate(link);
  }
}
