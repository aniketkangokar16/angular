import { Component,OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit
{
  num:number=16;
  isnumberPrime:string="";
  constructor(public nobj :NumberService)
  {
    this.nobj.ChkPrime(this.num);
  }

  ngOnInit(): void 
  {
    let flag : boolean= this.nobj.ChkPrime(this.num);

    if(flag)
    {
      this.isnumberPrime="The given number "+this.num+ " is Prime"
    }
    else
    {
      this.isnumberPrime="The given number "+this.num+ " is not Prime"
    }
  }
}
