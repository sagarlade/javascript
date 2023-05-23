function factorialOfNum(num) {
  if (typeof num !== "number" || isNaN(num) || num < 0) {
    console.log("Invalid input. Please provide a valid number.");
    return;
  }

  if (num === 0) {
    console.log("Factorial of 0 is 1.");
    return 1;
  }
  let factorial = 1;
  for (let i = num; i >= 1; i--) {
    factorial = factorial * i;
  }
  console.log(`Factorial of ${num} is ${factorial}.`);
  return factorial;
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
