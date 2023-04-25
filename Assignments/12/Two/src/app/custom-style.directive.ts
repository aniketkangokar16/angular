import { Directive, ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective implements OnInit
{

  constructor(public eobj:ElementRef) 
  { 


  }

  ngOnInit(): void 
  {
     this.eobj.nativeElement.style.backgroundColor='Yellow';
     this.eobj.nativeElement.style.font='italic bold 60px arial,serif';

  }

}
