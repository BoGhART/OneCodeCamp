// // //1.
// function EmitRandomNumberCallback(attempts, callback) {
//     const emitRndmNum = (attempt) => { //generate random number
//       const time = Date.now();
//       setTimeout(() => {
//         const elapsedTime = Math.round((Date.now() - time) / 1000);//elapsed time in seconds
//         const rndmNum = Math.floor(Math.random() * 101); //number generated from 1-100 only
//   //check if random number is equal/greater than 80
//         if (rndmNum < 80 && attempt < attempts) {
//           console.log(`Attempt #${attempt}: 
//   ${elapsedTime} seconds have lapsed. 
//   Random Number: ${rndmNum}`);
//           emitRndmNum(attempt + 1);//next attempt
//         } else if (rndmNum < 80 && attempt === attempts) {
//           console.log(`Attempt #${attempt}: 
//   ${elapsedTime} seconds have lapsed. 
//   Random Number: ${rndmNum}
//   ==Maximum Attempts Reached==`);// resolve promise upon maximum attempt
//           callback(rndmNum);
//         } else {
//           console.log(`Attempt #${attempt}: 
//   ${elapsedTime} seconds have lapsed. 
//   Random Number: ${rndmNum} !!!`);
//           callback(rndmNum);// resolve promise upon = >80
//         }
//       }, 2000);
//     };
//     //record attempt and time
//     emitRndmNum(1);
//   }
  
// // Call the function
// EmitRandomNumberCallback(10, (result) => {
//       console.log("End");
// });
  


// // //2.
// function EmitRandomNumber(attempts = 10) {
//     return new Promise(resolve => {
//       const emitRndmNum = (attempt) => { //generate random number
//         const time = Date.now();
//         setTimeout(() => {
//           const elapsedTime = Math.round((Date.now() - time) / 1000); //elapsed time in seconds
//           const rndmNum = Math.floor(Math.random() * 101); //number generated from 1-100 only
            
//           //check if random number is equal/greater than 80
//           if (rndmNum < 80 && attempt < 10) {
//             console.log(`Attempt #${attempt}: 
// ${elapsedTime} seconds have lapsed. 
// Random Number: ${rndmNum}`);
//             emitRndmNum(attempt + 1); //next attempt
//           } 
//           else if(rndmNum < 80 && attempt == 10){//reached max attempts
//             console.log(`Attempt #${attempt}: 
// ${elapsedTime} seconds have lapsed. 
// Random Number: ${rndmNum}
// ==Maximum Attempts Reached==`);
//             resolve(rndmNum);// resolve promise
//           }
//           else { //final attempt
//             console.log(`Attempt #${attempt}: 
// ${elapsedTime} seconds have lapsed. 
// Random Number: ${rndmNum} !!!`); 
//             resolve(rndmNum);// resolve promise
//           }
//         }, 2000);
//       };
//       //record attempt
//       emitRndmNum(1);
//     });
// }
  
// // Call the function
//  EmitRandomNumber()


//3.
function delay(del) {
    return new Promise(resolve => setTimeout(resolve, del));
  }
  
  async function EmitRandomNumberAsync(attempts = 10) {
    const emitRndmNum = async (attempt) => {
      const time = Date.now();
  
      await delay(2000);
  
      const elapsedTime = Math.round((Date.now() - time) / 1000);
      const rndmNum = Math.floor(Math.random() * 101);
  
      if (rndmNum < 80 && attempt < attempts) {
        console.log(`Attempt #${attempt}: 
  ${elapsedTime} seconds have lapsed. 
  Random Number: ${rndmNum}`);
        await emitRndmNum(attempt + 1);
      } else if (rndmNum < 80 && attempt === attempts) {
        console.log(`Attempt #${attempt}: 
  ${elapsedTime} seconds have lapsed. 
  Random Number: ${rndmNum}
  ==Maximum Attempts Reached==`);
        return rndmNum;
      } else {
        console.log(`Attempt #${attempt}: 
  ${elapsedTime} seconds have lapsed. 
  Random Number: ${rndmNum} !!!`);
        return rndmNum;
      }
    };
  
    return await emitRndmNum(1);
  }
  
// Usage with async/await
const perfSteps = async () => {
    try {
        const result = await EmitRandomNumberAsync();
        console.log("End");
    } catch (error) {
        console.error("Error:", error);
    }
}

perfSteps();
  