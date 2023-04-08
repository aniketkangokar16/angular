function MaximumSecond(NumberList:number[]):number
{
     NumberList.sort();

     var secondLargest:number=0;

     let cnt:number=0;
     
     let length:number=NumberList.length;

     for(cnt=length-2;cnt>=0;cnt--)
    {
     if(NumberList[cnt]!=NumberList[length-1])
      secondLargest = NumberList[cnt];
      break;
    }
    return secondLargest;
}

var numbers:number[] =[23,89,6,29,56,45,77,32];

var ret=MaximumSecond(numbers);

console.log("Second Maximum number is "+ret);