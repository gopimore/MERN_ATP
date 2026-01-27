//online course name processor

let courses=["javascript","react","node","express","mongodb"]
//filter the courses whose name length >5
let namelen=courses.filter(c=>c.length>5)
console.log("courses with name length >5 :",namelen);
//convert to uppercase using map()
let upcase=courses.map(c=>c.toUpperCase())
console.log("courses in uppercase :",upcase);
//reduce() to generate a single String
let CourseStr=courses.reduce((acc,c)=>acc.toUpperCase()+" | "+c.toUpperCase())
console.log("course string :",CourseStr);
//find() the course "react"
let coursefound=courses.find(c=>c==="react")
console.log("course found :",coursefound);
//find() index of node
let courseindex=courses.findIndex(c=>c==="node")
console.log("index of node is:",courseindex);
