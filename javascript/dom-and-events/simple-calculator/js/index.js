console.clear();

let operand1 = 12;
let operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js="add"]');
const substractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

// console.log("addButton", addButton);
// console.log("substractButton", substractButton);
// console.log("multiplyButton", multiplyButton);
// console.log("divideButton", divideButton);
// console.log("exponentButton", exponentButton);
// console.log("moduloButton", moduloButton);
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

// Addition / +
addButton.addEventListener("click", () => {
    let result = operand1 + operand2;
    console.log(`${operand1} + ${operand2} = ${result}`);
});

// Substraction / -
substractButton.addEventListener("click", () => {
    let result = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${result}`);
});

// Multiplication / *
multiplyButton.addEventListener("click", () => {
    let result = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${result}`);
});

// Division /
divideButton.addEventListener("click", () => {
    let result = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${result}`);
});

// Exponation
exponentButton.addEventListener("click", () => {
    let result = operand1 ** operand2;
    console.log(`${operand1} ** ${operand2} = ${result}`);
});

// Modulo
moduloButton.addEventListener("click", () => {
    let result = operand1 % operand2;
    console.log(`${operand1} % ${operand2} = ${result}`);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

// Increase first operand by one
const increaseByOneButton = document.querySelector('[data-js="increase-by-one"]');
increaseByOneButton.addEventListener("click", () => {
    let result = operand1++;
    console.log(`${operand1} + 1 = ${result}`);
});

// Increase first operand by five
const increaseByFiveButton = document.querySelector('[data-js="increase-by-five"]');
increaseByFiveButton.addEventListener("click", () => {
    let result = operand1 + 5;
    console.log(`${operand1} + 5 = ${result}`);
});

// Decrease by one
const decreaseByOneButton = document.querySelector('[data-js="decrease-by-one"]');
decreaseByOneButton.addEventListener("click", () => {
    let result = operand1--;
    console.log(`${operand1} - 1 = ${result}`);
});

// Multiply by two
const multiplyByTwoButton = document.querySelector('[data-js="multiply-by-two"]');
multiplyByTwoButton.addEventListener("click", () => {
    let result = operand1 * 2;
    console.log(`${operand1} * 2 = ${result}`);
});

// Devide by two
const devideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
devideByTwoButton.addEventListener("click", () => {
    let result = operand1 / 2;
    console.log(`${operand1} / 2 = ${result}`);
});

// --^-- write your code here --^--
