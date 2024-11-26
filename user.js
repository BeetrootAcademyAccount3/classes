//Constructor functions

function User(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, job) {
  User.call(this, name, age);
  this.job = job;
}

const empl1 = new Employee("Jack", 44, "Politician");

console.log(empl1);
