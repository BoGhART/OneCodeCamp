// // 1
// function printOrders(inputArray) {
//     console.log("<ol>");
//     inputArray.forEach(function(value) {
//         console.log("<li>"+value+"</li>");
//     });
//     console.log("</ol>");
// }

// const mAr = ["Item 1", "Item 2", "Item 3"];
// printOrders(mAr);

// // 2
// let cards = {
//     "King": 13,
//     "Queen": 12,
//     "Jack": 11,
//     "Ace": 1
// };
// function displayCards(cards) {
//     for (let card in cards) {
//         console.log(card);
//     }
// }
// displayCards(cards);

// function displayCardItems(cardObject) {
    
//     for (let card in cardObject) {
//         console.log("The value of "+card+" in Pyramid Solitaire is " +cardObject[card]);
//     }
// }

// displayCardItems(cards);

//3
function generateRandomScore() {
    return Math.floor(Math.random() * 101);
}

function Kscore(score) {
    console.log("Karaoke Score: "+score);

    if (score < 50) {
        console.log("Never sing again, ever!");
    } else if (score >= 50 && score <= 79) {
        console.log("Practice more!");
    } else if (score >= 80 && score <= 94) {
        console.log("You're getting better!");
    } else {
        console.log("What an excellent singer!");
    }
}

const randomScore = generateRandomScore();
Kscore(randomScore);

// // 4
// function ballthrow() {
//     const totalAttempts = 1000;
//     let successfulAttempts = 0;
//     let epicFails = 0;

//     for (let attemptNumber = 1; attemptNumber <= totalAttempts; attemptNumber++) {
//         const isSuccessful = Math.random() < 0.5;

//         if (isSuccessful) {
//             successfulAttempts++;
//             console.log("Attempt #"+attemptNumber+" Shooting the ball... Success! ... Got "+successfulAttempts+"x success and "+epicFails+"x epic fail(s) so far");
//         } else {
//             epicFails++;
//             console.log("Attempt #"+attemptNumber+" Shooting the ball... Epic Fail! ... Got "+successfulAttempts+"x success and "+epicFails+"x epic fail(s) so far");
//         }
//     }

//     console.log("Practice Ended");
// }

// ballthrow();

// //5
// function convert_to_blanks(numbers) {
//     const BA = numbers.map(number => "_  ".repeat(number));
//     const BS = BA.join("\n");
  
//     return BS;
// }
  
// const numArr = [1, 2, 3, 4 , 5];
// const result = convert_to_blanks(numArr);
// console.log(result);
  