import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[];
  constructor() {
    this.personnes = [];
   }

   getPersonneEmbauche() : Personne[] {
      return this.personnes;
   }

   embauche(personne : Personne) : void{
     const index = this.personnes.indexOf(personne);
    if(index<0){
      this.personnes.push(personne);
    }
    else {
      alert(`${personne.name} est deja selectionnée`) ;
    }
   }

   debauche(personne): void{
    const index = this.personnes.indexOf(personne);
    if(index>=0){
      this.personnes.splice(index, 1);
    }
    else {
      alert(`${personne.name} est débauchée`) ;
    }
   }
}
