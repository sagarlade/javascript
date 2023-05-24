for (let index = 0; index <= 10; index++) {
  // index = 11
  console.log(index); // 0 1  2 ... 10
}
console.log("After loop");

// // addition of 5

for (let index = 5; index <= 50; index = index + 5) {
  // index = 11
  console.log(index); // 0 1  2 ... 10
}
console.log("After loop");

// //betn 100 and 80

for (let index = 100; index >= 80; index = index - 1) {
  console.log(index);
}
console.log("After loop");

// // Table of 17

for (let index = 17; index <= 170; index = index + 17) {
  console.log(index);
}
console.log("After loop");

// // Table of 19 reverse order

for (let index = 190; index >= 19; index = index - 19) {
  console.log(index);
}
console.log("After loop");

// // Table of 8 in seq

for (let index = 8; index <= 80; index = index + 8) {
  console.log(index);
}
console.log("After loop");

// String in Reverse Order

var input = "Hello, World!";
var reversedString = " ";

for (var i = input.length - 1; i >= 0; i--) {
  var char = input.charAt(i);
  reversedString = reversedString.concat(char);
}

console.log(reversedString);

// String in Reverse Order

var str = "Sagar";
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
for (let i = str.length - 1; i >= 0; i--) {
  var chr = str.charAt(i);
  console.log(chr);
}

// WAP to reverse the string --> JavaScript --> tpircSavaJ
// JavaScript -->
// initialization = 9
// condition index>=0
// update expression index--
var str = "JavaScript";
var reverseString = "";
for (let index = 9; index >= 0; index--) {
  // index = 9  8
  var char = str.charAt(index);
  reverseString = reverseString.concat(char);
}
console.log(reverseString);

/// String Reverse order Using Function

function reverseWord(input) {
  var reversedString = "";

  for (var i = input.length - 1; i >= 0; i--) {
    var char = input.charAt(i);
    reversedString = reversedString.concat(char);
  }
  console.log(reversedString);
}
reverseWord("JavaScript");


var word = "Javascript Language of Internet";
for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index);
}
console.log(char);

//=============//////////
function capitalizeFirstAndLast(string) {
  return string.replace(
    /\b(\w)(\w*?)(\w)\b/g,
    function (match, firstChar, middleChars, lastChar) {
      if (middleChars.length === 0) {
        return firstChar.toUpperCase() + lastChar.toUpperCase();
      } else {
        return firstChar.toUpperCase() + middleChars + lastChar.toUpperCase();
      }
    }
  );
}
var sentence = "Hello how are you doing";
var output = capitalizeFirstAndLast(sentence);
console.log(output);

//------------------------------//

//---------------  Make First and Last char uppercase  ---------------//

function capitalizeFirstAndLast(string) {
  var words = string.split(" ");
  var capitalizedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = "";

    if (word.length === 1) {
      capitalizedWord = word.toUpperCase();
    } else {
      var firstChar = word[0].toUpperCase();
      var lastChar = word[word.length - 1].toUpperCase();
      var middleChars = word.slice(1, -1);
      capitalizedWord = firstChar + middleChars + lastChar;
    }

    capitalizedWords.push(capitalizedWord);
  }

  return capitalizedWords.join(" ");
}
var sen="Hello how are you doing";
var output=capitalizeFirstAndLast(sen);
console.log(output);