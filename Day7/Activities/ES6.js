// // // ES6 Activity-1
// //1. arrow function to calculate the square
// const square = (number) => number * number;
// // Calculate
// console.log("==Arrow function to calculate the square==");
// console.log(square(5));

// //2. template literals for welcome message
// const name = "Bogart";
// const age = "24";
// console.log("==Template literals for welcome message==");
// console.log(`Welcome ${name}, age ${age} yrs old.`);

// //3. destructuring to extract the first and last name from a person
// //Object
// const person = ["Bogart","Bogzz"]
// // Destructuring to extract first and last name
// const [firstName,lastName] = person;
// // Log the extracted names to the console
// console.log("==Destructuring to extract the first and last name from a person==");
// console.log(`First Name: ${firstName}`);
// console.log(`Last Name: ${lastName}`);

// //4. spread operator to merge two arrays into a single array
// // arrays
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// // Using the spread operator to merge the arrays
// const mNum = [...array1, ...array2];
// // Log the merged array to the console
// console.log("==Using the spread operator to merge the arrays==");
// console.log(`First Array: ${array1}`);
// console.log(`Second Array: ${array2}`);
// console.log(`Merged Array: ${mNum}`);

// //5. default parameters to calculates the area of a rectangle.
// function calcRectArea(length = 7, width = 3 ) {
//     const parm = length * width;
//     console.log(`Length: ${length}, Width: ${width}`);
//     return parm;
//   }
// //Calculate the area
// console.log("==Default parameters to calculates the area of a rectangle==");
// const Area = calcRectArea();
// console.log("Area of Rectangle:", Area);


// // // ES6-2 Activity
//Defines the range of numbers
const min = 1;
const max = 10;

// Generate a random number
const rndmNum = Math.random();

// Generated number only range from 1-10
const Num = Math.floor(rndmNum * (max - min + 1)) + min;

// Prompt user to guess the number
const userInp = prompt(`Guess the number between ${min} and ${max}:`);

// Convert user input to a number
const userInpnum = parseInt(userInp);

// Check if the user input is a valid
if (!isNaN(userInpnum)) {
    // Check if the guess is correct
    if (userInpnum >= min && userInpnum <= max) {
        if (userInpnum === Num) {
            console.log(`Congratulations! ${userInpnum} is correct.`);
        } else {
            console.log(`${userInpnum} is wrong, the correct number was ${Num}.`);
        }
    } else {
        console.log(`Invalid number. Please enter a number between ${min} and ${max}.`);
    }
} else {
    console.log('Invalid input. Please enter a valid number.');
}
