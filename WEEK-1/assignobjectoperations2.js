//object operations simple
//Assignment 2: Exam Result Summary
//---------------------------------
//Scenario : Marks are stored subject-wise for a student.


const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//Tasks:
//1. Calculate total marks
let total = 0;
for (let subject in marks) {
  total += marks[subject];
}
console.log("Total Marks:", total);

// 2. Calculate average marks
let count = Object.keys(marks).length;
let average = total / count;
console.log("Average Marks:", average);

//3. Find the highest scoring subject
let highestSubject = "";
let highestMarks = 0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, "-", highestMarks);
//4.Add a new subject computer: 90
marks.computer= 90
console.log(marks)