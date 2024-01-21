// Step 1
function isEven(number) {
    return number % 2 === 0;
}
  
// Step 2
for (let i = 0; i <= 10; i++) {
    console.log("Is "+i+" even?" +" "+isEven(i));
}

// Step 3
function multiply(a, b) {
    return a * b;
}

// Step 4
while (true) {
    let num1 = parseFloat(prompt("Enter the first number (or a negative number to exit):"));

    if (num1 < 0 || isNaN(num1)) {
        console.log("Exiting the program.");
        break;
    }

    let num2 = parseFloat(prompt("Enter the second number:"));

    let result = multiply(num1, num2);

    console.log("The product of " +num1+ " and " +num2+ " is: " +result);

    break;
}

// Step 5
function reverseString(str) {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

// Step 6
const reverseword = reverseString('hello');

console.log("Reversed string of 'hello': " + reverseword);


// Step 7
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Step 8
const vows = countVowels("JavaScript");
console.log("The number of vowels in 'JavaScript' is: " + vows);

// Step 9
function findMax(numbers) {
    let max = numbers[0];

    for (let n = 1; n < numbers.length; n++) {
        if (numbers[n] > max) {
            max = numbers[n];
        }
    }

    return max;
}

// Step 10
const maxNumber = findMax([4, 9, 2, 7, 5]);

console.log("The maximum value in this [4, 9, 2, 7, 5] array is: " + maxNumber);

// Step 11
function calculateFactorial(number) {
    if (number === 0) {
        return 1;
    }
    
    return number * calculateFactorial(number - 1);
}

// Step12
const factorialOf5 = calculateFactorial(5);

console.log("The factorial of 5 is: " + factorialOf5);

// Step 13
function isPalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    
    const reversedStr = lowerCaseStr.split('').reverse().join('');
    
    return lowerCaseStr === reversedStr;
}

// Step 14
const resp = isPalindrome("level");
console.log("Is 'level' a palindrome? " +resp);

// Step 15
function sumArray(numbers) {
    const sum = numbers.reduce((ans, num) => ans + num, 0);
    return sum;
}

// Step 16
const sumAR = sumArray([1, 2, 3, 4, 5]);
console.log("The sum of the array [1, 2, 3, 4, 5] is: " + sumAR);

// Step 17
function capitalizeFirstLetter(str) {
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr;
}

// Step  18
const res17 = capitalizeFirstLetter('javascript');

console.log("javascript: " + res17);

//Step 19
function filterEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
}

// Step 20
const resev = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("Array with only even numbers: " + resev);