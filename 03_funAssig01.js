// Function with no arguments and no return type
function displayWelcomeMessage() {
  console.log("Welcome To Javascript");
}
displayWelcomeMessage();
function displayGoodbyeMessage() {
  console.log("Goodbye!");
}
displayGoodbyeMessage();

// Function with arguments
function personalDetails(firstName, lastName, collegeName) {
  console.log("My Name is: " + firstName + " " + lastName);
  console.log("College: " + collegeName);
}
personalDetails("John", "Doe", "ABC University");

//Swap Function

function swapValuesDuse(args1, args2) {
  console.log("Before swap");
  console.log("ValueOne = ", args1);
  console.log("valueTwo = ", args2);

  [args1, args2] = [args2, args1];
  console.log("After swap");
  console.log("ValueOne = ", args1);
  console.log("valueTwo = ", args2);
}
swapValuesDuse("Virat", "Anushka");
swapValuesDuse("1000", "2000");

//Three Function
function addThreeValues(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  console.log("The sum is:", sum);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");
