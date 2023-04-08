function DisplayFactors(No1:number):void
{
    let cnt:number=1;
   
    for(cnt;cnt<No1;cnt++)
    {
        if(No1%cnt==0)
        {
            console.log(cnt+" ");
        }
    }
}

DisplayFactors(20);