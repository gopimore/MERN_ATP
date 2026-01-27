//Assignment1
//user profile manager
let emp={
    id:101,
    name:'ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
}

console.log(emp.name);
console.log(emp['email']);

emp.lastlogin='2026-01-01';
console.log(emp);

emp.role='admin';
console.log(emp);
delete emp.isActive;
console.log(emp);

console.log(Object.keys(emp));

