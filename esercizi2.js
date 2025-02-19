//Define the function min that takes two arguments and returns their minimum.

function min(number1, number2) {
    if (number1 < number2) {
        return number1;
    } else {
        return number2;
    }
}

console.log(min(99, 84));
console.log(min(34, 21))

const min2 = (number1, number2) => {
    if (number1 < number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(typeof min2);

// console.log(min(99, 84))

/* function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(max(60, 25))

const max = (number1, number2) => {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(max(11, 42)) */


//Write a function called countBs that takes a string as its only argument and returns a number 
// that indicates how many uppercase B characters there are in the string.
function countBs(stringToCheck) {
    let numberOfBs = 0
 
    for (let letter = 0; letter < stringToCheck.length; letter++) {
        if (stringToCheck[letter]==="B") {
          numberOfBs++  
        }
    }
    return numberOfBs
}


function countChar(stringToCheck, charToCheck) {
    let found = 0
 
    for (let letter = 0; letter < stringToCheck.length; letter++) {
        if (stringToCheck[letter]===charToCheck) {
          found++  
        }
    }
    return found
}
const toCheck = "esempio Babbo del kakkio"
console.log (countChar(toCheck, "k"))
console.log (countChar(toCheck, "B"))
