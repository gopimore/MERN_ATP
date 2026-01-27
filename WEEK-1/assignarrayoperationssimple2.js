//array operations simple
//Assignment 2: Online Course Name Processor
//------------------------------------------
//Scenario : You are preparing a course list for display on a website.

const courses = ["javascript", "react", "node", "mongodb", "express"];
//1. filter() courses with name length > 5
let res1=courses.filter(element=>element.length>5)
console.log(res1)
// 2. map() to convert course names to uppercase
let res2=courses.map(element=>element.toUpperCase())
console.log(res2)
// 4. find() the course "react"
let res3=courses.find(element=>element=='react')
console.log(res3)
//5. findIndex() of "node"
let res4=courses.findIndex(element=>element=='node')
console.log(res4)
