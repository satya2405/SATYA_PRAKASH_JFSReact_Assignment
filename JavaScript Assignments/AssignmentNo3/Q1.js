// class creation
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// creating few instances or objects
const rect1 = new Rectangle(20, 10);
const rect2 = new Rectangle(13, 14);
const rect3 = new Rectangle(40, 100);

// accessing values of each object using '.' (dot) operator.
console.log("Rect1 height:" + rect1.height);
console.log("Rect1 width:" + rect1.width);

console.log("Rect2 height:" + rect2.height);
console.log("Rect2 width:" + rect2.width);

console.log("Rect3 height:" + rect3.height);
console.log("Rect3 width:" + rect3.width);

// assigning new value
rect3.height = 19;
rect3.width = 20;
console.log("Updated Rect3 height: " + rect3.height);
console.log("Updated Rect3 width: " + rect3.width);
