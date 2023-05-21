// ------- Count Total number of Vowels ---- //

console.log(`1. Count Total number of Vowels`);
function countVowels(str) {
  var vowels = "aeiouAEIOU";
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
console.log("Total number of vowels:", vowelCount);

console.log(`----------------------------------------------------`);
console.log(`2. Calculate the sum of the cubes of numbers from 1 to 5 `);

function sumOfCube(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  console.log(sum);
}

var n = 5;
var result = sumOfCube(n);
console.log(`Sum of Cubes: ${result}`);

console.log(`----------------------------------------------------`);
console.log(`3. Log only Odd Positioned Chars on console and do not consider empty spaces`);
function oddPositionedChars(str) {
    let oddChars=" ";
    for (let i = 0; i < str.length; i += 2) {
      if (str[i] !== ' ') {
        oddChars +=str[i];
      }
    }
    console.log(oddChars);
  }

var str1 = "Hard work always pays back";
oddPositionedChars(str1);

var str2 = "Soon I will be Angular IT Champ";
oddPositionedChars(str2);
