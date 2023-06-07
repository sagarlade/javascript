const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log("============= Find All numbers that greater than 50 =============");
const greaterNum= arrayNumbers.filter((number)=>{
    return number > 50;
})
console.log(greaterNum);

console.log("============= Find All Even Number =============");
const evenNum=arrayNumbers.filter((even)=>{
    return even % 2==0;
})
console.log(evenNum);

console.log("============= Find All Odd Number =============");
const oddNum=arrayNumbers.filter((oddnumber)=>{
    return oddnumber % 2 !=0;
})
console.log(oddNum);

console.log("============= Find All The Numbers which multiple by 5 =============");
const multipleFive=arrayNumbers.filter((multipleByFive)=>{
    return multipleByFive % 5 === 0;
})
console.log(multipleFive);

console.log("============= Find All The Numbers which between 20 and 50 =============");
const array1=arrayNumbers.filter((value)=>{
    return value > 20 && value < 50;
})
console.log(array1);