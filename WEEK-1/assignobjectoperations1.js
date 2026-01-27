//Object Operations simple
//Assignment 1: User Profile Manager
//----------------------------------
//Scenario : You are managing a logged-in user’s profile in a web application.
const user={
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true

};
//Tasks:
//1. Read and print the user’s name and email
console.log(user.name)
console.log(user.email)
//2. Add a new property lastLogin: "2026-01-01"
user.lastlogin="2026-01-01";
//3. Update role from "student" to "admin"
console.log(user.lastlogin)
user.role="Admin"
console.log(user.role)
//4. Delete the isActive property
delete user.isActive
//5. Use Object.keys() to list all remaining fields
console.log(Object.keys(user));
