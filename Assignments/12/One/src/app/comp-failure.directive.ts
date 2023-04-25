import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public eobj:ElementRef) 
  {

  }

  @HostListener('mouseover')onmouseover()
  {
     this.eobj.nativeElement.style.color='Red';
  }

  @HostListener('mouseleave')onmouseleave()
  {
     this.eobj.nativeElement.style.color='Black';
  }

}
