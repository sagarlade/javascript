console.log("============ No Args And No Return Value ============");
const arrFun = () => {
  console.log(`Good Morning, Today is Monday`);
};
arrFun();

console.log(
  "============ With 3 Args And No Return Value with one default value  ============"
);

let multiplication = (num1, num2, num3 = 1) => {
  sum = num1 * num2 * num3;
  console.log(`Multiplication of Three Number is:  ${sum}`);
};
multiplication(5, 5, 2);
multiplication(10, 4);

console.log("============ 5 Args And  Return Value   ============");

const addNumbers = (a, b, c, d, e) => {
  const total = a + b + c + d + e;
  return total;
};

console.log(`---------------- Example with numbers ---------------`);
const result1 = addNumbers(100, 100, 200, 349, 756);
console.log(`SUm of Given Number is ==> ${result1}`);

console.log(`---------------- Example with strings ---------------`);
const result2 = addNumbers("I am"," learning", " ES6", " features", " in depth");
console.log(result2);
