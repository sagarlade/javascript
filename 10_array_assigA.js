const arrayFruits=["Banana", "Orange", "Apple","Mango","Water Melon"];

const arrayFruitsLength=arrayFruits.length;
const firstElement=arrayFruits[0];
const lastElement=arrayFruits[arrayFruitsLength-1];
console.log(`First element is ${firstElement}`);
console.log(`Last element is ${lastElement}`);

console.log(`-------------  Add Element Before Banana ---------------------`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`-------------  Remove Element  ---------------------`);
arrayFruits.splice(3, 1);
console.log(arrayFruits);
console.log(`--------------- Add element at Last  -------------------`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(`--------------- Add element Before Water Melon  -------------------`);
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(arrayFruits);
console.log(`--------------- Replace Element Orange with Kiwi  -------------------`);
arrayFruits.splice(2, 1, "Kiwi");
console.log(arrayFruits);
console.log(`--------------- Start with index 1 to 4  -------------------`);
let arryaOfFruit=arrayFruits.slice(1,4);
console.log(arryaOfFruit);
console.log(`--------------- Last Three Element  -------------------`);
let lastArryaOfFruit=arrayFruits.splice([arrayFruitsLength-1]);
console.log(lastArryaOfFruit);