import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne'; 
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

   personnes: Personne[];

   selectedPersonne: Personne;

  constructor(private cvService : CvService) { }

  ngOnInit() {
     this.cvService.getPersonnes().subscribe(
       (data)=>{
         this.personnes = data; 
       },
       (error)=>{
         alert("problème à l'accès affichage données locales")
         this.personnes = this.cvService.getFakePersonne();
       }
     );
    }

    selectPersonne(selectedPersonne){
      this.selectedPersonne = selectedPersonne;
    }
}
