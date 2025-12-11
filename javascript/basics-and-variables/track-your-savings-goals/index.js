console.clear();

/*
Let's build a small program to track your savings goals!

1. Set up three variables:
   - `startingBalance`: Initialize this variable with your initial savings balance. For example, you can set it to 1000.
   - `monthlyContribution`: Set this variable to the amount you plan to save each month.
   - `months`: Specify the number of months over which you want to track your savings. For instance, you can set it to 12 for a year.

2. Calculate the total savings after the specified number of months by using the formula `startingBalance + (monthlyContribution * months)`, and store the result in a variable called `totalSavings`.

3. Print the result to the console to display the total savings you'll have after the specified number of months.

4. Run your JavaScript program to see how much money you'll have saved after the specified time period.
*/

// 1. Set up variables:
const startingBalance = 5000; // initial savings balance
const monthlyContribution = 500; // amount of planned monthly savingsh
const months = 12; // number of months wanting to track savings

// 2. Calculate total savings
const totalSavings = startingBalance + monthlyContribution * months;

// 3. Print result
console.log("After", months, "you'll have total savings of", totalSavings, "€");

// 4. Run program
// node index.js
