import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes : Personne[];
   link : string='http://localhost:3000/api/personnes';
   token : string=localStorage.getItem('token');
  constructor(private http : HttpClient) { 
     this.personnes = [
      new Personne(1, "franklin romualt", "franklin", 39, "rfk.jpg", 77777, "trainer"),
      new Personne(2, "mweke", "l'agathe", 30, "rotating_card_profile.png", 56231, "Chef projet"),
      new Personne(3, "tchikangoua", "armelle", 34, "tim_logo.png", 20777, "caller"),
      new Personne(4, "kalt bern", "jeannete", 66, "", 1202, "menagere")
    ];  

  }

  getPersonnes(): Observable<Personne[]>{  
     return this.http.get<Personne[]>(this.link);
  }

  getFakePersonne() : Personne[]{
    return this.personnes;
  }

  getPersonneById(id: number): Observable<Personne>{
     /*const personne = this.personnes.find(personne=>{
       return personne.id==id;
     });
     return personne;*/
     return this.http.get<Personne>(this.link+`/${id}`);
  }

  getMaxIdPersonne(): number{
    return Math.max.apply(Math, this.personnes.map(function(personne) { 
      return personne.id; 
    })
    );
  }
  
  add(personne : Personne) : Observable<any> {
    var result : string;
   /* const personneFound = this.personnes.find(personToSearch=>{
      return personToSearch.name == personne.name
      && personToSearch.firstname == personne.firstname
      && personToSearch.age == personne.age
      && personToSearch.cin == personne.cin
    });
    
   if(personneFound == undefined){
     personne.id = this.getMaxIdPersonne() + 1;
     this.personnes.push(personne);
     result="success";
   }
   else {
     result=`${personne.name} est deja existante en Cvthèque`;     
   }
   if(this.token){
     const params = new HttpParams().set('access_token', "this.token");
     return this.http.post(this.link, personne, {params});
     
   }*/
   return this.http.post(this.link, personne);
   //return result;
  }

  update(personne : Personne) : Observable<any>{
    return this.http.put(this.link, personne);
  }

  delete(id) : Observable<any>{
   /*const index = this.personnes.indexOf(personne);
   if(index>=0){
     this.personnes.splice(index, 1);
   }
   else {
     alert(`${personne.name} est deja supprimé de la Cvthèque`) ;
   }*/
   return this.http.delete(this.link+`/${id}`);
  }

  findbyName(name) : Observable<Personne[]>{

    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;

    const params = new HttpParams().set('filter', filter)  ;

    return this.http.get<Personne[]>(this.link, {params});
  }
}
