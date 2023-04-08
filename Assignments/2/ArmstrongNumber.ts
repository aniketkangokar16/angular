var IsArmstrongNumber=function(no:number){

    var originalNumber:number;
    
    var remainder:number;
    
    var result:number=0;
    
    originalNumber = no;
    
    while (originalNumber != 0) {
          
            remainder = originalNumber % 10;
            
            result = result + (remainder * remainder * remainder);
            
           originalNumber = originalNumber/10;
    }
    console.log(no);
    console.log(result);
    
       if (result == no)
          console.log("It is a armstrong number");
        else
         console.log("It is not a armstrong number");
    
    }
    
    IsArmstrongNumber(153);