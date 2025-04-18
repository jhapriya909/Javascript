function convertToNumber(input)
{
    try{
        let number = Number(input);

        if(isinvalidinput(number))
        {
            throw new error ("Invalid number input!")
            
        }
        console.log("converted number:",number)
        // return number;
    }
    catch(error)
    {
       console.log("error:", error.message)
    }

 }
 //Example Expected Behavior:

 convertToNumber("42") //should log or return 42.


convertToNumber("hello") //should log "Error: Invalid number input!"
 