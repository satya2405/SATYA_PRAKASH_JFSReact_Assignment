
// Sub Question 1
let add = (a = 13, b = 7) => {
  console.log(`a: ${a} b: ${b} addition is: ${a+b}`);
};

add();
add(10);



/************************************************************************** */
// Sub Question 2
let userWithFriends = (userName, ...userFriends) => {
    console.log(`{userName: "${userName}", list of Friends is: "${userFriends}"}`);
}

userWithFriends('Priyanka','Ravi','OM','Sahil','Anees');
userWithFriends('Ravi','Priyanka','OM','Jayraj');


/************************************************************************** */
// Sub Question 3
let printCapitalNames = (...names) => {
    const result= [];
    names.forEach((element) => {
        result.push(element.toUpperCase());
    });
    console.log(`Names in Upper Case: "${result }"`);
}

let namesList = ['shreya','sagar','deepak','rutvik'];
console.log(namesList);
printCapitalNames(...namesList);


