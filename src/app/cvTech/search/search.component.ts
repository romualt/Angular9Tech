import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Personne } from 'src/app/Model/Personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chaine : string="";
  searchResult : Personne[];
  constructor(private cvService : CvService,
              private router : Router) { }

  ngOnInit() {
    this.searchResult = [];
  }

  search(){
    if(this.chaine.trim().length){
   
      this.cvService.findbyName(this.chaine.trim()).subscribe(
        (data)=>{
          this.searchResult = data;
        }
      );
    }
    else 
    this.searchResult = [];
  }  
  selectPersonne(personne){
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];//suprimer le resultat de la recherche
    this.chaine="";
  }
}
