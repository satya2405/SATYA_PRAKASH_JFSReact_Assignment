var string = prompt("Enter the String");
let pattern = /[^a-b]/gi;
document.write(string.match(pattern));
