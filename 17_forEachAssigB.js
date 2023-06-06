class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
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

console.log("----------------- TCS employees -----------------");
employees.forEach((employee)=>{
    if(employee.emp_company == "TCS"){
        console.log(`Name=> ${employee.emp_name} , Company=> ${employee.emp_company}`);
    }
});


console.log("----------------- Find all employees whose salary >= 50000 -----------------");
employees.forEach((employee)=>{
    if(employee.emp_salary >= 50000){
        console.log(employee);
    }
})

console.log("----------------- Find the sum of all employees' salary -----------------");
let totalSalary=0;
employees.forEach((employee)=>{
   totalSalary+= employee.emp_salary;
});
console.log(`Sum of all epmloyee salary is==>  ${totalSalary}`);



console.log("----------------- Average Salary -----------------");
const averageSalary = totalSalary / employees.length;
console.log("Average salary is==>", averageSalary);

console.log("--------- IT or HR employees with salary >= 75000 ----------");
employees.forEach((employee) => {
  if ((employee.emp_dept === "IT" || employee.emp_dept === "HR") && employee.emp_salary >= 75000) {
    console.log(employee);
  }
});