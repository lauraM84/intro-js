const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//1) filtrare tutti i numeri < o = a zero

function negativeNumberAndZero(arrayOfNumbers) {
    const newArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];

        if (element <= 0) {
            newArray.push(element)
        }

    }
    return newArray
}

console.log('es 1', negativeNumberAndZero(array1));

//2) convertitre in gradi fahrenheit ipotizzando che l'unità di partenza dia in celsius

function fromCToF(arrayOfNumbers) {

    const newArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];

        const convert = (element * 9 / 5) + 32;

        newArray.push(convert)
    }
    return newArray
}

console.log('es 2', fromCToF(array1))

//3) fare la media dei valori

function findAverage(arrayOfNumbers) {

    let sum = 0

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        sum = sum + element
    }

    const average = sum / arrayOfNumbers.length
    return average
}
const average = findAverage(array1)
console.log('es 3', average)




//4) restituire il valore più basso e il più alto

/* function findMax(arrayOfNumbers) {
    let max = null;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];

        if (max === null || element > max) {
            max = element
        }
    }
    return max
}
const max = findMax(array1)
console.log(max)

function findMin(arrayOfNumbers) {
    let min = null;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];

        if (min === null || element < min) {
            min = element
        }
    }
    return min
}
const min = findMin(array1)
console.log(min) */

function findMinMax(arrayOfNumbers) {
    let min = null;
    let max = null

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];

        if (min === null || element < min) {
            min = element
        }
        if (max === null || element > max) {
            max = element
        }
    }
    return [min, max]

}
const minMax = findMinMax(array1)
console.log('es 4', minMax)




const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie']

//5) filtrare tutti i nomi più grandi di 4 caratteri

function filterSmallNames(arrayOfNames) {
    let greaters = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        const element = arrayOfNames[i];
        if (element.length > 4) {
            greaters.push(element);
        }
    }
    return greaters;
}
const namesGreaterThan4 = filterSmallNames(array2)
console.log('es 5', namesGreaterThan4)


//6) trasforamre tutte le stringhe in maiscolo
//7) mettere Solo le Iniziali in maiuscolo

function initialsUpper(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const elementString = array[i];
        let newString = elementString[0].toUpperCase() + elementString.slice(1)

        newArray.push(newString);
    }
    return newArray;
}
const arrayp = initialsUpper(array2)
console.log('es 7', arrayp)


//8) restituire una stringa composta dalle iniziali di tutti i nomi

function getInitialOfNames(arrayOfNames) {
    let initials = "";

    for (let i = 0; i < arrayOfNames.length; i++) {
        const element = arrayOfNames[i];
        const currentInitial = element[0];
        //initials = initials + currentInitial
        initials += currentInitial;
    }
    return initials;
}
const initials = getInitialOfNames(array2)
console.log('es 8', initials)



//9) contare tutti i caratteri di tutte le stringhe
//10) eliminare le vocali dalle stringhe

function removeVowels(arrayToString) {
    const vowels = "aeiou";
    let newStringWithoutVowels = [];

    for (let i = 0; i < arrayToString.length; i++) {

        let element = arrayToString[i];
        let elementWithoutVolwes = "";

        for (let j = 0; j < element.length; j++) {

            if (!vowels.includes(element[j])) {
                elementWithoutVolwes += element[j];
            }
        }
        newStringWithoutVowels.push(elementWithoutVolwes);
    }
    return newStringWithoutVowels;
}
const StringWithoutVowels = removeVowels(array2)
console.log('es 10', StringWithoutVowels)


//11) restituire un array di numeri che sono le lunghezze delle singole parole


const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array
function lengthOfArrays(values) {
    let result = []
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        const lengthOfSingleArray = element.length
        result.push(lengthOfSingleArray)
    }
    return result;
}
console.log("es 12", lengthOfArrays(array3))
//13) sommare tutti i numeri in tutti gli array

const sumAllNumbers = arrayToReduce => {
    let accumulator = 0;
    for (const singleArray of arrayToReduce) {
        for (const number of singleArray) {
            accumulator += number;
        }
    }
    return accumulator
}
const resultSummAllNumbers = sumAllNumbers(array3)
console.log('es 13', resultSummAllNumbers)



//14) sommare tutte le lunghezze degli array
function sumOfLengthOfArrays(values) {
    let result = 0
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        result = result + element.length
    }
    return result;
}
console.log("es 14", sumOfLengthOfArrays(array3))


//15) sommare tutti i numeri con l'indice uguale e restituire un array di risultati