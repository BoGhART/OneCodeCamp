//Defining Funtion
function greet() {
    console.log("Output");
}

//call Function
greet();

//function declaration
function squareDeclaration(num) {
    return num * num;
}

//function expression
const squareExpression = function(num) {
    return num * num;
}

//call function
console.log("Square (Function Declaration): ", squareDeclaration(5));
console.log("Square (Function Expression): ", squareExpression(5));

//Function hoisting

function sayHello(name) {
    console.log("Hello, "+name);
}


sayHello("Bogart");


//Anonymous function
var test = function() {
    console.log("Hello World");
}

test();

//functions with return vaue
function sum(a, b){
    return a + b;
}

console.log(sum (3, 5));

let result = sum(5, 3);
console.log(result);

//callbacks
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

//callback funtion
function add(a, b) {
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

let result1 = calculate(5, 3, add);
let result2 = calculate(5, 3, subtraction);

console.log("Result (addition): "+result1);
console.log("Result (subtraction): "+result2);