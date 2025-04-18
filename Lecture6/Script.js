try{
    console.log("Try block start here");
    console.log(a);   // error show beacause vale of a is not defined
    console.log("Try blocks end here");
}
catch(error)
{
    console.log("i am inside catch block");
    console.log("message error",error);
}
// catch(error)
// {
//     console.log(" catch block");
//     console.log("message error",error);
// }

finally{
    console.log("i will  run everytime");
}