import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform 
{
  transform(value: number, strValue:string ): string 
  {
    let answer:string="";
    
    if(strValue=="Prime")
    { 
      let cnt:number=2;
      let cntCheck:number=0;
      for(cnt;cnt<value;cnt++)
      {
        if(value%cnt)
        {
          cntCheck++;
        }
      }

      if(cntCheck==0)
      answer=value+" Number is Prime";
      else
      answer=value+" Number is not Prime";

    }
    else if(strValue=="Perfect")
    {
      let sum:number=0;
      let rem:number=0;
      let cnt:number=0;
      for(cnt;cnt<value;cnt++)
      {
        rem=value%cnt;
        if(rem==0)
        {
          sum=sum+cnt;
        }
      }
      
      if(sum==value)
      {
        answer=value+" Number is Perfect";
      }
      else
      {
        answer=value+" Number is not Perfect";
      }
    }
    else if(strValue=="Even")
    {
       if(value%2==0)
       answer=value+" Number is Even"
       else
       answer=value+" Number is not Even"
    }
    else if(strValue=="Odd")
    {
      if(value%2==0)
      answer=value+" Number is not Odd"
      else
      answer=value+" Number is Odd"
    }

    return answer;
  }

}
