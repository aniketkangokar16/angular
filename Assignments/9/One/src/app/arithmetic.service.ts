import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  Addition(no1:number,no2:number):number
  {
      return no1+no2;
  }

  Substraction(no1:number,no2:number):number
  {
      return no1-no2;
  }
}
