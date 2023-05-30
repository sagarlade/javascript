console.log(`================ Step 1: Create the 'bankSbi' object using literals ================`);
const bankSbi = {
  name: "SBI Bank",
  type: "Public Sector Bank",
  branchCount: 5000,
  isGovernmentOwned: true,
};


console.table(bankSbi);


console.log(`================ Step 2: Create the 'bankLocation' object using literals ================`);
const bankLocation = {
  street: "Main Street",
  city: "New York",
  pin: "12345",
};

console.table(bankLocation);
console.log(`================ Step 3: Clone the 'bankSbi' and 'bankLocation' objects ================`); 
const clonedBankSbi = Object.assign({}, bankSbi);
const clonedBankLocation = Object.assign({}, bankLocation);

console.log("Cloned 'bankSbi' object:", clonedBankSbi);
console.log("Cloned 'bankLocation' object:", clonedBankLocation);

console.log(`================ Step 4: Create the 'rateOfInterest' object using literals ================`);


const rateOfInterest = {
  homeLoanInterest: 6.5,
  personalLoanInterest: 9.2,
  duelnterest: 8.7,
};

console.table(rateOfInterest);


console.log(`================ Step 5: Merge the 'bankSbi', 'bankLocation', and 'rateOfInterest' objects into a new object 'sbiDetails' ================`); 
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);

console.log("Merged 'sbiDetails' object:", sbiDetails);

console.log(`================ Step 6: Traverse the 'sbiDetails' object using for-in loop and log the details ============`); 
console.log("Traversing 'sbiDetails' object:");
for (let property in sbiDetails) {
  console.log(property + ": " + sbiDetails[property]);
}
