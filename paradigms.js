//Procedural

// const a = 5;
// const b = 6;
// const sum = a + b;
// const perimeterRect = 2 * sum;
// console.log("Perimeter of our rectangle is: ", perimeterRect);

//Functional

const rect1 = getPerimeterRect(2, 2);
const rect2 = getPerimeterRect(2, 4);
const rectArea1 = getAreaRect(2, 2);
const rectArea2 = getAreaRect(2, 4);

console.log("Rectangle 1's perimeter is:", rect1);
console.log("Rectangle 2's perimeter is:", rect2);

console.log("Rectangle 1's area is:", rectArea1);
console.log("Rectangle 2's area is:", rectArea2);

function getPerimeterRect(a, b) {
  const sum = a + b;
  const perimeterRect = 2 * sum;

  return perimeterRect;
}
function getAreaRect(a, b) {
  return a * b;
}
