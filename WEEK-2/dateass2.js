/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
--------------------------------------------------------------------*/
let enrollmentDeadline = new Date("2026-01-20");
// Task 1: Check if today is before or after the deadline
let today = new Date();
if (today < enrollmentDeadline) {
    console.log("Enrollment Open");
} else {
    console.log("Enrollment Closed");
}
//task 2: Validate user input date
function isValidateDate() {
    let date = new Date("2026-02-30");
    if(date.getFullYear() !== 2026 || date.getMonth() !== 1 || date.getDate() !== 30) {
        console.log("Invalid Date");
    } else {
        console.log("Valid Date");
    }
}
isValidateDate();

