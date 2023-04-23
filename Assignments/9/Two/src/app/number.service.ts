import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(no:number):boolean
  {
     let cnt:number=2;

     let countCheck:number=0;

      for(cnt;cnt<no;cnt++)
      {
          if(no%cnt==0)
          {
            countCheck++;
          }
      }
     
      if(countCheck==0)
      return true;
      else
      return false;
  }
}
