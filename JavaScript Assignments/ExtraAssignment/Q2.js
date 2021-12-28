// Largest element in the list

function findLargest(arr){
    var largest = arr[0];
    arr.forEach(num => {
        if(num > largest) {
            largest = num;
        }
    });
    return largest;
}

findLargest([25, 568, 45123, 0, -85, 75, 1])