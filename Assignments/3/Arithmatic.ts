class ArithmaticOperation
{
    Number1:number=0;
    Number2:number=0;
   
    public constructor(Value1:number,Value2:number)
    {
        this.Number1=Value1;
        this.Number2=Value2;
    }
   
    Addition():number
    {
        return this.Number1+this.Number2;
    }
   
    Substraction():number
    {
        return this.Number1-this.Number2;
    }
   
    Multiplication():number
    {
        return this.Number1*this.Number2;
    }
   
    Division():number
    {
        return this.Number1*this.Number2;
    }
}

var obj=new ArithmaticOperation(20,10);
var ret = obj.Addition();

console.log("Addition is "+ret);

var ret = obj.Substraction();
console.log("Substraction is "+ret);

var ret = obj.Multiplication();
console.log("Multiplication is "+ret);

var ret = obj.Division();
console.log("Division is "+ret);