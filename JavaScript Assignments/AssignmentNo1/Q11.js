// getting array from user
function getUserArray(myArray, arraySize) {
    for(i=0; i<arraySize; i++){
        myArray[i] = window.prompt("Enter " + i + " value for array");
    }  
}

var arraysize = window.prompt("Enter array size : ");
var myarray = new Array(arraysize);
getUserArray(myarray, arraysize);
console.log("Array is: " + myarray);
console.log("Reverse Array is: " + myarray.reverse());