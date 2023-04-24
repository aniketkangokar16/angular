import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform 
{

  transform(value:string): string 
  {
    let temp:string="";
    let cnt:number=value.length-1;

    for(cnt;cnt>0;cnt--)
    {
        temp=temp+value[cnt]
    }

    return temp;
  }

}
