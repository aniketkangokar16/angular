class Circle
{
    radious:number;
    PI:number=3.14;

    constructor(r:number)
    {
        this.radious=r;
    }

    Area():number
    {
       return this.PI*this.radious*this.radious;
    }
}

class CircleX extends Circle
{
    constructor(data:number)
    {
       super(data);
    }

    CalculateCircumference():number
    {
        return 2*this.PI*this.radious;
    }
}

var objCircle=new CircleX(12);
var ret:number=0;
ret=objCircle.Area();
console.log("Area of circle is "+ret);

ret=objCircle.CalculateCircumference();
console.log("Circumference of circle is "+ret);