console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);

// 1. Calculate days lived (number)
const daysLived = currentAge * 365;

// 2. Calculate remaining days (number)
const averageLifeSpan = 80; // average life span
const remainingDays = averageLifeSpan * 365 - daysLived;

// 3. Calculate percentage already lived (number)
const expectedLifeSpan = averageLifeSpan * 365;
const percentLived = (daysLived / expectedLifeSpan) * 100;

// 4. Calculate Sleeping Days (number)
const averageSleepingHoursPerDay = 8; // average life span
const totalHoursSleeped = averageSleepingHoursPerDay * daysLived; // 8 Stunden x 19.345 Tage = 154.760 Stunden Total
const totalDaysSleeped = totalHoursSleeped / 24; // 154.760 Stunden / 24 Stunden = 6.448 Tage

// 1.
console.log(`Total Days lived: ${daysLived}`);

// 2.
console.log(`Estimated remaining days: ${remainingDays}`);

// 3.
console.log(`Percentage of life already lived: ${percentLived}%`);

// 4.
console.log(`Total hours sleeped: ${totalDaysSleeped}`);
