/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
---------------------------------------------------*/
//create Date object for current date & time
let date=new Date();
//extract details
console.log("year:",date.getFullYear());
console.log("month:",date.getMonth()+1);
console.log("date:",date.getDate());
console.log("day of week:",date.getDay());
console.log("hours:",date.getHours());
console.log("minutes:",date.getMinutes());
console.log("seconds:",date.getSeconds());
//formatting date as DD-MM-YYYY HH:mm:ss
console.log(date.toString());