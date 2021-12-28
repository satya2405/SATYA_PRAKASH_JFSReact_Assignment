// **********************************************************************

//Question 5
var year = window.prompt("Enter year: ");
year = parseInt(year);
var noOfYears = window.prompt("Enter no. of years to count");
function isLeapYear(year, noOfYears) {
    for(var count=0; count<=noOfYears; count++){
        year = year + count;
        if((year%4==0 && year%100!=0)||year%400==0){
            console.log(year + " is a leap year!");
        }
        console.log(year + " is not leap year!");
    }
}
console.log(isLeapYear(year, noOfYears));



//OR
var year = window.prompt("Enter year: ");
year = parseInt(year);
var noOfYears = window.prompt("Enter no. of years to count");
function isLeapYear(year, noOfYears) {
    var count = 0;
    console.log("These are " + noOfYears +  " Leap years from year " + year);
    while (count<=noOfYears) {
        year = year + 1;
        if((year%4===0 && year%100!==0)||year%400===0){
            count++;
            console.log(year);
        }
    }
}
console.log(isLeapYear(year, noOfYears));

// **********************************************************************