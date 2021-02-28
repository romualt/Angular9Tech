import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  messageRetour : string;
  personne : Personne;
  isMsgRetour : boolean=false;
  constructor(private activatedRoute : ActivatedRoute,
              private cvService : CvService,
              private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params)=>{
          
          this.cvService.getPersonneById(params.id).subscribe(
              (data)=>{
                this.personne = data;
              }
          );
        }
    );
  }
  updatePersonne(){
    this.cvService.update(this.personne).subscribe(
      (data)=>{
          const link = ['cv'];
          this.router.navigate(link);
      },
      (error)=>{
          console.log(error);
      }
    );
  }
}
