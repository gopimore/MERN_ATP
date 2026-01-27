//array operations simple
//Assignment 1: Daily Temperature Analyzer
//----------------------------------------
//Scenario : You are analyzing daily temperatures recorded by a weather app.


const temp = [32, 35, 28, 40, 38, 30, 42];
//1. filter() temperatures above 35
let res1=temp.filter(element=>element>35)
console.log(res1)
//2. map() to convert all temperatures from Celsius → Fahrenheit
let res2=temp.map(element=>element*9/5)+32
console.log(res2)
//3. reduce() to calculate average temperature
let res3=temp.reduce((acc,ele)=>acc+ele)
console.log(res3/temp.length)
//4. find() first temperature above 40
let res4=temp.find(element=>element>40)
console.log(res4)
//5. findIndex() of temperature 28
let res5=temp.findIndex(element=>element===28)
console.log(res5)
