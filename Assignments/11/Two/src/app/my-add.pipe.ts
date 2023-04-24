import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value1: number, value2:number ): number 
  {
      let addition:number=0;
      addition=value1+value2;
      return addition;
  }

}
