const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(
  "====================== Log All Element with index ======================="
);
arrayNumbers.forEach((element, index) => {
  console.log(`${element}, ${index}`);
});

console.log("==================== Find Positive Number =====================");
arrayNumbers.forEach((element, index) => {
  if (element > 0) {
    console.log(`Positive Numbers is==> ${element}`);
  }
});

console.log("==================== Find Negative Number =====================");
const negativeNumber = [];
arrayNumbers.forEach((element, index) => {
  if (element < 0) {
    negativeNumber.push(element);
  }
});
console.log(negativeNumber);

console.log("==================== Find Even Number =====================");
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(`Even Numbers Is==> ${element}`);
  }
});
console.log(
  "==================== Find Sum of All Element ====================="
);
let sum = 0;
arrayNumbers.forEach((element) => {
  sum += element;
});
console.log(`Sum of All Element is==> ${sum}`);

console.log(
  "==================== Log only the even indexed array value ====================="
);
arrayNumbers.forEach((num, index) => {
  if (index % 2 === 0) {
    console.log(`Number: ${num}, Even Index: ${index}`);
  }
});
