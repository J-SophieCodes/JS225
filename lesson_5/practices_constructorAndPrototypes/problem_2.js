let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area(); // 'this' references RECTANGLE => undefined * undefined = NaN
//   this.perimeter = RECTANGLE.perimeter();  // 'this' references RECTANGLE => undefined * undefined = NaN
// }

// implementing a fix
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}


let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);