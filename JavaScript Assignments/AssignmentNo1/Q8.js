// **********************************************************************

//Question 8
var array1 = ["hello", 'hi', 'a'];
var array2 = [1, 2, 3];
console.log(array1.concat(array2));

// ##########################################** OR **##################################################

// getting array from user
function getUserArray(myArray, arraySize) {
    for(i=0; i<arraySize; i++){
        myArray[i] = window.prompt("Enter " + i + " value for array");
    }  
}

var array1size = window.prompt("Enter array1 size : ");
var array1 = new Array(array1size);
console.log("Array 1 is: ");
getUserArray(array1, array1size);
console.log(array1);

var array2size = window.prompt("Enter array2 size : ");
var array2 = new Array(array2size);
console.log("Array 2 is: ");
getUserArray(array2, array2size);
console.log(array2);

// concatnation
console.log(array1.concat(array2));



