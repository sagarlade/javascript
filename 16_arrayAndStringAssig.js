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

const str="How are you mate";
let result="";

const words=str.split(" ");
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()+" ";
}
result = result.trim(); 
console.log(`Before string: ${str}`);
console.log(`After string Convert: ${result}`);