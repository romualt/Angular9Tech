import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  personne : Personne;
  messageRetour : string;
  isMsgRetour : boolean = false;
  constructor(private cvService : CvService,
              private router : Router) { }

  ngOnInit() {
  }
  addPersonne(form: NgForm){
    this.cvService.add(form.value).subscribe(
      (data)=>{ 
        const link=['cv'];
        this.router.navigate(link); },
      (error)=>{ 
        console.log(error);
        this.messageRetour = `${form.value.name} est deja existante en Cvthèque`;
        this.isMsgRetour=true; 
      }
    );
    /*this.messageRetour = this.cvService.add(form.value);

    if(this.messageRetour=="success") {
      this.isMsgRetour=false;
      const link=['cv'];
      this.router.navigate(link);
    }
    else{
        this.isMsgRetour=true;
    }*/
  }
}
