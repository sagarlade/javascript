function countCharA(str) {
  if (typeof str !== "string") {
    console.log("Invalid input. Please provide a valid sting");
    return;
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      count++;
    }
  }
  console.log(`Total occurrences of 'a' or 'A': ${count}`);
  return count;
}


countCharA("I AM Learning JavaScript, The Language of internet");
countCharA("My favourite movie is LAggAn");