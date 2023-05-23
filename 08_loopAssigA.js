// ------- Count Total number of Vowels ---- //

console.log(`1. Count Total number of Vowels`);
function countVowels(str) {
  var vowels = 'aeiouAEIOU';
  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  
  return count;
}

var sentence = "I am very good IT Developer";
var vowelCount = countVowels(sentence);
console.log("Total number of vowels:", vowelCount);

console.log(`----------------------------------------------------`);
console.log(`2. Calculate the sum of the cubes of numbers from 1 to 5 `);

function sumOfCube() {
  var sum = 0;
  for (var i = 1; i <= 5; i++) {
    sum += i ** 3;
  }
  console.log(sum);
}
sumOfCube();


console.log(`----------------------------------------------------`);

console.log(`3. Log only Odd Positioned Chars on console and do not consider empty spaces`);
function oddPositionedChars(str) {
  let oddChars = '';

  for (let i = 0; i < str.length; i++) {
    var char= str.charAt(i);
    if (i % 2 != 0 && char != ' ') {
      oddChars = oddChars + char;
    }
  }

  return oddChars;
}

const str1 = "Hard work always pays back";
const result1 = oddPositionedChars(str1);
console.log(result1); 

const str2 = "Soon I will be Angular IT Champ";
const result2 = oddPositionedChars(str2);
console.log(result2); 

