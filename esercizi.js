// let startingString = ""

// for (let i = 0; i <= 6; i++) {
//     startingString += "#"
//     console.log(startingString)
// }

// let i = 0;
// let startingString = ""
// while (i < 7) {
//     startingString += "#"
//     console.log(startingString)
//     i++
// }

// let startingString = ""

// while (startingString.length < 7) {
//     startingString += "#"
//     console.log(startingString)

// }

// let startingString = ""
// for (let i = 0; startingString.length < 7; i++) {
//     startingString += "#"
//     console.log(startingString)
// }

// let startingString = "";
// while (startingString.length <7 ){
//     startingString=startingString + "#\n";
//


// }
// console.log(startingString)



// numeri da 1 a 100, numeri divisibili per tre restituiscono fizz, numeri divisibili per 5 restituiscono buzz, se divi per 5 e 3 fizz buzz

// for (let number = 1; number <= 100; number++) {
//     // prima condizione - primo controllo
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz")
//         // seconda condizione - secondo controllo
//     } else if (number % 5 === 0) {
//         console.log("buzz")
//         // terza condizione - terzo controllo
//     } else if (number % 3 === 0) {
//         console.log("fizz")
//     }
//     else { //condizione finale
//         console.log(number)
//     }

// }

//grid chessbox 8x8

// for (let col = 0; col < 8; col++) {
//   if (row % 2 === 0) {
//     if (col % 2 === 0) {
//       cheeboard += ' ' //se la condizione è vera mette spazio, se no va all'alternativa
//     } else {
//       cheeboard += '#'
//     }
//   } else {
//     if (col %2===0){
//       cheeboard+= "#" // se la colonna e pari metto #
//     } else {
//       cheeboard+= " " // se la colonna è dispari metto ' '
//     }
//   }
// }

// righe che iniziano con lo spazio
// if (row % 2 === 0) {
//   // qui inizio a popolare le colonne 
//   for (let col = 0; col < 8; col++) {
//     // qui decido cosa metto nella colonna 
//     if (col % 2 === 0) {
//       cheeboard += ' ' //se la condizione è vera mette spazio, se no va all'alternativa
//     } else {
//       cheeboard += '#'
//     }
//   }
//   // righe che iniziano con #
// } else { 
//   //popola colonne
//   for (let col = 0; col < 8; col++) {
//     // qui decido cosa mettere
//     if (col %2===0){
//       cheeboard+= "#" // se la colonna e pari metto #
//     } else {
//       cheeboard+= " " // se la colonna è dispari metto ' '
//     }
//   }
// }
// qui ho finito il flow control 
cheeboard += '\n' // qui aggiungo new line 
  // qui posso andare a capo 
}
console.log(cheeboard)



// //usando un ciclo logga i numeri da 100 a -100
// for (let i = 100; i >= -100; i--) { //i parte da 100, faccio decrementare di uno (i--) fino a che non arrivo a -100 (>=100)
//     console.log(i);
// }