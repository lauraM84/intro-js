//Define the function min that takes two arguments and returns their minimum.

// function min(number1, number2) {
//     if (number1 < number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }

// console.log(min(99, 84))

// const min = (number1, number2) => {
//     if (number1 < number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }

// console.log(min(99, 84))

// function max(number1, number2) {
//     if (number1 > number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }
// console.log(max(60, 25))

// const max = (number1, number2) => {
//     if (number1 > number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }
// console.log(max(11, 42))


//Write a function called countBs that takes a string as its only argument and returns a number 
// that indicates how many uppercase B characters there are in the string.
function countBs(stringToCheck) {
    let numberOfBs = 0

    for (let letter = 0; letter < stringToCheck.length; letter++) {
        console.log(stringToCheck[letter])
        if (stringToCheck[letter] === 'B') {
            numberOfBs++
        }
    }
}
countBs("esempio BB")