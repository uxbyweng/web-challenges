console.clear();

/*
How can you calculate the area and circumference of a pizza - oops, I mean a circle? Let`s find out!

1. Initialize a variable to represent the radius of the circle. For example, you can set `radius` to a specific value, like 5.

2. Calculate the area of the circle using the formula `Math.PI * radius ** 2`, and store the result in a variable called `circleArea`.

3. Calculate the circumference of the circle using the formula `2 * Math.PI * radius`, and store the result in a variable called `circumference`.

4. Display the results by logging them to the console. Use `console.log` to print the area and circumference.

5. Run your JavaScript program to see the calculated area and circumference of the circle with the specified radius.
*/

// 1. Initialize variable
const circleRadius = 13;

// 2. Calculate circle area (Kreisfläche)
const circleArea = Math.PI * circleRadius ** 2;

// 3. Calculate circle circumference (Kreisumfang)
const circumference = 2 * Math.PI * circleRadius;

// 4. Print area and circumference-> Ausgabe als 'number'
console.log(circleArea);
console.log(circumference);

// 5: Final formatted sentence -> Ausgabe als 'string'
console.log(`A circle with a radius of ${circleRadius} cm has an area of ${circleArea} cm² and a circumference of ${circumference} cm.`);
