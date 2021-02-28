import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
 show = true;
  team = [
    'est',
    'om',
    'psg',
    'barca'
  ]
  est = false;
  milan = true;
  barca = false;
  constructor() { }

  ngOnInit() {
  }

  changeTeam(team){
    this.est= true;
    this.barca=false;
    this.milan=false;
    
  }
}
