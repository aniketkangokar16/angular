var arr:number[]=[23,89,6];

var cnt:number=0;

var maxNumber:number=0;

if(arr[0]>arr[1])
{
   maxNumber=arr[0];
}
else
{
  maxNumber=arr[1];
}

if(arr[2]>maxNumber)
{
   maxNumber=arr[2];
}
   
console.log("Maximum number is :"+maxNumber);