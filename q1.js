let amount, interestRate, years;

amount = parseFloat(prompt("Enter the loan amount:"));
interestRate = parseFloat(prompt("Enter the annual interest rate (in %):")) / 100;
years = parseInt(prompt("Enter the number of years for the loan:"));

let monthlyInterestRate = interestRate / 12;
let numberOfPayments = years * 12;

let simpleInterest = amount * interestRate * years;
alert("Total Simple Interest: " + simpleInterest.toFixed(2));