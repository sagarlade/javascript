class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let employees = [
  emp_anil,
  emp_mahi,
  emp_monika,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_viny,
];
console.log(
  "============= Find all the employees working in 'TCS' ============="
);
for (const employee of employees) {
  if (employee.emp_company == "TCS") {
    console.log(
      `Employee Name:- ${employee.emp_name},  Employee Company Name:- ${employee.emp_company}`
    );
  }
}

console.log(
  "=================== Find Finance Department employees ==================="
);
for (const employee of employees) {
  if (employee.emp_dept == "Finance") {
    console.log(
      `Employee Name:- ${employee.emp_name},  Employee Department:- ${employee.emp_dept}`
    );
  }
}

console.log(
  "=================== Find employee whose name start with 'R' And all details ==================="
);
for (const employee of employees) {
  if (employee.emp_name.startsWith("R")) {
    console.log(`Employee Name:- ${employee.emp_name} `);
    console.log(employee);
  }
}

console.log(
  "=================== Find employee whose salary is greater than 75000 ==================="
);
for (const employee of employees) {
  if (employee.emp_salary > 75000) {
    console.log(
      `Employee Name:- ${employee.emp_name}, Company Name:- ${employee.emp_company},  Salary:- ${employee.emp_salary}`
    );
  }
}

console.log(
  "=================== Find employee whose salary is greater than Equal 50000 AND Dep is IT ==================="
);
for (const employee of employees) {
  if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
    console.log(employee);
  }
}

console.log(
  "=================== Find All employee From Infy Company ==================="
);
for (const employee of employees) {
  if (employee.emp_company == "Infy") {
    console.log(employee);
  }
}
