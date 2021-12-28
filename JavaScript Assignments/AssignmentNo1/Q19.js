// clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// display values
function display(value) {
  document.getElementById("result").value += value;
}

//used eval() to calculate result but using this eval is not secure. 
//(malicious code can run inside your application without permission.)
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
