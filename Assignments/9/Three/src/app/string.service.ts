import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(inputStr:string):number
  {
      let strLength:number=inputStr.length;

      let cnt:number=0;

      let capitalLetterCounter:number=0;

      for(cnt=0;cnt<strLength;cnt++)
      {
         if(inputStr[cnt]==inputStr[cnt].toUpperCase())
         capitalLetterCounter++;

      }
      return capitalLetterCounter;
  }
}
