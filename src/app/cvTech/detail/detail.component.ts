import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne : Personne;
  constructor(private cvService : CvService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.cvService.getPersonneById(params.id).subscribe(
          (data)=>{this.personne = data;}
        ) ;
      }
    );
  }
  updatePersonne(){
      const link = ['cv/update', this.personne.id];
      this.router.navigate(link);   
  }

  deletePersonne(){
    this.cvService.delete(this.personne.id).subscribe(
      (data)=>{
        const link = ['cv'];
        this.router.navigate(link);        
      },
      (error)=>{console.log(error);
      }
    );
  }
}
