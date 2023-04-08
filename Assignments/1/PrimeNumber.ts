function CheckPrime(No1:number):boolean
{
    let cnt:number=2;
    let  cntCheck:number=0;

    for(cnt;cnt<No1;cnt++)
    {
        if(No1%cnt==0)
        {
           cntCheck++;
        }
    }

    if(cntCheck==0)
    return true;
    else
    return false;
}

let flag:boolean;

flag=CheckPrime(17);

if(flag)
console.log("Number is prime")
else
console.log("Number is not prime")