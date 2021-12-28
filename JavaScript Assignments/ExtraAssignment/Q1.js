// leap year
function getNext20Leaps(currentYear){
    var count = 0;
    var leapYears = [];
    var year = currentYear;
    while(count != 20){
        if((year%4 == 0) && (year% 100 != 0) || (year%400 == 0)){
            leapYears.push(year);
            count++;
        }
        year++;
    }
    console.log(leapYears);
}

getNext20Leaps(2000);