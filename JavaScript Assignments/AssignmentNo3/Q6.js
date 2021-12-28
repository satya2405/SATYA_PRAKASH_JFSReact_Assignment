var str = '({"fname" : "Priyanka", "lname" : "Ghoshal"})';
var obj = eval(str);
obj.lname = "Dhoni";
alert(obj.fname + " , " + obj.lname);
