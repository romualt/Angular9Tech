import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';


@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

 @Input() personnes : Personne[];

 @Output() selectedPersonne = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  selectPersonne(selectedPersonne){
    this.selectedPersonne.emit(selectedPersonne);
  }
}
