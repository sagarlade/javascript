const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("====== Add 10 to each element and log the new array =======");
const newArray1 = arrayNumbers.map((num) => num + 10);
console.log("New Array (Add 10):", newArray1);

// 2. Square each array element and log it on the console

console.log("========= Square each array element ===========");
const newArray2 = arrayNumbers.map((num) => num * num);
console.log("New Array (Square):", newArray2);

console.log("========= Add the index value to its corresponding array element and log the new array ===========");

const newArray3 = arrayNumbers.map((num, index) => num + index);
console.log("New Array (Add Index):", newArray3);
