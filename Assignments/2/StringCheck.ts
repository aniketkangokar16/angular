
// StringCheck.ts:3:14 - error TS2550: Property 'includes' does not exist on type 'string'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.
//if(strVal.includes("Marvellous"))
//If I run online it is giving proper output

function ChkString(strVal:string):boolean
{
   if(strVal.includes("Marvellous"))
    return true;
    else
    return false;
}


var isContain:boolean;
isContain=ChkString("Pune Kothrud Infosystems");

if(isContain)
 console.log("String contains Marvellous in it");
 else
 console.log("String does not contain Marvellous in it");


// StringCheck.ts:3:14 - error TS2550: Property 'includes' does not exist on type 'string'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.
//if(strVal.includes("Marvellous"))
//If I run online it is giving proper output



 