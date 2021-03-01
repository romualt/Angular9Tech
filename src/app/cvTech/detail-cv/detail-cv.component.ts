import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne: Personne;

  constructor(private embaucheService : EmbaucheService,
              private router : Router) { }

  ngOnInit() {
  }

  embauche(): void{
    this.embaucheService.embauche(this.personne);
  }

  debauche(): void{
    this.embaucheService.debauche(this.personne);
  }
  
  moreInfo(): void{
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }
}
