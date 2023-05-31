// 1. Vehicle class
class Vehicle {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
  }
}


// Create 5 Vehicle objects
const vehicle1 = new Vehicle("Toyota", "Camry", 2020, "Silver", 5000);
const vehicle2 = new Vehicle("Honda", "Civic", 2018, "Red", 8000);
const vehicle3 = new Vehicle("Ford", "Mustang", 2019, "Blue", 6000);
const vehicle4 = new Vehicle("Chevrolet", "Malibu", 2017, "Black", 7000);
const vehicle5 = new Vehicle("BMW", "X5", 2021, "White", 3000);

// Add objects to arrayOfVehicles
const arrayOfVehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];

// Traverse arrayOfVehicles and log the details
arrayOfVehicles.forEach((vehicle, index) => {
  console.log(`Vehicle No: ${index + 1}`);
  console.log(`Company Name: ${vehicle.make}`);
  console.log(`Model Of Car: ${vehicle.model}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Vehicle Color: ${vehicle.color}`);
  console.log(`Car Mileage: ${vehicle.mileage}`);
  console.log("----------------------");
});

// 2. College class
class College {
  constructor(name, location, studentsCount, establishedYear) {
    this.name = name;
    this.location = location;
    this.studentsCount = studentsCount;
    this.establishedYear = establishedYear;
  }
}

// Create 4 College objects
const college1 = new College("ABC College", "New York", 500, 2000);
const college2 = new College("XYZ College", "London", 300, 1990);
const college3 = new College("PQR College", "Paris", 400, 1985);
const college4 = new College("MNO College", "Tokyo", 600, 2010);

// 3. traverseObject() function
function traverseObject(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// Call traverseObject() function for each College object
console.log("Traversing College objects:");
traverseObject(college1);
console.log("----------------------");
traverseObject(college2);
console.log("----------------------");
traverseObject(college3);
console.log("----------------------");
traverseObject(college4);
console.log("----------------------");

// 4. Check if a number is prime or not
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage
const number = 11;
console.log(`Given ${number} a prime number: ${isPrimeNumber(number)}`);
