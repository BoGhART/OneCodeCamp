// 1. Prompt user for date of birth
let birth = prompt("Please enter your date of birth (MM/DD/YYYY):");

// 2. Separate date of birth into three variables
let [bMonth, bDate, bYear] = birth.split('/').map(Number);

// 3. Calculate age using Date() method
let cDate = new Date();
let cMonth = cDate.getMonth() + 1;
let cYear = cDate.getFullYear();
let age = cYear - bYear;

// Adjust age if birthday hasn't occurred yet in the current year
if (cMonth < bMonth || (cMonth === bMonth && cDate.getDate() < bDate)) {
    age--;
}

// 5. validity checks
if (bMonth >= 1 && bMonth <= 12 && bDate >= 1 && bDate <= 31 && bYear <= cYear) {
    // Check the number of days in the month
    let daysInMonth = new Date(bYear, bMonth, 0).getDate();
    // Check if the entered date is beyond the current date

    // Check if February 29 is valid
    if (!(bMonth === 2 && bDate === 29 && (bYear % 4 !== 0 || (bYear % 100 === 0 && bYear % 400 !== 0)))) {
        if (bDate <= daysInMonth) {
            if (bYear > cYear || (bYear === cYear && (bMonth > cMonth || (bMonth === cMonth && bDate > cDay)))) {
                console.log("Invalid input.");
            }
            else{
                // 4. Output calculated age
                console.log("Your age is: " + age);

                // 5. Check if it's the user's birthday
                if (cMonth === bMonth && cDate.getDate() === bDate) {
                    console.log("Happy Birthday!");
                }
            } 
        } 
        else {
            console.log("Invalid day for the given month.");
        }
    } 
    else {
        console.log("Invalid date. February 29 is only valid in leap years.");
    }
} 
else {
    console.log("Invalid input.");
}


