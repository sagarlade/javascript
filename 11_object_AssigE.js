// SBI Bank object

const sbiBank = {
  bankName: "SBI Bank",
  location: "Mumbai",
  accountNo: "1234567890",
  ifsc: "SBIN00001234",
  interestRate: 6.5,
  showDetails: function () {
    console.log(
      `Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`
    );
  },
};

// Axis Bank object
const axisBank = {
  bankName: "Axis Bank",
  location: "Delhi",
  accountNo: "0987654321",
  ifsc: "UTIB00009876",
  interestRate: 7.0,
  showDetails: function () {
    console.log(
      `Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`
    );
  },
};

// HDFC Bank object
const hdfcBank = {
  bankName: "HDFC Bank",
  location: "Bangalore",
  accountNo: "5678901234",
  ifsc: "HDFC00005678",
  interestRate: 6.75,
  showDetails: function () {
    console.log(
      `Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`
    );
  },
};

// Yes Bank object
const yesBank = {
  bankName: "Yes Bank",
  location: "Chennai",
  accountNo: "4321098765",
  ifsc: "YESB00004321",
  interestRate: 6.25,
  showDetails: function () {
    console.log(
      `Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`
    );
  },
};

// Invoke showDetails() on each bank object
console.log(`----- SBI Bank object ------`);
sbiBank.showDetails();
console.log(`----- Axis Bank object ------`);
axisBank.showDetails();
console.log(`----- HDFC Bank object ------`);
hdfcBank.showDetails();
console.log(`----- Yes Bank object ------`);
yesBank.showDetails();
