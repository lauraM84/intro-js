// console.log(console.log('ciao'));

//console.log(prompt("come ti chiami?"));

//const userName = prompt("come ti chiami?");

//console.log("ciao " + userName);

//alert("ciao " + userName);


//IF
// const userAgeString = prompt("quanti anni hai?");

// if (parseInt(userAge) > 18) {
//     console.log("benvenuto nel sito di incontri piccanti");
// } else {
//     console.log("torna a mangiare il gelatino");
// }

// const userAgeNumber = parseInt(userAgeString);

// if (userAgeNumber >= 18 && userAgeNumber < 80) {
//     console.log("benvenuto nel sito di incontri piccanti");
// } else if (userAgeNumber >= 80) {
//     console.log("il cuore potrebbe non reggere")
// } else {
//     console.log("torna a mangiare il gelatino");
// }

//CICLI

//while  è il più elastico di tutti

// let i = 0
// while (i < 11) {
//     console.log(i)
//     // i = i + 1; si può scrivere come qui sotto
//     i++;

// }
// console.log('ho finito il ciclo while')

// let j = 0
// while (j < 11) {
//     console.log(j)
//     // j = j + 2
//     j += 2;
// }
// console.log('ho finito il ciclo while!')

// let k = 10
// while (k >= 0) {
//     console.log(k);
//     //k -= 2;
//     k--
// }
// console.log('ho finito il ciclo while!')

// let i = 0;
// while (i <= 10) {
//     const square = i ** 2;
//     console.log(square);
//     i++
// }

const secretNumber = Math.round(Math.random() * 10);


while (true) {
    const guessedString = prompt("indovina il numero che sto pensando")
    const guessedNumber = parseInt(guessedString)
    if (guessedNumber === secretNumber) {
        alert("bravo")
    } else { "schiappa" }
}
