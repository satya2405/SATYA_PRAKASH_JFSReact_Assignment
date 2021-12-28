
// Arrow Function & Converting array string into Array Onject
const convertArrayToObj = (arr) => {
    let objectArray = [];
    arr.forEach((element) => {
        var tempObj = {
            name: element, 
            length: element.length
        };
        objectArray.push(tempObj);
    });
    return objectArray;
} 

let myArrayStr = ['Hello', 'How', 'Mahrashtra', 'Mumbai', 'to'];
convertArrayToObj(myArrayStr);

