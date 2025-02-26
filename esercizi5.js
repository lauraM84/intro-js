const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//1) filtrare tutti i numeri < o = a zero   (filter)
/* function isNegativeNumberAndZero1(nbr) {
    return nbr <= 0;
}
const negativeNumberAndZero1 = array1.filter(isNegativeNumberAndZero1 )*/
const negativeNumberAndZero = array1.filter(number => number <= 0)
/* function isNegativeNumberAndZero(nbr) {
    if (nbr <= 0) {
        return true;
    } else {
        false;
    }
}
const negativeNumberAndZero = array1.filter(isNegativeNumberAndZero); */
console.log('filtrare tutti i numeri < o = a zero', negativeNumberAndZero)

//2) convertitre in gradi fahrenheit ipotizzando che l'unità di partenza dia in celsius  (map)
/* const fromCToF = array1.map(number => (number * 9 / 5) + 32); */
/* console.log('da c a f', fromCToF); */

function convert(num) {
    const converted = (num * 9 / 5) + 32;
    return converted
}
const fromCToF = array1.map(convert)
console.log('da c a f', fromCToF);

//3) fare la media dei valori   (reduce)
const findAverage = array1.reduce((accumulator, current) => accumulator + current, 0) / array1.length

/* function sum(accumulator, current) {
    return accumulator + current
} */
//const findAverage = array1.reduce(sum, 0) / array1.length
console.log("fai media", findAverage)


//4) restituire il valore più basso e il più alto   (reduce)
const minMax = array1.reduce((a, c) => {

    if (a.min === null || c < a.min) {
        a.min = c
    }
    if (a.max === null || c > a.max) {
        a.max = c
    }
    return a
}, { min: null, max: null })
console.log('minmax', minMax)


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi più grandi di 4 caratteri    (filter)
const bigName = array2.filter(item => item.length > 4)
console.log('nome più lungo di 4 caratteri', bigName);


//6) trasforamre tutte le stringhe in maiscolo    (map)
const toUpperCase = array2.map(item => item.toUpperCase())
console.log('tutto maisculo', toUpperCase)


//7) mettere Solo le Iniziali in maiuscolo    (map)
const upperCasefirstLetter = array2.map(item => item.charAt(0).toUpperCase() + item.slice(1))
console.log('iniziali maiuscole1', upperCasefirstLetter)

function toUpperCaseFirstLetter(item) {
    const firstLetter = item.charAt(0)
    const firstletterToUpper = firstLetter.toUpperCase()
    const otherLetters = item.slice(1)
    return firstletterToUpper + otherLetters
}
console.log('iniziali maiuscole2', array2.map(toUpperCaseFirstLetter))


//8) restituire una stringa composta dalle iniziali di tutti i nomi   (reduce)
const allInitial = array2.reduce((a, c) => a + c.charAt(0), '')
console.log('tutte le iniziali', allInitial)


//9) sommare tutti i caratteri di tutte le stringhe    (reduce)
const allNames = array2.reduce((a, c) => a + c, '')
console.log('tutti i nomi', allNames)

//10) eliminare le vocali dalle stringhe    (map)
const onlyConsonant = array2.map(item => {
    const vowels = "aeiou";
    let elementWithoutVolwes = "";
    for (let j = 0; j < item.length; j++) {

        if (!vowels.includes(item[j])) {
            elementWithoutVolwes += item[j];
        }
    }
    return elementWithoutVolwes
})
console.log('via le vocali', onlyConsonant)


//11) restituire un array di numeri che sono le lunghezze delle singole parole     (map)


const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array     (map)


//13) sommare tutti i numeri in tutti gli array    (reduce)


//14) sommare tutte le lunghezze degli array       (reduce)


//15) sommare tutti i numeri con l'indice uguale e restituire un array di risultati    (reduce)
