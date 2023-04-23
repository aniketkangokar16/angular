import { Component,OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  num:number=7;
  isnumberPrime:string="";

  strValue:string="marVLLOUSINFOsystems";
  outPutValue:string="";
   
  constructor(public nObj:NumberService,public sObj:StringService)
  {
      nObj.ChkPrime(this.num);
      sObj.CountCapital(this.strValue);
  }

  ngOnInit(): void 
  {
    let flag : boolean= this.nObj.ChkPrime(this.num);

    if(flag)
    {
      this.isnumberPrime="The given number "+this.num+ " is Prime"
    }
    else
    {
      this.isnumberPrime="The given number "+this.num+ " is not Prime"
    }

    let countString:number=0;

    countString = this.sObj.CountCapital(this.strValue);

    this.outPutValue="Capital letter count in given string "+"("+this.strValue+") is "+countString;
  }
}
