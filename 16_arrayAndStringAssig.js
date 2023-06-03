const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log(arrayNum);
for (let i = 0; i < arrayNum.length; i++) {
  const element = arrayNum[i];
  for (let j = 0; j < arrayNum.length; j++) {
    if (element == arrayNum[j]) {
      arrayNum.splice(j, 1);
      j--;
    }
  }
}
console.log(arrayNum);
console.log(`Unique elements is==> ${arrayNum}`);

console.log(`=============================================`);




function convertFirstAndLastCharToUpperCase(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, -1) + arr[i].charAt(arr[i].length - 1).toUpperCase();
    }
  }
  return arr.join(" ");
}
var sen="How are you mate";
var output=convertFirstAndLastCharToUpperCase(sen);
console.log(output);



