
//Checking Variable Scope  

function myHalfName(name){
    if(name=="Priyanka"|| name=="Priya") {
    let message = "Hii, Priya!!!";
    console.log(message); // Output: Hii, Priya!!!
     }
 console.log(message); // Output: Uncaught ReferenceError: message is not defined
 }

 myHalfName("Priya");