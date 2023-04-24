import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value1:number,value2:number ): number 
  {
    let answer=value1*value2;
    return answer;
  }

}
