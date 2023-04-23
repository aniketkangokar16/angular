import { Component,OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
   no1:number=40;
   no2:number=20;
   return:number=0;
   additionStr:string=""
   substractionStr:string=""
   constructor(public aobj:ArithmeticService)
   {
     aobj.Addition(this.no1,this.no2)
     aobj.Substraction(this.no1,this.no2)
   }

   ngOnInit() 
   {
    this.return=this.aobj.Addition(this.no1,this.no2);
    this.additionStr="Addition of "+this.no1 +" and "+this.no2+" is "+this.return;
    this.return=this.aobj.Substraction(this.no1,this.no2);
    this.substractionStr="Substraction of "+this.no1 +" and "+this.no2+" is "+this.return;
   }
}


