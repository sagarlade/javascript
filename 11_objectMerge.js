const person = {
  height: "6feet",
  name: "Bill gates",
  city: "Pune",
  age: 54,
  isMarried: true,
};

const address = {
  street: "Wakad Road",
  landmark: "Near Datta Mandir",
  city: "Pune",
  pin: 431220,
  state: "MH",
  country: "India",
};

console.log("====================== Merge Object ==========================");
const merge=Object.assign(person, address);
console.table(merge);