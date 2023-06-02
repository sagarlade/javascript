console.log(`================= Step 1 =================`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log("Original array:", arrayNums);
arrayNums.push(55, 66);
const clonedArray = arrayNums.slice();
console.log("Cloned array:", clonedArray);

console.log(`================= Step 2 =================`);
const cloneArray = [...arrayNums];
arrayNums.push(10, 25);
console.log("Original array:", arrayNums);
console.log("Cloned array:", cloneArray);

console.log(`================= Step 3 =================`);

const arrayEven = [2, 30, 14, 8];
const mergeArray = [...arrayNums, ...arrayEven];
console.log("Merge Array", mergeArray);

console.log(`================= Step 4 =================`);

const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000 INR",
    aug_month: "50,0000 INR",
    jun_month: "65,0000 INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli, 431202"
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    mobiles: ["+91 8600 1800", "4567 32", "+91- 9096 5678 77"],
  },
};

console.log(employee_info);

console.log(`================= Step 5 =================`);

console.log("Employee details:");
console.log(
  "Address and Locality of employee:",
  employee_info.address.locality.street +
    ", " +
    employee_info.address.city +
    ", " +
    employee_info.address.state +
    ", " +
    employee_info.address.country
);
console.log("Mobile numbers:", employee_info.address.mobiles.join(", "));

console.log(`================= Step 6 =================`);

const clonedObject = JSON.parse(JSON.stringify(employee_info));
clonedObject.salary.july_month = "80,000 INR";
employee_info.address.country = "United Kingdom";

console.log("Updated values for original object:");
console.log("July month salary:", employee_info.salary.july_month);
console.log("Country:", employee_info.address.country);
console.log("-----------------------------");
console.log("Updated values for cloned object:");
console.log("July month salary:", clonedObject.salary.july_month);
console.log("Country:", clonedObject.address.country);
