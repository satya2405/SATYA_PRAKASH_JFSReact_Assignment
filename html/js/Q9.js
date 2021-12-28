// getting array from user
function getUserArray(myArray, arraySize) {
    for(i=0; i<arraySize; i++){
        myArray[i] = window.prompt("Enter " + i + " value for array");
    }  
}

// concatnation alternatively
function concateAlternateArray(array1, array2){
    var result = [];
    var array1size = array1.length;
    var array2size = array2.length;
    var maxSize;
    if(array2size > array1size){
        maxSize = array2size;
    }else{
        maxSize = array1size;
    }
    for(var i=0; i<maxSize; i++ ){
        if (i<array1size) {
            result.push(array1[i]);
        } 
        if (i<array2size) {
            result.push(array2[i]);
        } 
    }
    console.log(result)
}


// ////////////////////////

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

concateAlternateArray(array1, array2);

