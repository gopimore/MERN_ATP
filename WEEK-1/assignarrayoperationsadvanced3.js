//array operations advanced
//ASSIGNMENT 3:
//-------------
//Employee Payroll Processor
//You are building a salary processing module in a company HR app.
//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//Tasks:
//1. filter() employees from IT department
const itEmployees = employees.filter(emp => emp.department === "IT"); 
console.log("IT Employees:", itEmployees);
//2. map() to add:
    //netSalary = salary + 10% bonus
    const employeesWithNetSalary = employees.map(emp => 
        { 
            return { ...emp, netSalary: emp.salary + emp.salary * 0.10 }; 
        });
console.log("Employees with Net Salary:", employeesWithNetSalary);
//3. reduce() to calculate total salary payout
const totalPayout = employees.reduce((sum, emp) => sum + emp.salary, 0); 
console.log("Total Salary Payout:", totalPayout);
//4. find() employee with salary 30000
const employeeWith30k = employees.find(emp => emp.salary === 30000); 
console.log("Employee with 30000 salary:", employeeWith30k);
//5. findIndex() of employee "Neha"
const nehaIndex = employees.findIndex(emp => emp.name === "Neha"); 
console.log("Index of Neha:", nehaIndex);