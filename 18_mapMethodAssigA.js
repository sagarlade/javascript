const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("====== Add 10 to each element and log the new array =======");
const newArray1 = arrayNumbers.map((num) => {
    return num + 10;
});
console.log("New Array with Adding 10 in Each Element==> ", newArray1);

console.log("========= Square each array element ===========");
const newArray2 = arrayNumbers.map((num) => {
    return num * num;
});
console.log("Square of each element ==>", newArray2);

console.log(
  "========= Add the index value to its corresponding array element and log the new array ==========="
);

const newArray3 = arrayNumbers.map((num, index) =>{
    return num + index;
} );
console.log("Adding index to corresponding element:", newArray3);
