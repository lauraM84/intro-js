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

// const secretNumber = Math.round(Math.random() * 10);


// while (true) {
//     const guessedString = prompt("indovina il numero che sto pensando")
//     const guessedNumber = parseInt(guessedString)
//     if (guessedNumber === secretNumber) {
//         alert("bravo")
//     } else { "schiappa" }
// }

// let startingString = '';
// while (startingString.length < 10) {
//     startingString = startingString + '*'
// }
// console.log(startingString);


//do...while  esegue il codice almeno una volta prima di entrare nel ciclo
// const pluto = 20;

// while (pippo > pluto) {
//     console.log('sono entrato!')
// }

// do {
//     console.log('sono entrato! nel ... do while')
// } while (pippo > pluto);



//FOR
// for (let i = 0; i < 10; i++) {
//     console.log('sono nel ciclo for e sto facendo il giro ' + i)
// }


// let startingString = ""
// for (; ;) {
//     startingString += '°'
//     if (startingString.length === 10) {
//         break;
//     }

// }
// console.log(startingString)

// for (let y = 0; y <= 3; y++) {
//     let row = ''
//     for (let x = 0; x <= 3; x++) {
//         row += `(x: ${x}, y: ${y})`
//     }
//     console.log(row)
// }



//SWITCH gestire scelte multiple molto lunghe

// const ageString = prompt('in che anno sei nato?')

// switch (ageString) {
//     case "1978":
//         alert("sei nato nel mio stesso anno");
//         break;

//     case "1990":
//         alert("sei naato nell'anno dei mondiali");
//         break;

//     case "1984":
//         alert("l'anno mio");
//         break;

//     case "1990":
//         alert("prima elementare");
//         break;

//     default:
//         alert("che anno noioso");
//         break;
// }
