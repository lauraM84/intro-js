const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//1) filtrare tutti i numeri < o = a zero   (filter)
/* const negativeNumberAndZero = array1.filter(number => number <= 0) */
function isNegativeNumberAndZero(nbr) {
    if (nbr <= 0) {
        return true;
    } else {
        false;
    }
}
const negativeNumberAndZero = array1.filter(isNegativeNumberAndZero);
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
/* const findAverage = array1.reduce((a, c) => (a + c, 0) / array1.length) */

function findMean(accumulator, current, array) {
    const newAccoumulator = accumulator + current
    const meanAll = newAccoumulator / array.length
    return meanAll
}
const findAverage = array1.reduce(findMean, 0)
console.log("fai media", findAverage)

//4) restituire il valore più basso e il più alto   (reduce)


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi più grandi di 4 caratteri    (filter)


//6) trasforamre tutte le stringhe in maiscolo    (map)


//7) mettere Solo le Iniziali in maiuscolo    (map)


//8) restituire una stringa composta dalle iniziali di tutti i nomi   (reduce)


//9) sommare tutti i caratteri di tutte le stringhe    (reduce)


//10) eliminare le vocali dalle stringhe    (map)


//11) restituire un array di numeri che sono le lunghezze delle singole parole     (map)


const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array     (map)


//13) sommare tutti i numeri in tutti gli array    (reduce)


//14) sommare tutte le lunghezze degli array       (reduce)


//15) sommare tutti i numeri con l'indice uguale e restituire un array di risultati    (reduce)
