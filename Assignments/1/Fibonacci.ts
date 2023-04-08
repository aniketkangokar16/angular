function Fibonacci(No:number):void
{
  let No1:number=1;

  let No2:number=1;

  let No3:number;

  let cnt:number=2;

  let series:string;

  series=No1+","+No2;

  console.log(series);

  for(cnt;cnt<No;cnt++)
  {
     No3=No1+No2;

     series=series+","+No3;

     if(No3==No)
     break;

     No1=No2;

     No2=No3;

  }

  console.log(series);

}

Fibonacci(21);