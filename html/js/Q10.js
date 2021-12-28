
//Question 10
function fibonancci(number) {
    let n1 = 1, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

const mynumber = parseInt(window.prompt('Enter the number of terms: '));
fibonancci(mynumber);