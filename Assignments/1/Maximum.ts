function Maximum(NumberList:number[]):number
{
    let cnt:number=0;

    for(cnt;cnt<NumberList.length;cnt++)
    {
       if(NumberList[0]<NumberList[cnt])
       {
        NumberList[0]=NumberList[cnt]
       }
    }

    return NumberList[0];
}

var numbers:number[] =[23,89,6,29,56,45,77,32];

var ret=Maximum(numbers);

console.log("Maximum number is "+ret);