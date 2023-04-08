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

var objCircleOne = new Circle(11);
var ret:number=0;
ret =objCircleOne.Area();
console.log("Area of circle is "+ret);

var objCircleTwo = new Circle(40);
ret =objCircleTwo.Area();
console.log("Area of circle is "+ret);