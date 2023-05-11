
var num1 = 100;
var num2 = 200;
var num3 = 300;
// Output --> num1 = 200,  num2 =100

console.log("Before Swap..", "num1: ", num1, " num2: ", num2, "num3: ", num3);
var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("num1:", num1, " num2:", num2, "num3:", num3);