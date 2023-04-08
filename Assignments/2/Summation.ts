function Summation(numberlist: number[]):number
{
  var cnt:number=0;
 
  var sum:number=0

  for(cnt;cnt<numberlist.length;cnt++)
  {
     sum=sum+numberlist[cnt];
  }

  return sum;
}

var numberArray:number[]=[23,6,7,4,5,7];

var ret:number=0

ret=Summation(numberArray);

console.log("Addition is "+ret);