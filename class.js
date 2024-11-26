// Class

class Shape {
  constructor(color) {
    this.color = color;
  }
  description() {
    console.log("This is a nice shape with the color " + this.color);
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super("red");
    // console.log("We are in the constructor of the class");
    this.height = height;
    this.width = width;
  }

  getArea() {
    console.log("The area of the rectangle is: ", this.height * this.width);
  }

  getParameter() {
    console.log(
      "The area of the perimeter is: ",
      2 * (this.height + this.width)
    );
  }

  //   description() {
  //     console.log("This is a nice rectangle!");
  //   }
}

const rect1 = new Rectangle(2, 3);
const rect2 = new Rectangle(200, 300);
rect1.height = 10;
rect1.width = 20;

rect1.description();

// rect1.getArea.call(rect2);

// rect1.getParameter();

/*
class User {
  //   _id = "1234"; Old way of naming private properties
  #id = "1234";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setId(id) {
    this.#id = id;
  }

  getId() {
    return this.#id;
  }

  static greeting() {
    return "Hello I am a good human!";
  }
}

const user1 = new User("John", 33);
console.log(user1.greeting());
*/
class Circle extends Shape {
  #pi = 3.14;

  static description =
    "A circle is a round-shaped figure that has no corners or edges.";

  constructor(radius) {
    super("blue");
    this.r = radius;
  }

  getArea() {
    return this.r * this.r * this.#pi;
  }

  getCircumference() {
    return 2 * this.r * this.#pi;
  }
}

const circle1 = new Circle(3);
const circle2 = new Circle(4);
const circle3 = new Circle(5);

circle1.description();

// console.log(rect1.getArea());
// console.log(rect1.getCircumference());
