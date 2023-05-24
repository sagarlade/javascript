const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`----------- Step-1 ---------`);
const arrayNumLength = arrayNumbers.length;
console.log(`Total element Available:- ${arrayNumLength}`);
console.log(`----------- Step-2 ---------`);
const firstElement = arrayNumbers[0];
console.log(`First element :- ${firstElement}`);
const lastElement = arrayNumbers[arrayNumLength - 1];
console.log(`Last element :- ${lastElement}`);
console.log(`----------- Step-3 ---------`);
const lastElement1 = arrayNumbers[arrayNumbers.length - 1];
console.log(`Thirst Last element :- ${lastElement1}`);
console.log(`----------- Step-4 ---------`);
for (const element in arrayNumbers) {
  const number = arrayNumbers[element];
  if (number % 2 == 0) {
    console.log(`The even Numbers is:- ${number}`);
  }
}
console.log(`----------- Step-5 ---------`);

for (const element in arrayNumbers) {
  const number = arrayNumbers[element];
  if (number % 2 !== 0) {
    console.log(`The odd Numbers is:- ${number}`);
  }
}
console.log(`----------- Step-6 ---------`);
for (const index in arrayNumbers) {
  if (index % 2 == 0) {
    console.log(`The even Positioned index is:- ${arrayNumbers[index]}`);
  }
}
console.log(`----------- Step-7 ---------`);
for (const index in arrayNumbers) {
  if (index % 2 !== 0) {
    console.log(`The Odd Positioned index is:- ${arrayNumbers[index]}`);
  }
}
console.log(`----------- Step-8 ---------`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  sum = sum + arrayNumbers[index];
}
console.log(`Sum of All Numbers:- ${sum}`);

console.log(`----------- Step-9 ---------`);
for (const element in arrayNumbers) {
  const number = arrayNumbers[element];
  if (number % 5 == 0) {
    console.log(`The Numbers Multiple of 5 is:- ${number}`);
  }
}

console.log(`----------- Step-10 ---------`);
const numAvailable=arrayNumbers.includes(115);
console.log(`Number 115 is Available in arrayNumbers:- ${numAvailable}`);
console.log(`----------- Step-11 ---------`);
const numberAvailable=arrayNumbers.includes(23);
console.log(`Number 23 is Available in arrayNumbers:- ${numberAvailable}`);
console.log(`----------- Step-12 ---------`);
arrayNumbers.splice(3, 0, 55, 66)
console.log(arrayNumbers);
console.log(`----------- Step-13 ---------`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);
