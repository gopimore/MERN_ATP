//student markslist

let marks=[78,92,35,39,88,40,67];

//filter() marks >= 40 (pass marks)
let passmarks=marks.filter(c=>c>=40);
console.log("pass marks:",passmarks);

//map() add grace marks 5 to each student
let gracemarks=marks.map(c=>c+5);
console.log("marks after adding grace marks:",gracemarks);

//reduce() to find the highest mark
let highestmark=marks.reduce((acc,c)=>acc>c?acc:c)
console.log("highest mark is:",highestmark);

//find() first mark below 40
let firstmark=marks.find(c=>c<40)
console.log("first mark below 40:",firstmark);

//findIndex of mark 92
