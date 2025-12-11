console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/

// 1. Define variables
const mealCost = 15; // value of the meal cost
const tipPercentage = 0.1; // value of the tip percentage

// 2. Calculate  tip amount
const tipAmount = mealCost * tipPercentage;

// 3. Calculate total meal cost
const totalCost = mealCost + tipAmount;

// 4. Log message
console.log("The total meal cost is", totalCost, "€.");
console.log("This price consisted of a tip amount of", tipAmount, "€ and the meal cost amount of", mealCost, "€.");
