import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component implements OnInit
{
   strValue:string="MarveLLOUSAndInFOSysTEM";

   outPutValue:string="";

   constructor(public cObj:StringService)
   {
     cObj.CountCapital(this.strValue);
   }
  
   ngOnInit(): void 
   {
    
    let countString:number=0;

    countString = this.cObj.CountCapital(this.strValue);

    this.outPutValue="Capital letter count in given string "+"("+this.strValue+") is "+countString;
   }
}
