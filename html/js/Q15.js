
// Question 15

// Swapping
function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

// Sorting
function bubble_Sort(arr) {
  var len = arr.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// getting array from user
function getUserArray(myArray, arraySize) {
  for (i = 0; i < arraySize; i++) {
    myArray[i] = parseInt(window.prompt("Enter " + i + " value for array"));
  }
}
var arraysize = window.prompt("Enter array size : ");
var myarray = new Array(arraysize);
getUserArray(myarray, arraysize);
console.log(bubble_Sort(myarray));
