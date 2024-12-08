// Q.NO:11 normal function
function multiply(a,b){
    return a*b
}
console.log(multiply(5,3));
console.log("------ Arrow function-------");
 const multiply1=(a,b)=>a*b;
 console.log(multiply1(3,4));
 console.log("------ Arrow function with default values-------");
 const multiply2=(a=1,b=1)=>a*b; //default values
 console.log(multiply2());
 

