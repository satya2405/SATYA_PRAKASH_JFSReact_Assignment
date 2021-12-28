// **********************************************************************

//Question 6
var myStr = ["Hello","World","in","a","frame"];
console.log("************");
function strArrayPrint(myStr) {
    for(var i=0; i<=myStr.length; i++){
        console.log("* " + myStr[i] + " *");
    }
}
strArrayPrint(myStr);
console.log("************");

// ##########################################** OR **##################################################


var myStrsize = window.prompt("Enter string array size : ");
var myStr = new Array(myStrsize);
strArrayPrint(myStr);

function strArrayPrint(myStr) {
    console.log("************");
    for(var i=0; i<=myStrsize; i++){
        myStr[i] = window.prompt("Enter " + i + " value for array 1");
        console.log("* " + myStr[i] + " *");
    }
    console.log("************");
}


// **********************************************************************