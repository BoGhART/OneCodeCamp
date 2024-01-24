// console.log("First");
// console.log("Second");
// console.log("Third");

// //Asynchronous JS
// console.log("First");

// setTimeout(() => {
//     console.log("Third");
// }, 2000);

// console.log("Second");

// //call backs for Async operations
// const getData = (callback) => {
//     setTimeout(() => {
//         const data = "Data";
//         callback(data);
//     }, 2000)
// };

// const processData = (data) => {
//     console.log("Processed Data: ", data)
// };

// getData(processData);

// //callback hell
// const step1 = (callback) => {
//     setTimeout(() => {
//         console.log("Step 1 complete");
//         callback();
//     }, 1000);
// }

// const step2 = (callback) => {
//     setTimeout(() => {
//         console.log("Step 2 complete");
//         callback();
//     }, 1000);
// }

// const step3 = (callback) => {
//     setTimeout(() => {
//         console.log("Step 3 complete");
//         callback();
//     }, 1000);
// };

// //nested callback
// step1 (() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps Complete.");
//         })
//     })
// })

// //promise
// const step1 = (callback) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("Step 1 complete");
//                 resolve();
//         }, 1000);
//     })
// }

// const step2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 2 complete");
//             resolve();
//         }, 1000);
//     })
// }

// const step3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 3 complete");
//             resolve();
//         }, 1000);
//     })
// }

// //chaining Promises
// step1()
//     .then(step2)
//     .then(step3)
//     .then(() => {
//         console.log("All steps complete");
//     })
//     .catch((error) => {
//         console.log("Error", error);
//     });

// //Async await
const step1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Step 1 complete");
                resolve();
        }, 1000);
    })
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 complete");
            resolve();
        }, 1000);
    })
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 complete");
            resolve();
        }, 1000);
    })
}

const performSteps = async () => {
    try {
        await step1()
        await step2()
        await step3()
        console.log("All Steps Complete.");
    }
    catch (error) {
        console.log("Error", error);
    };
}

performSteps();