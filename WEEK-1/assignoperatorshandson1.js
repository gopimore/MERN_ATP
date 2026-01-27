//assignment on operators
//Initial data:
let totalAmount = 0;
//Tasks
//1. Add ₹500 to the total
totalAmount += 500;
console.log("totalAmount",totalAmount);
//2. Add ₹1200 to the total
totalAmount += 1200;
console.log("totalAmount",totalAmount);
//3. Apply a ₹200 discount
totalAmount -= 200;
console.log("totalAmount",totalAmount);
//4. Add 18% GST
let gst = totalAmount * 0.18; 
totalAmount += gst;
//5. Print the final bill amount
console.log("Final Bill Amount: ₹" + totalAmount);