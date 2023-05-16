var greaterNumber=function(num1, num2){
    var greatestNumber=num1 > num2 ? num1 : num2;
    console.log(`Greatest Number is ==> ${greatestNumber}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(`----------------------------------------`);

var isEvenOrOddNum=function(num){
    var result = num%2 == 0 ? true : false;
    console.log(`Given Number ${num} is ==> ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`----------------------------------------`);


var wordLength=function(word){
    var isEvenOrOddLength = word.length % 2 == 0 ? "EVEN" : "ODD" ;
    console.log(`Given Number ${word} is ==> ${isEvenOrOddLength}`);
}

wordLength("JavaScript");
wordLength("developer");
wordLength("Google");

