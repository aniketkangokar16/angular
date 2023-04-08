function Area(Radius:number) : number
{
    let area:number=0;

    let PI:number=3.14;

    area=PI*Radius*Radius;

    return area;
}

var ret:number=0;

ret=Area(5);

console.log("Area of circle is "+ret);