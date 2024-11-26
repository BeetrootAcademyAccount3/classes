//Constructor function

// function Rectangle(height, width) {
//   this.a = height;
//   this.b = width;

//   this.getArea = function () {
//     return this.a * this.b;
//   };
//   this.getParameter = function () {
//     return 2 * (this.a + this.b);
//   };
// }

// const rect1 = new Rectangle(2, 3);

// console.log(rect1.getArea());
// console.log(rect1.getParameter());

function Circle(radius) {
  const pi = 3.14;
  this.r = radius;

  this.getArea = function () {
    return this.r * this.r * pi;
  };
  this.getCircumference = function () {
    return 2 * this.r * pi;
  };
}

const rect1 = new Circle(3);

console.log(rect1.getArea());
console.log(rect1.getCircumference());
