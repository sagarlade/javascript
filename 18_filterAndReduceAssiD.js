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
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const employees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log("================== Employess from Wipro ==================");
const empWipro = employees.filter((employee) => {
  return employee.emp_company == "Wipro";
});
const allEmpWipro = empWipro.reduce((acc, employee) => {
  //   acc.push(employee.emp_name, employee.emp_company);
  //   return acc;
  console.log(employee);
}, []);

console.log(
  "------------------ Employess from IT OR HR Dept using Filter And Reduce Method ------------------"
);
const empITorHR = employees.filter((employee) => {
  return employee.emp_dept === "IT" || employee.emp_dept === "HR";
});
const empList = empITorHR.reduce((acc, employee) => {
  //   acc.push(employee.emp_name, employee.emp_dept);
  //   return acc;
  console.log(employee);
});

console.log(
  "================== Find all Employess whose id greater than 50 =================="
);
const empGreaterID = employees
  .filter((employee) => {
    return employee.emp_id > 50;
  })
  .reduce((acc, employee) => {
    acc.push(`Emp Id:  ${employee.emp_id}, Emp Name: ${employee.emp_name}`);
    return acc;
  }, []);
console.table(empGreaterID);

console.log(
  "================== Find all Employess whode name startWith 'A','V','M' =================="
);
const nameStartWith = employees
  .filter((employee) => {
    return (
      employee.emp_name.startsWith("A") ||
      employee.emp_name.startsWith("V") ||
      employee.emp_name.startsWith("M")
    );
  })
  .reduce((acc, employee) => {
    acc.push(` Emp Name: ${employee.emp_name}`);
    return acc;
  }, []);
console.log(nameStartWith);

console.log("================== Find Average Salary ==================");

const totalSalary = employees
  .filter((employee) => employee.emp_salary)
  .reduce((acc, emp) => acc + emp.emp_salary, 0);

const averageSalary = totalSalary / employees.length;
console.log("Average salary of all employees:", averageSalary);


console.log("================== Find Average Salary for IT department ==================");

const empIT = employees.filter((emp) => emp.emp_dept === "IT");
const totalITSalary = empIT.reduce((acc, emp) => acc + emp.emp_salary, 0);
const averageITSalary = totalITSalary / empIT.length;
console.log("Average salary of IT department employees:", averageITSalary);