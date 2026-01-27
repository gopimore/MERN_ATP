//exam result summary

let marks={
    maths:78,
    physics:65,
    chemistery:82,
    english:55
};
let totalMarks=0;
getTotalMarks= function(){
    for(let m in marks){
        totalMarks+=marks[m];
    }   
    return totalMarks;
}
getAverage=function(){
    let average=this.getTotalMarks()/Object.keys(marks).length;
    return average;
}
console.log("Total Marks: "+getTotalMarks());
console.log("Average Marks: "+getAverage());
