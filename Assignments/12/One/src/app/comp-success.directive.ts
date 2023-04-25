import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public eobj:ElementRef) 
  { 

  }

  @HostListener('mouseover')onmouseover()
  {
    this.eobj.nativeElement.style.color='green';
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobj.nativeElement.style.color='black';
  }

}
