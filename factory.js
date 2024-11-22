const rect1 = {
  a: 2,
  b: 2,
  area() {
    return this.a * this.b;
  },
  parameter() {
    return 2 * (this.a + this.b);
  },
};

const rect2 = {
  a: 2,
  b: 4,
  area(name) {
    console.log(name);
    return this.a * this.b;
  },
  parameter() {
    return 2 * (this.a + this.b);
  },
};

const bound = caller.bind(rect2, "Square");
const caller = rect2.area;

// console.log(rect1.area());
// console.log(rect2.area());

console.log(bound());

//Factory function

// function createRect(a, b) {
//   return {
//     height: a,
//     width: b,
//     area() {
//       console.log("The area of the rectangle is: ", this.height * this.width);
//     },
//     area() {
//       console.log(
//         "The area of the perimeter is: ",
//         2 * (this.height + this.width)
//       );
//     },
//   };
// }

// const rect1 = createRect(2, 2);
// const rect2 = createRect(2, 4);
// rect1.area();
// rect2.area();
