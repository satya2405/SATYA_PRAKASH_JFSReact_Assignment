function createTable() {
  var usertable = document.getElementById("userTable");
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of columns", 1);

  for (var r = 0; r < parseInt(rn, 10); r++) {
    var x = usertable.insertRow(r);
    for (var c = 0; c < parseInt(cn, 10); c++) {
      var y = x.insertCell(c);
      y.innerHTML = "Row-" + r + " Column-" + c;
    }
  }
}
