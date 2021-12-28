
//De-Structuring 

let animals =['Dog','Cat','Rat','Horse'];  
// let a,b,c;  
[, , ,a,] = animals;  
console.log(a);



// Object Deep Matching
let organization = {
    name: "Google",
    address:{
        street: "ABC Avenue",
        city: "New York",
        pincode: 43567
    }
}

let {address: {pincode: pincode}} = organization;

console.log("Pincode:", pincode);