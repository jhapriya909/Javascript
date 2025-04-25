
const userAge = 24;

const isSchoolStudent = (userAge >= 5) && (userAge <=18);

const isCollegeStudent = (userAge >= 18) && (userAge <=24);

console.log(isCollegeStudent);



const isStudent = isSchoolStudent || isCollegeStudent


const andResult = Boolean("" && "hello1");


const orResult  = Boolean("" || "Hello2");




const addResult1 = Boolean('Hello1' && null); //false
const addResult2 = Boolean('Hello2' || null); //true


const addResult3 = Boolean('Hello' && 4+4); //zero
const orResult3  = Boolean('Hello' || 4+8*5);



