console.log(`Step 1`);
var square = function (number) {
  return number * number;
};
console.log(`Square of number is: ${square(5)}`);

console.log(`Step 2.Check Type OF function`);
console.log(`${typeof square}`);

console.log(`-------------------Step 3-------------------`);

var areaOfRectangle = function (length, width) {
  return length * width;
};
console.log(`Area of Rectangle is: ${areaOfRectangle(499, 917)}`);

console.log(`-------------------Step 4-------------------`);

var swapValues = function (args1, args2) {
  console.log("Before swap");
  console.log("ValueOne = ", args1);
  console.log("valueTwo = ", args2);

  [args1, args2] = [args2, args1];
  console.log("After swap");
  console.log("ValueOne = ", args1);
  console.log("valueTwo = ", args2);
};
swapValues("Virat", "Anushka");
swapValues("1000", "2000");

console.log(`-------------------Step 5-------------------`);

var stringOperation = function (number) {
  var giveStr = "JS the most popular language of the internet";
  var totalChar = giveStr.length;
  console.log(`Total Characters: ${totalChar}`);
  var charIndex = giveStr.charAt(6);
  console.log(`Character at index 6: ${charIndex}`);
  var charIndex = giveStr.charAt(11);
  console.log(`Character at index 11: ${charIndex}`);
  console.log(`Note: Both index number characters are space`);
  var charIndex = giveStr.charAt(giveStr.length-1);
  console.log(`Last Character is: ${charIndex}`);
  var charIndex = giveStr.charAt(0);
  console.log(`First Character is: ${charIndex}`);

  var spliteResult = giveStr.trim().split(" ");
  console.log(`Total Words in String is: ${spliteResult.length}`);
  var square=spliteResult.length * spliteResult.length;
  console.log(`Square Of Total Words is: ${square}`);

};

stringOperation();

