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

console.log(negativeNumberAndZero(array1));

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

console.log(fromCToF(array1))

//3) fare la media dei valori

function average(arrayOfNumbers) {

    const newArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];

        const average = 
        
    }

}

//4) restituire il valore più basso e il più alto


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie']

//5) filtrare tutti i nomi più grandi di 4 caratteri
//6) trasforamre tutte le stringhe in maiscolo
//7) mettere Solo le Iniziali in maiuscolo
//8) restituire una stringa composta dalle iniziali di tutti i nomi
//9) contare tutti i caratteri di tutte le stringhe
//10) eliminare le vocali dalle stringhe
//11) restituire un array di numeri che sono le lunghezze delle singole parole


const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array
//13) sommare tutti i numeri in tutti gli array
//14) sommare tutte le lunghezze degli array
//15) sommare ttti i numeri con l'indice uguale e restituire un array di risultati