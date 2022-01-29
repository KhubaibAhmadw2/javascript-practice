//normal function
function sum(a,b){
    return a+b;
}
console.log("sum using simple function:"+ sum(8,9));

//arrow function
let sum2=(a,b)=>a+b;
console.log("sum using arrow function:"+ sum2(5,6))

//example 2

function ispostive(number){
    return number>0; 
}
//arrow function
let ispostive2 =number =>number>0;
//No perameters 
let randomNumber=()=> Math.random;
console.log("A random number:"+randomNumber());