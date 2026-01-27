//daily temp analyzer
let temp=[32,35,28,40,38,30,42]


let result=temp.filter(t=>t>35)
console.log("temp above 35",result);

let result2=temp.map(t=>t*2+30)
console.log("temp celsius to fahrenheit ",result2);

let result3=temp.reduce((acc,t)=>acc+t,0)
console.log("average of temperatures",result3/temp.length);

let result4=temp.find(t=>t>40)
console.log("find the fist largest element than 40 :",result4);
//find index of temperature 28
let result5=temp.findIndex(t=>t===28)
console.log("index of temperature 28 is :",result5);
