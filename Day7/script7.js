// // ECMA script

// //Block scoped variables
// function example() {
//     var x = 1;
//     console.log(x);
// }

// // Template literals
// let name = "Amanda";
// let age = "18";
// console.log("My name is "+name+" and I am "+age+" yrs old.");
// console.log(`My name is ${name} and I am ${age} yrs old.`);

// let message = `This is 
// a multi-line 
// message`;
// console.log(message);

// Arrow Functions
// function square(num){
//     return num * num;
// }

// console.log(square(5));

// let square = (num) => num * num;
// console.log(square(5));

// let square2 = (num1, num2) => num1 * num2;
// console.log(square2(5, 2));

// // Keyword(this) & Lexical scope
// const person = {
//     name: "Dion",
//     greetRegular: function() {
//         console.log(`Hello ${this.name} !`);
//     },
//     greetArrow: () => {
//         console.log(`Hello ${this.name} !`);
//     }
// }

// person.greetRegular();
// person.greetArrow();

// //Destructuring assignment
// const number = [1,2,3,4,5];
// const [a,b,c,d,e] = number;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// const person = {
//     name: "LJ",
//     age: 30,
//     country: "PH"
// }
// const {name, age, country} = person;
// console.log(name);
// console.log(age);
// console.log(country);

// //Spread & rest operator
// // spread
// function sum(x,y,z) {
//     return x + y + z;
// }

// const numbers = [1,2,3];
// console.log(sum(...numbers));

// // rest
// function myfunc(firstArg, ...restOfArgs) {
//     console.log(firstArg);
//     console.log(restOfArgs);
// }

// myfunc("one", "two", "three", "four");

// //String Methods
// // split
// const message = "Hello, World";
// const words = message.split(", ");

// console.log(words);

// // includes
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const containsWord = sentence.includes("apple")

// console.log(containsWord);

// // length
// const sampleString = "Welcome to modern JS features!";
// const strLength = sampleString.length;
// console.log(strLength);

// // math
// max
// var Num = Math.max(10,5,20);
// console.log(Num);

// min
// var Num = Math.min(10,5,20);
// console.log(Num);

// random
// const rndmVal = Math.random();
// console.log(rndmVal);

//floor
// const rndNum = Math.floor(3.7);
// console.log(rndedNum);

//ceil
// const rndedNum = Math.ceil(3.2);
// console.log(rndedNum);

//round
// const rndedNum = Math.round(3.7);
// console.log(rndedNum);

//nested math methods
// function getRndmInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const rndmInt = getRndmInt(1, 10);
// console.log(rndmInt);