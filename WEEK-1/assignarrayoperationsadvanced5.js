//Array Operations Advanced
//ASSIGNMENT 5: 
//-------------
//Bank Transaction Analyzer
//You are building a bank statement summary.
//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//Tasks:
// 1. filter() all credit transactions
const creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log("Credit Transactions:", creditTransactions);

// 2. map() to extract only transaction amounts
const transactionAmounts = transactions.map(txn => txn.amount);
console.log("Transaction Amounts:", transactionAmounts);

// 3. reduce() to calculate final account balance
const finalBalance = transactions.reduce((balance, txn) => {
  return txn.type === "credit" 
    ? balance + txn.amount 
    : balance - txn.amount;
}, 0);
console.log("Final Account Balance:", finalBalance);

// 4. find() the first debit transaction
const firstDebit = transactions.find(txn => txn.type === "debit");
console.log("First Debit Transaction:", firstDebit);

// 5. findIndex() of transaction with amount 10000
const indexOf10k = transactions.findIndex(txn => txn.amount === 10000);
console.log("Index of Transaction with 10000:", indexOf10k);
