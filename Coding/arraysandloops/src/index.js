// Challenge 1
// Create an array weekDays with all the days of the week, console log the array
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(weekDays);

// Challenge 2
// Log 'Monday' and 'Sunday'

console.log(weekDays[0]);
console.log(weekDays[6]);

// Challenge 3
// Change 'Sunday' by 'Funday'
// Log the array
weekDays[6] = "Funday";
console.log(weekDays);

// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays.slice = 0;
weekDays.slice = 0;
console.log(weekDays);

// Challenge 5
// Log every day of the week this way: `Temperature on Monday is 18 degrees'
console.log(`Temperature on ${weekDays[0]} is 18 degrees`);
console.log(`Temperature on ${weekDays[1]} is 20 degrees`);
console.log(`Temperature on ${weekDays[2]} is 19 degrees`);
console.log(`Temperature on ${weekDays[3]} is 17 degrees`);
console.log(`Temperature on ${weekDays[4]} is 18 degrees`);
console.log(`Temperature on ${weekDays[5]} is 20 degrees`);
console.log(`Temperature on ${weekDays[6]} is 18 degrees`);
