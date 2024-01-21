// 1
function greet(name) {
    console.log("Hello, " + name + "! Welcome!");
  }
  
  greet("Harold Jay S. Balongo");

// 2
var add = function (num1, num2) {
    return num1 + num2;
};
  
var result = add(5, 7);
  
console.log("The sum is: "+result);

// 3
var isEven = function(number) {
    return number % 2 === 0;
};
  
console.log("1 is "+isEven(1));
console.log("2 is "+isEven(2));
console.log("3 is "+isEven(3));
console.log("4 is "+isEven(4)); 

// 4
var globalVar = "Global value";

function funk() {
  var globalVar = "Local value";
  console.log("Inside function:", globalVar);
}

funk();
console.log("Outside function:", globalVar); // Local value goes first?

// 5
hoistedFunction(); 

function hoistedFunction() {
  console.log("hoisted function");
}

// 6
function mathOperation(num1, num2, callback) {
    return callback(num1, num2);
  }
  
function add(a, b) {
    return a + b;
}
  
function subtract(a, b) {
    return a - b;
}
  
function multiply(a, b) {
    return a * b;
}
  
function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero!";
    }
}
  
console.log("Addition:", mathOperation(5, 3, add));     
console.log("Subtraction:", mathOperation(8, 4, subtract));
console.log("Multiplication:", mathOperation(2, 6, multiply));
console.log("Division:", mathOperation(10, 2, divide));
console.log("Division by zero:", mathOperation(5, 0, divide));

// 7
function counter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }
  
const counter1 = counter();
const counter2 = counter();
  
console.log("Counter 1:", counter1());
console.log("Counter 1:", counter1());
  
console.log("Counter 2:", counter2());
console.log("Counter 2:", counter2());
//same output due to independant states? 

//
function applyFunction(func, array) {
    return array.map(func);
}
  
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = applyFunction(x => x * x, numbers);
  
console.log("Original array:", numbers);
console.log("Squared array:", squaredNumbers);

// 9
function getUserData(callback) {
    setTimeout(() => callback({
      id: 123,
      username: "User",
      email: "user@email.com"
    }), 1000);
  }

getUserData(user => console.log("User data retrieved:", user));
  