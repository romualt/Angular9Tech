 import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg = 'red';
   
  constructor() { }
  @HostListener('mouseenter') mouseenter(){
    this.bg = 'yellow';
  }

  @HostListener('mouseleave') mouselease(){
    this.bg = 'red';
  }
}
