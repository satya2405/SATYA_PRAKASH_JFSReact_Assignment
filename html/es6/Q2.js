
//Checking Variable Scope  

function myHalfName(name){
    if(name=="satya"|| name=="nsp") {
    let message = "Hii, nsp!!!";
    console.log(message); // Output: Hii, satya!!!
     }
 console.log(message); // Output: Uncaught ReferenceError: message is not defined
 }

 myHalfName("nsp");