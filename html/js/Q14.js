
// Question No 14
function findLargest(randomValuesArray) {
  var largeNo = randomValuesArray[0];

  for (var i = 0; i < randomValuesArray.length; i++) {
    if (largeNo < randomValuesArray[i]) {
      largeNo = randomValuesArray[i];
    }
  }
  console.log("Largest No. is: " + largeNo);
}


function findSmallest(randomValuesArray) {
  var smallNo = randomValuesArray[0];

  for (var i = 0; i < randomValuesArray.length; i++) {
    if (smallNo > randomValuesArray[i]) {
      smallNo = randomValuesArray[i];
    }
  }
  console.log("Smallest No. is: " + smallNo);
}


function evenoddCount(randomValuesArray) {
    var evenCount = 0, oddCount = 0;
  
    for (var i = 0; i < randomValuesArray.length; i++) {
        if(randomValuesArray[i]%2==0){
            evenCount++;
        }else{
            oddCount++;
        }  
    }
    if(evenCount>oddCount){
        alert("Even is larger & it's count is: " + evenCount);
    }
    else{
        alert("Odd is larger & it's count is: " + oddCount);
    }
  }
  
  function sumAndAverage(randomValuesArray) {
    var sum = 0;
  
    for (var i = 0; i < randomValuesArray.length; i++) {
      sum += randomValuesArray[i];
    }    
    console.log("Sum of all random Num. is: " + sum);
    console.log("average is: " + sum/randomValuesArray.length);
  }


const ARRAY_LENGTH = 100;
var randomValues = Array.apply(null, { length: ARRAY_LENGTH }).map((x) => Math.floor(Math.random() * 100));
findLargest(randomValues);
findSmallest(randomValues);
evenoddCount(randomValues);
sumAndAverage(randomValues);