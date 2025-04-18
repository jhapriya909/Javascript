function divideNumbers(a , b)
{
    try {
      // check whether b is zero and throw an error with the message cannot divide by zero
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
     
        //  try block means (let uses and cost) division of a by b
        let result = a/b;
        console.log(result);
        return result;
    }
    catch(error)        //   error message
    {
        console.log("error:",error.message);
    }
        
}

//Example Expected Behavior:
divideNumbers(10,2);  //should log or return 5

divideNumbers(10,0);   //should log "Error cannot divide by zero"
